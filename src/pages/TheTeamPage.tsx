import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, IMAGES } from '../data/content';
import { MessageSquare, Calendar, UserCheck, Users, Star } from 'lucide-react';

interface TheTeamPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (servicePreselect?: string) => void;
}

export const TheTeamPage: React.FC<TheTeamPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="min-h-screen bg-[#F3EFE7] text-[#242321] pt-24 pb-20">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-[#242321]/15">
        <div className="max-w-3xl">
          <span className="text-xs font-mono tracking-widest text-[#7C2327] uppercase">
            PAGE 06 · AUTHENTIC STAFF REPUTATION
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-[#171717] mt-2 uppercase">
            THE TEAM
          </h1>
          <p className="font-serif italic text-xl sm:text-2xl text-[#171717] mt-4">
            “Meet the people behind the cut.”
          </p>
          <p className="font-sans text-xs sm:text-sm text-[#242321]/70 mt-2 leading-relaxed max-w-xl">
            Our reputation is built upon trained hands and genuine client care in Sector Q, DHA Phase 2. We present our team strictly based on verifiable customer feedback.
          </p>
        </div>
      </section>

      {/* USMAN BHAI SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-[#242321]/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Authentic Customer Citation Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#171717] rounded-xs border border-[#242321]/20 p-8 flex flex-col justify-between text-[#F3EFE7] shadow-xl">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#A7A9A8] mb-6">
                  <span className="text-[#7C2327] font-bold uppercase tracking-widest">CUSTOMER CITATION</span>
                  <div className="flex text-[#7C2327]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#F3EFE7] block mb-3">
                  USMAN BHAI
                </span>
                <p className="font-serif text-lg italic text-[#D8D0C6] leading-relaxed mb-6">
                  “Praised beard trims, haircuts, and the fade team, with special mention of Usman bhai.”
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#A7A9A8] flex items-center justify-between">
                <span className="font-bold text-[#F3EFE7]">Muhammad Zia-ur-Rehman</span>
                <span>5-Year Regular Patron</span>
              </div>
            </div>
          </div>

          {/* Factual Description */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-mono text-[#7C2327] mb-3">
              <Star className="w-4 h-4 fill-current" />
              <span className="uppercase tracking-widest font-semibold">CUSTOMER COMMENDED</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#171717] tracking-tight mb-4">
              USMAN BHAI
            </h2>

            <div className="space-y-4 font-sans text-sm sm:text-base text-[#242321]/80 leading-relaxed">
              <p>
                In the Google review corpus for Razor&apos;s Edge Ltd, long-term patron Muhammad Zia-ur-Rehman—who reported visiting regularly for approximately 5 years—specifically praised the beard trims, haircuts, and the fade team, giving particular honorable mention to Usman bhai.
              </p>
              <p>
                We do not invent elaborate biographies or fabricated credentials. The work speaks through the consistency of client satisfaction in the chair.
              </p>
            </div>

            <div className="p-4 bg-white border border-[#242321]/15 rounded-xs mt-6 mb-8 text-xs font-mono text-[#242321]">
              <span className="font-bold text-[#7C2327] block mb-1">VERIFIED REVIEW CITATION:</span>
              “Praising beard trims, haircuts, and the fade team, mentioning Usman bhai.” — Google Reviews
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onOpenBooking('Fade')}
                className="cursor-pointer bg-[#7C2327] hover:bg-[#621c1f] text-[#F3EFE7] px-6 py-3 text-xs sm:text-sm font-semibold tracking-wider rounded-xs flex items-center gap-2 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK APPOINTMENT</span>
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#242321]/20 hover:border-[#171717] px-6 py-3 text-xs sm:text-sm font-semibold tracking-wider rounded-xs flex items-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#7C2327]" />
                <span>ASK ABOUT USMAN BHAI&apos;S AVAILABILITY</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* THE FADE TEAM (Collective Language) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-[#242321]/15 bg-[#D8D0C6]/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-mono tracking-widest text-[#7C2327] uppercase">
              COLLECTIVE CRAFT
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#171717] tracking-tight mt-1 mb-4">
              THE FADE TEAM
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#242321]/80 leading-relaxed mb-6">
              Our barbers work collectively under rigorous standards of clipper graduation, straight-edge razor hygiene, and client communication. 
            </p>
            <p className="font-sans text-sm sm:text-base text-[#242321]/80 leading-relaxed mb-6">
              Whether you are requesting a high skin fade, a classic scissor contour, or a structured beard realignment, the staff brings cooperative handling and patience to every chair.
            </p>

            <div className="grid grid-cols-2 gap-4 text-xs font-mono text-[#171717] pt-4 border-t border-[#242321]/15">
              <div>
                <span className="text-[#7C2327] font-bold block">492 REVIEWS</span>
                <span className="text-[#242321]/70">Consistently praised staff</span>
              </div>
              <div>
                <span className="text-[#7C2327] font-bold block">FADE DISCIPLINE</span>
                <span className="text-[#242321]/70">86 review keyword tags</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/3] bg-[#171717] rounded-xs overflow-hidden border border-[#242321]/20">
              <img
                src={IMAGES.cutCraft}
                alt="Hands of the fade team working with comb and shears"
                className="w-full h-full object-cover grayscale contrast-125"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#171717] text-[#F3EFE7] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F3EFE7] mb-4">
            ASK ABOUT YOUR CUT
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[#D8D0C6] mb-8">
            Send a quick inquiry directly to our team in Sector Q, DHA Phase 2 to verify current availability or ask questions about specific styles.
          </p>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#7C2327] hover:bg-[#621c1f] text-[#F3EFE7] px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider rounded-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>SEND WHATSAPP MESSAGE (+92 321 4197477)</span>
          </a>
        </div>
      </section>
    </div>
  );
};
