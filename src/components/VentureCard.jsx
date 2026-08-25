import React from 'react';
import { MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Map project type string to a short display label
function getTypeLabel(typeStr) {
  if (!typeStr) return 'Plots';
  const t = typeStr.toLowerCase();
  if (t.includes('villa')) return 'Villas';
  if (t.includes('farmland') || t.includes('farm')) return 'Farmland';
  if (t.includes('apartment')) return 'Apartments';
  if (t.includes('commercial')) return 'Commercial';
  return 'Plots';
}

// Map status to badge text and style
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
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const typeLabel = project.displayType || getTypeLabel(project.type);
  const { label: statusLabel, completed } = getStatusBadge(project.status, project.category);
  const priceDisplay = project.priceDisplay || project.pricePerSqYd || '₹18,500 / sq.yd';
  const plotRange = project.plotRange || project.plotSizes || '150 – 500 sq.yd';
  const description = project.description || '';

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#E8E2DA] hover:border-[#F5C6C4] transition-all duration-300 group shadow-sm hover:shadow-lg font-sans">

      {/* Image with badges */}
      <div className="relative h-56 overflow-hidden bg-[#F0EDED]">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Status badge — top-left, red pill */}
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-sans font-bold tracking-wide shadow-sm ${
          completed
            ? 'bg-[#3D3D3D] text-white'
            : 'bg-[#C8312A] text-white'
        }`}>
          {statusLabel}
        </div>

        {/* Property type tag — bottom-right, white pill */}
        <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/95 text-[#1A1A1A] text-[10px] font-sans font-medium shadow-sm">
          {typeLabel}
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col gap-3">

        {/* Location */}
        <div className="flex items-center gap-1.5 text-[#6B6860] text-xs font-sans">
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          <span>{project.area || project.location}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl font-bold text-[#1A1A1A] leading-snug group-hover:text-[#C8312A] transition-colors">
          {project.title}
        </h3>

        {/* Description excerpt */}
        {description && (
          <p className="text-xs text-[#6B6860] leading-relaxed font-sans line-clamp-2">
            {description}
          </p>
        )}

        {/* Price row */}
        <div className="flex items-center justify-between pt-3 border-t border-[#E8E2DA]">
          <div>
            <p className="text-[10px] text-[#9CA3AF] font-sans mb-0.5">Starting from</p>
            <p className="text-sm font-bold text-[#1A1A1A] font-sans">{priceDisplay}</p>
            <p className="text-[11px] text-[#6B6860] font-sans mt-0.5">□ {plotRange}</p>
          </div>

          <div className="flex items-center gap-2">
            {/* WhatsApp quick inquiry */}
            <button
              onClick={handleWhatsApp}
              className="w-9 h-9 rounded-full bg-[#F5F0EB] hover:bg-[#FCECEA] text-[#6B6860] hover:text-[#C8312A] border border-[#E8E2DA] flex items-center justify-center transition-all cursor-pointer"
              title="WhatsApp Inquiry"
              aria-label="WhatsApp Inquiry"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </button>

            {/* Details link */}
            <Link
              to={`/venture/${project.id}`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#1A1A1A] hover:text-[#C8312A] transition-colors"
            >
              Details
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
