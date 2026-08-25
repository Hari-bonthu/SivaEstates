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

  // Determine active nav key
  const getActiveKey = () => {
    const path = location.pathname;
    if (path === '/properties' || path === '/projects' || path.startsWith('/venture/')) return 'projects';
    if (path === '/about') return 'about';
    if (path === '/gallery') return 'gallery';
    if (path === '/offices' || path === '/branches') return 'offices';
    if (path === '/contact') return 'contact';
    return 'home';
  };

  const activeNav = getActiveKey();

  const navLinks = [
    { label: t.home, key: 'home', path: '/' },
    { label: t.projects || 'Projects', key: 'projects', path: '/properties' },
    { label: t.about || 'About', key: 'about', path: '/about' },
    { label: t.gallery || 'Gallery', key: 'gallery', path: '/gallery' },
    { label: t.offices || 'Offices', key: 'offices', path: '/offices' },
    { label: t.contact || 'Contact', key: 'contact', path: '/contact' },
  ];

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E0D5] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo & Brand Name */}
          <Link
            to="/"
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-3 group cursor-pointer shrink-0"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-[#E5E0D5] bg-white p-1 shadow-xs flex items-center justify-center shrink-0">
              <img
                src="./images/logo/original_Logo_Siva.png"
                alt="Siva Telugu Estates Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#1B1C1C] font-serif">
                Siva Telugu Estates
              </span>
              <span className="brand-subtitle text-[9px] tracking-[0.2em] text-[#6B6860]">
                Godavari Luxury Real Estate • Est. 2008
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (xl: 1200px+) */}
          <nav className="editorial-nav hidden xl:flex">
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

          {/* Desktop Right Side (xl: 1200px+) — Minimalist Globe Icon & Book CTA */}
          <div className="hidden xl:flex items-center space-x-3">
            {/* Minimalist Globe Toggle with zero background */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full text-[#6B6860] hover:text-[#1B1C1C] hover:bg-black/5 transition-colors cursor-pointer flex items-center justify-center"
              title={`Current: ${lang === 'en' ? 'English' : 'తెలుగు'} — Click to switch`}
              aria-label="Switch Language"
            >
              <Globe className="w-5 h-5" />
            </button>

            <button
              onClick={() => handleNavClick('/contact')}
              className="px-5 py-2.5 rounded-lg bg-[#1B1C1C] hover:bg-[#334537] text-white font-sans font-bold text-xs shadow-sm transition-all cursor-pointer tracking-[0.1em]"
            >
              {t.bookVisit || 'BOOK SITE VISIT'}
            </button>
          </div>

          {/* Medium, Tablet & Mobile Controls (< 1200px) */}
          <div className="flex xl:hidden items-center space-x-1.5">
            {/* Minimalist Globe Icon on Mobile with zero background */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full text-[#6B6860] hover:text-[#1B1C1C] hover:bg-black/5 transition-colors cursor-pointer flex items-center justify-center"
              title={`Current: ${lang === 'en' ? 'English' : 'తెలుగు'} — Click to switch`}
              aria-label="Switch Language"
            >
              <Globe className="w-5 h-5" />
            </button>

            {/* Circular Hamburger Button matching template */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full border border-[#E5E0D5] bg-white hover:bg-[#F9F7F2] text-[#1B1C1C] flex items-center justify-center transition-all active:scale-95 shadow-xs cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer with Clean Full-Width Dividers */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-[#E5E0D5] shadow-2xl font-sans animate-in slide-in-from-top-1 duration-200">
          <div className="flex flex-col">
            {navLinks.map(({ label, key, path }) => {
              const isActive = activeNav === key;
              return (
                <button
                  key={key}
                  onClick={() => handleNavClick(path)}
                  className={`block w-full text-left py-3.5 px-6 text-base transition-colors border-b border-[#F0EBE3] cursor-pointer ${
                    isActive
                      ? 'text-[#1B1C1C] font-semibold bg-[#F9F7F2]'
                      : 'text-[#636863] font-normal hover:text-[#1B1C1C] hover:bg-[#F9F7F2]/60'
                  }`}
                >
                  {label}
                </button>
              );
            })}

            {/* Drawer Bottom CTA */}
            <div className="p-5 bg-[#F9F7F2]">
              <button
                onClick={() => handleNavClick('/contact')}
                className="w-full py-3.5 rounded-xl bg-[#1B1C1C] hover:bg-[#334537] text-white font-bold text-xs tracking-[0.1em] transition-all shadow-sm"
              >
                {t.bookVisit || 'BOOK SITE VISIT'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
