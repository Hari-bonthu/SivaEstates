import React, { useState } from 'react';
import { Calculator, TrendingUp, Sparkles, Phone, HelpCircle } from 'lucide-react';
import { translations } from '../data/translations';

export default function EmiCalculator({ lang }) {
  const t = translations[lang].calculator;

  const [plotPrice, setPlotPrice] = useState(2500000); // 25 Lakhs default
  const [downPayment, setDownPayment] = useState(500000); // 5 Lakhs default
  const [tenure, setTenure] = useState(10); // 10 years
  const [interestRate, setInterestRate] = useState(9.5); // 9.5%

  const principal = Math.max(0, plotPrice - downPayment);
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenure * 12;

  let emi = 0;
  if (principal > 0 && monthlyRate > 0) {
    emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
  }

  // 3 Yr & 5 Yr Land Growth Projections (+45% in 3 yrs, +85% in 5 yrs for Godavari infrastructure growth)
  const val3Yr = Math.round(plotPrice * 1.45);
  const val5Yr = Math.round(plotPrice * 1.85);

  const formatRupees = (val) => {
    return "₹" + Math.round(val).toLocaleString('en-IN');
  };

  return (
    <section id="calculator" className="py-20 bg-navy-950 relative border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {t.heading}
          </h2>
          <p className="text-base text-slate-300">
            {t.subheading}
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          
          {/* Sliders Input Panel */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
            
            {/* Plot Price Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-300 uppercase">{t.plotPrice}</label>
                <span className="text-lg font-extrabold text-gold-400">{formatRupees(plotPrice)}</span>
              </div>
              <input
                type="range"
                min="500000"
                max="10000000"
                step="100000"
                value={plotPrice}
                onChange={(e) => setPlotPrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>₹5 Lakhs</span>
                <span>₹1 Crore</span>
              </div>
            </div>

            {/* Down Payment Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-300 uppercase">{t.downPayment}</label>
                <span className="text-lg font-extrabold text-emerald-400">{formatRupees(downPayment)}</span>
              </div>
              <input
                type="range"
                min="100000"
                max={plotPrice}
                step="50000"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>₹1 Lakh</span>
                <span>{formatRupees(plotPrice)}</span>
              </div>
            </div>

            {/* Tenure Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
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
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>1 Year</span>
                <span>25 Years</span>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
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
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
            </div>

          </div>

          {/* Result Output Panel */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-gold-500/30 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <span className="text-xs font-extrabold text-gold-400 uppercase tracking-wider block">
                Calculated Monthly Commitment
              </span>

              {/* Monthly EMI Highlight */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-gold-500/20 via-navy-900 to-navy-900 border border-gold-500/40 shadow-xl">
                <p className="text-xs text-slate-300 font-semibold">{t.monthlyEmi}</p>
                <p className="text-3xl sm:text-4xl font-extrabold text-gold-400 mt-1 font-heading">
                  {formatRupees(emi)} <span className="text-sm text-slate-400 font-normal">/ month</span>
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  {t.loanAmount}: <strong className="text-white">{formatRupees(principal)}</strong>
                </p>
              </div>

              {/* Land Appreciation Projection */}
              <div className="p-5 rounded-2xl bg-navy-950 border border-slate-800 space-y-3">
                <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold">
                  <TrendingUp className="w-4 h-4" />
                  <span>Projected Value Growth in Godavari Region</span>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-400">{t.appreciation3Yr}</span>
                  <span className="font-extrabold text-white text-sm">{formatRupees(val3Yr)}</span>
                </div>

                <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-800">
                  <span className="text-slate-400">{t.appreciation5Yr}</span>
                  <span className="font-extrabold text-emerald-400 text-sm">{formatRupees(val5Yr)}</span>
                </div>
              </div>

              <p className="text-[10px] text-slate-500 leading-normal italic">
                {t.calcDisclaimer}
              </p>
            </div>

            {/* Loan Assistance CTA */}
            <a
              href="https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20want%20to%20discuss%20bank%20plot%20loan%20options."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-gold-gradient text-navy-950 font-extrabold text-sm shadow-xl hover:scale-105 transition-transform flex items-center justify-center space-x-2"
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
