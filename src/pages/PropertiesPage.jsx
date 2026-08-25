import React, { useState, useEffect } from 'react';
import { properties } from '../data/properties';
import {
  Search,
  Layers,
  FileCheck,
  ShieldCheck,
  Sparkles,
  Users
} from 'lucide-react';
import VentureCard from '../components/VentureCard';
import PropertyModal from '../components/PropertyModal';
import { Link } from 'react-router-dom';

export default function PropertiesPage({ lang = 'en' }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredProjects = properties.filter((project) => {
    const matchesLocation =
      selectedFilter === 'All' || project.location.toLowerCase() === selectedFilter.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.approval.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLocation && matchesSearch;
  });

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
    <div className="w-full bg-[#F9F7F2] text-[#1A1A1A] pt-12 pb-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto min-h-screen font-sans">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="eyebrow-tag text-[#6B6860] mb-3">
          CURATED GODAVARI PORTFOLIO
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] font-normal leading-tight mb-4 tracking-tight">
          Landmark Ventures that Define Excellence
        </h1>
        <p className="text-[#59564F] text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto font-sans">
          Explore our meticulously curated portfolio of premium residential plots, luxury villas, and strategic land investments across Rajahmundry &amp; Kakinada.
        </p>

        {/* Location Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2.5">
          {['All', 'Rajahmundry', 'Kakinada'].map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2 rounded-xl text-xs uppercase tracking-[0.1em] font-sans font-bold transition-all duration-200 cursor-pointer shadow-xs ${
                  isActive
                    ? 'bg-[#18231C] text-white border border-[#18231C]'
                    : 'bg-white text-[#6B6860] border border-[#E5E2D9] hover:border-[#18231C] hover:text-[#18231C]'
                }`}
              >
                {filter === 'All' ? 'All Ventures' : filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Search & Meta Bar */}
      <div className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#E5E2D9] shadow-xs">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-[#6B6860] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by venture name, highway, or approval..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#F9F7F2] border border-[#E5E2D9] rounded-xl text-xs text-[#1A1A1A] placeholder:text-[#8C887E] focus:outline-none focus:border-[#18231C] transition-colors"
          />
        </div>

        <div className="flex items-center gap-4 text-xs font-sans text-[#6B6860] w-full sm:w-auto justify-between sm:justify-end">
          <span>Showing <strong className="text-[#1A1A1A]">{filteredProjects.length}</strong> Curated Ventures</span>
          <Link
            to="/#ventures"
            className="text-[#1A1A1A] font-sans font-bold uppercase tracking-[0.2em] text-[11px] flex items-center gap-1 hover:text-[#4A5D4E] transition-colors"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Featured View</span>
          </Link>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <VentureCard
            key={project.id}
            project={project}
            onInspect={(p) => setSelectedProperty(p)}
          />
        ))}
      </div>

      {/* Trust Badges Strip */}
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

      {/* Inspect Modal */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}

    </div>
  );
}
