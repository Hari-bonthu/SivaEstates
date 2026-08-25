import React from 'react';
import { ShieldCheck, FileCheck, Landmark, Clock } from 'lucide-react';
import { translations } from '../data/translations';

export default function TrustSection({ lang }) {
  const t = translations[lang].trust;

  const trustIcons = [ShieldCheck, FileCheck, Landmark, Clock];

  return (
    <section id="trust" className="py-20 bg-[#F5F0EB] relative border-t border-[#E8E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with luxury line indicator */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <div className="h-px w-8 bg-[#C8312A]"></div>
            <span className="eyebrow-tag text-[#C8312A]">
              {t.badge}
            </span>
            <div className="h-px w-8 bg-[#C8312A]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#1A1A1A] tracking-tight font-serif">
            {t.heading}
          </h2>
          <p className="text-sm text-[#6B6860]">
            {t.subheading}
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {t.points.map((pt, i) => {
            const Icon = trustIcons[i] || ShieldCheck;
            return (
              <div 
                key={i}
                className="bg-white p-6 rounded-2xl border border-[#E8E2DA] hover:border-[#F5C6C4] transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FCECEA] border border-[#C8312A]/20 flex items-center justify-center text-[#C8312A] mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] font-serif">
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
        <div className="mt-12 p-6 rounded-3xl bg-white border border-[#E8E2DA] flex flex-wrap items-center justify-around gap-6 text-center shadow-sm font-sans">
          <div>
            <p className="eyebrow-tag text-[#6B6860]">Approved Body</p>
            <p className="text-xl font-bold text-[#C8312A] font-serif">DTCP Approved</p>
          </div>
          <div className="hidden sm:block h-8 w-px bg-[#E8E2DA]"></div>
          <div>
            <p className="eyebrow-tag text-[#6B6860]">Urban Development</p>
            <p className="text-xl font-bold text-[#C8312A] font-serif">VMRDA Layouts</p>
          </div>
          <div className="hidden sm:block h-8 w-px bg-[#E8E2DA]"></div>
          <div>
            <p className="eyebrow-tag text-[#6B6860]">Real Estate Authority</p>
            <p className="text-xl font-bold text-[#C8312A] font-serif">AP RERA Registered</p>
          </div>
        </div>

      </div>
    </section>
  );
}
