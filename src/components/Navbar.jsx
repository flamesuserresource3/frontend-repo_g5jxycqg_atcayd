import React from 'react';
import { Shield, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur-md/0">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400 flex items-center justify-center shadow-lg">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-tight text-lg">Stampa</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how" className="hover:text-white transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#docs" className="hover:text-white transition-colors">Docs</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/80 hover:text-white transition-colors">
            <Sparkles className="h-4 w-4" />
            Live demo
          </button>
          <button className="inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 text-sm transition-colors border border-white/10">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}
