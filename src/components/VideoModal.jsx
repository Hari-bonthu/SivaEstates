import React from 'react';
import { X, Youtube, ExternalLink } from 'lucide-react';

export default function VideoModal({ video, onClose }) {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl rounded-3xl bg-navy-900 border border-gold-500/40 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-navy-950/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Video Player Header */}
        <div className="p-4 bg-navy-950 flex items-center space-x-3 border-b border-slate-800">
          <Youtube className="w-6 h-6 text-red-500 shrink-0" />
          <h3 className="text-sm font-bold text-white truncate pr-8">
            {video.title}
          </h3>
        </div>

        {/* Video Aspect Ratio Container */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Details Footer */}
        <div className="p-6 bg-navy-900 space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold">
              {video.category} • {video.views}
            </span>
            <a
              href="https://www.youtube.com/@sivateluguestates"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-gold-400 flex items-center space-x-1"
            >
              <span>Visit @sivateluguestates</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {video.description}
          </p>
        </div>

      </div>
    </div>
  );
}
