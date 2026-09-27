import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, IMAGES } from '../data/content';
import { Calendar, MessageSquare, Star, Check } from 'lucide-react';

interface BeardEditPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (servicePreselect?: string) => void;
}

export const BeardEditPage: React.FC<BeardEditPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="min-h-screen bg-[#F3EFE7] text-[#242321] pt-24 pb-20">
      {/* HERO: THE BEARD */}
      <section className="relative min-h-[70vh] flex flex-col justify-end border-b border-[#242321]/15 overflow-hidden pb-12">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.beardContour}
            alt="Macro cropped beard geometry and razor alignment"
            className="w-full h-full object-cover object-center grayscale contrast-125 opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F3EFE7] via-[#F3EFE7]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-3 text-xs font-mono text-[#7C2327] tracking-widest uppercase mb-3">
            <span>FACIAL ARCHITECTURE</span>
            <span className="text-[#242321]/30">/</span>
            <span>BEARD SPECIFICATION</span>
          </div>

          <h1 className="font-serif text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tighter text-[#171717] uppercase leading-[0.85]">
            THE BEARD
          </h1>

          <p className="font-sans text-base sm:text-xl text-[#242321]/80 max-w-2xl mt-6 leading-relaxed">
            Straight-blade boundary setting, cheekline geometry, and weight distribution designed around your natural jawline structure.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <button
              onClick={() => onOpenBooking('Beard Trim')}
              className="cursor-pointer bg-[#7C2327] hover:bg-[#621c1f] text-[#F3EFE7] px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider rounded-xs flex items-center gap-2 shadow-xs transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK BEARD TRIM</span>
            </button>

            <button
              onClick={() => onOpenBooking('Haircut + Beard')}
              className="cursor-pointer bg-[#171717] hover:bg-[#242321] text-[#F3EFE7] px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider rounded-xs flex items-center gap-2 transition-colors"
            >
              <span>BOOK HAIRCUT + BEARD</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: BEARD TRIM DETAILS */}
      <section className="py-20 sm:py-24 border-b border-[#242321]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono tracking-widest text-[#7C2327] uppercase">
                TREATMENT SPEC 01
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#171717] tracking-tight mt-1 mb-6">
                STANDALONE BEARD TRIM
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#242321]/80 leading-relaxed mb-6">
                A thorough reshape of the facial hair profile. We clean up stray flyaways, align the upper cheekline with single-blade accuracy, balance the mustache weight, and define the neckline above the Adams apple.
              </p>

              <ul className="space-y-3 font-mono text-xs text-[#171717] mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#7C2327]" />
                  <span>Cheekline perimeter razor edge</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#7C2327]" />
                  <span>Under-jaw neckline graduation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#7C2327]" />
                  <span>Bulk reduction without losing jaw presence</span>
                </li>
              </ul>

              <button
                onClick={() => onOpenBooking('Beard Trim')}
                className="cursor-pointer bg-[#171717] hover:bg-[#242321] text-[#F3EFE7] px-6 py-3 text-xs font-semibold tracking-wider rounded-xs transition-colors"
              >
                BOOK THIS SERVICE
              </button>
            </div>

            <div className="lg:col-span-7">
              <div className="aspect-[16/10] bg-[#171717] rounded-xs overflow-hidden border border-[#242321]/20">
                <img
                  src={IMAGES.beardContour}
                  alt="Beard edge geometry and cheek definition"
                  className="w-full h-full object-cover grayscale contrast-125"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HAIRCUT + BEARD SYNCHRONIZATION */}
      <section className="py-20 sm:py-24 border-b border-[#242321]/15 bg-[#D8D0C6]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 lg:order-2">
              <span className="text-xs font-mono tracking-widest text-[#7C2327] uppercase">
                COMBINED HARMONY
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#171717] tracking-tight mt-1 mb-6">
                HAIRCUT + BEARD INTEGRATION
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#242321]/80 leading-relaxed mb-6">
                The most cohesive look is achieved when sideburns transition seamlessly into the top of the beard. We ensure the taper rate matches on both sides of the temple, creating an unbroken continuity from your haircut down through your facial framing.
              </p>

              <div className="p-4 bg-white border border-[#242321]/15 rounded-xs font-mono text-xs text-[#242321]/80 mb-8 space-y-2">
                <div className="flex justify-between border-b border-[#242321]/10 pb-2">
                  <span className="text-[#7C2327]">APPOINTMENT TYPE</span>
                  <span className="font-semibold text-[#171717]">Comprehensive Session</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-[#7C2327]">IDEAL REFRESH CYCLE</span>
                  <span>Every 2–3 Weeks</span>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking('Haircut + Beard')}
                className="cursor-pointer bg-[#7C2327] hover:bg-[#621c1f] text-[#F3EFE7] px-6 py-3 text-xs font-semibold tracking-wider rounded-xs transition-colors"
              >
                REQUEST HAIRCUT + BEARD
              </button>
            </div>

            <div className="lg:col-span-6 lg:order-1">
              <div className="aspect-[4/3] bg-[#171717] rounded-xs overflow-hidden border border-[#242321]/20">
                <img
                  src={IMAGES.barberTools}
                  alt="Barber shears clippers and tools"
                  className="w-full h-full object-cover grayscale contrast-125"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: LONG-TERM REVIEWER STATEMENT */}
      <section className="py-20 border-b border-[#242321]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 bg-white border border-[#242321]/15 rounded-xs text-center">
            <div className="flex items-center justify-center gap-1 text-[#7C2327] mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            <span className="block text-xs font-mono tracking-widest text-[#7C2327] uppercase mb-4">
              GOOGLE REVIEW · VERIFIED 5-YEAR PATRON
            </span>

            <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#171717] leading-relaxed italic max-w-2xl mx-auto mb-6">
              “Reported visiting for approximately 5 years and specifically praised beard trims, haircuts and the fade team, mentioning Usman bhai.”
            </blockquote>

            <div className="pt-6 border-t border-[#242321]/10 text-xs font-mono text-[#242321]/70">
              <span className="font-bold text-[#171717]">MUHAMMAD ZIA-UR-REHMAN</span>
              <span className="mx-2">·</span>
              <span>DHA Phase 2 Resident & Regular</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="py-16 bg-[#171717] text-[#F3EFE7] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F3EFE7] mb-4">
            READY FOR SHARP EDGING?
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[#D8D0C6] mb-8">
            Tell the shop which beard service you need and your preferred time in Sector Q.
          </p>
          <button
            onClick={() => onOpenBooking('Beard Trim')}
            className="cursor-pointer bg-[#7C2327] hover:bg-[#621c1f] text-[#F3EFE7] px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider rounded-xs transition-colors"
          >
            BOOK A BEARD SERVICE
          </button>
        </div>
      </section>
    </div>
  );
};
