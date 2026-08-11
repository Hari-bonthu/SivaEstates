import React from 'react';
import { Heart, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';
import { translations } from '../data/translations';

export default function FourPillars({ lang }) {
  const t = translations[lang].pillars;

  const iconMap = {
    HeartHandshake: Heart,
    ShieldCheck: ShieldCheck,
    TrendingUp: TrendingUp,
    Sparkles: Sparkles
  };

  return (
    <section className="py-16 bg-navy-900/60 relative border-y border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {t.heading}
          </h2>
          <p className="text-base text-slate-300">
            {t.subheading}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {t.items.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || ShieldCheck;
            return (
              <div 
                key={idx}
                className="glass-card p-6 rounded-2xl glass-card-hover relative group border border-gold-500/20"
              >
                {/* Number Badge */}
                <span className="absolute top-4 right-4 text-3xl font-extrabold text-slate-800 group-hover:text-gold-500/30 transition-colors font-heading">
                  0{idx + 1}
                </span>

                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-gold-gradient p-0.5 shadow-lg mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-full h-full bg-navy-950 rounded-[14px] flex items-center justify-center">
                    <IconComponent className="w-7 h-7 text-gold-400" />
                  </div>
                </div>

                {/* Telugu Tagline Header */}
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-gold-500/15 text-gold-400 font-bold text-xs mb-2">
                  {pillar.telugu}
                </div>

                {/* Pillar Title & Description */}
                <h3 className="text-xl font-bold text-white font-heading group-hover:text-gold-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
