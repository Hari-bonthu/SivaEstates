import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { MapPin, Phone, ShieldCheck, CheckCircle2, ArrowLeft, LayoutGrid, Compass, Ruler, IndianRupee, MessageCircle } from 'lucide-react';
import MagneticCarousel from '../components/MagneticCarousel';

export default function VenturePage() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id) || properties[0];

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen bg-[#F9F7F2] flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-3xl font-bold text-[#1B1C1C] font-serif mb-4">Venture Not Found</h1>
        <p className="text-[#636863] mb-6">This project page doesn't exist or may have been moved.</p>
        <Link to="/" className="px-6 py-3 rounded-xl bg-[#1B1C1C] text-white font-mono font-bold text-sm">
          ← Back to All Ventures
        </Link>
      </div>
    );
  }

  const gallery = property.gallery && property.gallery.length > 0
    ? property.gallery
    : [property.thumbnail];

  const otherVentures = properties.filter(p => p.id !== property.id).slice(0, 3);

  const scrollToBooking = (e) => {
    e.preventDefault();
    document.getElementById('booking-card')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] font-sans">

      {/* Sub-Header Navigation Bar matching screenshot */}
      <div className="bg-white border-b border-[#E5E0D5] px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 text-xs font-mono font-bold text-[#1B1C1C] hover:text-[#4A5D4E] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Back to All Ventures</span>
          </Link>

          <button
            onClick={scrollToBooking}
            className="px-4 py-2 rounded-lg border border-[#E5E0D5] hover:bg-[#1B1C1C] hover:text-white text-[#1B1C1C] text-xs font-mono font-bold tracking-wider transition-all cursor-pointer shadow-xs"
          >
            Book Site Visit
          </button>
        </div>
      </div>

      {/* Hero Header Section matching screenshot */}
      <div className="relative min-h-[380px] sm:min-h-[460px] flex items-end overflow-hidden bg-[#1B1C1C]">
        {/* Hero Background Image */}
        <img
          src={property.thumbnail || gallery[0]}
          alt={property.title}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        {/* Gradient Overlay matching luxury purple-charcoal atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C1C] via-[#1B1C1C]/40 to-transparent"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 w-full">
          
          {/* Status Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-1 rounded-md bg-[#1B1C1C]/90 border border-white/20 text-white text-[10px] font-mono font-bold tracking-widest uppercase">
              {property.status}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-mono font-bold tracking-widest uppercase">
              {property.location}
            </span>
          </div>

          {/* Large Serif Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white font-serif leading-tight max-w-4xl tracking-tight">
            {property.title}
          </h1>

          {/* Location corridor */}
          <p className="flex items-center text-white/80 text-sm mt-3 font-sans">
            <MapPin className="w-4 h-4 mr-1.5 shrink-0 text-[#DBCBB0]" />
            <span>{property.area}</span>
          </p>
        </div>
      </div>

      {/* Main Content Grid matching 2-Column layout in screenshot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">

          {/* Left Column: Details, Specs, Features & OriginKit Magnetic Gallery */}
          <div className="lg:col-span-8 space-y-12">

            {/* About This Venture */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 mb-2">
                <div className="h-px w-8 bg-[#4A5D4E]"></div>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#4A5D4E]">
                  ABOUT THIS VENTURE
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-normal text-[#1B1C1C] font-serif leading-snug">
                {property.tagline}
              </h2>

              <p className="text-sm text-[#636863] leading-relaxed font-sans pt-1">
                {property.description}
              </p>
            </div>

            {/* 4 Spec Cards Grid matching screenshot */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E0D5] text-center shadow-xs">
                <div className="flex items-center justify-center space-x-1.5 text-[#4A5D4E] mb-2">
                  <LayoutGrid className="w-4 h-4" />
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#636863]">PLOT SIZES</span>
                </div>
                <p className="text-base font-bold text-[#1B1C1C] font-serif">{property.plotSizes}</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E0D5] text-center shadow-xs">
                <div className="flex items-center justify-center space-x-1.5 text-[#4A5D4E] mb-2">
                  <Compass className="w-4 h-4" />
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#636863]">FACING</span>
                </div>
                <p className="text-base font-bold text-[#1B1C1C] font-serif">{property.facing}</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E0D5] text-center shadow-xs">
                <div className="flex items-center justify-center space-x-1.5 text-[#4A5D4E] mb-2">
                  <Ruler className="w-4 h-4" />
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#636863]">ROAD WIDTH</span>
                </div>
                <p className="text-base font-bold text-[#1B1C1C] font-serif">{property.roadWidth}</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#EAF0EC] border border-[#4A5D4E]/30 text-center shadow-xs">
                <div className="flex items-center justify-center space-x-1.5 text-[#4A5D4E] mb-2">
                  <IndianRupee className="w-4 h-4" />
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#4A5D4E]">PRICE / SQ.YD</span>
                </div>
                <p className="text-base font-bold text-[#334537] font-serif">{property.pricePerSqYd}</p>
              </div>
            </div>

            {/* Venture Features & Infrastructure matching screenshot */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#4A5D4E]" />
                <h3 className="text-xs font-mono font-bold text-[#1B1C1C] uppercase tracking-wider">
                  VENTURE FEATURES &amp; INFRASTRUCTURE
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.highlights.map((h, i) => (
                  <div key={i} className="flex items-center space-x-3 p-4 rounded-xl bg-white border border-[#E5E0D5] shadow-xs hover:border-[#DBCBB0] transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#4A5D4E] shrink-0" />
                    <span className="text-xs sm:text-sm text-[#2D2D2D] font-medium font-sans">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Site Gallery with OriginKit Magnetic Carousel */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-3 mb-2">
                <div className="h-px w-8 bg-[#4A5D4E]"></div>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#4A5D4E]">
                  SITE GALLERY • INTERACTIVE DOCK
                </span>
              </div>

              <div className="bg-white rounded-3xl border border-[#E5E0D5] p-4 sm:p-6 shadow-xs overflow-hidden">
                <p className="text-center text-xs text-[#636863] font-mono mb-2">
                  ✦ Hover across bars to magnify • Click any card to expand
                </p>
                <div className="overflow-x-auto overflow-y-hidden py-2">
                  <MagneticCarousel
                    images={gallery.map(img => (typeof img === 'string' ? { src: img } : img))}
                    collapsedWidth={75}
                    hoverWidth={175}
                    collapsedHeight={320}
                    hoverHeight={380}
                    openSize={490}
                    gap={12}
                    influence={180}
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Sidebar matching screenshot */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-5">

              {/* Booking CTA Card */}
              <div id="booking-card" className="bg-white rounded-3xl border border-[#E5E0D5] p-6 sm:p-7 shadow-sm space-y-4">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#636863] uppercase tracking-widest block">
                    ENQUIRE ABOUT THIS PLOT
                  </span>
                  <h3 className="text-2xl font-bold text-[#1B1C1C] font-serif mt-1">
                    Book a Free Site Visit
                  </h3>
                </div>

                <p className="text-xs text-[#636863] leading-relaxed font-sans">
                  Our director Mr. Siva Yedida provides a free AC car facility for site visits. Call or WhatsApp to schedule.
                </p>

                <div className="space-y-3 pt-2">
                  <a
                    href={`https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20want%20to%20book%20a%20site%20visit%20for%20${encodeURIComponent(property.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl bg-[#4A5D4E] hover:bg-[#334537] text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all shadow-md font-mono tracking-wider"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                  </a>

                  <a
                    href="tel:+919851633333"
                    className="w-full py-3.5 rounded-xl bg-white border border-[#E5E0D5] text-[#1B1C1C] font-bold text-xs sm:text-sm flex items-center justify-center hover:bg-[#F9F7F2] transition-all font-mono"
                  >
                    Call +91 98516 33333
                  </a>
                </div>
              </div>

              {/* Legal Approvals Card */}
              <div className="bg-[#EAF0EC] rounded-3xl border border-[#4A5D4E]/20 p-6 space-y-2">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-[#4A5D4E]" />
                  <span className="text-xs font-mono font-bold text-[#334537] uppercase tracking-wider">
                    LEGAL APPROVALS
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#1B1C1C] font-serif">{property.approval}</h4>
                <p className="text-xs text-[#636863] leading-relaxed">
                  Clear title verified with Encumbrance Certificate and registered documents.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Explore More Ventures Section matching screenshot bottom */}
        <div className="mt-20 pt-12 border-t border-[#E5E0D5]">
          <div className="flex items-center space-x-3 mb-8">
            <div className="h-px w-8 bg-[#4A5D4E]"></div>
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#4A5D4E]">
              EXPLORE MORE VENTURES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherVentures.map((v) => (
              <Link
                to={`/venture/${v.id}`}
                key={v.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E5E0D5] hover:border-[#DBCBB0] transition-all group shadow-xs hover:shadow-md flex flex-col"
              >
                <div className="h-48 overflow-hidden bg-[#F0EDED] relative">
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-white text-[#1B1C1C] text-[9px] font-mono font-bold tracking-wider uppercase shadow-xs">
                    {v.location}
                  </div>
                </div>

                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-mono font-bold text-[#4A5D4E] uppercase tracking-wider block mb-1">
                      {v.approval.split(' ')[0]} APPROVED
                    </span>
                    <h4 className="text-base font-bold text-[#1B1C1C] font-serif leading-snug group-hover:text-[#4A5D4E] transition-colors">
                      {v.title}
                    </h4>
                  </div>
                  <div className="pt-3 border-t border-[#E5E0D5] flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#1B1C1C]">{v.pricePerSqYd}</span>
                    <span className="text-xs font-mono font-bold text-[#4A5D4E] group-hover:translate-x-1 transition-transform">
                      VIEW VENTURE →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
