import React from 'react';
import { Heart, ShieldCheck, TrendingUp, Building, ArrowUpRight } from 'lucide-react';
import { translations } from '../data/translations';

export default function FourPillars({ lang }) {
  const t = translations[lang].pillars;

  const iconMap = [Heart, ShieldCheck, TrendingUp, Building];

  return (
    <section className="py-20 bg-[#F5F0EB] relative border-t border-[#E8E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="flex items-center justify-center space-x-3">
            <div className="h-px w-8 bg-[#C8312A]"></div>
            <span className="eyebrow-tag" style={{ display: 'inline', color: '#C8312A' }}>
              A PROMISE WE KEEP ON EVERY SINGLE DEAL
            </span>
            <div className="h-px w-8 bg-[#C8312A]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#1A1A1A] tracking-tight font-serif">
            Our Non-Negotiable Commitment
          </h2>
          <p className="text-sm text-[#6B6860] leading-relaxed font-sans">
            Every venture developed under Siva Telugu Estates is built upon rigorous legal scrutiny,
            aesthetic architecture, and transparent community stewardship.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((pillar, idx) => {
            const IconComponent = iconMap[idx] || ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-[#E8E2DA] hover:border-[#F5C6C4] transition-all relative group flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                {/* Top Row: Icon & Number */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 rounded-lg bg-[#FCECEA] border border-[#F5C6C4] flex items-center justify-center text-[#C8312A]">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  <span className="text-4xl font-normal text-[#E8E2DA] font-serif group-hover:text-[#F5C6C4] transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Card Title & Content */}
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] font-serif mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#6B6860] leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-6 mt-6 border-t border-[#E8E2DA] flex items-center justify-between text-[10px] font-sans font-medium tracking-wide text-[#9CA3AF]">
                  <span>Standard No. 0{idx + 1}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#9CA3AF] group-hover:text-[#C8312A] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
