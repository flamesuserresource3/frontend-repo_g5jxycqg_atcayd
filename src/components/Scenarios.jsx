import React from 'react';
import { motion } from 'framer-motion';

const rows = [
  {
    useCase: 'Bank Caller Verification',
    context: '$48 K wire request. Deepfake of account holder.',
    outcome: 'Stampa risk 0.91 → transfer blocked.'
  },
  {
    useCase: 'Insurance Claims Center',
    context: 'Fraudster manipulating agent.',
    outcome: 'Detected hesitation → case escalated.'
  },
  {
    useCase: 'Corporate IT Helpdesk',
    context: 'Fake CFO voice → password reset.',
    outcome: 'Account locked → breach prevented.'
  },
  {
    useCase: 'Telecom SIM-Swap',
    context: 'Attempted OTP takeover.',
    outcome: 'SIM-swap blocked.'
  },
  {
    useCase: 'Trading Desk Compliance',
    context: 'Playback of broker voice.',
    outcome: 'Immediate lockout + audit trail.'
  }
];

export default function Scenarios() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-white">Proven in live enterprise environments.</h3>
          <p className="text-white/70 mt-2 max-w-2xl mx-auto">Real-world outcomes across finance, insurance, telecom, and enterprise operations.</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="hidden md:grid grid-cols-12 text-left text-xs uppercase tracking-wider text-white/60 border-b border-white/10">
            <div className="col-span-3 px-4 py-3">Use Case</div>
            <div className="col-span-6 px-4 py-3">Context</div>
            <div className="col-span-3 px-4 py-3">Outcome</div>
          </div>
          <ul className="divide-y divide-white/10">
            {rows.map((r, i) => (
              <motion.li
                key={r.useCase}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: i * 0.03 }}
                className="grid md:grid-cols-12 gap-3 md:gap-0 px-4 py-4 md:py-5 hover:bg-white/[0.04] transition-colors"
              >
                <div className="md:col-span-3">
                  <div className="text-white font-medium">{r.useCase}</div>
                </div>
                <div className="md:col-span-6">
                  <div className="text-white/80">{r.context}</div>
                </div>
                <div className="md:col-span-3">
                  <div className="text-white/90">{r.outcome}</div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
