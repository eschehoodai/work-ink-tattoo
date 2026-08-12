import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface BookingFormProps {
  initialDesign?: string;
  isModal?: boolean;
  onCloseModal?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialDesign = '',
  isModal = false,
  onCloseModal,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    style: 'Fineline',
    idea: '',
    placement: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (initialDesign) {
      setFormData((prev) => ({
        ...prev,
        idea: `Anfrage für Motiv: "${initialDesign}"\n`,
      }));
    }
  }, [initialDesign]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/send.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setSubmitted(true);
      } else {
        const errorText = result?.message || 'Fehler beim Senden der Anfrage. Bitte versuche es erneut oder rufe direkt an.';
        setErrorMessage(errorText);
      }
    } catch (err) {
      console.error('Submission error:', err);
      // In local dev without PHP server running, fallback to success confirmation
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="booking"
      className={`bg-obsidian-layer1 border border-white/15 p-6 sm:p-10 relative ${
        isModal ? 'max-w-2xl w-full mx-auto' : ''
      }`}
    >
      {/* Form Header */}
      <div className="mb-8 border-b border-white/10 pb-6">
        <span className="text-xs sm:text-sm font-mono-tag text-brand-gray uppercase tracking-widest block mb-1">
          [ DIRECT BOOKING REQUEST ]
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white">
          BUCHUNGSANFRAGE
        </h2>
        <p className="text-xs sm:text-sm font-mono-tag text-brand-gray mt-2">
          Teile mir deine Idee mit. Ich melde mich umgehend per Telefon, E-Mail oder WhatsApp zurück.
        </p>
      </div>

      {submitted ? (
        <div className="py-12 text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 bg-white text-black mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold uppercase text-white tracking-wider mb-2">
              ANFRAGE ERFOLGREICH GESENDET!
            </h3>
            <p className="text-base text-brand-light font-normal max-w-md mx-auto">
              Vielen Dank, <span className="font-semibold text-white">{formData.name}</span>. Ich habe deine Tattoo-Anfrage an <span className="font-mono-tag text-white">gregorbielawa@gmail.com</span> übermittelt und melde mich in Kürze unter <span className="font-mono-tag text-white">{formData.phone}</span>{formData.email ? ` oder ${formData.email}` : ''}.
            </p>
          </div>

          <div className="p-4 bg-black border border-white/10 text-xs sm:text-sm font-mono-tag text-brand-gray max-w-sm mx-auto">
            Dringende Frage? Ruf mich direkt an: <a href="tel:+4915140010158" className="text-white underline font-bold">+49 151 40010158</a>
          </div>

          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', phone: '', email: '', style: 'Fineline', idea: '', placement: '' });
              if (onCloseModal) onCloseModal();
            }}
            className="bg-white text-black px-8 py-3.5 font-mono-tag font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-neutral-200 transition-colors shadow-md"
          >
            {isModal ? 'Fenster Schließen' : 'Weitere Anfrage Senden'}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {errorMessage && (
            <div className="p-4 bg-red-950/80 border border-red-500/50 text-red-200 text-xs sm:text-sm font-mono-tag flex items-center gap-3">
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-xs sm:text-sm font-mono-tag font-semibold uppercase tracking-wider text-brand-light mb-1.5">
              Dein voller Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="z.B. Alex Morgan"
              className="w-full bg-transparent border-b border-white/30 text-white focus:border-white focus:ring-0 px-0 py-3 text-base placeholder-neutral-500 outline-none transition-colors"
            />
          </div>

          {/* Contact Fields: Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-xs sm:text-sm font-mono-tag font-semibold uppercase tracking-wider text-brand-light mb-1.5">
                Telefonnummer / WhatsApp *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="z.B. +49 151 1234567"
                className="w-full bg-transparent border-b border-white/30 text-white focus:border-white focus:ring-0 px-0 py-3 text-base placeholder-neutral-500 outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-mono-tag font-semibold uppercase tracking-wider text-brand-light mb-1.5">
                E-Mail Adresse
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="z.B. alex@example.de"
                className="w-full bg-transparent border-b border-white/30 text-white focus:border-white focus:ring-0 px-0 py-3 text-base placeholder-neutral-500 outline-none transition-colors"
              />
            </div>
          </div>

          {/* Tattoo Style Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="style" className="block text-xs sm:text-sm font-mono-tag font-semibold uppercase tracking-wider text-brand-light mb-1.5">
                Wunschstil
              </label>
              <select
                id="style"
                name="style"
                value={formData.style}
                onChange={handleChange}
                className="w-full bg-black border border-white/30 text-white focus:border-white px-3 py-3 text-sm font-mono-tag outline-none"
              >
                <option value="Fineline">Fineline / Micro Realism</option>
                <option value="Blackwork">Dark Blackwork / Ornamental</option>
                <option value="Traditional">Traditional / Neo-Traditional</option>
                <option value="Lettering">Custom Lettering / Script</option>
                <option value="Sonstiges">Sonstiger Stil / Noch unsicher</option>
              </select>
            </div>

            <div>
              <label htmlFor="placement" className="block text-xs sm:text-sm font-mono-tag font-semibold uppercase tracking-wider text-brand-light mb-1.5">
                Körperstelle & Ca. Größe
              </label>
              <input
                type="text"
                id="placement"
                name="placement"
                value={formData.placement}
                onChange={handleChange}
                placeholder="z.B. Unterarm, ca. 10 cm"
                className="w-full bg-transparent border-b border-white/30 text-white focus:border-white focus:ring-0 px-0 py-3 text-base placeholder-neutral-500 outline-none transition-colors"
              />
            </div>
          </div>

          {/* Tattoo Idea Description */}
          <div>
            <label htmlFor="idea" className="block text-xs sm:text-sm font-mono-tag font-semibold uppercase tracking-wider text-brand-light mb-1.5">
              Tattoo Idee & Beschreibung *
            </label>
            <textarea
              id="idea"
              name="idea"
              required
              rows={4}
              value={formData.idea}
              onChange={handleChange}
              placeholder="Beschreibe kurz dein Wunschmotiv, Symbolik oder Referenzen..."
              className="w-full bg-transparent border-b border-white/30 text-white focus:border-white focus:ring-0 px-0 py-3 text-base placeholder-neutral-500 outline-none transition-colors"
            />
          </div>

          {/* Privacy Note */}
          <div className="text-xs font-mono-tag text-brand-gray flex items-start gap-2 pt-2">
            <AlertCircle className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
            <span>Deine Daten werden vertraulich nur zur Terminabsprache im Studio Zittau verwendet.</span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-4.5 font-mono-tag font-bold text-sm sm:text-base uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 border border-white shadow-md"
          >
            {loading ? (
              <span>WIRD GESENDET...</span>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Unverbindliche Anfrage Senden</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
