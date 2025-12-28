
import React, { useState } from 'react';
import { Menu, X, Phone, Calendar, ClipboardList, MapPin, Mail, Instagram, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#/' },
    { name: 'About', href: '#/about' },
    { name: 'Products', href: '#/products' },
    { name: 'Services', href: '#/services' },
    { name: 'Portfolio', href: '#/portfolio' },
    { name: 'Contact', href: '#/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-brand">
      <div className="bg-gray-900 text-white text-[10px] sm:text-xs py-2 px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="hidden md:flex items-center gap-1"><MapPin size={12} /> {CONTACT_INFO.address}</span>
          <a href={`tel:${CONTACT_INFO.phone}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-bold text-brand animate-pulse hover:text-white transition-colors">
            <Phone size={12} /> Call Us: {CONTACT_INFO.phone}
          </a>
        </div>
        <div className="hidden sm:flex gap-4">
          <span>{CONTACT_INFO.hours}</span>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#/" className="flex items-center gap-2">
          <div className="bg-gray-900 p-2 rounded transform -skew-x-12">
            <span className="text-white font-black text-xl italic tracking-tighter flex items-center gap-1">
              MR TANK STAND <span className="w-2 h-2 bg-brand rounded-full"></span>
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="font-bold text-gray-800 hover:text-brand transition uppercase text-sm">
              {link.name}
            </a>
          ))}
          <a 
            href="#/contact" 
            className="bg-brand text-white px-5 py-2.5 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-brand-700 transition shadow-lg cta-glow flex items-center gap-2"
          >
            <Calendar size={14} /> Book Site Visit
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-gray-900">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-bold text-gray-800 border-b pb-2 hover:text-brand"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#/contact" 
            onClick={() => setIsMenuOpen(false)}
            className="bg-brand text-white p-4 rounded-xl font-bold uppercase text-center shadow-lg"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="bg-white p-2 rounded inline-block">
             <a href="#/" className="text-gray-900 font-black text-xl italic tracking-tighter uppercase flex items-center gap-1">Mr Tank Stand <span className="w-2 h-2 bg-brand rounded-full"></span></a>
          </div>
          <p className="text-sm leading-relaxed">
            Zimbabwe's leading specialist in water storage systems. We design, manufacture, and install premium tank stands for a lifetime of service.
          </p>
          <div className="flex gap-4">
            <Facebook className="hover:text-white cursor-pointer" />
            <Instagram className="hover:text-white cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase mb-6 border-l-4 border-brand pl-3">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#/products" className="hover:text-brand transition-colors">Stand Pricing</a></li>
            <li><a href="#/services" className="hover:text-brand transition-colors">Installation Services</a></li>
            <li><a href="#/portfolio" className="hover:text-brand transition-colors">Our Portfolio</a></li>
            <li><a href="#/about" className="hover:text-brand transition-colors">About Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase mb-6 border-l-4 border-brand pl-3">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 items-start"><MapPin size={18} className="text-brand shrink-0" /> {CONTACT_INFO.address}</li>
            <li className="flex gap-3 items-center">
              <a href={`tel:${CONTACT_INFO.phone}`} target="_blank" rel="noopener noreferrer" className="flex gap-3 items-center hover:text-brand transition-colors">
                <Phone size={18} className="text-brand shrink-0" /> {CONTACT_INFO.phone}
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex gap-3 items-center hover:text-brand transition-colors">
                <Mail size={18} className="text-brand shrink-0" /> {CONTACT_INFO.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase mb-6 border-l-4 border-brand pl-3">Payments</h4>
          <div className="grid grid-cols-2 gap-2 text-[10px] font-bold uppercase">
            <div className="bg-gray-800 p-2 rounded text-center border border-gray-700">USD Cash</div>
            <div className="bg-gray-800 p-2 rounded text-center border border-gray-700">EcoCash</div>
            <div className="bg-gray-800 p-2 rounded text-center border border-gray-700">ZIPIT</div>
            <div className="bg-gray-800 p-2 rounded text-center border border-gray-700">Bank Transfer</div>
          </div>
          <p className="mt-4 text-xs text-gray-500 font-bold uppercase text-brand">Free Harare Delivery!</p>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Mr Tank Stand Zimbabwe. All Rights Reserved. Designed by Premium Web Solutions.
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
