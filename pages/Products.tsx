
import React from 'react';
import { PRODUCTS, getWhatsAppUrl } from '../constants';
import { ShoppingCart, Check, Info, Truck } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <div className="py-20 bg-cool-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 uppercase">Water Solutions Catalog</h1>
          <div className="h-2 w-32 bg-brand mb-8"></div>
          <p className="text-xl text-gray-600 font-medium">Premium water tanks and precision-engineered steel stands. Built for Zimbabwe, priced for value.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map(product => (
            <div key={product.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 group">
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                />
                <div className="absolute top-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl">
                  {product.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2 uppercase tracking-tight text-gray-900">{product.name}</h3>
                <p className="text-brand font-black text-2xl mb-6">{product.priceRange}</p>
                
                <div className="space-y-3 mb-8">
                  <p className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">Specifications:</p>
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[13px] text-gray-600 font-medium">
                      <Check size={16} className="text-brand shrink-0" /> {spec}
                    </div>
                  ))}
                </div>

                <a 
                  href={getWhatsAppUrl(`Hello Mr Tank Stand, I'd like to order the ${product.name} (${product.priceRange}) listed on your website.`)} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-900 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] text-center block hover:bg-brand transition-all shadow-lg active:scale-95"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Pricing Tiers Table */}
        <div className="mt-24 bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-gray-100">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-tight">Full Price Guide</h2>
            <p className="text-gray-400 font-medium mt-2">Accurate pricing for Harare and surroundings. Confirmed after site visit.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             {/* Tanks Table */}
             <div>
                <h4 className="text-xs font-black uppercase text-brand tracking-[0.3em] mb-6 border-b border-brand/20 pb-2">Water Tanks</h4>
                <div className="space-y-4">
                   {[
                     { l: '1000L', p: '$100' },
                     { l: '2000L', p: '$170' },
                     { l: '2500L', p: '$190' },
                     { l: '5000L', p: '$330' },
                     { l: '10000L', p: '$995' },
                   ].map((item, i) => (
                     <a 
                      key={i} 
                      href={getWhatsAppUrl(`Hello, I'm interested in a ${item.l} Water Tank priced at ${item.p}. Can you please help me with the order process?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-between items-center py-3 border-b border-gray-50 group hover:bg-cool-50 px-2 transition-colors rounded-lg"
                     >
                        <span className="font-bold text-gray-800 group-hover:text-brand transition-colors">{item.l} Capacity</span>
                        <span className="font-black text-brand">{item.p}</span>
                     </a>
                   ))}
                </div>
             </div>

             {/* Stands Table */}
             <div>
                <h4 className="text-xs font-black uppercase text-brand tracking-[0.3em] mb-6 border-b border-brand/20 pb-2">Steel Stands</h4>
                <div className="space-y-4 overflow-y-auto max-h-[400px]">
                   {[
                     { h: '3m Stand (2000L)', p: '$220' },
                     { h: '4m Stand (2000L)', p: '$240' },
                     { h: '6m Stand (2000L)', p: '$340' },
                     { h: '3m Stand (5000L)', p: '$300' },
                     { h: '4m Stand (5000L)', p: '$350' },
                     { h: '6m Stand (5000L)', p: '$500' },
                     { h: '3m Stand (10000L)', p: '$550' },
                     { h: '4m Stand (10000L)', p: '$650' },
                     { h: '6m Stand (10000L)', p: '$800' },
                   ].map((item, i) => (
                     <a 
                      key={i} 
                      href={getWhatsAppUrl(`Hi Mr Tank Stand, I'd like to inquire about the ${item.h} priced at ${item.p}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-between items-center py-3 border-b border-gray-50 group hover:bg-cool-50 px-2 transition-colors rounded-lg"
                     >
                        <span className="font-bold text-gray-800 group-hover:text-brand transition-colors">{item.h}</span>
                        <span className="font-black text-brand">{item.p}</span>
                     </a>
                   ))}
                </div>
             </div>
          </div>

          {/* Delivery Info */}
          <div className="mt-16 bg-gray-900 text-white rounded-[2rem] p-8 md:p-12">
             <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                   <div className="bg-brand p-5 rounded-2xl shadow-xl">
                      <Truck size={32} />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold uppercase tracking-tight">Delivery Fees</h3>
                      <p className="text-gray-400 text-sm">Nationwide delivery from our Harare workshop.</p>
                   </div>
                </div>
                <div className="flex flex-wrap gap-4">
                   <div className="bg-white/10 px-6 py-3 rounded-xl border border-white/10">
                      <span className="block text-[10px] uppercase font-black text-brand mb-1">Harare Urban</span>
                      <span className="text-xl font-black italic">FREE ($0)</span>
                   </div>
                   <div className="bg-white/10 px-6 py-3 rounded-xl border border-white/10">
                      <span className="block text-[10px] uppercase font-black text-brand mb-1">Greater Harare</span>
                      <span className="text-xl font-black italic">$25</span>
                   </div>
                   <div className="bg-white/10 px-6 py-3 rounded-xl border border-white/10">
                      <span className="block text-[10px] uppercase font-black text-brand mb-1">Regional</span>
                      <span className="text-xl font-black italic">$60</span>
                   </div>
                </div>
             </div>
          </div>
          
          <div className="mt-10 flex items-start gap-3 bg-cool-50 p-6 rounded-2xl text-[11px] text-gray-500 font-medium">
            <Info size={16} className="text-brand shrink-0" />
            <p>Estimates exclude special site works (e.g., sloping ground, rock excavation). Final quotes confirmed after site check. Payment: USD Cash, EcoCash, or Bank Transfer on delivery.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
