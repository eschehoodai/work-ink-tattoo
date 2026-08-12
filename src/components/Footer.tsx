import React from 'react';
import { Instagram, Facebook, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 py-16 text-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full border border-white/30 overflow-hidden bg-black flex items-center justify-center">
                <img
                  src="/images/logo/work-ink-tattoo-studio-zittau-logo.jpg"
                  alt="Work-Ink Tattoo Studio Zittau Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-headline text-2xl font-black tracking-widest uppercase text-white">
                WORK INK TATTOO
              </span>
            </div>
            <p className="text-xs text-brand-gray font-light max-w-md leading-relaxed">
              Exklusives Tattoo Studio in Zittau. Spezialisiert auf Fineline, Custom Blackwork, Ornamental Art & individuelle Tätowierungen mit höchstem Hygiene-Anspruch.
            </p>
            <div className="text-[11px] font-mono-tag text-white/70">
              [ FINE ART & PRECISION SINCE ZITTAU ]
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-mono-tag text-xs text-white uppercase tracking-widest mb-4">
              STUDIO LINKS
            </h4>
            <ul className="space-y-2 text-xs font-mono-tag">
              <li>
                <a href="#galerie" className="text-brand-gray hover:text-white transition-colors">
                  Portfolio / Galerie
                </a>
              </li>
              <li>
                <a href="#ueber-uns" className="text-brand-gray hover:text-white transition-colors">
                  Über mich / Hygiene
                </a>
              </li>
              <li>
                <a href="#anfahrt" className="text-brand-gray hover:text-white transition-colors">
                  Studio & Anfahrt
                </a>
              </li>
              <li>
                <a href="#booking" className="text-brand-gray hover:text-white transition-colors">
                  Terminanfrage
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Contact */}
          <div>
            <h4 className="font-mono-tag text-xs text-white uppercase tracking-widest mb-4">
              FOLGE MIR
            </h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="w-9 h-9 border border-white/20 text-brand-gray hover:border-white hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-white/20 text-brand-gray hover:border-white hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            <div className="text-xs font-mono-tag text-brand-gray space-y-1">
              <p>Studio Zittau: +49 151 40010158</p>
              <p><a href="mailto:gregorbielawa@gmail.com" className="hover:text-white transition-colors">gregorbielawa@gmail.com</a></p>
              <p>Innere Weberstraße 30, Zittau</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono-tag text-brand-gray">
          <div>
            &copy; {new Date().getFullYear()} Work Ink Tattoo Zittau. Alle Rechte vorbehalten.
          </div>

          <div className="flex space-x-6">
            <button
              onClick={() => onOpenLegal('impressum')}
              className="hover:text-white transition-colors"
            >
              Impressum
            </button>
            <button
              onClick={() => onOpenLegal('datenschutz')}
              className="hover:text-white transition-colors"
            >
              Datenschutz
            </button>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Nach Oben</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
