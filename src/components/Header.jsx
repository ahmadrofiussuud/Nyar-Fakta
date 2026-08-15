import React from 'react';
import { Volume2, VolumeX, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Header({ 
  soundEnabled, 
  setSoundEnabled, 
  onOpenPresets, 
  currentPage,
  setCurrentPage
}) {
  return (
    <div className="w-full font-sans sticky top-0 z-50">
      
      {/* 1. TOP ANNOUNCEMENT TICKER */}
      <div className="bg-[#E63946] text-white py-2 px-4 text-center text-xs font-semibold overflow-hidden">
        <div className="animate-marquee whitespace-nowrap tracking-wide uppercase flex items-center gap-6 font-mono-data">
          <span>★ NYARÈ FAKTA — BEDAH LOGIKA & FAKTA DATA NETIZEN +62</span>
          <span>★ TIER-1 BPS, BI & KEMENKEU VERIFIED</span>
          <span>★ 100% INDEPENDEN & EDUTAINMENT</span>
          <span>★ NYARÈ FAKTA — BEDAH LOGIKA & FAKTA DATA NETIZEN +62</span>
          <span>★ TIER-1 BPS, BI & KEMENKEU VERIFIED</span>
        </div>
      </div>

      {/* 2. MAIN HEADER BAR (CLEAN WHITE) */}
      <header className="bg-white border-b border-slate-200 px-4 sm:px-8 py-3.5 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div
            onClick={() => setCurrentPage('landing')}
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#E63946] text-white flex items-center justify-center font-bold text-sm tracking-widest shadow-xs group-hover:scale-105 transition-transform">
              NF
            </div>
            <div className="flex items-baseline">
              <span className="text-2xl font-extrabold text-slate-900 tracking-tight font-display">Nyarè</span>
              <span className="text-2xl font-extrabold text-[#E63946] tracking-tight font-display ml-1">Fakta</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-bold text-slate-700">
            <button
              onClick={() => setCurrentPage('landing')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'landing' 
                  ? 'bg-red-50 text-[#E63946] font-extrabold' 
                  : 'hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              Beranda
            </button>

            <button
              onClick={() => setCurrentPage('studio')}
              className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
                currentPage === 'studio' 
                  ? 'bg-[#E63946] text-white font-extrabold' 
                  : 'hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <span>Fact-Check Studio</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-white text-[#E63946] font-black">UTAMA</span>
            </button>

            <button
              onClick={onOpenPresets}
              className="px-4 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              15 Fallacies
            </button>

            <button
              onClick={() => setCurrentPage('studio')}
              className="px-4 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              Truth Matrix
            </button>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-2.5 rounded-lg border transition-all text-xs font-bold ${
                soundEnabled
                  ? 'bg-red-50 border-red-200 text-[#E63946]'
                  : 'bg-slate-100 border-slate-200 text-slate-500'
              }`}
              title={soundEnabled ? 'Matikan Suara Audio' : 'Aktifkan Suara Audio'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[#E63946]" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            </button>

            {currentPage === 'studio' ? (
              <button
                onClick={() => setCurrentPage('landing')}
                className="btn-nyare-outline text-xs sm:text-sm py-2 px-4 flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Beranda</span>
              </button>
            ) : (
              <button
                onClick={() => setCurrentPage('studio')}
                className="btn-nyare-crimson text-xs sm:text-sm py-2.5 px-5 flex items-center gap-1.5"
              >
                <span>Coba Fitur Studio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>
      </header>

    </div>
  );
}
