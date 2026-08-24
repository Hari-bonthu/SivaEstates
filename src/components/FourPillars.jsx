import React from 'react';
import { Heart, ShieldCheck, TrendingUp, Building, ArrowUpRight } from 'lucide-react';
import { translations } from '../data/translations';

export default function FourPillars({ lang }) {
  const t = translations[lang].pillars;

  const iconMap = [Heart, ShieldCheck, TrendingUp, Building];

  return (
    <section className="py-20 bg-[#F9F7F2] relative border-t border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with luxury line indicator */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <div className="h-px w-8 bg-[#4A5D4E]"></div>
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#4A5D4E]">
              CORE PHILOSOPHY &amp; STANDARDS
            </span>
            <div className="h-px w-8 bg-[#4A5D4E]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#1B1C1C] tracking-tight font-serif">
            Our Non-Negotiable Commitment
          </h2>
          <p className="text-sm text-[#636863] leading-relaxed font-sans">
            Every venture developed under Siva Telugu Estates is built upon rigorous legal scrutiny, aesthetic in-your architecture, and transparent community stewardship.
          </p>
        </div>

        {/* 4 Cards Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {t.items.map((pillar, idx) => {
            const IconComponent = iconMap[idx] || ShieldCheck;
            return (
              <div 
                key={idx}
                className="bg-white p-7 rounded-2xl border border-[#E5E0D5] hover:border-[#DBCBB0] transition-all relative group flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                {/* Top Row: Icon & Number */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 rounded-lg bg-[#F9F7F2] border border-[#E5E0D5] flex items-center justify-center text-[#334537]">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  
                  <span className="text-4xl font-normal text-[#E5E0D5] font-serif group-hover:text-[#334537]/30 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Card Title & Content */}
                <div>
                  <h3 className="text-xl font-bold text-[#1B1C1C] font-serif mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#636863] leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>

                {/* Card Footer Standard Tag */}
                <div className="pt-6 mt-6 border-t border-[#E5E0D5] flex items-center justify-between text-[10px] font-mono text-[#636863]">
                  <span>STANDARD NO. 0{idx + 1}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#636863] group-hover:text-[#334537] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
