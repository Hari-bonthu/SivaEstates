import React, { useState, useEffect } from 'react';
import { Phone, Globe, Menu, X } from 'lucide-react';
import { translations } from '../data/translations';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar({ lang, setLang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const t = translations[lang].nav;

  // Track active navigation tab based on location and scroll position
  useEffect(() => {
    if (location.pathname === '/properties') {
      setActiveNav('properties');
      return;
    }

    if (location.pathname === '/') {
      const handleScroll = () => {
        const sections = ['contact', 'trust', 'branches', 'ventures', 'home'];
        for (const sec of sections) {
          const el = document.getElementById(sec);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 160 && rect.bottom >= 160) {
              if (sec === 'ventures') setActiveNav('properties');
              else if (sec === 'trust') setActiveNav('about');
              else if (sec === 'branches') setActiveNav('branches');
              else if (sec === 'home') setActiveNav('home');
              return;
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname]);

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'te' : 'en');
  };

  const handleNavClick = (sectionId, navKey) => {
    setActiveNav(navKey);
    setMobileMenuOpen(false);

    if (navKey === 'properties' && location.pathname !== '/properties') {
      // If user wants full properties page
      navigate('/properties');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

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
            onClick={() => handleNavClick('home', 'home')}
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
              <span className="brand-subtitle">
                Godavari Luxury Real Estate • Est. 2008
              </span>
            </div>
          </Link>

          {/* User-Specified Editorial Navigation Bar */}
          <nav className="editorial-nav hidden lg:flex">
            <button
              onClick={() => handleNavClick('home', 'home')}
              className={`nav-item ${activeNav === 'home' ? 'active' : ''}`}
            >
              HOME
            </button>
            <button
              onClick={() => handleNavClick('ventures', 'properties')}
              className={`nav-item ${activeNav === 'properties' ? 'active' : ''}`}
            >
              PROPERTIES
            </button>
            <button
              onClick={() => handleNavClick('branches', 'branches')}
              className={`nav-item ${activeNav === 'branches' ? 'active' : ''}`}
            >
              BRANCHES
            </button>
            <button
              onClick={() => handleNavClick('trust', 'about')}
              className={`nav-item ${activeNav === 'about' ? 'active' : ''}`}
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
              onClick={() => handleNavClick('contact', 'contact')}
              className="px-5 py-2.5 rounded-lg bg-[#1B1C1C] hover:bg-[#334537] text-white font-sans font-bold text-xs shadow-sm transition-all cursor-pointer tracking-[0.1em]"
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
        <div className="lg:hidden bg-white border-b border-[#E5E0D5] px-4 pt-2 pb-6 space-y-3 shadow-lg font-sans text-xs">
          <button
            onClick={() => handleNavClick('home', 'home')}
            className={`block w-full text-left py-2 font-bold tracking-[0.15em] ${activeNav === 'home' ? 'text-[#1A1A1A]' : 'text-[#77736D]'}`}
          >
            HOME
          </button>
          <button
            onClick={() => handleNavClick('ventures', 'properties')}
            className={`block w-full text-left py-2 font-bold tracking-[0.15em] ${activeNav === 'properties' ? 'text-[#1A1A1A]' : 'text-[#77736D]'}`}
          >
            PROPERTIES
          </button>
          <button
            onClick={() => handleNavClick('branches', 'branches')}
            className={`block w-full text-left py-2 font-bold tracking-[0.15em] ${activeNav === 'branches' ? 'text-[#1A1A1A]' : 'text-[#77736D]'}`}
          >
            BRANCHES
          </button>
          <button
            onClick={() => handleNavClick('trust', 'about')}
            className={`block w-full text-left py-2 font-bold tracking-[0.15em] ${activeNav === 'about' ? 'text-[#1A1A1A]' : 'text-[#77736D]'}`}
          >
            ABOUT US
          </button>
          <div className="pt-3 border-t border-[#E5E0D5]">
            <button
              onClick={() => handleNavClick('contact', 'contact')}
              className="block w-full text-center py-3 rounded-lg bg-[#1B1C1C] text-white font-bold tracking-[0.1em]"
            >
              BOOK SITE VISIT
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
