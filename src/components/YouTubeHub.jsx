import React from 'react';
import { Play, ExternalLink, Clock, Eye } from 'lucide-react';
import { translations } from '../data/translations';

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

export default function YouTubeHub({ lang = 'en' }) {
  const t = translations[lang]?.youtube || translations.en.youtube;

  return (
    <section id="videos" className="py-20 bg-[#F5F0EB] relative border-t border-[#E8E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center space-x-3">
            <div className="h-px w-8 bg-[#C8312A]"></div>
            <span className="eyebrow-tag" style={{ color: '#C8312A', display: 'inline' }}>
              {t.eyebrow}
            </span>
            <div className="h-px w-8 bg-[#C8312A]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#1A1A1A] tracking-tight font-serif">
            {t.heading}
          </h2>
          <p className="text-sm text-[#6B6860] font-sans">
            {t.subheading}
          </p>
        </div>

        {/* Channel Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-[#E8E2DA] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center space-x-3">
            {/* YouTube brand logo — rounded rect + play triangle */}
            <div className="w-12 h-12 rounded-full bg-[#C8312A] flex items-center justify-center text-white shadow-md shrink-0">
              <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-[#1A1A1A] font-serif">
                {t.channelTitle}
              </h3>
              <p className="text-xs text-[#6B6860] font-sans">
                {t.channelSubtitle}
              </p>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@sivateluguestates"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red px-5 py-3 text-xs font-bold shadow-sm transition-all flex items-center space-x-2 shrink-0 font-sans tracking-wide"
          >
            <span>{t.visitButton}</span>
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
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E2DA] hover:border-[#F5C6C4] cursor-pointer group flex flex-col transition-all shadow-xs hover:shadow-md"
            >
              {/* Thumbnail */}
              <div className="relative h-44 overflow-hidden bg-[#F0EDED]">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Dark overlay with play button */}
                <div className="absolute inset-0 bg-[#1A1A1A]/30 group-hover:bg-[#1A1A1A]/10 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#C8312A] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 ml-1 fill-white" />
                  </div>
                </div>
                {/* Duration */}
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-[#1A1A1A]/80 text-[10px] font-sans font-medium text-white flex items-center">
                  <Clock className="w-2.5 h-2.5 mr-0.5" />
                  {vid.duration}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1 space-y-2">
                <span className="inline-block px-2 py-0.5 rounded bg-[#FCECEA] text-[9px] font-sans font-bold uppercase text-[#C8312A] tracking-wider w-fit">
                  {vid.category}
                </span>
                <h4 className="text-sm font-bold text-[#1A1A1A] font-serif group-hover:text-[#C8312A] transition-colors leading-snug line-clamp-2">
                  {vid.title}
                </h4>
                <p className="text-[11px] text-[#6B6860] line-clamp-2 flex-1 font-sans">
                  {vid.description}
                </p>
              </div>

              <div className="p-4 pt-0 text-[11px] text-[#6B6860] flex items-center justify-between border-t border-[#E8E2DA] mt-2 font-sans">
                <span className="flex items-center space-x-1">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{vid.views}</span>
                </span>
                <span className="text-[#C8312A] font-bold tracking-wide">{t.watchFull}</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
