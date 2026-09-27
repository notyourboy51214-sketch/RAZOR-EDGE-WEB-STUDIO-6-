import React, { useState, useRef } from 'react';
import { IMAGES } from '../data/content';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CraftStep {
  number: string;
  title: string;
  subtitle: string;
  sentence: string;
  image: string;
  detail: string;
}

const STEPS: CraftStep[] = [
  {
    number: "01",
    title: "THE LINE",
    subtitle: "PERIMETER ARCHITECTURE",
    sentence: "Establishing the baseline boundary with clean razor edges around the temple, ear arch, and nape.",
    image: IMAGES.barberTools,
    detail: "Precision edge graduation"
  },
  {
    number: "02",
    title: "THE BLEND",
    subtitle: "GRADIENT TRANSITION",
    sentence: "Fading skin tones into hair density without dark bands, stepping through micro-guard clipper discipline.",
    image: IMAGES.fadeDetail,
    detail: "86 review mentions on listing"
  },
  {
    number: "03",
    title: "THE SHAPE",
    subtitle: "WEIGHT & BALANCE",
    sentence: "Hand scissor sculpting across the crown and parietal ridge to match head anatomy and natural texture.",
    image: IMAGES.cutCraft,
    detail: "Bespoke scissor control"
  },
  {
    number: "04",
    title: "THE FINISH",
    subtitle: "BEARD & POLISH",
    sentence: "Sculpting cheeklines, straight-blade neck cleanup, and hot towel alignment before stepping out.",
    image: IMAGES.beardContour,
    detail: "Symmetrical finish"
  }
];

export const HorizontalPinnedSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextStep = () => {
    setActiveIndex((prev) => (prev < STEPS.length - 1 ? prev + 1 : prev));
  };

  const prevStep = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section className="bg-[#0D0D0D] text-[#F3EFE7] py-20 lg:py-28 overflow-hidden relative border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/15 pb-8">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#8E2429] uppercase">
            SIGNATURE CRAFT SEQUENCE
          </span>
          <h3 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#FFFFFF] mt-1 tracking-tight">
            THE CUT AS CRAFT.
          </h3>
        </div>

        {/* Step Indicators & Manual Controls */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            {STEPS.map((step, idx) => (
              <button
                key={step.number}
                onClick={() => setActiveIndex(idx)}
                className={`cursor-pointer px-3 py-1 font-mono text-xs tracking-wider transition-all border ${
                  activeIndex === idx
                    ? 'bg-[#F4F0E8] text-[#111111] font-bold border-[#F4F0E8] shadow-xs'
                    : 'bg-[#171717] text-[#A7A9A8] border-white/15 hover:border-white/40'
                }`}
                aria-label={`Jump to step ${step.number}: ${step.title}`}
              >
                {step.number}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevStep}
              disabled={activeIndex === 0}
              className="cursor-pointer p-2 border border-white/20 hover:border-white/60 bg-[#171717] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous step"
            >
              <ArrowLeft className="w-4 h-4 text-[#F3EFE7]" />
            </button>
            <button
              onClick={nextStep}
              disabled={activeIndex === STEPS.length - 1}
              className="cursor-pointer p-2 border border-white/20 hover:border-white/60 bg-[#171717] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Next step"
            >
              <ArrowRight className="w-4 h-4 text-[#F3EFE7]" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Panels Reel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={containerRef}
          className="relative transition-transform duration-500 ease-out"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#171717] p-6 sm:p-10 border border-white/15 rounded-xs">
            {/* Visual Column */}
            <div className="lg:col-span-7 relative overflow-hidden group">
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-[#0D0D0D] relative overflow-hidden rounded-xs border border-white/10">
                <img
                  src={STEPS[activeIndex].image}
                  alt={STEPS[activeIndex].title}
                  className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#D8D0C6] font-mono">
                  <span>STAGE {STEPS[activeIndex].number} OF 04</span>
                  <span className="text-[#A7A9A8]">{STEPS[activeIndex].detail}</span>
                </div>
              </div>
            </div>

            {/* Editorial Content Column - High-Contrast Luminous Light Ivory Panel */}
            <div className="lg:col-span-5 bg-[#FAF7F2] text-[#111111] p-6 sm:p-8 rounded-xs border border-white/20 shadow-xl flex flex-col justify-between py-6">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-[#8E2429] tracking-widest uppercase mb-4">
                  <span className="font-bold text-sm">
                    {STEPS[activeIndex].number}
                  </span>
                  <span className="text-black/30">/</span>
                  <span className="font-semibold text-[#111111]">{STEPS[activeIndex].subtitle}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight leading-none mb-5">
                  {STEPS[activeIndex].title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-[#2E2D2B] leading-relaxed mb-6">
                  {STEPS[activeIndex].sentence}
                </p>
              </div>

              <div className="pt-4 border-t border-black/10 flex items-center justify-between text-xs font-mono text-[#666666]">
                <span className="font-bold text-[#111111]">RAZOR&apos;S EDGE LTD</span>
                <span>DHA PHASE 2 · LAHORE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Mini Timeline */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 mt-6">
          {STEPS.map((s, idx) => (
            <button
              key={s.number}
              onClick={() => setActiveIndex(idx)}
              className={`cursor-pointer text-left p-3 border transition-all rounded-xs ${
                activeIndex === idx
                  ? 'border-white/50 bg-[#F4F0E8] text-[#111111] shadow-xs'
                  : 'border-white/10 hover:border-white/30 bg-[#171717] text-[#D8D0C6]'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                <span className={activeIndex === idx ? 'text-[#8E2429] font-bold' : 'text-[#A7A9A8]'}>
                  {s.number}
                </span>
                <span className={`text-[10px] hidden sm:inline ${activeIndex === idx ? 'text-[#171717]' : 'text-[#A7A9A8]'}`}>
                  STAGE
                </span>
              </div>
              <p className={`font-serif text-sm truncate ${activeIndex === idx ? 'text-[#111111] font-bold' : 'text-[#D8D0C6]'}`}>
                {s.title}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
