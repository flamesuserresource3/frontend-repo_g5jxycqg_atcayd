import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      {/* Background gradient aura */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.25),rgba(2,6,23,0)_60%)]" />

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              Real-time deepfake protection
            </span>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Stop AI impersonations before they start
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-xl">
              Stampa verifies every voice interaction in milliseconds — confirming whether a caller is human or AI — so your team can prevent fraud, protect accounts, and stay compliant.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 text-sm font-medium transition">
                Start free trial
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white px-6 py-3 text-sm transition">
                Talk to sales
              </button>
            </div>
            <div className="flex items-center gap-6 pt-4 text-white/60">
              <div className="text-sm"><span className="text-white font-semibold"><span className="tabular-nums">150ms</span></span> avg. decision</div>
              <div className="h-4 w-px bg-white/15" />
              <div className="text-sm">SOC2 & GDPR ready</div>
              <div className="h-4 w-px bg-white/15" />
              <div className="text-sm">Voice, phone, and WebRTC</div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative h-[420px] md:h-[520px] lg:h-[620px]"
        >
          {/* Spline 3D scene */}
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          {/* Subtle gradient overlay to blend */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* bottom separator */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </section>
  );
}
