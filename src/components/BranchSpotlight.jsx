import React from 'react';
import { MapPin, Phone, Building2, Navigation, Sparkles } from 'lucide-react';
import { translations } from '../data/translations';

export default function BranchSpotlight({ lang }) {
  const t = translations[lang].branches;

  return (
    <section id="branches" className="py-20 bg-[#F9F7F2] relative border-t border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with luxury line indicator */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <div className="h-px w-8 bg-[#4A5D4E]"></div>
            <span className="eyebrow-tag text-[#4A5D4E]">
              {t.badge}
            </span>
            <div className="h-px w-8 bg-[#4A5D4E]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#1B1C1C] tracking-tight font-serif">
            {t.heading}
          </h2>
          <p className="text-sm text-[#636863]">
            {t.subheading}
          </p>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          
          {/* Card 1: Rajahmundry HQ */}
          <div className="bg-white rounded-3xl overflow-hidden border border-[#E5E0D5] hover:border-[#DBCBB0] transition-all shadow-sm">
            <div className="relative h-48 bg-[#F0EDED] p-6 flex flex-col justify-between overflow-hidden">
              <img 
                src="./images/luxury_villa_venture_1786442598108.jpg" 
                alt="Rajahmundry HQ" 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-[#4A5D4E] text-white font-extrabold text-[11px] font-mono tracking-wider uppercase">
                  {t.rajahmundry.tag}
                </span>
                <Building2 className="w-6 h-6 text-[#4A5D4E]" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1B1C1C] font-serif">
                  {t.rajahmundry.name}
                </h3>
                <p className="text-xs text-[#4A5D4E] font-mono">East Godavari Real Estate Hub</p>
              </div>
            </div>

            <div className="p-6 space-y-4 bg-white">
              <p className="text-sm text-[#2D2D2D] leading-relaxed">
                {t.rajahmundry.desc}
              </p>

              <div className="space-y-2 pt-2 border-t border-[#E5E0D5] text-xs text-[#2D2D2D]">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#4A5D4E] shrink-0 mt-0.5" />
                  <span>{t.rajahmundry.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#10B981] shrink-0" />
                  <a href="tel:+919851633333" className="hover:text-[#4A5D4E] font-bold">
                    {t.rajahmundry.phone}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-[11px] font-mono text-[#636863] uppercase tracking-wider mb-2">
                  Key Venture Belts:
                </p>
                <p className="text-xs text-[#2D2D2D] bg-[#F9F7F2] p-3 rounded-xl border border-[#E5E0D5] font-mono">
                  {t.rajahmundry.areas}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20want%20to%20visit%20your%20Rajahmundry%20HQ."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#4A5D4E] hover:bg-[#334537] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2 font-mono"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Visit Rajahmundry Office</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Kakinada Branch */}
          <div className="bg-white rounded-3xl overflow-hidden border border-[#E5E0D5] hover:border-[#DBCBB0] transition-all shadow-sm">
            <div className="relative h-48 bg-[#F0EDED] p-6 flex flex-col justify-between overflow-hidden">
              <img 
                src="./images/kakinada_branch_venture_1786442659994.jpg" 
                alt="Kakinada Branch" 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-[#10B981] text-white font-extrabold text-[11px] font-mono tracking-wider uppercase flex items-center">
                  <Sparkles className="w-3 h-3 mr-1" />
                  {t.kakinada.tag}
                </span>
                <Building2 className="w-6 h-6 text-[#10B981]" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1B1C1C] font-serif">
                  {t.kakinada.name}
                </h3>
                <p className="text-xs text-[#10B981] font-mono">Smart City &amp; Port Corridor Specialist</p>
              </div>
            </div>

            <div className="p-6 space-y-4 bg-white">
              <p className="text-sm text-[#2D2D2D] leading-relaxed">
                {t.kakinada.desc}
              </p>

              <div className="space-y-2 pt-2 border-t border-[#E5E0D5] text-xs text-[#2D2D2D]">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>{t.kakinada.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#10B981] shrink-0" />
                  <a href="tel:+919851633333" className="hover:text-[#10B981] font-bold">
                    {t.kakinada.phone}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-[11px] font-mono text-[#636863] uppercase tracking-wider mb-2">
                  Key Venture Belts:
                </p>
                <p className="text-xs text-[#2D2D2D] bg-[#F9F7F2] p-3 rounded-xl border border-[#E5E0D5] font-mono">
                  {t.kakinada.areas}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20want%20to%20visit%20your%20new%20Kakinada%20Branch."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#10B981] hover:bg-[#0D9668] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2 font-mono"
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
