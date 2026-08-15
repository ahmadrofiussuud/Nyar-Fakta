import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LandingIntro from './components/LandingIntro';
import InputPanel from './components/InputPanel';
import TriggerAnimations from './components/TriggerAnimations';
import AnalysisResult from './components/AnalysisResult';
import PresetsModal from './components/PresetsModal';
import Footer from './components/Footer';
import { analyzeGarudaAI } from './services/garudaEngine';
import { ArrowLeft, Sparkles } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing' | 'studio'
  const [currentInputText, setCurrentInputText] = useState(
    'indonesia ini iq nya diatas 150 semua ya pintar" wkwkwk'
  );
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isPresetsOpen, setIsPresetsOpen] = useState(false);

  const handleAnalyze = async (payload) => {
    setIsLoading(true);
    try {
      const res = await analyzeGarudaAI(payload);
      setAnalysisResult(res);
    } catch (err) {
      console.error("Error analyzing Nyarè Fakta Engine:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Run initial default analysis
  useEffect(() => {
    handleAnalyze({
      text: currentInputText,
      type: 'text'
    });
  }, []);

  const handleGoToStudio = () => {
    setCurrentPage('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToLanding = () => {
    setCurrentPage('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPreset = (preset) => {
    setCurrentInputText(preset.text);
    handleAnalyze({
      text: preset.text,
      type: preset.type || 'text',
      isLowQualityImage: preset.isLowQualityImage || false
    });
    setCurrentPage('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-900 selection:bg-[#E63946] selection:text-white">
      
      {/* Persistent Top Header Bar */}
      <Header
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onOpenPresets={() => setIsPresetsOpen(true)}
        currentPage={currentPage}
        setCurrentPage={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* PAGE 1: PURE LANDING PAGE VIEW */}
      {currentPage === 'landing' && (
        <main className="flex-1 animate-slide-down">
          <LandingIntro
            onGoToStudio={handleGoToStudio}
            onOpenPresets={() => setIsPresetsOpen(true)}
          />
        </main>
      )}

      {/* PAGE 2: SEPARATE FEATURE STUDIO PAGE VIEW */}
      {currentPage === 'studio' && (
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 sm:py-12 animate-slide-down">
          
          {/* Studio Navigation Breadcrumb Header */}
          <div className="mb-8 p-4 sm:p-6 bg-white rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
            <div className="flex items-center gap-3">
              <button
                onClick={handleGoToLanding}
                className="btn-nyare-outline text-xs sm:text-sm font-extrabold py-2 px-4 flex items-center gap-1.5 shrink-0"
              >
                <ArrowLeft className="w-4 h-4 text-[#E63946]" />
                <span>Kembali ke Beranda</span>
              </button>

              <div className="hidden sm:block text-slate-300">|</div>

              <div>
                <span className="text-[10px] font-bold text-[#E63946] uppercase tracking-widest block">
                  NYARÈ FAKTA STUDIO • PEMBEDAH REAL-TIME
                </span>
                <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight font-display">
                  Uji Klaim Komentar Netizen +62
                </h1>
              </div>
            </div>

            <button
              onClick={() => setIsPresetsOpen(true)}
              className="btn-nyare-outline text-xs font-bold py-2 px-4 flex items-center gap-1.5 shrink-0"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Pilih Contoh Komentar Viral</span>
            </button>
          </div>

          {/* Multimodal Input Panel */}
          <InputPanel
            onAnalyze={handleAnalyze}
            isLoading={isLoading}
            currentInputText={currentInputText}
            setCurrentInputText={setCurrentInputText}
          />

          {/* Trigger Animations */}
          {analysisResult && (
            <TriggerAnimations
              uiTrigger={analysisResult.ui_trigger}
              soundEnabled={soundEnabled}
            />
          )}

          {/* Full Fact-Check Analysis Result */}
          {analysisResult && <AnalysisResult resultData={analysisResult} />}

        </main>
      )}

      {/* Presets Modal */}
      <PresetsModal
        isOpen={isPresetsOpen}
        onClose={() => setIsPresetsOpen(false)}
        onSelectPreset={handleSelectPreset}
      />

      {/* Clean Light Footer */}
      <Footer
        onGoToLanding={handleGoToLanding}
        onGoToStudio={handleGoToStudio}
        onOpenPresets={() => setIsPresetsOpen(true)}
      />
    </div>
  );
}
