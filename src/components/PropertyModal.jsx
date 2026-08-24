import React, { useState } from 'react';
import { X, MapPin, CheckCircle, ShieldCheck, Phone, Compass, Ruler, Maximize2, FileCheck, ArrowRight, MessageCircle } from 'lucide-react';

export default function PropertyModal({ property, onClose }) {
  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-3xl bg-white border border-[#E5E0D5] shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#1B1C1C] border border-[#E5E0D5] shadow-md transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#F0EDED]">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#4A5D4E] text-white font-mono font-bold text-[11px] uppercase tracking-wider">
                {property.location}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/90 text-[#1B1C1C] font-mono font-bold text-[11px] uppercase tracking-wider">
                {property.approval}
              </span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
              {property.title}
            </h3>
            
            <p className="text-xs text-white/80 flex items-center mt-1 font-mono">
              <MapPin className="w-3.5 h-3.5 mr-1 text-[#DBCBB0]" />
              {property.area}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Key Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#F9F7F2] border border-[#E5E0D5] font-mono text-xs">
            <div>
              <p className="text-[10px] text-[#636863] font-bold uppercase flex items-center">
                <Maximize2 className="w-3.5 h-3.5 mr-1 text-[#4A5D4E]" />
                Plot Sizes
              </p>
              <p className="text-xs font-bold text-[#1B1C1C] mt-1">{property.plotSizes}</p>
            </div>
            <div>
              <p className="text-[10px] text-[#636863] font-bold uppercase flex items-center">
                <Compass className="w-3.5 h-3.5 mr-1 text-[#4A5D4E]" />
                Facing
              </p>
              <p className="text-xs font-bold text-[#1B1C1C] mt-1">{property.facing}</p>
            </div>
            <div>
              <p className="text-[10px] text-[#636863] font-bold uppercase flex items-center">
                <Ruler className="w-3.5 h-3.5 mr-1 text-[#4A5D4E]" />
                Road Width
              </p>
              <p className="text-xs font-bold text-[#1B1C1C] mt-1">{property.roadWidth}</p>
            </div>
            <div>
              <p className="text-[10px] text-[#636863] font-bold uppercase flex items-center">
                <ShieldCheck className="w-3.5 h-3.5 mr-1 text-[#10B981]" />
                Indicative Price
              </p>
              <p className="text-xs font-bold text-[#4A5D4E] mt-1">{property.pricePerSqYd}</p>
            </div>
          </div>

          {/* Venture Highlights List */}
          <div>
            <h4 className="text-sm font-bold text-[#1B1C1C] font-serif mb-3 flex items-center">
              <CheckCircle className="w-4 h-4 text-[#4A5D4E] mr-2" />
              Venture Key Features &amp; Infrastructure
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {property.highlights.map((h, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs text-[#2D2D2D] bg-[#F9F7F2] p-2.5 rounded-xl border border-[#E5E0D5]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4A5D4E] shrink-0"></div>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Legal Scrutiny & Clear Title Guarantee */}
          <div className="p-4 rounded-2xl bg-[#EAF0EC] border border-[#4A5D4E]/30 text-xs text-[#334537] flex items-start space-x-3">
            <FileCheck className="w-5 h-5 text-[#4A5D4E] shrink-0 mt-0.5" />
            <div>
              <strong className="block font-serif text-[#1B1C1C]">100% Legal Title &amp; Bank Loan Assistance:</strong>
              This layout is fully scrutinized by senior legal advocates. Link documents, Encumbrance Certificate (EC), and spot registration support are guaranteed.
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 border-t border-[#E5E0D5] flex flex-col sm:flex-row gap-3 font-mono">
            <a
              href={`https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20want%20to%20know%20more%20details%20and%20inspect%20the%20layout%20for%20${encodeURIComponent(property.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3.5 rounded-xl bg-[#4A5D4E] hover:bg-[#334537] text-white font-bold text-xs shadow-md text-center flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </a>
            
            <a
              href="tel:+919851633333"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-[#F0EDED] border border-[#E5E0D5] text-[#1B1C1C] font-bold text-xs shadow-sm text-center flex items-center justify-center space-x-2 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#4A5D4E]" />
              <span>Call +91 98516 33333</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
