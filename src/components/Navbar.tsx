import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Galerie', href: '#galerie' },
    { name: 'Über mich', href: '#ueber-uns' },
    { name: 'Studio & Anfahrt', href: '#anfahrt' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center space-x-3 text-white transition-opacity hover:opacity-90"
          >
            <div className="w-10 h-10 rounded-full border border-white/30 overflow-hidden bg-black flex items-center justify-center group-hover:border-white transition-colors">
              <img
                src="/images/logo/work-ink-tattoo-studio-zittau-logo.jpg"
                alt="Work-Ink Tattoo Studio Zittau Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-wider uppercase leading-none">
                WORK INK
              </span>
              <span className="text-[11px] font-mono-tag tracking-widest text-brand-gray uppercase mt-1">
                TATTOO STUDIO • ZITTAU
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase font-mono-tag font-semibold tracking-widest text-brand-light hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenBooking}
              className="bg-white text-black px-6 py-3 text-xs sm:text-sm font-mono-tag font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors border border-white"
            >
              Termin Buchen
            </button>
            <a
              href="tel:+4915140010158"
              className="border border-white/40 text-white px-5 py-3 text-xs sm:text-sm font-mono-tag font-semibold uppercase tracking-widest hover:border-white hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>+49 151 40010158</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-white/20 text-white hover:bg-white/10 focus:outline-none"
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-black/95 backdrop-blur-xl border-b border-white/20 py-8 px-6 transition-all animate-fadeIn">
          <div className="flex flex-col space-y-6">
            <div className="text-[10px] font-mono-tag text-brand-gray uppercase tracking-mega mb-2 border-b border-white/10 pb-2">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-headline font-bold uppercase tracking-wider text-white hover:text-brand-gray flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-brand-gray" />
              </a>
            ))}

            <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-white text-black py-4 text-xs font-mono-tag font-bold uppercase tracking-widest text-center"
              >
                Jetzt Termin anfragen
              </button>
              <a
                href="tel:+4915140010158"
                className="w-full border border-white text-white py-3.5 text-xs font-mono-tag uppercase tracking-widest text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>+49 151 40010158 Anrufen</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
