import React from 'react';
import { motion } from 'framer-motion';

export default function Problem() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.06),transparent_60%)]" />
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-semibold tracking-tight text-white"
        >
          When every call sounds real, deception becomes easy.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/70 mt-4 leading-relaxed"
        >
          Voice cloning tools can now mimic anyone within minutes. Banks, insurers, and enterprises face a new era of phone fraud — where AI deepfakes speak with human emotion, confidence, and urgency. Traditional voice biometrics fail because they trust the voice itself. Stampa challenges the voice.
        </motion.p>
      </div>
    </section>
  );
}
