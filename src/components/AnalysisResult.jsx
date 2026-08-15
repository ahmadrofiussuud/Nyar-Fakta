import React, { useState } from 'react';
import { 
  AlertTriangle, CheckCircle2, ShieldCheck, FileText, Database, 
  ExternalLink, Copy, Check, Info, ChevronRight, CornerDownRight
} from 'lucide-react';

export default function AnalysisResult({ resultData }) {
  const [copied, setCopied] = useState(false);

  if (!resultData) return null;

  const {
    verdict,
    fallacy,
    truth_matrix,
    data_references,
    raw_response
  } = resultData;

  const handleCopySummary = () => {
    const textToCopy = `📌 [VERIFIKASI NYARÈ FAKTA]
Klaim: "${truth_matrix?.claim_summary || ''}"
Status: ${verdict?.label || ''}
Cacat Logika: ${fallacy?.type || ''} - ${fallacy?.explanation || ''}
Data Resmi Sahih: ${truth_matrix?.real_data || ''} (Sumber: ${truth_matrix?.official_source || ''})
Link Rujukan: ${truth_matrix?.source_link || ''}`;
    
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 font-sans">
      
      {/* 1. TOP SUMMARY CARD */}
      <div className="editorial-card p-6 sm:p-8 bg-white border border-slate-200">
        
        {/* Status Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1">
            <span className="text-xs font-mono-data font-bold text-slate-500 uppercase tracking-wider block">
              HASIL PENGECEKAN DATA
            </span>
            <div className="flex items-center gap-3">
              <span className={`text-xl sm:text-2xl font-serif-news font-bold ${
                verdict?.code === 'HOAX' ? 'text-[#D92D20]' : 'text-emerald-700'
              }`}>
                {verdict?.label || 'HASIL ANALISIS'}
              </span>
              <span className="text-xs font-mono-data font-bold px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700">
                TINGKAT AKURASI: {verdict?.score || 95}%
              </span>
            </div>
          </div>

          <button
            onClick={handleCopySummary}
            className="btn-editorial-outline text-xs py-2 px-4 flex items-center gap-2 self-start sm:self-auto"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ringkasan Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-600" />
                <span>Salin Ringkasan Data</span>
              </>
            )}
          </button>
        </div>

        {/* Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          
          {/* Left Column: Fallacy Details */}
          <div className="space-y-3 bg-[#FAFAFA] p-5 rounded border border-slate-200">
            <span className="text-xs font-mono-data font-bold text-[#D92D20] uppercase tracking-wider block">
              CACAT LOGIKA (LOGICAL FALLACY)
            </span>

            <h4 className="text-base font-serif-news font-bold text-slate-900">
              {fallacy?.type || 'Tidak Terdeteksi Cacat Logika Mayor'}
            </h4>

            <p className="text-xs text-slate-700 font-normal leading-relaxed">
              {fallacy?.explanation || 'Argumen netizen tidak memperlihatkan penyimpangan logika mayor secara tertulis.'}
            </p>

            {fallacy?.netizen_emotion && (
              <div className="pt-2 border-t border-slate-200 text-xs font-mono-data text-slate-600">
                <span>Variabel Emosi: </span>
                <strong className="text-slate-900 font-bold">{fallacy.netizen_emotion}</strong>
              </div>
            )}
          </div>

          {/* Right Column: Matriks Data Sahih */}
          <div className="space-y-3 bg-[#FAFAFA] p-5 rounded border border-slate-200">
            <span className="text-xs font-mono-data font-bold text-emerald-700 uppercase tracking-wider block">
              PEMBUKTIAN DATA SAHIH
            </span>

            <h4 className="text-base font-serif-news font-bold text-slate-900">
              {truth_matrix?.official_source || 'Badan Pusat Statistik RI'}
            </h4>

            <p className="text-xs text-slate-700 font-semibold leading-relaxed">
              {truth_matrix?.real_data || 'Data resmi rujukan publikasi pemerintah.'}
            </p>

            {truth_matrix?.source_link && (
              <div className="pt-2 border-t border-slate-200">
                <a 
                  href={truth_matrix.source_link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#D92D20] hover:underline flex items-center gap-1"
                >
                  <span>Buka Dokumen Rujukan Resmi</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* 2. DETAILED TIER-1 REFERENCES TABLE */}
      {data_references && data_references.length > 0 && (
        <div className="editorial-card p-6 bg-white border border-slate-200 space-y-4">
          <div className="border-b border-slate-200 pb-3">
            <span className="text-xs font-mono-data font-bold text-slate-500 uppercase tracking-wider block">
              TABEL REFERENSI DOKUMEN PUBLIKASI TIER-1
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-mono-data uppercase border-b border-slate-200">
                  <th className="p-3 font-bold">Instansi Rujukan</th>
                  <th className="p-3 font-bold">Judul Dokumen Publikasi</th>
                  <th className="p-3 font-bold">Ketersediaan Link</th>
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
