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
    <div className="bijak-card p-6 sm:p-8 mb-8 bg-white font-sans">
      
      {/* Tabs Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-4 mb-5 gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('text')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all ${
              activeTab === 'text'
                ? 'bg-[#ED5245] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Type className="w-4 h-4" />
            <span>Ketik / Tempel Teks Komentar</span>
          </button>

          <button
            onClick={() => setActiveTab('image')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all ${
              activeTab === 'image'
                ? 'bg-[#ED5245] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Upload Screenshot (OCR)</span>
          </button>
        </div>

        {isInjectWarning && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-100 border border-red-300 text-red-800 text-xs font-black animate-bounce">
            <ShieldAlert className="w-4 h-4 text-red-600" />
            <span>Prompt Injection Terdeteksi</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        {activeTab === 'text' ? (
          <div className="space-y-2">
            <label className="block text-sm font-black text-[#1E1E1E]">
              Tempel / Ketik tulisan komentar netizen yang ingin kamu bedah:
            </label>
            <div className="relative">
              <textarea
                rows={4}
                value={currentInputText}
                onChange={handleTextChange}
                placeholder="Contoh: indonesia ini iq nya diatas 150 semua ya pintar wkwkwk..."
                className="w-full bg-white text-slate-900 placeholder-slate-400 text-sm font-semibold p-4 rounded-2xl border-2 border-[#E5E5E5] focus:border-[#ED5245] focus:ring-2 focus:ring-red-100 focus:outline-none transition-all resize-y leading-relaxed"
              />
              <div className="absolute bottom-3 right-3 text-xs text-slate-600 font-mono font-bold bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                {currentInputText.length} Karakter
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div
              className="border-2 border-dashed border-red-200 hover:border-[#ED5245] bg-red-50/30 rounded-2xl p-6 text-center transition-all cursor-pointer relative group"
            >
              <input
                type="file"
                accept="image/*"
                onChange={(e) => e.target.files && handleImageChange(e.target.files[0])}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
              />

              {imagePreviewUrl ? (
                <div className="flex flex-col items-center gap-2">
                  <img src={imagePreviewUrl} alt="Preview" className="max-h-44 rounded-xl border border-slate-300 shadow-sm" />
                  <span className="text-xs text-emerald-800 font-extrabold flex items-center gap-1 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Screenshot Siap Di-OCR
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-2 py-2">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-red-200 flex items-center justify-center text-[#ED5245]">
                    <UploadCloud className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-black text-[#1E1E1E]">
                    Klik atau Seret Screenshot Komentar Ke Sini
                  </p>
                  <p className="text-xs font-semibold text-slate-600">
                    Sistem otomatis mengekstrak tulisan teks dari gambar screenshot
                  </p>
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-900 mb-1">
                Hasil Ekstraksi Teks (Bisa Di-edit):
              </label>
              <textarea
                rows={2}
                value={currentInputText}
                onChange={handleTextChange}
                className="w-full bg-white text-slate-900 text-xs font-semibold p-3 rounded-xl border-2 border-slate-200 focus:border-[#ED5245] focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="lowQuality"
                checked={isLowQuality}
                onChange={(e) => setIsLowQuality(e.target.checked)}
                className="w-4 h-4 rounded text-[#ED5245] focus:ring-[#ED5245] cursor-pointer"
              />
              <label htmlFor="lowQuality" className="text-xs font-bold text-slate-700 cursor-pointer flex items-center gap-1">
                <span>Simulasi Gambar Burem / Low-Res (Error Code OCR Check)</span>
              </label>
            </div>
          </div>
        )}

        {/* Submit Button (Clean with Lucide Play Icon, No Rocket Emoji) */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-bold text-slate-600 hidden sm:block">
            Menguji otomatis klaim data terhadap rilis BPS, BI & Ulster Institute.
          </span>

          <button
            type="submit"
            disabled={isLoading || !currentInputText.trim()}
            className={`btn-bijak-coral text-xs sm:text-sm font-black py-3 px-8 justify-center ${
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
                <Play className="w-4 h-4 fill-white" />
                <span>Bedah Komentar Ini</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
