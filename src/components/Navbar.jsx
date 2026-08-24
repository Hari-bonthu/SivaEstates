import React, { useState } from 'react';
import { Phone, Globe, Menu, X, MapPin, Building2, Camera } from 'lucide-react';
import { translations } from '../data/translations';

export default function Navbar({ lang, setLang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'te' : 'en');
  };

  const navLinks = [
    { name: t.home, href: "#home" },
    { name: t.ventures, href: "#ventures" },
    { name: t.gallery, href: "#gallery" },
    { name: t.branches, href: "#branches" },
    { name: t.videos, href: "#videos" },
    { name: t.trust, href: "#trust" },
    { name: t.contact, href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-40 glass-header shadow-sm">
      {/* Top Banner Bar */}
      <div className="bg-[#4A5D4E] py-1.5 px-4 text-xs text-white font-mono">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-[#DBCBB0]">
              <MapPin className="w-3.5 h-3.5 mr-1 text-[#F5A623]" />
              <span>{t.rajahmundryHQ} &amp; {t.kakinadaBranch}</span>
            </span>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:inline text-white/90">
              DTCP &amp; VMRDA Approved Layouts
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all text-xs font-semibold cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'తెలుగు' : 'English'}</span>
            </button>
            <a 
              href="tel:+919851633333" 
              className="flex items-center text-[#F5A623] hover:text-white font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1 animate-pulse" />
              <span>{t.callUs}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Multi-Purpose Branding */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#DBCBB0] shadow-md group-hover:scale-105 transition-transform bg-white flex items-center justify-center p-0.5">
              <img
                src="./images/logo/logo_original.jpg"
                alt="Siva Telugu Estates Logo"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#1B1C1C] font-serif">
                SIVA TELUGU <span className="text-[#4A5D4E]">ESTATES</span>
              </span>
              <p className="text-[10px] text-[#636863] tracking-widest uppercase font-mono">
                Quiet Luxury • Rajahmundry &amp; Kakinada
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#2D2D2D] hover:text-[#4A5D4E] hover:bg-[#F0EDED] transition-all font-sans"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Book Site Visit CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-[#4A5D4E] hover:bg-[#334537] text-white font-bold text-xs shadow-md transition-all cursor-pointer font-mono tracking-wider"
            >
              {t.bookVisit}
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#F0EDED] text-[#2D2D2D] hover:text-[#4A5D4E] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5E0D5] px-4 pt-2 pb-6 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-[#2D2D2D] hover:bg-[#F9F7F2] hover:text-[#4A5D4E] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#E5E0D5]">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 rounded-xl bg-[#4A5D4E] text-white font-bold font-mono text-xs shadow-md"
            >
              {t.bookVisit}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
