
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ChevronDown } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<null | 'success'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 5000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-gray-900 py-24 md:py-32">
        <div className="container mx-auto px-6 text-center text-white">
           <span className="text-brand font-black uppercase text-xs tracking-[0.4em] mb-4 block animate-in fade-in slide-in-from-bottom-2">Contact Us</span>
           <h1 className="text-5xl md:text-7xl font-bold uppercase mb-6 tracking-tighter leading-tight">
             Ready to Secure <br/>Your <span className="text-brand">Water Future?</span>
           </h1>
           <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
             Professional engineering meets reliable service. Visit our workshop in Harare or request an on-site survey today.
           </p>
        </div>
      </section>

      <div className="container mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 -mt-16 relative z-10">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 flex items-start gap-6 group hover:border-brand/30 transition-all duration-300">
              <div className="bg-brand/10 text-brand p-4 rounded-2xl group-hover:bg-brand group-hover:text-white transition-all">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase text-gray-400 mb-1 tracking-widest">Call or WhatsApp</h4>
                <a href={`tel:${CONTACT_INFO.phone}`} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-gray-900 hover:text-brand transition-colors">{CONTACT_INFO.phone}</a>
                <p className="text-xs text-red-600 font-black mt-2 uppercase tracking-tighter">Emergency Support Available</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 flex items-start gap-6 group hover:border-brand/30 transition-all duration-300">
              <div className="bg-brand/10 text-brand p-4 rounded-2xl group-hover:bg-brand group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase text-gray-400 mb-1 tracking-widest">Email Support</h4>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-bold text-gray-900 hover:text-brand transition-colors">{CONTACT_INFO.email}</a>
                <p className="text-xs text-gray-500 font-medium">Fast response guaranteed.</p>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-[2.5rem] shadow-2xl flex items-start gap-6 relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
                <MapPin size={200} />
              </div>
              <div className="bg-brand text-white p-4 rounded-2xl relative z-10">
                <MapPin size={24} />
              </div>
              <div className="relative z-10">
                <h4 className="text-[10px] font-black uppercase text-gray-500 mb-1 tracking-widest">Main Workshop</h4>
                <p className="text-lg font-bold leading-snug">{CONTACT_INFO.address}</p>
                <p className="text-[10px] text-brand font-black mt-2 uppercase tracking-[0.2em]">Harare, Zimbabwe</p>
              </div>
            </div>
          </div>

          {/* Contact Form Container */}
          <div className="lg:col-span-8 bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl border border-gray-50">
            {formStatus === 'success' ? (
              <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                <div className="bg-green-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                  <CheckCircle2 size={48} className="text-green-500" />
                </div>
                <h2 className="text-4xl font-bold uppercase mb-4 tracking-tighter text-gray-900">Inquiry Sent</h2>
                <p className="text-xl text-gray-500 max-w-md mx-auto leading-relaxed">
                  Thank you! Linda and our engineering team will review your request and contact you within the hour.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-12 border-l-4 border-brand pl-6">
                   <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-tighter mb-2">Detailed Project Brief</h2>
                   <p className="text-gray-400 font-medium">Complete this form for a precision quote within 60 minutes.</p>
                </div>
                
                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10" onSubmit={handleSubmit}>
                  {/* Name Input */}
                  <div className="space-y-3 group">
                    <label className="text-[10px] font-black uppercase text-gray-500 tracking-[0.25em] ml-1 group-focus-within:text-brand transition-colors">Full Name</label>
                    <div className="relative">
                      <input 
                        required 
                        type="text" 
                        className="w-full bg-cool-50 border-2 border-gray-100 rounded-2xl px-6 py-5 text-gray-900 font-bold placeholder:text-gray-300 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all duration-300" 
                        placeholder="e.g. Samuel Moyo" 
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-3 group">
                    <label className="text-[10px] font-black uppercase text-gray-500 tracking-[0.25em] ml-1 group-focus-within:text-brand transition-colors">Phone (WhatsApp Preferred)</label>
                    <input 
                      required 
                      type="tel" 
                      className="w-full bg-cool-50 border-2 border-gray-100 rounded-2xl px-6 py-5 text-gray-900 font-bold placeholder:text-gray-300 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all duration-300" 
                      placeholder="+263 7..." 
                    />
                  </div>

                  {/* Classification Select */}
                  <div className="space-y-3 group">
                    <label className="text-[10px] font-black uppercase text-gray-500 tracking-[0.25em] ml-1 group-focus-within:text-brand transition-colors">Project Classification</label>
                    <div className="relative">
                      <select className="w-full bg-cool-50 border-2 border-gray-100 rounded-2xl px-6 py-5 text-gray-900 font-bold focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all duration-300 appearance-none">
                        <option>Residential Installation</option>
                        <option>Farm Irrigation Tower</option>
                        <option>Clinic / School Upgrade</option>
                        <option>Structural Reinforcement</option>
                        <option>Emergency Tank Leak Repair</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                    </div>
                  </div>

                  {/* Location Input */}
                  <div className="space-y-3 group">
                    <label className="text-[10px] font-black uppercase text-gray-500 tracking-[0.25em] ml-1 group-focus-within:text-brand transition-colors">Suburb / City</label>
                    <input 
                      required 
                      type="text" 
                      className="w-full bg-cool-50 border-2 border-gray-100 rounded-2xl px-6 py-5 text-gray-900 font-bold placeholder:text-gray-300 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all duration-300" 
                      placeholder="e.g. Mabelreign, Harare" 
                    />
                  </div>

                  {/* Requirements TextArea */}
                  <div className="md:col-span-2 space-y-3 group">
                    <label className="text-[10px] font-black uppercase text-gray-500 tracking-[0.25em] ml-1 group-focus-within:text-brand transition-colors">Project Requirements & Technical Details</label>
                    <textarea 
                      rows={5} 
                      className="w-full bg-cool-50 border-2 border-gray-100 rounded-[2rem] px-8 py-6 text-gray-900 font-bold placeholder:text-gray-300 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all duration-300" 
                      placeholder="Please specify: Tank size needed (e.g., 5000L), preferred stand height (e.g., 6m), and any existing borehole details."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="md:col-span-2 pt-4">
                    <button 
                      type="submit" 
                      className="w-full bg-brand bg-gradient-to-r from-brand to-brand-700 text-white py-6 md:py-8 rounded-[1.5rem] font-black uppercase text-sm md:text-lg tracking-[0.3em] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-2xl shadow-brand/30 flex items-center justify-center gap-4 group cta-glow"
                    >
                      <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
                      Submit Request
                    </button>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 opacity-60">
                       <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                         <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div> Response in 60m
                       </span>
                       <span className="hidden sm:block text-gray-300">|</span>
                       <span className="text-[10px] font-black uppercase tracking-widest">ISO 9001 Standards</span>
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold uppercase tracking-tight text-gray-900 mb-2">Visit Our Workshop</h3>
            <p className="text-gray-500 font-medium">Located on Samora Machel Avenue for easy transport access.</p>
          </div>
          
          <div className="rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,0.15)] h-[600px] relative border-[16px] border-white group">
             <iframe 
               src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.address)}&output=embed`}
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
             ></iframe>
             
             {/* Map Card */}
             <div className="absolute bottom-12 left-12 right-12 md:right-auto pointer-events-none">
                <div className="bg-gray-900/90 backdrop-blur-xl text-white p-8 md:p-10 rounded-[2.5rem] shadow-3xl border border-white/10 flex flex-col md:flex-row items-center gap-8">
                   <div className="bg-brand w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(31,94,255,0.6)] shrink-0">
                      <MapPin size={32} className="animate-bounce" />
                   </div>
                   <div>
                      <span className="font-black uppercase tracking-[0.3em] text-[10px] text-brand block mb-2">Operational Hub</span>
                      <span className="font-bold uppercase tracking-widest text-lg text-white block mb-1">{CONTACT_INFO.address}</span>
                      <span className="text-xs text-gray-400 font-medium tracking-tight">Harare CBD West • Main Fabricating Yard</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
