import React, { useState } from 'react';
import { X, MapPin, Phone, CheckCircle2, ShieldCheck, ArrowRight, LayoutGrid, Compass, Ruler, IndianRupee, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PropertyModal({ property, onClose }) {
  const [activeImg, setActiveImg] = useState(0);
  if (!property) return null;

  const gallery = property.gallery || [property.thumbnail];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B1C1C]/70"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#E5E0D5] max-h-[92vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white border border-[#E5E0D5] shadow-md flex items-center justify-center text-[#2D2D2D] hover:bg-[#1B1C1C] hover:text-white transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto">
          
          {/* Hero Image with title overlay */}
          <div className="relative h-64 sm:h-80 bg-[#F0EDED] shrink-0">
            <img
              src={gallery[activeImg]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C1C]/80 via-transparent to-transparent"></div>
            
            {/* Title on image */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2.5 py-1 rounded bg-[#1B1C1C]/90 border border-white/20 text-white text-[10px] font-mono font-bold tracking-widest uppercase">
                  {property.status}
                </span>
                <span className="px-2.5 py-1 rounded bg-[#4A5D4E] text-white text-[10px] font-mono font-bold tracking-widest uppercase">
                  {property.approval.split(' ')[0]} APPROVED
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif leading-tight">
                {property.title}
              </h2>
              <p className="flex items-center text-white/80 text-xs mt-1 font-sans">
                <MapPin className="w-3.5 h-3.5 mr-1 shrink-0 text-[#DBCBB0]" />
                {property.area}
              </p>
            </div>

            {/* Gallery Thumbnails */}
            {gallery.length > 1 && (
              <div className="absolute bottom-4 right-4 flex space-x-1.5">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImg(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      idx === activeImg ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* 4 Spec Boxes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-[#F9F7F2] border border-[#E5E0D5] text-center">
                <div className="flex items-center justify-center space-x-1 text-[#4A5D4E] mb-1">
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest">PLOT SIZES</span>
                </div>
                <p className="text-sm font-bold text-[#1B1C1C] font-serif leading-tight">{property.plotSizes}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F9F7F2] border border-[#E5E0D5] text-center">
                <div className="flex items-center justify-center space-x-1 text-[#4A5D4E] mb-1">
                  <Compass className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest">FACING</span>
                </div>
                <p className="text-sm font-bold text-[#1B1C1C] font-serif leading-tight">{property.facing}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F9F7F2] border border-[#E5E0D5] text-center">
                <div className="flex items-center justify-center space-x-1 text-[#4A5D4E] mb-1">
                  <Ruler className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest">ROAD WIDTH</span>
                </div>
                <p className="text-sm font-bold text-[#1B1C1C] font-serif leading-tight">{property.roadWidth}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#EAF0EC] border border-[#4A5D4E]/30 text-center">
                <div className="flex items-center justify-center space-x-1 text-[#4A5D4E] mb-1">
                  <IndianRupee className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest">INDICATIVE PRICE</span>
                </div>
                <p className="text-sm font-bold text-[#334537] font-serif leading-tight">{property.pricePerSqYd}</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-sm text-[#636863] leading-relaxed font-sans">
                {property.description}
              </p>
            </div>

            {/* Features Checklist */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ShieldCheck className="w-4 h-4 text-[#4A5D4E]" />
                <h3 className="text-sm font-bold text-[#1B1C1C] uppercase tracking-wider font-mono">
                  Venture Features &amp; Infrastructure
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {property.highlights.map((h, i) => (
                  <div key={i} className="flex items-center space-x-2.5 p-3 rounded-xl bg-[#F9F7F2] border border-[#E5E0D5]">
                    <CheckCircle2 className="w-4 h-4 text-[#4A5D4E] shrink-0" />
                    <span className="text-xs text-[#2D2D2D] font-sans font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Strip */}
            {gallery.length > 1 && (
              <div>
                <h3 className="text-xs font-mono font-bold text-[#636863] uppercase tracking-widest mb-3">PHOTO GALLERY</h3>
                <div className="flex space-x-2 overflow-x-auto pb-1">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImg(idx)}
                      className={`shrink-0 w-20 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        idx === activeImg ? 'border-[#4A5D4E] scale-105' : 'border-transparent opacity-60 hover:opacity-90'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Fixed Footer CTA */}
        <div className="border-t border-[#E5E0D5] p-4 sm:p-6 bg-white shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href={`https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20am%20interested%20in%20${encodeURIComponent(property.title)}.%20Please%20share%20more%20details.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-4 rounded-xl bg-[#4A5D4E] hover:bg-[#334537] text-white font-bold text-sm flex items-center justify-center space-x-2 transition-all shadow-sm font-mono tracking-wide"
          >
            <Phone className="w-4 h-4" />
            <span>Inquire via WhatsApp</span>
          </a>

          <a
            href="tel:+919851633333"
            className="sm:w-48 py-4 rounded-xl bg-white border border-[#E5E0D5] text-[#1B1C1C] font-bold text-sm flex items-center justify-center transition-all hover:bg-[#F9F7F2] font-mono"
          >
            Call +91 98516 33333
          </a>
        </div>

      </div>
    </div>
  );
}
