import React from 'react';
import { ShieldCheck, FileCheck, Landmark, Clock, CheckCircle2 } from 'lucide-react';
import { translations } from '../data/translations';

export default function TrustSection({ lang }) {
  const t = translations[lang].trust;

  const trustIcons = [ShieldCheck, FileCheck, Landmark, Clock];

  return (
    <section id="trust" className="py-20 bg-navy-900/60 relative border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {t.heading}
          </h2>
          <p className="text-base text-slate-300">
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
                className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-gold-500/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-heading">
                  {pt.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Government Approvals Verification Bar */}
        <div className="mt-12 p-6 rounded-3xl bg-navy-950 border border-gold-500/30 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <p className="text-xs text-slate-400 uppercase font-semibold">Approved Body</p>
            <p className="text-xl font-extrabold text-gold-400 font-heading">DTCP Approved</p>
          </div>
          <div className="hidden sm:block h-8 w-px bg-slate-800"></div>
          <div>
            <p className="text-xs text-slate-400 uppercase font-semibold">Urban Development</p>
            <p className="text-xl font-extrabold text-gold-400 font-heading">VMRDA Layouts</p>
          </div>
          <div className="hidden sm:block h-8 w-px bg-slate-800"></div>
          <div>
            <p className="text-xs text-slate-400 uppercase font-semibold">Real Estate Regulatory</p>
            <p className="text-xl font-extrabold text-emerald-400 font-heading">AP RERA Registered</p>
          </div>
        </div>

      </div>
    </section>
  );
}
