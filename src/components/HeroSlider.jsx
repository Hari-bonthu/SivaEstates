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
      subtitle: "TRUSTED REAL ESTATE DEVELOPER",
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
    <section id="home" className="relative pt-10 pb-16 overflow-hidden bg-[#F9F7F2]">
      
      {/* Background Architectural Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-10 scale-105' : 'opacity-0 scale-100'
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Location & Certification Bar */}
            <div className="flex items-center space-x-2 text-xs font-semibold text-[#4A5D4E] tracking-wider uppercase">
              <ShieldCheck className="w-4 h-4 text-[#4A5D4E]" />
              <span>{slide.subtitle} • {slide.location}</span>
            </div>

            {/* Handcrafted Telugu Motto Banner */}
            <div className="p-4 rounded-2xl bg-white border border-[#E5E0D5] shadow-xs">
              <p className="text-xl sm:text-2xl font-bold text-[#334537] font-serif">
                "{slide.teluguTagline}"
              </p>
              <p className="text-xs text-[#636863] mt-1 font-medium">
                Official Motto of Siva Telugu Estates • {slide.highlight}
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1B1C1C] tracking-tight leading-[1.15] font-serif">
              {slide.title}
            </h1>

            {/* Subtext */}
            <p className="text-base text-[#636863] leading-relaxed max-w-xl">
              Premier DTCP &amp; VMRDA approved open plot ventures, luxury villa layouts, and high-growth land investments across Rajahmundry &amp; Kakinada.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#ventures"
                className="px-7 py-3.5 rounded-xl bg-[#4A5D4E] hover:bg-[#334537] text-white font-bold text-sm shadow-md transition-all flex items-center group cursor-pointer"
              >
                <span>Explore Open Plots</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#videos"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-[#F0EDED] border border-[#E5E0D5] text-[#4A5D4E] font-bold text-sm transition-all flex items-center cursor-pointer shadow-xs"
              >
                <Play className="w-4 h-4 mr-2 text-[#4A5D4E] fill-[#4A5D4E]" />
                <span>Watch YouTube Tours</span>
              </a>
            </div>

            {/* Slide Navigation Controls */}
            <div className="flex items-center space-x-3 pt-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-lg bg-white border border-[#E5E0D5] text-[#2D2D2D] hover:bg-[#4A5D4E] hover:text-white transition-all cursor-pointer shadow-xs"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center space-x-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      i === currentSlide ? 'w-6 bg-[#4A5D4E]' : 'w-2 bg-[#E5E0D5]'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  ></button>
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 rounded-lg bg-white border border-[#E5E0D5] text-[#2D2D2D] hover:bg-[#4A5D4E] hover:text-white transition-all cursor-pointer shadow-xs"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Founder & Director Portrait Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden bg-white border border-[#E5E0D5] shadow-lg group">
              
              {/* Founder Image */}
              <div className="relative h-[360px] sm:h-[400px] overflow-hidden bg-[#F0EDED]">
                <img
                  src="./images/siva_yedida_professional.jpg"
                  alt="Mr. Siva Yedida - Founder & Director"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Founder Details */}
              <div className="p-6 bg-white relative z-10 border-t border-[#E5E0D5]">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#4A5D4E] uppercase tracking-wider block font-bold font-mono">
                      FOUNDER &amp; DIRECTOR
                    </span>
                    <h3 className="text-2xl font-bold text-[#1B1C1C] font-serif mt-0.5">
                      Siva Yedida
                    </h3>
                  </div>
                  
                  <a
                    href="tel:+919851633333"
                    className="p-3 rounded-xl bg-[#EAF0EC] hover:bg-[#4A5D4E] hover:text-white text-[#4A5D4E] transition-all shadow-xs"
                    title="Call Director Direct"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-xs text-[#636863] mt-2 leading-relaxed">
                  Dedicated to securing high-appreciation land assets &amp; transparent titles for over 1500+ happy families.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Handcrafted Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 mt-12 border-t border-[#E5E0D5]">
          <div>
            <p className="text-3xl sm:text-4xl font-normal text-[#334537] font-serif">50+</p>
            <p className="text-xs text-[#636863] font-medium uppercase tracking-wider mt-1">Ventures Completed</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-normal text-[#334537] font-serif">1500+</p>
            <p className="text-xs text-[#636863] font-medium uppercase tracking-wider mt-1">Happy Plot Owners</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-normal text-[#334537] font-serif">12+ Yrs</p>
            <p className="text-xs text-[#636863] font-medium uppercase tracking-wider mt-1">Industry Record</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-normal text-[#334537] font-serif">100%</p>
            <p className="text-xs text-[#636863] font-medium uppercase tracking-wider mt-1">Clear Title Guarantee</p>
          </div>
        </div>

      </div>
    </section>
  );
}
