import React from 'react';
import { translations } from '../data/translations';

export default function FourSteps({ lang = 'en' }) {
  const t = translations[lang]?.steps || translations.en.steps;

  return (
    <section className="py-14 sm:py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <div className="h-px w-6 bg-[#C8312A]"></div>
            <span className="eyebrow-tag text-[10px] sm:text-xs" style={{ color: '#C8312A', display: 'inline' }}>
              {t.eyebrow}
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-normal tracking-tight leading-tight max-w-xl">
            {t.heading}
          </h2>
        </div>

        {/* Steps Grid: 1 col on mobile, 2 col on tablet, 4 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {t.items.map((step, i) => (
            <div key={i} className="flex flex-col gap-3 sm:gap-4 p-5 sm:p-0 rounded-2xl bg-white/5 sm:bg-transparent border border-white/5 sm:border-0">
              {/* Step number */}
              <span className="text-4xl sm:text-5xl font-serif font-normal text-[#C8312A] leading-none">
                {step.number}
              </span>

              {/* Divider */}
              <div className="h-px w-10 sm:w-12 bg-[#2E2E2E]"></div>

              {/* Content */}
              <div>
                <h3 className="text-base sm:text-lg font-sans font-bold text-white mb-1.5 sm:mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9CA3AF] font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
