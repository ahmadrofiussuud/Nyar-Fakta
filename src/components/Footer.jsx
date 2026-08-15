import React from 'react';

export default function Footer({ onGoToLanding, onGoToStudio, onOpenPresets }) {
  return (
    <footer className="border-t border-[#E5E5E5] bg-white pt-14 pb-10 px-4 sm:px-8 text-xs font-sans text-slate-700">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div
              onClick={onGoToLanding}
              className="flex items-center gap-1 cursor-pointer select-none"
            >
              <span className="text-2xl font-black text-[#1E1E1E] tracking-tight">Nyarè</span>
              <span className="text-2xl font-black text-[#ED5245] tracking-tight ml-1">Fakta</span>
            </div>

            <p className="text-xs text-slate-600 font-semibold leading-relaxed">
              Platform independen faktual berbasis kecerdasan buatan untuk membedah logika komentar netizen dan memverifikasi kebenaran klaim publik terhadap database resmi Indonesia.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-extrabold border border-slate-200">
                <span>Versi Engine v3.4 (Tier-1 Data)</span>
              </span>
            </div>
          </div>

          {/* Column 2: Navigasi Utama */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-[#1E1E1E] uppercase tracking-wider">
              Navigasi Utama
            </h4>
            <ul className="space-y-2.5 font-bold text-slate-600">
              <li>
                <button onClick={onGoToLanding} className="hover:text-[#ED5245] transition-colors">
                  Beranda Inisiatif
                </button>
              </li>
              <li>
                <button onClick={onGoToStudio} className="hover:text-[#ED5245] transition-colors">
                  Fact-Check Studio
                </button>
              </li>
              <li>
                <button onClick={onOpenPresets} className="hover:text-[#ED5245] transition-colors">
                  15 Logical Fallacies 101
                </button>
              </li>
              <li>
                <button onClick={onGoToStudio} className="hover:text-[#ED5245] transition-colors">
                  Truth Matrix Data BPS
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Sumber Data Primer */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-[#1E1E1E] uppercase tracking-wider">
              Hierarki Sumber Data
            </h4>
            <ul className="space-y-2.5 font-bold text-slate-600">
              <li>
                <a href="https://bps.go.id" target="_blank" rel="noreferrer" className="hover:text-[#ED5245] transition-colors">
                  Badan Pusat Statistik (BPS RI)
                </a>
              </li>
              <li>
                <a href="https://bi.go.id" target="_blank" rel="noreferrer" className="hover:text-[#ED5245] transition-colors">
                  Bank Indonesia (BI)
                </a>
              </li>
              <li>
                <a href="https://kemenkeu.go.id" target="_blank" rel="noreferrer" className="hover:text-[#ED5245] transition-colors">
                  Kementerian Keuangan (APBN KiTa)
                </a>
              </li>
              <li>
                <a href="https://badanpangan.go.id" target="_blank" rel="noreferrer" className="hover:text-[#ED5245] transition-colors">
                  Badan Pangan Nasional (Bapanas)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Standar Transparansi */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-[#1E1E1E] uppercase tracking-wider">
              Standar Transparansi
            </h4>
            <ul className="space-y-2.5 font-bold text-slate-600">
              <li>
                <span className="block text-slate-600">3-Gate Verification Pipeline</span>
              </li>
              <li>
                <span className="block text-slate-600">Independensi Algoritma AI</span>
              </li>
              <li>
                <span className="block text-slate-600">Konteks Timeline 2026</span>
              </li>
              <li>
                <span className="block text-slate-600">Metodologi Pengecekan Data</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-4 font-semibold text-slate-500 text-[11px]">
          <p>© 2026 Nyarè Fakta. Seluruh hak cipta dilindungi undang-undang.</p>
          <div className="flex items-center gap-4">
            <span>Dirancang untuk Edukasi & Literasi Digital Indonesia 🇮🇩</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
