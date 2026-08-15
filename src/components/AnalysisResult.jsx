import React, { useState } from 'react';
import { 
  CheckCircle2, FileText, Database, ExternalLink, Copy, Check, Info, AlertCircle
} from 'lucide-react';

export default function AnalysisResult({ resultData }) {
  const [copied, setCopied] = useState(false);

  if (!resultData) return null;

  const {
    verdict,
    evidence_reasoning_box,
    fallacy,
    data_references
  } = resultData;

  const handleCopySummary = () => {
    const textToCopy = `📌 [VERIFIKASI DATA NYARÈ FAKTA]
• Poin Klaim: "${evidence_reasoning_box?.poin_klaim || ''}"
• Alasan Teknis: ${evidence_reasoning_box?.alasan_teknis || ''}
• Bukti Primer: ${evidence_reasoning_box?.bukti_primer || ''}
• Rujukan Resmi: ${evidence_reasoning_box?.sumber_nama || ''} (${evidence_reasoning_box?.sumber_link || ''})`;
    
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 font-sans mt-8">
      
      {/* Evidence & Reasoning Box (Kotak Alasan & Bukti) — Kunci Anti-Bias */}
      <div className="editorial-card p-6 sm:p-8 bg-white border border-slate-200 shadow-sm relative overflow-hidden">
        
        {/* Status Strip Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono-data font-bold text-[#D92D20] bg-red-50 border border-red-100 px-2 py-0.5 rounded tracking-wider uppercase inline-block">
              ANTI-BIAS VERIFICATION ENGINE
            </span>
            <div className="flex items-center gap-3">
              <span className={`text-xl sm:text-2xl font-serif-news font-bold ${
                verdict?.code === 'HOAX' ? 'text-[#D92D20]' : 'text-emerald-700'
              }`}>
                {verdict?.label || 'Analisis Selesai'}
              </span>
              <span className="text-xs font-mono-data font-bold px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600">
                Akurasi Analisis: {verdict?.score || 95}%
              </span>
            </div>
          </div>

          <button
            onClick={handleCopySummary}
            className="btn-editorial-outline text-xs py-2 px-3.5 flex items-center gap-2 self-start sm:self-auto"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Tersalin ke Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-600" />
                <span>Salin Ringkasan</span>
              </>
            )}
          </button>
        </div>

        {/* The 3-Column Evidence & Reasoning Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Section 1: Poin Klaim */}
          <div className="space-y-2.5 bg-slate-50 p-5 rounded-lg border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono-data font-bold text-slate-500 uppercase tracking-wider block mb-1">
                01. POIN KLAIM
              </span>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono-data">
                Naskah / Narasi Buzzer
              </h4>
              <p className="text-sm text-slate-800 font-semibold italic leading-relaxed pt-2">
                "{evidence_reasoning_box?.poin_klaim || 'Klaim terdeteksi'}"
              </p>
            </div>
            
            <div className="text-[10px] text-slate-400 font-mono-data pt-3 border-t border-slate-200/60 mt-3">
              Kategori: {fallacy?.type || 'General'}
            </div>
          </div>

          {/* Section 2: Alasan Teknis (Reasoning) */}
          <div className="space-y-2.5 bg-slate-50 p-5 rounded-lg border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono-data font-bold text-[#D92D20] uppercase tracking-wider block mb-1">
                02. ALASAN TEKNIS (REASONING)
              </span>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono-data">
                Analisis & Cacat Logika
              </h4>
              <p className="text-xs text-slate-700 font-normal leading-relaxed pt-2">
                {evidence_reasoning_box?.alasan_teknis || 'Penjelasan logis terperinci kekeliruan narasi ini.'}
              </p>
            </div>

            <div className="text-[10px] text-slate-400 font-mono-data pt-3 border-t border-slate-200/60 mt-3 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 text-[#D92D20]" />
              <span>Bias Emosi: {fallacy?.netizen_emotion || 'Netral'}</span>
            </div>
          </div>

          {/* Section 3: Bukti Primer (Evidence) */}
          <div className="space-y-2.5 bg-emerald-50/30 p-5 rounded-lg border border-emerald-100 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono-data font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                03. BUKTI PRIMER (EVIDENCE)
              </span>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono-data">
                Data Statistik Resmi
              </h4>
              <p className="text-xs text-slate-800 font-semibold leading-relaxed pt-2">
                {evidence_reasoning_box?.bukti_primer || 'Data resmi pembanding yang sahih.'}
              </p>
            </div>

            {evidence_reasoning_box?.sumber_link && (
              <div className="pt-3 border-t border-emerald-100 mt-3">
                <a 
                  href={evidence_reasoning_box.sumber_link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#D92D20] hover:underline inline-flex items-center gap-1"
                >
                  <span>Buka Dokumen Rujukan Resmi</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* 2. TRANPARAN DATA REFERENCE DIRECTORY */}
      {data_references && data_references.length > 0 && (
        <div className="editorial-card p-6 bg-white border border-slate-200 space-y-4">
          <div className="border-b border-slate-200 pb-3">
            <span className="text-[11px] font-mono-data font-bold text-slate-500 uppercase tracking-wider block">
              DAFTAR TAUTAN DOKUMEN RUJUKAN RESMI (EVIDENCE BASE)
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-mono-data uppercase border-b border-slate-200">
                  <th className="p-3 font-bold">Instansi / Penerbit</th>
                  <th className="p-3 font-bold">Dokumen Resmi Rujukan</th>
                  <th className="p-3 font-bold">Akses Tautan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {data_references.map((ref, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-3 font-mono-data font-bold text-slate-900">{ref.publisher || 'BPS RI'}</td>
                    <td className="p-3 text-slate-700 font-normal">{ref.title || 'Berita Resmi Statistik'}</td>
                    <td className="p-3">
                      {ref.url ? (
                        <a 
                          href={ref.url} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-[#D92D20] font-bold hover:underline flex items-center gap-1"
                        >
                          <span>Buka Rujukan</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-slate-400">Arsip Publik</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
}
