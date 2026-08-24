import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { MapPin, Phone, ShieldCheck, CheckCircle2, ArrowLeft, LayoutGrid, Compass, Ruler, IndianRupee, ChevronLeft, ChevronRight } from 'lucide-react';

export default function VenturePage() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);
  const [activeImg, setActiveImg] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen bg-[#F9F7F2] flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-3xl font-bold text-[#1B1C1C] font-serif mb-4">Venture Not Found</h1>
        <p className="text-[#636863] mb-6">This project page doesn't exist or may have been moved.</p>
        <Link to="/" className="px-6 py-3 rounded-xl bg-[#1B1C1C] text-white font-mono font-bold text-sm">
          ← Back to Home
        </Link>
      </div>
    );
  }

  const gallery = property.gallery || [property.thumbnail];
  const otherVentures = properties.filter(p => p.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F9F7F2] font-sans">

      {/* Back Navigation Bar */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#E5E0D5] px-4 sm:px-8 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 text-xs font-mono font-bold text-[#1B1C1C] hover:text-[#4A5D4E] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL VENTURES</span>
        </Link>
        <a
          href="#contact-venture"
          className="px-4 py-2 rounded-lg bg-[#4A5D4E] text-white text-xs font-mono font-bold tracking-wider hover:bg-[#334537] transition-all"
        >
          BOOK SITE VISIT
        </a>
      </div>

      {/* Full-Bleed Hero */}
      <div className="relative h-[55vh] sm:h-[65vh] overflow-hidden bg-[#1B1C1C]">
        <img
          src={gallery[activeImg]}
          alt={property.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C1C] via-[#1B1C1C]/30 to-transparent"></div>

        {/* Gallery Navigation */}
        {gallery.length > 1 && (
          <>
            <button
              onClick={() => setActiveImg((prev) => (prev - 1 + gallery.length) % gallery.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveImg((prev) => (prev + 1) % gallery.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Hero Text */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 mb-3">
            <span className="px-2.5 py-1 rounded-md bg-[#4A5D4E] text-white text-[9px] font-mono font-bold tracking-widest uppercase">
              {property.status}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/20 text-white text-[9px] font-mono font-bold tracking-widest uppercase backdrop-blur-md border border-white/20">
              {property.location}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white font-serif leading-tight max-w-3xl">
            {property.title}
          </h1>
          <p className="flex items-center text-white/70 text-sm mt-2">
            <MapPin className="w-4 h-4 mr-1.5 shrink-0" />
            {property.area}
          </p>
        </div>

        {/* Gallery Dot Indicators */}
        {gallery.length > 1 && (
          <div className="absolute bottom-4 right-6 sm:right-12 flex space-x-1.5">
            {gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  i === activeImg ? 'w-5 bg-white' : 'w-1.5 bg-white/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Content */}
          <div className="lg:col-span-8 space-y-10">

            {/* Tagline & Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-px w-8 bg-[#4A5D4E]"></div>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#4A5D4E]">
                  ABOUT THIS VENTURE
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-normal text-[#1B1C1C] font-serif">
                {property.tagline}
              </h2>
              <p className="text-sm text-[#636863] leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* 4 Spec Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-[#E5E0D5] text-center shadow-xs">
                <div className="flex items-center justify-center space-x-1 text-[#4A5D4E] mb-2">
                  <LayoutGrid className="w-4 h-4" />
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest">PLOT SIZES</span>
                </div>
                <p className="text-base font-bold text-[#1B1C1C] font-serif">{property.plotSizes}</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#E5E0D5] text-center shadow-xs">
                <div className="flex items-center justify-center space-x-1 text-[#4A5D4E] mb-2">
                  <Compass className="w-4 h-4" />
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest">FACING</span>
                </div>
                <p className="text-base font-bold text-[#1B1C1C] font-serif">{property.facing}</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#E5E0D5] text-center shadow-xs">
                <div className="flex items-center justify-center space-x-1 text-[#4A5D4E] mb-2">
                  <Ruler className="w-4 h-4" />
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest">ROAD WIDTH</span>
                </div>
                <p className="text-base font-bold text-[#1B1C1C] font-serif">{property.roadWidth}</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#EAF0EC] border border-[#4A5D4E]/30 text-center shadow-xs">
                <div className="flex items-center justify-center space-x-1 text-[#4A5D4E] mb-2">
                  <IndianRupee className="w-4 h-4" />
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest">PRICE / SQ.YD</span>
                </div>
                <p className="text-base font-bold text-[#334537] font-serif">{property.pricePerSqYd}</p>
              </div>
            </div>

            {/* Features & Infrastructure */}
            <div>
              <div className="flex items-center space-x-2 mb-5">
                <ShieldCheck className="w-5 h-5 text-[#4A5D4E]" />
                <h3 className="text-sm font-mono font-bold text-[#1B1C1C] uppercase tracking-wider">
                  Venture Features & Infrastructure
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.highlights.map((h, i) => (
                  <div key={i} className="flex items-center space-x-3 p-4 rounded-xl bg-white border border-[#E5E0D5] shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#4A5D4E] shrink-0" />
                    <span className="text-sm text-[#2D2D2D] font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Gallery */}
            {gallery.length > 1 && (
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="h-px w-8 bg-[#4A5D4E]"></div>
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#4A5D4E]">SITE GALLERY</span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
                  {gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setActiveImg(i);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`aspect-video rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        i === activeImg ? 'border-[#4A5D4E]' : 'border-transparent hover:border-[#DBCBB0]'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Sticky Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">

              {/* CTA Card */}
              <div id="contact-venture" className="bg-white rounded-2xl border border-[#E5E0D5] p-6 shadow-sm space-y-4">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#4A5D4E] uppercase tracking-widest block">ENQUIRE ABOUT THIS PLOT</span>
                  <h3 className="text-xl font-bold text-[#1B1C1C] font-serif mt-1">Book a Free Site Visit</h3>
                </div>

                <p className="text-xs text-[#636863] leading-relaxed">
                  Our director Mr. Siva Yedida provides a free AC car facility for site visits. Call or WhatsApp to schedule.
                </p>

                <div className="space-y-2.5 pt-2">
                  <a
                    href={`https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20want%20to%20book%20a%20site%20visit%20for%20${encodeURIComponent(property.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl bg-[#4A5D4E] hover:bg-[#334537] text-white font-bold text-sm flex items-center justify-center space-x-2 transition-all font-mono tracking-wide"
                  >
                    <Phone className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                  </a>

                  <a
                    href="tel:+919851633333"
                    className="w-full py-4 rounded-xl bg-white border border-[#E5E0D5] text-[#1B1C1C] font-bold text-sm flex items-center justify-center hover:bg-[#F9F7F2] transition-all font-mono"
                  >
                    Call +91 98516 33333
                  </a>
                </div>
              </div>

              {/* Approval Box */}
              <div className="bg-[#EAF0EC] rounded-2xl border border-[#4A5D4E]/20 p-5 space-y-2">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-[#4A5D4E]" />
                  <span className="text-xs font-mono font-bold text-[#334537] uppercase tracking-wider">LEGAL APPROVALS</span>
                </div>
                <p className="text-sm font-bold text-[#1B1C1C] font-serif">{property.approval}</p>
                <p className="text-xs text-[#636863]">Clear title verified with Encumbrance Certificate and registered documents.</p>
              </div>

            </div>
          </div>

        </div>

        {/* Other Ventures */}
        <div className="mt-16 pt-12 border-t border-[#E5E0D5]">
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-px w-8 bg-[#4A5D4E]"></div>
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#4A5D4E]">EXPLORE MORE VENTURES</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {otherVentures.map(v => (
              <Link
                to={`/venture/${v.id}`}
                key={v.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E5E0D5] hover:border-[#DBCBB0] transition-all group shadow-xs"
              >
                <div className="h-36 overflow-hidden bg-[#F0EDED]">
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-[9px] font-mono font-bold text-[#4A5D4E] uppercase tracking-wider">{v.location}</span>
                  <h4 className="text-sm font-bold text-[#1B1C1C] font-serif leading-tight">{v.title}</h4>
                  <p className="text-xs text-[#4A5D4E] font-mono font-bold">{v.pricePerSqYd}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
