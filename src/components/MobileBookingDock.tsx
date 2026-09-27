import React from 'react';
import { BUSINESS_INFO } from '../data/content';
import { Calendar, MessageSquare, Phone } from 'lucide-react';

interface MobileBookingDockProps {
  onOpenBooking?: () => void;
}

export const MobileBookingDock: React.FC<MobileBookingDockProps> = ({ onOpenBooking }) => {
  const handleBookClick = () => {
    const el = document.getElementById('book');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      history.replaceState(null, '', '#book');
    } else if (onOpenBooking) {
      onOpenBooking();
    }
  };

  return (
    <aside
      aria-label="Quick Actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-white/15 py-2.5 px-4 shadow-2xl text-[#F3EFE7]"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        <button
          onClick={handleBookClick}
          className="cursor-pointer bg-[#F8F6F0] hover:bg-white text-[#111111] py-2 px-1 text-center font-bold text-xs tracking-wider rounded-xs flex flex-col sm:flex-row items-center justify-center gap-1 transition-all shadow-md"
        >
          <Calendar className="w-3.5 h-3.5 text-[#8E2429]" />
          <span>BOOK</span>
        </button>

        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#171717] hover:bg-[#222222] text-[#F3EFE7] py-2 px-1 text-center font-medium text-xs tracking-wider rounded-xs flex flex-col sm:flex-row items-center justify-center gap-1 transition-colors border border-white/10"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#8E2429]" />
          <span>WHATSAPP</span>
        </a>

        <a
          href={BUSINESS_INFO.phoneLink}
          className="bg-[#171717] hover:bg-[#222222] text-[#F3EFE7] py-2 px-1 text-center font-medium text-xs tracking-wider rounded-xs flex flex-col sm:flex-row items-center justify-center gap-1 transition-colors border border-white/10"
        >
          <Phone className="w-3.5 h-3.5 text-[#C5C6C5]" />
          <span>CALL</span>
        </a>
      </div>
    </aside>
  );
};
