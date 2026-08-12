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
        <div className="inline-flex items-center gap-3 border border-white/20 px-5 py-2 bg-obsidian-base/80 backdrop-blur mb-8 animate-fadeIn">
          <span className="w-2 h-2 bg-white animate-pulse" />
          <span className="text-xs sm:text-sm font-mono-tag tracking-widest text-brand-light uppercase font-medium">
            STUDIO ZITTAU • INNERE WEBERSTRASSE 30
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-wider leading-[0.95] text-white mb-8 drop-shadow-2xl">
          WORK INK <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">TATTOO</span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-xl sm:text-2xl md:text-3xl text-neutral-200 max-w-3xl mx-auto font-normal leading-relaxed mb-12">
          Dein Tattoo Studio in Zittau.<br />
          Individuelle Kunst auf deiner Haut.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-center mb-16">
          <button
            onClick={onOpenBooking}
            className="group relative bg-white text-black px-9 py-4.5 font-mono-tag font-bold uppercase text-sm sm:text-base tracking-widest hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 border border-white shadow-lg"
          >
            <Calendar className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>Jetzt Termin buchen</span>
          </button>

          <a
            href="tel:+4915140010158"
            className="group border border-white text-white px-9 py-4.5 font-mono-tag font-bold uppercase text-sm sm:text-base tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 shadow-lg"
          >
            <Phone className="w-5 h-5" />
            <span>+49 151 40010158</span>
          </a>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl border-t border-b border-white/15 py-7 text-left">
          <div className="flex items-center space-x-3.5">
            <ShieldCheck className="w-6 h-6 text-white flex-shrink-0" />
            <div>
              <div className="text-sm font-mono-tag font-bold text-white uppercase tracking-wider">Steril & Sicher</div>
              <div className="text-xs text-brand-gray mt-0.5">Medizinische Hygiene-Standards</div>
            </div>
          </div>

          <div className="flex items-center space-x-3.5">
            <Sparkles className="w-6 h-6 text-white flex-shrink-0" />
            <div>
              <div className="text-sm font-mono-tag font-bold text-white uppercase tracking-wider">Custom Work</div>
              <div className="text-xs text-brand-gray mt-0.5">100% Unikate nach Wunsch</div>
            </div>
          </div>

          <div className="flex items-center space-x-3.5">
            <div className="w-6 h-6 border border-white flex items-center justify-center font-mono-tag text-xs text-white flex-shrink-0 font-bold">✓</div>
            <div>
              <div className="text-sm font-mono-tag font-bold text-white uppercase tracking-wider">Exklusive Beratung</div>
              <div className="text-xs text-brand-gray mt-0.5">Persönlicher Terminservice</div>
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
