import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { AlertOctagon, CheckCircle2, Siren, AlertTriangle } from 'lucide-react';

export default function TriggerAnimations({ uiTrigger, soundEnabled }) {
  const { color_theme } = uiTrigger || {};

  const playWhistleSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(2800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(3200, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch (e) {}
  };

  const playSuccessChime = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.12, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.25);
      });
    } catch (e) {}
  };

  useEffect(() => {
    if (color_theme === 'green') {
      playSuccessChime();
      confetti({
        particleCount: 75,
        spread: 85,
        origin: { y: 0.55 },
        colors: ['#E71D36', '#FFFFFF', '#FFB703', '#10B981']
      });
    } else if (color_theme === 'red') {
      playWhistleSound();
    }
  }, [color_theme, soundEnabled]);

  if (!color_theme || color_theme === 'gray') return null;

  return (
    <div className="mb-6">
      {color_theme === 'red' && (
        <div className="rounded-2xl bg-red-600 text-white p-5 shadow-lg shadow-red-600/20 border border-red-700 animate-siren-glow">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-20 bg-white rounded-lg shadow-md border-2 border-red-200 flex flex-col justify-between p-2 transform rotate-6 animate-red-card shrink-0">
                <span className="text-[9px] font-black text-red-600">GARUDA</span>
                <Siren className="w-7 h-7 text-red-600 mx-auto" />
                <span className="text-[9px] font-black text-red-600 text-right">HOAX</span>
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/20 text-white font-black text-[11px] uppercase tracking-wider mb-1">
                  <AlertOctagon className="w-3.5 h-3.5" />
                  <span>KARTU MERAH HOAKS</span>
                </div>
                <h3 className="text-lg font-black text-white">
                  Pelanggaran Logika & Data Ekstrem!
                </h3>
                <p className="text-xs text-red-100 mt-0.5">
                  Argumen ini kedapatan memakai data bodong fiktif atau prompt injection attack.
                </p>
              </div>
            </div>

            <span className="text-xs font-mono font-bold bg-white text-red-700 px-3 py-1.5 rounded-xl shadow-sm">
              STATUS: DATA BODONG
            </span>
          </div>
        </div>
      )}

      {color_theme === 'green' && (
        <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold shadow-md shadow-emerald-500/20">
              <CheckCircle2 className="w-6 h-6 animate-bounce" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-emerald-900">
                FAKTA SOLID TERUJI (DATA BPS & BI)
              </h3>
              <p className="text-xs text-emerald-700">
                Klaim ini terbukti presisi 100% dengan data primer pemerintah RI.
              </p>
            </div>
          </div>
          <span className="text-xs font-bold bg-emerald-600 text-white px-3 py-1 rounded-lg">
            Akurat
          </span>
        </div>
      )}

      {color_theme === 'yellow' && (
        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-amber-900">
              PERINGATAN: DATA KEDALUWARSA / MENYESATKAN / BUTUH KONTEKS
            </h3>
            <p className="text-xs text-amber-800">
              Komentar ini menggunakan trik framing cherry-picking atau mengutip data lama yang tidak relevan.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
