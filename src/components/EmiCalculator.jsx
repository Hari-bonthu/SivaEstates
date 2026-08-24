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
    <section id="calculator" className="py-20 bg-[#F9F7F2] relative border-t border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#EAF0EC] border border-[#4A5D4E]/30 text-[#334537] text-xs font-mono tracking-widest uppercase">
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#1B1C1C] tracking-tight font-serif">
            {t.heading}
          </h2>
          <p className="text-sm text-[#636863]">
            {t.subheading}
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          
          {/* Inputs Panel */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E0D5] space-y-6 shadow-sm">
            
            {/* Plot Price */}
            <div>
              <div className="flex justify-between items-center mb-2 font-mono">
                <label className="text-xs font-bold text-[#2D2D2D] uppercase">{t.plotPrice}</label>
                <span className="text-lg font-bold text-[#4A5D4E]">{formatRupees(plotPrice)}</span>
              </div>
              <input
                type="range"
                min="500000"
                max="10000000"
                step="100000"
                value={plotPrice}
                onChange={(e) => setPlotPrice(Number(e.target.value))}
                className="w-full h-2 bg-[#F0EDED] rounded-lg appearance-none cursor-pointer accent-[#4A5D4E]"
              />
            </div>

            {/* Down Payment */}
            <div>
              <div className="flex justify-between items-center mb-2 font-mono">
                <label className="text-xs font-bold text-[#2D2D2D] uppercase">{t.downPayment}</label>
                <span className="text-lg font-bold text-[#10B981]">{formatRupees(downPayment)}</span>
              </div>
              <input
                type="range"
                min="100000"
                max={plotPrice}
                step="50000"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full h-2 bg-[#F0EDED] rounded-lg appearance-none cursor-pointer accent-[#10B981]"
              />
            </div>

            {/* Tenure */}
            <div>
              <div className="flex justify-between items-center mb-2 font-mono">
                <label className="text-xs font-bold text-[#2D2D2D] uppercase">{t.tenure}</label>
                <span className="text-lg font-bold text-[#1B1C1C]">{tenure} Years</span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 bg-[#F0EDED] rounded-lg appearance-none cursor-pointer accent-[#4A5D4E]"
              />
            </div>

            {/* Interest Rate */}
            <div>
              <div className="flex justify-between items-center mb-2 font-mono">
                <label className="text-xs font-bold text-[#2D2D2D] uppercase">{t.interestRate}</label>
                <span className="text-lg font-bold text-[#1B1C1C]">{interestRate}%</span>
              </div>
              <input
                type="range"
                min="6.5"
                max="15"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-[#F0EDED] rounded-lg appearance-none cursor-pointer accent-[#4A5D4E]"
              />
            </div>

          </div>

          {/* Results Panel */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E0D5] flex flex-col justify-between space-y-6 shadow-sm">
            
            <div className="space-y-4 font-mono">
              <span className="text-[11px] font-bold text-[#4A5D4E] uppercase tracking-wider block">
                Calculated Monthly Commitment
              </span>

              <div className="p-5 rounded-2xl bg-[#F9F7F2] border border-[#E5E0D5]">
                <p className="text-xs text-[#636863] font-semibold">{t.monthlyEmi}</p>
                <p className="text-3xl sm:text-4xl font-normal text-[#334537] mt-1 font-serif">
                  {formatRupees(emi)} <span className="text-xs text-[#636863] font-normal">/ month</span>
                </p>
                <p className="text-[11px] text-[#636863] mt-2">
                  {t.loanAmount}: <strong className="text-[#1B1C1C]">{formatRupees(principal)}</strong>
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F9F7F2] border border-[#E5E0D5] space-y-3">
                <div className="flex items-center space-x-2 text-[#10B981] text-xs font-bold">
                  <TrendingUp className="w-4 h-4" />
                  <span>Projected Value Growth</span>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-[#636863]">{t.appreciation3Yr}</span>
                  <span className="font-bold text-[#1B1C1C] text-sm">{formatRupees(val3Yr)}</span>
                </div>

                <div className="flex items-center justify-between text-xs pt-1 border-t border-[#E5E0D5]">
                  <span className="text-[#636863]">{t.appreciation5Yr}</span>
                  <span className="font-bold text-[#10B981] text-sm">{formatRupees(val5Yr)}</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919851633333?text=Hi%20Siva%20Telugu%20Estates,%20I%20want%20to%20discuss%20bank%20plot%20loan%20options."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-[#4A5D4E] hover:bg-[#334537] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2 font-mono"
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
