import React from 'react';
import { ArrowRight, CheckCircle2, Database, Brain, FileCheck } from 'lucide-react';

export default function LandingIntro({ onGoToStudio, onOpenPresets }) {
  return (
    <section className="w-full py-8 sm:py-16 bg-[#FAFAFA] border-b border-[#E5E5E5] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* 1. NATURAL FULL OPEN 2-COLUMN HERO */}
        <div className="relative py-4 sm:py-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: HEADLINE, SUBTEXT & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100/80 text-[#ED5245] text-xs font-black border border-red-200 shadow-2xs cursor-default">
                <span>NYARÈ FAKTA • ENGINE FACT-CHECK NETIZEN</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E1E1E] leading-[1.08] tracking-tight">
                Bicara Pakai Data, Bedah Komentar <span className="text-[#ED5245]">Tanpa Emosi.</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed max-w-xl">
                Mesin analis misinformasi dan logika netizen +62 pertama di Indonesia. Membongkar 15+ *logical fallacy*, menguji kebenaran klaim data terhadap rilis resmi BPS, BI & Kemenkeu, serta menampilkan bukti data pendukung yang sahih.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onGoToStudio}
                  className="btn-bijak-coral text-xs sm:text-sm font-black py-3.5 px-8 shadow-sm group"
                >
                  <span>Coba Fitur Bedah Komentar</span>
                  <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1.5 transition-transform" />
                </button>

                <button
                  onClick={onOpenPresets}
                  className="btn-bijak-outline text-xs sm:text-sm font-black py-3.5 px-7 group"
                >
                  <span>Pelajari Fallacies 101</span>
                </button>
              </div>

              {/* Key Features Pill Bar */}
              <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-slate-200/80 text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 hover:border-red-300 hover:scale-105 transition-all shadow-2xs cursor-default">
                  <Brain className="w-3.5 h-3.5 text-[#ED5245]" />
                  <span>15+ Fallacies Check</span>
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 hover:border-amber-300 hover:scale-105 transition-all shadow-2xs cursor-default">
                  <Database className="w-3.5 h-3.5 text-amber-600" />
                  <span>Tier-1 BPS & BI Data</span>
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 hover:border-emerald-300 hover:scale-105 transition-all shadow-2xs cursor-default">
                  <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Data Pendukung Sahih</span>
                </span>
              </div>

            </div>

            {/* RIGHT COLUMN: NATURAL HERO CHARACTER WITH FLOATING BADGES */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              
              {/* Main Image Container */}
              <div
                onClick={onGoToStudio}
                className="w-full max-w-md rounded-[36px] overflow-hidden shadow-lg relative group transition-transform duration-300 cursor-pointer border border-slate-200/80 bg-white"
              >
                <img
                  src="/assets/hero.jpg"
                  alt="Nyarè Fakta Fact Checking"
                  className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              {/* FLOATING BADGES */}
              <div
                onClick={onGoToStudio}
                className="absolute -top-4 -right-2 sm:-right-4 bg-white border-2 border-emerald-400 rounded-full px-4 py-2 shadow-lg flex items-center gap-2 text-xs font-black text-emerald-950 animate-float-slow hover:scale-110 hover:border-emerald-600 transition-all cursor-pointer z-20"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tier-1 BPS & BI Verified</span>
              </div>

              <div
                onClick={onOpenPresets}
                className="absolute top-1/2 -left-3 sm:-left-6 -translate-y-1/2 bg-white border-2 border-amber-400 rounded-full px-4 py-2 shadow-lg flex items-center gap-2 text-xs font-black text-amber-950 animate-float-delayed hover:scale-110 hover:border-amber-600 transition-all cursor-pointer z-20"
              >
                <Brain className="w-4 h-4 text-amber-600 shrink-0" />
                <span>15+ Fallacies Detector</span>
              </div>

              <div
                onClick={onGoToStudio}
                className="absolute -bottom-4 -right-2 sm:-right-4 bg-white border-2 border-[#ED5245] rounded-full px-4 py-2 shadow-lg flex items-center gap-2 text-xs font-black text-[#ED5245] animate-float-reverse hover:scale-110 hover:border-[#D84236] transition-all cursor-pointer z-20"
              >
                <FileCheck className="w-4 h-4 text-[#ED5245] shrink-0" />
                <span>Bukti Data Pendukung Sahih</span>
              </div>

            </div>

          </div>

        </div>

        {/* 2. EXACT BIJAK MEMILIH 3-CARD STEP SECTION */}
        <div className="space-y-10 pt-6">
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl font-black text-[#1E1E1E] tracking-tight">
              Langkah Cerdas Membedah Fakta & Logika
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-semibold mt-2">
              Ikuti 3 alur mudah berikut untuk menguji data riil dan melihat bukti data pendukung
            </p>
          </div>

          {/* 3 CARDS WIDE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* CARD 1 */}
            <div
              onClick={onGoToStudio}
              className="bg-white border-2 border-[#E5E5E5] rounded-[36px] p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:border-[#ED5245] hover:-translate-y-2.5 hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-red-50 text-[#ED5245] font-black text-base flex items-center justify-center mx-auto mb-6 border border-red-100 group-hover:bg-[#ED5245] group-hover:text-white group-hover:rotate-12 transition-all duration-300 shadow-2xs">
                  1
                </div>

                <div className="w-full h-52 mb-6 rounded-2xl overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-100">
                  <img
                    src="/assets/step1.jpg"
                    alt="Pahami Isu & Komentar"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                </div>

                <h3 className="text-2xl font-black text-[#1E1E1E] mb-3 text-left group-hover:text-[#ED5245] transition-colors">
                  Pahami isu & komentar
                </h3>

                <p className="text-sm text-slate-600 font-semibold leading-relaxed mb-8 text-left">
                  Mulai dengan memindahkan tulisan atau screenshot komentar netizen terkait masalah sehari-hari yang jadi keresahanmu.
                </p>
              </div>

              <button
                className="text-sm font-black text-[#ED5245] group-hover:text-[#D84236] inline-flex items-center gap-2 transition-colors text-left"
              >
                <span>Mulai Bedah Fitur →</span>
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-2 transition-transform duration-200" />
              </button>
            </div>

            {/* CARD 2 */}
            <div
              onClick={onGoToStudio}
              className="bg-white border-2 border-[#E5E5E5] rounded-[36px] p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:border-[#ED5245] hover:-translate-y-2.5 hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-red-50 text-[#ED5245] font-black text-base flex items-center justify-center mx-auto mb-6 border border-red-100 group-hover:bg-[#ED5245] group-hover:text-white group-hover:rotate-12 transition-all duration-300 shadow-2xs">
                  2
                </div>

                <div className="w-full h-52 mb-6 rounded-2xl overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-100">
                  <img
                    src="/assets/step2.jpg"
                    alt="Kenali Data & Logical Fallacy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                </div>

                <h3 className="text-2xl font-black text-[#1E1E1E] mb-3 text-left group-hover:text-[#ED5245] transition-colors">
                  Kenali data & cacat logika
                </h3>

                <p className="text-sm text-slate-600 font-semibold leading-relaxed mb-8 text-left">
                  Kenali kesesuaian klaim angka dari 15+ jenis fallacy, serta rekam jejak rilis data resmi BPS, BI, Kemenkeu, dan riset publik.
                </p>
              </div>

              <button
                className="text-sm font-black text-[#ED5245] group-hover:text-[#D84236] inline-flex items-center gap-2 transition-colors text-left"
              >
                <span>Mulai Bedah Fitur →</span>
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-2 transition-transform duration-200" />
              </button>
            </div>

            {/* CARD 3 */}
            <div
              onClick={onGoToStudio}
              className="bg-white border-2 border-[#E5E5E5] rounded-[36px] p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:border-[#ED5245] hover:-translate-y-2.5 hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-red-50 text-[#ED5245] font-black text-base flex items-center justify-center mx-auto mb-6 border border-red-100 group-hover:bg-[#ED5245] group-hover:text-white group-hover:rotate-12 transition-all duration-300 shadow-2xs">
                  3
                </div>

                <div className="w-full h-52 mb-6 rounded-2xl overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-100">
                  <img
                    src="/assets/step3.jpg"
                    alt="Lihat Bukti Data Pendukung"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                </div>

                <h3 className="text-2xl font-black text-[#1E1E1E] mb-3 text-left group-hover:text-[#ED5245] transition-colors">
                  Lihat bukti data pendukung
                </h3>

                <p className="text-sm text-slate-600 font-semibold leading-relaxed mb-8 text-left">
                  Cari tahu tentang fakta sebenarnya dari data primer dan lihat perbandingan klaim vs bukti data pendukung yang sahih.
                </p>
              </div>

              <button
                className="text-sm font-black text-[#ED5245] group-hover:text-[#D84236] inline-flex items-center gap-2 transition-colors text-left"
              >
                <span>Mulai Bedah Fitur →</span>
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-2 transition-transform duration-200" />
              </button>
            </div>

          </div>
        </div>

        {/* 3. BIG BLOCK BANNER CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          
          {/* CORAL RED BLOCK BANNER */}
          <div className="rounded-[36px] bg-[#ED5245] text-white p-8 sm:p-12 flex flex-col justify-between space-y-8 relative overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="space-y-3 relative z-10">
              <span className="text-xs font-black uppercase tracking-wider bg-black/20 text-white px-3.5 py-1 rounded-full">
                FITUR UTAMA MEDSOS
              </span>
              <h3 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none text-white">
                SIMULASI BEDAH FAKTA MEDSOS!
              </h3>
              <p className="text-sm sm:text-base text-white/95 font-bold leading-relaxed pt-2">
                Tempel komentar TikTok / Twitter atau screenshot gambar untuk melihat skor logika & bukti data pendukung resmi.
              </p>
            </div>

            <div className="pt-2 relative z-10">
              <button
                onClick={onGoToStudio}
                className="btn-bijak-black text-sm font-black py-3.5 px-8 group-hover:scale-105 transition-transform"
              >
                <span>Buka Studio Bedah Komentar</span>
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* TEAL BLUE BLOCK BANNER */}
          <div className="rounded-[36px] bg-[#286472] text-white p-8 sm:p-12 flex flex-col justify-between space-y-8 relative overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="space-y-3 relative z-10">
              <span className="text-xs font-black uppercase tracking-wider bg-white/20 text-white px-3.5 py-1 rounded-full">
                EDUKASI NETIZEN 101
              </span>
              <h3 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none text-white">
                PELAJARI 15 LOGICAL FALLACIES!
              </h3>
              <p className="text-sm sm:text-base text-white/95 font-bold leading-relaxed pt-2">
                Pahami cara kerja kesalahan logika seperti Ad Hominem, Strawman, hingga Sarkasme Hiperbola.
              </p>
            </div>

            <div className="pt-2 relative z-10">
              <button
                onClick={onOpenPresets}
                className="bg-white text-[#286472] hover:bg-slate-100 text-sm font-black py-3.5 px-8 rounded-full transition-all inline-flex items-center gap-2 group-hover:scale-105"
              >
                <span>Pelajari Fallacies 101</span>
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
