import React from 'react';
import { ShieldCheck, FileCheck, Landmark, Clock } from 'lucide-react';
import { translations } from '../data/translations';

export default function TrustSection({ lang }) {
  const t = translations[lang].trust;

  const trustIcons = [ShieldCheck, FileCheck, Landmark, Clock];

  return (
    <section id="trust" className="py-20 bg-[#0F1115] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#1A1D23] border border-[#10B981]/30 text-[#10B981] text-xs font-mono tracking-widest uppercase">
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {t.heading}
          </h2>
          <p className="text-sm text-slate-400">
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
                className="bg-[#1A1D23] p-6 rounded-2xl border border-white/10 hover:border-[#F5A623]/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F1115] border border-white/10 flex items-center justify-center text-[#F5A623] mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-heading">
                  {pt.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Government Approvals Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-[#1A1D23] border border-white/10 flex flex-wrap items-center justify-around gap-6 text-center font-mono">
          <div>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">Approved Body</p>
            <p className="text-xl font-extrabold text-[#F5A623] font-heading">DTCP Approved</p>
          </div>
          <div className="hidden sm:block h-8 w-px bg-white/10"></div>
          <div>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">Urban Development</p>
            <p className="text-xl font-extrabold text-[#F5A623] font-heading">VMRDA Layouts</p>
          </div>
          <div className="hidden sm:block h-8 w-px bg-white/10"></div>
          <div>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">Real Estate Authority</p>
            <p className="text-xl font-extrabold text-[#10B981] font-heading">AP RERA Registered</p>
          </div>
        </div>

      </div>
    </section>
  );
}
