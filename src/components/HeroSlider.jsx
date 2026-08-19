import React, { useState, useEffect } from 'react';
import { ShieldCheck, MapPin, Phone, ArrowRight, Play, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { translations } from '../data/translations';

export default function HeroSlider({ lang }) {
  const t = translations[lang].hero;

  const slides = [
    {
      id: 1,
      title: "Building Your Family's Best Future in Godavari Region",
      teluguTagline: "మీ Family కి Best Future ఏంటి..?",
      subtitle: "TRUSTED REAL ESTATE DEVELOPER & CONSULTANT",
      location: "Jetty Mayfair • Rajahmundry",
      image: "./images/luxury_villa_venture_1786442598108.jpg",
      highlight: "DTCP & RERA Approved Luxury Villa Layout"
    },
    {
      id: 2,
      title: "Smart City & Port Belt Open Plot Ventures",
      teluguTagline: "సేఫ్ పెట్టుబడి • అత్యధిక రిటర్న్స్",
      subtitle: "NEWLY OPENED KAKINADA BRANCH",
      location: "ADB Highway • Kakinada Port Belt",
      image: "./images/kakinada_branch_venture_1786442659994.jpg",
      highlight: "VMRDA & DTCP Approved Open Plots"
    },
    {
      id: 3,
      title: "Prime NH-16 Highway Commercial & Residential Plots",
      teluguTagline: "100% లీగల్ క్లియర్ టైటిల్ గ్యారెంటీ",
      subtitle: "100% CLEAR TITLE GUARANTEE",
      location: "Morampudi & Diwancheruvu Corridor",
      image: "./images/open_plot_layout_1786442637690.jpg",
      highlight: "Instant Spot Registration & Bank Loan Facility"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play timer (5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
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
    <section id="home" className="relative pt-8 pb-20 overflow-hidden bg-[#0F1115]">
      
      {/* Background Image Carousel with Overlay */}
      <div className="absolute inset-0 z-0">
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-30 scale-105' : 'opacity-0 scale-100'
            } transition-transform duration-7000`}
          >
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover mix-blend-luminosity"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1115] via-[#0F1115]/90 to-[#0F1115]"></div>
      </div>

      {/* Main Slide Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Carousel Prev / Next Arrow Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#1A1D23]/80 border border-white/10 text-white hover:text-[#F5A623] hover:border-[#F5A623] transition-all hidden md:flex items-center justify-center cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#1A1D23]/80 border border-white/10 text-white hover:text-[#F5A623] hover:border-[#F5A623] transition-all hidden md:flex items-center justify-center cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content Grid: Left Text, Right Founder Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Subtitle */}
          <div className="lg:col-span-7 space-y-6 text-left min-h-[420px] flex flex-col justify-center">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1A1D23] border border-[#F5A623]/40 text-[#F5A623] text-xs font-mono tracking-widest uppercase shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{slide.subtitle}</span>
            </div>

            {/* Telugu Tagline Banner */}
            <div className="p-3.5 rounded-2xl bg-[#1A1D23]/90 border-l-4 border-[#F5A623] shadow-lg">
              <p className="text-xl sm:text-2xl font-extrabold text-[#F5A623] tracking-wide font-heading">
                "{slide.teluguTagline}"
              </p>
              <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                Official Motto of Siva Telugu Estates • {slide.highlight}
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-heading">
              {slide.title}
            </h1>

            {/* Location Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1 text-xs">
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#1A1D23] border border-white/10 text-slate-200 font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#F5A623]" />
                <span>{slide.location}</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#1A1D23] border border-white/10 text-slate-200 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Rajahmundry &amp; Kakinada</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#ventures"
                className="px-7 py-4 rounded-xl bg-[#F5A623] hover:bg-[#E0951C] text-[#0F1115] font-extrabold text-base shadow-xl transition-all flex items-center group cursor-pointer"
              >
                <span>Explore Open Plots</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#videos"
                className="px-6 py-4 rounded-xl bg-[#1A1D23] hover:bg-[#262A33] border border-white/15 text-white font-bold text-base transition-all flex items-center cursor-pointer"
              >
                <Play className="w-4 h-4 mr-2 text-[#F5A623] fill-[#F5A623]" />
                <span>Watch YouTube Tours</span>
              </a>
            </div>

          </div>

          {/* Right Column: Founder & Director Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden bg-[#1A1D23] border border-white/10 shadow-2xl group">
              
              {/* Founder Image */}
              <div className="relative h-[360px] sm:h-[400px] overflow-hidden bg-[#0F1115]">
                <img
                  src="./images/siva_yedida_professional.jpg"
                  alt="Mr. Siva Yedida - Founder & Director"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D23] via-[#1A1D23]/20 to-transparent"></div>
              </div>

              {/* Founder Text Card Content */}
              <div className="p-6 bg-[#1A1D23] relative z-10 -mt-6 rounded-t-3xl border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-[#F5A623] uppercase tracking-widest block">
                      FOUNDER &amp; DIRECTOR
                    </span>
                    <h3 className="text-2xl font-extrabold text-white font-heading mt-0.5">
                      Siva Yedida
                    </h3>
                  </div>
                  
                  <a
                    href="tel:+919851633333"
                    className="p-3 rounded-xl bg-[#0F1115] hover:bg-[#F5A623] hover:text-[#0F1115] text-[#F5A623] border border-[#F5A623]/30 transition-all shadow-md"
                    title="Call Siva Yedida Direct"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                  Dedicated to securing high-appreciation land assets &amp; transparent titles for over 1500+ happy families.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Slide Indicators Dots */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                i === currentSlide ? 'w-8 bg-[#F5A623]' : 'w-2.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            ></button>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 mt-12 border-t border-white/10">
          <div>
            <p className="text-4xl sm:text-5xl font-black text-[#F5A623] font-heading">50+</p>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Ventures Completed</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-black text-[#F5A623] font-heading">1500+</p>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Happy Plot Owners</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-black text-[#F5A623] font-heading">12+ Yrs</p>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Industry Record</p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-black text-[#F5A623] font-heading">100%</p>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Clear Title Guarantee</p>
          </div>
        </div>

      </div>
    </section>
  );
}
