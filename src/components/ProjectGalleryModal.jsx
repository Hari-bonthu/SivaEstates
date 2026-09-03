import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, ExternalLink, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectGalleryModal = React.memo(function ProjectGalleryModal({ project, onClose }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const touchStartX = useRef(null);
  const thumbnailContainerRef = useRef(null);
  const activeThumbRef = useRef(null);

  const images = project?.gallery && project.gallery.length > 0
    ? project.gallery
    : [project?.thumbnail || '/images/ventures/jetty-mayfair.jpg'];

  // Auto-scroll active thumbnail into view
  useEffect(() => {
    if (activeThumbRef.current && thumbnailContainerRef.current) {
      activeThumbRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  }, [activeIdx]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setActiveIdx((prev) => (prev + 1) % images.length);
      if (e.key === 'ArrowLeft') setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [images.length, onClose]);

  // Touch swipe support for mobile (iPhones & Androids)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        // Swiped left -> next
        setActiveIdx((prev) => (prev + 1) % images.length);
      } else {
        // Swiped right -> prev
        setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
      }
    }
    touchStartX.current = null;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello Siva Telugu Estates, I am looking at the site photos for "${project?.title}". Please share full brochure and pricing.`
    );
    window.open(`https://wa.me/919851633333?text=${message}`, '_blank');
  };

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Container â€” Fixed Viewport-Fitted Responsive Box */}
      <div 
        className="relative z-10 w-full max-w-4xl h-[90vh] sm:h-[86vh] max-h-[820px] bg-[#141414] text-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Modal Top Header */}
        <div className="p-3 sm:p-4 md:p-5 flex items-center justify-between border-b border-white/10 bg-[#161616] shrink-0">
          <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0 pr-2">
            <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-[#C8312A] text-white text-[10px] sm:text-[11px] font-sans font-bold tracking-wide shrink-0">
              {project.location || 'Godavari'}
            </span>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base md:text-lg font-serif font-bold text-white leading-tight truncate">
                {project.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#9CA3AF] font-sans flex items-center gap-1 mt-0.5 truncate">
                <MapPin className="w-3 h-3 text-[#C8312A] shrink-0" />
                <span className="truncate">{project.area || project.location}</span>
                <span className="text-white/20 mx-0.5 sm:mx-1">â€¢</span>
                <span className="text-white/80 font-medium shrink-0">{activeIdx + 1} / {images.length}</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#C8312A] text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 active:scale-95"
            title="Close (Esc)"
            aria-label="Close"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Main Image Stage â€” Fits Any Aspect Ratio (Landscape / Portrait Flyers) Into Screen Without Resizing Frame */}
        <div 
          className="relative flex-1 min-h-0 bg-black flex items-center justify-center p-2 sm:p-4 overflow-hidden group touch-pan-y select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={images[activeIdx]}
            alt={`${project.title} site photo ${activeIdx + 1}`}
            className="max-w-full max-h-full w-auto h-auto object-contain transition-all duration-200 select-none drop-shadow-md pointer-events-none"
            onError={(e) => {
              const currentSrc = images[activeIdx];
              if (currentSrc && currentSrc.endsWith('.jpg') && !e.target.dataset.triedJpeg) {
                e.target.dataset.triedJpeg = 'true';
                e.target.src = currentSrc.replace('.jpg', '.jpeg');
              } else if (currentSrc && currentSrc.endsWith('.jpeg') && !e.target.dataset.triedJpg) {
                e.target.dataset.triedJpg = 'true';
                e.target.src = currentSrc.replace('.jpeg', '.jpg');
              }
            }}
          />

          {/* Left / Right Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={() => setActiveIdx((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-[#C8312A] text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs active:scale-90 z-10"
                title="Previous photo"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={() => setActiveIdx((prev) => (prev + 1) % images.length)}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-[#C8312A] text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs active:scale-90 z-10"
                title="Next photo"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail Dock Alternative â€” Clean track with nav controls and zero scrollbars */}
        {images.length > 1 && (
          <div className="relative bg-[#161616] border-t border-white/10 px-2 sm:px-4 py-2 sm:py-2.5 flex items-center shrink-0">
            
            {/* Scroll Left Button */}
            <button
              onClick={() => {
                if (thumbnailContainerRef.current) {
                  thumbnailContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
                }
              }}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-[#C8312A] text-white/70 hover:text-white transition-all mr-1.5 shrink-0 hidden sm:flex items-center justify-center cursor-pointer"
              title="Previous thumbnails"
              aria-label="Scroll thumbnails left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Thumbnail Track with Zero Scrollbar */}
            <div 
              ref={thumbnailContainerRef}
              className="flex-1 flex items-center gap-2 overflow-x-auto no-scrollbar scrollbar-none py-1 scroll-smooth"
            >
              {images.map((imgSrc, idx) => (
                <button
                  key={idx}
                  ref={idx === activeIdx ? activeThumbRef : null}
                  onClick={() => setActiveIdx(idx)}
                  className={`relative h-12 w-16 sm:h-14 sm:w-20 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activeIdx === idx 
                      ? 'border-[#C8312A] scale-105 shadow-md ring-2 ring-[#C8312A]/30 opacity-100' 
                      : 'border-white/10 opacity-50 hover:opacity-90 hover:border-white/30'
                  }`}
                  aria-label={`Photo ${idx + 1}`}
                >
                  <img
                    src={imgSrc}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      if (imgSrc.endsWith('.jpg') && !e.target.dataset.triedJpeg) {
                        e.target.dataset.triedJpeg = 'true';
                        e.target.src = imgSrc.replace('.jpg', '.jpeg');
                      } else if (imgSrc.endsWith('.jpeg') && !e.target.dataset.triedJpg) {
                        e.target.dataset.triedJpg = 'true';
                        e.target.src = imgSrc.replace('.jpeg', '.jpg');
                      }
                    }}
                  />
                  {activeIdx === idx && (
                    <div className="absolute inset-0 bg-[#C8312A]/10 pointer-events-none" />
                  )}
                </button>
              ))}
            </div>

            {/* Scroll Right Button */}
            <button
              onClick={() => {
                if (thumbnailContainerRef.current) {
                  thumbnailContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
                }
              }}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-[#C8312A] text-white/70 hover:text-white transition-all ml-1.5 shrink-0 hidden sm:flex items-center justify-center cursor-pointer"
              title="Next thumbnails"
              aria-label="Scroll thumbnails right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>
        )}

        {/* Footer Actions */}
        <div className="p-3 sm:p-4 bg-[#1A1A1A] border-t border-white/10 flex flex-wrap items-center justify-between gap-2.5 text-xs font-sans">
          <div className="flex items-center gap-2 text-[#9CA3AF] text-[11px]">
            <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/80 font-mono">
              {activeIdx + 1} / {images.length}
            </span>
            <span className="hidden md:inline">Use arrow keys or swipe to browse</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end ml-auto">
            <button
              onClick={handleWhatsApp}
              className="flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-emerald-700 text-white font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer text-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>

            {project.id && (
              <Link
                to={`/venture/${project.id}`}
                onClick={onClose}
                className="flex-1 sm:flex-none btn-red px-4 py-2.5 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer text-center"
              >
                <span>Full Venture</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            )}
          </div>
        </div>

      </div>
    </div>
  );
});

export default ProjectGalleryModal;
