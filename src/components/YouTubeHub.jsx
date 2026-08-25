import React from 'react';
import { Play, ExternalLink, Clock, Eye } from 'lucide-react';

function YouTubeIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

const VIDEOS = [
  {
    id: 'v1',
    youtubeId: 'sivateluguestates',
    title: 'Jetty Mayfair Rajahmundry - Gated Community Villa Plots…',
    description: 'Complete site tour of Jetty Mayfair venture at Morampudi Lalacheruvu corridor in Rajahmundry…',
    category: 'Site Walkthrough',
    duration: '12:45',
    views: '45K+ Views',
    thumbnail: './images/luxury_villa_venture_1786442598108.jpg',
    url: 'https://www.youtube.com/@sivateluguestates'
  },
  {
    id: 'v2',
    youtubeId: 'sivateluguestates',
    title: 'Kakinada New Branch Grand Opening & Smart City Plot…',
    description: 'Director Mr. Siva Yedida introduces the new Kakinada branch office and announces upcoming…',
    category: 'Branch Update',
    duration: '08:20',
    views: '38K+ Views',
    thumbnail: './images/kakinada_branch_venture_1786442659994.jpg',
    url: 'https://www.youtube.com/@sivateluguestates'
  },
  {
    id: 'v3',
    youtubeId: 'sivateluguestates',
    title: 'How to Verify 100% Clear Title Before Buying Open Plots in…',
    description: 'Essential legal guidance by Siva Telugu Estates on checking DTCP approvals, link documents…',
    category: 'Investment Guide',
    duration: '15:10',
    views: '82K+ Views',
    thumbnail: './images/open_plot_layout_1786442637690.jpg',
    url: 'https://www.youtube.com/@sivateluguestates'
  },
  {
    id: 'v4',
    youtubeId: 'sivateluguestates',
    title: 'Rajahmundry Real Estate Land Rates Analysis & High Growth…',
    description: 'Detailed market analysis comparing land appreciation in Morampudi, Diwancheruvu…',
    category: 'Market Analysis',
    duration: '18:30',
    views: '64K+ Views',
    thumbnail: './images/assets/20250604_152649.jpg',
    url: 'https://www.youtube.com/@sivateluguestates'
  }
];

export default function YouTubeHub({ lang }) {
  return (
    <section id="videos" className="py-20 bg-[#F9F7F2] relative border-t border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center space-x-3">
            <div className="h-px w-8 bg-[#C8312A]"></div>
            <span className="eyebrow-tag text-[#C8312A]">YOUTUBE CHANNEL</span>
            <div className="h-px w-8 bg-[#C8312A]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#1B1C1C] tracking-tight font-serif">
            Live Site Walkthroughs &amp; Land Advice
          </h2>
          <p className="text-sm text-[#636863] font-sans">
            Subscribe to <span className="text-[#C8312A] font-semibold">@sivateluguestates</span> for real video tours, legal advice, and investment guides.
          </p>
        </div>

        {/* Channel Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E0D5] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-[#FF0000] flex items-center justify-center text-white shadow-md shrink-0">
              <YouTubeIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#1B1C1C] font-serif">
                siva telugu estates - YouTube
              </h3>
              <p className="text-xs text-[#636863] font-sans">
                Official Channel for Real Estate Walkthroughs &amp; Plot Layout Tours
              </p>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@sivateluguestates"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[#CC0000] hover:bg-[#990000] text-white font-bold text-xs shadow-sm transition-all flex items-center space-x-2 shrink-0 font-sans tracking-[0.1em]"
          >
            <span>Visit Official YouTube Channel</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {VIDEOS.map(vid => (
            <a
              key={vid.id}
              href={vid.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl overflow-hidden border border-[#E5E0D5] hover:border-[#CC0000] cursor-pointer group flex flex-col transition-all shadow-xs hover:shadow-md"
            >
              {/* Thumbnail */}
              <div className="relative h-44 overflow-hidden bg-[#F0EDED]">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Dark overlay with play button */}
                <div className="absolute inset-0 bg-[#1B1C1C]/30 group-hover:bg-[#1B1C1C]/10 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 ml-0.5 fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white">
                  {vid.duration}
                </div>
              </div>

              {/* Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="brand-subtitle text-[9px] text-[#888]">{vid.category}</span>
                  <h4 className="text-sm font-bold text-[#1B1C1C] font-serif line-clamp-2 mt-1 group-hover:text-[#CC0000] transition-colors leading-snug">
                    {vid.title}
                  </h4>
                  <p className="text-xs text-[#636863] mt-1.5 line-clamp-2 leading-relaxed font-sans">
                    {vid.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#F0EBE3] text-[11px] text-[#888] font-sans">
                  <span className="flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    {vid.views}
                  </span>
                  <span className="text-[#CC0000] font-semibold group-hover:underline">Watch ↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
