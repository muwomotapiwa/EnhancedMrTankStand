
import React, { useState } from 'react';
import { GALLERY, TESTIMONIALS } from '../constants';
import { Star, MapPin, Search } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Residential', 'Industrial', 'Farm', 'Healthcare'];

  const filteredItems = filter === 'All' 
    ? GALLERY 
    : GALLERY.filter(item => item.category === filter);

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 uppercase">Our Proven Track Record</h1>
          <div className="h-2 w-32 bg-brand mb-8"></div>
          <p className="text-xl text-gray-600">Built to last, trusted to deliver. Browse our history of successful installations across Zimbabwe.</p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest transition border-2 ${
                filter === cat ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="group relative overflow-hidden rounded-3xl aspect-square shadow-xl">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-brand font-black text-xs uppercase tracking-widest mb-2">{item.category}</span>
                <h4 className="text-white font-bold text-xl uppercase">{item.title}</h4>
                <div className="mt-4 flex items-center gap-2 text-white/60 text-xs">
                  <MapPin size={12} /> Zimbabwe Site
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 uppercase">What Our Clients Say</h2>
            <div className="h-1.5 w-24 bg-brand mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed mb-8">"{t.content}"</p>
                <div>
                  <h5 className="font-black uppercase text-gray-900 text-sm">{t.name}</h5>
                  <p className="text-xs text-brand font-bold uppercase mt-1">{t.location} • {t.type}</p>
                </div>
                <div className="absolute top-10 right-10 text-gray-100">
                   <Star size={48} className="fill-current" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-24 bg-brand rounded-[3rem] p-12 text-center text-white shadow-2xl cta-glow">
           <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">Want to be our next success story?</h2>
           <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">Join hundreds of satisfied customers who trust Mr Tank Stand for their water security.</p>
           <a href="#/contact" className="bg-white text-brand px-10 py-5 rounded-2xl font-black uppercase text-lg hover:scale-105 transition shadow-2xl inline-block">
             Book My Site Visit
           </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
