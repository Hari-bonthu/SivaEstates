import React from 'react';
import {
  ShieldCheck,
  MapPin,
  ArrowRight,
  MessageCircle,
  Zap,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VentureCard({ project, onInspect }) {
  const handleWhatsApp = (e) => {
    e.stopPropagation();
    const message = encodeURIComponent(
      `Hello Siva Telugu Estates, I am interested in knowing more details & available plots in "${project.title}". Please share pricing and brochure.`
    );
    window.open(`https://wa.me/919851633333?text=${message}`, '_blank');
  };

  const isFastSelling = project.status?.toLowerCase().includes('fast');
  const isNewlyLaunched = project.status?.toLowerCase().includes('new');

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-[#E5E2D9] hover:border-[#1B2721] transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-xl font-sans">
      
      {/* Top Image with Badges matching screenshot */}
      <div className="relative h-64 overflow-hidden bg-[#F0EDED]">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Left Badge (Status with Zap / Sparkles) */}
        <div className="absolute top-3.5 left-3.5 flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#18231C]/95 text-white text-[10px] font-sans font-medium tracking-[0.2em] uppercase shadow-sm">
          {isNewlyLaunched ? (
            <>
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>NEWLY LAUNCHED</span>
            </>
          ) : (
            <>
              <Zap className="w-3 h-3 text-white fill-current" />
              <span>FAST SELLING</span>
            </>
          )}
        </div>

        {/* Right Badge (Location with MapPin) */}
        <div className="absolute top-3.5 right-3.5 flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/95 text-[#18231C] text-[10px] font-sans font-medium uppercase tracking-[0.2em] border border-[#E5E2D9] shadow-sm">
          <MapPin className="w-3 h-3 text-[#18231C]" />
          <span>{project.location?.toUpperCase() || 'RAJAHMUNDRY'}</span>
        </div>
      </div>

      {/* Approval Tag Banner Strip */}
      <div className="bg-[#FAF8F2] px-6 py-2.5 border-b border-[#EBE8DF] flex items-center space-x-2">
        <ShieldCheck className="w-3.5 h-3.5 text-[#18231C] shrink-0" />
        <span className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-[#18231C]">
          {project.approval || 'DTCP APPROVED & RERA REGISTERED'}
        </span>
      </div>

      {/* Body Details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div>
          {/* Title in classical Cormorant Garamond */}
          <h3 className="font-serif text-[24px] sm:text-[26px] font-normal text-[#1A1A1A] leading-tight mb-2 group-hover:text-[#334537] transition-colors">
            {project.title}
          </h3>

          {/* Location Corridor */}
          <p className="text-[#59564F] text-xs flex items-start gap-1.5 leading-relaxed font-sans mb-5">
            <MapPin className="w-3.5 h-3.5 text-[#18231C] shrink-0 mt-0.5" />
            <span>{project.area}</span>
          </p>

          {/* Specs Box Grid (Plot Sizes & Road Width) */}
          <div className="grid grid-cols-2 gap-3">
            {/* Plot Sizes Box */}
            <div className="bg-[#FAF9F6] p-3 rounded-xl border border-[#EDEBE4] flex flex-col justify-center">
              <div className="flex items-center space-x-1.5 mb-1 text-[#6B6860]">
                {/* Plot icon */}
                <svg className="w-3.5 h-3.5 text-[#18231C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 3v18" />
                  <path d="M15 3v18" />
                </svg>
                <span className="text-[9px] font-sans font-medium uppercase tracking-[0.2em]">PLOT SIZES</span>
              </div>
              <span className="text-xs sm:text-[13px] font-bold text-[#1A1A1A] font-sans">
                {project.plotSizes || '150 – 500 Sq.Yards'}
              </span>
            </div>

            {/* Road Width Box */}
            <div className="bg-[#FAF9F6] p-3 rounded-xl border border-[#EDEBE4] flex flex-col justify-center">
              <div className="flex items-center space-x-1.5 mb-1 text-[#6B6860]">
                {/* Road icon */}
                <svg className="w-3.5 h-3.5 text-[#18231C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19L8 5" />
                  <path d="M20 19L16 5" />
                  <line x1="12" y1="7" x2="12" y2="9" />
                  <line x1="12" y1="13" x2="12" y2="15" />
                </svg>
                <span className="text-[9px] font-sans font-medium uppercase tracking-[0.2em]">ROAD WIDTH</span>
              </div>
              <span className="text-xs sm:text-[13px] font-bold text-[#1A1A1A] font-sans">
                {project.roadWidth || '40ft & 60ft Roads'}
              </span>
            </div>
          </div>
        </div>

        {/* Pricing & Inspect Layout */}
        <div className="pt-4 border-t border-[#EBE8DF] flex items-center justify-between">
          <div>
            <span className="text-[9px] font-sans font-medium text-[#78756D] uppercase tracking-[0.2em] block">
              STARTING FROM
            </span>
            <span className="text-lg sm:text-xl font-bold text-[#1A1A1A] font-sans tracking-tight">
              {project.pricePerSqYd || '₹18,500 / Sq.Yd'}
            </span>
          </div>

          <button
            onClick={() => onInspect(project)}
            className="px-3.5 py-1.5 rounded-lg border border-[#D5D0C5] bg-[#FAF9F6] hover:bg-[#18231C] hover:text-white text-[#1A1A1A] text-[10px] font-sans font-medium uppercase tracking-[0.2em] transition-all cursor-pointer shadow-2xs"
          >
            INSPECT LAYOUT →
          </button>
        </div>

        {/* Action Row: VIEW DETAILS CTA + WhatsApp Button */}
        <div className="flex items-center space-x-2.5 pt-1">
          <Link
            to={`/venture/${project.id}`}
            className="flex-1 bg-[#18231C] hover:bg-[#2D3F35] text-white py-3.5 rounded-xl text-xs font-sans font-bold uppercase tracking-[0.2em] flex items-center justify-center space-x-2 transition-all shadow-xs"
          >
            <span>VIEW DETAILS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={handleWhatsApp}
            className="w-12 h-12 rounded-xl bg-[#FAF9F6] hover:bg-[#18231C] hover:text-white border border-[#E5E2D9] text-[#18231C] flex items-center justify-center transition-all cursor-pointer shadow-xs shrink-0"
            title="Instant WhatsApp Inquiry"
            aria-label="WhatsApp Inquiry"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
