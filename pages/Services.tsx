
import React from 'react';
import { SERVICES, getWhatsAppUrl } from '../constants';
import { Shield, Zap, Settings, Wrench, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-900 py-32 text-center text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl font-bold uppercase mb-6">Our Expert Services</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">From concept to construction, we provide end-to-end water storage management for Zimbabwe's diverse terrain.</p>
        </div>
      </section>

      {/* Main Services Detail */}
      <section className="py-24">
        <div className="container mx-auto px-6 space-y-32">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className={`flex flex-col lg:items-center gap-16 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              <div className="flex-1">
                <div className="bg-brand/10 text-brand inline-block p-4 rounded-2xl mb-6">
                  <Settings size={32} />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 uppercase mb-6">{service.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">{service.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <CheckCircle size={18} className="text-brand shrink-0" />
                      <span className="text-sm font-bold text-gray-800 uppercase tracking-tight">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex gap-4">
                   <a href="#/contact" className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-black transition shadow-lg">Request Quote</a>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 border-[20px] border-white/10 rounded-[3rem]"></div>
                </div>
                {/* Accent box */}
                <div className={`absolute -bottom-10 ${idx % 2 === 0 ? '-right-10' : '-left-10'} bg-brand text-white p-8 rounded-3xl shadow-2xl hidden md:block max-w-[200px]`}>
                   <Shield size={40} className="mb-4" />
                   <p className="font-bold text-sm uppercase">10 Year Guarantee on Structure</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Site Visit Info */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
           <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                 <h2 className="text-4xl font-bold uppercase mb-6 leading-tight text-gray-900">Professional Site Visit & Survey</h2>
                 <p className="text-gray-600 text-lg mb-8">
                   Not sure where to place your tank or how high the stand should be? Our engineers conduct professional site surveys to check ground stability, pressure requirements, and plumbing layout.
                 </p>
                 <ul className="space-y-4 mb-10">
                    <li className="flex items-center gap-3 font-bold uppercase text-xs tracking-wider"><Zap size={16} className="text-brand" /> Soil Stability Assessment</li>
                    <li className="flex items-center gap-3 font-bold uppercase text-xs tracking-wider"><Zap size={16} className="text-brand" /> Height-to-Pressure Calculation</li>
                    <li className="flex items-center gap-3 font-bold uppercase text-xs tracking-wider"><Zap size={16} className="text-brand" /> $20 Standard Fee (Deducted from order)</li>
                 </ul>
                 <a 
                  href={getWhatsAppUrl("Hi Mr Tank Stand, I'd like to book a Professional Site Survey for $20. Please let me know your availability.")} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-brand-700 transition shadow-xl inline-block"
                 >
                    Book Survey via WhatsApp
                 </a>
              </div>
              <div className="flex-1">
                 <img 
                  src="https://af6815798a.imgdist.com/pub/bfra/knkjywkm/9vx/lps/yqf/site%20visit.jpeg" 
                  alt="Mr Tank Stand Professional Site Survey" 
                  className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition duration-500 w-full h-auto object-cover max-h-[600px]" 
                 />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
