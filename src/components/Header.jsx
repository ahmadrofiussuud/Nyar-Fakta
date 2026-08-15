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
      
      {/* 1. DISTINCT CYBER-EDITORIAL STATUS STRIP */}
      <div className="bg-[#0B0D12] text-slate-300 py-2 px-4 text-center text-xs font-mono-data border-b border-white/10 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-bold uppercase tracking-wider text-[11px]">
              ENGINE VERIFIKASI DATA ONLINE (STAGE 10)
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] font-bold text-slate-400">
            <span>● TIER-1 BPS & BI DATABASE</span>
            <span>● 15+ LOGICAL FALLACIES</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER BAR */}
      <header className="bg-[#0F1117]/95 backdrop-blur-md text-white border-b border-white/10 px-4 sm:px-8 py-3.5 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo: Nyarè Fakta (Distinct Cyber-Editorial Logo) */}
          <div
            onClick={() => setCurrentPage('landing')}
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F04438] to-[#9B1C1C] text-white flex items-center justify-center font-bold text-sm tracking-widest shadow-md group-hover:scale-105 transition-transform border border-white/20">
              NF
            </div>
            <div className="flex items-baseline">
              <span className="text-2xl font-extrabold text-white tracking-tight font-display">Nyarè</span>
              <span className="text-2xl font-extrabold text-[#F04438] tracking-tight font-display ml-1">Fakta</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-300">
            <button
              onClick={() => setCurrentPage('landing')}
              className={`px-4 py-2 rounded-xl transition-all ${
                currentPage === 'landing' 
                  ? 'bg-white/10 text-[#F04438] font-black border border-white/15' 
                  : 'hover:bg-white/5 hover:text-white'
              }`}
            >
              Beranda
            </button>

            <button
              onClick={() => setCurrentPage('studio')}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
                currentPage === 'studio' 
                  ? 'bg-[#F04438] text-white font-black' 
                  : 'hover:bg-white/5 hover:text-white'
              }`}
            >
              <span>Fact-Check Studio</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </button>

            <button
              onClick={onOpenPresets}
              className="px-4 py-2 rounded-xl hover:bg-white/5 hover:text-white transition-all"
            >
              15 Fallacies
            </button>

            <button
              onClick={() => setCurrentPage('studio')}
              className="px-4 py-2 rounded-xl hover:bg-white/5 hover:text-white transition-all"
            >
              Truth Matrix BPS
            </button>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-2.5 rounded-xl border transition-all text-xs font-extrabold flex items-center gap-1 ${
                soundEnabled
                  ? 'bg-[#F04438]/15 border-[#F04438]/40 text-[#F04438]'
                  : 'bg-white/5 border-white/10 text-slate-400'
              }`}
              title={soundEnabled ? 'Matikan Suara Audio' : 'Aktifkan Suara Audio'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[#F04438]" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
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
                <span>Buka Studio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>
      </header>

    </div>
  );
}
