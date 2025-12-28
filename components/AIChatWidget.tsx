
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Mic, X, Send, User, Bot, Phone, Info, Volume2, CheckCircle } from 'lucide-react';
import { gemini } from '../services/geminiService';
import { LiveServerMessage, Blob } from '@google/genai';
import { CONTACT_INFO } from '../constants';

function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function createBlob(data: Float32Array): Blob {
  const l = data.length;
  const int16 = new Int16Array(l);
  for (let i = 0; i < l; i++) {
    int16[i] = data[i] * 32768;
  }
  return {
    data: encode(new Uint8Array(int16.buffer)),
    mimeType: 'audio/pcm;rate=16000',
  };
}

async function decodeAudioData(data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot' | 'system'; text: string }[]>([
    { role: 'bot', text: "Hi! I'm Linda, your Mr Tank Stand assistant. Need a quote or looking to book a site visit? How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [mode, setMode] = useState<'chat' | 'voice'>('chat');
  
  const currentInputRef = useRef('');
  const currentOutputRef = useRef('');
  const [displayInput, setDisplayInput] = useState('');
  const [displayOutput, setDisplayOutput] = useState('');

  const audioContextInRef = useRef<AudioContext | null>(null);
  const audioContextOutRef = useRef<AudioContext | null>(null);
  const sessionRef = useRef<any>(null);
  const nextStartTimeRef = useRef<number>(0);
  const activeSourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, displayInput, displayOutput, isTyping]);

  const stopVoiceSession = () => {
    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }
    activeSourcesRef.current.forEach(s => { try { s.stop(); } catch(e) {} });
    activeSourcesRef.current.clear();
    if (audioContextInRef.current) audioContextInRef.current.close();
    if (audioContextOutRef.current) audioContextOutRef.current.close();
    audioContextInRef.current = null;
    audioContextOutRef.current = null;
    nextStartTimeRef.current = 0;
    currentInputRef.current = '';
    currentOutputRef.current = '';
    setDisplayInput('');
    setDisplayOutput('');
  };

  const handleToolCall = (fc: any, sessionPromise: Promise<any>) => {
    if (fc.name === 'submitInquiry') {
      console.log('Linda is submitting inquiry:', fc.args);
      setMessages(prev => [...prev, { 
        role: 'system', 
        text: `✅ FORM SUBMITTED: I've successfully recorded a ${fc.args.projectType} inquiry for ${fc.args.fullName}. Our team will call you at ${fc.args.phone} shortly!` 
      }]);
      
      sessionPromise.then(session => {
        session.sendToolResponse({
          functionResponses: {
            id: fc.id,
            name: fc.name,
            response: { result: "Success: Inquiry saved to the database." },
          }
        });
      });
    }
  };

  const startVoiceSession = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const inCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      const outCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      audioContextInRef.current = inCtx;
      audioContextOutRef.current = outCtx;

      const sessionPromise = gemini.connectLive({
        onopen: () => {
          const source = inCtx.createMediaStreamSource(stream);
          const processor = inCtx.createScriptProcessor(4096, 1, 1);
          processor.onaudioprocess = (e) => {
            const inputData = e.inputBuffer.getChannelData(0);
            const pcmBlob = createBlob(inputData);
            sessionPromise.then(s => s && s.sendRealtimeInput({ media: pcmBlob }));
          };
          source.connect(processor);
          processor.connect(inCtx.destination);
        },
        onmessage: async (message: LiveServerMessage) => {
          if (message.toolCall) {
            for (const fc of message.toolCall.functionCalls) {
              handleToolCall(fc, sessionPromise);
            }
          }

          const audioData = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
          if (audioData && audioContextOutRef.current) {
            const ctx = audioContextOutRef.current;
            nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
            const buffer = await decodeAudioData(decode(audioData), ctx, 24000, 1);
            const source = ctx.createBufferSource();
            source.buffer = buffer;
            source.connect(ctx.destination);
            source.start(nextStartTimeRef.current);
            nextStartTimeRef.current += buffer.duration;
            activeSourcesRef.current.add(source);
            source.onended = () => activeSourcesRef.current.delete(source);
          }

          if (message.serverContent?.inputTranscription) {
            currentInputRef.current += message.serverContent.inputTranscription.text;
            setDisplayInput(currentInputRef.current);
          }
          if (message.serverContent?.outputTranscription) {
            currentOutputRef.current += message.serverContent.outputTranscription.text;
            setDisplayOutput(currentOutputRef.current);
          }
          
          if (message.serverContent?.turnComplete) {
            const fullIn = currentInputRef.current;
            const fullOut = currentOutputRef.current;
            
            setMessages(prev => {
              const next = [...prev];
              if (fullIn.trim()) next.push({ role: 'user', text: fullIn });
              if (fullOut.trim()) next.push({ role: 'bot', text: fullOut });
              return next;
            });

            currentInputRef.current = '';
            currentOutputRef.current = '';
            setDisplayInput('');
            setDisplayOutput('');
          }

          if (message.serverContent?.interrupted) {
            activeSourcesRef.current.forEach(s => { try { s.stop(); } catch(e) {} });
            activeSourcesRef.current.clear();
            nextStartTimeRef.current = 0;
            setDisplayOutput('');
          }
        },
        onerror: () => setMode('chat'),
      });
      sessionRef.current = await sessionPromise;
    } catch (err) {
      setMode('chat');
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);
    try {
      const response = await gemini.getChatResponse(userMsg);
      
      if (response.functionCalls) {
        for (const fc of response.functionCalls) {
          if (fc.name === 'submitInquiry') {
            setMessages(prev => [...prev, { 
              role: 'system', 
              text: `✅ FORM SUBMITTED: Thank you ${fc.args.fullName}. I've sent your ${fc.args.projectType} brief to our engineers. We'll call you at ${fc.args.phone}!` 
            }]);
          }
        }
      }

      if (response.text) {
        setMessages(prev => [...prev, { role: 'bot', text: response.text }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Connection error. Please call us directly!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  const toggleMode = () => {
    if (mode === 'chat') {
      setMode('voice');
      startVoiceSession();
    } else {
      setMode('chat');
      stopVoiceSession();
    }
  };

  return (
    <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-[999] flex flex-col items-end w-full sm:w-auto h-full sm:h-auto pointer-events-none">
      {isOpen && (
        <div className="bg-white w-full sm:w-[420px] h-full sm:h-[650px] sm:max-h-[90vh] sm:rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-gray-100 flex flex-col pointer-events-auto overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
          {/* Header */}
          <div className="bg-gray-900 text-white p-6 flex justify-between items-center shrink-0 border-b-2 border-brand">
            <div className="flex items-center gap-4">
              <div className="bg-brand w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-2xl shadow-xl shadow-brand/40 transform -rotate-6">L</div>
              <div>
                <h3 className="font-bold text-base leading-tight uppercase tracking-tighter">Linda (Assistant)</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`w-2 h-2 rounded-full ${mode === 'voice' ? 'bg-brand animate-ping' : 'bg-green-500 animate-pulse'}`}></span>
                  <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest">{mode === 'voice' ? 'Voice Active' : 'Online'}</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-800 rounded-2xl transition-all duration-300"><X size={24} /></button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-cool-50">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : (m.role === 'system' ? 'justify-center' : 'justify-start')} animate-in slide-in-from-bottom-3`}>
                <div className={`max-w-[85%] p-5 rounded-[1.5rem] text-[14px] leading-relaxed shadow-sm transition-all ${
                  m.role === 'user' ? 'bg-brand text-white rounded-tr-none shadow-brand/20' : 
                  m.role === 'system' ? 'bg-green-100 text-green-800 border-2 border-green-200 font-bold text-center' :
                  'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            
            {mode === 'voice' && (
              <div className="space-y-6 pt-6 border-t-2 border-brand/10">
                <div className="flex flex-col items-center py-6 text-center space-y-4">
                  <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center text-white relative shadow-2xl shadow-brand/40 animate-pulse">
                    <div className="absolute inset-0 bg-brand rounded-full animate-ping opacity-20"></div>
                    <Mic size={32} />
                  </div>
                  <p className="text-xs font-black uppercase text-brand tracking-[0.3em]">Linda is Listening...</p>
                </div>
                
                {displayInput && (
                  <div className="flex justify-end animate-in fade-in slide-in-from-right-2">
                    <div className="max-w-[85%] p-4 rounded-2xl text-xs bg-brand/5 text-brand italic border border-brand/20">
                      <span className="font-black uppercase text-[8px] block mb-2 opacity-50 tracking-widest">User Audio</span>
                      {displayInput}
                    </div>
                  </div>
                )}
                {displayOutput && (
                  <div className="flex justify-start animate-in fade-in slide-in-from-left-2">
                    <div className="max-w-[85%] p-4 rounded-2xl text-xs bg-white shadow-xl text-gray-700 border-2 border-brand/10">
                      <span className="font-black uppercase text-[8px] block mb-2 opacity-50 text-brand tracking-widest">Linda Speaking</span>
                      {displayOutput}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {isTyping && <div className="flex justify-start"><div className="bg-white px-5 py-3 rounded-2xl border border-gray-100 animate-pulse text-[10px] font-bold text-gray-400 uppercase tracking-widest">Linda is processing...</div></div>}
          </div>

          {/* Input Area */}
          <div className="p-6 border-t bg-white shrink-0 pb-safe shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.05)]">
            <div className="flex gap-4 items-center">
              <button 
                onClick={toggleMode} 
                className={`p-4 rounded-2xl transition-all shadow-xl active:scale-90 ${mode === 'voice' ? 'bg-brand text-white shadow-brand/40' : 'bg-gray-100 text-gray-700 hover:bg-brand hover:text-white'}`}
              >
                {mode === 'voice' ? <MessageSquare size={24} /> : <Mic size={24} />}
              </button>
              
              {mode === 'chat' ? (
                <div className="flex-1 flex gap-3">
                  <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()} 
                    placeholder="Ask Linda for a quote..." 
                    className="flex-1 bg-cool-50 border-2 border-transparent rounded-2xl px-6 py-4 text-sm font-medium focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all" 
                  />
                  <button onClick={handleSend} className="bg-brand text-white p-4 rounded-2xl hover:bg-brand-700 transition-all shadow-xl active:scale-95 shadow-brand/20">
                    <Send size={24} />
                  </button>
                </div>
              ) : (
                <div className="flex-1 bg-cool-50 rounded-2xl py-4 px-6 text-xs font-black uppercase text-brand text-center tracking-widest animate-pulse border-2 border-brand/10">
                  Voice Mode Active
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Launcher Icons */}
      <div className="flex flex-col gap-4 pointer-events-auto p-4 sm:p-0 mb-6 sm:mb-0">
        <a href={`tel:${CONTACT_INFO.phone}`} target="_blank" rel="noopener noreferrer" className="bg-brand text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 active:scale-90 flex items-center justify-center cta-glow">
          <Phone size={28} />
        </a>
        <button 
          onClick={() => { 
            const newOpen = !isOpen;
            setIsOpen(newOpen);
            if (!newOpen && mode === 'voice') stopVoiceSession();
          }} 
          className="bg-gray-900 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 active:scale-90 relative group flex items-center justify-center border-2 border-brand/50"
        >
          {isOpen ? <X size={28} /> : <Volume2 size={28} />}
          {!isOpen && (
            <span className="absolute right-full mr-6 top-1/2 -translate-y-1/2 bg-white text-gray-900 px-6 py-3 rounded-2xl text-[10px] font-black shadow-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border-2 border-brand/20 uppercase tracking-[0.2em] translate-x-4 group-hover:translate-x-0">
              Talk to Linda
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default AIChatWidget;
