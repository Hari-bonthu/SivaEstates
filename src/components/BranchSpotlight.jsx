import React from 'react';
import { MapPin, Phone, Building2, Navigation, Sparkles } from 'lucide-react';
import { translations } from '../data/translations';

export default function BranchSpotlight({ lang }) {
  const t = translations[lang].branches;

  return (
    <section id="branches" className="py-20 bg-[#F5F0EB] relative border-t border-[#E8E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with luxury line indicator */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <div className="h-px w-8 bg-[#C8312A]"></div>
            <span className="eyebrow-tag text-[#C8312A]">
              {t.badge}
            </span>
            <div className="h-px w-8 bg-[#C8312A]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#1B1C1C] tracking-tight font-serif">
            {t.heading}
          </h2>
          <p className="text-sm text-[#6B6860]">
            {t.subheading}
          </p>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          
          {/* Card 1: Rajahmundry HQ */}
          <div className="bg-white rounded-3xl overflow-hidden border border-[#E8E2DA] hover:border-[#F5C6C4] transition-all shadow-sm">
            <div className="relative h-48 bg-[#F0EDED] p-6 flex flex-col justify-between overflow-hidden">
              <img 
                src="./images/luxury_villa_venture_1786442598108.jpg" 
                alt="Rajahmundry HQ" 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-[#C8312A] text-white font-extrabold text-[11px] font-sans tracking-[0.2em] uppercase">
                  {t.rajahmundry.tag}
                </span>
                <Building2 className="w-6 h-6 text-[#C8312A]" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1B1C1C] font-serif">
                  {t.rajahmundry.name}
                </h3>
                <p className="text-xs text-[#C8312A] font-sans">East Godavari Real Estate Hub</p>
              </div>
            </div>

            <div className="p-6 space-y-4 bg-white">
              <p className="text-sm text-[#2D2D2D] leading-relaxed font-sans">
                {t.rajahmundry.desc}
              </p>

              <div className="space-y-2 pt-2 border-t border-[#E8E2DA] text-xs text-[#2D2D2D]">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#C8312A] shrink-0 mt-0.5" />
                  <span>{t.rajahmundry.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#C8312A] shrink-0" />
                  <a href="tel:+919851633333" className="hover:text-[#C8312A] font-bold">
                    {t.rajahmundry.phone}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-[11px] font-sans font-medium text-[#6B6860] uppercase tracking-[0.2em] mb-2">
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
                  className="w-full py-3 rounded-xl bg-[#C8312A] hover:bg-[#A82822] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2 font-sans tracking-[0.1em]"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Visit Rajahmundry Office</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Kakinada Branch */}
          <div className="bg-white rounded-3xl overflow-hidden border border-[#E8E2DA] hover:border-[#F5C6C4] transition-all shadow-sm">
            <div className="relative h-48 bg-[#F0EDED] p-6 flex flex-col justify-between overflow-hidden">
              <img 
                src="./images/kakinada_branch_venture_1786442659994.jpg" 
                alt="Kakinada Branch" 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-[#C8312A] text-white font-extrabold text-[11px] font-sans tracking-[0.2em] uppercase flex items-center">
                  <Sparkles className="w-3 h-3 mr-1" />
                  {t.kakinada.tag}
                </span>
                <Building2 className="w-6 h-6 text-[#C8312A]" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1B1C1C] font-serif">
                  {t.kakinada.name}
                </h3>
                <p className="text-xs text-[#C8312A] font-sans">Smart City &amp; Port Corridor Specialist</p>
              </div>
            </div>

            <div className="p-6 space-y-4 bg-white">
              <p className="text-sm text-[#2D2D2D] leading-relaxed font-sans">
                {t.kakinada.desc}
              </p>

              <div className="space-y-2 pt-2 border-t border-[#E8E2DA] text-xs text-[#2D2D2D]">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#C8312A] shrink-0 mt-0.5" />
                  <span>{t.kakinada.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#C8312A] shrink-0" />
                  <a href="tel:+919851633333" className="hover:text-[#C8312A] font-bold">
                    {t.kakinada.phone}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-[11px] font-sans font-medium text-[#6B6860] uppercase tracking-[0.2em] mb-2">
                  Key Venture Belts:
                </p>
                <p className="text-xs text-[#2D2D2D] bg-[#F5F0EB] p-3 rounded-xl border border-[#E8E2DA] font-sans">
                  {t.kakinada.areas}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20want%20to%20visit%20your%20new%20Kakinada%20Branch."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#C8312A] hover:bg-[#A82822] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2 font-sans tracking-[0.1em]"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Visit Kakinada Office</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
