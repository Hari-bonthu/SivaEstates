import React from 'react';
import { Phone, MapPin, ArrowUp, Globe } from 'lucide-react';
import { translations } from '../data/translations';

export default function Footer({ lang }) {
  const t = translations[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1B1C1C] text-[#E5E0D5] py-16 relative border-t border-[#4A5D4E]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info with Multi-Purpose Dark Logo Variant */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-white p-0.5 shadow-md flex items-center justify-center">
                <img
                  src="./images/logo/logo_dark_sage.jpg"
                  alt="Siva Telugu Estates Dark Logo Emblem"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <span className="text-xl font-bold text-white font-serif">
                SIVA TELUGU <span className="text-[#DBCBB0]">ESTATES</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-sans">
              Premier real estate developers in the Godavari region, committed to securing your family's future through transparent land investments and DTCP/VMRDA approved layouts.
            </p>

            <div className="flex items-center space-x-3 text-[11px] font-mono text-[#DBCBB0] pt-1">
              <span className="px-2.5 py-1 rounded bg-white/10 border border-white/10">Rajahmundry HQ</span>
              <span className="px-2.5 py-1 rounded bg-white/10 border border-white/10 text-[#10B981]">Kakinada Branch</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 font-mono">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-[#DBCBB0] transition-colors">HOME &amp; FOUNDER</a></li>
              <li><a href="#ventures" className="hover:text-[#DBCBB0] transition-colors">FEATURED VENTURES</a></li>
              <li><a href="#gallery" className="hover:text-[#DBCBB0] transition-colors">REAL SITE PROOF</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2 space-y-3 font-mono">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Branches &amp; Media
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#branches" className="hover:text-[#DBCBB0] transition-colors">HEADQUARTERS &amp; BRANCH</a></li>
              <li><a href="#videos" className="hover:text-[#DBCBB0] transition-colors">YOUTUBE TOURS</a></li>
              <li><a href="#trust" className="hover:text-[#DBCBB0] transition-colors">WHY TRUST US</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-2 space-y-3 font-mono">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact
            </h4>
            <a href="tel:+919851633333" className="flex items-center text-[#F5A623] font-bold text-xs hover:underline">
              <Phone className="w-3.5 h-3.5 mr-1.5" />
              +91 98516 33333
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>© All Rights Reserved. Siva Telugu Estates.</p>

          <div className="flex items-center space-x-4">
            <Globe className="w-4 h-4 text-slate-400" />
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/10 hover:bg-[#4A5D4E] hover:text-white text-slate-300 transition-all cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
