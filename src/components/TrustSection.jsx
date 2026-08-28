import React from 'react';
import { ShieldCheck, FileCheck, Landmark, Clock } from 'lucide-react';
import { translations } from '../data/translations';

export default function TrustSection({ lang = 'en' }) {
  const t = translations[lang]?.trust || translations.en.trust;

  const trustIcons = [ShieldCheck, FileCheck, Landmark, Clock];

  return (
    <section id="trust" className="py-14 sm:py-20 bg-[#F5F0EB] relative border-t border-[#E8E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="flex items-center justify-center space-x-3 mb-2">
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

        {/* 4 Points Grid: 1 col on mobile, 2 col on tablet, 4 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {t.points.map((pt, i) => {
            const Icon = trustIcons[i] || ShieldCheck;
            return (
              <div 
                key={i}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E8E2DA] hover:border-[#F5C6C4] transition-all group shadow-xs hover:shadow-md"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FCECEA] border border-[#C8312A]/20 flex items-center justify-center text-[#C8312A] mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] font-serif">
                  {pt.title}
                </h3>
                <p className="text-xs text-[#6B6860] mt-2 leading-relaxed font-sans">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Government Approvals Banner */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#E8E2DA] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center shadow-xs font-sans">
          <div className="p-2">
            <p className="eyebrow-tag text-[#888] text-[9px] sm:text-[10px]">APPROVED BODY</p>
            <p className="text-lg sm:text-xl font-bold text-[#C8312A] font-serif mt-0.5">RUDA Approved</p>
          </div>
          <div className="p-2 border-t sm:border-t-0 sm:border-x border-[#E8E2DA]">
            <p className="eyebrow-tag text-[#888] text-[9px] sm:text-[10px]">URBAN DEVELOPMENT</p>
            <p className="text-lg sm:text-xl font-bold text-[#C8312A] font-serif mt-0.5">VMRDA Layouts</p>
          </div>
          <div className="p-2 border-t sm:border-t-0 border-[#E8E2DA]">
            <p className="eyebrow-tag text-[#888] text-[9px] sm:text-[10px]">REAL ESTATE AUTHORITY</p>
            <p className="text-lg sm:text-xl font-bold text-[#C8312A] font-serif mt-0.5">AP RERA Registered</p>
          </div>
        </div>

      </div>
    </section>
  );
}
