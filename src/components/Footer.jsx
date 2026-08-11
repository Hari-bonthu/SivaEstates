import React from 'react';
import { Building2, Phone, MapPin, Youtube, ArrowUp, Globe } from 'lucide-react';
import { translations } from '../data/translations';

export default function Footer({ lang }) {
  const t = translations[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0C0E] border-t border-white/10 text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (Matching Reference 1 & 2) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#F5A623] text-[#0F1115] flex items-center justify-center shadow-lg">
                <Building2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-xl font-extrabold text-white font-heading">
                SIVA TELUGU <span className="text-[#F5A623]">ESTATES</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Premier real estate developers in the Godavari region, committed to securing your family's future through transparent land investments and DTCP/VMRDA approved layouts.
            </p>

            <div className="flex items-center space-x-3 text-[11px] font-mono text-[#F5A623] pt-1">
              <span className="px-2.5 py-1 rounded bg-[#1A1D23] border border-white/10">Rajahmundry HQ</span>
              <span className="px-2.5 py-1 rounded bg-[#1A1D23] border border-white/10 text-[#10B981]">Kakinada Branch</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 font-mono">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-[#F5A623] transition-colors">HOME &amp; FOUNDER</a></li>
              <li><a href="#ventures" className="hover:text-[#F5A623] transition-colors">FEATURED PROJECTS</a></li>
              <li><a href="#visualizer" className="hover:text-[#F5A623] transition-colors">INTERACTIVE PLOT VISUALIZER</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2 space-y-3 font-mono">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#branches" className="hover:text-[#F5A623] transition-colors">RAJAHMUNDRY OFFICE</a></li>
              <li><a href="#videos" className="hover:text-[#F5A623] transition-colors">YOUTUBE VIDEO TOURS</a></li>
              <li><a href="#calculator" className="hover:text-[#F5A623] transition-colors">EMI CALCULATOR</a></li>
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

        {/* Bottom Bar matching Reference 1 & 2 */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© All Rights Reserved. Siva Telugu Estates.</p>

          <div className="flex items-center space-x-4">
            <Globe className="w-4 h-4 text-slate-400" />
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#1A1D23] hover:bg-[#F5A623] hover:text-[#0F1115] text-slate-300 transition-all cursor-pointer"
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
