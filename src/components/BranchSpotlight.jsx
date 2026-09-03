import React from 'react';
import { MapPin, Phone, Building2, Navigation, Sparkles } from 'lucide-react';
import { translations } from '../data/translations';

export default function BranchSpotlight({ lang = 'en', isPage = false }) {
  const t = translations[lang]?.branches || translations.en.branches;

  return (
    <section id="branches" className={`${isPage ? 'pt-8 sm:pt-12 pb-14 sm:pb-20' : 'py-14 sm:py-20 border-t border-[#E8E2DA]'} bg-[#F5F0EB] relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="flex items-center justify-center space-x-3">
            <div className="h-px w-8 bg-[#C8312A]"></div>
            <span className="eyebrow-tag text-[10px] sm:text-xs" style={{ color: '#C8312A', display: 'inline' }}>
              {t.badge}
            </span>
            <div className="h-px w-8 bg-[#C8312A]"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1A1A1A] tracking-tight font-serif">
            {t.heading}
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6860] max-w-2xl mx-auto">
            {t.subheading}
          </p>
        </div>

        {/* Branch Cards Grid: 1 col on mobile, 2 col on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Rajahmundry HQ */}
          <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8E2DA] hover:border-[#F5C6C4] transition-all shadow-sm flex flex-col justify-between">
            <div className="relative h-44 sm:h-48 bg-[#F0EDED] p-5 sm:p-6 flex flex-col justify-between overflow-hidden">
              <img 
                src="/images/ventures/jetty-mayfair.jpg" 
                alt="Siva Telugu Estates Rajahmundry Headquarters – Morampudi Lalacheruvu Real Estate Office" 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
                loading="lazy"
              />
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#C8312A] text-white font-bold text-[10px] sm:text-[11px] font-sans tracking-wide uppercase">
                  {t.rajahmundry.tag}
                </span>
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#C8312A]" aria-hidden="true" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] font-serif">
                  {t.rajahmundry.name}
                </h3>
                <p className="text-xs text-[#C8312A] font-sans mt-0.5">East Godavari Real Estate Hub</p>
              </div>
            </div>

            <div className="p-5 sm:p-6 space-y-4 bg-white flex-1 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-[#2D2D2D] leading-relaxed font-sans">
                {t.rajahmundry.desc}
              </p>

              <div className="space-y-2 pt-3 border-t border-[#E8E2DA] text-xs text-[#2D2D2D]">
                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-[#C8312A] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{t.rajahmundry.address}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-[#C8312A] shrink-0" aria-hidden="true" />
                  <a href="tel:+919851633333" className="hover:text-[#C8312A] font-bold">
                    {t.rajahmundry.phone}
                  </a>
                </div>
              </div>

              <div>
                <p className="text-[10px] sm:text-[11px] font-sans font-medium text-[#6B6860] uppercase tracking-wide mb-1.5">
                  Key Venture Belts:
                </p>
                <p className="text-xs text-[#2D2D2D] bg-[#F5F0EB] p-3 rounded-xl border border-[#E8E2DA] font-sans">
                  {t.rajahmundry.areas}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20want%20to%20visit%20your%20Rajahmundry%20HQ."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-red w-full py-3 sm:py-3.5 text-xs font-bold shadow-md transition-all flex items-center justify-center space-x-2 active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{t.rajahmundry.visitBtn || 'Visit Rajahmundry Office'}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Kakinada Branch */}
          <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8E2DA] hover:border-[#F5C6C4] transition-all shadow-sm flex flex-col justify-between">
            <div className="relative h-48 bg-[#F0EDED] p-5 sm:p-6 flex flex-col justify-between overflow-hidden">
              <img 
                src="/images/kakinada_branch_venture_1786442659994.jpg" 
                alt="Siva Telugu Estates Kakinada Branch Office – Panduru Real Estate Hub" 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
                loading="lazy"
              />
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#C8312A] text-white font-bold text-[10px] sm:text-[11px] font-sans tracking-wide uppercase flex items-center">
                  <Sparkles className="w-3 h-3 mr-1" aria-hidden="true" />
                  {t.kakinada.tag}
                </span>
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#C8312A]" aria-hidden="true" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] font-serif">
                  {t.kakinada.name}
                </h3>
                <p className="text-xs text-[#C8312A] font-sans mt-0.5">Smart City Coastal Growth Belt</p>
              </div>
            </div>

            <div className="p-5 sm:p-6 space-y-4 bg-white flex-1 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-[#2D2D2D] leading-relaxed font-sans">
                {t.kakinada.desc}
              </p>

              <div className="space-y-2 pt-3 border-t border-[#E8E2DA] text-xs text-[#2D2D2D]">
                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-[#C8312A] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{t.kakinada.address}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-[#C8312A] shrink-0" aria-hidden="true" />
                  <a href="tel:+919851633333" className="hover:text-[#C8312A] font-bold">
                    {t.kakinada.phone}
                  </a>
                </div>
              </div>

              <div>
                <p className="text-[10px] sm:text-[11px] font-sans font-medium text-[#6B6860] uppercase tracking-wide mb-1.5">
                  Key Venture Belts:
                </p>
                <p className="text-xs text-[#2D2D2D] bg-[#F5F0EB] p-3 rounded-xl border border-[#E8E2DA] font-sans">
                  {t.kakinada.areas}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Kakinada+Siva+Telugu+Estates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-red w-full py-3 sm:py-3.5 text-xs font-bold shadow-md transition-all flex items-center justify-center space-x-2 active:scale-95"
                >
                  <Navigation className="w-4 h-4" aria-hidden="true" />
                  <span>{t.kakinada.visitBtn || 'Visit Kakinada Office'}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
