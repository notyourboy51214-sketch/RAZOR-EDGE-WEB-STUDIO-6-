import React from 'react';
import { PageId, ServiceType } from '../types';
import { SERVICES_INDEX, BUSINESS_INFO } from '../data/content';
import { Calendar, ArrowRight, Check } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (servicePreselect?: ServiceType | string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="min-h-screen bg-[#F3EFE7] text-[#242321] pt-24 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-[#242321]/15">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#7C2327] uppercase">
              PAGE 02 · EDITORIAL CATALOGUE
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-[#171717] mt-2 uppercase">
              SERVICES
            </h1>
          </div>
          <div className="max-w-md text-xs sm:text-sm font-sans text-[#242321]/70 leading-relaxed">
            <p>
              Carefully calibrated grooming services verified directly from our Sector Q, DHA Phase 2 operation. Focused on haircuts, precision fades, and sculpted beard profiles.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Service Index (Not a generic card grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-24">
          {SERVICES_INDEX.map((service, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <article
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center border-b border-[#242321]/15 pb-20 last:border-b-0"
              >
                {/* Visual Image Block */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="aspect-[4/3] bg-[#171717] relative overflow-hidden rounded-xs border border-[#242321]/20 group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-[#171717]/90 text-[#F3EFE7] px-3 py-1 font-mono text-xs border border-[#F3EFE7]/20">
                      INDEX {service.number}
                    </div>
                  </div>
                </div>

                {/* Editorial Details Block */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-3 text-xs font-mono text-[#7C2327] tracking-widest uppercase mb-3">
                    <span className="font-bold text-sm">{service.number}</span>
                    <span className="text-[#242321]/30">/</span>
                    <span>VERIFIED SERVICE</span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#171717] tracking-tight mb-3">
                    {service.title}
                  </h2>

                  <p className="font-serif italic text-base sm:text-lg text-[#7C2327] mb-5">
                    {service.tagline}
                  </p>

                  <p className="font-sans text-sm sm:text-base text-[#242321]/80 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Focus Details List (Clean unboxed typography) */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-[#242321]/10">
                    <span className="block text-[11px] font-mono tracking-widest text-[#242321]/60 uppercase">
                      TECHNIQUE HIGHLIGHTS
                    </span>
                    <ul className="space-y-2 text-xs font-mono text-[#171717]">
                      {service.focusDetails.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#7C2327]" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onOpenBooking(service.id)}
                      className="cursor-pointer bg-[#7C2327] hover:bg-[#621c1f] text-[#F3EFE7] px-6 py-3 text-xs sm:text-sm font-semibold tracking-wider rounded-xs flex items-center gap-2 transition-colors shadow-xs"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>BOOK THIS</span>
                    </button>

                    {service.id === 'Fade' && (
                      <button
                        onClick={() => onNavigate('fade-room')}
                        className="cursor-pointer text-xs font-mono tracking-wider font-semibold text-[#171717] hover:text-[#7C2327] flex items-center gap-1.5 py-3 transition-colors"
                      >
                        <span>ENTER FADE ROOM</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}

                    {service.id === 'Beard Trim' && (
                      <button
                        onClick={() => onNavigate('beard-edit')}
                        className="cursor-pointer text-xs font-mono tracking-wider font-semibold text-[#171717] hover:text-[#7C2327] flex items-center gap-1.5 py-3 transition-colors"
                      >
                        <span>VIEW BEARD EDIT</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Pricing / Booking Integrity Note */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="p-6 bg-[#D8D0C6]/30 border border-[#242321]/15 rounded-xs text-xs font-mono text-[#242321]/80 leading-relaxed">
          <span className="font-bold text-[#7C2327] block mb-1 uppercase tracking-wider">
            TRANSPARENCY NOTE
          </span>
          To avoid quoting unverified fees, exact pricing is confirmed alongside scheduling directly over WhatsApp with our staff at Sector Q, DHA Phase 2 (+92 321 4197477).
        </div>
      </section>
    </div>
  );
};
