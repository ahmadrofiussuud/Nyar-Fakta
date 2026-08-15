import React, { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, Database, Brain, FileCheck, 
  HelpCircle, ChevronDown, ChevronUp, Activity
} from 'lucide-react';

export default function LandingIntro({ onGoToStudio, onOpenPresets }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const sampleCases = [
    {
      title: "Klaim Utang 50.000 Triliun",
      claim: "Utang Indonesia tembus 50.000 Triliun dan inflasi 80%, negara siap bangkrut!",
      fact: "Utang resmi pemerintah tercatat Rp 8.440 T (rasio PDB 38,6%) dan inflasi BPS 2,13%.",
      fallacy: "Sarkasme Hiperbola",
      tier: "APBN KiTa Kemenkeu"
    },
    {
      title: "Klaim Rata-Rata IQ > 150",
      claim: "Indonesia ini IQ-nya di atas 150 semua ya pintar-pintar wkwkwk...",
      fact: "Rata-rata IQ nasional Indonesia tercatat ~78,49 (peringkat 130 dunia). IQ > 150 adalah kualifikasi genius top 0,1% dunia.",
      fallacy: "Sarkasme Ironi",
      tier: "Ulster Institute Study"
    },
    {
      title: "Klaim Ekonomi Minus 4,5%",
      claim: "Ekonomi Indonesia minus 4,5% rakyat makin susah!",
      fact: "Minus 4,5% adalah data historis Pandemi 2020. Data PDB BPS Q2 2024-2026 tumbuh stabil 5,05%.",
      fallacy: "Outdated Context",
      tier: "Berita Resmi BPS RI"
    }
  ];

  const fallacyCatalog = [
    {
      name: "Ad Hominem",
      desc: "Menyerang pribadi lawan bicara daripada menguji data.",
      example: "'Anak kemarin sore tau apa soal ekonomi!'",
      tag: "Serangan Pribadi"
    },
    {
      name: "Strawman",
      desc: "Memelintir argumen lawan jadi versi ekstrem yang mudah diserang.",
      example: "'Oh jadi lu setuju rakyat kelaparan?'",
      tag: "Melintir Fakta"
    },
    {
      name: "Sarkasme Hiperbola",
      desc: "Sindiran berlebihan yang membalikkan statistik asli.",
      example: "'IQ netizen sini kan 150 semua pintar banget wkwk'",
      tag: "Sindiran Netizen"
    },
    {
      name: "Hasty Generalization",
      desc: "Menyimpulkan seluruh negara dari 1 kasus kecil.",
      example: "'Toko sebelah sepi, fix ekonomi hancur total!'",
      tag: "Generalisasi Ngawur"
    },
    {
      name: "Cherry Picking",
      desc: "Hanya mengambil 1 angka buruk & menyembunyikan data utuh.",
      example: "'Nge-spam 1 harga naik, lupa inflasi stabil 2%'",
      tag: "Potong Data"
    },
    {
      name: "Outdated Context",
      desc: "Pakai data kuno (2020) untuk menghakimi situasi hari ini (2026).",
      example: "'Ekonomi minus 4.5%!' (padahal data pandemi 2020)",
      tag: "Data Kedaluwarsa"
    }
  ];

  const faqList = [
    {
      q: "Apakah Nyarè Fakta independen dan bebas kepentingan politik?",
      a: "100% Independen. Nyarè Fakta dikembangkan murni sebagai inisiatif literasi digital dan tidak berafiliasi dengan partai politik atau paslon manapun. Seluruh verifikasi fakta mengacu murni pada angka resmi rilis instansi publik."
    },
    {
      q: "Dari mana Nyarè Fakta mengambil rujukan data pembanding?",
      a: "Sistem mengutamakan Hierarki Tier-1 yaitu dokumen resmi publikasi Badan Pusat Statistik (BPS RI), Bank Indonesia (BI), Laporan APBN KiTa Kementerian Keuangan, Badan Pangan Nasional (Bapanas), serta riset internasional tepercaya (seperti Ulster Institute)."
    },
    {
      q: "Bagaimana Nyarè Fakta mendeteksi sarkasme netizen +62?",
      a: "Engine dilengkapi dengan pendeteksi variabel emosi netizen (seperti kata 'wkwkwk', sindiran ironi, dan hiperbola angka). Sistem tidak langsung memberi label hoaks, namun menjelaskan perbandingan antara klaim sarkastik vs data riil."
    },
    {
      q: "Bisakah saya membedah komentar dari gambar screenshot?",
      a: "Bisa! Anda cukup memilih tab 'Upload Screenshot (OCR)' di Fact-Check Studio, lalu sistem akan mengekstrak teks tulisan secara otomatis untuk langsung diuji."
    }
  ];

  return (
    <div className="w-full font-sans bg-[#0F1117] text-[#F4F2EC]">
      
      {/* 1. DISTINCT HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-14 sm:py-24 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#F04438]/15 text-[#F04438] text-xs font-mono-data font-bold border border-[#F04438]/30 shadow-sm">
              <Activity className="w-3.5 h-3.5" />
              <span>NYARÈ FAKTA • FACT-CHECK & LOGIC ENGINE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.06] tracking-tight text-white font-display">
              Bicara Pakai Data,<br />
              Bedah Komentar <span className="text-[#F04438]">Tanpa Emosi.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-xl">
              Platform verifikasi misinformasi & analisis struktur argumen netizen +62. Menguji klaim data publik langsung ke database resmi BPS, BI, & Kemenkeu RI.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onGoToStudio}
                className="btn-nyare-crimson text-xs sm:text-sm font-black py-4 px-8 group"
              >
                <span>Mulai Bedah Komentar</span>
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenPresets}
                className="btn-nyare-outline text-xs sm:text-sm font-bold py-4 px-7"
              >
                <span>Pelajari 15 Fallacies</span>
              </button>
            </div>

            {/* CYBER-EDITORIAL METRICS COUNTER BAR */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-6 text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#F04438] font-display tracking-tight">15+</div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mt-1 font-mono-data">
                  Fallacies Check
                </div>
              </div>
              
              <div className="border-l border-white/10 pl-4 sm:pl-6">
                <div className="text-2xl sm:text-3xl font-black text-amber-400 font-display tracking-tight">Tier-1</div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mt-1 font-mono-data">
                  BPS & BI Verified
                </div>
              </div>
              
              <div className="border-l border-white/10 pl-4 sm:pl-6">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-display tracking-tight">100%</div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mt-1 font-mono-data">
                  Data Sahih Pembanding
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            <div className="absolute w-80 sm:w-96 h-80 sm:h-96 rounded-3xl bg-gradient-to-br from-[#F04438]/20 to-transparent blur-2xl" />

            <div
              onClick={onGoToStudio}
              className="relative z-10 w-full max-w-sm sm:max-w-md bg-[#161922] border-2 border-white/15 rounded-3xl overflow-hidden shadow-2xl hover:border-[#F04438] transition-all duration-300 cursor-pointer group"
            >
              <img
                src="/assets/hero.jpg"
                alt="Nyarè Fakta 2D Flat Cartoon Illustration"
                className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="bg-[#0B0D12] p-3 text-center text-xs font-mono-data font-bold text-slate-300 border-t border-white/10 flex items-center justify-between px-4">
                <span>VERIFICATION MATRIX ENGINE</span>
                <span className="text-[#F04438] font-bold">STAGE 10</span>
              </div>
            </div>

            <div
              onClick={onGoToStudio}
              className="absolute -top-5 -right-2 bg-[#161922] text-white border border-emerald-500/50 rounded-2xl px-4 py-2 shadow-xl flex items-center gap-2 text-xs font-bold animate-float-slow hover:scale-105 transition-all cursor-pointer z-30"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Tier-1 BPS Verified</span>
            </div>

            <div
              onClick={onOpenPresets}
              className="absolute bottom-4 -left-5 bg-[#161922] text-white border border-amber-500/50 rounded-2xl px-4 py-2 shadow-xl flex items-center gap-2 text-xs font-bold animate-float-delayed hover:scale-105 transition-all cursor-pointer z-30"
            >
              <Brain className="w-4 h-4 text-amber-400 shrink-0" />
              <span>15+ Fallacies Detector</span>
            </div>

          </div>

        </div>
      </section>

      {/* 2. RE-DESIGNED 3-STEP ALUR SYSTEM */}
      <section className="py-16 sm:py-24 bg-[#161922] border-y border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono-data font-bold uppercase tracking-widest text-[#F04438] bg-[#F04438]/10 px-3.5 py-1 rounded-lg border border-[#F04438]/20 inline-block mb-2">
                ALUR KERJA VERIFIKASI
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
                3 Langkah Bedah Kebenaran Data
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-400 max-w-sm">
              Sistem otomatis mengekstrak variabel angka dan mencocokkannya ke rilis instansi resmi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* STEP 1 CARD */}
            <div
              onClick={onGoToStudio}
              className="nyare-glass-card p-8 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-data font-bold text-[#F04438] px-3 py-1 rounded-lg bg-[#F04438]/10 border border-[#F04438]/30">
                    STEP 01
                  </span>
                  <span className="text-xs text-slate-500 font-mono-data">INPUT PARSER</span>
                </div>

                <div className="w-full h-44 rounded-2xl overflow-hidden bg-[#0F1117] border border-white/10">
                  <img
                    src="/assets/step1.jpg"
                    alt="Pahami Komentar"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-[#F04438] transition-colors font-display">
                  Tempel Komentar Netizen
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  Masukkan teks tulisan atau upload gambar screenshot komentar media sosial yang ingin diselidiki.
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-extrabold text-[#F04438] group-hover:text-white">
                <span>Buka Input Studio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* STEP 2 CARD */}
            <div
              onClick={onGoToStudio}
              className="nyare-glass-card p-8 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-data font-bold text-amber-400 px-3 py-1 rounded-lg bg-amber-400/10 border border-amber-400/30">
                    STEP 02
                  </span>
                  <span className="text-xs text-slate-500 font-mono-data">LOGIC DETECTOR</span>
                </div>

                <div className="w-full h-44 rounded-2xl overflow-hidden bg-[#0F1117] border border-white/10">
                  <img
                    src="/assets/step2.jpg"
                    alt="Deteksi Fallacies"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-[#F04438] transition-colors font-display">
                  Deteksi Cacat Logika
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  Mesin memindai 15+ jenis *logical fallacy*, tingkat emosi netizen, serta sarkasme dalam argumen.
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-extrabold text-[#F04438] group-hover:text-white">
                <span>Cek 15 Fallacies</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* STEP 3 CARD */}
            <div
              onClick={onGoToStudio}
              className="nyare-glass-card p-8 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-data font-bold text-emerald-400 px-3 py-1 rounded-lg bg-emerald-400/10 border border-emerald-400/30">
                    STEP 03
                  </span>
                  <span className="text-xs text-slate-500 font-mono-data">CROSS-REF BPS</span>
                </div>

                <div className="w-full h-44 rounded-2xl overflow-hidden bg-[#0F1117] border border-white/10">
                  <img
                    src="/assets/step3.jpg"
                    alt="Lihat Bukti Data"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-[#F04438] transition-colors font-display">
                  Tampilkan Data Sahih
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  Dapatkan tabel perbandingan klaim vs data sahih riil lengkap dengan link sumber rujukan resmi.
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-extrabold text-[#F04438] group-hover:text-white">
                <span>Lihat Bukti Data</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. CASE STUDY VIRAL SECTION */}
      <section className="py-16 sm:py-24 bg-[#0F1117] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono-data font-bold uppercase tracking-wider text-[#F04438]">
                CASE STUDY VIRAL +62
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display mt-1">
                Contoh Pembedahan Komentar
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-normal text-slate-400 max-w-sm">
              Lihat bagaimana Nyarè Fakta menguji klaim viral terhadap rilis database resmi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sampleCases.map((item, idx) => (
              <div 
                key={idx}
                onClick={onGoToStudio}
                className="nyare-glass-card p-7 flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold border-b border-white/10 pb-3">
                    <span className="text-[#F04438] font-mono-data font-bold uppercase tracking-wider">
                      {item.fallacy}
                    </span>
                    <span className="text-slate-400 text-[11px] font-mono-data">
                      {item.tier}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#F04438] transition-colors leading-snug font-display">
                    {item.title}
                  </h3>

                  <div className="pt-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1 font-mono-data">
                      Klaim Netizen:
                    </span>
                    <p className="text-xs text-slate-200 font-normal italic leading-relaxed pl-3 border-l-2 border-[#F04438]">
                      "{item.claim}"
                    </p>
                  </div>

                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1 font-mono-data">
                      Data Resmi Sahih:
                    </span>
                    <p className="text-xs text-slate-300 font-normal leading-relaxed">
                      {item.fact}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-extrabold text-[#F04438] group-hover:text-white">
                  <span>Uji klaim ini di Studio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. KATALOG 6 LOGICAL FALLACIES POPULER */}
      <section className="py-16 sm:py-24 bg-[#161922] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono-data font-bold uppercase tracking-widest text-[#F04438]">
              EDUKASI CACAT LOGIKA
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
              6 Logical Fallacies Medsos
            </h2>
            <p className="text-xs sm:text-sm font-normal text-slate-400">
              Pelajari pola kesalahan berpikir netizen agar tidak terkecoh opini provokatif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fallacyCatalog.map((item, idx) => (
              <div 
                key={idx}
                onClick={onOpenPresets}
                className="nyare-glass-card p-7 flex flex-col justify-between space-y-4 group cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs font-mono-data font-bold text-[#F04438] uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#F04438] transition-colors font-display">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-300 font-normal leading-relaxed">
                    {item.desc}
                  </p>

                  <p className="text-xs italic text-slate-400 font-medium pt-1">
                    "{item.example}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs font-extrabold text-[#F04438] group-hover:text-white flex items-center justify-between">
                  <span>Pelajari Selengkapnya</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. HIERARKI DATABASE VERIFIKASI TIER-1 */}
      <section className="py-16 sm:py-24 bg-[#0F1117] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono-data font-bold uppercase tracking-wider text-emerald-400">
                TRANSPARANSI DATA PRIMER
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display mt-1">
                Ekosistem Database Tier-1
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-normal text-slate-400 max-w-xs">
              Seluruh verifikasi fakta mengacu murni pada dokumen publikasi resmi instansi pemerintah.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#161922] border border-white/10 rounded-2xl p-6 space-y-3 hover:border-emerald-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold font-mono-data">
                BPS
              </div>
              <h4 className="text-lg font-bold text-white font-display">Badan Pusat Statistik</h4>
              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                Rujukan resmi data Inflasi, PDB Ekonomi, Kemiskinan, dan Berita Resmi Statistik (BRS).
              </p>
            </div>

            <div className="bg-[#161922] border border-white/10 rounded-2xl p-6 space-y-3 hover:border-emerald-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold font-mono-data">
                BI
              </div>
              <h4 className="text-lg font-bold text-white font-display">Bank Indonesia</h4>
              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                Rujukan Kurs Nilai Tukar Rupiah, Cadangan Devisa, BI-Rate, dan Stabilitas Moneter.
              </p>
            </div>

            <div className="bg-[#161922] border border-white/10 rounded-2xl p-6 space-y-3 hover:border-emerald-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center font-bold font-mono-data">
                KEU
              </div>
              <h4 className="text-lg font-bold text-white font-display">Kementerian Keuangan</h4>
              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                Rujukan Anggaran APBN KiTa, Rasio Utang Negara, dan Kebijakan Fiskal Publik.
              </p>
            </div>

            <div className="bg-[#161922] border border-white/10 rounded-2xl p-6 space-y-3 hover:border-emerald-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold font-mono-data">
                BPN
              </div>
              <h4 className="text-lg font-bold text-white font-display">Badan Pangan Nasional</h4>
              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                Rujukan Harga Eceran Tertinggi (HET) Beras, Bahan Pangan Pokok, dan Pasokan Nasional.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) */}
      <section className="py-16 sm:py-24 bg-[#161922] text-white border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-mono-data font-bold uppercase tracking-wider text-[#F04438]">
              FAQ & PERTANYAAN
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm font-normal text-slate-400">
              Hal-hal yang sering ditanyakan netizen tentang cara kerja dan independensi Nyarè Fakta.
            </p>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="bg-[#0F1117] border border-white/10 rounded-2xl p-5 sm:p-6 cursor-pointer transition-all hover:border-[#F04438]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-3 font-display">
                      <HelpCircle className="w-5 h-5 text-[#F04438] shrink-0" />
                      <span>{faq.q}</span>
                    </h3>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#F04438]" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </div>

                  {isOpen && (
                    <p className="mt-4 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed pt-3 border-t border-white/10 pl-8">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. BOTTOM BIG CTA BANNER */}
      <section className="py-16 bg-[#0F1117] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#F04438] to-[#9B1C1C] text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-white/20">
            <div className="space-y-3 text-left">
              <span className="text-xs font-mono-data font-bold uppercase tracking-wider bg-black/30 text-white px-3.5 py-1 rounded-lg inline-block">
                STUDIO REAL-TIME
              </span>
              <h3 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-none font-display">
                SIAP BEDAH KOMENTAR NETIZEN?
              </h3>
              <p className="text-xs sm:text-sm font-normal text-white/90 leading-relaxed max-w-xl">
                Cobain langsung fitur Fact-Check Studio untuk membedah komentar emosional atau klaim numerik netizen +62 dalam hitungan detik.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={onGoToStudio}
                className="bg-white text-[#F04438] hover:bg-slate-100 text-xs sm:text-sm font-extrabold py-4 px-8 rounded-xl shadow-lg transition-all hover:scale-105 flex items-center gap-2"
              >
                <span>Buka Studio Fact-Check Sekarang</span>
                <ArrowRight className="w-4.5 h-4.5 text-[#F04438]" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
