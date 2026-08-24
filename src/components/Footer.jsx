import React from 'react';
import { Phone, MapPin, ArrowUp } from 'lucide-react';
import { translations } from '../data/translations';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Footer({ lang }) {
  const t = translations[lang].footer;
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
    <footer className="bg-[#F9F7F2] text-[#2D2D2D] py-16 border-t border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E5E0D5]">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono font-bold text-[#636863] tracking-widest uppercase block">
              AP RERA &amp; DTCP CERTIFIED DEVELOPER
            </span>
            
            <h3 className="text-2xl font-bold text-[#1B1C1C] font-serif">
              Siva Telugu Estates
            </h3>

            <p className="text-xs text-[#636863] max-w-sm leading-relaxed font-sans">
              Another Benchmark Experience. Leading real estate developer specializing in premium DTCP and VMRDA approved residential layouts across Rajahmundry, Kakinada, and the Godavari corridor.
            </p>

            <p className="text-[11px] font-mono text-[#334537] font-bold">
              ✓ 100% Legal Clear Title Guarantee &amp; Spot Registration
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-3 font-mono">
            <h4 className="text-xs font-bold text-[#1B1C1C] uppercase tracking-widest">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs text-[#636863]">
              <li>
                <button onClick={(e) => scrollToSection(e, 'home')} className="hover:text-[#1B1C1C] transition-colors cursor-pointer text-left">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={(e) => scrollToSection(e, 'ventures')} className="hover:text-[#1B1C1C] transition-colors cursor-pointer text-left">
                  Properties &amp; Ventures
                </button>
              </li>
              <li>
                <button onClick={(e) => scrollToSection(e, 'videos')} className="hover:text-[#1B1C1C] transition-colors cursor-pointer text-left">
                  YouTube Video Tours
                </button>
              </li>
              <li>
                <button onClick={(e) => scrollToSection(e, 'branches')} className="hover:text-[#1B1C1C] transition-colors cursor-pointer text-left">
                  Direct Offices &amp; Branches
                </button>
              </li>
              <li>
                <button onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-[#1B1C1C] font-bold text-[#1B1C1C] cursor-pointer text-left">
                  Book Site Visit →
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div className="md:col-span-3 space-y-3 font-mono">
            <h4 className="text-xs font-bold text-[#1B1C1C] uppercase tracking-widest">
              LEGAL &amp; TRUST
            </h4>
            <ul className="space-y-2 text-xs text-[#636863]">
              <li><span>AP RERA Approvals &amp; Certifications</span></li>
              <li><span>DTCP &amp; VMRDA Master Layouts</span></li>
              <li><span>Clear Title Deed &amp; Encumbrance Guarantee</span></li>
              <li><span>Privacy Policy &amp; Terms</span></li>
            </ul>
          </div>

          {/* Direct Branches */}
          <div className="md:col-span-2 space-y-3 font-mono">
            <h4 className="text-xs font-bold text-[#1B1C1C] uppercase tracking-widest">
              DIRECT BRANCHES
            </h4>
            <a href="tel:+919851633333" className="text-sm font-bold text-[#1B1C1C] hover:text-[#4A5D4E] block">
              +91 98516 33333
            </a>
            <p className="text-[11px] text-[#636863] leading-relaxed">
              📍 Morampudi Junction, Rajahmundry AP<br />
              📍 Ramanayyapeta, Kakinada
            </p>
            <p className="text-[11px] text-[#636863]">
              ✉️ sivateluguestates@gmail.com
            </p>
            <p className="text-[10px] text-[#636863]">
              Mon - Sun: 9:00 AM - 8:00 PM
            </p>
          </div>

        </div>

        {/* Bottom Bar matching screenshot */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#636863]">
          <p>© 2026 Siva Telugu Estates. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white border border-[#E5E0D5] hover:bg-[#1B1C1C] hover:text-white text-[#1B1C1C] transition-all cursor-pointer shadow-xs"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
