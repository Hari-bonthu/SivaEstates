import React, { useState, useEffect } from 'react';
import { properties } from '../data/properties';
import {
  CheckCircle2,
  MapPin,
  ArrowRight,
  MessageCircle,
  Search,
  Layers,
  FileCheck,
  Maximize2,
  PhoneCall
} from 'lucide-react';
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

  const handleWhatsAppChat = (projectTitle) => {
    const message = encodeURIComponent(
      `Hello Siva Telugu Estates, I am interested in knowing more details & available plots in "${projectTitle}". Please share pricing and brochure.`
    );
    window.open(`https://wa.me/919851633333?text=${message}`, '_blank');
  };

  return (
    <div className="w-full bg-[#F9F7F2] text-[#1A1A1A] pt-12 pb-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto min-h-screen font-sans">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-[#6B6860] block mb-3">
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
                className={`px-5 py-2 rounded-xl text-xs uppercase tracking-[0.15em] font-mono font-bold transition-all duration-200 cursor-pointer shadow-xs ${
                  isActive
                    ? 'bg-[#1A1A1A] text-white border border-[#1A1A1A]'
                    : 'bg-white text-[#6B6860] border border-[#E5E2D9] hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
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
            className="w-full pl-10 pr-4 py-2.5 bg-[#F9F7F2] border border-[#E5E2D9] rounded-xl text-xs text-[#1A1A1A] placeholder:text-[#8C887E] focus:outline-none focus:border-[#1A1A1A] transition-colors"
          />
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-[#6B6860] w-full sm:w-auto justify-between sm:justify-end">
          <span>Showing <strong className="text-[#1A1A1A]">{filteredProjects.length}</strong> Curated Ventures</span>
          <Link
            to="/#ventures"
            className="text-[#1A1A1A] font-bold uppercase tracking-wider text-[11px] flex items-center gap-1 hover:text-[#4A5D4E] transition-colors"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Featured View</span>
          </Link>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl overflow-hidden border border-[#E5E2D9] hover:border-[#1A1A1A] transition-all duration-300 group flex flex-col justify-between shadow-xs hover:shadow-xl"
          >
            {/* Image Container with Badges */}
            <div className="relative h-64 overflow-hidden bg-[#F0EDED]">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Badge Left */}
              <div
                className={`absolute top-4 left-4 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest uppercase shadow-xs ${
                  project.status === 'Newly Launched'
                    ? 'bg-white/95 text-[#1A1A1A] border border-[#E5E2D9]'
                    : 'bg-[#1A1A1A]/90 text-white'
                }`}
              >
                {project.status}
              </div>

              {/* Badge Right (Location) */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider text-[#1A1A1A] border border-[#E5E2D9] shadow-xs">
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
                <h3 className="font-serif text-2xl text-[#1A1A1A] font-normal mb-2 leading-snug group-hover:text-[#4A5D4E] transition-colors">
                  {project.title}
                </h3>

                {/* Location Corridor */}
                <p className="text-[#59564F] text-xs mb-6 flex items-start gap-1.5 leading-relaxed font-sans">
                  <MapPin className="w-3.5 h-3.5 text-[#4A5D4E] shrink-0 mt-0.5" />
                  <span>{project.area}</span>
                </p>

                {/* Specs Box Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4 font-sans">
                  <div className="bg-[#F9F7F2] p-3 rounded-xl border border-[#E5E2D9]">
                    <span className="text-[9px] font-mono font-bold text-[#6B6860] uppercase tracking-wider block mb-1">
                      PLOT SIZES
                    </span>
                    <span className="font-bold text-xs text-[#1A1A1A] font-mono">
                      {project.plotSizes}
                    </span>
                  </div>

                  <div className="bg-[#F9F7F2] p-3 rounded-xl border border-[#E5E2D9]">
                    <span className="text-[9px] font-mono font-bold text-[#6B6860] uppercase tracking-wider block mb-1">
                      ROAD WIDTH
                    </span>
                    <span className="font-bold text-xs text-[#1A1A1A] font-mono">
                      {project.roadWidth}
                    </span>
                  </div>
                </div>
              </div>

              {/* Price & Action Buttons */}
              <div className="pt-4 border-t border-[#E5E2D9] space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono font-bold text-[#6B6860] uppercase tracking-wider block">
                      STARTING FROM
                    </span>
                    <span className="text-base font-bold text-[#1A1A1A] font-mono">
                      {project.pricePerSqYd}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedProperty(project)}
                    className="px-3.5 py-1.5 rounded-lg bg-[#F9F7F2] hover:bg-[#1A1A1A] hover:text-white border border-[#E5E2D9] text-[#1A1A1A] text-[10px] font-mono font-bold tracking-wider uppercase transition-all cursor-pointer"
                  >
                    INSPECT LAYOUT →
                  </button>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <Link
                    to={`/venture/${project.id}`}
                    className="flex-1 bg-[#1A1A1A] hover:bg-[#334537] text-white transition-all py-2.5 rounded-xl text-xs uppercase tracking-wider font-mono font-bold flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => handleWhatsAppChat(project.title)}
                    className="bg-[#EAF0EC] hover:bg-[#4A5D4E] hover:text-white text-[#4A5D4E] px-4 py-2.5 rounded-xl transition-all flex items-center justify-center cursor-pointer shadow-xs"
                    title="Instant WhatsApp Enquiry"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* RERA & Assurance Banner */}
      <div className="mt-16 bg-white rounded-3xl p-8 border border-[#E5E2D9] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#EAF0EC] flex items-center justify-center text-[#4A5D4E] border border-[#4A5D4E]/20 shrink-0">
            <FileCheck className="w-6 h-6 stroke-[1.5]" />
          </div>
          <div>
            <h4 className="font-serif text-2xl font-normal text-[#1A1A1A] mb-1">
              Guaranteed Legal Scrutiny &amp; Spot Registration
            </h4>
            <p className="text-xs text-[#59564F] max-w-2xl leading-relaxed font-sans">
              All ventures are legally vetted by senior civil advocates with DTCP / VMRDA approved blueprints, boundary demarcation, and instant home loan approvals from SBI, HDFC &amp; ICICI.
            </p>
          </div>
        </div>

        <a
          href="tel:+919851633333"
          className="px-6 py-3.5 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.15em] font-mono font-bold rounded-xl hover:bg-[#334537] transition-all shrink-0 cursor-pointer shadow-xs"
        >
          Book Site Visit
        </a>
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
