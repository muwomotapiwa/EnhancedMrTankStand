
import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Truck, Zap, Star, Phone, CheckCircle2, MapPin } from 'lucide-react';
import { SERVICES, TESTIMONIALS, CONTACT_INFO, getWhatsAppUrl } from '../constants';

const Home: React.FC = () => {
  const [formStatus, setFormStatus] = useState<null | 'success'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 5000);
  };

  return (
    <div className="space-y-0 bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2070" 
            alt="Steel Construction" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block bg-brand text-white px-4 py-1.5 rounded text-xs font-bold uppercase tracking-widest mb-6 shadow-lg shadow-brand/20">
              Premium Engineering • Zimbabwe
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 uppercase">
              Strong Stands. <br/>
              <span className="text-brand">Pure Water.</span> <br/>
              Zero Hassle.
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
              Zimbabwe's #1 specialist for premium steel tank stands, full water installations, and professional site audits. 
              <span className="block mt-2 font-bold text-white italic">Trusted by thousands of homes, farms & clinics.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#/contact" className="bg-brand text-white px-8 py-4 rounded-xl font-bold uppercase text-sm tracking-widest hover:bg-brand-700 transition shadow-xl flex items-center justify-center gap-2">
                Get a Fast Quote <ArrowRight size={18} />
              </a>
              <a href="#/portfolio" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold uppercase text-sm tracking-widest hover:bg-white/20 transition flex items-center justify-center gap-2">
                View Past Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 uppercase">Our Core Specialities</h2>
              <div className="h-1.5 w-24 bg-brand mb-6"></div>
              <p className="text-gray-600">From precision fabrication to expert on-site installations, we handle everything required for a reliable water storage system.</p>
            </div>
            <a href="#/services" className="text-brand font-bold uppercase text-sm tracking-widest flex items-center gap-2 hover:translate-x-1 transition">
              View All Services <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group p-8 bg-cool-50 rounded-3xl border border-gray-100 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-2">
                <div className="bg-brand/10 text-brand w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition">
                   <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase">{service.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-[10px] font-black uppercase opacity-80">
                      <Zap size={12} className="text-brand" /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#/services" className="text-xs font-black uppercase underline decoration-brand decoration-2 underline-offset-4 tracking-widest">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-24 bg-brand text-white relative overflow-hidden shadow-inner">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase">Tank Leaking? Stand Leaning?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-xl">
                Don't risk structural collapse. Our team is available for critical repairs and rapid reinforcements across Harare.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={`tel:${CONTACT_INFO.phone}`} target="_blank" rel="noopener noreferrer" className="bg-white text-brand px-8 py-4 rounded-xl font-black text-lg shadow-2xl flex items-center gap-2 hover:scale-105 transition">
                  <Phone size={24} /> {CONTACT_INFO.phone}
                </a>
                <a 
                  href={getWhatsAppUrl("URGENT: I have a water storage emergency (leaking tank/leaning stand) and need immediate assistance in Harare.")} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold uppercase flex items-center gap-2 border border-white/20 hover:bg-black transition"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>
            <div className="hidden lg:block relative">
               <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/20 rotate-3">
                  <span className="text-white/60 text-xs font-black uppercase block mb-2 tracking-[0.2em]">Delivery Info</span>
                  <p className="text-2xl font-black italic uppercase">Free Harare Delivery</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Location Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand font-black uppercase text-xs tracking-[0.3em] mb-4 block">Our Workshop</span>
              <h2 className="text-4xl font-bold uppercase text-gray-900 mb-6 leading-tight">Visit Us In Harare</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Come see our engineering process firsthand. Our main workshop is conveniently located on Samora Machel Avenue, where we fabricate all our precision steel stands and stock our premium water tanks.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <div className="bg-brand/10 text-brand p-3 rounded-xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase text-xs">Physical Address</h4>
                    <p className="text-gray-600 font-medium">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <div className="bg-brand/10 text-brand p-3 rounded-xl">
                    <Truck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase text-xs">Deliveries & Pickups</h4>
                    <p className="text-gray-600 font-medium">Monday - Saturday (Check Hours)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[450px] relative border-8 border-cool-50 group">
              <iframe 
                src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.address)}&output=embed`}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
              <div className="absolute top-6 left-6">
                <div className="bg-gray-900 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand rounded-full animate-ping"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest">Live Workshop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="quote-form" className="py-24 bg-cool-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl transform md:-translate-y-12 border border-gray-100">
            {formStatus === 'success' ? (
              <div className="text-center py-20 animate-in fade-in zoom-in">
                <CheckCircle2 size={64} className="text-brand mx-auto mb-6" />
                <h2 className="text-3xl font-bold uppercase mb-2">Inquiry Sent!</h2>
                <p className="text-gray-500">Linda or one of our engineers will call you back shortly.</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-tight">Request a Quotation</h2>
                  <p className="text-gray-400 font-medium">Fast-track your water security project today.</p>
                </div>
                
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">Full Name</label>
                    <input required type="text" className="w-full bg-cool-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand outline-none transition-all" placeholder="Enter name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">WhatsApp Number</label>
                    <input required type="tel" className="w-full bg-cool-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand outline-none transition-all" placeholder="+263 ..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">Suburb</label>
                    <input required type="text" className="w-full bg-cool-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand outline-none transition-all" placeholder="e.g. Mabelreign" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">Service</label>
                    <select className="w-full bg-cool-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand outline-none transition-all">
                      <option>New Tank + Stand</option>
                      <option>Stand Only</option>
                      <option>Repair Service</option>
                      <option>Site Visit Booking</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">Message</label>
                    <textarea rows={3} className="w-full bg-cool-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <div className="md:col-span-2 mt-4">
                    <button type="submit" className="w-full bg-brand text-white p-6 rounded-2xl font-black uppercase text-sm tracking-[0.2em] hover:bg-brand-700 transition shadow-2xl cta-glow">
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
