import React, { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, Database, Brain, FileCheck, 
  HelpCircle, ChevronDown, ChevronUp, Search, TrendingUp, ShieldCheck
} from 'lucide-react';

export default function LandingIntro({ onGoToStudio, onOpenPresets }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [heroSearchInput, setHeroSearchInput] = useState('');

  const sampleCases = [
    {
      category: "FISKAL & UTANG NEGARA",
      title: "Pembedahan Klaim Utang Indonesia Tembus 50.000 Triliun",
      claim: "Utang Indonesia tembus 50.000 Triliun dan inflasi 80%, negara siap bangkrut!",
      fact: "Utang resmi pemerintah tercatat Rp 8.440 T (rasio PDB 38,6%) dan inflasi BPS 2,13%.",
      fallacy: "Sarkasme Hiperbola & Data Bodong",
      tier: "Dokumen APBN KiTa Kemenkeu RI",
      image: "/assets/step1.jpg"
    },
    {
      category: "RISET DEMOGRAFI & IQ",
      title: "Verifikasi Klaim Rata-Rata IQ Masyarakat Indonesia > 150",
      claim: "Indonesia ini IQ-nya di atas 150 semua ya pintar-pintar wkwkwk...",
      fact: "Rata-rata IQ nasional Indonesia tercatat ~78,49 (peringkat 130 dunia). IQ > 150 adalah kualifikasi genius top 0,1% dunia.",
      fallacy: "Sarkasme Ironi",
      tier: "Ulster Institute & WPR Study",
      image: "/assets/step2.jpg"
    },
    {
      category: "INDIKATOR PERTUMBUHAN PDB",
      title: "Evaluasi Konteks Klaim Pertumbuhan Ekonomi Minus 4,5%",
      claim: "Ekonomi Indonesia minus 4,5% rakyat makin susah!",
      fact: "Minus 4,5% adalah data historis Pandemi 2020. Data PDB BPS Q2 2024-2026 tumbuh stabil 5,05%.",
      fallacy: "Outdated Context (Fakta Kedaluwarsa)",
      tier: "Berita Resmi Statistik BPS RI",
      image: "/assets/step3.jpg"
    }
  ];

  const fallacyCatalog = [
    {
      name: "Ad Hominem",
      desc: "Menyerang pribadi lawan bicara daripada menguji data.",
      example: "'Anak kemarin sore tau apa soal ekonomi!'",
      tag: "SERANGAN PRIBADI"
    },
    {
      name: "Strawman",
      desc: "Memelintir argumen lawan jadi versi ekstrem yang mudah diserang.",
      example: "'Oh jadi lu setuju rakyat kelaparan?'",
      tag: "MELINTIR FAKTA"
    },
    {
      name: "Sarkasme Hiperbola",
      desc: "Sindiran berlebihan yang membalikkan statistik asli.",
      example: "'IQ netizen sini kan 150 semua pintar banget wkwk'",
      tag: "SINDIRAN NETIZEN"
    },
    {
      name: "Hasty Generalization",
      desc: "Menyimpulkan seluruh negara dari 1 kasus kecil.",
      example: "'Toko sebelah sepi, fix ekonomi hancur total!'",
      tag: "GENERALISASI NGAWUR"
    },
    {
      name: "Cherry Picking",
      desc: "Hanya mengambil 1 angka buruk & menyembunyikan data utuh.",
      example: "'Nge-spam 1 harga naik, lupa inflasi stabil 2%'",
      tag: "POTONG DATA"
    },
    {
      name: "Outdated Context",
      desc: "Pakai data kuno (2020) untuk menghakimi situasi hari ini (2026).",
      example: "'Ekonomi minus 4.5%!' (padahal data pandemi 2020)",
      tag: "DATA KEDALUWARSA"
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

  const handleHeroSearchSubmit = (e) => {
    e.preventDefault();
    onGoToStudio();
  };

  return (
    <div className="w-full font-sans bg-[#FAFAFA] text-slate-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION (CUTOUT FLOATING PERSON - MATCHING WEBEXSPOR REFERENCE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20 bg-white relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HERO CONTENT & INPUT BAR */}
          <div className="lg:col-span-7 space-y-6 text-left z-10">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-[#D92D20] text-xs font-bold border border-red-100">
              <span className="w-2 h-2 rounded-full bg-[#D92D20] animate-ping" />
              <span>PLATFORM LITERASI & BEDAH DATA PUBLIK</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-news font-bold leading-[1.08] tracking-tight text-slate-900">
              Bicara Pakai Data,<br />
              Bedah Komentar <span className="font-italic text-[#D92D20]">Tanpa Emosi.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              Menguji kebenaran klaim dan narasi netizen media sosial secara objektif terhadap database publikasi resmi BPS, Bank Indonesia, dan Kemenkeu RI.
            </p>

            {/* INTEGRATED SEARCH / CLAIM TEST INPUT BAR */}
            <form onSubmit={handleHeroSearchSubmit} className="pt-2 max-w-xl">
              <div className="flex flex-col sm:flex-row items-stretch gap-2 p-1.5 bg-slate-100 border border-slate-300 rounded-xl focus-within:border-[#D92D20] focus-within:bg-white transition-all shadow-2xs">
                <div className="flex-1 flex items-center gap-2 px-3 py-2">
                  <Search className="w-4 h-4 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    value={heroSearchInput}
                    onChange={(e) => setHeroSearchInput(e.target.value)}
                    placeholder="Masukkan klaim komentar netizen..."
                    className="w-full bg-transparent text-xs sm:text-sm font-normal text-slate-900 placeholder-slate-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-editorial-red text-xs sm:text-sm font-bold py-3 px-6 rounded-lg whitespace-nowrap justify-center"
                >
                  <span>Cek Data Fakta</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </form>

            {/* STAT METRICS BAR */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-mono-data">
              <div>
                <strong className="text-slate-900 font-bold text-sm">15+ Jenis</strong> Fallacies
              </div>
              <span className="text-slate-300">│</span>
              <div>
                <strong className="text-[#D92D20] font-bold text-sm">Tier-1</strong> BPS Verified
              </div>
              <span className="text-slate-300">│</span>
              <div>
                <strong className="text-emerald-700 font-bold text-sm">100%</strong> Independen
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: NATURAL FLOATING SUBJECT CUTOUT (NO WHITE CARD BOX!) */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6">
            
            {/* Background Organic Color Circle Blob */}
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#D92D20]/10 scale-105 -z-0" />

            {/* Main Cutout Subject Image (NO CARD BORDER / NO CARD BOX!) */}
            <img
              src="/assets/hero.jpg"
              alt="Nyarè Fakta Data Researcher Cutout"
              className="relative z-10 w-full max-w-sm sm:max-w-md h-auto object-contain drop-shadow-xl transition-transform duration-300 hover:scale-102"
            />

            {/* Floating Information Widget 1 (Top Right) */}
            <div className="absolute top-4 right-0 sm:-right-4 bg-white border border-slate-200 rounded-xl p-3 shadow-lg flex items-center gap-3 z-20 animate-float-slow">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono-data font-bold text-slate-400 block uppercase">STATUS DATA</span>
                <span className="text-xs font-bold text-slate-900">Tier-1 BPS Verified</span>
              </div>
            </div>

            {/* Floating Information Widget 2 (Bottom Left) */}
            <div className="absolute bottom-6 left-0 sm:-left-4 bg-white border border-slate-200 rounded-xl p-3 shadow-lg flex items-center gap-3 z-20 animate-float-delayed">
              <div className="w-8 h-8 rounded-lg bg-red-100 text-[#D92D20] flex items-center justify-center font-bold">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono-data font-bold text-slate-400 block uppercase">ANALISIS LOGIKA</span>
                <span className="text-xs font-bold text-slate-900">15+ Fallacies Check</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. SECTION 1: LAPORAN PEMBEDAHAN KOMENTAR VIRAL */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <span className="text-xs font-mono-data font-bold text-[#D92D20] uppercase tracking-wider block mb-1">
                STUDI KASUS VIRAL
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-news font-bold text-slate-900 tracking-tight">
                Laporan Pembedahan Fakta
              </h2>
            </div>
            <p className="text-xs text-slate-600 max-w-sm font-normal">
              Hasil pengujian objektif terhadap narasi klaim publik yang beredar luas di media sosial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sampleCases.map((item, idx) => (
              <div 
                key={idx}
                onClick={onGoToStudio}
                className="group relative bg-[#FAFAFA] border border-slate-200 rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-[#D92D20] hover:bg-white transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md"
              >
                <div className="space-y-3.5">
                  {/* Asymmetrical styled image frame */}
                  <div className="w-full h-40 overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none border border-slate-200 relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-[#D92D20] text-white text-[9px] font-mono-data font-bold px-2 py-0.5 rounded">
                      {item.category}
                    </div>
                  </div>

                  {/* Slim tags */}
                  <div className="text-[10px] text-slate-500 font-mono-data">
                    Sumber: {item.tier}
                  </div>

                  <h3 className="text-lg font-serif-news font-bold text-slate-900 group-hover:text-[#D92D20] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <div className="space-y-1 bg-white p-3 rounded-lg border border-slate-100 shadow-3xs">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block font-mono-data">
                      Klaim Netizen:
                    </span>
                    <p className="text-xs text-slate-600 italic leading-relaxed pl-2 border-l-2 border-[#D92D20]">
                      "{item.claim}"
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-emerald-700 uppercase tracking-wider block font-mono-data">
                      Hasil Verifikasi Data Resmi:
                    </span>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      {item.fact}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#D92D20]">
                  <span>Pembedahan Kasus</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. SECTION 2: ALUR VERIFIKASI DATA (CLEAN EDITORIAL NUMBERS 01 02 03 - NO PILLS!) */}
      <section className="py-16 bg-[#FAFAFA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          
          <div className="border-b border-slate-200 pb-6">
            <span className="text-xs font-mono-data font-bold text-[#D92D20] uppercase tracking-wider block mb-1">
              METODOLOGI SISTEM
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-news font-bold text-slate-900 tracking-tight">
              3 Tahap Verification Pipeline
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* STEP 01 */}
            <div 
              onClick={onGoToStudio}
              className="editorial-card p-8 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                <div className="text-4xl font-serif-news font-bold text-[#D92D20] border-b border-slate-100 pb-3">
                  01
                </div>

                <h3 className="text-xl font-serif-news font-bold text-slate-900 group-hover:text-[#D92D20] transition-colors">
                  Isolasi Variabel & Klaim
                </h3>

                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  Sistem mengekstrak variabel angka, persentase, tanggal, nominal, dan subjek utama dari klaim tulisan atau screenshot netizen.
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#D92D20]">
                <span>Buka Input Studio</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* STEP 02 */}
            <div 
              onClick={onGoToStudio}
              className="editorial-card p-8 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                <div className="text-4xl font-serif-news font-bold text-amber-600 border-b border-slate-100 pb-3">
                  02
                </div>

                <h3 className="text-xl font-serif-news font-bold text-slate-900 group-hover:text-[#D92D20] transition-colors">
                  Pemindaian Cacat Logika
                </h3>

                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  Engine memindai struktur argumen dari 15+ jenis *logical fallacy*, indikator sarkasme ironi, serta bias emosi.
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#D92D20]">
                <span>Cek 15 Fallacies</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* STEP 03 */}
            <div 
              onClick={onGoToStudio}
              className="editorial-card p-8 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                <div className="text-4xl font-serif-news font-bold text-emerald-700 border-b border-slate-100 pb-3">
                  03
                </div>

                <h3 className="text-xl font-serif-news font-bold text-slate-900 group-hover:text-[#D92D20] transition-colors">
                  Cross-Reference Data Sahih
                </h3>

                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  Penyajian data pembanding sahih dari publikasi resmi BPS, BI, Kemenkeu beserta link rujukan primer dokumen pemerintah.
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#D92D20]">
                <span>Lihat Bukti Data</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. SECTION 3: INDEKS 6 CACAT LOGIKA MEDSOS */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          
          <div className="border-b border-slate-200 pb-6">
            <span className="text-xs font-mono-data font-bold text-[#D92D20] uppercase tracking-wider block mb-1">
              EDUKASI LITERASI DIGITAL
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-news font-bold text-slate-900 tracking-tight">
              Indeks Logical Fallacies Medsos +62
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fallacyCatalog.map((item, idx) => (
              <div 
                key={idx}
                onClick={onOpenPresets}
                className="editorial-card p-6 flex flex-col justify-between space-y-4 cursor-pointer group"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-mono-data font-bold text-slate-500 block border-b border-slate-100 pb-2">
                    {item.tag}
                  </span>

                  <h3 className="text-lg font-serif-news font-bold text-slate-900 group-hover:text-[#D92D20] transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    {item.desc}
                  </p>

                  <p className="text-xs italic text-slate-500 pt-1">
                    "{item.example}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs font-bold text-[#D92D20] flex items-center justify-between">
                  <span>Pelajari Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SECTION 4: TRANSPARANSI HIERARKI DATA TIER-1 */}
      <section className="py-16 bg-[#FAFAFA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          
          <div className="border-b border-slate-200 pb-6">
            <span className="text-xs font-mono-data font-bold text-emerald-700 uppercase tracking-wider block mb-1">
              TRANSPARANSI SUMBER
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-news font-bold text-slate-900 tracking-tight">
              Ekosistem Database Tier-1
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="editorial-card p-6 space-y-3">
              <span className="text-xs font-mono-data font-bold text-emerald-700 block">TIER-1 BPS</span>
              <h4 className="text-base font-serif-news font-bold text-slate-900">Badan Pusat Statistik</h4>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                Rujukan resmi data Inflasi, PDB Ekonomi, Kemiskinan, dan Berita Resmi Statistik (BRS).
              </p>
            </div>

            <div className="editorial-card p-6 space-y-3">
              <span className="text-xs font-mono-data font-bold text-amber-600 block">TIER-1 BI</span>
              <h4 className="text-base font-serif-news font-bold text-slate-900">Bank Indonesia</h4>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                Rujukan Kurs Nilai Tukar Rupiah, Cadangan Devisa, BI-Rate, dan Stabilitas Moneter.
              </p>
            </div>

            <div className="editorial-card p-6 space-y-3">
              <span className="text-xs font-mono-data font-bold text-[#D92D20] block">TIER-1 KEMENKEU</span>
              <h4 className="text-base font-serif-news font-bold text-slate-900">Kementerian Keuangan</h4>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                Rujukan Anggaran APBN KiTa, Rasio Utang Negara, dan Kebijakan Fiskal Publik.
              </p>
            </div>

            <div className="editorial-card p-6 space-y-3">
              <span className="text-xs font-mono-data font-bold text-blue-700 block">TIER-1 BAPANAS</span>
              <h4 className="text-base font-serif-news font-bold text-slate-900">Badan Pangan Nasional</h4>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                Rujukan Harga Eceran Tertinggi (HET) Beras, Bahan Pangan Pokok, dan Pasokan Nasional.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. SECTION 5: FAQ ACCORDION */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-10">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-mono-data font-bold text-[#D92D20] uppercase tracking-wider">
              INFORMASI & METODOLOGI
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-news font-bold text-slate-900 tracking-tight">
              Pertanyaan Sering Ditanyakan
            </h2>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="editorial-card p-5 sm:p-6 cursor-pointer transition-all hover:border-[#D92D20]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base sm:text-lg font-serif-news font-bold text-slate-900 flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-[#D92D20] shrink-0" />
                      <span>{faq.q}</span>
                    </h3>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#D92D20]" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </div>

                  {isOpen && (
                    <p className="mt-4 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed pt-3 border-t border-slate-100 pl-7">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. BOTTOM BANNER */}
      <section className="py-14 bg-[#FAFAFA] text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="editorial-card bg-[#111827] text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border-none shadow-md">
            <div className="space-y-2 text-left">
              <span className="text-xs font-mono-data font-bold uppercase tracking-wider text-[#D92D20]">
                FACT-CHECK STUDIO REAL-TIME
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif-news font-bold text-white tracking-tight">
                Mulai Pengecekan Fakta Komentar Netizen
              </h3>
              <p className="text-xs sm:text-sm font-normal text-slate-300 max-w-xl">
                Uji klaim emosional atau data numerik komentar netizen +62 secara objektif dalam hitungan detik.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={onGoToStudio}
                className="btn-editorial-red text-xs sm:text-sm font-bold py-3.5 px-7"
              >
                <span>Buka Fact-Check Studio</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
