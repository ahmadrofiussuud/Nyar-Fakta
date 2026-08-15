import React from 'react';
import { ArrowRight, CheckCircle2, Database, Brain, FileCheck } from 'lucide-react';

export default function LandingIntro({ onGoToStudio, onOpenPresets }) {
  return (
    <div className="w-full font-sans bg-[#181818] text-white">
      
      {/* 1. EXACT WIUI HERO SECTION (DARK MATTE CANVAS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: WIUI HEADLINE, SUBTEXT & BUTTONS */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* WIUI Badge Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E54624] text-white text-xs font-black uppercase tracking-wider shadow-sm">
              <span>SUP, NETIZEN +62!</span>
            </div>

            {/* WIUI Typography: Sans Bold + Serif Italic Highlight */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-white">
              Indonesian netizen claims, fact-checked in <br className="hidden sm:inline" />
              <span className="font-serif-italic font-normal text-[#E54624]">fakta & data sahih.</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-300 font-semibold leading-relaxed max-w-xl">
              Bingung bedain mana klaim emosi vs fakta riil? Kamu datang ke tempat yang tepat. Membongkar 15+ *logical fallacy* netizen dan menguji data terhadap rilis resmi BPS & BI.
            </p>

            {/* WIUI Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onGoToStudio}
                className="btn-wiui-white text-xs sm:text-sm font-black py-3.5 px-8 group border-[#E54624]"
              >
                <span className="text-[#181818]">Mulai bedah fakta</span>
                <ArrowRight className="w-4 h-4 text-[#E54624] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenPresets}
                className="btn-wiui-dark-outline text-xs sm:text-sm font-black py-3.5 px-7"
              >
                <span>Apa itu Nyarè Fakta?</span>
              </button>
            </div>

            {/* REPLACED AI PILL BADGES WITH HUMAN EDITORIAL STAT METRICS BAR */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-4 sm:gap-6 text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#E54624] tracking-tight">15+</div>
                <div className="text-[11px] sm:text-xs font-extrabold text-slate-300 uppercase tracking-wider mt-0.5">
                  Fallacies Detector
                </div>
              </div>
              
              <div className="border-l border-white/15 pl-4 sm:pl-6">
                <div className="text-2xl sm:text-3xl font-black text-amber-400 tracking-tight">Tier-1</div>
                <div className="text-[11px] sm:text-xs font-extrabold text-slate-300 uppercase tracking-wider mt-0.5">
                  BPS & BI Verified
                </div>
              </div>
              
              <div className="border-l border-white/15 pl-4 sm:pl-6">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-tight">100%</div>
                <div className="text-[11px] sm:text-xs font-extrabold text-slate-300 uppercase tracking-wider mt-0.5">
                  Data Sahih Pembanding
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: STACKED WIUI TILTED CARDS WITH HERO IMAGE & BADGES */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Background Orange Block Card (Tilted) */}
            <div className="absolute w-72 sm:w-80 h-72 sm:h-80 bg-[#E54624] rounded-3xl rotate-6 shadow-2xl transition-transform duration-300 hover:rotate-3 flex flex-col justify-end p-6">
              <span className="text-white font-black text-2xl uppercase tracking-tighter leading-tight">
                WHAT IS UP,<br />INDONESIA?
              </span>
            </div>

            {/* Main Visual Image Card (Slightly Counter-Tilted) */}
            <div
              onClick={onGoToStudio}
              className="relative z-10 w-72 sm:w-80 bg-white border-4 border-[#181818] rounded-3xl overflow-hidden shadow-2xl -rotate-3 hover:rotate-0 transition-all duration-300 cursor-pointer group"
            >
              <img
                src="/assets/hero.jpg"
                alt="Nyarè Fakta Fact Checking"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-[#181818] p-3 text-center text-xs font-mono font-bold text-slate-300">
                I see you've found Nyarè Fakta, welcome!
              </div>
            </div>

            {/* FLOATING BADGES */}
            <div
              onClick={onGoToStudio}
              className="absolute -top-6 -right-2 bg-[#181818] text-white border-2 border-emerald-400 rounded-full px-4 py-2 shadow-xl flex items-center gap-2 text-xs font-black animate-float-slow hover:scale-110 transition-all cursor-pointer z-30"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Tier-1 BPS Verified</span>
            </div>

            <div
              onClick={onOpenPresets}
              className="absolute bottom-4 -left-6 bg-[#181818] text-white border-2 border-amber-400 rounded-full px-4 py-2 shadow-xl flex items-center gap-2 text-xs font-black animate-float-delayed hover:scale-110 transition-all cursor-pointer z-30"
            >
              <Brain className="w-4 h-4 text-amber-400 shrink-0" />
              <span>15+ Fallacies Check</span>
            </div>

          </div>

        </div>
      </section>

      {/* 2. WIUI MID STRIP BAR */}
      <div className="bg-[#E54624] text-white py-3 border-y border-[#CE3818] overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap text-xs sm:text-sm font-black tracking-widest uppercase flex items-center gap-8">
          <span>★ NOT A HOAX SITE</span>
          <span>★ PRONE TO FACTS & DATA</span>
          <span>★ DO YOUR OWN RESEARCH</span>
          <span>★ TIER-1 BPS & BI VERIFIED</span>
          <span>★ NOT A HOAX SITE</span>
          <span>★ PRONE TO FACTS & DATA</span>
          <span>★ DO YOUR OWN RESEARCH</span>
          <span>★ TIER-1 BPS & BI VERIFIED</span>
        </div>
      </div>

      {/* 3. LIGHT SECTION BELOW ("What we got for u ↓") */}
      <section className="bg-[#F9F8F6] text-[#181818] py-16 sm:py-24 border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold text-[#E54624] uppercase tracking-wider block mb-1">
                PICK YOUR FIGHTER
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#181818]">
                What we got for u <span className="text-[#E54624]">↓</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-500 max-w-xs">
              3 langkah praktis membedah argumen netizen dengan data primer sahih.
            </p>
          </div>

          {/* 3 CARDS GRID (WIUI CARDS) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* CARD 1 */}
            <div
              onClick={onGoToStudio}
              className="wiui-card p-8 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-red-100 text-[#E54624] font-black text-base flex items-center justify-center mb-6 group-hover:bg-[#E54624] group-hover:text-white transition-all duration-300">
                  1
                </div>

                <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  <img
                    src="/assets/step1.jpg"
                    alt="Pahami Isu & Komentar"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-2xl font-black text-[#181818] mb-2 group-hover:text-[#E54624] transition-colors">
                  Pahami isu & komentar
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed mb-6">
                  Tempel tulisan atau screenshot komentar netizen terkait masalah publik yang ingin kamu selidiki.
                </p>
              </div>

              <button className="text-xs font-black text-[#E54624] group-hover:text-[#CE3818] inline-flex items-center gap-2">
                <span>Mulai Bedah Fitur →</span>
              </button>
            </div>

            {/* CARD 2 */}
            <div
              onClick={onGoToStudio}
              className="wiui-card p-8 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-red-100 text-[#E54624] font-black text-base flex items-center justify-center mb-6 group-hover:bg-[#E54624] group-hover:text-white transition-all duration-300">
                  2
                </div>

                <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  <img
                    src="/assets/step2.jpg"
                    alt="Kenali Data & Fallacy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-2xl font-black text-[#181818] mb-2 group-hover:text-[#E54624] transition-colors">
                  Kenali data & fallacies
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed mb-6">
                  Lacak cacat logika dari 15+ jenis fallacy dan ukur kesesuaian angka terhadap rilis BPS & BI.
                </p>
              </div>

              <button className="text-xs font-black text-[#E54624] group-hover:text-[#CE3818] inline-flex items-center gap-2">
                <span>Mulai Bedah Fitur →</span>
              </button>
            </div>

            {/* CARD 3 */}
            <div
              onClick={onGoToStudio}
              className="wiui-card p-8 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-red-100 text-[#E54624] font-black text-base flex items-center justify-center mb-6 group-hover:bg-[#E54624] group-hover:text-white transition-all duration-300">
                  3
                </div>

                <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  <img
                    src="/assets/step3.jpg"
                    alt="Bukti Data Sahih"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-2xl font-black text-[#181818] mb-2 group-hover:text-[#E54624] transition-colors">
                  Lihat bukti data sahih
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed mb-6">
                  Dapatkan perbandingan klaim vs fakta asli beserta link rujukan instansi pemerintah primer.
                </p>
              </div>

              <button className="text-xs font-black text-[#E54624] group-hover:text-[#CE3818] inline-flex items-center gap-2">
                <span>Mulai Bedah Fitur →</span>
              </button>
            </div>

          </div>

          {/* WIUI BIG BANNER CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            
            <div className="rounded-3xl bg-[#E54624] text-white p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-md hover:shadow-xl transition-all group">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-black/20 text-white px-3 py-1 rounded-full">
                  STUDIO BEDAH FAKTA
                </span>
                <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-none pt-1">
                  SIAP BEDAH KOMENTAR MEDSOS?
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-white/90 leading-relaxed pt-1">
                  Tempel teks komentar TikTok/X atau upload screenshot gambar untuk langsung diuji ke database resmi.
                </p>
              </div>

              <div>
                <button
                  onClick={onGoToStudio}
                  className="btn-wiui-white text-xs font-black py-3 px-6 text-[#181818] group-hover:scale-105"
                >
                  <span>Buka Studio Bedah Komentar</span>
                  <ArrowRight className="w-4 h-4 text-[#E54624]" />
                </button>
              </div>
            </div>

            <div className="rounded-3xl bg-[#181818] text-white p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-md hover:shadow-xl transition-all group">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-white/20 text-white px-3 py-1 rounded-full">
                  FALLACY EDUKASI
                </span>
                <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-none pt-1">
                  PELAJARI 15 LOGICAL FALLACIES!
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-300 leading-relaxed pt-1">
                  Pahami strategi pengenalan cacat argumen seperti Strawman, Ad Hominem, hingga Sarkasme Hiperbola.
                </p>
              </div>

              <div>
                <button
                  onClick={onOpenPresets}
                  className="btn-wiui-orange text-xs font-black py-3 px-6 group-hover:scale-105"
                >
                  <span>Pelajari Fallacies 101</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
