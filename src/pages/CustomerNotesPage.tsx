import React, { useState } from 'react';
import { PageId } from '../types';
import { REVIEWS_DATA, BUSINESS_INFO } from '../data/content';
import { Star, MessageSquare, AlertCircle, Clock, ShieldCheck } from 'lucide-react';

interface CustomerNotesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

type FilterCategory = 'all' | 'fade' | 'haircut' | 'beard' | 'staff' | 'experience';

export const CustomerNotesPage: React.FC<CustomerNotesPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [filter, setFilter] = useState<FilterCategory>('all');

  const filteredReviews = REVIEWS_DATA.filter((r) => {
    if (filter === 'all') return true;
    if (filter === 'fade' && (r.category === 'fade' || r.text.toLowerCase().includes('fade'))) return true;
    if (filter === 'haircut' && (r.category === 'haircut' || r.text.toLowerCase().includes('haircut'))) return true;
    if (filter === 'beard' && (r.category === 'beard' || r.text.toLowerCase().includes('beard'))) return true;
    if (filter === 'staff' && (r.category === 'staff' || r.text.toLowerCase().includes('staff') || r.text.toLowerCase().includes('handling'))) return true;
    if (filter === 'experience' && (r.category === 'experience' || r.isCritical)) return true;
    return false;
  });

  return (
    <div className="min-h-screen bg-[#F3EFE7] text-[#242321] pt-24 pb-20">
      {/* SECTION 1: HEADER & SCORE OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-[#242321]/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono tracking-widest text-[#7C2327] uppercase">
              PAGE 07 · VERIFIED GOOGLE PROOF
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-[#171717] mt-2 uppercase">
              CUSTOMER NOTES
            </h1>
            <p className="text-xs sm:text-sm font-sans text-[#242321]/70 mt-3 max-w-xl leading-relaxed">
              Transparent, unedited customer feedback from our official Google profile in Sector Q, DHA Phase 2. We present both longstanding praises and constructive notes honestly.
            </p>
          </div>

          <div className="lg:col-span-4 flex items-baseline gap-4 bg-white p-6 border border-[#242321]/15 rounded-xs">
            <span className="font-serif text-6xl sm:text-7xl font-bold text-[#171717]">
              {BUSINESS_INFO.googleRating}
            </span>
            <div>
              <div className="flex text-[#7C2327] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-mono font-semibold text-[#171717] uppercase block">
                {BUSINESS_INFO.googleReviewCount} GOOGLE REVIEWS
              </span>
              <span className="text-[11px] font-sans text-[#242321]/60">
                Sector Q · DHA Phase 2, Lahore
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: REVIEW TOPIC NAVIGATION (Interactive Functional Buttons) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-[#242321]/15">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-mono text-[#242321]/60 uppercase mr-2 shrink-0">
            FILTER BY TOPIC:
          </span>
          {(['all', 'fade', 'haircut', 'beard', 'staff', 'experience'] as FilterCategory[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`cursor-pointer px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-xs transition-colors shrink-0 ${
                filter === cat
                  ? 'bg-[#171717] text-[#F3EFE7]'
                  : 'bg-white text-[#242321] border border-[#242321]/20 hover:border-[#171717]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* SECTION 3 & 4: FEEDBACK GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className={`p-6 sm:p-8 rounded-xs border flex flex-col justify-between ${
                rev.isCritical
                  ? 'bg-[#D8D0C6]/40 border-[#7C2327]/40'
                  : 'bg-white border-[#242321]/15'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-4">
                  <span
                    className={
                      rev.isCritical ? 'text-[#7C2327] font-semibold' : 'text-[#7C2327]'
                    }
                  >
                    {rev.isCritical ? 'RECENT CUSTOMER FEEDBACK' : rev.source}
                  </span>
                  <div className="flex text-[#7C2327]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <blockquote
                  className={`font-serif text-lg sm:text-xl text-[#171717] leading-relaxed mb-6 ${
                    rev.isCritical ? 'italic' : ''
                  }`}
                >
                  {rev.text}
                </blockquote>

                {/* Practical UX Improvement for Critical Feedback */}
                {rev.isCritical && (
                  <div className="mt-4 p-4 bg-white/90 border border-[#7C2327]/30 rounded-xs">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#7C2327] font-semibold mb-1">
                      <Clock className="w-4 h-4 shrink-0" />
                      <span>RECOMMENDED ADVICE FOR PATRONS:</span>
                    </div>
                    <p className="text-xs font-sans text-[#242321]/80 leading-relaxed">
                      “Want to avoid uncertainty about availability? Message the shop before heading over.”
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4 mt-6 border-t border-[#242321]/10 flex items-center justify-between text-xs font-mono text-[#242321]/70">
                <span className="font-bold text-[#171717]">{rev.author}</span>
                <span>{rev.period || 'Google Verified'}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: PRACTICAL AVAILABILITY CALLOUT & CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-[#171717] text-[#F3EFE7] p-8 sm:p-12 rounded-xs border border-[#242321] text-center">
          <span className="text-xs font-mono tracking-widest text-[#7C2327] uppercase">
            REDUCING UNCERTAINTY
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#F3EFE7] mt-1 mb-4">
            ASK ABOUT LIVE AVAILABILITY
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[#D8D0C6] max-w-lg mx-auto mb-8 leading-relaxed">
            Avoid walk-in queues or unexpected breaks by contacting the shop directly. A quick WhatsApp message lets the barber team tell you exactly when a chair is open.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7C2327] hover:bg-[#621c1f] text-[#F3EFE7] px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider rounded-xs flex items-center gap-2 transition-colors shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>MESSAGE ON WHATSAPP (+92 321 4197477)</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="border border-[#F3EFE7]/25 hover:border-[#F3EFE7] text-[#F3EFE7] px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider rounded-xs transition-colors"
            >
              <span>PREPARE BOOKING REQUEST</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
