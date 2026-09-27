import React from 'react';
import { PageId } from '../types';
import { BookingFlowContent } from '../components/BookingModal';
import { BUSINESS_INFO } from '../data/content';
import { Phone, MapPin, Clock } from 'lucide-react';

interface BookSlotPageProps {
  onNavigate: (page: PageId) => void;
}

export const BookSlotPage: React.FC<BookSlotPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F3EFE7] text-[#242321] pt-24 pb-20">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-[#242321]/15">
        <div className="max-w-3xl">
          <span className="text-xs font-mono tracking-widest text-[#7C2327] uppercase">
            PAGE 08 · DIRECT CHAIR RESERVATION
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-[#171717] mt-2 uppercase">
            WHEN ARE YOU GETTING CLEANED UP?
          </h1>
          <p className="font-serif italic text-xl sm:text-2xl text-[#171717] mt-4">
            “Choose what you need. Tell us when. Send one message.”
          </p>
          <p className="font-sans text-xs sm:text-sm text-[#242321]/70 mt-2 max-w-lg leading-relaxed">
            Eliminate vague back-and-forth messages. Configure your preferred grooming service and timing below to generate an exact WhatsApp appointment request.
          </p>
        </div>
      </section>

      {/* INTERACTIVE BOOKING CONTAINER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Booking Form */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-10 border border-[#242321]/15 rounded-xs shadow-xs">
            <BookingFlowContent isStandalonePage={true} />
          </div>

          {/* Context Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-[#D8D0C6]/35 border border-[#242321]/15 rounded-xs space-y-4">
              <span className="text-xs font-mono tracking-widest text-[#7C2327] uppercase block font-semibold">
                HOW BOOKING WORKS
              </span>
              <ol className="space-y-3 text-xs font-mono text-[#242321]">
                <li className="flex gap-2">
                  <span className="font-bold text-[#7C2327]">1.</span>
                  <span>Select service and ideal timing window.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-[#7C2327]">2.</span>
                  <span>A unique tracking reference is generated.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-[#7C2327]">3.</span>
                  <span>WhatsApp opens with your exact request.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-[#7C2327]">4.</span>
                  <span>Shop staff checks chair schedule and confirms.</span>
                </li>
              </ol>
            </div>

            <div className="p-6 bg-white border border-[#242321]/15 rounded-xs space-y-3 text-xs font-mono text-[#242321]">
              <span className="text-[11px] font-mono tracking-widest text-[#7C2327] uppercase block font-semibold">
                SHOP CONTACT INFO
              </span>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#A7A9A8]" />
                <span>Sector Q, DHA Phase 2, Lahore</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#A7A9A8]" />
                <a href={BUSINESS_INFO.phoneLink} className="hover:underline">
                  {BUSINESS_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#A7A9A8]" />
                <span>{BUSINESS_INFO.operatingInfo}</span>
              </p>
            </div>

            <div className="p-4 bg-[#171717] text-[#F3EFE7] rounded-xs text-xs font-sans">
              <span className="font-serif text-sm block mb-1 text-[#F3EFE7]">
                Prefer calling directly?
              </span>
              <p className="text-[#D8D0C6] mb-3">
                Call our front desk for quick availability questions.
              </p>
              <a
                href={BUSINESS_INFO.phoneLink}
                className="inline-block bg-[#7C2327] hover:bg-[#621c1f] text-[#F3EFE7] py-2 px-4 rounded-xs font-mono text-[11px] transition-colors"
              >
                CALL {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
