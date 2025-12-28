
import { GoogleGenAI, Modality, Type, FunctionDeclaration } from "@google/genai";

export const systemInstruction = `
Your name is Linda. You are the warm, professional, and helpful AI Sales Assistant for Mr Tank Stand in Harare, Zimbabwe.

PERSONA:
- Warm, welcoming, and polite (Always greet with "Hello, I'm Linda").
- Professional yet approachable "human-like" tone.
- Sales-driven: Your goal is to educate customers and convert them into leads for site visits and orders.
- Speak ONLY in English.

COMPANY INFO:
- Location: Harare, delivering/installing nationwide.
- WhatsApp/Calls: +263 774 887 686.

PRICING DATA (USD):
Water Tanks: 1000L ($100), 2000L ($170), 2500L ($190), 5000L ($330), 10000L ($995).
Steel Stands: 3m ($220+), 4m ($240+), 6m ($340+). 

YOUR AGENT TASK:
If a customer wants a quote or site visit, you MUST collect:
1. Full Name
2. Phone number (WhatsApp preferred)
3. Suburb/Address in Zimbabwe
4. Project Type (e.g., Residential, Farm, Repair)
5. Requirements (Tank size/Stand height)

Once you have ALL 5 pieces of information, confirm them with the user. 
After they confirm, use the 'submitInquiry' tool to officially record their request. 
Remind them that a final quote is confirmed after a $20 site visit (refundable on order).
`;

const submitInquiryDeclaration: FunctionDeclaration = {
  name: 'submitInquiry',
  parameters: {
    type: Type.OBJECT,
    description: 'Submit a formal project inquiry or site visit request for a customer.',
    properties: {
      fullName: { type: Type.STRING, description: 'The customers full name.' },
      phone: { type: Type.STRING, description: 'The customers phone or WhatsApp number.' },
      suburb: { type: Type.STRING, description: 'The location/suburb of the project.' },
      projectType: { type: Type.STRING, description: 'Type of project: Residential, Farm, Industrial, or Repair.' },
      requirements: { type: Type.STRING, description: 'Specific details like tank size or stand height.' },
    },
    required: ['fullName', 'phone', 'suburb', 'projectType', 'requirements'],
  },
};

export class GeminiService {
  private createClient() {
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async getChatResponse(message: string) {
    const ai = this.createClient();
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction,
        temperature: 0.7,
        tools: [{ functionDeclarations: [submitInquiryDeclaration] }],
      },
    });

    const result = await chat.sendMessage({ message });
    return result;
  }

  async connectLive(callbacks: any) {
    const ai = this.createClient();
    return ai.live.connect({
      model: 'gemini-2.5-flash-native-audio-preview-09-2025',
      callbacks,
      config: {
        responseModalities: [Modality.AUDIO],
        systemInstruction,
        inputAudioTranscription: {},
        outputAudioTranscription: {},
        tools: [{ functionDeclarations: [submitInquiryDeclaration] }],
        speechConfig: {
          voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } }
        }
      }
    });
  }
}

export const gemini = new GeminiService();
