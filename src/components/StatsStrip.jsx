import React from 'react';
import { translations } from '../data/translations';

export default function StatsStrip({ lang = 'en' }) {
  const t = translations[lang]?.stats || translations.en.stats;

  const stats = [
    { number: t.stat1Num, label: t.stat1Label },
    { number: t.stat2Num, label: t.stat2Label },
    { number: t.stat3Num, label: t.stat3Label },
    { number: t.stat4Num, label: t.stat4Label },
  ];

  return (
    <section className="bg-white border-y border-[#E8E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`py-5 sm:py-7 px-3 sm:px-6 text-center ${
                i % 2 === 0 ? 'border-r border-[#E8E2DA]' : ''
              } ${
                i < 2 ? 'border-b lg:border-b-0 border-[#E8E2DA]' : ''
              } ${
                i === 2 ? 'lg:border-r border-[#E8E2DA]' : ''
              }`}
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] font-serif leading-none">
                {stat.number}
              </p>
              <p className="text-[11px] sm:text-xs text-[#6B6860] font-sans mt-1.5 sm:mt-2 tracking-wide font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
