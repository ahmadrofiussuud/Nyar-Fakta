import React from 'react';

export default function Footer({ onGoToLanding, onGoToStudio, onOpenPresets }) {
  return (
    <footer className="border-t border-white/10 bg-[#181818] text-white pt-14 pb-10 px-4 sm:px-8 text-xs font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div
              onClick={onGoToLanding}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <div className="w-8 h-8 rounded-full bg-[#E54624] text-white flex items-center justify-center font-black text-xs tracking-tighter">
                NF
              </div>
              <div className="flex items-center">
                <span className="text-xl font-black text-white tracking-tight">Nyarè</span>
                <span className="text-xl font-black text-[#E54624] tracking-tight ml-1.5">Fakta</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-semibold leading-relaxed">
              Platform independen faktual berbasis AI untuk membedah logika komentar netizen dan memverifikasi kebenaran data publik terhadap database resmi Indonesia.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-300 text-[11px] font-extrabold border border-white/15">
                <span>Engine v3.4 (WIUI Edition)</span>
              </span>
            </div>
          </div>

          {/* Column 2: Navigasi Utama */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#E54624]">
              Navigasi Utama
            </h4>
            <ul className="space-y-2.5 font-bold text-slate-300">
              <li>
                <button onClick={onGoToLanding} className="hover:text-[#E54624] transition-colors">
                  Beranda Inisiatif
                </button>
              </li>
              <li>
                <button onClick={onGoToStudio} className="hover:text-[#E54624] transition-colors">
                  Fact-Check Studio
                </button>
              </li>
              <li>
                <button onClick={onOpenPresets} className="hover:text-[#E54624] transition-colors">
                  15 Logical Fallacies 101
                </button>
              </li>
              <li>
                <button onClick={onGoToStudio} className="hover:text-[#E54624] transition-colors">
                  Truth Matrix Data BPS
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Sumber Data Primer */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#E54624]">
              Hierarki Data Primer
            </h4>
            <ul className="space-y-2.5 font-bold text-slate-300">
              <li>
                <a href="https://bps.go.id" target="_blank" rel="noreferrer" className="hover:text-[#E54624] transition-colors">
                  Badan Pusat Statistik (BPS RI)
                </a>
              </li>
              <li>
                <a href="https://bi.go.id" target="_blank" rel="noreferrer" className="hover:text-[#E54624] transition-colors">
                  Bank Indonesia (BI)
                </a>
              </li>
              <li>
                <a href="https://kemenkeu.go.id" target="_blank" rel="noreferrer" className="hover:text-[#E54624] transition-colors">
                  Kementerian Keuangan (APBN KiTa)
                </a>
              </li>
              <li>
                <a href="https://badanpangan.go.id" target="_blank" rel="noreferrer" className="hover:text-[#E54624] transition-colors">
                  Badan Pangan Nasional (Bapanas)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Standar Transparansi */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#E54624]">
              Standar Transparansi
            </h4>
            <ul className="space-y-2.5 font-bold text-slate-400">
              <li>
                <span className="block">3-Gate Verification Pipeline</span>
              </li>
              <li>
                <span className="block">Independensi Algoritma AI</span>
              </li>
              <li>
                <span className="block">Konteks Timeline 2026</span>
              </li>
              <li>
                <span className="block">Metodologi Pengecekan Data</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-semibold text-slate-400 text-[11px]">
          <p>© 2026 Nyarè Fakta. Seluruh hak cipta dilindungi undang-undang.</p>
          <div className="flex items-center gap-4">
            <span>Inspired by WIUI Aesthetic • Literasi Digital Indonesia 🇮🇩</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
