import React from 'react';

export default function Footer({ onGoToLanding, onGoToStudio, onOpenPresets }) {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-700 pt-12 pb-8 px-4 sm:px-8 text-xs font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div
              onClick={onGoToLanding}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <div className="w-7 h-7 rounded bg-[#D92D20] text-white flex items-center justify-center font-bold text-xs font-mono-data">
                NF
              </div>
              <div className="flex items-baseline">
                <span className="text-xl font-serif-news font-bold text-slate-900 tracking-tight">Nyarè</span>
                <span className="text-xl font-serif-news font-bold text-[#D92D20] tracking-tight ml-1">Fakta</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              Platform independen verifikasi misinformasi & analisis struktur argumen publik. Menguji narasi netizen terhadap rilis resmi instansi pemerintah.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-[11px] font-mono-data font-bold border border-slate-200">
                <span>Media Edition v3.4</span>
              </span>
            </div>
          </div>

          {/* Column 2: Navigasi Utama */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-data font-bold uppercase tracking-wider text-[#D92D20]">
              Navigasi Platform
            </h4>
            <ul className="space-y-2 font-semibold text-slate-700">
              <li>
                <button onClick={onGoToLanding} className="hover:text-[#D92D20] transition-colors">
                  Beranda Inisiatif
                </button>
              </li>
              <li>
                <button onClick={onGoToStudio} className="hover:text-[#D92D20] transition-colors">
                  Fact-Check Studio
                </button>
              </li>
              <li>
                <button onClick={onOpenPresets} className="hover:text-[#D92D20] transition-colors">
                  Indeks Cacat Logika
                </button>
              </li>
              <li>
                <button onClick={onGoToStudio} className="hover:text-[#D92D20] transition-colors">
                  Truth Matrix BPS
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Sumber Data Primer */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-data font-bold uppercase tracking-wider text-[#D92D20]">
              Hierarki Data Primer
            </h4>
            <ul className="space-y-2 font-semibold text-slate-700">
              <li>
                <a href="https://bps.go.id" target="_blank" rel="noreferrer" className="hover:text-[#D92D20] transition-colors">
                  Badan Pusat Statistik (BPS RI)
                </a>
              </li>
              <li>
                <a href="https://bi.go.id" target="_blank" rel="noreferrer" className="hover:text-[#D92D20] transition-colors">
                  Bank Indonesia (BI)
                </a>
              </li>
              <li>
                <a href="https://kemenkeu.go.id" target="_blank" rel="noreferrer" className="hover:text-[#D92D20] transition-colors">
                  Kementerian Keuangan (APBN KiTa)
                </a>
              </li>
              <li>
                <a href="https://badanpangan.go.id" target="_blank" rel="noreferrer" className="hover:text-[#D92D20] transition-colors">
                  Badan Pangan Nasional (Bapanas)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Standar Transparansi */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-data font-bold uppercase tracking-wider text-[#D92D20]">
              Standar Transparansi
            </h4>
            <ul className="space-y-2 text-slate-600 font-normal">
              <li>
                <span className="block">Verification Pipeline Stage 10</span>
              </li>
              <li>
                <span className="block">Independensi AI Engine</span>
              </li>
              <li>
                <span className="block">Objektivitas Data Publik</span>
              </li>
              <li>
                <span className="block">Metodologi Pengecekan Fakta</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 font-normal text-slate-500 text-[11px]">
          <p>© 2026 Nyarè Fakta Media. Seluruh hak cipta dilindungi undang-undang.</p>
          <div className="flex items-center gap-4 font-mono-data">
            <span>Katadata / Editorial Style Edition • 🇮🇩</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
