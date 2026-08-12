import React, { useState } from 'react';
import { Maximize2, X, Calendar, ArrowRight, Tag } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  category: 'FINELINE' | 'BLACKWORK' | 'TRADITIONAL' | 'REALISM' | 'LETTERING';
  image: string;
  description: string;
  placement: string;
}

interface GalleryProps {
  onSelectDesignForBooking: (title: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onSelectDesignForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALLE');
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  const portfolioData: PortfolioItem[] = [
    {
      id: 'p1',
      title: 'Pusteblume & Heißluftballon',
      category: 'FINELINE',
      image: '/images/gallery/pusteblume-heissluftballon-tattoo-dekollete-brust-zittau.jpg',
      description: 'Filigrane Pusteblume als Heißluftballon mit sanft schwebenden Samen-Schirmchen über das Dekolleté.',
      placement: 'Dekolleté / Brust',
    },
    {
      id: 'p2',
      title: 'Gefühlvoller Spruch Lettering',
      category: 'LETTERING',
      image: '/images/gallery/lettering-spruch-tattoo-rippen-schriftzug-zittau.jpg',
      description: 'Präzise geschwungener Calligraphy-Schriftzug: "Wir sind vom Leben gezeichnet, mit Dreck und mit Schmutz, doch es glänzt wie Perlmutt..."',
      placement: 'Rippen / Seitlich',
    },
    {
      id: 'p3',
      title: 'Elbische Tengwar-Schrift & Sterne',
      category: 'LETTERING',
      image: '/images/gallery/elbisch-schriftzug-sterne-tattoo-brust-schluesselbein-zittau.jpg',
      description: 'Zarte elbische Schriftzeichen kombiniert mit rot schattierten Watercolor-Sternen entlang des Schlüsselbeins.',
      placement: 'Schlüsselbein / Brust',
    },
    {
      id: 'p4',
      title: 'Keltischer Knoten & Sterne',
      category: 'BLACKWORK',
      image: '/images/gallery/keltischer-knoten-sterne-tattoo-oberschenkel-huefte-zittau.jpg',
      description: 'Geflochtener keltischer Unendlichkeitsknoten mit Sternenkranz, sanften Schattierungen und Spruchmotiv auf der Hüfte.',
      placement: 'Oberschenkel / Hüfte',
    },
    {
      id: 'p5',
      title: 'Geometrischer Panther',
      category: 'FINELINE',
      image: '/images/gallery/geometrischer-panther-tattoo-unterarm-linework-zittau.jpg',
      description: 'Ausdrucksstarker Raubkatzen-Kopf in klarer Geometrie und extrem präziser Linienführung.',
      placement: 'Unterarm',
    },
    {
      id: 'p6',
      title: 'Mandala Lotusblüte Dotwork',
      category: 'BLACKWORK',
      image: '/images/gallery/mandala-lotus-blume-tattoo-ruecken-dotwork-zittau.jpg',
      description: 'Symmetrische Lotusblüte im Mandelastil mit feinstem Dotwork und eleganten Hängeperlen.',
      placement: 'Oberer Rücken / Nacken',
    },
    {
      id: 'p7',
      title: 'MAN Expedition & Weltkarte',
      category: 'REALISM',
      image: '/images/gallery/lkw-weltkarte-reise-tattoo-wade-realism-zittau.jpg',
      description: 'Detailgetreuer Allrad-LKW über einer Weltkarte mit dem Lebensmotto "Zuhause ist kein Ort sondern ein Gefühl!".',
      placement: 'Wade / Bein',
    },
    {
      id: 'p8',
      title: 'Monarch-Schmetterling & Blüten',
      category: 'REALISM',
      image: '/images/gallery/schmetterling-blumen-tattoo-oberarm-schwarz-grau-zittau.jpg',
      description: 'Fein schattierter Schmetterling umringt von zarten Blumenblüten im Schwarz-Grau-Realismus.',
      placement: 'Oberarm / Schulter',
    },
    {
      id: 'p9',
      title: 'HOME & Kosovo-Koordinaten',
      category: 'LETTERING',
      image: '/images/gallery/home-koordinaten-landkarte-tattoo-oberarm-zittau.jpg',
      description: 'Heimat-Tattoo mit HOME-Typografie, Landkarten-Silhouette, exakten Koordinaten und drei roten Herzen.',
      placement: 'Oberarm-Innenseite',
    },
    {
      id: 'p10',
      title: 'Maritimer Leuchtturm & Anker',
      category: 'REALISM',
      image: '/images/gallery/leuchtturm-anker-welle-maritim-tattoo-unterarm-zittau.jpg',
      description: 'Klassisches maritimes Motiv mit dynamischer Meereswelle, Leuchtturm und filigranem Anker.',
      placement: 'Unterarm',
    },
    {
      id: 'p11',
      title: 'Taschenuhr & Skelett-Hand',
      category: 'REALISM',
      image: '/images/gallery/uhr-skelett-hand-tattoo-realism-zittau.jpg',
      description: 'Eindrucksvolles Realism-Tattoo auf dem Handrücken mit römischer Taschenuhr, Skelettknochen und Schriftzug "Nothing\'s forever".',
      placement: 'Handrücken / Finger',
    },
    {
      id: 'p12',
      title: 'Vintage-Mikrofon & Noten',
      category: 'REALISM',
      image: '/images/gallery/mikrofon-musik-glaub-an-dich-tattoo-schulter-zittau.jpg',
      description: 'Detailreiches Retro-Bühnenmikrofon umweht von Notenschlüsseln und dem Schriftzug "Glaub an dich".',
      placement: 'Schulter / Brust',
    },
    {
      id: 'p13',
      title: 'Engelsflügel & Rote Rose',
      category: 'REALISM',
      image: '/images/gallery/engelsfluegel-rote-rose-tattoo-unterarm-hand-zittau.jpg',
      description: 'Detaillierter Engelsflügel entlang des Unterarms mündend in eine farbintensive rote Rose auf dem Handrücken.',
      placement: 'Unterarm bis Handrücken',
    },
    {
      id: 'p14',
      title: 'Cheeseburger & EKG-Herzschlag',
      category: 'REALISM',
      image: '/images/gallery/burger-herzschlag-ekg-tattoo-unterarm-realism-zittau.jpg',
      description: 'Kreatives Custom-Motiv aus einer EKG-Herzlinie, Herzsymbol und hochrealistischem Cheeseburger.',
      placement: 'Unterarm',
    },
    {
      id: 'p15',
      title: 'Mondsichel & Sternzeichen Waage',
      category: 'FINELINE',
      image: '/images/gallery/mondsichel-waage-sternzeichen-tattoo-ruecken-fineline-zittau.jpg',
      description: 'Mystische Mondphase kombiniert mit dem Sternzeichen Waage (Libra) und geometrischen Symbolen.',
      placement: 'Rücken',
    },
  ];

  const categories = ['ALLE', 'FINELINE', 'BLACKWORK', 'TRADITIONAL', 'REALISM', 'LETTERING'];

  const filteredItems =
    activeCategory === 'ALLE'
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <section id="galerie" className="py-28 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono-tag text-brand-gray uppercase tracking-mega block mb-3">
            [ PORTFOLIO SHOWCASE ]
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-widest text-white mb-6">
            MEINE ARBEITEN
          </h2>
          <div className="h-1 w-16 bg-white mx-auto mb-10" />

          {/* Category Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-mono-tag uppercase tracking-widest transition-all ${
                  activeCategory === cat
                    ? 'bg-white text-black border border-white font-bold'
                    : 'bg-black text-brand-light border border-white/20 hover:border-white/60 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-square bg-obsidian-layer1 border border-white/10 overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-between items-start">
                  <span className="bg-black/90 text-white border border-white/30 text-[10px] font-mono-tag tracking-widest px-2.5 py-1 uppercase">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 bg-white text-black flex items-center justify-center">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-headline text-lg font-bold text-white uppercase tracking-wider mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono-tag text-brand-gray tracking-wide">
                    {item.placement}
                  </p>
                </div>
              </div>

              {/* Subtle Border Highlight */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/60 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-obsidian-layer1 border border-white/30 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 border border-white/30 text-white bg-black hover:bg-white hover:text-black transition-colors flex items-center justify-center"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="aspect-square bg-black border border-white/10 overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="flex flex-col justify-between py-2">
              <div>
                <div className="inline-flex items-center gap-2 border border-white/20 px-3 py-1 bg-black text-[10px] font-mono-tag text-brand-gray uppercase tracking-widest mb-4">
                  <Tag className="w-3 h-3 text-white" />
                  <span>{selectedImage.category}</span>
                </div>

                <h3 className="font-headline text-2xl sm:text-3xl font-black uppercase text-white mb-3 tracking-wider">
                  {selectedImage.title}
                </h3>

                <div className="text-xs font-mono-tag text-brand-gray mb-6">
                  PLATZIERUNG: <span className="text-white">{selectedImage.placement}</span>
                </div>

                <p className="text-brand-light text-sm leading-relaxed mb-8 font-light border-l-2 border-white pl-4">
                  {selectedImage.description}
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/10">
                <button
                  onClick={() => {
                    const title = selectedImage.title;
                    setSelectedImage(null);
                    onSelectDesignForBooking(title);
                  }}
                  className="w-full bg-white text-black py-4 font-mono-tag font-bold uppercase text-xs tracking-widest hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Tattoo wie dieses anfragen</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-full border border-white/30 text-brand-gray hover:text-white py-3 font-mono-tag text-xs uppercase tracking-widest text-center transition-colors"
                >
                  Zurück zur Galerie
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
