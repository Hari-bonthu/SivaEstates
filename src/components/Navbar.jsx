import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, Phone } from 'lucide-react';
import { translations } from '../data/translations';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar({ lang, setLang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  // Track active navigation tab based on location and scroll position
  useEffect(() => {
    if (location.pathname === '/properties') {
      setActiveNav('projects');
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
              if (sec === 'ventures') setActiveNav('projects');
              else if (sec === 'trust') setActiveNav('about');
              else if (sec === 'branches') setActiveNav('offices');
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

    if (navKey === 'projects' && location.pathname !== '/properties') {
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

  const navLinks = [
    { label: 'Home', key: 'home', section: 'home' },
    { label: 'Projects', key: 'projects', section: 'ventures' },
    { label: 'About', key: 'about', section: 'trust' },
    { label: 'Gallery', key: 'gallery', section: 'videos' },
    { label: 'Offices', key: 'offices', section: 'branches' },
    { label: 'Contact', key: 'contact', section: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E8E2DA] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo & Brand */}
          <Link
            to="/"
            onClick={() => handleNavClick('home', 'home')}
            className="flex items-center space-x-2.5 group cursor-pointer shrink-0"
          >
            <div className="w-9 h-9 rounded-lg overflow-hidden bg-white flex items-center justify-center shrink-0">
              <img
                src="./images/logo/original_Logo_Siva.png"
                alt="Siva Telugu Estates Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[14px] font-bold tracking-tight text-[#1A1A1A] font-sans">
                Siva Telugu Estates
              </span>
              <span className="text-[9px] text-[#AAA] font-sans tracking-widest uppercase">
                Godavari Region
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="site-nav hidden lg:flex">
            {navLinks.map(({ label, key, section }) => (
              <button
                key={key}
                onClick={() => handleNavClick(section, key)}
                className={`nav-item ${activeNav === key ? 'active' : ''}`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Right side: Language toggle + Book CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language toggle — clean pill */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E8E2DA] hover:border-[#C8312A] text-[#555] hover:text-[#C8312A] text-xs font-sans font-medium transition-all cursor-pointer"
              title="Switch language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'తెలుగు' : 'English'}</span>
            </button>

            {/* Book a site visit — red pill */}
            <button
              onClick={() => handleNavClick('contact', 'contact')}
              className="btn-red px-5 py-2.5 text-sm font-semibold cursor-pointer"
            >
              Book a site visit
            </button>
          </div>

          {/* Mobile: language toggle + hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-[#E8E2DA] text-[#555] text-[11px] font-sans transition-all cursor-pointer"
            >
              <Globe className="w-3 h-3" />
              <span>{lang === 'en' ? 'తె' : 'En'}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#F5F0EB] text-[#1A1A1A] border border-[#E8E2DA]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E8E2DA] px-4 pt-2 pb-6 space-y-1 shadow-lg font-sans">
          {navLinks.map(({ label, key, section }) => (
            <button
              key={key}
              onClick={() => handleNavClick(section, key)}
              className={`block w-full text-left py-2.5 text-sm font-medium border-b border-[#F0EBE3] last:border-0 transition-colors ${
                activeNav === key ? 'text-[#C8312A] font-semibold' : 'text-[#555]'
              }`}
            >
              {label}
            </button>
          ))}
          <div className="pt-3">
            <button
              onClick={() => handleNavClick('contact', 'contact')}
              className="btn-red w-full py-3 text-sm font-semibold cursor-pointer"
            >
              Book a site visit
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
