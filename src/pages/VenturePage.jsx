import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { MapPin, PhoneCall, ShieldCheck, CheckCircle2, ArrowLeft, Maximize2, Compass, Ruler, IndianRupee, MessageCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function VenturePage() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id) || properties[0];

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id, property]);

  const propertySchema = property ? {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": property.title,
    "description": property.description,
    "url": `https://sivateluguestates.com/venture/${property.id}`,
    "image": property.thumbnail,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": property.pricePerSqYd,
      "availability": property.status?.toLowerCase().includes('sold')
        ? "https://schema.org/SoldOut"
        : "https://schema.org/InStock"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": property.location,
      "addressRegion": "Andhra Pradesh",
      "addressCountry": "IN"
    },
    "provider": {
      "@type": "RealEstateAgent",
      "name": "Siva Telugu Estates",
      "telephone": "+919851633333",
      "url": "https://sivateluguestates.com"
    }
  } : null;

  if (!property) {
    return (
      <div className="min-h-screen bg-[#F5F0EB] flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-3xl font-bold text-[#1A1A1A] font-serif mb-4">Venture Not Found</h1>
        <p className="text-[#6B6860] mb-6">This project page doesn't exist or may have been moved.</p>
        <Link to="/properties" className="px-6 py-3 rounded-xl bg-[#1A1A1A] text-white font-sans font-bold text-sm">
          ← Back to All Ventures
        </Link>
      </div>
    );
  }

  const gallery = property.gallery && property.gallery.length > 0
    ? property.gallery
    : [property.thumbnail];

  const otherVentures = properties.filter(p => p.id !== property.id).slice(0, 3);

  return (
    <>
      <SEOHead
        title={`${property.title} | Plots for Sale in ${property.location} | Siva Telugu Estates`}
        description={`${property.tagline}. ${property.plotSizes} plots available in ${property.area}. ${property.approval}. Free site visit available — Call +91 98516 33333.`}
        canonicalUrl={`https://sivateluguestates.com/venture/${property.id}`}
        ogImage={property.thumbnail?.startsWith('http') ? property.thumbnail : `https://sivateluguestates.com${property.thumbnail?.replace('./', '/')}`}
        schemaData={propertySchema}
      />
      <div className="min-h-screen bg-[#F5F0EB] font-sans">

      {/* Sub-Header Navigation Bar matching navbar frosted glass */}
      <div 
        className="sticky top-16 sm:top-18 z-30 px-4 sm:px-8 py-3.5 transition-all duration-300 shadow-2xs"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.70)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(232, 226, 218, 0.50)',
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/properties"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 text-xs font-sans font-semibold text-[#1A1A1A] hover:text-[#C8312A] transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#C8312A]" aria-hidden="true" />
            <span>Back to All Ventures</span>
          </Link>
        </div>
      </div>

      {/* Hero Header Section */}
      <div className="relative min-h-[380px] sm:min-h-[460px] flex items-end overflow-hidden bg-[#1A1A1A]">
        {/* Hero Background Image */}
        <img
          src={property.thumbnail || gallery[0]}
          alt={property.title}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        {/* Gradient Overlay matching luxury purple-charcoal atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 w-full">
          
          {/* Status Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-1 rounded-md bg-[#1A1A1A]/90 border border-white/20 text-white text-[10px] font-sans font-medium tracking-[0.2em] uppercase">
              {property.status}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-sans font-medium tracking-[0.2em] uppercase">
              {property.location}
            </span>
          </div>

          {/* Large Serif Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white font-serif leading-tight max-w-4xl tracking-tight">
            {property.title}
          </h1>

          {/* Location corridor */}
          <p className="flex items-center text-white/80 text-sm mt-3 font-sans">
            <MapPin className="w-4 h-4 mr-1.5 shrink-0 text-[#F5C6C4]" aria-hidden="true" />
            <span>{property.area}</span>
          </p>
        </div>
      </div>

      {/* ─── SECTION 1: ABOUT THIS VENTURE & STICKY TOP SIDEBAR ─────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">

          {/* Left Div (lg:col-span-8): About, Specs, Features & Infrastructure */}
          <div className="lg:col-span-8 space-y-10">

            {/* About This Venture */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 mb-2">
                <div className="h-px w-8 bg-[#C8312A]"></div>
                <span className="eyebrow-tag text-[#C8312A]">
                  ABOUT THIS VENTURE
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-normal text-[#1A1A1A] font-serif leading-snug">
                {property.tagline}
              </h2>

              <p className="text-sm text-[#6B6860] leading-relaxed font-sans pt-1">
                {property.description}
              </p>
            </div>

            {/* 4 Spec Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E8E2DA] text-center shadow-xs">
                <div className="flex items-center justify-center space-x-1.5 text-[#C8312A] mb-2">
                  <Maximize2 className="w-4 h-4" aria-hidden="true" />
                  <span className="text-[9px] font-sans font-medium uppercase tracking-[0.2em] text-[#6B6860]">PLOT SIZES</span>
                </div>
                <p className="text-base font-bold text-[#1A1A1A] font-serif">{property.plotSizes}</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E8E2DA] text-center shadow-xs">
                <div className="flex items-center justify-center space-x-1.5 text-[#C8312A] mb-2">
                  <Compass className="w-4 h-4" aria-hidden="true" />
                  <span className="text-[9px] font-sans font-medium uppercase tracking-[0.2em] text-[#6B6860]">FACING</span>
                </div>
                <p className="text-base font-bold text-[#1A1A1A] font-serif">{property.facing}</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E8E2DA] text-center shadow-xs">
                <div className="flex items-center justify-center space-x-1.5 text-[#C8312A] mb-2">
                  <Ruler className="w-4 h-4" aria-hidden="true" />
                  <span className="text-[9px] font-sans font-medium uppercase tracking-[0.2em] text-[#6B6860]">ROAD WIDTH</span>
                </div>
                <p className="text-base font-bold text-[#1A1A1A] font-serif">{property.roadWidth}</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#FCECEA] border border-[#C8312A]/30 text-center shadow-xs">
                <div className="flex items-center justify-center space-x-1.5 text-[#C8312A] mb-2">
                  <IndianRupee className="w-4 h-4" aria-hidden="true" />
                  <span className="text-[9px] font-sans font-medium uppercase tracking-[0.2em] text-[#C8312A]">PRICE / SQ.YD</span>
                </div>
                <p className="text-base font-bold text-[#A82822] font-serif">{property.pricePerSqYd}</p>
              </div>
            </div>

            {/* Venture Features & Infrastructure */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#C8312A]" aria-hidden="true" />
                <h3 className="text-xs font-sans font-medium text-[#1A1A1A] uppercase tracking-[0.2em]">
                  VENTURE FEATURES &amp; INFRASTRUCTURE
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.highlights.map((h, i) => (
                  <div key={i} className="flex items-center space-x-3 p-4 rounded-xl bg-white border border-[#E8E2DA] shadow-xs hover:border-[#F5C6C4] transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#C8312A] shrink-0" aria-hidden="true" />
                    <span className="text-xs sm:text-sm text-[#2D2D2D] font-medium font-sans">{h}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Div (lg:col-span-4): Sticky Top Enquire Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-5">

              {/* Booking CTA Card */}
              <div id="booking-card" className="bg-white rounded-3xl border border-[#E8E2DA] p-6 sm:p-7 shadow-sm space-y-4">
                <div>
                  <span className="brand-subtitle">
                    ENQUIRE ABOUT THIS PLOT
                  </span>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] font-serif mt-1">
                    Book a Free Site Visit
                  </h3>
                </div>

                <p className="text-xs text-[#6B6860] leading-relaxed font-sans">
                  Our director Mr. Siva Yedida provides a free AC car facility for site visits. Call or WhatsApp to schedule.
                </p>

                <div className="space-y-3 pt-2">
                  <a
                    href={`https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20want%20to%20book%20a%20site%20visit%20for%20${encodeURIComponent(property.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl bg-[#C8312A] hover:bg-[#A82822] text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all shadow-md font-sans tracking-[0.1em]"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>WhatsApp Inquiry</span>
                  </a>

                  <a
                    href="tel:+919851633333"
                    className="w-full py-3.5 rounded-xl bg-white border border-[#E8E2DA] text-[#1A1A1A] font-bold text-xs sm:text-sm flex items-center justify-center hover:bg-[#F5F0EB] transition-all font-sans"
                  >
                    Call +91 98516 33333
                  </a>
                </div>
              </div>

              {/* Legal Approvals Card */}
              <div className="bg-[#FCECEA] rounded-3xl border border-[#C8312A]/20 p-6 space-y-2">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-[#C8312A]" aria-hidden="true" />
                  <span className="text-xs font-sans font-medium text-[#A82822] uppercase tracking-[0.2em]">
                    LEGAL APPROVALS
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#1A1A1A] font-serif">{property.approval}</h4>
                <p className="text-xs text-[#6B6860] leading-relaxed">
                  Clear title verified with Encumbrance Certificate and registered documents.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ─── SECTION 2: SITE PHOTO GALLERY ──────────────────────────────────────── */}
      <section className="w-full bg-[#F3EFEA]/80 py-16 border-y border-[#E8E2DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Gallery Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-normal text-[#1A1A1A] font-serif">
                Real Site Photography &amp; Layout Walkthrough
              </h3>
              <p className="text-xs text-[#6B6860] font-sans mt-1">
                Actual photos of the venture site, layout roads, and amenities
              </p>
            </div>
          </div>

          {/* Static Responsive Photo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {gallery.map((img, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden bg-[#E8E2DA] aspect-square shadow-xs hover:shadow-md transition-shadow group"
              >
                <img
                  src={typeof img === 'string' ? img : img.src}
                  alt={`${property.title} - Site Photo ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 3: EXPLORE MORE VENTURES ───────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div className="flex items-center space-x-3 mb-8">
          <div className="h-px w-8 bg-[#C8312A]"></div>
          <span className="eyebrow-tag text-[#C8312A]">
            EXPLORE MORE VENTURES
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherVentures.map((v) => (
            <Link
              to={`/venture/${v.id}`}
              key={v.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E2DA] hover:border-[#F5C6C4] transition-all group shadow-xs hover:shadow-md flex flex-col"
            >
              <div className="h-48 overflow-hidden bg-[#F0EDED] relative">
                <img
                  src={v.thumbnail}
                  alt={v.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-white text-[#1A1A1A] text-[9px] font-sans font-medium tracking-[0.2em] uppercase shadow-xs">
                  {v.location}
                </div>
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-sans font-medium text-[#C8312A] uppercase tracking-[0.2em] block mb-1">
                    {v.approval.split(' ')[0]} APPROVED
                  </span>
                  <h4 className="text-base font-bold text-[#1A1A1A] font-serif leading-snug group-hover:text-[#C8312A] transition-colors">
                    {v.title}
                  </h4>
                </div>
                <div className="pt-3 border-t border-[#E8E2DA] flex items-center justify-between">
                  <span className="text-xs font-sans font-bold text-[#1A1A1A]">{v.pricePerSqYd}</span>
                  <span className="text-xs font-sans font-bold text-[#C8312A] group-hover:translate-x-1 transition-transform">
                    VIEW VENTURE →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  </>
  );
}
