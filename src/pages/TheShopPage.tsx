import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, IMAGES } from '../data/content';
import { MapPin, Phone, MessageSquare, ArrowUpRight, Clock } from 'lucide-react';

interface TheShopPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const TheShopPage: React.FC<TheShopPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="min-h-screen bg-[#F3EFE7] text-[#242321] pt-24 pb-20">
      {/* SECTION 1: HEADER & EDITORIAL LEAD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-[#242321]/15">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#7C2327] uppercase">
              PAGE 05 · THE SPACE & ENVIRONMENT
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-[#171717] mt-2 uppercase">
              THE SHOP
            </h1>
          </div>
          <div className="max-w-md text-xs sm:text-sm font-sans text-[#242321]/70 leading-relaxed">
            <p className="font-serif italic text-base text-[#171717] mb-2">
              “The place behind the cut.”
            </p>
            <p>
              Located in Sector Q, DHA Phase 2, Lahore. An atmosphere designed around precision cuts, clean mirrored workstations, and focused grooming.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: UNEVEN MAGAZINE-GRID GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#242321]/15">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Main Large Visual */}
          <div className="md:col-span-8 bg-[#171717] rounded-xs overflow-hidden border border-[#242321]/20 relative group">
            <div className="aspect-[16/10] w-full">
              <img
                src={IMAGES.shopInterior}
                alt="Inside Razor's Edge Ltd barber stations in DHA Phase 2"
                className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-[#171717]/90 text-[#F3EFE7] px-3 py-1 font-mono text-xs border border-[#F3EFE7]/20">
              INSIDE / WORKSTATIONS & MIRROR REFLECTIONS
            </div>
          </div>

          {/* Secondary Stacked Visual */}
          <div className="md:col-span-4 flex flex-col justify-between gap-6">
            <div className="bg-[#171717] rounded-xs overflow-hidden border border-[#242321]/20 relative group flex-1">
              <div className="aspect-[4/3] w-full h-full">
                <img
                  src={IMAGES.barberTools}
                  alt="Precision shears clippers and tools on work surface"
                  className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute bottom-3 left-3 bg-[#171717]/90 text-[#F3EFE7] px-2.5 py-1 font-mono text-[10px] border border-[#F3EFE7]/20">
                TOOLS / CHROME & BLADE DISCIPLINE
              </div>
            </div>

            <div className="p-6 bg-white border border-[#242321]/15 rounded-xs flex flex-col justify-between">
              <span className="text-xs font-mono text-[#7C2327] tracking-wider uppercase">
                ATMOSPHERE NOTE
              </span>
              <p className="font-serif text-lg text-[#171717] italic my-2">
                “Best environment in town for haircut like fade.”
              </p>
              <span className="text-[11px] font-mono text-[#242321]/60">
                Visitor-provided Google review remark
              </span>
            </div>
          </div>

          {/* Third Row Offset Cards */}
          <div className="md:col-span-5 bg-[#171717] rounded-xs overflow-hidden border border-[#242321]/20 relative group">
            <div className="aspect-[4/3] w-full">
              <img
                src={IMAGES.cutCraft}
                alt="Hands at work with shears and comb"
                className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-3 left-3 bg-[#171717]/90 text-[#F3EFE7] px-2.5 py-1 font-mono text-[10px] border border-[#F3EFE7]/20">
              CRAFT / HANDS AT WORK
            </div>
          </div>

          <div className="md:col-span-7 bg-[#171717] rounded-xs overflow-hidden border border-[#242321]/20 relative group">
            <div className="aspect-[16/9] w-full">
              <img
                src={IMAGES.fadeDetail}
                alt="Clean fade finish on skin"
                className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-3 left-3 bg-[#171717]/90 text-[#F3EFE7] px-2.5 py-1 font-mono text-[10px] border border-[#F3EFE7]/20">
              FINISH / TEMPLE BLEND
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ENVIRONMENT (Strictly visually supported statements) */}
      <section className="py-20 sm:py-24 border-b border-[#242321]/15 bg-[#D8D0C6]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono tracking-widest text-[#7C2327] uppercase">
              ENVIRONMENT & STANDARDS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#171717] tracking-tight mt-1">
              THE PHYSICAL SPACE
            </h2>
            <p className="text-xs sm:text-sm font-sans text-[#242321]/70 mt-2">
              Based solely on verifiable shop listing and customer observations in Sector Q, DHA Phase 2.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-[#242321]/15 rounded-xs">
              <span className="font-mono text-xs text-[#7C2327] block mb-2">01 / STATIONS</span>
              <h3 className="font-serif text-xl font-bold text-[#171717] mb-2">
                Focused Barbering Stations
              </h3>
              <p className="text-xs sm:text-sm text-[#242321]/70 leading-relaxed">
                Clean mirrored work bays equipped with dedicated clippers, sanitize pots, and professional lighting for accurate gradient inspection.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#242321]/15 rounded-xs">
              <span className="font-mono text-xs text-[#7C2327] block mb-2">02 / HANDLING</span>
              <h3 className="font-serif text-xl font-bold text-[#171717] mb-2">
                Trained & Cooperative Staff
              </h3>
              <p className="text-xs sm:text-sm text-[#242321]/70 leading-relaxed">
                Highlighted repeatedly across 492 customer reviews for good client handling, patience during consultations, and attentiveness to detail.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#242321]/15 rounded-xs">
              <span className="font-mono text-xs text-[#7C2327] block mb-2">03 / SCHEDULE</span>
              <h3 className="font-serif text-xl font-bold text-[#171717] mb-2">
                Listing Operating Hours
              </h3>
              <p className="text-xs sm:text-sm text-[#242321]/70 leading-relaxed">
                Currently open with standard day schedule closing at 9 PM. We recommend sending a quick WhatsApp message to check current chair availability before traveling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: LOCATION & DIRECTIONS CTA */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#171717] text-[#F3EFE7] p-8 sm:p-14 rounded-xs border border-[#242321] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#7C2327] uppercase">
                HOW TO REACH US
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F3EFE7] tracking-tight mt-1 mb-3">
                SECTOR Q, DHA PHASE 2, LAHORE
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#D8D0C6] max-w-xl leading-relaxed">
                Convenient parking and central access in DHA Phase 2. Feel free to call directly at {BUSINESS_INFO.phone} for immediate directions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#7C2327] hover:bg-[#621c1f] text-[#F3EFE7] px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider rounded-xs flex items-center gap-2 transition-colors shadow-xs"
              >
                <MapPin className="w-4 h-4" />
                <span>OPEN IN GOOGLE MAPS</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="border border-[#F3EFE7]/25 hover:border-[#F3EFE7] text-[#F3EFE7] px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider rounded-xs transition-colors"
              >
                <span>BOOK A SLOT</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
