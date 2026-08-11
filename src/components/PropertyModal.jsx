import React from 'react';
import { X, MapPin, CheckCircle, ShieldCheck, Phone, Compass, Ruler, Maximize2 } from 'lucide-react';

export default function PropertyModal({ property, onClose }) {
  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-3xl bg-navy-900 border border-gold-500/40 shadow-2xl overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-navy-950/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent"></div>
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-3 py-1 rounded-full bg-gold-500 text-navy-950 font-extrabold text-xs uppercase tracking-wider">
              {property.location} • {property.approval}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-2">
              {property.title}
            </h3>
            <p className="text-xs text-gold-300 flex items-center mt-1">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              {property.area}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Key Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-navy-950 border border-slate-800">
            <div>
              <p className="text-[11px] text-slate-400 font-semibold uppercase flex items-center">
                <Maximize2 className="w-3.5 h-3.5 mr-1 text-gold-400" />
                Plot Sizes
              </p>
              <p className="text-sm font-bold text-white mt-1">{property.plotSizes}</p>
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-semibold uppercase flex items-center">
                <Compass className="w-3.5 h-3.5 mr-1 text-gold-400" />
                Facing
              </p>
              <p className="text-sm font-bold text-white mt-1">{property.facing}</p>
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-semibold uppercase flex items-center">
                <Ruler className="w-3.5 h-3.5 mr-1 text-gold-400" />
                Road Width
              </p>
              <p className="text-sm font-bold text-white mt-1">{property.roadWidth}</p>
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-semibold uppercase flex items-center">
                <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                Indicative Price
              </p>
              <p className="text-sm font-extrabold text-gold-400 mt-1">{property.pricePerSqYd}</p>
            </div>
          </div>

          {/* Venture Highlights List */}
          <div>
            <h4 className="text-base font-bold text-white font-heading mb-3 flex items-center">
              <CheckCircle className="w-5 h-5 text-gold-400 mr-2" />
              Venture Key Features &amp; Infrastructure
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {property.highlights.map((h, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs text-slate-200 bg-slate-800/40 p-2.5 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-gold-400 shrink-0"></div>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20want%20to%20know%20more%20details%20about%20${encodeURIComponent(property.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg text-center flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>
            
            <a
              href="tel:+919851633333"
              className="px-6 py-3.5 rounded-xl bg-gold-gradient text-navy-950 font-extrabold text-sm shadow-lg text-center flex items-center justify-center"
            >
              <span>Call +91 98516 33333</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
