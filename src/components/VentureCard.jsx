import React from 'react';
import { MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function getTypeLabel(typeStr) {
  if (!typeStr) return 'Plots';
  const t = typeStr.toLowerCase();
  if (t.includes('villa')) return 'Villas';
  if (t.includes('farmland') || t.includes('farm')) return 'Farmland';
  if (t.includes('apartment')) return 'Apartments';
  if (t.includes('commercial')) return 'Commercial';
  return 'Plots';
}

function getStatusBadge(status, category) {
  if (!status) return { label: 'ONGOING', completed: false };
  const s = status.toLowerCase();
  if (s.includes('sold') || s.includes('completed') || category === 'completed') {
    return { label: 'COMPLETED', completed: true };
  }
  return { label: 'ONGOING', completed: false };
}

export default function VentureCard({ project, onInspect }) {
  const handleWhatsApp = (e) => {
    e.stopPropagation();
    const message = encodeURIComponent(
      `Hello Siva Telugu Estates, I am interested in "${project.title}". Please share pricing and brochure.`
    );
    window.open(`https://wa.me/919851633333?text=${message}`, '_blank');
  };

  const typeLabel = project.displayType || getTypeLabel(project.type);
  const { label: statusLabel, completed } = getStatusBadge(project.status, project.category);
  const priceDisplay = project.priceDisplay || project.pricePerSqYd || '₹18,500 / sq.yd';
  const plotRange = project.plotRange || project.plotSizes || '150 – 500 sq.yd';
  const description = project.description || '';

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#E8E2DA] hover:border-[#F5C6C4] transition-all duration-300 group shadow-xs hover:shadow-lg font-sans flex flex-col justify-between">

      {/* Image with badges */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-[#F0EDED]">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />

        {/* Status badge — top-left, red pill */}
        <div className={`absolute top-3 left-3 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-sans font-bold tracking-wide shadow-sm ${
          completed
            ? 'bg-[#3D3D3D] text-white'
            : 'bg-[#C8312A] text-white'
        }`}>
          {statusLabel}
        </div>

        {/* Property type tag — bottom-right, white pill */}
        <div className="absolute bottom-3 right-3 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/95 text-[#1A1A1A] text-[9px] sm:text-[10px] font-sans font-semibold shadow-sm">
          {typeLabel}
        </div>
      </div>

      {/* Card body */}
      <div className="p-4 sm:p-5 flex flex-col gap-2.5 sm:gap-3 flex-1 justify-between">

        <div>
          {/* Location */}
          <div className="flex items-center gap-1.5 text-[#6B6860] text-xs font-sans mb-1">
            <MapPin className="w-3.5 h-3.5 text-[#C8312A] shrink-0" />
            <span className="truncate">{project.area || project.location}</span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A1A1A] leading-snug group-hover:text-[#C8312A] transition-colors line-clamp-2">
            {project.title}
          </h3>

          {/* Description excerpt */}
          {description && (
            <p className="text-xs text-[#6B6860] leading-relaxed font-sans line-clamp-2 mt-1">
              {description}
            </p>
          )}
        </div>

        {/* Price row */}
        <div className="flex items-center justify-between pt-3 border-t border-[#E8E2DA] mt-2">
          <div>
            <p className="text-[10px] text-[#9CA3AF] font-sans">Starting from</p>
            <p className="text-sm sm:text-base font-bold text-[#1A1A1A] font-sans">{priceDisplay}</p>
            <p className="text-[11px] text-[#6B6860] font-sans mt-0.5">□ {plotRange}</p>
          </div>

          <div className="flex items-center gap-2">
            {/* WhatsApp quick inquiry */}
            <button
              onClick={handleWhatsApp}
              className="w-10 h-10 rounded-full bg-[#F5F0EB] hover:bg-[#FCECEA] text-[#6B6860] hover:text-[#C8312A] border border-[#E8E2DA] flex items-center justify-center transition-all cursor-pointer active:scale-95 shrink-0"
              title="WhatsApp Inquiry"
              aria-label="WhatsApp Inquiry"
            >
              <MessageCircle className="w-4 h-4" />
            </button>

            {/* Details link */}
            <Link
              to={`/venture/${project.id}`}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-[#1A1A1A] hover:bg-[#C8312A] text-white text-xs font-bold transition-colors shrink-0"
            >
              <span>Details</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
