import React, { useState } from 'react';
import { properties } from '../data/properties';
import {
  ArrowRight,
  ShieldCheck,
  FileCheck,
  Sparkles,
  Users
} from 'lucide-react';
import VentureCard from './VentureCard';
import PropertyModal from './PropertyModal';
import { Link } from 'react-router-dom';

export default function ProjectTabsCatalog({ lang = 'en' }) {
  const [selectedProperty, setSelectedProperty] = useState(null);

  // 3 Featured Gated Ventures matching the reference screenshot exactly
  const featuredVentures = [
    {
      id: "jetty-mayfair",
      title: "Jetty Mayfair Luxury Villa Layout",
      location: "Rajahmundry",
      area: "Morampudi – Lalacheruvu Highway Corridor",
      pricePerSqYd: "₹18,500 / Sq.Yd",
      plotSizes: "150 – 500 Sq.Yards",
      roadWidth: "40ft & 60ft Blacktop Roads",
      approval: "DTCP APPROVED & RERA REGISTERED",
      status: "FAST SELLING",
      thumbnail: "./images/luxury_villa_venture_1786442598108.jpg",
    },
    {
      id: "seshadri-heights",
      title: "Seshadri Heights Gated Community",
      location: "Rajahmundry",
      area: "Dowleswaram Barrage Belt",
      pricePerSqYd: "₹16,800 / Sq.Yd",
      plotSizes: "160 – 450 Sq.Yards",
      roadWidth: "40ft BT Roads",
      approval: "DTCP APPROVED LAYOUT",
      status: "NEWLY LAUNCHED",
      thumbnail: "./images/assets/20250604_152649.jpg",
    },
    {
      id: "kakinada-smart-city",
      title: "Kakinada Port & Smart City Layout",
      location: "Kakinada",
      area: "Ramanayyapeta & Port Corridor",
      pricePerSqYd: "₹22,000 / Sq.Yd",
      plotSizes: "200 – 600 Sq.Yards",
      roadWidth: "60ft Master Plan Road",
      approval: "VMRDA & DTCP APPROVED",
      status: "FAST SELLING",
      thumbnail: "./images/kakinada_branch_venture_1786442659994.jpg",
    },
  ];

  const trustBadges = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#18231C]" />,
      title: "Legal Clear Titles",
      subtitle: "100% Verified"
    },
    {
      icon: <FileCheck className="w-5 h-5 text-[#18231C]" />,
      title: "DTCP / RERA",
      subtitle: "Approved"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#18231C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19L8 5" />
          <path d="M20 19L16 5" />
          <line x1="12" y1="7" x2="12" y2="9" />
          <line x1="12" y1="13" x2="12" y2="15" />
        </svg>
      ),
      title: "Premium",
      subtitle: "Infrastructure"
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#18231C]" />,
      title: "Green & Serene",
      subtitle: "Environment"
    },
    {
      icon: <Users className="w-5 h-5 text-[#18231C]" />,
      title: "Trusted by",
      subtitle: "Thousands"
    }
  ];

  return (
    <section id="ventures" className="py-20 bg-[#F9F7F2] relative border-t border-[#E5E0D5] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="eyebrow-tag text-[#6B6860] mb-2">
              CURATED PORTFOLIO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-normal tracking-tight">
              Featured Gated Ventures
            </h2>
          </div>

          <Link
            to="/properties"
            className="text-xs font-sans font-bold uppercase tracking-[0.15em] text-[#1A1A1A] hover:text-[#334537] transition-colors flex items-center space-x-1.5 shrink-0"
          >
            <span>VIEW ALL 3 VENTURES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3-Column Venture Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVentures.map((project) => (
            <VentureCard
              key={project.id}
              project={project}
              onInspect={(p) => {
                const fullProp = properties.find((item) => item.id === p.id) || p;
                setSelectedProperty(fullProp);
              }}
            />
          ))}
        </div>

        {/* Bottom 5-Item Trust Assurance Strip matching screenshot */}
        <div className="mt-16 pt-12 border-t border-[#E5E2D9] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-between">
          {trustBadges.map((badge, idx) => (
            <div key={idx} className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E2D9] flex items-center justify-center shrink-0 shadow-2xs">
                {badge.icon}
              </div>
              <div className="leading-tight">
                <span className="text-xs font-bold text-[#1A1A1A] block font-sans">
                  {badge.title}
                </span>
                <span className="text-[11px] text-[#6B6860] font-sans">
                  {badge.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Drawer Modal */}
        {selectedProperty && (
          <PropertyModal
            property={selectedProperty}
            onClose={() => setSelectedProperty(null)}
          />
        )}

      </div>
    </section>
  );
}
