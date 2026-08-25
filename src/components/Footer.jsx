import React from 'react';
import { Phone, MapPin, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export default function Footer({ lang = 'en' }) {
  const location = useLocation();
  const navigate = useNavigate();

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
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Main Grid — 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#2E2E2E]">

          {/* Column 1: Brand + Social */}
          <div className="space-y-5">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-9 h-9 rounded-lg overflow-hidden bg-white p-0.5 shrink-0">
                  <img
                    src="./images/logo/original_Logo_Siva.png"
                    alt="Siva Telugu Estates Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-white leading-tight">Siva Telugu Estates</p>
                  <p className="text-[10px] text-[#666] tracking-wide">GODAVARI REGION</p>
                </div>
              </div>
              <p className="text-xs text-[#9CA3AF] leading-relaxed max-w-[220px]">
                Plotted layouts, villas and managed farmland across the Godavari districts —
                built on clear titles and honest paperwork since 2014.
              </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C8312A] text-white flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C8312A] text-white flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C8312A] text-white flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em]">Explore</h4>
            <ul className="space-y-2.5 text-xs text-[#9CA3AF]">
              <li>
                <button onClick={(e) => scrollToSection(e, 'home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Home
                </button>
              </li>
              <li>
                <Link to="/properties" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <button onClick={(e) => scrollToSection(e, 'trust')} className="hover:text-white transition-colors cursor-pointer text-left">
                  About
                </button>
              </li>
              <li>
                <button onClick={(e) => scrollToSection(e, 'videos')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={(e) => scrollToSection(e, 'branches')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Offices
                </button>
              </li>
              <li>
                <button onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Projects */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em]">Projects</h4>
            <ul className="space-y-2.5 text-xs text-[#9CA3AF]">
              <li>
                <Link to="/venture/jetty-mayfair" className="hover:text-white transition-colors">
                  Jetty Mayfair Luxury Villas
                </Link>
              </li>
              <li>
                <Link to="/venture/seshadri-heights" className="hover:text-white transition-colors">
                  Seshadri Heights
                </Link>
              </li>
              <li>
                <Link to="/venture/kakinada-smart-city" className="hover:text-white transition-colors">
                  Kakinada Smart City Layout
                </Link>
              </li>
              <li>
                <Link to="/venture/sree-harivasam" className="hover:text-white transition-colors">
                  Sree Harivasam Open Plots
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em]">Contact</h4>
            <ul className="space-y-3 text-xs text-[#9CA3AF]">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#666]" />
                <span>Danavaipeta, Rajahmundry, Andhra Pradesh 533103</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 shrink-0 text-[#666]" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 shrink-0 text-[#666]" />
                <a href="mailto:hello@siteluguestates.in" className="hover:text-white transition-colors">
                  hello@siteluguestates.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#555] font-sans">
          <p>© 2026 Siva Telugu Estates. All rights reserved.</p>
          <p>RERA: AP/R&B/2024/50301 · DTCP layouts approved</p>
        </div>

      </div>
    </footer>
  );
}
