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
            <span className="text-xs font-mono-tag text-brand-gray uppercase tracking-mega block mb-3">
              [ STUDIO LOCATION ]
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-widest text-white mb-8">
              STUDIO & ANFAHRT
            </h2>

            <div className="space-y-6 mb-10">
              {/* Address */}
              <div className="bg-black border border-white/10 p-6 flex items-start space-x-4">
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center flex-shrink-0 text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono-tag text-brand-gray uppercase tracking-wider mb-1">
                    Adresse
                  </div>
                  <div className="font-headline font-bold text-white text-lg">
                    Innere Weberstraße 30
                  </div>
                  <div className="text-sm text-brand-light font-light">
                    02763 Zittau, Sachsen
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-black border border-white/10 p-6 flex items-start space-x-4">
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center flex-shrink-0 text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono-tag text-brand-gray uppercase tracking-wider mb-1">
                    Telefon & WhatsApp
                  </div>
                  <a
                    href="tel:+4915140010158"
                    className="font-headline font-bold text-white text-lg hover:underline block"
                  >
                    +49 151 40010158
                  </a>
                  <div className="text-xs font-mono-tag text-brand-gray mt-1">
                    Direkte Erreichbarkeit & Terminabsprachen
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-black border border-white/10 p-6 flex items-start space-x-4">
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center flex-shrink-0 text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono-tag text-brand-gray uppercase tracking-wider mb-1">
                    E-Mail Kontakt
                  </div>
                  <a
                    href="mailto:gregorbielawa@gmail.com"
                    className="font-headline font-bold text-white text-base sm:text-lg hover:underline block break-all"
                  >
                    gregorbielawa@gmail.com
                  </a>
                  <div className="text-xs font-mono-tag text-brand-gray mt-1">
                    Anfragen, Referenzbilder & Feedback
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-black border border-white/10 p-6 flex items-start space-x-4">
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center flex-shrink-0 text-white">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono-tag text-brand-gray uppercase tracking-wider mb-1">
                    Öffnungszeiten & Termine
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Mo - Sa: Nach individueller Terminvereinbarung
                  </div>
                  <div className="text-xs text-brand-gray font-light mt-1">
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
              className="w-full bg-white text-black py-4 px-6 font-mono-tag font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center justify-center gap-3 border border-white"
            >
              <Navigation className="w-4 h-4" />
              <span>Route in Google Maps planen</span>
              <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-70" />
            </a>
          </div>

          {/* Right Column: Stylized Dark Map Preview Container */}
          <div className="relative">
            <div className="border border-white/20 bg-black p-4 relative overflow-hidden group">
              {/* Map Canvas Visual Placeholder / Embed */}
              <div className="relative w-full h-[450px] bg-neutral-900 border border-white/10 overflow-hidden flex flex-col justify-between p-6">
                {/* Background Blueprint Grid Lines */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />

                {/* Dark Stylized Map Graphic */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex flex-col items-center">
                    {/* Pulsing Target Marker */}
                    <div className="relative flex items-center justify-center mb-3">
                      <div className="w-12 h-12 bg-white/10 rounded-full animate-ping absolute" />
                      <div className="w-8 h-8 bg-white text-black border-2 border-black flex items-center justify-center z-10 shadow-2xl">
                        <MapPin className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="bg-black/90 border border-white px-4 py-2 text-center shadow-2xl">
                      <div className="font-headline font-bold text-xs text-white uppercase tracking-widest">
                        WORK INK TATTOO
                      </div>
                      <div className="text-[10px] font-mono-tag text-brand-gray">
                        Innere Weberstraße 30, Zittau
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top Overlay Badge */}
                <div className="relative z-10 flex justify-between items-center">
                  <span className="bg-black/90 border border-white/20 px-3 py-1 text-[10px] font-mono-tag text-white uppercase tracking-widest">
                    ZITTAU ZENTRUM
                  </span>
                  <span className="text-[10px] font-mono-tag text-brand-gray uppercase">
                    51.897° N, 14.806° E
                  </span>
                </div>

                {/* Bottom Overlay Action */}
                <div className="relative z-10">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-black/90 hover:bg-white hover:text-black border border-white/40 text-white text-xs font-mono-tag uppercase tracking-widest py-3 transition-colors"
                  >
                    Google Maps Karte Öffnen &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Parking & Arrival Note */}
            <div className="mt-4 text-[11px] font-mono-tag text-brand-gray flex items-center gap-2">
              <ShieldAlert className="w-3.5 h-3.5 text-white flex-shrink-0" />
              <span>Öffentliche Parkplätze direkt an der Inneren Weberstraße vorhanden.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
