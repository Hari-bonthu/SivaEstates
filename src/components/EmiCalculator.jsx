import React, { useState } from 'react';
import { Calculator, TrendingUp, Phone } from 'lucide-react';
import { translations } from '../data/translations';

export default function EmiCalculator({ lang }) {
  const t = translations[lang].calculator;

  const [plotPrice, setPlotPrice] = useState(2500000);
  const [downPayment, setDownPayment] = useState(500000);
  const [tenure, setTenure] = useState(10);
  const [interestRate, setInterestRate] = useState(9.5);

  const principal = Math.max(0, plotPrice - downPayment);
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenure * 12;

  let emi = 0;
  if (principal > 0 && monthlyRate > 0) {
    emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
  }

  const val3Yr = Math.round(plotPrice * 1.45);
  const val5Yr = Math.round(plotPrice * 1.85);

  const formatRupees = (val) => {
    return "₹" + Math.round(val).toLocaleString('en-IN');
  };

  return (
    <section id="calculator" className="py-20 bg-[#0F1115] relative border-t border-white/5">
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

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          
          {/* Inputs Panel */}
          <div className="lg:col-span-7 bg-[#1A1D23] p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            
            {/* Plot Price */}
            <div>
              <div className="flex justify-between items-center mb-2 font-mono">
                <label className="text-xs font-bold text-slate-300 uppercase">{t.plotPrice}</label>
                <span className="text-lg font-extrabold text-[#F5A623]">{formatRupees(plotPrice)}</span>
              </div>
              <input
                type="range"
                min="500000"
                max="10000000"
                step="100000"
                value={plotPrice}
                onChange={(e) => setPlotPrice(Number(e.target.value))}
                className="w-full h-2 bg-[#0F1115] rounded-lg appearance-none cursor-pointer accent-[#F5A623]"
              />
            </div>

            {/* Down Payment */}
            <div>
              <div className="flex justify-between items-center mb-2 font-mono">
                <label className="text-xs font-bold text-slate-300 uppercase">{t.downPayment}</label>
                <span className="text-lg font-extrabold text-[#10B981]">{formatRupees(downPayment)}</span>
              </div>
              <input
                type="range"
                min="100000"
                max={plotPrice}
                step="50000"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full h-2 bg-[#0F1115] rounded-lg appearance-none cursor-pointer accent-[#10B981]"
              />
            </div>

            {/* Tenure */}
            <div>
              <div className="flex justify-between items-center mb-2 font-mono">
                <label className="text-xs font-bold text-slate-300 uppercase">{t.tenure}</label>
                <span className="text-lg font-extrabold text-white">{tenure} Years</span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 bg-[#0F1115] rounded-lg appearance-none cursor-pointer accent-[#F5A623]"
              />
            </div>

            {/* Interest Rate */}
            <div>
              <div className="flex justify-between items-center mb-2 font-mono">
                <label className="text-xs font-bold text-slate-300 uppercase">{t.interestRate}</label>
                <span className="text-lg font-extrabold text-white">{interestRate}%</span>
              </div>
              <input
                type="range"
                min="6.5"
                max="15"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-[#0F1115] rounded-lg appearance-none cursor-pointer accent-[#F5A623]"
              />
            </div>

          </div>

          {/* Results Panel */}
          <div className="lg:col-span-5 bg-[#1A1D23] p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4 font-mono">
              <span className="text-[11px] font-bold text-[#F5A623] uppercase tracking-wider block">
                Calculated Monthly Commitment
              </span>

              <div className="p-5 rounded-2xl bg-[#0F1115] border border-white/10 shadow-xl">
                <p className="text-xs text-slate-400 font-semibold">{t.monthlyEmi}</p>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#F5A623] mt-1 font-heading">
                  {formatRupees(emi)} <span className="text-xs text-slate-500 font-normal">/ month</span>
                </p>
                <p className="text-[11px] text-slate-400 mt-2">
                  {t.loanAmount}: <strong className="text-white">{formatRupees(principal)}</strong>
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0F1115] border border-white/10 space-y-3">
                <div className="flex items-center space-x-2 text-[#10B981] text-xs font-bold">
                  <TrendingUp className="w-4 h-4" />
                  <span>Projected Value Growth</span>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-400">{t.appreciation3Yr}</span>
                  <span className="font-extrabold text-white text-sm">{formatRupees(val3Yr)}</span>
                </div>

                <div className="flex items-center justify-between text-xs pt-1 border-t border-white/5">
                  <span className="text-slate-400">{t.appreciation5Yr}</span>
                  <span className="font-extrabold text-[#10B981] text-sm">{formatRupees(val5Yr)}</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20want%20to%20discuss%20bank%20plot%20loan%20options."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-[#F5A623] hover:bg-[#E0951C] text-[#0F1115] font-extrabold text-xs shadow-xl transition-all flex items-center justify-center space-x-2 font-mono"
            >
              <Phone className="w-4 h-4" />
              <span>Get Bank Loan Assistance</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
