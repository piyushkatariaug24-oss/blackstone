'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      <a
        href="https://wa.me/919910496844"
        target="_blank"
        rel="noopener noreferrer"
        className="pulse-ring flex items-center justify-center w-12 h-12 rounded-full bg-[#111820] border border-[rgba(34,211,238,0.15)] text-[#22D3EE] hover:border-[rgba(34,211,238,0.4)] hover:bg-[rgba(34,211,238,0.06)] transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-black/30"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={20} />
      </a>

      <a
        href="tel:+919910496844"
        className="pulse-ring flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#F5A623] to-[#E09400] text-[#0B0F14] hover:shadow-[0_0_24px_rgba(245,166,35,0.3)] transition-all duration-300 hover:-translate-y-0.5"
        aria-label="Call now"
      >
        <Phone size={20} />
      </a>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#111820] border border-[rgba(34,211,238,0.12)] text-[#8B9AA6] hover:text-[#22D3EE] hover:border-[rgba(34,211,238,0.3)] transition-all duration-300 hover:-translate-y-0.5"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
