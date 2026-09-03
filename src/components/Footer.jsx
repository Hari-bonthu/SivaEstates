import React from 'react';
import { Phone, MapPin, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { translations } from '../data/translations';
import { Link } from 'react-router-dom';

export default function Footer({ lang = 'en' }) {
  const t = translations[lang]?.footer || translations.en.footer;
  const tNav = translations[lang]?.nav || translations.en.nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Main Grid â€” 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#2E2E2E]">

          {/* Column 1: Brand + Social */}
          <div className="space-y-5">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-9 h-9 rounded-lg overflow-hidden bg-white p-0.5 shrink-0">
                  <img
                    src="/images/logo/original_Logo_Siva.png"
                    alt="Siva Telugu Estates Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-white leading-tight">Siva Telugu Estates</p>
                  {/* <p className="text-[10px] text-[#888] tracking-wide uppercase">{tNav.region || 'GODAVARI REGION'}</p> */}
                </div>
              </div>
              <p className="text-xs text-[#9CA3AF] leading-relaxed max-w-[220px]">
                {t.tagline}
              </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/sivateluguestate/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C8312A] text-white flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/sivateluguestate/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C8312A] text-white flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.youtube.com/@sivateluguestates"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C8312A] text-white flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em]">{t.explore}</h4>
            <ul className="space-y-2.5 text-xs text-[#9CA3AF]">
              <li>
                <Link to="/" onClick={scrollToTop} className="hover:text-white transition-colors">
                  {tNav.home}
                </Link>
              </li>
              <li>
                <Link to="/properties" onClick={scrollToTop} className="hover:text-white transition-colors">
                  {tNav.projects}
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-white transition-colors">
                  {tNav.about}
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={scrollToTop} className="hover:text-white transition-colors">
                  {tNav.gallery}
                </Link>
              </li>
              <li>
                <Link to="/offices" onClick={scrollToTop} className="hover:text-white transition-colors">
                  {tNav.offices}
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="hover:text-white transition-colors">
                  {tNav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Projects */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em]">{t.projects}</h4>
            <ul className="space-y-2.5 text-xs text-[#9CA3AF]">
              <li>
                <Link to="/venture/jetty-mayfair" onClick={scrollToTop} className="hover:text-white transition-colors">
                  Jetty Mayfair Luxury Villas
                </Link>
              </li>
              <li>
                <Link to="/venture/seshadri-heights" onClick={scrollToTop} className="hover:text-white transition-colors">
                  Seshadri Heights Gated Layout
                </Link>
              </li>
              <li>
                <Link to="/venture/kakinada-smart-city" onClick={scrollToTop} className="hover:text-white transition-colors">
                  Kakinada Smart City Layout
                </Link>
              </li>
              <li>
                <Link to="/venture/sree-harivasam" onClick={scrollToTop} className="hover:text-white transition-colors">
                  Sree Harivasam Open Plots
                </Link>
              </li>
              <li>
                <Link to="/properties" onClick={scrollToTop} className="text-[#C8312A] hover:underline font-semibold block pt-1">
                  View All Ventures â†’
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em]">{t.contact}</h4>
            <ul className="space-y-3 text-xs text-[#9CA3AF]">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#888]" aria-hidden="true" />
                <span>{t.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 shrink-0 text-[#888]" aria-hidden="true" />
                <a href="tel:+919851633333" className="hover:text-white transition-colors">
                  +91 98516 33333
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 shrink-0 text-[#888]" aria-hidden="true" />
                <a href="mailto:sivateluguestates@gmail.com" className="hover:text-white transition-colors">
                  sivateluguestates@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#666] font-sans">
          <p>{t.copyright}</p>
          <p>{t.rera}</p>
        </div>

      </div>
    </footer>
  );
}