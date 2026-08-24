import React, { useState } from 'react';
import { properties } from '../data/properties';
import {
  CheckCircle2,
  MapPin,
  ArrowRight,
  MessageCircle,
  Search,
  FileCheck,
  Building2,
  Maximize2
} from 'lucide-react';
import PropertyModal from './PropertyModal';
import { Link } from 'react-router-dom';

export default function ProjectTabsCatalog({ lang = 'en' }) {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = properties.filter((project) => {
    const matchesLocation =
      selectedFilter === 'All' || project.location.toLowerCase() === selectedFilter.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.approval.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLocation && matchesSearch;
  });

  const handleWhatsAppChat = (e, projectTitle) => {
    e.stopPropagation();
    const message = encodeURIComponent(
      `Hello Siva Telugu Estates, I am interested in knowing more details & available plots in "${projectTitle}". Please share pricing and brochure.`
    );
    window.open(`https://wa.me/919851633333?text=${message}`, '_blank');
  };

  return (
    <section id="ventures" className="py-20 bg-[#F9F7F2] relative border-t border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section matching screenshot */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-[#6B6860] block mb-2">
              CURATED PORTFOLIO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-normal tracking-tight">
              Featured Gated Ventures
            </h2>
          </div>

          {/* Right link / Filter pill toggle */}
          <div className="flex items-center space-x-2">
            {['All', 'Rajahmundry', 'Kakinada'].map((filter) => {
              const isActive = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#1A1A1A] text-white shadow-xs'
                      : 'bg-white text-[#6B6860] border border-[#E5E2D9] hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
                  }`}
                >
                  {filter === 'All' ? 'ALL VENTURES' : filter.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search & Meta Status Bar */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-3.5 rounded-2xl border border-[#E5E2D9] shadow-xs">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#6B6860] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by venture name, highway, or approval..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#F9F7F2] border border-[#E5E2D9] rounded-xl text-xs text-[#1A1A1A] placeholder:text-[#8C887E] focus:outline-none focus:border-[#1A1A1A] transition-colors font-sans"
            />
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[#6B6860] w-full sm:w-auto justify-between sm:justify-end">
            <span>Showing <strong className="text-[#1A1A1A]">{filteredProjects.length}</strong> Curated Ventures</span>
          </div>
        </div>

        {/* 3-Column Projects Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E5E2D9] hover:border-[#1A1A1A] transition-all duration-300 group flex flex-col justify-between shadow-xs hover:shadow-lg"
            >
              {/* Top Image with Badges */}
              <div className="relative h-60 overflow-hidden bg-[#F0EDED]">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Badge Left (Status) */}
                <div
                  className={`absolute top-3.5 left-3.5 px-2.5 py-1 rounded-md text-[9px] font-mono font-bold tracking-widest uppercase shadow-xs ${
                    project.status === 'Newly Launched'
                      ? 'bg-white text-[#1A1A1A] border border-[#E5E2D9]'
                      : 'bg-[#1A1A1A]/90 text-white'
                  }`}
                >
                  {project.status}
                </div>

                {/* Badge Right (Location) */}
                <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[9px] font-mono font-bold uppercase tracking-wider text-[#1A1A1A] border border-[#E5E2D9] shadow-xs">
                  {project.location}
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  {/* Approval Tag */}
                  <div className="flex items-center gap-1.5 text-[#4A5D4E] text-xs mb-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4A5D4E] shrink-0" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">{project.approval}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] font-normal mb-1.5 leading-snug group-hover:text-[#4A5D4E] transition-colors">
                    {project.title}
                  </h3>

                  {/* Location Corridor */}
                  <p className="text-[#59564F] text-xs mb-4 flex items-start gap-1.5 leading-relaxed font-sans">
                    <MapPin className="w-3.5 h-3.5 text-[#4A5D4E] shrink-0 mt-0.5" />
                    <span>{project.area}</span>
                  </p>

                  {/* Specs Box Grid */}
                  <div className="grid grid-cols-2 gap-2.5 mb-2 font-sans">
                    <div className="bg-[#F9F7F2] p-2.5 rounded-xl border border-[#E5E2D9]">
                      <span className="text-[9px] font-mono font-bold text-[#6B6860] uppercase tracking-wider block mb-0.5">
                        PLOT SIZES
                      </span>
                      <span className="font-bold text-xs text-[#1A1A1A] font-mono">
                        {project.plotSizes}
                      </span>
                    </div>

                    <div className="bg-[#F9F7F2] p-2.5 rounded-xl border border-[#E5E2D9]">
                      <span className="text-[9px] font-mono font-bold text-[#6B6860] uppercase tracking-wider block mb-0.5">
                        ROAD WIDTH
                      </span>
                      <span className="font-bold text-xs text-[#1A1A1A] font-mono">
                        {project.roadWidth}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Row matching screenshot */}
                <div className="pt-4 border-t border-[#E5E2D9] flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono font-bold text-[#6B6860] uppercase tracking-wider block">
                      STARTING FROM
                    </span>
                    <span className="text-sm font-bold text-[#1A1A1A] font-mono">
                      {project.pricePerSqYd}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setSelectedProperty(project)}
                      className="px-3 py-2 rounded-lg bg-[#F9F7F2] hover:bg-[#1A1A1A] hover:text-white border border-[#E5E2D9] text-[#1A1A1A] text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer"
                    >
                      INSPECT LAYOUT →
                    </button>

                    <Link
                      to={`/venture/${project.id}`}
                      className="px-3 py-2 rounded-lg bg-[#1A1A1A] hover:bg-[#334537] text-white text-[10px] font-mono font-bold uppercase tracking-wider transition-all flex items-center space-x-1"
                      title="View Full Page"
                    >
                      <span>VIEW</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>

                    <button
                      onClick={(e) => handleWhatsAppChat(e, project.title)}
                      className="p-2 rounded-lg bg-[#EAF0EC] hover:bg-[#4A5D4E] hover:text-white text-[#4A5D4E] transition-all cursor-pointer"
                      title="WhatsApp Inquiry"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Scrutiny & Assurance Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-[#E5E2D9] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF0EC] flex items-center justify-center text-[#4A5D4E] border border-[#4A5D4E]/20 shrink-0">
              <FileCheck className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div>
              <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#1A1A1A] mb-1">
                Guaranteed Legal Scrutiny &amp; Spot Registration
              </h4>
              <p className="text-xs text-[#59564F] max-w-2xl leading-relaxed font-sans">
                All ventures are legally vetted by senior civil advocates with DTCP / VMRDA approved blueprints, boundary demarcation, and instant home loan approvals from SBI, HDFC &amp; ICICI.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-3.5 bg-[#1A1A1A] text-white text-xs font-mono font-bold uppercase tracking-widest rounded-xl hover:bg-[#334537] transition-all shrink-0 cursor-pointer shadow-xs"
          >
            BOOK SITE VISIT
          </a>
        </div>

        {/* Inspect Layout Drawer Modal */}
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
