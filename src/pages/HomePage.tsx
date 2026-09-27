import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, IMAGES } from '../data/content';
import { HorizontalPinnedSection } from '../components/HorizontalPinnedSection';
import { ArrowRight, MapPin, MessageSquare, Calendar, ChevronRight, Star } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (servicePreselect?: string) => void;
}

const HERO_STATES = [
  {
    num: "01",
    tag: "THE FADE",
    lead: "FADE",
    sub: "Clean skin-to-temple transition & tapered neckline",
    image: IMAGES.fadeDetail,
    service: "Fade",
  },
  {
    num: "02",
    tag: "THE BEARD",
    lead: "BEARD",
    sub: "Geometric jawline sculpting & razor-sharp perimeter",
    image: IMAGES.beardContour,
    service: "Beard Trim",
  },
  {
    num: "03",
    tag: "THE CUT",
    lead: "CUT",
    sub: "Scissor balance calibrated to head contours and density",
    image: IMAGES.cutCraft,
    service: "Haircut",
  },
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_STATES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeHero = HERO_STATES[heroIndex];

  return (
    <div className="min-h-screen bg-[#F3EFE7] text-[#242321]">
      {/* SECTION 1 — CAROUSEL HERO */}
      <section className="relative min-h-[90vh] lg:min-h-screen pt-24 pb-16 flex flex-col justify-between border-b border-[#242321]/15 overflow-hidden">
        {/* Background Visual Layer */}
        <div className="absolute inset-0 z-0">
          <img
            key={activeHero.num}
            src={activeHero.image}
            alt={activeHero.lead}
            className="w-full h-full object-cover object-center grayscale contrast-125 transition-opacity duration-1000 opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F3EFE7] via-[#F3EFE7]/80 to-transparent" />
        </div>

        {/* Hero Top Context */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#242321]/15 pb-4 gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#7C2327]">
              RAZOR&apos;S EDGE LTD
            </span>
            <span className="font-mono text-xs text-[#242321]/70">
              SECTOR Q · DHA PHASE 2 · LAHORE
            </span>
          </div>
        </div>

        {/* Hero Central Dominant Typography */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-xs font-mono text-[#7C2327] tracking-widest uppercase mb-3">
              <span>{activeHero.num}</span>
              <span className="text-[#242321]/40">/</span>
              <span>{activeHero.tag}</span>
            </div>

            <h1 className="font-serif text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tighter text-[#171717] leading-[0.85] uppercase">
              {activeHero.lead}
            </h1>

            <p className="font-sans text-base sm:text-xl text-[#242321]/80 max-w-xl mt-6 font-normal leading-relaxed">
              {activeHero.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button
                onClick={() => onOpenBooking(activeHero.service)}
                className="cursor-pointer bg-[#7C2327] hover:bg-[#621c1f] text-[#F3EFE7] px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider rounded-xs flex items-center gap-2 shadow-xs transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK A SLOT</span>
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent hover:bg-[#242321]/5 text-[#242321] px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider border border-[#242321]/25 rounded-xs flex items-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#7C2327]" />
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Bottom Switcher */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-3 border-t border-[#242321]/20 pt-4">
            {HERO_STATES.map((state, idx) => (
              <button
                key={state.num}
                onClick={() => setHeroIndex(idx)}
                className={`cursor-pointer text-left pb-2 pr-2 transition-all ${
                  heroIndex === idx
                    ? 'border-t-2 border-[#7C2327] -mt-[18px]'
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                <span className="block font-mono text-[10px] sm:text-xs text-[#7C2327]">
                  {state.num}
                </span>
                <span className="font-serif text-sm sm:text-base font-semibold text-[#171717] uppercase">
                  {state.lead}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — REPUTATION */}
      <section className="py-16 sm:py-20 border-b border-[#242321]/15 bg-[#F3EFE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
            {/* Editorial Score */}
            <div className="lg:col-span-4 flex items-baseline gap-4">
              <span className="font-serif text-7xl sm:text-8xl font-normal text-[#171717] tracking-tight">
                4.8
              </span>
              <div>
                <span className="block text-xs font-mono tracking-widest text-[#7C2327] uppercase">
                  GOOGLE REVIEWS
                </span>
                <span className="text-sm font-sans font-medium text-[#242321]/80">
                  492 Verified Reviews
                </span>
              </div>
            </div>

            {/* Horizontal Review Themes Bar (Zero-Pills Discipline) */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#242321]/50 mb-2">
                VERIFIED REVIEW THEMES IN SUPPLIED LISTING
              </span>
              <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm font-mono tracking-wider text-[#171717] border-y border-[#242321]/15 py-3">
                <span className="font-semibold text-[#7C2327]">FADE</span>
                <span className="text-[#242321]/30">/</span>
                <span className="font-semibold text-[#171717]">FADE HAIRCUT</span>
                <span className="text-[#242321]/30">/</span>
                <span className="font-semibold text-[#171717]">TRAINED STAFF</span>
                <span className="text-[#242321]/30">/</span>
                <span className="font-semibold text-[#171717]">COOPERATIVE STAFF</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE SIGNATURE CUT */}
      <section className="py-20 sm:py-28 border-b border-[#242321]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Crop */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/3] bg-[#171717] overflow-hidden rounded-xs border border-[#242321]/20">
                <img
                  src={IMAGES.fadeDetail}
                  alt="Precision fade detail close-up"
                  className="w-full h-full object-cover grayscale contrast-125"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 hidden sm:block bg-[#171717] text-[#F3EFE7] p-4 max-w-xs text-xs font-mono border border-[#F3EFE7]/20">
                <span className="text-[#7C2327] block font-bold mb-1">CRAFT DISCIPLINE</span>
                Close-crop detail of temple graduation and skin fade transition.
              </div>
            </div>

            {/* Editorial Copy */}
            <div className="lg:col-span-6">
              <span className="text-xs font-mono tracking-widest text-[#7C2327] uppercase">
                THE CRAFT
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#171717] tracking-tight mt-2 mb-6">
                “Precision lives in the details.”
              </h2>

              <div className="space-y-4 font-sans text-sm sm:text-base text-[#242321]/80 leading-relaxed">
                <p>
                  A quality haircut is not an accident of speed. It begins with analyzing head contour, growth patterns, and natural weight lines before shears or clippers make contact.
                </p>
                <p>
                  At Razor&apos;s Edge Ltd in DHA Phase 2, our team focuses on clean perimeters, gradual fade transitions from skin to scalp, and crisp beard edging that frames your features with balance.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 mt-8 border-t border-[#242321]/15 text-xs font-mono">
                <div>
                  <span className="block text-[#7C2327] font-bold">01. SHAPE</span>
                  <span className="text-[#242321]/70">Anatomical balance</span>
                </div>
                <div>
                  <span className="block text-[#7C2327] font-bold">02. LINES</span>
                  <span className="text-[#242321]/70">Clean perimeters</span>
                </div>
                <div>
                  <span className="block text-[#7C2327] font-bold">03. FADE</span>
                  <span className="text-[#242321]/70">Tonal graduation</span>
                </div>
                <div>
                  <span className="block text-[#7C2327] font-bold">04. FINISH</span>
                  <span className="text-[#242321]/70">Beard contour</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE HORIZONTAL SECTION */}
      <HorizontalPinnedSection />

      {/* SECTION 4 — SHOP SIGNALS (Asymmetric Modules) */}
      <section className="py-20 sm:py-28 border-b border-[#242321]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 border-b border-[#242321]/15 pb-4">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#7C2327] uppercase">
                DISCIPLINE & SERVICES
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#171717] tracking-tight">
                SHOP SIGNALS
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="cursor-pointer text-xs font-mono font-semibold tracking-wider text-[#7C2327] hover:text-[#171717] flex items-center gap-1.5 transition-colors"
            >
              <span>VIEW FULL SERVICE INDEX</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Module 1: The Cut */}
            <div
              onClick={() => onNavigate('services')}
              className="group cursor-pointer p-6 bg-white border border-[#242321]/15 hover:border-[#7C2327] transition-all flex flex-col justify-between min-h-[320px]"
            >
              <div>
                <span className="text-xs font-mono text-[#A7A9A8] group-hover:text-[#7C2327] transition-colors">
                  01 / SERVICE
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#171717] mt-3 group-hover:text-[#7C2327] transition-colors">
                  THE CUT
                </h3>
                <p className="text-xs text-[#242321]/70 mt-3 leading-relaxed">
                  Classic scissor discipline, proportional crown sculpting, and natural weight lines.
                </p>
              </div>
              <div className="pt-4 border-t border-[#242321]/10 flex items-center justify-between text-xs font-mono text-[#7C2327]">
                <span>EXPLORE CUTS</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Module 2: The Beard */}
            <div
              onClick={() => onNavigate('beard-edit')}
              className="group cursor-pointer p-6 bg-[#D8D0C6]/30 border border-[#242321]/15 hover:border-[#7C2327] transition-all flex flex-col justify-between min-h-[320px]"
            >
              <div>
                <span className="text-xs font-mono text-[#A7A9A8] group-hover:text-[#7C2327] transition-colors">
                  02 / SERVICE
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#171717] mt-3 group-hover:text-[#7C2327] transition-colors">
                  THE BEARD
                </h3>
                <p className="text-xs text-[#242321]/70 mt-3 leading-relaxed">
                  Razor-defined cheeklines, jaw contouring, and mustache trimming with hot finish.
                </p>
              </div>
              <div className="pt-4 border-t border-[#242321]/10 flex items-center justify-between text-xs font-mono text-[#7C2327]">
                <span>BEARD EDIT</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Module 3: The Fade */}
            <div
              onClick={() => onNavigate('fade-room')}
              className="group cursor-pointer p-6 bg-white border border-[#242321]/15 hover:border-[#7C2327] transition-all flex flex-col justify-between min-h-[320px]"
            >
              <div>
                <span className="text-xs font-mono text-[#A7A9A8] group-hover:text-[#7C2327] transition-colors">
                  03 / SPECIALTY
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#171717] mt-3 group-hover:text-[#7C2327] transition-colors">
                  THE FADE
                </h3>
                <p className="text-xs text-[#242321]/70 mt-3 leading-relaxed">
                  Low, mid, and high skin blends cited prominently across 86 customer reviews.
                </p>
              </div>
              <div className="pt-4 border-t border-[#242321]/10 flex items-center justify-between text-xs font-mono text-[#7C2327]">
                <span>FADE ROOM</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Module 4: The Experience */}
            <div
              onClick={() => onNavigate('the-shop')}
              className="group cursor-pointer p-6 bg-[#171717] text-[#F3EFE7] border border-[#171717] hover:border-[#7C2327] transition-all flex flex-col justify-between min-h-[320px]"
            >
              <div>
                <span className="text-xs font-mono text-[#A7A9A8] group-hover:text-[#7C2327] transition-colors">
                  04 / SPACE
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#F3EFE7] mt-3 group-hover:text-[#D8D0C6] transition-colors">
                  THE SHOP
                </h3>
                <p className="text-xs text-[#D8D0C6] mt-3 leading-relaxed">
                  Sector Q grooming space. Clean stations, cooperative staff, and focused atmosphere.
                </p>
              </div>
              <div className="pt-4 border-t border-[#F3EFE7]/15 flex items-center justify-between text-xs font-mono text-[#7C2327]">
                <span>TOUR THE SHOP</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHAT CUSTOMERS SAY */}
      <section className="py-20 sm:py-28 border-b border-[#242321]/15 bg-[#D8D0C6]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono tracking-widest text-[#7C2327] uppercase">
              GOOGLE REVIEW SOCIAL PROOF
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#171717] tracking-tight mt-1">
              AUTHENTIC FEEDBACK.
            </h2>
            <p className="text-xs sm:text-sm font-sans text-[#242321]/70 mt-2">
              Verifiable reviews supplied from the Razor&apos;s Edge Ltd Google profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Review 1 */}
            <div className="p-8 bg-white border border-[#242321]/15 rounded-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#7C2327] mb-4">
                  <span>GOOGLE REVIEW</span>
                  <div className="flex text-[#7C2327]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="font-serif text-xl sm:text-2xl text-[#171717] leading-snug italic mb-6">
                  “Professional staff and good customer handling.”
                </blockquote>
              </div>
              <div className="pt-4 border-t border-[#242321]/10 flex items-center justify-between text-xs font-mono text-[#242321]/70">
                <span className="font-bold text-[#171717]">ADIL SHUJA</span>
                <span>VERIFIED CUSTOMER</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="p-8 bg-white border border-[#242321]/15 rounded-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#7C2327] mb-4">
                  <span>GOOGLE REVIEW · 5 YEAR CUSTOMER</span>
                  <div className="flex text-[#7C2327]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="font-serif text-lg sm:text-xl text-[#171717] leading-relaxed mb-6">
                  Reported visiting for approximately 5 years and specifically praised beard trims, haircuts and the fade team, mentioning Usman bhai.
                </blockquote>
              </div>
              <div className="pt-4 border-t border-[#242321]/10 flex items-center justify-between text-xs font-mono text-[#242321]/70">
                <span className="font-bold text-[#171717]">MUHAMMAD ZIA-UR-REHMAN</span>
                <span>LONG-TERM PATRON</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('customer-notes')}
              className="cursor-pointer text-xs font-mono font-semibold tracking-wider text-[#7C2327] hover:underline"
            >
              READ COMPLETE CUSTOMER NOTES & AVAILABILITY ADVICE →
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6 — LOCATION & MAP SHORTCUT */}
      <section className="py-20 sm:py-24 border-b border-[#242321]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono tracking-widest text-[#7C2327] uppercase">
                LOCATION
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#171717] tracking-tight mt-1 mb-4">
                SECTOR Q · DHA PHASE 2
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#242321]/80 max-w-lg leading-relaxed mb-6">
                Located conveniently in Sector Q, DHA Phase 2, Lahore. Serving residents across DHA with focused appointments and attentive service.
              </p>
              <div className="space-y-2 text-xs font-mono text-[#242321]">
                <p>ADDRESS: Sector Q, DHA Phase 2, Lahore, Pakistan</p>
                <p>TELEPHONE: +92 321 4197477</p>
                <p>HOURS: Open · Closes 9 PM</p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#242321]/15 flex flex-wrap gap-4">
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#171717] hover:bg-[#242321] text-[#F3EFE7] px-6 py-3 text-xs font-semibold tracking-wider rounded-xs flex items-center gap-2 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#A7A9A8]" />
                  <span>GET DIRECTIONS</span>
                </a>
                <button
                  onClick={() => onNavigate('visit')}
                  className="border border-[#242321]/30 hover:border-[#171717] px-6 py-3 text-xs font-semibold tracking-wider rounded-xs transition-colors"
                >
                  <span>VISIT GUIDE</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[16/10] bg-[#171717] relative overflow-hidden rounded-xs border border-[#242321]/20">
                <img
                  src={IMAGES.shopInterior}
                  alt="Razor's Edge Ltd shop interior in Sector Q DHA Phase 2"
                  className="w-full h-full object-cover grayscale contrast-125"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-[#171717]/90 text-[#F3EFE7] px-3 py-1.5 text-[10px] font-mono border border-[#F3EFE7]/20">
                  SECTOR Q, DHA PHASE 2, LAHORE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FINAL CTA */}
      <section className="py-20 sm:py-28 bg-[#171717] text-[#F3EFE7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono tracking-widest text-[#7C2327] uppercase">
            DIRECT BOOKING
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F3EFE7] tracking-tight mt-2 mb-6">
            “Know the cut. Pick the time. Send the message.”
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#D8D0C6] max-w-xl mx-auto mb-10 leading-relaxed">
            Choose your service, designate your preferred slot, and send a pre-formatted WhatsApp enquiry straight to the shop in Sector Q.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="cursor-pointer bg-[#7C2327] hover:bg-[#621c1f] text-[#F3EFE7] px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider rounded-xs flex items-center gap-2 shadow-xs transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK A SLOT</span>
            </button>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#242321] hover:bg-[#33312e] text-[#F3EFE7] px-7 py-4 text-xs sm:text-sm font-semibold tracking-wider border border-[#F3EFE7]/20 rounded-xs flex items-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#7C2327]" />
              <span>WHATSAPP DIRECT</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
