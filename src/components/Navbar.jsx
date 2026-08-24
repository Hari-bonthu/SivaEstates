import React, { useState } from 'react';
import { Phone, Globe, Menu, X, ArrowUpRight } from 'lucide-react';
import { translations } from '../data/translations';

export default function Navbar({ lang, setLang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'te' : 'en');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E0D5]">
      {/* Top Banner Bar */}
      <div className="bg-[#1B1C1C] py-1.5 px-4 text-xs text-white font-mono">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-3 text-slate-300">
            <span className="text-[#F5A623] font-medium">Rajahmundry HQ &amp; Kakinada Branch</span>
            <span className="text-white/20">•</span>
            <span className="text-slate-300">DTCP &amp; VMRDA Approved Layouts</span>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-2.5 py-0.5 rounded bg-white/10 hover:bg-white/20 text-white transition-all text-[11px] font-medium cursor-pointer"
            >
              <Globe className="w-3 h-3" />
              <span>{lang === 'en' ? 'తెలుగు' : 'English'}</span>
            </button>
            <a 
              href="tel:+919851633333" 
              className="flex items-center text-[#F5A623] hover:text-white font-bold transition-colors"
            >
              <Phone className="w-3 h-3 mr-1" />
              <span>+91 98516 33333</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#E5E0D5] bg-white p-0.5 shadow-xs flex items-center justify-center shrink-0">
              <img
                src="./images/logo/logo_original.jpg"
                alt="Siva Telugu Estates Logo"
                className="w-full h-full object-contain rounded"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#1B1C1C] font-serif leading-none">
                Siva Telugu Estates
              </span>
              <span className="text-[10px] text-[#636863] tracking-widest uppercase font-mono mt-1">
                Godavari Luxury Real Estate • Est. 2008
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-mono font-bold tracking-widest uppercase text-[#2D2D2D]">
            <a href="#home" className="hover:text-[#4A5D4E] transition-colors border-b-2 border-[#1B1C1C] pb-0.5">HOME</a>
            <a href="#ventures" className="hover:text-[#4A5D4E] transition-colors">PROPERTIES</a>
            <a href="#branches" className="hover:text-[#4A5D4E] transition-colors">BRANCHES</a>
            <a href="#trust" className="hover:text-[#4A5D4E] transition-colors">ABOUT US</a>
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+919851633333" className="text-xs font-mono font-bold text-[#1B1C1C] hover:text-[#4A5D4E]">
              +91 98516 33333
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg bg-[#1B1C1C] hover:bg-[#334537] text-white font-mono font-bold text-xs shadow-sm transition-all cursor-pointer tracking-wider"
            >
              BOOK SITE VISIT
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#F9F7F2] text-[#2D2D2D] border border-[#E5E0D5]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5E0D5] px-4 pt-2 pb-6 space-y-3 shadow-lg font-mono text-xs">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#1B1C1C] font-bold">HOME</a>
          <a href="#ventures" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#2D2D2D]">PROPERTIES</a>
          <a href="#branches" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#2D2D2D]">BRANCHES</a>
          <a href="#trust" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#2D2D2D]">ABOUT US</a>
          <div className="pt-3 border-t border-[#E5E0D5]">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 rounded-lg bg-[#1B1C1C] text-white font-bold tracking-wider"
            >
              BOOK SITE VISIT
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
