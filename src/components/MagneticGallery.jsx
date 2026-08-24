import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, Sparkles } from 'lucide-react';

export default function MagneticGallery({ images = [], title = "Site Gallery" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const trackRef = useRef(null);

  const galleryList = images.length > 0 ? images : ["./images/luxury_villa_venture_1786442598108.jpg"];

  // Mouse Drag / Magnetic interaction for thumbnail track
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag speed multiplier
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % galleryList.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + galleryList.length) % galleryList.length);
      } else if (e.key === 'Escape') {
        setLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, galleryList.length]);

  return (
    <div className="space-y-4 select-none">
      
      {/* Main Magnetic Feature Image with Hover Focus & Zoom */}
      <div className="relative h-72 sm:h-96 md:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#1B1C1C] border border-[#E5E0D5] group shadow-sm">
        <img
          src={galleryList[activeIndex]}
          alt={`${title} - photo ${activeIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C1C]/60 via-transparent to-transparent pointer-events-none"></div>

        {/* Top-Right Lightbox Zoom Trigger */}
        <button
          onClick={() => setLightboxOpen(true)}
          className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-xl bg-white/90 hover:bg-white text-[#1B1C1C] text-xs font-mono font-bold shadow-md flex items-center space-x-1.5 transition-all backdrop-blur-md cursor-pointer hover:scale-105"
          title="Open Fullscreen View"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">EXPAND</span>
        </button>

        {/* Left & Right Magnetic Controls */}
        {galleryList.length > 1 && (
          <>
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + galleryList.length) % galleryList.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#1B1C1C] flex items-center justify-center backdrop-blur-md shadow-md transition-all cursor-pointer hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % galleryList.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#1B1C1C] flex items-center justify-center backdrop-blur-md shadow-md transition-all cursor-pointer hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Photo Counter Pill */}
        <div className="absolute bottom-4 left-4 px-3 py-1 rounded-lg bg-[#1B1C1C]/80 border border-white/20 text-white text-[11px] font-mono font-bold tracking-wider">
          PHOTO {activeIndex + 1} / {galleryList.length}
        </div>
      </div>

      {/* Magnetic Filmstrip Thumbnail Track (Interactive drag + click) */}
      {galleryList.length > 1 && (
        <div
          ref={trackRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex space-x-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#DBCBB0] cursor-grab ${
            isDragging ? 'cursor-grabbing' : ''
          }`}
        >
          {galleryList.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`shrink-0 w-24 sm:w-28 h-18 sm:h-20 rounded-xl overflow-hidden border-2 transition-all relative cursor-pointer ${
                idx === activeIndex
                  ? 'border-[#4A5D4E] scale-105 shadow-md ring-2 ring-[#4A5D4E]/30'
                  : 'border-[#E5E0D5] opacity-60 hover:opacity-100 hover:border-[#DBCBB0]'
              }`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover pointer-events-none"
              />
              {idx === activeIndex && (
                <div className="absolute inset-0 bg-[#4A5D4E]/10 pointer-events-none"></div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-[#1B1C1C]/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8">
          
          {/* Close Lightbox */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#1B1C1C] flex items-center justify-center transition-all cursor-pointer z-50"
            aria-label="Close fullscreen view"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Lightbox Main Image */}
          <div className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center">
            <img
              src={galleryList[activeIndex]}
              alt={title}
              className="max-h-[82vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />

            {/* Lightbox Nav */}
            {galleryList.length > 1 && (
              <>
                <button
                  onClick={() => setActiveIndex((prev) => (prev - 1 + galleryList.length) % galleryList.length)}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#1B1C1C] flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setActiveIndex((prev) => (prev + 1) % galleryList.length)}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#1B1C1C] flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Lightbox Footer Title */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-black/60 border border-white/10 text-white text-xs font-mono font-bold tracking-wider">
            {title} • Image {activeIndex + 1} of {galleryList.length}
          </div>
        </div>
      )}

    </div>
  );
}
