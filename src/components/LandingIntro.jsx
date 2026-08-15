import React, { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, Database, Brain, FileCheck, 
  HelpCircle, ChevronDown, ChevronUp, AlertCircle, ShieldCheck, 
  Sparkles, ExternalLink, Scale, Check
} from 'lucide-react';

export default function LandingIntro({ onGoToStudio, onOpenPresets }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [activeFallacyTab, setActiveFallacyTab] = useState(0);

  const sampleCases = [
    {
      title: "Klaim Utang 50.000 Triliun",
      claim: "Utang Indonesia tembus 50.000 Triliun dan inflasi 80%, negara siap bangkrut!",
      fact: "Utang resmi pemerintah adalah Rp 8.440 T (rasio PDB 38,6%) dan inflasi BPS 2,13%.",
      fallacy: "Sarkasme Hiperbola & Data Bodong",
      tier: "Tier-1 Kemenkeu & BPS"
    },
    {
      title: "Klaim Rata-Rata IQ > 150",
      claim: "Indonesia ini IQ-nya di atas 150 semua ya pintar-pintar wkwkwk...",
      fact: "Rata-rata IQ nasional Indonesia tercatat ~78,49 (peringkat 130 dunia). IQ > 150 adalah top 0,1% dunia.",
      fallacy: "Sarkasme Ironi & Hiperbola",
      tier: "Ulster Institute & WPR Study"
    },
    {
      title: "Klaim Pertumbuhan Ekonomi Minus",
      claim: "Ekonomi Indonesia minus 4,5% rakyat makin susah!",
      fact: "Minus 4,5% adalah data masa Pandemi 2020. Data PDB BPS Q2 2024-2026 tumbuh stabil 5,05%.",
      fallacy: "Outdated Context (Fakta Kedaluwarsa)",
      tier: "Tier-1 Berita Resmi BPS"
    }
  ];

  const fallacyCatalog = [
    {
      name: "Ad Hominem",
      desc: "Menyerang pribadi atau fisik lawan bicara bukannya membahas isi argumen data.",
      example: "'Alah lu anak kemarin sore tau apa soal ekonomi!'",
      badge: "Cacat Logika Paling Sering"
    },
    {
      name: "Strawman (Melintir Argumen)",
      desc: "Memelintir argumen lawan menjadi versi ekstrem yang mudah diserang.",
      example: "'Oh jadi lu setuju rakyat kelaparan?'",
      badge: "Manipulasi Opini"
    },
    {
      name: "Sarkasme Hiperbola",
      desc: "Menggunakan sindiran ekstrem yang membalikkan fakta statistik riil.",
      example: "'IQ netizen sini kan 150 semua pintar banget wkwk'",
      badge: "Sindiran Netizen"
    },
    {
      name: "Hasty Generalization",
      desc: "Menarik kesimpulan umum untuk seluruh negara dari 1 kasus kecil.",
      example: "'Toko sebelah sepi, fix ekonomi Indonesia hancur total!'",
      badge: "Generalisasi Ngawur"
    },
    {
      name: "Cherry Picking",
      desc: "Hanya mengambil 1 potongan data buruk dan menyembunyikan data utuh.",
      example: "'Cuma ngeliat 1 harga bahan naik, lupa inflasi total stabil 2%'",
      badge: "Potong Data"
    },
    {
      name: "Outdated Context",
      desc: "Menggunakan data kuno (misal 2020) untuk menghakimi situasi hari ini (2026).",
      example: "'Ekonomi kan minus 4.5%!' (padahal itu data pandemi 2020)",
      badge: "Fakta Kedaluwarsa"
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
    <div className="w-full font-sans bg-[#181818] text-white">
      
      {/* 1. EXACT WIUI HERO SECTION (DARK MATTE CANVAS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: WIUI HEADLINE, SUBTEXT & BUTTONS */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* WIUI Badge Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E54624] text-white text-xs font-black uppercase tracking-wider shadow-sm">
              <span>SUP, NETIZEN +62!</span>
            </div>

            {/* WIUI Typography: Sans Bold + Serif Italic Highlight */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-white">
              Indonesian netizen claims, fact-checked in <br className="hidden sm:inline" />
              <span className="font-serif-italic font-normal text-[#E54624]">fakta & data sahih.</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-300 font-semibold leading-relaxed max-w-xl">
              Bingung bedain mana klaim emosi vs fakta riil? Kamu datang ke tempat yang tepat. Membongkar 15+ *logical fallacy* netizen dan menguji data terhadap rilis resmi BPS & BI.
            </p>

            {/* WIUI Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onGoToStudio}
                className="btn-wiui-white text-xs sm:text-sm font-black py-3.5 px-8 group border-[#E54624]"
              >
                <span className="text-[#181818]">Mulai bedah fakta</span>
                <ArrowRight className="w-4 h-4 text-[#E54624] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenPresets}
                className="btn-wiui-dark-outline text-xs sm:text-sm font-black py-3.5 px-7"
              >
                <span>Apa itu Nyarè Fakta?</span>
              </button>
            </div>

            {/* HUMAN EDITORIAL STAT METRICS BAR */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-4 sm:gap-6 text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#E54624] tracking-tight">15+</div>
                <div className="text-[11px] sm:text-xs font-extrabold text-slate-300 uppercase tracking-wider mt-0.5">
                  Fallacies Detector
                </div>
              </div>
              
              <div className="border-l border-white/15 pl-4 sm:pl-6">
                <div className="text-2xl sm:text-3xl font-black text-amber-400 tracking-tight">Tier-1</div>
                <div className="text-[11px] sm:text-xs font-extrabold text-slate-300 uppercase tracking-wider mt-0.5">
                  BPS & BI Verified
                </div>
              </div>
              
              <div className="border-l border-white/15 pl-4 sm:pl-6">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-tight">100%</div>
                <div className="text-[11px] sm:text-xs font-extrabold text-slate-300 uppercase tracking-wider mt-0.5">
                  Data Sahih Pembanding
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: STACKED WIUI TILTED CARDS WITH HERO IMAGE & BADGES */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Background Orange Block Card (Tilted) */}
            <div className="absolute w-72 sm:w-80 h-72 sm:h-80 bg-[#E54624] rounded-3xl rotate-6 shadow-2xl transition-transform duration-300 hover:rotate-3 flex flex-col justify-end p-6">
              <span className="text-white font-black text-2xl uppercase tracking-tighter leading-tight">
                WHAT IS UP,<br />INDONESIA?
              </span>
            </div>

            {/* Main Visual Image Card (Slightly Counter-Tilted) */}
            <div
              onClick={onGoToStudio}
              className="relative z-10 w-72 sm:w-80 bg-white border-4 border-[#181818] rounded-3xl overflow-hidden shadow-2xl -rotate-3 hover:rotate-0 transition-all duration-300 cursor-pointer group"
            >
              <img
                src="/assets/hero.jpg"
                alt="Nyarè Fakta Fact Checking"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="bg-[#181818] p-3 text-center text-xs font-mono font-bold text-slate-300">
                I see you've found Nyarè Fakta, welcome!
              </div>
            </div>

            {/* FLOATING BADGES */}
            <div
              onClick={onGoToStudio}
              className="absolute -top-6 -right-2 bg-[#181818] text-white border-2 border-emerald-400 rounded-full px-4 py-2 shadow-xl flex items-center gap-2 text-xs font-black animate-float-slow hover:scale-110 transition-all cursor-pointer z-30"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Tier-1 BPS Verified</span>
            </div>

            <div
              onClick={onOpenPresets}
              className="absolute bottom-4 -left-6 bg-[#181818] text-white border-2 border-amber-400 rounded-full px-4 py-2 shadow-xl flex items-center gap-2 text-xs font-black animate-float-delayed hover:scale-110 transition-all cursor-pointer z-30"
            >
              <Brain className="w-4 h-4 text-amber-400 shrink-0" />
              <span>15+ Fallacies Check</span>
            </div>

          </div>

        </div>
      </section>

      {/* 2. WIUI MID STRIP BAR */}
      <div className="bg-[#E54624] text-white py-3 border-y border-[#CE3818] overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap text-xs sm:text-sm font-black tracking-widest uppercase flex items-center gap-8">
          <span>★ NOT A HOAX SITE</span>
          <span>★ PRONE TO FACTS & DATA</span>
          <span>★ DO YOUR OWN RESEARCH</span>
          <span>★ TIER-1 BPS & BI VERIFIED</span>
          <span>★ NOT A HOAX SITE</span>
          <span>★ PRONE TO FACTS & DATA</span>
          <span>★ DO YOUR OWN RESEARCH</span>
          <span>★ TIER-1 BPS & BI VERIFIED</span>
        </div>
      </div>

      {/* NEW SECTION A: SIMULASI KASUS VIRAL MEDSOS (HALL OF FAME HOAX VS FAKTA) */}
      <section className="py-16 sm:py-24 bg-[#181818] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#E54624] bg-[#E54624]/10 px-3.5 py-1 rounded-full border border-[#E54624]/30 inline-block mb-2">
                CASE STUDY VIRAL +62
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                Contoh Pembedahan Komentar Viral
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-300 max-w-sm">
              Lihat bagaimana Nyarè Fakta mengisolasi klaim emosi dan mencocokkannya dengan database resmi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleCases.map((item, idx) => (
              <div 
                key={idx}
                onClick={onGoToStudio}
                className="bg-[#222222] border-2 border-white/10 hover:border-[#E54624] rounded-3xl p-6 flex flex-col justify-between space-y-4 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/40">
                      {item.fallacy}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {item.tier}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-white group-hover:text-[#E54624] transition-colors">
                    {item.title}
                  </h3>

                  <div className="bg-[#181818] p-3.5 rounded-xl border border-white/10 text-xs font-semibold text-red-200">
                    <strong className="text-red-400 block font-bold mb-1">Klaim Netizen:</strong>
                    "{item.claim}"
                  </div>

                  <div className="bg-emerald-950/40 p-3.5 rounded-xl border border-emerald-500/30 text-xs font-semibold text-emerald-100">
                    <strong className="text-emerald-400 block font-bold mb-1">Data Resmi Sahih:</strong>
                    {item.fact}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-black text-[#E54624] group-hover:text-white">
                  <span>Coba Kasus Ini Di Studio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. LIGHT SECTION BELOW ("What we got for u ↓") */}
      <section className="bg-[#F9F8F6] text-[#181818] py-16 sm:py-24 border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold text-[#E54624] uppercase tracking-wider block mb-1">
                PICK YOUR FIGHTER
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#181818]">
                What we got for u <span className="text-[#E54624]">↓</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-500 max-w-xs">
              3 langkah praktis membedah argumen netizen dengan data primer sahih.
            </p>
          </div>

          {/* 3 CARDS GRID (WIUI CARDS) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* CARD 1 */}
            <div
              onClick={onGoToStudio}
              className="wiui-card p-8 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-red-100 text-[#E54624] font-black text-base flex items-center justify-center mb-6 group-hover:bg-[#E54624] group-hover:text-white transition-all duration-300">
                  1
                </div>

                <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  <img
                    src="/assets/step1.jpg"
                    alt="Pahami Isu & Komentar"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-2xl font-black text-[#181818] mb-2 group-hover:text-[#E54624] transition-colors">
                  Pahami isu & komentar
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed mb-6">
                  Tempel tulisan atau screenshot komentar netizen terkait masalah publik yang ingin kamu selidiki.
                </p>
              </div>

              <button className="text-xs font-black text-[#E54624] group-hover:text-[#CE3818] inline-flex items-center gap-2">
                <span>Mulai Bedah Fitur →</span>
              </button>
            </div>

            {/* CARD 2 */}
            <div
              onClick={onGoToStudio}
              className="wiui-card p-8 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-red-100 text-[#E54624] font-black text-base flex items-center justify-center mb-6 group-hover:bg-[#E54624] group-hover:text-white transition-all duration-300">
                  2
                </div>

                <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  <img
                    src="/assets/step2.jpg"
                    alt="Kenali Data & Fallacy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-2xl font-black text-[#181818] mb-2 group-hover:text-[#E54624] transition-colors">
                  Kenali data & fallacies
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed mb-6">
                  Lacak cacat logika dari 15+ jenis fallacy dan ukur kesesuaian angka terhadap rilis BPS & BI.
                </p>
              </div>

              <button className="text-xs font-black text-[#E54624] group-hover:text-[#CE3818] inline-flex items-center gap-2">
                <span>Mulai Bedah Fitur →</span>
              </button>
            </div>

            {/* CARD 3 */}
            <div
              onClick={onGoToStudio}
              className="wiui-card p-8 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-red-100 text-[#E54624] font-black text-base flex items-center justify-center mb-6 group-hover:bg-[#E54624] group-hover:text-white transition-all duration-300">
                  3
                </div>

                <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  <img
                    src="/assets/step3.jpg"
                    alt="Bukti Data Sahih"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-2xl font-black text-[#181818] mb-2 group-hover:text-[#E54624] transition-colors">
                  Lihat bukti data sahih
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed mb-6">
                  Dapatkan perbandingan klaim vs fakta asli beserta link rujukan instansi pemerintah primer.
                </p>
              </div>

              <button className="text-xs font-black text-[#E54624] group-hover:text-[#CE3818] inline-flex items-center gap-2">
                <span>Mulai Bedah Fitur →</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* NEW SECTION B: KATALOG 6 LOGICAL FALLACIES POPULER MEDSOS */}
      <section className="py-16 sm:py-24 bg-[#181818] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#E54624] bg-[#E54624]/10 px-4 py-1.5 rounded-full border border-[#E54624]/30 inline-block">
              EDUKASI CACAT LOGIKA
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              6 Logical Fallacies Paling Sering Muncul di MedSOS +62
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-slate-300">
              Pelajari pola kesalahan berpikir netizen agar kamu tidak gampang terkecoh opini provokatif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fallacyCatalog.map((item, idx) => (
              <div 
                key={idx}
                onClick={onOpenPresets}
                className="bg-[#222222] border-2 border-white/10 hover:border-[#E54624] rounded-3xl p-6 flex flex-col justify-between space-y-4 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-black uppercase px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 inline-block">
                    {item.badge}
                  </span>

                  <h3 className="text-xl font-black text-white group-hover:text-[#E54624] transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-300 font-semibold leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="bg-[#181818] p-3 rounded-xl border border-white/10 text-xs italic font-bold text-slate-300">
                    Contoh: {item.example}
                  </div>
                </div>

                <div className="pt-2 text-xs font-black text-[#E54624] group-hover:text-white flex items-center justify-between">
                  <span>Pelajari Selengkapnya</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* NEW SECTION C: HIERARKI DATABASE VERIFIKASI TIER-1 */}
      <section className="py-16 sm:py-24 bg-[#222222] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/30 inline-block mb-2">
                TRANSPARANSI DATA PRIMER
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                Ekosistem Database Tier-1
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-300 max-w-xs">
              Seluruh verifikasi fakta mengacu murni pada dokumen publikasi resmi instansi pemerintah.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#181818] border border-white/10 rounded-2xl p-6 space-y-3 hover:border-emerald-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                BPS
              </div>
              <h4 className="text-lg font-black text-white">Badan Pusat Statistik</h4>
              <p className="text-xs text-slate-300 font-semibold leading-relaxed">
                Rujukan resmi data Inflasi, PDB Ekonomi, Kemiskinan, dan Berita Resmi Statistik (BRS).
              </p>
            </div>

            <div className="bg-[#181818] border border-white/10 rounded-2xl p-6 space-y-3 hover:border-emerald-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                BI
              </div>
              <h4 className="text-lg font-black text-white">Bank Indonesia</h4>
              <p className="text-xs text-slate-300 font-semibold leading-relaxed">
                Rujukan Kurs Nilai Tukar Rupiah, Cadangan Devisa, BI-Rate, dan Stabilitas Moneter.
              </p>
            </div>

            <div className="bg-[#181818] border border-white/10 rounded-2xl p-6 space-y-3 hover:border-emerald-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center font-bold">
                KEU
              </div>
              <h4 className="text-lg font-black text-white">Kementerian Keuangan</h4>
              <p className="text-xs text-slate-300 font-semibold leading-relaxed">
                Rujukan Anggaran APBN KiTa, Rasio Utang Negara, dan Kebijakan Fiskal Publik.
              </p>
            </div>

            <div className="bg-[#181818] border border-white/10 rounded-2xl p-6 space-y-3 hover:border-emerald-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                BPN
              </div>
              <h4 className="text-lg font-black text-white">Badan Pangan Nasional</h4>
              <p className="text-xs text-slate-300 font-semibold leading-relaxed">
                Rujukan Harga Eceran Tertinggi (HET) Beras, Bahan Pangan Pokok, dan Pasokan Nasional.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* NEW SECTION D: FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) */}
      <section className="py-16 sm:py-24 bg-[#181818] text-white border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#E54624] bg-[#E54624]/10 px-4 py-1.5 rounded-full border border-[#E54624]/30 inline-block">
              FAQ & PERTANYAAN
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-slate-300">
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
                  className="bg-[#222222] border border-white/10 rounded-2xl p-5 sm:p-6 cursor-pointer transition-all hover:border-[#E54624]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#E54624] shrink-0" />
                      <span>{faq.q}</span>
                    </h3>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#E54624]" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </div>

                  {isOpen && (
                    <p className="mt-4 text-xs sm:text-sm text-slate-300 font-semibold leading-relaxed pt-3 border-t border-white/10 pl-8">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. BOTTOM BIG CTA BANNER */}
      <section className="py-16 bg-[#F9F8F6] text-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="rounded-3xl bg-[#E54624] text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3 text-left">
              <span className="text-xs font-black uppercase tracking-wider bg-black/20 text-white px-3.5 py-1 rounded-full inline-block">
                STUDIO REAL-TIME
              </span>
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
                SIAP BEDAH KOMENTAR NETIZEN?
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-white/90 leading-relaxed max-w-xl">
                Cobain langsung fitur Fact-Check Studio untuk membedah komentar emosional atau klaim numerik netizen +62 dalam hitungan detik.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={onGoToStudio}
                className="btn-wiui-white text-xs sm:text-sm font-black py-4 px-8 text-[#181818] shadow-lg hover:scale-105"
              >
                <span>Buka Studio Fact-Check Sekarang</span>
                <ArrowRight className="w-4.5 h-4.5 text-[#E54624]" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
