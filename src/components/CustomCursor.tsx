import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device has touch capability
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('a') ||
          target.closest('button') ||
          target.classList.contains('interactive'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Precision Crosshair Cursor */}
      <div className="relative flex items-center justify-center">
        {/* Center Precision Dot */}
        <div
          className={`w-1.5 h-1.5 bg-white transition-all duration-150 ${
            isHovered ? 'scale-150 bg-white' : ''
          }`}
        />

        {/* Outer Precision Reticle Lines */}
        <div
          className={`absolute border border-white/60 transition-all duration-200 ${
            isHovered
              ? 'w-9 h-9 border-white rotate-45 opacity-100'
              : 'w-6 h-6 border-white/40 opacity-70'
          }`}
        />

        {/* Technical Coordinate Indicators */}
        {isHovered && (
          <div className="absolute top-6 left-6 text-[9px] font-mono-tag tracking-widest text-white/80 bg-black/90 px-1 border border-white/20 whitespace-nowrap">
            [FOCUS]
          </div>
        )}
      </div>
    </div>
  );
};
