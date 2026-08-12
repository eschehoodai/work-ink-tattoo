import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyUs } from './components/WhyUs';
import { Gallery } from './components/Gallery';
import { StudioInfo } from './components/StudioInfo';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { MobileStickyBar } from './components/MobileStickyBar';
import { LegalModal } from './components/LegalModal';
import { X } from 'lucide-react';

export function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState<string>('');
  const [legalModalType, setLegalModalType] = useState<'impressum' | 'datenschutz' | null>(null);

  const handleOpenBookingWithDesign = (designTitle: string) => {
    setSelectedDesign(designTitle);
    setBookingModalOpen(true);
  };

  return (
    <div className="bg-black text-brand-light min-h-screen relative font-sans selection:bg-white selection:text-black">
      {/* 3% Noise Grain Texture Overlay */}
      <div className="noise-overlay" />

      {/* Custom Crosshair Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Main Page Content */}
      <main>
        {/* Hero Section */}
        <Hero onOpenBooking={() => setBookingModalOpen(true)} />

        {/* Why Us Section */}
        <WhyUs />

        {/* Gallery Section */}
        <Gallery onSelectDesignForBooking={handleOpenBookingWithDesign} />

        {/* Studio Info & Map Section */}
        <StudioInfo />

        {/* Contact & Booking Section */}
        <section id="kontakt" className="py-24 bg-black relative border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <BookingForm initialDesign={selectedDesign} />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Booking Form Modal Overlay */}
      {bookingModalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
          onClick={() => setBookingModalOpen(false)}
        >
          <div className="relative w-full max-w-2xl my-8" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 border border-white/30 text-white bg-black hover:bg-white hover:text-black flex items-center justify-center transition-colors"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>
            <BookingForm
              initialDesign={selectedDesign}
              isModal={true}
              onCloseModal={() => setBookingModalOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Legal Modal (Impressum / Datenschutz) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default App;
