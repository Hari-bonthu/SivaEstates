import React, { useState, useEffect } from 'react';
import { ShieldCheck, MapPin, Phone, ArrowRight, Play, ChevronLeft, ChevronRight, CheckCircle2, Award } from 'lucide-react';
import { translations } from '../data/translations';

export default function HeroSlider({ lang }) {
  const t = translations[lang].hero;

  const slides = [
    {
      id: 1,
      badge: "RAJAHMUNDRY PRIME CORRIDOR • DTCP APPROVED",
      title: lang === 'te' 
        ? "గోదావరి ప్రాంతంలో మీ కుటుంబానికి అత్యుత్తమ భవిష్యత్తు"
        : "Building Your Family's Best Future in Godavari Region",
      description: lang === 'te'
        ? "మోరంపూడి - లాలాచెరువు హైవే కారిడార్‌లో 100% లీగల్ క్లియర్ టైటిల్, DTCP & RERA ఆమోదిత ప్రీమియం విల్లా లేఅవుట్లు మరియు ఓపెన్ ప్లాట్లు."
        : "Curated residential plots and luxury villa layouts with 100% clear titles, DTCP & VMRDA approvals across Rajahmundry & Kakinada.",
      location: "Jetty Mayfair • Morampudi HQ",
      image: "./images/luxury_villa_venture_1786442598108.jpg",
      highlight: "DTCP & RERA Approved Luxury Villa Layout"
    },
    {
      id: 2,
      badge: "KAKINADA SMART CITY • NEW BRANCH LAUNCH",
      title: lang === 'te'
        ? "కాకినాడ స్మార్ట్ సిటీ & పోర్ట్ బెల్ట్ ఓపెన్ ప్లాట్ వెంచర్లు"
        : "Smart City & Port Belt High-Growth Land Investments",
      description: lang === 'te'
        ? "సామర్లకోట రోడ్ మరియు ఏడిబి హైవే బెల్ట్‌లో వేగంగా విలువ పెరిగే కమర్షియల్ & రెసిడెన్షియల్ ఓపెన్ ప్లాట్ వెంచర్లు."
        : "Strategic commercial & residential open plot ventures on ADB Highway and Samalkot corridor with massive appreciation potential.",
      location: "ADB Highway • Kakinada Port Belt",
      image: "./images/kakinada_branch_venture_1786442659994.jpg",
      highlight: "VMRDA & DTCP Approved Open Plots"
    },
    {
      id: 3,
      badge: "100% CLEAR TITLE • SPOT REGISTRATION",
      title: lang === 'te'
        ? "ఎన్‌హెచ్-16 హైవే కమర్షియల్ & రెసిడెన్షియల్ ప్లాట్లు"
        : "Prime NH-16 Highway Commercial & Residential Plots",
      description: lang === 'te'
        ? "దివాన్‌చెరువు మరియు మోరంపూడి పరిసర ప్రాంతాల్లో తక్షణ రిజిస్ట్రేషన్ మరియు ప్రముఖ బ్యాంకుల ద్వారా లోన్ సదుపాయం."
        : "Direct highway-front commercial and residential layouts with verified link documents, instant bank loans, and spot registration.",
      location: "Diwancheruvu & Dowleswaram Corridor",
      image: "./images/open_plot_layout_1786442637690.jpg",
      highlight: "Instant Spot Registration & Bank Loan Facility"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section id="home" className="relative pt-8 pb-20 overflow-hidden bg-[#F9F7F2]">
      
      {/* Background Image Carousel Fade */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-15 scale-105' : 'opacity-0 scale-100'
            } transition-transform duration-7000`}
          >
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9F7F2] via-[#F9F7F2]/90 to-[#F9F7F2]"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white border border-[#E5E0D5] text-[#4A5D4E] hover:bg-[#4A5D4E] hover:text-white transition-all hidden md:flex items-center justify-center cursor-pointer shadow-md"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white border border-[#E5E0D5] text-[#4A5D4E] hover:bg-[#4A5D4E] hover:text-white transition-all hidden md:flex items-center justify-center cursor-pointer shadow-md"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left min-h-[420px] flex flex-col justify-center">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#EAF0EC] border border-[#4A5D4E]/30 text-[#334537] text-xs font-mono tracking-widest uppercase shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#4A5D4E]" />
              <span>{slide.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1B1C1C] tracking-tight leading-[1.12] font-serif">
              {slide.title}
            </h1>

            {/* Paragraph Body */}
            <p className="text-base text-[#636863] leading-relaxed max-w-xl font-sans">
              {slide.description}
            </p>

            {/* Location Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1 text-xs font-mono">
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E5E0D5] text-[#2D2D2D] shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-[#4A5D4E]" />
                <span>{slide.location}</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E5E0D5] text-[#2D2D2D] shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Rajahmundry &amp; Kakinada</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#ventures"
                className="px-7 py-4 rounded-xl bg-[#4A5D4E] hover:bg-[#334537] text-white font-bold text-xs shadow-md transition-all flex items-center group cursor-pointer font-mono tracking-wider"
              >
                <span>{t.ctaVentures}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#gallery"
                className="px-6 py-4 rounded-xl bg-white hover:bg-[#F0EDED] border border-[#E5E0D5] text-[#1B1C1C] font-bold text-xs transition-all flex items-center cursor-pointer shadow-sm font-mono tracking-wider"
              >
                <Play className="w-3.5 h-3.5 mr-2 text-[#4A5D4E] fill-[#4A5D4E]" />
                <span>REAL SITE PROOF</span>
              </a>
            </div>

          </div>

          {/* Right Column: Founder Profile Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden bg-white border border-[#E5E0D5] shadow-xl group">
              
              {/* Founder Image */}
              <div className="relative h-[360px] sm:h-[400px] overflow-hidden bg-[#F0EDED]">
                <img
                  src="./images/siva_yedida_professional.jpg"
                  alt="Mr. Siva Yedida - Founder & Managing Director"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Corner Emblem Logo */}
                <div className="absolute top-4 right-4 p-2 rounded-xl bg-white/90 backdrop-blur-md border border-[#E5E0D5] shadow-md flex items-center justify-center">
                  <img
                    src="./images/logo/logo_ivory_gold.jpg"
                    alt="Siva Estates Emblem"
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </div>

              {/* Founder Details */}
              <div className="p-6 bg-white relative z-10 border-t border-[#E5E0D5]">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#4A5D4E] uppercase tracking-widest block font-bold">
                      {t.directorTitle}
                    </span>
                    <h3 className="text-2xl font-bold text-[#1B1C1C] font-serif mt-0.5">
                      {t.directorName}
                    </h3>
                  </div>
                  
                  <a
                    href="tel:+919851633333"
                    className="p-3 rounded-xl bg-[#EAF0EC] hover:bg-[#4A5D4E] hover:text-white text-[#4A5D4E] transition-all shadow-sm"
                    title="Request Direct Meeting / Call"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs text-[#636863] mt-2.5 leading-relaxed font-sans">
                  {t.directorDesc}
                </p>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#E5E0D5] text-[11px] font-mono text-[#636863]">
                  <span className="font-semibold text-[#1B1C1C]">12+ Years Leadership</span>
                  <a href="#contact" className="hover:text-[#4A5D4E] font-bold text-[#1B1C1C] underline">
                    REQUEST MEETING →
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Slide Indicators */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                i === currentSlide ? 'w-8 bg-[#4A5D4E]' : 'w-2.5 bg-[#DBCBB0]'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            ></button>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 mt-12 border-t border-[#E5E0D5]">
          <div>
            <p className="text-4xl sm:text-5xl font-normal text-[#334537] font-serif">50+</p>
            <p className="text-[11px] font-mono text-[#636863] uppercase tracking-widest mt-1">{t.stats.ventures}</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-normal text-[#334537] font-serif">1500+</p>
            <p className="text-[11px] font-mono text-[#636863] uppercase tracking-widest mt-1">{t.stats.clients}</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-normal text-[#334537] font-serif">12+ Yrs</p>
            <p className="text-[11px] font-mono text-[#636863] uppercase tracking-widest mt-1">{t.stats.experience}</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-normal text-[#334537] font-serif">100%</p>
            <p className="text-[11px] font-mono text-[#636863] uppercase tracking-widest mt-1">Clear Title Guaranteed</p>
          </div>
        </div>

      </div>
    </section>
  );
}
