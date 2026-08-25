import React from 'react';
import { Phone, MapPin, ArrowUp, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { translations } from '../data/translations';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export default function Footer({ lang = 'en' }) {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e, sectionId) => {
    if (e) e.preventDefault();

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
    <footer className="bg-[#F9F7F2] pt-12 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Floating Chamfered Luxury Emerald Card matching screenshot */}
        <div 
          className="relative bg-[#0F2016] text-white rounded-3xl sm:rounded-[36px] p-8 sm:p-12 lg:p-16 shadow-2xl border border-[#1E3B29] overflow-hidden"
          style={{
            backgroundImage: `
              radial-gradient(circle at 15% 50%, rgba(30, 75, 48, 0.45) 0%, transparent 60%),
              radial-gradient(circle, rgba(74, 93, 78, 0.15) 1.5px, transparent 1.5px)
            `,
            backgroundSize: '100% 100%, 18px 18px',
          }}
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A5D4E]/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Main Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Brand Area matching reference screenshot */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/20 bg-white p-0.5 shadow-xs shrink-0">
                    <img
                      src="./images/logo/original_Logo_Siva.png"
                      alt="Siva Telugu Estates Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="brand-subtitle text-[#DBCBB0]">
                    SIVA TELUGU ESTATES • EST. 2008
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal font-serif text-white leading-tight tracking-tight">
                  Building high-performance <br />
                  <span className="italic font-serif text-[#DBCBB0]">land legacies</span> in Godavari
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed font-sans pt-1">
                  Curated DTCP &amp; VMRDA approved residential layouts across Rajahmundry &amp; Kakinada. Verified clear titles and high-growth asset appreciation.
                </p>
              </div>

              {/* Social Icon Square Buttons matching screenshot */}
              <div className="flex items-center space-x-3 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-105 border border-white/10 cursor-pointer"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 fill-current" />
                </a>

                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-105 border border-white/10 cursor-pointer font-bold text-sm font-sans"
                  aria-label="X (Twitter)"
                >
                  ✕
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-105 border border-white/10 cursor-pointer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-105 border border-white/10 cursor-pointer"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4 fill-current" />
                </a>
              </div>

            </div>

            {/* Right Navigation Columns matching screenshot */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
              
              {/* Column 1: Ventures */}
              <div className="space-y-3.5">
                <h4 className="text-xs font-sans font-medium text-white uppercase tracking-[0.2em]">
                  VENTURES
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-300 font-sans">
                  <li>
                    <Link to="/venture/jetty-mayfair" className="hover:text-white hover:underline transition-colors block">
                      Jetty Mayfair
                    </Link>
                  </li>
                  <li>
                    <Link to="/venture/seshadri-heights" className="hover:text-white hover:underline transition-colors block">
                      Seshadri Heights
                    </Link>
                  </li>
                  <li>
                    <Link to="/venture/kakinada-smart-city" className="hover:text-white hover:underline transition-colors block">
                      Kakinada Smart City
                    </Link>
                  </li>
                  <li>
                    <Link to="/venture/sree-harivasam" className="hover:text-white hover:underline transition-colors block">
                      Sree Harivasam
                    </Link>
                  </li>
                  <li>
                    <Link to="/venture/sreenivasam" className="hover:text-white hover:underline transition-colors block">
                      Sreenivasam (Sold Out)
                    </Link>
                  </li>
                  <li>
                    <Link to="/venture/sree-venkatesam" className="hover:text-white hover:underline transition-colors block">
                      Sree Venkatesam (Sold Out)
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: Navigation & Company */}
              <div className="space-y-3.5">
                <h4 className="text-xs font-sans font-medium text-white uppercase tracking-[0.2em]">
                  COMPANY
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-300 font-sans">
                  <li>
                    <button onClick={(e) => scrollToSection(e, 'home')} className="hover:text-white hover:underline transition-colors cursor-pointer text-left">
                      Home Overview
                    </button>
                  </li>
                  <li>
                    <button onClick={(e) => scrollToSection(e, 'trust')} className="hover:text-white hover:underline transition-colors cursor-pointer text-left">
                      About Us &amp; Founder
                    </button>
                  </li>
                  <li>
                    <button onClick={(e) => scrollToSection(e, 'branches')} className="hover:text-white hover:underline transition-colors cursor-pointer text-left">
                      Rajahmundry &amp; Kakinada Offices
                    </button>
                  </li>
                  <li>
                    <button onClick={(e) => scrollToSection(e, 'videos')} className="hover:text-white hover:underline transition-colors cursor-pointer text-left">
                      YouTube Video Tours
                    </button>
                  </li>
                  <li>
                    <button onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-[#DBCBB0] font-bold text-white cursor-pointer text-left">
                      Book Free Site Visit →
                    </button>
                  </li>
                </ul>
              </div>

              {/* Column 3: Legal & Resources */}
              <div className="space-y-3.5 col-span-2 sm:col-span-1">
                <h4 className="text-xs font-sans font-medium text-white uppercase tracking-[0.2em]">
                  LEGAL &amp; TRUST
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-300 font-sans">
                  <li>
                    <span className="block text-slate-400">AP RERA Registered</span>
                  </li>
                  <li>
                    <span className="block text-slate-400">DTCP &amp; VMRDA Layouts</span>
                  </li>
                  <li>
                    <span className="block text-slate-400">30-Year EC Guarantee</span>
                  </li>
                  <li>
                    <span className="block text-slate-400">Spot Registration</span>
                  </li>
                  <li>
                    <span className="block text-slate-400">Privacy Policy &amp; T&amp;Cs</span>
                  </li>
                  <li className="pt-1">
                    <a href="tel:+919851633333" className="text-xs font-sans font-bold text-[#DBCBB0] hover:underline block">
                      +91 98516 33333
                    </a>
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Outer Row matching screenshot */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#636863]">
          <p>© 2026 Siva Telugu Estates. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E5E0D5] hover:bg-[#1B1C1C] hover:text-white text-[#1B1C1C] transition-all cursor-pointer shadow-xs text-xs font-sans font-bold"
            title="Scroll to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
