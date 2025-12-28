
import React from 'react';
import { Target, Users, ShieldCheck, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 relative">
               <div className="aspect-square bg-gray-900 rounded-[4rem] overflow-hidden shadow-2xl relative group">
                  {/* Updated to the specific image provided by the user */}
                  <img 
                    src="https://af6815798a.imgdist.com/pub/bfra/knkjywkm/7en/j0x/04b/MrTankStandackGround.png" 
                    alt="Mr Tank Stand - Zimbabwe Professional Installation" 
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-in-out" 
                  />
                  {/* Subtle overlay to enhance the premium feel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent pointer-events-none"></div>
                  
                  {/* Live Work Indicator */}
                  <div className="absolute top-8 left-8 bg-brand/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl animate-pulse">
                    Signature Quality
                  </div>
               </div>
               
               <div className="absolute -bottom-10 -right-10 bg-gray-900 text-white p-12 rounded-[3rem] shadow-2xl hidden md:block border-4 border-white z-10">
                  <h4 className="text-5xl font-black italic mb-2 text-brand">15+</h4>
                  <p className="text-xs uppercase font-bold tracking-widest text-brand/80">Years of Engineering Excellence</p>
               </div>
            </div>
            <div className="flex-1">
               <span className="text-brand font-black uppercase text-xs tracking-[0.3em] mb-4 block">Our Story</span>
               <h2 className="text-5xl font-bold uppercase text-gray-900 mb-8 leading-tight">Elevating Water Storage Across Zimbabwe</h2>
               <p className="text-lg text-gray-600 leading-relaxed mb-6 font-medium">
                  Founded in Harare, Mr Tank Stand started with a simple mission: to provide the most reliable and safest water storage platforms in Zimbabwe. We saw the dangers of poorly constructed stands and set out to apply industrial-grade engineering to every home and farm.
               </p>
               <p className="text-lg text-gray-600 leading-relaxed mb-10">
                  Today, we are a team of certified welders, experienced plumbers, and dedicated engineers. We don't just "make stands"—we create permanent water security solutions with a focus on durability and craftsmanship.
               </p>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                     <div className="bg-brand/10 text-brand w-12 h-12 rounded-xl flex items-center justify-center">
                        <Target size={24} />
                     </div>
                     <h4 className="font-bold uppercase text-gray-900">Our Mission</h4>
                     <p className="text-sm text-gray-500">To secure the future of Zimbabwean water access through robust engineering and honest craftsmanship.</p>
                  </div>
                  <div className="space-y-4">
                     <div className="bg-brand/10 text-brand w-12 h-12 rounded-xl flex items-center justify-center">
                        <Users size={24} />
                     </div>
                     <h4 className="font-bold uppercase text-gray-900">Our Vision</h4>
                     <p className="text-sm text-gray-500">To be the trusted national standard for water tower construction and borehole integration.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center max-w-4xl">
           <h2 className="text-4xl font-bold uppercase text-gray-900 mb-16">The Mr Tank Stand Promise</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition">
                 <ShieldCheck size={48} className="text-brand mx-auto mb-6" />
                 <h4 className="font-bold uppercase text-gray-900 mb-4">Unmatched Safety</h4>
                 <p className="text-sm text-gray-500">Every weld is checked. Every stand is over-engineered to hold 150% of its rated capacity.</p>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition">
                 <Award size={48} className="text-brand mx-auto mb-6" />
                 <h4 className="font-bold uppercase text-gray-900 mb-4">Premium Materials</h4>
                 <p className="text-sm text-gray-500">We only use new, high-grade mild steel. No rusted scraps. No shortcuts.</p>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition">
                 <Users size={48} className="text-brand mx-auto mb-6" />
                 <h4 className="font-bold uppercase text-gray-900 mb-4">Community Focused</h4>
                 <p className="text-sm text-gray-500">We offer special discounts for schools, hospitals, and community borehole projects.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
