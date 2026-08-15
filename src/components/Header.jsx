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
      
      {/* 1. WIUI MARQUEE TICKER ANNOUNCEMENT BAR */}
      <div className="bg-[#E54624] text-white py-2 overflow-hidden select-none border-b border-[#CE3818]">
        <div className="animate-marquee whitespace-nowrap text-xs font-black tracking-wider uppercase flex items-center gap-6">
          <span>★ BUKAN SEKADAR OPINI</span>
          <span>★ VERIFIKASI DATA TIER-1 BPS & BI</span>
          <span>★ CEK CACAT LOGIKA & FALLACY</span>
          <span>★ DATA PENDUKUNG SAHIH</span>
          <span>★ BEDAH KOMENTAR NETIZEN +62</span>
          <span>★ BUKAN SEKADAR OPINI</span>
          <span>★ VERIFIKASI DATA TIER-1 BPS & BI</span>
          <span>★ CEK CACAT LOGIKA & FALLACY</span>
          <span>★ DATA PENDUKUNG SAHIH</span>
          <span>★ BEDAH KOMENTAR NETIZEN +62</span>
        </div>
      </div>

      {/* 2. WIUI MAIN HEADER BAR */}
      <header className="bg-[#181818] text-white border-b border-white/10 px-4 sm:px-8 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo: Nyarè Fakta (WIUI Style Logo Badge) */}
          <div
            onClick={() => setCurrentPage('landing')}
            className="flex items-center gap-2 cursor-pointer select-none group"
          >
            <div className="w-8 h-8 rounded-full bg-[#E54624] text-white flex items-center justify-center font-black text-xs tracking-tighter shadow-sm group-hover:scale-105 transition-transform">
              NF
            </div>
            <div className="flex items-center">
              <span className="text-xl sm:text-2xl font-black text-white tracking-tight">Nyarè</span>
              <span className="text-xl sm:text-2xl font-black text-[#E54624] tracking-tight ml-1.5">Fakta</span>
            </div>
          </div>

          {/* Navigation Links (WIUI Header Menu Style) */}
          <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-extrabold tracking-wider uppercase text-slate-300">
            <button
              onClick={() => setCurrentPage('landing')}
              className={`hover:text-[#E54624] transition-colors ${currentPage === 'landing' ? 'text-[#E54624] font-black' : ''}`}
            >
              Beranda
            </button>

            <button
              onClick={() => setCurrentPage('studio')}
              className={`flex items-center gap-1.5 hover:text-[#E54624] transition-colors ${currentPage === 'studio' ? 'text-[#E54624] font-black' : ''}`}
            >
              <span>Fact-Check Studio</span>
              <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-[#E54624] text-white">
                UTAMA
              </span>
            </button>

            <button
              onClick={onOpenPresets}
              className="hover:text-[#E54624] transition-colors"
            >
              15 Fallacies
            </button>

            <button
              onClick={() => setCurrentPage('studio')}
              className="hover:text-[#E54624] transition-colors"
            >
              Truth Matrix
            </button>

            <button
              onClick={() => setCurrentPage('studio')}
              className="hover:text-[#E54624] transition-colors text-[#E54624]"
            >
              Data Sahih
            </button>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-2.5 rounded-full border transition-all text-xs font-extrabold flex items-center gap-1 ${
                soundEnabled
                  ? 'bg-[#E54624]/20 border-[#E54624] text-[#E54624]'
                  : 'bg-white/10 border-white/20 text-slate-400'
              }`}
              title={soundEnabled ? 'Matikan Suara Audio' : 'Aktifkan Suara Audio'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[#E54624]" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            </button>

            {currentPage === 'studio' ? (
              <button
                onClick={() => setCurrentPage('landing')}
                className="btn-wiui-dark-outline text-xs sm:text-sm py-2 px-4 flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Beranda</span>
              </button>
            ) : (
              <button
                onClick={() => setCurrentPage('studio')}
                className="btn-wiui-orange text-xs sm:text-sm py-2.5 px-5 flex items-center gap-1.5"
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
