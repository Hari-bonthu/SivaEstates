import React from 'react';
import { Youtube, Play, ExternalLink, Clock, Eye } from 'lucide-react';

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
          {/* Luxury indicator – not a capsule, editorial style */}
          <div className="flex items-center justify-center space-x-3">
            <div className="h-px w-8 bg-red-500"></div>
            <span className="eyebrow-tag text-red-600">YOUTUBE CHANNEL</span>
            <div className="h-px w-8 bg-red-500"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#1B1C1C] tracking-tight font-serif">
            Live Site Walkthroughs & Land Advice
          </h2>
          <p className="text-sm text-[#636863] font-sans">
            Subscribe to <span className="text-red-600 font-semibold">@sivateluguestates</span> for real video tours, legal advice, and investment guides.
          </p>
        </div>

        {/* Channel Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E0D5] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white shadow-md shrink-0">
              <Youtube className="w-6 h-6 fill-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#1B1C1C] font-serif">
                siva telugu estates - YouTube
              </h3>
              <p className="text-xs text-[#636863] font-sans">
                Official Channel for Real Estate Walkthroughs & Plot Layout Tours
              </p>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@sivateluguestates"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-sm transition-all flex items-center space-x-2 shrink-0 font-sans tracking-[0.1em]"
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
              className="bg-white rounded-2xl overflow-hidden border border-[#E5E0D5] hover:border-red-400 cursor-pointer group flex flex-col transition-all shadow-xs hover:shadow-md"
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
                  <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 ml-1 fill-white" />
                  </div>
                </div>
                {/* Duration */}
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-[#1B1C1C]/80 text-[10px] font-sans font-medium text-white flex items-center">
                  <Clock className="w-2.5 h-2.5 mr-0.5" />
                  {vid.duration}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1 space-y-2">
                <span className="inline-block px-2 py-0.5 rounded bg-[#F9F7F2] border border-[#E5E0D5] text-[9px] font-sans font-medium uppercase text-[#4A5D4E] tracking-[0.2em] w-fit">
                  {vid.category}
                </span>
                <h4 className="text-sm font-bold text-[#1B1C1C] font-serif group-hover:text-red-700 transition-colors leading-snug line-clamp-2">
                  {vid.title}
                </h4>
                <p className="text-[11px] text-[#636863] line-clamp-2 flex-1 font-sans">
                  {vid.description}
                </p>
              </div>

              <div className="p-4 pt-0 text-[11px] text-[#636863] flex items-center justify-between border-t border-[#E5E0D5] mt-2 font-sans">
                <span className="flex items-center space-x-1">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{vid.views}</span>
                </span>
                <span className="text-[#4A5D4E] font-bold tracking-wide">Watch Full Tour</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
