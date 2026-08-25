import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { translations } from '../data/translations';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar({ lang = 'en', setLang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const t = translations[lang]?.nav || translations.en.nav;

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'te' : 'en');
  };

  // Determine active nav key from current path
  const getActiveKey = () => {
    const path = location.pathname;
    if (path === '/properties' || path === '/projects' || path.startsWith('/venture/')) return 'projects';
    if (path === '/about') return 'about';
    if (path === '/gallery') return 'gallery';
    if (path === '/offices') return 'offices';
    if (path === '/contact') return 'contact';
    return 'home';
  };

  const activeNav = getActiveKey();

  const navLinks = [
    { label: t.home, key: 'home', path: '/' },
    { label: t.projects, key: 'projects', path: '/properties' },
    { label: t.about, key: 'about', path: '/about' },
    { label: t.gallery, key: 'gallery', path: '/gallery' },
    { label: t.offices, key: 'offices', path: '/offices' },
    { label: t.contact, key: 'contact', path: '/contact' },
  ];

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8E2DA] shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">

          {/* Logo & Brand Name */}
          <Link
            to="/"
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-2 sm:space-x-2.5 group cursor-pointer shrink-0 min-w-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden bg-white flex items-center justify-center shrink-0 border border-[#E8E2DA]/60">
              <img
                src="./images/logo/original_Logo_Siva.png"
                alt="Siva Telugu Estates Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight min-w-0">
              <span className="text-[13px] sm:text-[15px] font-bold tracking-tight text-[#1A1A1A] font-sans truncate">
                Siva Telugu Estates
              </span>
              <span className="text-[8px] sm:text-[9px] text-[#888] font-sans tracking-widest uppercase truncate">
                {t.region || 'GODAVARI REGION'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links — to dedicated pages */}
          <nav className="site-nav hidden lg:flex">
            {navLinks.map(({ label, key, path }) => (
              <button
                key={key}
                onClick={() => handleNavClick(path)}
                className={`nav-item ${activeNav === key ? 'active' : ''}`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Right side: Language toggle + Book CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language toggle button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#E8E2DA] hover:border-[#C8312A] text-[#444] hover:text-[#C8312A] text-xs font-sans font-semibold transition-all cursor-pointer bg-[#F5F0EB]/60 hover:bg-[#FCECEA]"
              title="Switch language (తెలుగు / English)"
            >
              <Globe className="w-3.5 h-3.5 text-[#C8312A]" />
              <span>{lang === 'en' ? 'తెలుగు' : 'English'}</span>
            </button>

            {/* Book a site visit — red pill */}
            <button
              onClick={() => handleNavClick('/contact')}
              className="btn-red px-5 py-2.5 text-sm font-semibold cursor-pointer shadow-sm"
            >
              {t.bookVisit}
            </button>
          </div>

          {/* Mobile: language toggle + hamburger button */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-[#E8E2DA] text-[#333] text-[11px] font-sans font-semibold transition-all cursor-pointer bg-[#F5F0EB] active:scale-95"
              aria-label="Switch language"
            >
              <Globe className="w-3 h-3 text-[#C8312A]" />
              <span>{lang === 'en' ? 'తెలుగు' : 'English'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#F5F0EB] text-[#1A1A1A] border border-[#E8E2DA] active:scale-95 transition-transform"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer with 44px+ touch targets */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E8E2DA] px-4 pt-3 pb-6 space-y-1 shadow-xl font-sans animate-in slide-in-from-top-2 duration-200">
          {navLinks.map(({ label, key, path }) => (
            <button
              key={key}
              onClick={() => handleNavClick(path)}
              className={`flex items-center w-full text-left py-3 px-2 text-sm font-medium rounded-lg transition-colors ${
                activeNav === key ? 'text-[#C8312A] font-bold bg-[#FCECEA]/60' : 'text-[#444] hover:bg-[#F5F0EB]'
              }`}
            >
              {label}
            </button>
          ))}
          <div className="pt-3 border-t border-[#F0EBE3] mt-2">
            <button
              onClick={() => handleNavClick('/contact')}
              className="btn-red w-full py-3.5 text-sm font-semibold cursor-pointer shadow-md flex items-center justify-center"
            >
              {t.bookVisit}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
