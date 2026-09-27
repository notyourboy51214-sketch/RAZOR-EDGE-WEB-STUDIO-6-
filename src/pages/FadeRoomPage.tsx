import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, IMAGES } from '../data/content';
import { Calendar, MessageSquare, Check, ArrowRight } from 'lucide-react';

interface FadeRoomPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (servicePreselect?: string) => void;
}

const FADE_REFERENCES = [
  {
    type: "LOW",
    title: "LOW FADE REFERENCE",
    description: "Begins just above the ear and neckline. Subtle skin exposure keeping greater density around the temples and parietal ridge.",
    tone: "Conservative & versatile",
  },
  {
    type: "MID",
    title: "MID FADE REFERENCE",
    description: "Begins right around the temple and ear line. Balanced tonal transition establishing sharp contrast while leaving length on top.",
    tone: "Standard balanced profile",
  },
  {
    type: "HIGH",
    title: "HIGH FADE REFERENCE",
    description: "Clears skin up to the crown perimeter. High-contrast gradient emphasizing top texture, crop lines, or sleek pompadours.",
    tone: "Sharp & architectural",
  },
];

export const FadeRoomPage: React.FC<FadeRoomPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [selectedPreference, setSelectedPreference] = useState<'Fade' | 'Classic haircut' | 'Not sure'>('Fade');

  const handleStartConsultation = () => {
    const serviceTarget = selectedPreference === 'Fade' ? 'Fade' : selectedPreference === 'Classic haircut' ? 'Haircut' : 'Other';
    onOpenBooking(serviceTarget);
  };

  return (
    <div className="min-h-screen bg-[#F3EFE7] text-[#242321] pt-24 pb-20">
      {/* HERO: THE FADE */}
      <section className="relative min-h-[75vh] flex flex-col justify-end border-b border-[#242321]/15 overflow-hidden pb-12">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.fadeDetail}
            alt="Macro skin fade gradient close-up"
            className="w-full h-full object-cover object-center grayscale contrast-125 opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F3EFE7] via-[#F3EFE7]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-3 text-xs font-mono text-[#7C2327] tracking-widest uppercase mb-3">
            <span>SPECIALTY ARCHIVE</span>
            <span className="text-[#242321]/30">/</span>
            <span>NICHE FOCUS</span>
          </div>

          <h1 className="font-serif text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tighter text-[#171717] uppercase leading-[0.85]">
            THE FADE
          </h1>

          <p className="font-sans text-base sm:text-xl text-[#242321]/80 max-w-2xl mt-6 leading-relaxed">
            The deliberate graduation from bare skin to crown volume. Tonal shading calibrated against bone structure, temple angle, and head geometry.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <button
              onClick={() => onOpenBooking('Fade')}
              className="cursor-pointer bg-[#7C2327] hover:bg-[#621c1f] text-[#F3EFE7] px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider rounded-xs flex items-center gap-2 shadow-xs transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK A FADE SLOT</span>
            </button>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#242321]/20 hover:border-[#171717] px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider rounded-xs flex items-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#7C2327]" />
              <span>CONSULT OVER WHATSAPP</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: FADE REVIEW SIGNAL */}
      <section className="py-16 border-b border-[#242321]/15 bg-[#D8D0C6]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex items-baseline gap-4">
              <span className="font-serif text-6xl sm:text-7xl font-bold text-[#7C2327]">
                86
              </span>
              <div>
                <span className="block text-xs font-mono tracking-widest uppercase text-[#171717]">
                  REVIEW MENTIONS
                </span>
                <span className="text-xs font-mono text-[#242321]/60">
                  Google Listing Data
                </span>
              </div>
            </div>

            <div className="md:col-span-8">
              <p className="font-serif text-lg sm:text-xl text-[#171717] leading-snug italic">
                “Fade appears as a prominent review topic in the supplied Google listing.”
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#242321]/70 mt-2">
                Customer feedback specifically references the precision of our fade work, clean skin tapers, and trained barber staff handling complex head gradients in Sector Q, DHA Phase 2.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — FADE VISUAL REFERENCE LIBRARY */}
      <section className="py-20 sm:py-24 border-b border-[#242321]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-mono tracking-widest text-[#7C2327] uppercase">
              GENERAL STYLE REFERENCES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#171717] tracking-tight mt-1">
              FADE GRADIENTS: LOW · MID · HIGH
            </h2>
            <p className="text-xs sm:text-sm font-sans text-[#242321]/70 mt-2 max-w-xl">
              Presented as general style references to assist consultation. Your barber will tailor the height based on your natural hairline, crown cowlick, and skull contour.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FADE_REFERENCES.map((ref) => (
              <div
                key={ref.type}
                className="bg-white border border-[#242321]/15 p-6 rounded-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#7C2327] mb-4">
                    <span>REFERENCE SPEC</span>
                    <span>{ref.type} TAPER</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#171717] mb-2">
                    {ref.title}
                  </h3>

                  <p className="text-xs font-mono text-[#7C2327] mb-4">
                    Tone: {ref.tone}
                  </p>

                  <p className="text-xs sm:text-sm text-[#242321]/80 leading-relaxed">
                    {ref.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#242321]/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#242321]/60">TAILORED IN CHAIR</span>
                  <button
                    onClick={() => onOpenBooking(`Fade (${ref.type} Fade)`)}
                    className="cursor-pointer text-[#7C2327] font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>SELECT {ref.type}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — CONSULTATION SELECTOR */}
      <section className="py-20 bg-[#171717] text-[#F3EFE7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-mono tracking-widest text-[#7C2327] uppercase">
              CONSULTATION SELECTOR
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F3EFE7] tracking-tight mt-1">
              “WHAT ARE YOU LOOKING FOR?”
            </h2>
            <p className="text-xs sm:text-sm font-sans text-[#D8D0C6] mt-2">
              Select your intention and generate a direct WhatsApp message to the barber staff.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {(['Fade', 'Classic haircut', 'Not sure'] as const).map((opt) => (
              <button
                key={opt}
                onClick={() => setSelectedPreference(opt)}
                className={`cursor-pointer p-4 border text-center transition-all ${
                  selectedPreference === opt
                    ? 'bg-[#7C2327] text-[#F3EFE7] border-[#7C2327]'
                    : 'bg-[#242321] text-[#D8D0C6] border-[#F3EFE7]/15 hover:border-[#F3EFE7]/40'
                }`}
              >
                <span className="font-serif text-lg block">{opt}</span>
                <span className="text-[11px] font-mono opacity-80 mt-1 block">
                  {opt === 'Fade'
                    ? 'Skin, taper or shadow blend'
                    : opt === 'Classic haircut'
                    ? 'Scissors & natural neckline'
                    : 'Barber recommendation in chair'}
                </span>
              </button>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={handleStartConsultation}
              className="cursor-pointer bg-[#F3EFE7] hover:bg-white text-[#171717] px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider rounded-xs inline-flex items-center gap-2 transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#7C2327]" />
              <span>CONTINUE WITH {selectedPreference.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
