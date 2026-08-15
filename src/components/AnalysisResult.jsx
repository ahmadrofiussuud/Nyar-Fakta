import React, { useState } from 'react';
import { 
  Terminal, ExternalLink, Info, Flame, AlertCircle, 
  CheckCircle2, Copy, Check, MessageSquare, 
  AlertTriangle, Database, FileCheck
} from 'lucide-react';
import { getFallacyDefinition } from '../services/garudaEngine';

export default function AnalysisResult({ resultData }) {
  const [showJson, setShowJson] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);
  const [selectedFallacy, setSelectedFallacy] = useState(null);

  if (!resultData) return null;

  const { meta, verifikasi_pipeline, analisis_logika, verifikasi_fakta } = resultData;
  const { skor, sentimen, fallacy_ditemukan, roasting_logika, catatan_sarkasme } = analisis_logika || {};
  const { status_matriks, klaim_teruji, kesimpulan_bahasa_manusia } = verifikasi_fakta || {};
  const { gerbang_1_isolasi } = verifikasi_pipeline || {};

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(resultData, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  const getScoreBadgeColor = (score) => {
    if (score >= 80) return 'bg-emerald-600 text-white';
    if (score >= 50) return 'bg-amber-500 text-white';
    return 'bg-[#E54624] text-white';
  };

  const getStatusBadgeClass = (status) => {
    if (!status) return 'bg-slate-100 text-slate-900 border-slate-300';
    if (status.includes('Solid')) return 'bg-emerald-100 text-emerald-950 border-2 border-emerald-400 font-black';
    if (status.includes('Bodong') || status.includes('Manipulasi')) return 'bg-red-100 text-red-950 border-2 border-red-400 font-black';
    if (status.includes('Kedaluwarsa') || status.includes('Menyesatkan') || status.includes('Konteks')) return 'bg-amber-100 text-amber-950 border-2 border-amber-400 font-black';
    return 'bg-slate-100 text-slate-900 border-2 border-slate-300 font-black';
  };

  return (
    <div className="space-y-6 font-sans">
      
      {/* 1. KESIMPULAN UTAMA & STATUS FACT CHECK */}
      <div className="wiui-card p-6 border-l-8 border-l-[#E54624] bg-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-4 mb-4 gap-3">
          <div>
            <span className="text-xs font-black text-slate-600 uppercase tracking-wider block">
              STATUS KEBENARAN FAKTA:
            </span>
            <div className="mt-1 flex items-center gap-2">
              <span className={`px-4 py-1.5 rounded-full text-xs sm:text-sm ${getStatusBadgeClass(status_matriks)} shadow-2xs`}>
                {status_matriks}
              </span>
            </div>
          </div>

          <div className="text-left sm:text-right bg-slate-50 px-3.5 py-1.5 rounded-xl border border-slate-200">
            <span className="text-xs font-extrabold text-slate-700 block">Hierarki Sumber Data</span>
            <span className="text-xs font-black text-[#E54624]">
              {klaim_teruji?.[0]?.sumber_tier || "Tier-1 Database Resmi"}
            </span>
          </div>
        </div>

        {/* Kesimpulan Utama */}
        <div className="bg-red-50/70 rounded-2xl p-4 sm:p-5 border border-red-200">
          <h4 className="text-xs sm:text-sm font-black text-red-900 uppercase tracking-wide mb-2 flex items-center gap-1.5">
            <MessageSquare className="w-4 h-4 text-[#E54624]" />
            <span>Kesimpulan Verifikasi Fakta:</span>
          </h4>
          <p className="text-sm sm:text-base text-[#181818] font-extrabold leading-relaxed bg-white p-4 rounded-xl border border-red-200">
            {kesimpulan_bahasa_manusia}
          </p>
        </div>
      </div>

      {/* 2. PROMINENT SECTION: PEMBEDAHAN DATA PENDUKUNG SAHIH VS KLAIM */}
      <div className="wiui-card p-6 bg-white border-2 border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-4 mb-5 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-[#E54624] text-white flex items-center justify-center font-bold shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-[#181818]">
                Data Pendukung & Verifikasi Kebenaran Data
              </h3>
              <p className="text-xs text-slate-600 font-semibold mt-0.5">
                Perbandingan langsung antara klaim netizen vs data sahih rilis instansi resmi
              </p>
            </div>
          </div>

          {gerbang_1_isolasi?.entitas_terisolasi?.iq_atau_angka && gerbang_1_isolasi.entitas_terisolasi.iq_atau_angka.length > 0 && (
            <span className="text-xs font-mono font-bold bg-amber-100 text-amber-900 px-3 py-1 rounded-full border border-amber-300 self-start sm:self-auto">
              Variabel Teruji: {gerbang_1_isolasi.entitas_terisolasi.iq_atau_angka.join(', ')}
            </span>
          )}
        </div>

        {klaim_teruji && klaim_teruji.length > 0 ? (
          <div className="space-y-6">
            {klaim_teruji.map((item, idx) => (
              <div key={idx} className="bg-slate-50/80 rounded-2xl p-5 border-2 border-slate-200 space-y-4">
                
                {/* 2-Column Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Left Box: Klaim Netizen */}
                  <div className="bg-white p-4 rounded-xl border border-red-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-red-700 uppercase tracking-wide flex items-center gap-1">
                        <AlertCircle className="w-4 h-4 text-red-600" />
                        <span>Klaim Netizen:</span>
                      </span>
                      <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-red-100 text-red-800">
                        Klaim Diuji
                      </span>
                    </div>
                    <p className="text-sm text-[#181818] font-bold leading-relaxed pt-1">
                      "{item.klaim}"
                    </p>
                  </div>

                  {/* Right Box: Data Sahih Resmi */}
                  <div className="bg-emerald-50/90 p-4 rounded-xl border-2 border-emerald-300 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-emerald-900 uppercase tracking-wide flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Data Resmi Yang Benar:</span>
                      </span>
                      <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-600 text-white">
                        Fakta Sahih
                      </span>
                    </div>
                    <p className="text-sm text-emerald-950 font-extrabold leading-relaxed pt-1">
                      {item.fakta_sebenarnya}
                    </p>
                  </div>

                </div>

                {/* Perbandingan / Selisih Data Box */}
                {item.selisih_atau_konteks_data && (
                  <div className="bg-amber-50 p-3.5 rounded-xl border border-amber-200 text-xs font-bold text-amber-950 flex items-start gap-2">
                    <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-amber-900 font-black mb-0.5">Analisis Selisih & Konteks Data:</strong>
                      <span>{item.selisih_atau_konteks_data}</span>
                    </div>
                  </div>
                )}

                {/* Footer Sumber Primer & Link Bukti */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-800 font-bold pt-3 border-t border-slate-200 gap-3">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#E54624]" />
                    <span>
                      Sumber Data Pendukung: <strong className="text-[#181818]">{item.sumber_referensi}</strong> ({item.sumber_tier || "Tier-1"})
                    </span>
                  </div>

                  {item.link_referensi_primer && (
                    <a
                      href={item.link_referensi_primer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-wiui-orange text-xs font-black py-2 px-4 inline-flex items-center gap-1.5"
                    >
                      <span>Lihat Bukti Link Data Resmi</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs font-semibold text-slate-700 italic bg-slate-50 p-4 rounded-xl border border-slate-200">
            Komentar ini murni keluhan/opini subjektif tanpa menyertakan variabel data numerik terukur.
          </p>
        )}
      </div>

      {/* 3. SKOR LOGIKA & EVALUASI SARKASME */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* SKOR LOGIKA */}
        <div className="wiui-card p-5 text-center flex flex-col items-center justify-center bg-white">
          <span className="text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
            Skor Kualitas Logika
          </span>

          <div className={`w-24 h-24 rounded-full flex items-center justify-center font-black text-3xl shadow-xs my-2 ${getScoreBadgeColor(skor)}`}>
            {skor}
          </div>

          <div className="mt-2 flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700">Sentimen:</span>
            <span className={`text-xs font-black px-3 py-1 rounded-full border ${
              sentimen === 'Sarkas' ? 'bg-amber-100 text-amber-950 border-amber-300' :
              sentimen === 'Agresif' ? 'bg-red-100 text-red-900 border-red-300' :
              'bg-slate-100 text-slate-900 border-slate-300'
            }`}>
              {sentimen}
            </span>
          </div>
        </div>

        {/* ROASTING LOGIKA */}
        <div className="md:col-span-2 wiui-card p-5 flex flex-col justify-between border-l-4 border-l-amber-500 bg-white">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-5 h-5 text-amber-500" />
              <h4 className="text-xs sm:text-sm font-black uppercase text-amber-900 tracking-wider">
                Catatan Analisis Logika
              </h4>
            </div>
            <p className="text-sm text-slate-900 font-bold italic bg-amber-50 p-4 rounded-xl border border-amber-200 leading-relaxed">
              "{roasting_logika}"
            </p>

            {/* Catatan Penjelas Sarkasme */}
            {(sentimen === 'Sarkas' || catatan_sarkasme) && (
              <div className="mt-3 p-3.5 rounded-xl bg-amber-100 border border-amber-300 text-xs font-bold text-amber-950 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-amber-900 font-black mb-0.5">Catatan Penjelas Sarkasme:</strong>
                  <span>{catatan_sarkasme || "Komentar ini mengandung sindiran sarkastik/hiperbola. Pernyataan di dalamnya membalikkan fakta riil sehingga TIDAK DAPAT dikategorikan sebagai argumen logis yang sahih."}</span>
                </div>
              </div>
            )}
          </div>

          {/* Fallacy Badges */}
          <div className="mt-4 pt-3 border-t border-slate-200">
            <span className="text-xs font-black text-slate-700 uppercase tracking-wider block mb-2">
              Logical Fallacy / Struktur Argumen:
            </span>
            {fallacy_ditemukan && fallacy_ditemukan.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {fallacy_ditemukan.map((fallacy, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedFallacy(selectedFallacy === fallacy ? null : fallacy)}
                    className="px-3 py-1.5 rounded-xl bg-amber-100 text-amber-950 border border-amber-300 text-xs font-black hover:bg-amber-200 flex items-center gap-1.5 transition-all"
                  >
                    <span>{fallacy}</span>
                    <Info className="w-3.5 h-3.5 text-amber-800" />
                  </button>
                ))}
              </div>
            ) : (
              <span className="text-xs font-extrabold text-emerald-800 flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Argumen Logis Sahih
              </span>
            )}

            {selectedFallacy && (
              <div className="mt-3 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-slate-900 font-semibold">
                <strong className="text-red-800 font-black">{selectedFallacy}:</strong> {getFallacyDefinition(selectedFallacy)}
              </div>
            )}
          </div>
        </div>

      </div>

      {/* 4. TOGGLE JSON OUTPUT DEVELOPER */}
      <div className="wiui-card p-4 bg-white">
        <button
          onClick={() => setShowJson(!showJson)}
          className="w-full flex items-center justify-between text-xs font-extrabold text-slate-800 hover:text-[#E54624] transition-colors"
        >
          <span className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#E54624]" />
            <span>Lihat Schema Output JSON (Untuk Integrasi Backend/Dev)</span>
          </span>
          {showJson ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showJson && (
          <div className="mt-4 pt-4 border-t border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-slate-600">Strict Schema STAGE 10</span>
              <button onClick={handleCopyJson} className="btn-wiui-dark-outline text-xs font-bold py-1 px-3 text-[#181818] border-slate-300 hover:bg-slate-100">
                {copiedJson ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedJson ? 'Tercopy' : 'Salin JSON'}</span>
              </button>
            </div>
            <pre className="code-block font-mono text-xs max-h-80 overflow-y-auto">
              {JSON.stringify(resultData, null, 2)}
            </pre>
          </div>
        )}
      </div>

    </div>
  );
}
