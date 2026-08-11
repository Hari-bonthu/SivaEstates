import React, { useState } from 'react';
import { Phone, Globe, Menu, X, MapPin, Sparkles, Building2 } from 'lucide-react';
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
    <header className="sticky top-0 z-40 bg-navy-900/90 backdrop-blur-md border-b border-gold-500/20 shadow-xl">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 py-1.5 px-4 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4 text-slate-300">
            <span className="flex items-center text-gold-400 font-medium">
              <MapPin className="w-3.5 h-3.5 mr-1 text-gold-400" />
              <span>{t.rajahmundryHQ} &amp; {t.kakinadaBranch}</span>
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-300">
              DTCP &amp; VMRDA Approved Layouts
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 hover:bg-gold-500/20 transition-all text-xs font-semibold cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'తెలుగులోకి మార్చండి' : 'Switch to English'}</span>
            </button>
            <a 
              href="tel:+919851633333" 
              className="flex items-center text-gold-400 hover:text-gold-300 font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1 animate-pulse" />
              <span>{t.callUs}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-xl bg-gold-gradient p-0.5 shadow-lg group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                <Building2 className="w-7 h-7 text-gold-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-heading">
                  SIVA TELUGU
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-gold-500 font-heading">
                  ESTATES
                </span>
              </div>
              <p className="text-[11px] text-slate-400 tracking-wider uppercase font-medium">
                Rajahmundry &amp; Kakinada • Real Estate
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-gold-400 hover:bg-slate-800/50 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Book Site Visit CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="#contact"
              className="px-4 py-2.5 rounded-xl bg-gold-gradient text-navy-950 font-bold text-sm shadow-md hover:shadow-gold-500/20 hover:scale-105 transition-all flex items-center"
            >
              <Sparkles className="w-4 h-4 mr-1.5 fill-navy-950" />
              {t.bookVisit}
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-gold-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950/95 border-b border-gold-500/20 px-4 pt-2 pb-6 space-y-2 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-gold-500/10 hover:text-gold-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 rounded-xl bg-gold-gradient text-navy-950 font-bold shadow-lg"
            >
              {t.bookVisit}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
