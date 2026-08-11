import React, { useState } from 'react';
import { LayoutGrid, Sparkles, CheckCircle2, AlertCircle, Compass, Ruler, Phone } from 'lucide-react';
import { translations } from '../data/translations';

export default function PlotVisualizer({ lang }) {
  const t = translations[lang].visualizer;

  // Mock layout plots grid
  const initialPlots = Array.from({ length: 24 }, (_, i) => {
    const num = i + 1;
    let status = 'Available';
    if ([3, 7, 12, 18, 22].includes(num)) status = 'Booked';
    if ([2, 9, 15, 20].includes(num)) status = 'Sold';

    const facings = ['East', 'West', 'North', 'East', 'North-East'];
    const facing = facings[i % facings.length];
    const sqyds = 150 + (i % 6) * 25;
    const priceEst = sqyds * 16500;

    return {
      id: num,
      number: `Plot ${num}`,
      status,
      facing,
      sqyds,
      dimensions: `${Math.round(sqyds/5)}' x 45'`,
      priceEst: `₹${(priceEst / 100000).toFixed(2)} Lakhs`
    };
  });

  const [selectedPlot, setSelectedPlot] = useState(initialPlots[0]);

  return (
    <section id="visualizer" className="py-20 bg-navy-950 relative border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {t.heading}
          </h2>
          <p className="text-base text-slate-300">
            {t.subheading}
          </p>
        </div>

        {/* Legend Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 p-3 rounded-2xl bg-navy-900/80 border border-slate-800 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-md bg-emerald-500/30 border-2 border-emerald-400"></div>
            <span className="text-slate-200 font-medium">{t.legendAvailable}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-md bg-amber-500/30 border-2 border-amber-400"></div>
            <span className="text-slate-200 font-medium">{t.legendBooked}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-md bg-rose-500/30 border-2 border-rose-500"></div>
            <span className="text-slate-200 font-medium">{t.legendSold}</span>
          </div>
        </div>

        {/* Visualizer Workspace: Grid Layout & Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          
          {/* Plot Grid Map (8 Columns on desktop) */}
          <div className="lg:col-span-7 glass-card p-6 rounded-3xl border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Jetty Mayfair Layout Grid (60ft &amp; 40ft Roads)
              </span>
              <span className="text-[11px] text-gold-400 font-semibold">Interactive Clickable Grid</span>
            </div>

            {/* 60ft Main Road Banner */}
            <div className="w-full py-2 bg-slate-800 rounded-lg text-center text-[11px] text-slate-400 font-extrabold uppercase tracking-widest mb-4 border border-slate-700">
              ◄ 60 FEET MAIN ROAD (EAST FACING CORRIDOR) ►
            </div>

            {/* Plot Boxes Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
              {initialPlots.map(plot => {
                const isSelected = selectedPlot?.id === plot.id;
                let bgClass = "bg-emerald-950/40 border-emerald-500/50 text-emerald-300 hover:border-emerald-300";
                if (plot.status === 'Booked') bgClass = "bg-amber-950/40 border-amber-500/50 text-amber-300 hover:border-amber-300";
                if (plot.status === 'Sold') bgClass = "bg-rose-950/40 border-rose-500/50 text-rose-400 opacity-60 cursor-not-allowed";

                return (
                  <button
                    key={plot.id}
                    onClick={() => setSelectedPlot(plot)}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer ${bgClass} ${
                      isSelected ? 'ring-2 ring-gold-400 shadow-lg scale-105 bg-gold-500/20' : ''
                    }`}
                  >
                    <span className="text-xs font-extrabold">{plot.number}</span>
                    <span className="text-[10px] opacity-80">{plot.sqyds} Sq.Yds</span>
                  </button>
                );
              })}
            </div>

            {/* 40ft Internal Road */}
            <div className="w-full py-2 bg-slate-800 rounded-lg text-center text-[11px] text-slate-400 font-extrabold uppercase tracking-widest mt-4 border border-slate-700">
              ◄ 40 FEET INTERNAL AVENUE ROAD ►
            </div>
          </div>

          {/* Selected Plot Detail Inspection Panel */}
          <div className="lg:col-span-5 glass-card p-6 rounded-3xl border border-gold-500/30 flex flex-col justify-between">
            {selectedPlot ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-xs text-gold-400 font-bold uppercase tracking-wider">
                      {t.plotDetailsTitle}
                    </span>
                    <h3 className="text-3xl font-extrabold text-white font-heading mt-1">
                      {selectedPlot.number}
                    </h3>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-xs font-extrabold ${
                    selectedPlot.status === 'Available' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' :
                    selectedPlot.status === 'Booked' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' :
                    'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                  }`}>
                    {selectedPlot.status}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-navy-950 border border-slate-800">
                    <span className="text-xs text-slate-400 font-medium flex items-center">
                      <Compass className="w-4 h-4 mr-2 text-gold-400" />
                      {t.facing}
                    </span>
                    <span className="text-sm font-bold text-white">{selectedPlot.facing}</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-navy-950 border border-slate-800">
                    <span className="text-xs text-slate-400 font-medium flex items-center">
                      <Ruler className="w-4 h-4 mr-2 text-gold-400" />
                      {t.size}
                    </span>
                    <span className="text-sm font-bold text-gold-400">{selectedPlot.sqyds} {t.sqyds}</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-navy-950 border border-slate-800">
                    <span className="text-xs text-slate-400 font-medium flex items-center">
                      <LayoutGrid className="w-4 h-4 mr-2 text-gold-400" />
                      {t.dim}
                    </span>
                    <span className="text-sm font-bold text-white">{selectedPlot.dimensions}</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-navy-950 border border-slate-800">
                    <span className="text-xs text-slate-400 font-medium flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-gold-400" />
                      {t.priceEst}
                    </span>
                    <span className="text-base font-extrabold text-gold-400">{selectedPlot.priceEst}</span>
                  </div>
                </div>

                {/* Booking CTA */}
                {selectedPlot.status === 'Available' ? (
                  <a
                    href={`https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20want%20to%20book%20${selectedPlot.number}%20(${selectedPlot.sqyds}%20Sq.Yds,%20${selectedPlot.facing}%20Facing)%20at%20Rajahmundry.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl bg-gold-gradient text-navy-950 font-extrabold text-sm shadow-xl hover:scale-105 transition-transform flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{t.bookThisPlot}</span>
                  </a>
                ) : (
                  <div className="p-4 rounded-xl bg-slate-800/60 text-center text-xs text-slate-400 font-medium">
                    This plot is currently reserved. Contact director for upcoming phase releases.
                  </div>
                )}

              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-3">
                <AlertCircle className="w-10 h-10 text-slate-600" />
                <p className="text-sm text-slate-400">{t.selectPrompt}</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
