import React from 'react';
import { MapPin, Phone, Building2, Navigation, Sparkles, CheckCircle2 } from 'lucide-react';
import { translations } from '../data/translations';

export default function BranchSpotlight({ lang }) {
  const t = translations[lang].branches;

  return (
    <section id="branches" className="py-20 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {t.heading}
          </h2>
          <p className="text-base text-slate-300">
            {t.subheading}
          </p>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          
          {/* Card 1: Rajahmundry HQ */}
          <div className="glass-card rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl hover:border-gold-400 transition-all">
            <div className="relative h-48 bg-gradient-to-r from-navy-900 via-slate-900 to-navy-900 p-6 flex flex-col justify-between overflow-hidden">
              <img 
                src="./images/luxury_villa_venture_1786442598108.jpg" 
                alt="Rajahmundry HQ" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
              />
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-gold-500 text-navy-950 font-extrabold text-xs tracking-wider uppercase">
                  {t.rajahmundry.tag}
                </span>
                <Building2 className="w-6 h-6 text-gold-400" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {t.rajahmundry.name}
                </h3>
                <p className="text-xs text-gold-300 font-medium">East Godavari Real Estate Hub</p>
              </div>
            </div>

            <div className="p-6 space-y-4 bg-navy-900/90">
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.rajahmundry.desc}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="flex items-start space-x-3 text-sm text-slate-200">
                  <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <span>{t.rajahmundry.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-200">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                  <a href="tel:+919851633333" className="hover:text-gold-400 font-bold">
                    {t.rajahmundry.phone}
                  </a>
                </div>
              </div>

              <div className="pt-3">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Key Venture Belts:
                </p>
                <p className="text-xs text-gold-300 font-medium bg-navy-950 p-3 rounded-xl border border-slate-800">
                  {t.rajahmundry.areas}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20want%20to%20visit%20your%20Rajahmundry%20HQ."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-gold-gradient text-navy-950 font-bold text-sm shadow-md hover:scale-[1.02] transition-transform flex items-center justify-center space-x-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Visit Rajahmundry Office</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Kakinada Branch (Newly Opened) */}
          <div className="glass-card rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl hover:border-emerald-400 transition-all">
            <div className="relative h-48 bg-gradient-to-r from-navy-900 via-slate-900 to-navy-900 p-6 flex flex-col justify-between overflow-hidden">
              <img 
                src="./images/kakinada_branch_venture_1786442659994.jpg" 
                alt="Kakinada Branch" 
                className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-overlay"
              />
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-500 text-white font-extrabold text-xs tracking-wider uppercase flex items-center shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 mr-1" />
                  {t.kakinada.tag}
                </span>
                <Building2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {t.kakinada.name}
                </h3>
                <p className="text-xs text-emerald-300 font-medium">Smart City &amp; Port Corridor Specialist</p>
              </div>
            </div>

            <div className="p-6 space-y-4 bg-navy-900/90">
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.kakinada.desc}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="flex items-start space-x-3 text-sm text-slate-200">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{t.kakinada.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-200">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                  <a href="tel:+919851633333" className="hover:text-emerald-400 font-bold">
                    {t.kakinada.phone}
                  </a>
                </div>
              </div>

              <div className="pt-3">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Key Venture Belts:
                </p>
                <p className="text-xs text-emerald-300 font-medium bg-navy-950 p-3 rounded-xl border border-slate-800">
                  {t.kakinada.areas}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20want%20to%20visit%20your%20new%20Kakinada%20Branch."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md hover:scale-[1.02] transition-transform flex items-center justify-center space-x-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Visit Kakinada Office</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
