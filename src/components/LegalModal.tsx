import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'impressum' | 'datenschutz' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-obsidian-layer1 border border-white/20 p-6 sm:p-10 max-h-[85vh] overflow-y-auto space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3">
            {type === 'impressum' ? (
              <FileText className="w-5 h-5 text-white" />
            ) : (
              <ShieldCheck className="w-5 h-5 text-white" />
            )}
            <h2 className="font-headline text-2xl font-bold uppercase text-white tracking-widest">
              {type === 'impressum' ? 'IMPRESSUM' : 'DATENSCHUTZERKLÄRUNG'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 border border-white/20 text-white hover:bg-white hover:text-black flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Legal Text Content */}
        {type === 'impressum' ? (
          <div className="space-y-4 text-xs font-mono-tag text-brand-light leading-relaxed">
            <div>
              <h3 className="text-white font-bold text-sm uppercase mb-1">Angaben gemäß § 5 TMG</h3>
              <p>Work Ink Tattoo Studio</p>
              <p>Innere Weberstraße 30</p>
              <p>02763 Zittau</p>
              <p>Deutschland</p>
            </div>

            <div className="pt-2">
              <h3 className="text-white font-bold text-sm uppercase mb-1">Kontakt</h3>
              <p>Telefon: +49 151 40010158</p>
              <p>E-Mail: gregorbielawa@gmail.com</p>
            </div>

            <div className="pt-2">
              <h3 className="text-white font-bold text-sm uppercase mb-1">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
              <p>Work Ink Tattoo Studio – Gregor Bielawa</p>
              <p>Innere Weberstraße 30, 02763 Zittau</p>
            </div>

            <div className="pt-2">
              <h3 className="text-white font-bold text-sm uppercase mb-1">Haftung für Inhalte & Links</h3>
              <p>
                Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Ich übernehme keine Haftung für externe Links; für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4 text-xs font-mono-tag text-brand-light leading-relaxed">
            <div>
              <h3 className="text-white font-bold text-sm uppercase mb-1">1. Datenschutz auf einen Blick</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenzusammenhängende Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </div>

            <div className="pt-2">
              <h3 className="text-white font-bold text-sm uppercase mb-1">2. Datenerfassung auf unserer Website</h3>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Wenn Sie das Buchungsformular ausfüllen, werden Ihre eingegebenen Daten (Name, Telefonnummer, Wunschmotiv) ausschließlich zum Zwecke der Kontaktaufnahme und Terminabwicklung gespeichert.
              </p>
            </div>

            <div className="pt-2">
              <h3 className="text-white font-bold text-sm uppercase mb-1">3. Ihre Rechte</h3>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
              </p>
            </div>
          </div>
        )}

        {/* Footer Close */}
        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="bg-white text-black px-6 py-2 text-xs font-mono-tag uppercase tracking-widest font-bold hover:bg-neutral-200"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};
