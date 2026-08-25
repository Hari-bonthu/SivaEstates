import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  MapPin,
  Phone,
  CheckCircle2,
  ShieldCheck,
  LayoutGrid,
  Compass,
  Ruler,
  IndianRupee,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function PropertyModal({ property, onClose }) {
  const [activeImg, setActiveImg] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  if (!property) return null;

  const gallery = property.gallery && property.gallery.length > 0
    ? property.gallery
    : [property.thumbnail];

  // Auto-slide effect (changes every 3.5 seconds when not hovered)
  useEffect(() => {
    if (gallery.length <= 1 || isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % gallery.length);
    }, 3500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gallery.length, isPaused]);

  // Keyboard navigation for arrow keys (Left/Right) and Escape to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setActiveImg((prev) => (prev - 1 + gallery.length) % gallery.length);
      } else if (e.key === 'ArrowRight') {
        setActiveImg((prev) => (prev + 1) % gallery.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gallery.length, onClose]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveImg((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveImg((prev) => (prev + 1) % gallery.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/75 backdrop-blur-xs font-sans"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#E8E2DA] max-h-[92vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-[#E8E2DA] shadow-md flex items-center justify-center text-[#2D2D2D] hover:bg-[#1A1A1A] hover:text-white transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto">
          
          {/* Hero Image Carousel with Auto-slide & Manual Arrow Buttons */}
          <div 
            className="relative h-72 sm:h-96 bg-[#18231C] shrink-0 overflow-hidden group select-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <img
              key={activeImg}
              src={gallery[activeImg]}
              alt={`${property.title} view ${activeImg + 1}`}
              className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
            />
            
            {/* Atmospheric Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-transparent to-black/20 pointer-events-none"></div>

            {/* Left / Right Carousel Arrow Buttons */}
            {gallery.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer hover:scale-110 shadow-lg"
                  title="Previous image (Left arrow)"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer hover:scale-110 shadow-lg"
                  title="Next image (Right arrow)"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Counter & Indicator Dots */}
                <div className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-md border border-white/20 text-white text-[10px] font-sans font-medium tracking-[0.2em]">
                  {activeImg + 1} / {gallery.length}
                </div>
              </>
            )}

            {/* Title on image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2.5 py-1 rounded bg-[#1A1A1A]/90 border border-white/20 text-white text-[10px] font-sans font-medium tracking-[0.2em] uppercase">
                  {property.status}
                </span>
                <span className="px-2.5 py-1 rounded bg-[#C8312A] text-white text-[10px] font-sans font-medium tracking-[0.2em] uppercase">
                  {property.approval?.split(' ')[0] || 'DTCP'} APPROVED
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-normal text-white font-serif leading-tight">
                {property.title}
              </h2>
              <p className="flex items-center text-white/80 text-xs mt-1 font-sans">
                <MapPin className="w-3.5 h-3.5 mr-1 shrink-0 text-[#F5C6C4]" />
                {property.area}
              </p>
            </div>

            {/* Indicator Dots inside Hero Image */}
            {gallery.length > 1 && (
              <div className="absolute bottom-4 right-4 z-20 flex space-x-1.5">
                {gallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImg(idx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      idx === activeImg ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* 4 Spec Boxes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-[#F5F0EB] border border-[#E8E2DA] text-center">
                <div className="flex items-center justify-center space-x-1 text-[#C8312A] mb-1">
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-sans font-medium uppercase tracking-[0.2em] text-[#6B6860]">PLOT SIZES</span>
                </div>
                <p className="text-sm font-bold text-[#1A1A1A] font-sans leading-tight">{property.plotSizes}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F5F0EB] border border-[#E8E2DA] text-center">
                <div className="flex items-center justify-center space-x-1 text-[#C8312A] mb-1">
                  <Compass className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-sans font-medium uppercase tracking-[0.2em] text-[#6B6860]">FACING</span>
                </div>
                <p className="text-sm font-bold text-[#1A1A1A] font-sans leading-tight">{property.facing || 'East / West'}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F5F0EB] border border-[#E8E2DA] text-center">
                <div className="flex items-center justify-center space-x-1 text-[#C8312A] mb-1">
                  <Ruler className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-sans font-medium uppercase tracking-[0.2em] text-[#6B6860]">ROAD WIDTH</span>
                </div>
                <p className="text-sm font-bold text-[#1A1A1A] font-sans leading-tight">{property.roadWidth}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FCECEA] border border-[#C8312A]/30 text-center">
                <div className="flex items-center justify-center space-x-1 text-[#C8312A] mb-1">
                  <IndianRupee className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-sans font-medium uppercase tracking-[0.2em] text-[#C8312A]">STARTING AT</span>
                </div>
                <p className="text-sm font-bold text-[#A82822] font-sans leading-tight">{property.pricePerSqYd}</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-sm text-[#59564F] leading-relaxed font-sans">
                {property.description}
              </p>
            </div>

            {/* Features Checklist */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ShieldCheck className="w-4 h-4 text-[#C8312A]" />
                <h3 className="text-xs font-sans font-medium text-[#1A1A1A] uppercase tracking-[0.2em]">
                  Venture Features &amp; Infrastructure
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(property.highlights || [
                  '100% Clear Title & Spot Registration',
                  'DTCP & RERA Approved Master Blueprint',
                  'Underground Drainage & Electricity',
                  'Avenue Plantation & Compound Wall',
                  'Grand Arch Entrance with 24/7 Security',
                  'Bank Loan Approved: SBI, HDFC, ICICI'
                ]).map((h, i) => (
                  <div key={i} className="flex items-center space-x-2.5 p-3 rounded-xl bg-[#F5F0EB] border border-[#E8E2DA]">
                    <CheckCircle2 className="w-4 h-4 text-[#C8312A] shrink-0" />
                    <span className="text-xs text-[#2D2D2D] font-sans font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Fixed Footer CTA */}
        <div className="border-t border-[#E8E2DA] p-4 sm:p-6 bg-white shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href={`https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20am%20interested%20in%20${encodeURIComponent(property.title)}.%20Please%20share%20more%20details.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3.5 rounded-xl bg-[#18231C] hover:bg-[#A82822] text-white font-sans font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center space-x-2 transition-all shadow-xs"
          >
            <Phone className="w-4 h-4" />
            <span>Inquire via WhatsApp</span>
          </a>

          <a
            href="tel:+919851633333"
            className="sm:w-48 py-3.5 rounded-xl bg-white border border-[#E8E2DA] text-[#1A1A1A] font-sans font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center transition-all hover:bg-[#F5F0EB]"
          >
            Call +91 98516 33333
          </a>
        </div>

      </div>
    </div>
  );
}
