import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { translations } from '../data/translations';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// ─── NAVBAR GLASS & DISPLAY MANUAL CONFIGURATION ──────────────────────────────
// You can easily adjust the navbar glass transparency and blur here:
export const NAVBAR_GLASS_CONFIG = {
  // Transparency: 0.60 = 60% (very glassy), 0.75 = 75% (recommended), 0.90 = 90% (subtle)
  backgroundOpacity: 0.70,
  
  // Frosted blur amount in pixels: '12px' | '16px' | '20px' | '24px'
  backdropBlur: '16px',
  
  // Background base color: '#FFFFFF' (white glass) or '#F5F0EB' (canvas tinted glass)
  backgroundColor: '#FFFFFF',
  
  // Bottom border opacity (0.0 to 1.0)
  borderOpacity: 0.50,
  
  // Mobile drawer frosted opacity:
  drawerOpacity: 0.96,
};
// ───────────────────────────────────────────────────────────────────────────────

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
    <header 
      className="sticky top-0 z-40 transition-all duration-300 shadow-2xs"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${NAVBAR_GLASS_CONFIG.backgroundOpacity})`,
        backdropFilter: `blur(${NAVBAR_GLASS_CONFIG.backdropBlur})`,
        WebkitBackdropFilter: `blur(${NAVBAR_GLASS_CONFIG.backdropBlur})`,
        borderBottom: `1px solid rgba(232, 226, 218, ${NAVBAR_GLASS_CONFIG.borderOpacity})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">

          {/* Logo & Brand Name */}
          <Link
            to="/"
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-2.5 group cursor-pointer shrink-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-white/90 shadow-2xs border border-[#E8E2DA]/60 flex items-center justify-center shrink-0">
              <img
                src="/images/logo/original_Logo_Siva.png"
                alt="Siva Telugu Estates Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[14px] sm:text-[15px] font-bold tracking-tight text-[#1A1A1A] font-sans">
                Siva Telugu Estates
              </span>
              {/* <span className="text-[9px] text-[#888] font-sans tracking-widest uppercase">
                {t.region}
              </span> */}
            </div>
          </Link>

          {/* Desktop Navigation Links — Strictly hidden on mobile/medium (< 1200px), flex on desktop (xl) */}
          <nav className="site-nav hidden xl:flex" aria-label="Main site navigation">
            {navLinks.map(({ label, key, path }) => (
              <Link
                key={key}
                to={path}
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`nav-item ${activeNav === key ? 'active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Controls (xl: 1200px+) */}
          <div className="hidden xl:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#E8E2DA] hover:border-[#C8312A] text-[#444] hover:text-[#C8312A] text-xs font-sans font-semibold transition-all cursor-pointer bg-white/70 hover:bg-[#FCECEA]/80 backdrop-blur-xs"
              title="Switch language"
            >
              <Globe className="w-3.5 h-3.5 text-[#C8312A]" aria-hidden="true" />
              <span>{lang === 'en' ? 'తెలుగు' : 'English'}</span>
            </button>

            <button
              onClick={() => handleNavClick('/contact')}
              className="btn-red px-5 py-2.5 text-sm font-semibold cursor-pointer shadow-sm"
            >
              {t.bookVisit}
            </button>
          </div>

          {/* Medium, Tablet & Mobile Hamburger Controls (< 1200px: md, lg, sm, xs) */}
          <div className="flex xl:hidden items-center gap-2">
            {/* Language toggle button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-[#E8E2DA] text-[#333] text-[11px] font-sans font-semibold transition-all cursor-pointer bg-white/80 backdrop-blur-xs active:scale-95 shadow-2xs"
              aria-label="Switch language"
            >
              <Globe className="w-3 h-3 text-[#C8312A]" aria-hidden="true" />
              <span>{lang === 'en' ? 'తెలుగు' : 'English'}</span>
            </button>

            {/* Circular Hamburger / Close Button matching template media_1787649568778.png */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full border border-[#E8E2DA] bg-white/90 backdrop-blur-xs hover:bg-[#F5F0EB] text-[#1A1A1A] flex items-center justify-center transition-all active:scale-95 shadow-xs cursor-pointer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#1A1A1A]" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5 text-[#1A1A1A]" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Medium & Mobile Drawer Menu with Glassy Background */}
      {mobileMenuOpen && (
        <div 
          className="xl:hidden border-t border-[#E8E2DA]/80 shadow-2xl font-sans animate-in slide-in-from-top-1 duration-200"
          style={{
            backgroundColor: `rgba(255, 255, 255, ${NAVBAR_GLASS_CONFIG.drawerOpacity})`,
            backdropFilter: `blur(${NAVBAR_GLASS_CONFIG.backdropBlur})`,
            WebkitBackdropFilter: `blur(${NAVBAR_GLASS_CONFIG.backdropBlur})`,
          }}
        >
          <div className="flex flex-col">
            {navLinks.map(({ label, key, path }) => {
              const isActive = activeNav === key;
              return (
                <Link
                  key={key}
                  to={path}
                  onClick={() => handleNavClick(path)}
                  className={`block w-full text-left py-3.5 px-6 text-base transition-colors border-b border-[#F0EBE3] cursor-pointer ${
                    isActive
                      ? 'text-[#C8312A] font-semibold bg-[#FCECEA]/50'
                      : 'text-[#1A1A1A] font-normal hover:text-[#C8312A] hover:bg-[#F5F0EB]/60'
                  }`}
                >
                  {label}
                </Link>
              );
            })}

            {/* Drawer Bottom CTA */}
            <div className="p-5 bg-white/60">
              <button
                onClick={() => handleNavClick('/contact')}
                className="btn-red w-full py-3.5 text-sm font-semibold cursor-pointer shadow-md flex items-center justify-center"
              >
                {t.bookVisit}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
