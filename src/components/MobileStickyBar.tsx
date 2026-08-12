import React from 'react';
import { Phone, Calendar } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-black/90 backdrop-blur-md border-t border-white/20 md:hidden z-50 flex gap-2">
        <button
          onClick={onOpenBooking}
          className="flex-1 bg-white text-black py-3 text-center font-mono-tag font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Termin anfragen</span>
        </button>

        <a
          href="tel:+4915140010158"
          className="flex-1 border border-white text-white py-3 text-center font-mono-tag font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-white/10"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Jetzt Anrufen</span>
        </a>
      </div>

      {/* Spacer for bottom sticky bar on mobile */}
      <div className="h-16 md:hidden" />
    </>
  );
};
