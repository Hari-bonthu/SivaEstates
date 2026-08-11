import React, { useState } from 'react';
import { Youtube, Play, ExternalLink, Clock, Eye } from 'lucide-react';
import { youtubeVideos } from '../data/youtubeVideos';
import { translations } from '../data/translations';
import VideoModal from './VideoModal';

export default function YouTubeHub({ lang }) {
  const t = translations[lang].youtube;
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="videos" className="py-20 bg-[#0F1115] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#1A1D23] border border-red-500/30 text-red-400 text-xs font-mono tracking-widest uppercase">
            YOUTUBE CHANNEL
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {t.heading}
          </h2>
          <p className="text-sm text-slate-400">
            {t.subheading}
          </p>
        </div>

        {/* Channel Banner Link */}
        <div className="mt-8 p-4 rounded-2xl bg-[#1A1D23] border border-red-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg shrink-0">
              <Youtube className="w-6 h-6 fill-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-heading">
                siva telugu estates - YouTube
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Official Channel for Real Estate Walkthroughs &amp; Plot Layout Tours
              </p>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@sivateluguestates"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg transition-all flex items-center space-x-2 shrink-0 font-mono"
          >
            <span>{t.channelButton}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {youtubeVideos.map(vid => (
            <div
              key={vid.id}
              onClick={() => setActiveVideo(vid)}
              className="bg-[#1A1D23] rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/40 cursor-pointer group flex flex-col justify-between transition-all"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-[#0F1115]">
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0F1115]/40 group-hover:bg-[#0F1115]/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 ml-1 fill-white" />
                    </div>
                  </div>

                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono font-bold text-white flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {vid.duration}
                  </span>
                </div>

                <div className="p-4 space-y-2">
                  <span className="px-2 py-0.5 rounded bg-[#0F1115] text-[10px] font-mono text-[#F5A623]">
                    {vid.category}
                  </span>
                  <h4 className="text-sm font-bold text-white font-heading group-hover:text-[#F5A623] transition-colors line-clamp-2">
                    {vid.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2">
                    {vid.description}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 text-[11px] text-slate-500 flex items-center justify-between border-t border-white/5 mt-2 font-mono">
                <span className="flex items-center">
                  <Eye className="w-3.5 h-3.5 mr-1" />
                  {vid.views}
                </span>
                <span className="text-[#F5A623] font-bold">
                  {t.watchVideo}
                </span>
              </div>
            </div>
          ))}
        </div>

        {activeVideo && (
          <VideoModal
            video={activeVideo}
            onClose={() => setActiveVideo(null)}
          />
        )}

      </div>
    </section>
  );
}
