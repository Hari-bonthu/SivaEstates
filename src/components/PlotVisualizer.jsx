import React, { useState } from 'react';
import { LayoutGrid, AlertCircle, Compass, Ruler, Phone } from 'lucide-react';
import { translations } from '../data/translations';

export default function PlotVisualizer({ lang }) {
  const t = translations[lang].visualizer;

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
    <section id="visualizer" className="py-20 bg-[#0F1115] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#1A1D23] border border-[#F5A623]/30 text-[#F5A623] text-xs font-mono tracking-widest uppercase">
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {t.heading}
          </h2>
          <p className="text-sm text-slate-400">
            {t.subheading}
          </p>
        </div>

        {/* Legend Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 p-3 rounded-2xl bg-[#1A1D23] border border-white/10 text-xs font-mono">
          <div className="flex items-center space-x-2">
            <div className="w-3.5 h-3.5 rounded bg-[#10B981]/30 border border-[#10B981]"></div>
            <span className="text-slate-300">{t.legendAvailable}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3.5 h-3.5 rounded bg-amber-500/30 border border-amber-500"></div>
            <span className="text-slate-300">{t.legendBooked}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3.5 h-3.5 rounded bg-rose-500/30 border border-rose-500"></div>
            <span className="text-slate-300">{t.legendSold}</span>
          </div>
        </div>

        {/* Workspace: Grid & Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          
          {/* Plot Grid Map */}
          <div className="lg:col-span-7 bg-[#1A1D23] p-6 rounded-3xl border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Jetty Mayfair Layout Grid (60ft &amp; 40ft Roads)
              </span>
              <span className="text-[11px] font-mono text-[#F5A623]">Interactive Grid</span>
            </div>

            <div className="w-full py-2 bg-[#0F1115] rounded-lg text-center text-[10px] text-slate-400 font-mono tracking-widest uppercase mb-4 border border-white/5">
              ◄ 60 FEET MAIN ROAD (EAST FACING CORRIDOR) ►
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
              {initialPlots.map(plot => {
                const isSelected = selectedPlot?.id === plot.id;
                let bgClass = "bg-[#10B981]/10 border-[#10B981]/40 text-[#10B981] hover:border-[#10B981]";
                if (plot.status === 'Booked') bgClass = "bg-amber-500/10 border-amber-500/40 text-amber-400 hover:border-amber-400";
                if (plot.status === 'Sold') bgClass = "bg-rose-500/10 border-rose-500/40 text-rose-400 opacity-50 cursor-not-allowed";

                return (
                  <button
                    key={plot.id}
                    onClick={() => setSelectedPlot(plot)}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer ${bgClass} ${
                      isSelected ? 'ring-2 ring-[#F5A623] bg-[#F5A623]/20 text-[#F5A623] scale-105' : ''
                    }`}
                  >
                    <span className="text-xs font-extrabold font-heading">{plot.number}</span>
                    <span className="text-[10px] font-mono opacity-80">{plot.sqyds} Sq.Yds</span>
                  </button>
                );
              })}
            </div>

            <div className="w-full py-2 bg-[#0F1115] rounded-lg text-center text-[10px] text-slate-400 font-mono tracking-widest uppercase mt-4 border border-white/5">
              ◄ 40 FEET INTERNAL AVENUE ROAD ►
            </div>
          </div>

          {/* Plot Details Inspection Panel */}
          <div className="lg:col-span-5 bg-[#1A1D23] p-6 rounded-3xl border border-white/10 flex flex-col justify-between">
            {selectedPlot ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[11px] font-mono text-[#F5A623] uppercase tracking-wider">
                      {t.plotDetailsTitle}
                    </span>
                    <h3 className="text-3xl font-extrabold text-white font-heading mt-1">
                      {selectedPlot.number}
                    </h3>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${
                    selectedPlot.status === 'Available' ? 'bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40' :
                    selectedPlot.status === 'Booked' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' :
                    'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                  }`}>
                    {selectedPlot.status}
                  </span>
                </div>

                <div className="space-y-3 font-mono">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0F1115] border border-white/5">
                    <span className="text-xs text-slate-400 flex items-center">
                      <Compass className="w-4 h-4 mr-2 text-[#F5A623]" />
                      {t.facing}
                    </span>
                    <span className="text-xs font-bold text-white">{selectedPlot.facing}</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0F1115] border border-white/5">
                    <span className="text-xs text-slate-400 flex items-center">
                      <Ruler className="w-4 h-4 mr-2 text-[#F5A623]" />
                      {t.size}
                    </span>
                    <span className="text-xs font-bold text-[#F5A623]">{selectedPlot.sqyds} {t.sqyds}</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0F1115] border border-white/5">
                    <span className="text-xs text-slate-400 flex items-center">
                      <LayoutGrid className="w-4 h-4 mr-2 text-[#F5A623]" />
                      {t.dim}
                    </span>
                    <span className="text-xs font-bold text-white">{selectedPlot.dimensions}</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0F1115] border border-white/5">
                    <span className="text-xs text-slate-400 flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-[#F5A623]" />
                      {t.priceEst}
                    </span>
                    <span className="text-sm font-extrabold text-[#F5A623]">{selectedPlot.priceEst}</span>
                  </div>
                </div>

                {/* Booking CTA */}
                {selectedPlot.status === 'Available' ? (
                  <a
                    href={`https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20want%20to%20book%20${selectedPlot.number}%20(${selectedPlot.sqyds}%20Sq.Yds,%20${selectedPlot.facing}%20Facing)%20at%20Rajahmundry.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl bg-[#F5A623] hover:bg-[#E0951C] text-[#0F1115] font-extrabold text-xs shadow-xl transition-all flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{t.bookThisPlot}</span>
                  </a>
                ) : (
                  <div className="p-4 rounded-xl bg-[#0F1115] text-center text-xs text-slate-500 font-mono">
                    This plot is reserved. Contact director for upcoming releases.
                  </div>
                )}

              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-3">
                <AlertCircle className="w-10 h-10 text-slate-600" />
                <p className="text-xs text-slate-400 font-mono">{t.selectPrompt}</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
