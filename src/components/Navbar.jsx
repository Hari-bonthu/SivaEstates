import React, { useState } from 'react';
import { Phone, Globe, Menu, X, MapPin } from 'lucide-react';
import { translations } from '../data/translations';

export default function Navbar({ lang, setLang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'te' : 'en');
  };

  const navLinks = [
    { name: t.home, href: "#home" },
    { name: t.branches, href: "#branches" },
    { name: t.ventures, href: "#ventures" },
    { name: t.videos, href: "#videos" },
    { name: t.trust, href: "#trust" },
    { name: t.contact, href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E0D5] shadow-xs">
      {/* Top Utility Bar */}
      <div className="bg-[#4A5D4E] py-2 px-4 text-xs text-white">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-3">
            <span className="flex items-center text-[#DBCBB0]">
              <MapPin className="w-3.5 h-3.5 mr-1 text-[#F5A623]" />
              <span className="font-medium">{t.rajahmundryHQ} &amp; {t.kakinadaBranch}</span>
            </span>
            <span className="hidden md:inline text-white/30">•</span>
            <span className="hidden md:inline text-white/90">
              DTCP &amp; VMRDA Approved Layouts
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white transition-all text-xs font-medium cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'తెలుగు' : 'English'}</span>
            </button>
            <a 
              href="tel:+919851633333" 
              className="flex items-center text-[#F5A623] hover:text-white font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1" />
              <span>+91 98516 33333</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Handcrafted Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <a href="#home" className="flex items-center space-x-3.5 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#E5E0D5] bg-white shadow-xs p-1 group-hover:border-[#4A5D4E] transition-colors flex items-center justify-center shrink-0">
              <img
                src="./images/logo/logo_original.jpg"
                alt="Siva Telugu Estates Logo"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#1B1C1C] font-serif leading-none">
                SIVA TELUGU <span className="text-[#4A5D4E]">ESTATES</span>
              </span>
              <span className="text-[11px] text-[#636863] tracking-wider uppercase font-sans font-medium mt-1">
                Real Estate Developer • Rajahmundry &amp; Kakinada
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-wider text-[#2D2D2D] hover:text-[#4A5D4E] transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Book Site Visit CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-[#4A5D4E] hover:bg-[#334537] text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
            >
              {t.bookVisit}
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#F9F7F2] text-[#2D2D2D] hover:text-[#4A5D4E] focus:outline-none border border-[#E5E0D5]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5E0D5] px-4 pt-2 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-sm font-semibold text-[#2D2D2D] hover:bg-[#F9F7F2] hover:text-[#4A5D4E] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-[#E5E0D5]">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 rounded-xl bg-[#4A5D4E] text-white font-bold shadow-sm"
            >
              {t.bookVisit}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
