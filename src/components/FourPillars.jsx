import React from 'react';
import { Heart, ShieldCheck, TrendingUp, Home } from 'lucide-react';
import { translations } from '../data/translations';

export default function FourPillars({ lang }) {
  const t = translations[lang].pillars;

  const iconMap = [Heart, ShieldCheck, TrendingUp, Home];

  return (
    <section className="py-20 bg-[#F9F7F2] relative border-t border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#EAF0EC] border border-[#4A5D4E]/30 text-[#334537] text-xs font-mono tracking-widest uppercase">
            4 PILLARS OF SUCCESS
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#1B1C1C] tracking-tight font-serif">
            {t.heading}
          </h2>
          <p className="text-sm text-[#636863]">
            {t.subheading}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {t.items.map((pillar, idx) => {
            const IconComponent = iconMap[idx] || ShieldCheck;
            return (
              <div 
                key={idx}
                className="bg-white p-7 rounded-2xl border border-[#E5E0D5] hover:border-[#DBCBB0] transition-all relative group flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                {/* Top Row */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#EAF0EC] border border-[#4A5D4E]/20 flex items-center justify-center text-[#4A5D4E]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  <span className="text-4xl font-normal text-[#E5E0D5] font-serif group-hover:text-[#4A5D4E]/30 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Card Title & Content */}
                <div>
                  <h3 className="text-xl font-bold text-[#1B1C1C] font-serif mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#636863] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
