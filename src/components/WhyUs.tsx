import React from 'react';
import { Shield, Sparkles, Feather, CheckSquare } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const features = [
    {
      id: '01',
      title: 'Hygiene & Standards',
      subtitle: 'Sicherheit an erster Stelle',
      description:
        'Strikte Einhaltung aller medizinischen & hygienischen Vorgaben. Ich arbeite ausschließlich mit zertifizierten Einweg-Materialien und hochmodernen Sterilisationsverfahren.',
      icon: Shield,
    },
    {
      id: '02',
      title: 'Custom Designs',
      subtitle: 'Einzigartige Motive',
      description:
        'Jedes Tattoo ist ein individuelles Unikat. Gemeinsam mit dir entwickle ich eine Zeichnung, die exakt zu deinen Vorstellungen, Körperkonturen und deinen Emotionen passt.',
      icon: Feather,
    },
    {
      id: '03',
      title: 'Erfahrener Artist',
      subtitle: 'Präzision & Leidenschaft',
      description:
        'Mein Studio in Zittau vereint meisterhaftes Handwerk mit ruhiger Hand. Jahrelange Praxis in Fineline, Dotwork, Lettering & Custom Blackwork.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="ueber-uns" className="py-28 bg-[#131313] border-t border-b border-white/10 relative overflow-hidden">
      {/* Background Accent Grid Line */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-mono-tag text-brand-gray uppercase tracking-mega block mb-3">
            [ ÜBER MICH ]
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-widest text-white mb-6">
            ÜBER MICH
          </h2>
          <div className="h-1 w-16 bg-white mx-auto" />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-black border border-white/10 p-8 sm:p-10 transition-all duration-300 hover:border-white/40 hover:-translate-y-1 relative"
              >
                {/* Number Badge */}
                <div className="absolute top-6 right-6 text-xs font-mono-tag text-brand-gray/40 group-hover:text-white transition-colors">
                  // {item.id}
                </div>

                {/* Icon Frame */}
                <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-all">
                  <IconComponent className="w-6 h-6 transition-colors" />
                </div>

                {/* Card Content */}
                <h3 className="font-headline text-xl font-bold uppercase tracking-wider text-white mb-2">
                  {item.title}
                </h3>
                <div className="text-xs font-mono-tag text-brand-gray uppercase tracking-widest mb-4">
                  {item.subtitle}
                </div>
                <p className="text-brand-light text-sm leading-relaxed font-light">
                  {item.description}
                </p>

                {/* Bottom Border Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>

        {/* Quality Commitment Footer */}
        <div className="mt-16 bg-black/60 border border-white/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <CheckSquare className="w-5 h-5 text-white flex-shrink-0" />
            <span className="text-xs font-mono-tag uppercase tracking-wider text-brand-light">
              Erstberatung & Nachsorge-Empfehlungen inklusive
            </span>
          </div>
          <a
            href="#anfahrt"
            className="text-xs font-mono-tag uppercase tracking-widest text-white hover:underline flex items-center gap-1"
          >
            Studio in Zittau besuchen &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
