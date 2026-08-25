import React, { useState, useEffect } from 'react';
import { Phone, Globe, Menu, X, Mail } from 'lucide-react';
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
    <header className="sticky top-0 z-40 bg-white border-b border-[#E8E2DA]">
      {/* Top Banner Bar */}
      <div className="bg-[#1A1A1A] py-1.5 px-4 text-xs text-white font-sans">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <span className="text-[#BBBBBB] hidden sm:inline">
            RERA &amp; DTCP approved layouts across the Godavari districts
          </span>
          <div className="flex items-center space-x-4 ml-auto">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-2.5 py-0.5 rounded bg-white/10 hover:bg-white/20 text-white transition-all text-[11px] font-medium cursor-pointer"
            >
              <Globe className="w-3 h-3" />
              <span>{lang === 'en' ? 'తెలుగు' : 'English'}</span>
            </button>
            <a
              href="mailto:hello@siteluguuestates.in"
              className="hidden md:flex items-center text-[#BBBBBB] hover:text-white transition-colors text-[11px]"
            >
              <Mail className="w-3 h-3 mr-1" />
              <span>hello@siteluguestates.in</span>
            </a>
            <a
              href="tel:+919876543210"
              className="flex items-center text-white hover:text-[#F5C6C4] font-medium transition-colors text-[11px]"
            >
              <Phone className="w-3 h-3 mr-1" />
              <span>+91 98765 43210</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">

          {/* Logo & Brand Name */}
          <Link
            to="/"
            onClick={() => handleNavClick('home', 'home')}
            className="flex items-center space-x-3 group cursor-pointer shrink-0"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center shrink-0">
              <img
                src="./images/logo/original_Logo_Siva.png"
                alt="Siva Telugu Estates Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[15px] font-bold tracking-tight text-[#1A1A1A] font-sans">
                Siva Telugu Estates
              </span>
              <span className="text-[10px] text-[#888] font-sans tracking-wide">
                GODAVARI REGION
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

          {/* Book a site visit — Red pill CTA */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => handleNavClick('contact', 'contact')}
              className="btn-red px-5 py-2.5 text-sm font-semibold cursor-pointer shadow-sm"
            >
              Book a site visit
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center">
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
