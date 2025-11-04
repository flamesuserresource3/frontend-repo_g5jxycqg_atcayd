import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="pricing" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.06] p-8 md:p-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.25),transparent_50%)]" />

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-semibold">Deploy Stampa in days, not months</h3>
              <p className="text-white/70 mt-3">Simple usage-based pricing with generous free tier. SDKs for web and server. No lock-in — just powerful protection from day one.</p>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                {['10k free verifications', 'Pay-as-you-go', 'Enterprise SLAs', '24/7 support'].map((f) => (
                  <li key={f} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400" />{f}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
              <button className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 text-sm font-medium transition">
                Create account
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white px-6 py-3 text-sm transition">
                Contact sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
