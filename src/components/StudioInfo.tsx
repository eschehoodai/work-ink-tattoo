import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink, ShieldAlert } from 'lucide-react';

export const StudioInfo: React.FC = () => {
  const mapsUrl = "https://maps.google.com/?q=Innere+Weberstraße+30,+02763+Zittau";

  return (
    <section id="anfahrt" className="py-28 bg-[#131313] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Info & Details */}
          <div>
            <span className="text-xs sm:text-sm font-mono-tag text-brand-gray uppercase tracking-widest block mb-3">
              [ STUDIO LOCATION ]
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wider text-white mb-8">
              STUDIO & ANFAHRT
            </h2>

            <div className="space-y-6 mb-10">
              {/* Address */}
              <div className="bg-black border border-white/10 p-6 flex items-start space-x-4">
                <div className="w-11 h-11 border border-white/20 flex items-center justify-center flex-shrink-0 text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-mono-tag text-brand-gray uppercase tracking-wider mb-1">
                    Adresse
                  </div>
                  <div className="font-headline font-bold text-white text-xl">
                    Innere Weberstraße 30
                  </div>
                  <div className="text-base text-brand-light font-normal mt-0.5">
                    02763 Zittau, Sachsen
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-black border border-white/10 p-6 flex items-start space-x-4">
                <div className="w-11 h-11 border border-white/20 flex items-center justify-center flex-shrink-0 text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-mono-tag text-brand-gray uppercase tracking-wider mb-1">
                    Telefon & WhatsApp
                  </div>
                  <a
                    href="tel:+4915140010158"
                    className="font-headline font-bold text-white text-xl hover:underline block"
                  >
                    +49 151 40010158
                  </a>
                  <div className="text-xs sm:text-sm font-mono-tag text-brand-gray mt-1">
                    Direkte Erreichbarkeit & Terminabsprachen
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-black border border-white/10 p-6 flex items-start space-x-4">
                <div className="w-11 h-11 border border-white/20 flex items-center justify-center flex-shrink-0 text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-mono-tag text-brand-gray uppercase tracking-wider mb-1">
                    E-Mail Kontakt
                  </div>
                  <a
                    href="mailto:gregorbielawa@gmail.com"
                    className="font-headline font-bold text-white text-lg sm:text-xl hover:underline block break-all"
                  >
                    gregorbielawa@gmail.com
                  </a>
                  <div className="text-xs sm:text-sm font-mono-tag text-brand-gray mt-1">
                    Anfragen, Referenzbilder & Feedback
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-black border border-white/10 p-6 flex items-start space-x-4">
                <div className="w-11 h-11 border border-white/20 flex items-center justify-center flex-shrink-0 text-white">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-mono-tag text-brand-gray uppercase tracking-wider mb-1">
                    Öffnungszeiten & Termine
                  </div>
                  <div className="text-base font-semibold text-white">
                    Mo - Sa: Nach individueller Terminvereinbarung
                  </div>
                  <div className="text-xs sm:text-sm text-brand-gray font-normal mt-1">
                    Walk-in Anfragen nach Absprache telefonisch möglich.
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Route Button */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white text-black py-4.5 px-6 font-mono-tag font-bold text-sm sm:text-base uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center justify-center gap-3 border border-white shadow-md"
            >
              <Navigation className="w-5 h-5" />
              <span>Route in Google Maps planen</span>
              <ExternalLink className="w-4 h-4 ml-auto opacity-70" />
            </a>
          </div>

          {/* Right Column: Interactive Real Map Container */}
          <div className="relative">
            <div className="border border-white/20 bg-black p-3 sm:p-4 relative overflow-hidden group shadow-2xl">
              {/* Top status bar */}
              <div className="flex justify-between items-center bg-[#181818] border border-white/10 px-4 py-2.5 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono-tag text-white uppercase tracking-widest font-bold">
                    LIVE KARTE & LOCATION
                  </span>
                </div>
                <span className="text-[11px] font-mono-tag text-brand-gray uppercase hidden sm:inline">
                  Innere Weberstraße 30, Zittau
                </span>
              </div>

              {/* Map Iframe Container */}
              <div className="relative w-full h-[450px] bg-neutral-900 border border-white/10 overflow-hidden group">
                <iframe
                  title="Studio Standort Innere Weberstraße 30 Zittau"
                  src="https://maps.google.com/maps?q=Innere%20Weberstra%C3%9Fe%2030,%2002763%20Zittau&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  style={{
                    filter: 'invert(90%) hue-rotate(180deg) contrast(120%) grayscale(20%)'
                  }}
                  loading="lazy"
                  allowFullScreen
                />

                {/* Overlay Badge & Action */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row gap-2 justify-between items-center pointer-events-none">
                  <div className="bg-black/90 backdrop-blur-md border border-white/20 px-4 py-2.5 pointer-events-auto shadow-lg w-full sm:w-auto">
                    <div className="font-display font-bold text-xs sm:text-sm text-white uppercase tracking-wider">
                      WORK INK TATTOO
                    </div>
                    <div className="text-[11px] font-mono-tag text-brand-gray">
                      Innere Weberstraße 30, 02763 Zittau
                    </div>
                  </div>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto w-full sm:w-auto bg-white text-black hover:bg-neutral-200 border border-white px-4 py-2.5 text-xs font-mono-tag font-bold uppercase tracking-widest transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>In Google Maps öffnen</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Parking & Arrival Note */}
            <div className="mt-4 text-xs font-mono-tag text-brand-gray flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-white flex-shrink-0" />
              <span>Öffentliche Parkplätze direkt an der Inneren Weberstraße vorhanden.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
