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
      
      {/* 1. EDITORIAL MEDIA TOP TICKER & DATE BAR */}
      <div className="bg-[#111827] text-slate-300 py-1.5 px-4 text-[11px] font-mono-data border-b border-slate-800 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#D92D20]">NYARÈ FAKTA MEDIA</span>
            <span className="text-slate-500">│</span>
            <span className="text-slate-400">Sabtu, 15 Agustus 2026</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-slate-400 font-medium">
            <span>DATABASE RUJUKAN: BPS, BI, KEMENKEU RI</span>
            <span className="text-slate-500">│</span>
            <span className="text-emerald-400 font-bold">STATUS ENGINE: PASS STAGE 10</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN EDITORIAL HEADER BAR */}
      <header className="bg-white border-b border-slate-200 px-4 sm:px-8 py-3.5 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo: NYARÈ FAKTA (Clean Media Logo) */}
          <div
            onClick={() => setCurrentPage('landing')}
            className="flex items-center gap-2 cursor-pointer select-none group"
          >
            <div className="w-8 h-8 rounded bg-[#D92D20] text-white flex items-center justify-center font-bold text-xs font-mono-data">
              NF
            </div>
            <div className="flex items-baseline">
              <span className="text-2xl font-serif-news font-bold text-slate-900 tracking-tight">Nyarè</span>
              <span className="text-2xl font-serif-news font-bold text-[#D92D20] tracking-tight ml-1">Fakta</span>
            </div>
          </div>

          {/* Navigation Links (Media Sections) */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-700">
            <button
              onClick={() => setCurrentPage('landing')}
              className={`hover:text-[#D92D20] transition-colors ${
                currentPage === 'landing' ? 'text-[#D92D20] font-black border-b-2 border-[#D92D20] pb-1' : ''
              }`}
            >
              Beranda
            </button>

            <button
              onClick={() => setCurrentPage('studio')}
              className={`flex items-center gap-1.5 hover:text-[#D92D20] transition-colors ${
                currentPage === 'studio' ? 'text-[#D92D20] font-black border-b-2 border-[#D92D20] pb-1' : ''
              }`}
            >
              <span>Fact-Check Studio</span>
              <span className="px-1.5 py-0.5 rounded bg-red-100 text-[#D92D20] text-[10px] font-black">
                UTAMA
              </span>
            </button>

            <button
              onClick={onOpenPresets}
              className="hover:text-[#D92D20] transition-colors"
            >
              Indeks Fallacy
            </button>

            <button
              onClick={() => setCurrentPage('studio')}
              className="hover:text-[#D92D20] transition-colors"
            >
              Truth Matrix BPS
            </button>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-2 rounded border transition-all text-xs font-bold ${
                soundEnabled
                  ? 'bg-red-50 border-red-200 text-[#D92D20]'
                  : 'bg-slate-100 border-slate-200 text-slate-500'
              }`}
              title={soundEnabled ? 'Matikan Suara Audio' : 'Aktifkan Suara Audio'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[#D92D20]" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            </button>

            {currentPage === 'studio' ? (
              <button
                onClick={() => setCurrentPage('landing')}
                className="btn-editorial-outline text-xs py-2 px-3 flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Beranda</span>
              </button>
            ) : (
              <button
                onClick={() => setCurrentPage('studio')}
                className="btn-editorial-red text-xs py-2 px-4 flex items-center gap-1.5"
              >
                <span>Buka Studio Verifikasi</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>
      </header>

    </div>
  );
}
