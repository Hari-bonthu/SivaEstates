import React, { useState } from 'react';
import { Phone, Globe, Menu, X } from 'lucide-react';
import { translations } from '../data/translations';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar({ lang, setLang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const t = translations[lang].nav;

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'te' : 'en');
  };

  const scrollToSection = (e, sectionId) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
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
          <Link
            to="/"
            onClick={(e) => scrollToSection(e, 'home')}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#E5E0D5] bg-white p-1 shadow-xs flex items-center justify-center shrink-0">
              <img
                src="./images/logo/original_Logo_Siva.png"
                alt="Siva Telugu Estates Logo"
                className="w-full h-full object-contain"
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
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-mono font-bold tracking-widest uppercase text-[#2D2D2D]">
            <button
              onClick={(e) => scrollToSection(e, 'home')}
              className="hover:text-[#4A5D4E] transition-colors cursor-pointer"
            >
              HOME
            </button>
            <button
              onClick={(e) => scrollToSection(e, 'ventures')}
              className="hover:text-[#4A5D4E] transition-colors cursor-pointer"
            >
              PROPERTIES
            </button>
            <button
              onClick={(e) => scrollToSection(e, 'branches')}
              className="hover:text-[#4A5D4E] transition-colors cursor-pointer"
            >
              BRANCHES
            </button>
            <button
              onClick={(e) => scrollToSection(e, 'trust')}
              className="hover:text-[#4A5D4E] transition-colors cursor-pointer"
            >
              ABOUT US
            </button>
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+919851633333" className="text-xs font-mono font-bold text-[#1B1C1C] hover:text-[#4A5D4E]">
              +91 98516 33333
            </a>
            <button
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-5 py-2.5 rounded-lg bg-[#1B1C1C] hover:bg-[#334537] text-white font-mono font-bold text-xs shadow-sm transition-all cursor-pointer tracking-wider"
            >
              BOOK SITE VISIT
            </button>
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
          <button
            onClick={(e) => scrollToSection(e, 'home')}
            className="block w-full text-left py-2 text-[#1B1C1C] font-bold"
          >
            HOME
          </button>
          <button
            onClick={(e) => scrollToSection(e, 'ventures')}
            className="block w-full text-left py-2 text-[#2D2D2D]"
          >
            PROPERTIES
          </button>
          <button
            onClick={(e) => scrollToSection(e, 'branches')}
            className="block w-full text-left py-2 text-[#2D2D2D]"
          >
            BRANCHES
          </button>
          <button
            onClick={(e) => scrollToSection(e, 'trust')}
            className="block w-full text-left py-2 text-[#2D2D2D]"
          >
            ABOUT US
          </button>
          <div className="pt-3 border-t border-[#E5E0D5]">
            <button
              onClick={(e) => scrollToSection(e, 'contact')}
              className="block w-full text-center py-3 rounded-lg bg-[#1B1C1C] text-white font-bold tracking-wider"
            >
              BOOK SITE VISIT
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
