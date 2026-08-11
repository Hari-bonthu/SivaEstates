import React from 'react';
import { Heart, ShieldCheck, TrendingUp, Home } from 'lucide-react';
import { translations } from '../data/translations';

export default function FourPillars({ lang }) {
  const t = translations[lang].pillars;

  const iconMap = [Heart, ShieldCheck, TrendingUp, Home];

  return (
    <section className="py-20 bg-[#0F1115] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Reference 2 */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#1A1D23] border border-[#F5A623]/30 text-[#F5A623] text-xs font-mono tracking-widest uppercase shadow-sm">
            4 PILLARS OF SUCCESS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {t.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            {t.subheading}
          </p>
        </div>

        {/* 4 Cards Grid matching Reference 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {t.items.map((pillar, idx) => {
            const IconComponent = iconMap[idx] || ShieldCheck;
            return (
              <div 
                key={idx}
                className="bg-[#1A1D23] p-7 rounded-2xl border border-white/10 hover:border-[#F5A623]/40 transition-all relative group flex flex-col justify-between"
              >
                {/* Top Row: Circular Icon & Giant Ghost Number */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#0F1115] border border-white/15 flex items-center justify-center text-[#F5A623]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  <span className="text-4xl font-black text-slate-800 font-heading group-hover:text-[#F5A623]/20 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Card Title & Content */}
                <div>
                  <h3 className="text-xl font-extrabold text-white font-heading mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
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
