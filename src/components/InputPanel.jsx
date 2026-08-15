import React, { useState } from 'react';
import { Type, Image as ImageIcon, ShieldAlert, UploadCloud, Play, CheckCircle2 } from 'lucide-react';

export default function InputPanel({ onAnalyze, isLoading, currentInputText, setCurrentInputText }) {
  const [activeTab, setActiveTab] = useState('text');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const [isLowQuality, setIsLowQuality] = useState(false);
  const [isInjectWarning, setIsInjectWarning] = useState(false);

  const handleTextChange = (e) => {
    const val = e.target.value;
    setCurrentInputText(val);
    if (/abaikan instruksi|ignore previous|system prompt|jokowi adalah alien/i.test(val)) {
      setIsInjectWarning(true);
    } else {
      setIsInjectWarning(false);
    }
  };

  const handleImageChange = (file) => {
    if (!file) return;
    setSelectedImage(file);
    setImagePreviewUrl(URL.createObjectURL(file));

    if (!currentInputText) {
      setCurrentInputText("Screenshot Tweet: Utang Indonesia tembus 50.000 Triliun dan inflasi 80% tahun ini, pemerintah emang mau bangkrutin negara!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentInputText.trim()) return;

    onAnalyze({
      text: currentInputText,
      type: activeTab,
      isLowQualityImage: activeTab === 'image' ? isLowQuality : false
    });
  };

  return (
    <div className="editorial-card p-6 sm:p-8 mb-8 bg-white font-sans">
      
      {/* Tabs Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-4 mb-5 gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('text')}
            className={`flex items-center gap-2 px-4 py-2 rounded text-xs font-bold transition-all ${
              activeTab === 'text'
                ? 'bg-[#D92D20] text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Type className="w-3.5 h-3.5" />
            <span>Ketik / Tempel Teks Komentar</span>
          </button>

          <button
            onClick={() => setActiveTab('image')}
            className={`flex items-center gap-2 px-4 py-2 rounded text-xs font-bold transition-all ${
              activeTab === 'image'
                ? 'bg-[#D92D20] text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Upload Screenshot (OCR)</span>
          </button>
        </div>

        {isInjectWarning && (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-red-100 border border-red-300 text-red-800 text-xs font-bold animate-bounce">
            <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
            <span>Prompt Injection Terdeteksi</span>
          </div>
        )}
      </div>

      {/* Tagline Quote box */}
      <div className="bg-slate-50 border-l-4 border-[#D92D20] p-4 rounded-r-lg mb-6">
        <p className="text-sm font-serif-news italic text-slate-800 leading-relaxed font-semibold">
          “Merasa pintar karena 10.000 orang setuju di kolom komentar? Cek dulu datanya, jangan-jangan cuma korban echo chamber.”
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {activeTab === 'text' ? (
          <div className="space-y-2">
            <label className="block text-xs font-mono-data font-bold text-slate-700 uppercase">
              Tempel atau ketik narasi komentar netizen yang ingin kamu ulik:
            </label>
            <div className="relative">
              <textarea
                rows={4}
                value={currentInputText}
                onChange={handleTextChange}
                placeholder="Contoh: indonesia ini iq nya diatas 150 semua ya pintar wkwkwk..."
                className="w-full bg-white text-slate-900 placeholder-slate-400 text-sm font-normal p-4 rounded-lg border border-slate-300 focus:border-[#D92D20] focus:ring-1 focus:ring-red-100 focus:outline-none transition-all resize-y leading-relaxed"
              />
              <div className="absolute bottom-3 right-3 text-xs text-slate-500 font-mono-data bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                {currentInputText.length} Karakter
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div
              className="border-2 border-dashed border-red-200 hover:border-[#D92D20] bg-red-50/20 rounded-lg p-6 text-center transition-all cursor-pointer relative group"
            >
              <input
                type="file"
                accept="image/*"
                onChange={(e) => e.target.files && handleImageChange(e.target.files[0])}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
              />

              {imagePreviewUrl ? (
                <div className="flex flex-col items-center gap-2">
                  <img src={imagePreviewUrl} alt="Preview" className="max-h-44 rounded border border-slate-300 shadow-xs" />
                  <span className="text-xs text-emerald-800 font-bold flex items-center gap-1 bg-emerald-100 px-3 py-1 rounded border border-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Screenshot Siap Di-OCR
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-2 py-2">
                  <div className="w-10 h-10 rounded bg-white shadow-xs border border-red-200 flex items-center justify-center text-[#D92D20]">
                    <UploadCloud className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-slate-900">
                    Klik atau Seret Screenshot Komentar Ke Sini
                  </p>
                  <p className="text-xs font-normal text-slate-500">
                    Sistem otomatis mengekstrak tulisan teks dari gambar screenshot
                  </p>
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-mono-data font-bold text-slate-700 uppercase mb-1">
                Hasil Ekstraksi Teks (Bisa Di-edit):
              </label>
              <textarea
                rows={2}
                value={currentInputText}
                onChange={handleTextChange}
                className="w-full bg-white text-slate-900 text-xs font-normal p-3 rounded border border-slate-300 focus:border-[#D92D20] focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="lowQuality"
                checked={isLowQuality}
                onChange={(e) => setIsLowQuality(e.target.checked)}
                className="w-4 h-4 rounded text-[#D92D20] focus:ring-[#D92D20] cursor-pointer"
              />
              <label htmlFor="lowQuality" className="text-xs font-semibold text-slate-700 cursor-pointer flex items-center gap-1">
                <span>Simulasi Gambar Burem / Low-Res (Error Code OCR Check)</span>
              </label>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-normal text-slate-500 hidden sm:block">
            Menguji otomatis klaim data terhadap rilis BPS, BI & Ulster Institute.
          </span>

          <button
            type="submit"
            disabled={isLoading || !currentInputText.trim()}
            className={`btn-editorial-red text-xs font-bold py-2.5 px-6 justify-center ${
              isLoading || !currentInputText.trim() ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sedang Membedah Data...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Bedah Komentar Ini</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
