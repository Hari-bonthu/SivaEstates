import React from 'react';
import { ShieldCheck, Award, MapPin, Youtube, Phone, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { translations } from '../data/translations';

export default function Hero({ lang }) {
  const t = translations[lang].hero;

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-8 pb-16 overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0 bg-hero-gradient opacity-90"></div>
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Brand Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Subtitle Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-4 h-4 fill-gold-400" />
              <span>{t.subtitle}</span>
            </div>

            {/* Telugu Tagline Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-gold-500/20 via-navy-900/80 to-navy-900 border-l-4 border-gold-500 shadow-xl">
              <p className="text-2xl sm:text-3xl font-extrabold text-gold-400 tracking-wide">
                "{t.taglineTelugu}"
              </p>
              <p className="text-xs text-slate-300 mt-1 font-medium">
                Official Motto of Siva Telugu Estates • Securing Your Family's Dreams
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight font-heading">
              {t.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              {t.description}
            </p>

            {/* Location Badges */}
            <div className="flex flex-wrap gap-3 pt-1">
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-navy-800/80 border border-slate-700 text-slate-200 text-xs font-semibold">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span>Rajahmundry HQ (Main Hub)</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-navy-800/80 border border-slate-700 text-slate-200 text-xs font-semibold">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Kakinada (Newly Opened Branch)</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-navy-800/80 border border-slate-700 text-slate-200 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span>DTCP &amp; VMRDA Approved</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#ventures"
                className="px-7 py-4 rounded-xl bg-gold-gradient text-navy-950 font-extrabold text-base shadow-xl hover:shadow-gold-500/25 hover:scale-105 transition-all flex items-center"
              >
                <span>{t.ctaVentures}</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>

              <a
                href="#videos"
                className="px-6 py-4 rounded-xl bg-navy-800/90 border border-gold-500/30 text-white font-bold text-base hover:bg-slate-800 hover:border-gold-400 transition-all flex items-center"
              >
                <Youtube className="w-5 h-5 mr-2 text-red-500" />
                <span>{t.ctaVideos}</span>
              </a>

              <a
                href="https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20want%20to%20know%20more%20about%20your%20open%20plots%20in%20Rajahmundry%20and%20Kakinada."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg transition-all flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>{t.ctaWhatsApp}</span>
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800">
              <div className="p-3 rounded-xl bg-navy-900/60 border border-slate-800">
                <p className="text-2xl font-extrabold text-gold-400">50+</p>
                <p className="text-xs text-slate-400 font-medium">Ventures Completed</p>
              </div>
              <div className="p-3 rounded-xl bg-navy-900/60 border border-slate-800">
                <p className="text-2xl font-extrabold text-gold-400">1500+</p>
                <p className="text-xs text-slate-400 font-medium">Happy Plot Owners</p>
              </div>
              <div className="p-3 rounded-xl bg-navy-900/60 border border-slate-800">
                <p className="text-2xl font-extrabold text-gold-400">12+ Yrs</p>
                <p className="text-xs text-slate-400 font-medium">Industry Record</p>
              </div>
              <div className="p-3 rounded-xl bg-navy-900/60 border border-slate-800">
                <p className="text-2xl font-extrabold text-emerald-400">100%</p>
                <p className="text-xs text-slate-400 font-medium">Clear Title Guarantee</p>
              </div>
            </div>

          </div>

          {/* Right Column: Founder & Director Portrait Poster Highlight */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Glowing Backdrop Frame */}
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 rounded-3xl blur-lg opacity-70 animate-pulse"></div>
              
              <div className="relative rounded-3xl overflow-hidden bg-navy-900 border-2 border-gold-500/50 shadow-2xl">
                {/* Director Poster Image */}
                <img
                  src="./images/siva_yedida_poster.png"
                  alt="Mr. Siva Yedida - Founder & Director Siva Telugu Estates"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />

                {/* Overlaid Founder Information Overlay */}
                <div className="p-5 bg-gradient-to-t from-navy-950 via-navy-900/90 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gold-400 font-semibold uppercase tracking-wider flex items-center">
                        <Award className="w-3.5 h-3.5 mr-1" />
                        {t.directorTitle}
                      </span>
                      <h3 className="text-2xl font-extrabold text-white font-heading mt-0.5">
                        {t.directorName}
                      </h3>
                    </div>
                    <a
                      href="tel:+919851633333"
                      className="p-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold transition-all shadow-md"
                      title="Call Director"
                    >
                      <Phone className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {t.directorDesc}
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 p-3 rounded-2xl bg-navy-900 border border-gold-500 shadow-2xl hidden sm:flex items-center space-x-2">
                <ShieldCheck className="w-6 h-6 text-gold-400" />
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">Verification</p>
                  <p className="text-xs font-bold text-white">100% Legal Title</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
