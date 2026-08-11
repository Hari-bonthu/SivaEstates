import React, { useState } from 'react';
import { Phone, Globe, Menu, X, MapPin, Building2 } from 'lucide-react';
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
    { name: t.visualizer, href: "#visualizer" },
    { name: t.videos, href: "#videos" },
    { name: t.calculator, href: "#calculator" },
    { name: t.trust, href: "#trust" },
    { name: t.contact, href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0F1115]/95 backdrop-blur-md border-b border-white/10 shadow-2xl">
      {/* Top Banner Bar */}
      <div className="bg-[#0B0C0E] py-1.5 px-4 text-xs border-b border-white/5 font-mono">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4 text-slate-400">
            <span className="flex items-center text-[#F5A623]">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              <span>{t.rajahmundryHQ} &amp; {t.kakinadaBranch}</span>
            </span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="hidden md:inline text-slate-400">
              DTCP &amp; VMRDA Approved Layouts
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-[#1A1D23] border border-[#F5A623]/30 text-[#F5A623] hover:bg-[#F5A623]/20 transition-all text-xs font-semibold cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'తెలుగు' : 'English'}</span>
            </button>
            <a 
              href="tel:+919851633333" 
              className="flex items-center text-[#F5A623] hover:text-[#E0951C] font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1 animate-pulse" />
              <span>{t.callUs}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#F5A623] p-0.5 shadow-lg group-hover:scale-105 transition-transform flex items-center justify-center text-[#0F1115]">
              <Building2 className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-heading">
                SIVA TELUGU <span className="text-[#F5A623]">ESTATES</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-[#F5A623] hover:bg-[#1A1D23] transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-[#F5A623] hover:bg-[#E0951C] text-[#0F1115] font-extrabold text-sm shadow-md transition-all cursor-pointer"
            >
              {t.bookVisit}
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#1A1D23] text-slate-300 hover:text-[#F5A623] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F1115] border-b border-white/10 px-4 pt-2 pb-6 space-y-2 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-[#1A1D23] hover:text-[#F5A623] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 rounded-xl bg-[#F5A623] text-[#0F1115] font-extrabold shadow-lg"
            >
              {t.bookVisit}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
