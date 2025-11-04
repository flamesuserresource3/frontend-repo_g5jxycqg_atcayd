import React from 'react';
import { Mic, Shield, Lock, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: Shield,
    title: 'AI vs Human verification',
    desc: 'Proprietary signal analysis detects synthetic voices and LLM-driven agents in real time.'
  },
  {
    icon: Mic,
    title: 'Drop-in voice guard',
    desc: 'Protect IVR, contact centers, and agent calls via SIP, PSTN, or WebRTC with a single API.'
  },
  {
    icon: Lock,
    title: 'Policy enforcement',
    desc: 'Automatically step up authentication or block high-risk calls before data is exposed.'
  },
  {
    icon: Clock,
    title: 'Sub-200ms decisioning',
    desc: 'Streamed scoring returns a decision in under 200ms to keep conversations natural.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),rgba(2,6,23,0)_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white">Purpose-built to stop AI fraud</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Everything you need to verify callers at the edge, keep accounts safe, and meet compliance requirements without adding friction.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/[0.08] transition-colors"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400 flex items-center justify-center shadow-md mb-4">
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-white font-medium">{item.title}</h3>
              <p className="text-white/70 text-sm mt-2 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
