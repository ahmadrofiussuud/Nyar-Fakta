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
    <div className="w-full font-sans sticky top-0 z-40">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#ED5245] text-white py-2.5 px-4 text-center text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2">
        <span>Nyari platform bedah fakta & logika netizen +62?</span>
        <button
          onClick={() => setCurrentPage('studio')}
          className="bg-[#1E1E1E] text-white hover:bg-black text-xs font-black px-3.5 py-1 rounded-full inline-flex items-center gap-1 transition-all hover:scale-105"
        >
          <span>Mulai di sini</span>
          <ArrowRight className="w-3 h-3 text-red-300" />
        </button>
      </div>

      {/* 2. MAIN HEADER BAR */}
      <header className="bg-white border-b border-[#E5E5E5] px-4 sm:px-8 py-4 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo: Nyarè Fakta (Clean Text, No Pin Emoji) */}
          <div
            onClick={() => setCurrentPage('landing')}
            className="flex items-center gap-1 cursor-pointer select-none group"
          >
            <span className="text-2xl sm:text-3xl font-black text-[#1E1E1E] tracking-tight">Nyarè</span>
            <span className="text-2xl sm:text-3xl font-black text-[#ED5245] tracking-tight ml-1">Fakta</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-extrabold text-[#1E1E1E]">
            <button
              onClick={() => setCurrentPage('landing')}
              className={`hover:text-[#ED5245] transition-colors ${currentPage === 'landing' ? 'text-[#ED5245] font-black' : ''}`}
            >
              Beranda
            </button>

            <button
              onClick={() => setCurrentPage('studio')}
              className={`flex items-center gap-1.5 hover:text-[#ED5245] transition-colors ${currentPage === 'studio' ? 'text-[#ED5245] font-black' : ''}`}
            >
              <span>Fact-Check Studio</span>
              <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-red-100 text-[#ED5245]">
                FITUR UTAMA
              </span>
            </button>

            <button
              onClick={onOpenPresets}
              className="hover:text-[#ED5245] transition-colors"
            >
              15 Fallacies
            </button>

            <button
              onClick={() => setCurrentPage('studio')}
              className="hover:text-[#ED5245] transition-colors"
            >
              Truth Matrix BPS
            </button>

            <button
              onClick={() => setCurrentPage('studio')}
              className="hover:text-[#ED5245] transition-colors"
            >
              Data Pendukung Sahih
            </button>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-2.5 rounded-full border transition-all text-xs font-extrabold flex items-center gap-1 ${
                soundEnabled
                  ? 'bg-red-50 border-red-200 text-[#ED5245]'
                  : 'bg-slate-100 border-slate-200 text-slate-500'
              }`}
              title={soundEnabled ? 'Matikan Suara Audio' : 'Aktifkan Suara Audio'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[#ED5245]" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            </button>

            {currentPage === 'studio' ? (
              <button
                onClick={() => setCurrentPage('landing')}
                className="btn-bijak-outline text-xs sm:text-sm py-2.5 px-5 flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Beranda</span>
              </button>
            ) : (
              <button
                onClick={() => setCurrentPage('studio')}
                className="btn-bijak-coral text-xs sm:text-sm py-2.5 px-6 flex items-center gap-1.5"
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
