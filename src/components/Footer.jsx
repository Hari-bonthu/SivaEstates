import React from 'react';
import { Building2, Phone, MapPin, Youtube, ArrowUp, Heart } from 'lucide-react';
import { translations } from '../data/translations';

export default function Footer({ lang }) {
  const t = translations[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-slate-800 text-slate-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gold-gradient p-0.5 shadow-lg">
                <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-gold-400" />
                </div>
              </div>
              <span className="text-xl font-extrabold text-white font-heading">
                SIVA TELUGU <span className="text-gold-500">ESTATES</span>
              </span>
            </div>

            <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
              {t.tagline} Director Mr. Siva Yedida is dedicated to delivering DTCP/VMRDA approved open plots with 100% legal clear titles.
            </p>

            <div className="flex items-center space-x-3 text-xs text-gold-400 font-semibold pt-1">
              <span className="px-2.5 py-1 rounded-md bg-navy-900 border border-slate-800">Rajahmundry HQ</span>
              <span className="px-2.5 py-1 rounded-md bg-navy-900 border border-slate-800 text-emerald-400">Kakinada Branch</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-gold-400 transition-colors">Home &amp; Founder Highlight</a></li>
              <li><a href="#branches" className="hover:text-gold-400 transition-colors">Rajahmundry &amp; Kakinada Offcies</a></li>
              <li><a href="#ventures" className="hover:text-gold-400 transition-colors">Featured Open Plot Ventures</a></li>
              <li><a href="#visualizer" className="hover:text-gold-400 transition-colors">Interactive Plot Visualizer</a></li>
              <li><a href="#videos" className="hover:text-gold-400 transition-colors">YouTube Video Tours</a></li>
              <li><a href="#calculator" className="hover:text-gold-400 transition-colors">Plot EMI Calculator</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Director Contact &amp; Social
            </h4>
            <div className="space-y-2 text-xs">
              <a href="tel:+919851633333" className="flex items-center text-white font-bold hover:text-gold-400">
                <Phone className="w-4 h-4 mr-2 text-gold-400" />
                +91 98516 33333
              </a>
              <div className="flex items-start text-slate-300">
                <MapPin className="w-4 h-4 mr-2 text-gold-400 shrink-0 mt-0.5" />
                <span>Morampudi Junction, Rajahmundry &amp; Ramanayyapeta, Kakinada</span>
              </div>
              <a 
                href="https://www.youtube.com/@sivateluguestates"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-red-400 font-bold hover:underline pt-1"
              >
                <Youtube className="w-4 h-4 mr-2 text-red-500" />
                @sivateluguestates (YouTube Channel)
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>{t.copyright}</p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-gold-500 hover:text-navy-950 text-slate-300 transition-all cursor-pointer"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
