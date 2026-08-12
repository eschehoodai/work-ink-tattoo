import React from 'react';
import { Calendar, Phone, ArrowDown, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-black">
      {/* Background Video (Full Brightness) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center scale-105"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Subtle bottom gradient to blend seamlessly into next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Tag Badges */}
        <div className="inline-flex items-center gap-3 border border-white/20 px-4 py-1.5 bg-obsidian-base/80 backdrop-blur mb-8 animate-fadeIn">
          <span className="w-2 h-2 bg-white animate-pulse" />
          <span className="text-[11px] font-mono-tag tracking-widest text-brand-light uppercase">
            STUDIO ZITTAU • INNERE WEBERSTRASSE 30
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-headline text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight leading-[0.9] text-white mb-6 drop-shadow-2xl">
          WORK INK <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">TATTOO</span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-lg sm:text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Dein Tattoo Studio in Zittau – Individuelle Kunst auf deiner Haut.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-16">
          <button
            onClick={onOpenBooking}
            className="group relative bg-white text-black px-8 py-4 font-mono-tag font-bold uppercase text-xs sm:text-sm tracking-widest hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 border border-white"
          >
            <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>Jetzt Termin buchen</span>
          </button>

          <a
            href="tel:+4915140010158"
            className="group border border-white text-white px-8 py-4 font-mono-tag font-bold uppercase text-xs sm:text-sm tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3"
          >
            <Phone className="w-4 h-4" />
            <span>+49 151 40010158</span>
          </a>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl border-t border-b border-white/10 py-6 text-left">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-5 h-5 text-white flex-shrink-0" />
            <div>
              <div className="text-xs font-mono-tag font-semibold text-white uppercase tracking-wider">Steril & Sicher</div>
              <div className="text-[11px] text-brand-gray">Medizinische Hygiene-Standards</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Sparkles className="w-5 h-5 text-white flex-shrink-0" />
            <div>
              <div className="text-xs font-mono-tag font-semibold text-white uppercase tracking-wider">Custom Work</div>
              <div className="text-[11px] text-brand-gray">100% Unikate nach Wunsch</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 border border-white flex items-center justify-center font-mono-tag text-[10px] text-white flex-shrink-0">✓</div>
            <div>
              <div className="text-xs font-mono-tag font-semibold text-white uppercase tracking-wider">Exklusive Beratung</div>
              <div className="text-[11px] text-brand-gray">Persönlicher Terminservice</div>
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#ueber-uns"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors p-2 flex flex-col items-center gap-1"
        aria-label="Scrollen zu Über uns"
      >
        <span className="text-[9px] font-mono-tag uppercase tracking-widest">Explore</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
