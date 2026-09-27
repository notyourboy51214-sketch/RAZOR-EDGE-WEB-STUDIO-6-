import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, IMAGES } from '../data/content';
import { MapPin, Phone, MessageSquare, Clock, ArrowUpRight, Navigation as NavIcon } from 'lucide-react';

interface VisitPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const VisitPage: React.FC<VisitPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="min-h-screen bg-[#F3EFE7] text-[#242321] pt-24 pb-20">
      {/* SECTION 1: HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-[#242321]/15">
        <div className="max-w-4xl">
          <span className="text-xs font-mono tracking-widest text-[#7C2327] uppercase">
            PAGE 09 · PHYSICAL LOCATION & ACCESS
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-9xl font-bold tracking-tighter text-[#171717] mt-2 uppercase leading-[0.88]">
            SECTOR Q.<br />DHA PHASE 2.
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#242321]/80 mt-6 max-w-xl leading-relaxed">
            Razor&apos;s Edge Ltd is situated in the heart of Sector Q, DHA Phase 2, Lahore. Easy access, commercial parking nearby, and a dedicated grooming environment.
          </p>
        </div>
      </section>

      {/* SECTION 2 & 3: LOCATION & OPENING INFORMATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#242321]/15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Address */}
          <div className="bg-white p-8 border border-[#242321]/15 rounded-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#7C2327] uppercase mb-4">
                <MapPin className="w-4 h-4" />
                <span>EXACT ADDRESS</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#171717] mb-2">
                Razor&apos;s Edge Ltd
              </h2>
              <address className="not-italic text-sm font-sans text-[#242321]/80 leading-relaxed space-y-1">
                <p>Sector Q</p>
                <p>DHA Phase 2</p>
                <p>Lahore, Pakistan</p>
              </address>
            </div>
            <div className="pt-6 mt-6 border-t border-[#242321]/10">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-semibold text-[#7C2327] hover:underline flex items-center gap-1"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Contact */}
          <div className="bg-white p-8 border border-[#242321]/15 rounded-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#7C2327] uppercase mb-4">
                <Phone className="w-4 h-4" />
                <span>DIRECT LINE</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#171717] mb-2">
                Telephone & Chat
              </h2>
              <p className="text-sm font-sans text-[#242321]/80 mb-4">
                Speak directly with staff regarding wait times, specific barber availability, or directions.
              </p>
              <p className="font-mono text-base font-semibold text-[#171717]">
                {BUSINESS_INFO.phone}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#242321]/10 flex items-center justify-between text-xs font-mono">
              <a href={BUSINESS_INFO.phoneLink} className="text-[#7C2327] font-semibold hover:underline">
                CALL NOW
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#171717] hover:text-[#7C2327]"
              >
                WHATSAPP
              </a>
            </div>
          </div>

          {/* Card 3: Opening Info */}
          <div className="bg-white p-8 border border-[#242321]/15 rounded-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#7C2327] uppercase mb-4">
                <Clock className="w-4 h-4" />
                <span>OPERATING SCHEDULE</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#171717] mb-2">
                Hours & Timing
              </h2>
              <p className="font-mono text-sm font-semibold text-[#7C2327] mb-2">
                Open · Closes 9 PM
              </p>
              <p className="text-xs font-sans text-[#242321]/70 leading-relaxed">
                Operating information reflected from the Google business listing. Please check with the shop for current chair availability before heading over.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#242321]/10 text-xs font-mono text-[#242321]/60">
              Check with shop for holiday/prayer schedules
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: MAP / DIRECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#242321]/15">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#7C2327] uppercase">
              INTERACTIVE MAP
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#171717] mt-1">
              DIRECTIONS TO SECTOR Q
            </h2>
          </div>
          <a
            href={BUSINESS_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#171717] hover:bg-[#242321] text-[#F3EFE7] px-5 py-2.5 text-xs font-semibold tracking-wider rounded-xs transition-colors shrink-0"
          >
            <NavIcon className="w-3.5 h-3.5 text-[#A7A9A8]" />
            <span>LAUNCH IN GOOGLE MAPS APP</span>
          </a>
        </div>

        {/* Embedded Map Canvas / Realistic Real Map Frame */}
        <div className="aspect-[16/8] sm:aspect-[16/7] w-full bg-[#D8D0C6] rounded-xs border border-[#242321]/20 overflow-hidden relative">
          <iframe
            title="Razor's Edge Ltd Google Map"
            src="https://maps.google.com/maps?q=Razor's%20Edge%20Ltd%20Sector%20Q%20DHA%20Phase%202%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 grayscale contrast-125"
            loading="lazy"
          />
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="py-20 bg-[#171717] text-[#F3EFE7]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs font-mono tracking-widest text-[#7C2327] uppercase">
            WE ARE READY
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-[#F3EFE7] mt-2 mb-6">
            “See you in the chair.”
          </h2>
          <p className="font-sans text-sm text-[#D8D0C6] mb-10 max-w-md mx-auto leading-relaxed">
            Reach out via phone, book a confirmed WhatsApp consultation, or drive over to Sector Q, DHA Phase 2.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={BUSINESS_INFO.phoneLink}
              className="bg-[#242321] hover:bg-[#33312e] text-[#F3EFE7] px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider border border-[#F3EFE7]/20 rounded-xs flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#A7A9A8]" />
              <span>CALL (+92 321 4197477)</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7C2327] hover:bg-[#621c1f] text-[#F3EFE7] px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider rounded-xs flex items-center gap-2 transition-colors shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP</span>
            </a>

            <a
              href={BUSINESS_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-[#F3EFE7]/10 text-[#F3EFE7] px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider border border-[#F3EFE7]/20 rounded-xs flex items-center gap-2 transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#A7A9A8]" />
              <span>DIRECTIONS</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
