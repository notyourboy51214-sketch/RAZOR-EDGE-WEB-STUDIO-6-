import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ServiceType } from './types';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { MobileBookingDock } from './components/MobileBookingDock';
import { BookingModal, BookingFlowContent } from './components/BookingModal';
import { HorizontalPinnedSection } from './components/HorizontalPinnedSection';
import { BUSINESS_INFO, IMAGES, SERVICES_INDEX, REVIEWS_DATA } from './data/content';
import {
  Calendar,
  MessageSquare,
  Phone,
  MapPin,
  Star,
  Check,
  ArrowRight,
  ArrowUpRight,
  Clock,
  UserCheck,
  Navigation as NavIcon,
} from 'lucide-react';

const HERO_STATES = [
  {
    num: '01',
    tag: 'THE FADE',
    lead: 'FADE',
    sub: 'Clean skin-to-temple transition & tapered neckline',
    image: IMAGES.fadeDetail,
    service: 'Fade',
  },
  {
    num: '02',
    tag: 'THE BEARD',
    lead: 'BEARD',
    sub: 'Geometric jawline sculpting & razor-sharp perimeter',
    image: IMAGES.beardContour,
    service: 'Beard Trim',
  },
  {
    num: '03',
    tag: 'THE CUT',
    lead: 'CUT',
    sub: 'Scissor balance calibrated to head contours and density',
    image: IMAGES.cutCraft,
    service: 'Haircut',
  },
];

const FADE_REFERENCES = [
  {
    type: 'LOW',
    title: 'LOW FADE REFERENCE',
    description: 'Begins just above the ear and neckline. Subtle skin exposure keeping greater density around the temples and parietal ridge.',
    tone: 'Conservative & versatile',
  },
  {
    type: 'MID',
    title: 'MID FADE REFERENCE',
    description: 'Begins right around the temple and ear line. Balanced tonal transition establishing sharp contrast while leaving length on top.',
    tone: 'Standard balanced profile',
  },
  {
    type: 'HIGH',
    title: 'HIGH FADE REFERENCE',
    description: 'Clears skin up to the crown perimeter. High-contrast gradient emphasizing top texture, crop lines, or sleek pompadours.',
    tone: 'Sharp & architectural',
  },
];

type ReviewFilterCategory = 'all' | 'fade' | 'haircut' | 'beard' | 'staff' | 'experience';

export default function App() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [reviewFilter, setReviewFilter] = useState<ReviewFilterCategory>('all');
  const [consultationPref, setConsultationPref] = useState<'Fade' | 'Classic haircut' | 'Not sure'>('Fade');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string>('Fade');

  // Hero carousel auto-cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_STATES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Smooth scroll to section
  const scrollTo = (id: string, service?: string) => {
    if (service) {
      setBookingService(service);
    }
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.replaceState(null, '', '#home');
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      history.replaceState(null, '', `#${id}`);
    }
  };

  const activeHero = HERO_STATES[heroIndex];

  const filteredReviews = REVIEWS_DATA.filter((r) => {
    if (reviewFilter === 'all') return true;
    if (reviewFilter === 'fade' && (r.category === 'fade' || r.text.toLowerCase().includes('fade'))) return true;
    if (reviewFilter === 'haircut' && (r.category === 'haircut' || r.text.toLowerCase().includes('haircut'))) return true;
    if (reviewFilter === 'beard' && (r.category === 'beard' || r.text.toLowerCase().includes('beard'))) return true;
    if (reviewFilter === 'staff' && (r.category === 'staff' || r.text.toLowerCase().includes('staff') || r.text.toLowerCase().includes('handling'))) return true;
    if (reviewFilter === 'experience' && (r.category === 'experience' || r.isCritical)) return true;
    return false;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#0D0D0D] text-[#F3EFE7]">
      {/* Skip to Content for Accessibility */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#8E2429] text-[#FFFFFF] px-4 py-2 text-xs font-mono"
      >
        Skip to main content
      </a>

      {/* Global Navigation (with Anchor Links on the Same Page) */}
      <Navigation onOpenBookingModal={() => setIsBookingModalOpen(true)} />

      <main className="flex-grow">
        {/* ========================================================
            1. HERO SECTION (id="home")
           ======================================================== */}
        <section
          id="home"
          className="relative min-h-[92vh] lg:min-h-screen pt-24 pb-16 flex flex-col justify-between border-b border-white/10 overflow-hidden bg-[#0D0D0D]"
        >
          {/* Background Visual Layer with increased clarity */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              key={activeHero.num}
              src={activeHero.image}
              alt={activeHero.lead}
              className="w-full h-full object-cover object-center grayscale contrast-125 transition-opacity duration-1000 opacity-40"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/75 to-transparent" />
          </div>

          {/* Hero Top Context */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#8E2429]">
                RAZOR&apos;S EDGE LTD
              </span>
              <span className="font-mono text-xs text-[#A7A9A8]">
                SECTOR Q · DHA PHASE 2 · LAHORE
              </span>
            </div>

            {/* Luminous Ivory Quick-Badge Bar (Instant Light Element) */}
            <div className="mt-4 bg-[#F8F6F0] text-[#111111] px-5 py-2.5 rounded-xs border border-white/30 shadow-lg flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <div className="flex text-[#8E2429]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-[#111111]">4.8 RATING</span>
                <span className="text-black/30">/</span>
                <span className="text-[#333333]">492 VERIFIED GOOGLE REVIEWS</span>
              </div>
              <div className="flex items-center gap-4 text-[#333333]">
                <span className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#8E2429]" />
                  Sector Q Commercial, DHA Phase 2
                </span>
                <span className="hidden md:inline text-black/30">|</span>
                <span className="hidden md:flex items-center gap-1.5 font-bold text-[#8E2429]">
                  <Clock className="w-3.5 h-3.5" />
                  Open Today · Closes 9 PM
                </span>
              </div>
            </div>
          </div>

          {/* Hero Central Dominant Typography */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 text-xs font-mono text-[#8E2429] tracking-widest uppercase mb-3">
                <span>{activeHero.num}</span>
                <span className="text-white/30">/</span>
                <span className="text-[#D8D0C6]">{activeHero.tag}</span>
              </div>

              <h1 className="font-serif text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tighter text-[#FFFFFF] leading-[0.85] uppercase">
                {activeHero.lead}
              </h1>

              <p className="font-sans text-base sm:text-xl text-[#E8E4DC] max-w-xl mt-6 font-normal leading-relaxed">
                {activeHero.sub}
              </p>

              {/* CTAs with Luminous Light Ivory Primary Button */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <button
                  onClick={() => scrollTo('book', activeHero.service)}
                  className="cursor-pointer bg-[#F8F6F0] hover:bg-[#FFFFFF] text-[#111111] px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider rounded-xs flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all"
                >
                  <Calendar className="w-4 h-4 text-[#8E2429]" />
                  <span>BOOK A SLOT</span>
                </button>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#171717] hover:bg-[#222222] text-[#F3EFE7] px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider border border-white/20 rounded-xs flex items-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#8E2429]" />
                  <span>WHATSAPP CHAIR CHECK</span>
                </a>
              </div>
            </div>
          </div>

          {/* Hero Bottom Switcher */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-3 border-t border-white/15 pt-4">
              {HERO_STATES.map((state, idx) => (
                <button
                  key={state.num}
                  onClick={() => setHeroIndex(idx)}
                  className={`cursor-pointer text-left pb-2 pr-2 transition-all ${
                    heroIndex === idx
                      ? 'border-t-2 border-[#8E2429] -mt-[18px]'
                      : 'opacity-40 hover:opacity-100'
                  }`}
                >
                  <span className="block font-mono text-[10px] sm:text-xs text-[#8E2429]">
                    {state.num}
                  </span>
                  <span className="font-serif text-sm sm:text-base font-semibold text-[#FFFFFF] uppercase">
                    {state.lead}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            2. INTRO / BRAND STORY (id="story") - LUMINOUS WARM IVORY
           ======================================================== */}
        <section id="story" className="py-20 sm:py-28 border-b border-black/10 bg-[#F6F3EC] text-[#111111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Reputation Header - Floating Pure White Highlight Card */}
            <div className="bg-[#FFFFFF] text-[#111111] p-6 sm:p-10 rounded-xs border border-black/10 shadow-xl mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 flex items-baseline gap-4 border-b lg:border-b-0 lg:border-r border-black/15 pb-6 lg:pb-0 lg:pr-8">
                  <span className="font-serif text-7xl sm:text-8xl font-bold text-[#111111] tracking-tight">
                    4.8
                  </span>
                  <div>
                    <span className="block text-xs font-mono font-bold tracking-widest text-[#8E2429] uppercase">
                      GOOGLE REVIEWS
                    </span>
                    <span className="text-sm font-sans font-semibold text-[#242321]">
                      492 Verified Reviews
                    </span>
                    <div className="flex text-[#8E2429] mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8 flex flex-col justify-center">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#242321]/70 font-bold mb-2">
                    VERIFIED REVIEW THEMES IN SUPPLIED LISTING
                  </span>
                  <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm font-mono tracking-wider text-[#111111] border-y border-black/10 py-3">
                    <span className="font-bold text-[#8E2429]">FADE</span>
                    <span className="text-black/30">/</span>
                    <span className="font-semibold text-[#111111]">FADE HAIRCUT</span>
                    <span className="text-black/30">/</span>
                    <span className="font-semibold text-[#111111]">TRAINED STAFF</span>
                    <span className="text-black/30">/</span>
                    <span className="font-semibold text-[#111111]">COOPERATIVE STAFF</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Story Prose with Visual Crop */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative">
                <div className="aspect-[4/3] bg-white p-2 shadow-xl overflow-hidden rounded-xs border border-black/10">
                  <img
                    src={IMAGES.fadeDetail}
                    alt="Precision fade detail close-up"
                    className="w-full h-full object-cover grayscale contrast-125"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 hidden sm:block bg-[#111111] text-[#F3EFE7] p-4 max-w-xs text-xs font-mono shadow-2xl border border-white/20">
                  <span className="text-[#8E2429] block font-bold mb-1">CRAFT DISCIPLINE</span>
                  Close-crop detail of temple graduation and skin fade transition.
                </div>
              </div>

              <div className="lg:col-span-6">
                <span className="text-xs font-mono tracking-widest text-[#8E2429] uppercase font-bold">
                  SECTION 02 · INTRO & BRAND STORY
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#111111] tracking-tight mt-2 mb-6">
                  “Precision lives in the details.”
                </h2>

                <div className="space-y-4 font-sans text-sm sm:text-base text-[#2E2D2B] leading-relaxed">
                  <p>
                    A quality haircut is not an accident of speed. It begins with analyzing head contour, growth patterns, and natural weight lines before shears or clippers make contact.
                  </p>
                  <p>
                    At Razor&apos;s Edge Ltd in Sector Q, DHA Phase 2, Lahore, our barbers focus on clean perimeters, gradual fade transitions from skin to scalp, and crisp beard edging that frames your features with balance.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 mt-8 border-t border-black/10 text-xs font-mono">
                  <div className="p-3 bg-white border border-black/10 rounded-xs shadow-xs">
                    <span className="block text-[#8E2429] font-bold">01. SHAPE</span>
                    <span className="text-[#555555]">Anatomical balance</span>
                  </div>
                  <div className="p-3 bg-white border border-black/10 rounded-xs shadow-xs">
                    <span className="block text-[#8E2429] font-bold">02. LINES</span>
                    <span className="text-[#555555]">Clean perimeters</span>
                  </div>
                  <div className="p-3 bg-white border border-black/10 rounded-xs shadow-xs">
                    <span className="block text-[#8E2429] font-bold">03. FADE</span>
                    <span className="text-[#555555]">Tonal graduation</span>
                  </div>
                  <div className="p-3 bg-white border border-black/10 rounded-xs shadow-xs">
                    <span className="block text-[#8E2429] font-bold">04. FINISH</span>
                    <span className="text-[#555555]">Beard contour</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. MAIN SERVICES / OFFER (id="services")
           ======================================================== */}
        <section id="services" className="py-20 sm:py-28 border-b border-white/10 bg-[#0D0D0D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#8E2429] uppercase">
                  SECTION 03 · EDITORIAL CATALOGUE
                </span>
                <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FFFFFF] mt-1 uppercase">
                  SERVICES
                </h2>
              </div>
              <div className="max-w-md text-xs sm:text-sm font-sans text-[#A7A9A8] leading-relaxed">
                <p>
                  Carefully calibrated grooming services verified directly from our Sector Q, DHA Phase 2 operation. Focused on haircuts, precision fades, and sculpted beard profiles.
                </p>
              </div>
            </div>

            {/* Editorial Service Index with Gentle Scroll-Triggered Fade-In & Slide-Up */}
            <div className="space-y-24">
              {SERVICES_INDEX.map((service, index) => {
                const isReversed = index % 2 !== 0;
                return (
                  <motion.article
                    key={service.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.75,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.08,
                    }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center border-b border-white/10 pb-20 last:border-b-0"
                  >
                    {/* Visual Image Block */}
                    <div
                      className={`lg:col-span-6 ${
                        isReversed ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <div className="aspect-[4/3] bg-[#171717] relative overflow-hidden rounded-xs border border-white/15 group">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4 bg-white text-[#111111] font-bold px-3 py-1 font-mono text-xs border border-black/10 shadow-md">
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
                      <div className="flex items-center gap-3 text-xs font-mono text-[#8E2429] tracking-widest uppercase mb-3">
                        <span className="font-bold text-sm">{service.number}</span>
                        <span className="text-white/30">/</span>
                        <span className="text-[#D8D0C6]">VERIFIED SERVICE</span>
                      </div>

                      <h3 className="font-serif text-3xl sm:text-5xl font-normal text-[#FFFFFF] tracking-tight mb-3">
                        {service.title}
                      </h3>

                      <p className="font-serif italic text-base sm:text-lg text-[#D8D0C6] mb-5">
                        {service.tagline}
                      </p>

                      <p className="font-sans text-sm sm:text-base text-[#A7A9A8] leading-relaxed mb-8">
                        {service.description}
                      </p>

                      {/* Focus Details List */}
                      <div className="space-y-2 mb-8 pt-4 border-t border-white/10">
                        <span className="block text-[11px] font-mono tracking-widest text-[#A7A9A8] uppercase">
                          TECHNIQUE HIGHLIGHTS
                        </span>
                        <ul className="space-y-2 text-xs font-mono text-[#F3EFE7]">
                          {service.focusDetails.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-[#8E2429]" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap items-center gap-4">
                        <button
                          onClick={() => scrollTo('book', service.id)}
                          className="cursor-pointer bg-[#8E2429] hover:bg-[#721c20] text-[#FFFFFF] px-6 py-3 text-xs sm:text-sm font-semibold tracking-wider rounded-xs flex items-center gap-2 transition-colors shadow-sm"
                        >
                          <Calendar className="w-4 h-4" />
                          <span>BOOK THIS SERVICE</span>
                        </button>

                        <button
                          onClick={() => scrollTo('approach')}
                          className="cursor-pointer text-xs font-mono tracking-wider font-semibold text-[#D8D0C6] hover:text-[#FFFFFF] flex items-center gap-1.5 py-3 transition-colors"
                        >
                          <span>VIEW SPECIFICATIONS</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            {/* Pricing Transparency Note - Light element ("A little bit light thing") */}
            <div className="p-6 bg-[#F4F0E8] text-[#111111] border border-white/20 rounded-xs text-xs font-mono leading-relaxed mt-12 shadow-md">
              <span className="font-bold text-[#8E2429] block mb-1 uppercase tracking-wider">
                TRANSPARENCY NOTE
              </span>
              To avoid quoting unverified fees, exact pricing is confirmed alongside scheduling directly over WhatsApp with our staff at Sector Q, DHA Phase 2 (+92 321 4197477).
            </div>
          </div>
        </section>

        {/* ========================================================
            4. UNIQUE VALUE / APPROACH (id="approach")
               - The Fade Room & Beard Architecture
           ======================================================== */}
        <section id="approach" className="py-20 sm:py-28 border-b border-white/10 bg-[#141414]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-mono tracking-widest text-[#8E2429] uppercase">
                SECTION 04 · SPECIALTY DISCIPLINE
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#FFFFFF] tracking-tight mt-1">
                FADES & BEARDS
              </h2>
              <p className="text-xs sm:text-sm font-sans text-[#A7A9A8] mt-3 leading-relaxed">
                Examining the geometry of hair graduation and facial architecture that defines the Razor&apos;s Edge standard.
              </p>
            </div>

            {/* Part A: The Fade Room Signal & References */}
            <div className="bg-[#1A1A1A] p-8 sm:p-12 border border-white/15 rounded-xs mb-16 shadow-xl">
              {/* High-Contrast Light Highlight Card ("A little bit light thing") */}
              <div className="bg-[#F4F0E8] text-[#111111] p-6 sm:p-8 rounded-xs mb-10 shadow-md border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-4 flex items-baseline gap-4 border-b md:border-b-0 md:border-r border-black/15 pb-4 md:pb-0 md:pr-6">
                    <span className="font-serif text-6xl sm:text-7xl font-bold text-[#8E2429]">
                      86
                    </span>
                    <div>
                      <span className="block text-xs font-mono tracking-widest uppercase text-[#111111] font-bold">
                        REVIEW MENTIONS
                      </span>
                      <span className="text-xs font-mono text-[#242321]/70">
                        Google Listing Data
                      </span>
                    </div>
                  </div>

                  <div className="md:col-span-8">
                    <p className="font-serif text-lg sm:text-xl text-[#111111] leading-snug italic font-semibold">
                      “Fade appears as a prominent review topic in the supplied Google listing.”
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-[#242321]/80 mt-2">
                      Customer feedback specifically highlights the precision of our fade work, clean skin tapers, and trained barber staff handling complex head gradients in Sector Q.
                    </p>
                  </div>
                </div>
              </div>

              {/* Low / Mid / High References - Crisp Bright Light Ivory Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {FADE_REFERENCES.map((ref) => (
                  <div key={ref.type} className="p-6 border border-black/15 bg-[#FAF7F2] text-[#111111] rounded-xs shadow-md flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-[#8E2429] mb-2 font-bold">
                        <span>REFERENCE</span>
                        <span>{ref.type} TAPER</span>
                      </div>
                      <h4 className="font-serif text-xl font-bold text-[#111111] mb-1">
                        {ref.title}
                      </h4>
                      <p className="text-[11px] font-mono text-[#8E2429] font-semibold mb-3">
                        Tone: {ref.tone}
                      </p>
                      <p className="text-xs text-[#2E2D2B] leading-relaxed">
                        {ref.description}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-black/10 flex justify-between items-center text-xs font-mono">
                      <span className="text-[#666666]">IN-CHAIR</span>
                      <button
                        onClick={() => scrollTo('book', `Fade (${ref.type} Fade)`)}
                        className="cursor-pointer text-[#111111] font-bold hover:text-[#8E2429] hover:underline flex items-center gap-1"
                      >
                        <span>SELECT {ref.type}</span>
                        <ArrowRight className="w-3 h-3 text-[#8E2429]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Consultation Selector */}
              <div className="mt-10 p-6 bg-[#0D0D0D] border border-white/15 text-[#F3EFE7] rounded-xs flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-mono text-[#8E2429] uppercase tracking-widest block mb-1">
                    CONSULTATION SELECTOR
                  </span>
                  <h4 className="font-serif text-2xl text-[#FFFFFF]">
                    What cut are you aiming for?
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(['Fade', 'Classic haircut', 'Not sure'] as const).map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setConsultationPref(opt);
                        scrollTo('book', opt === 'Fade' ? 'Fade' : opt === 'Classic haircut' ? 'Haircut' : 'Other');
                      }}
                      className="cursor-pointer px-4 py-2 border border-white/20 hover:border-white/60 bg-[#1A1A1A] hover:bg-[#F4F0E8] hover:text-[#111111] text-xs font-mono rounded-xs transition-all text-[#D8D0C6]"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Part B: Beard Architecture & 5-Year Patron Note */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 bg-[#1A1A1A] p-8 border border-white/15 rounded-xs">
                <span className="text-xs font-mono tracking-widest text-[#8E2429] uppercase block mb-2">
                  FACIAL ARCHITECTURE
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#FFFFFF] mb-4">
                  BEARD DEFINITION & EDGING
                </h3>
                <p className="font-sans text-sm text-[#D8D0C6] leading-relaxed mb-6">
                  Straight-blade boundary setting, cheekline geometry, and weight distribution designed around your natural jawline structure. Synchronized with sideburns for an unbroken profile from temple to neck.
                </p>

                <div className="p-5 bg-[#FAF7F2] text-[#111111] border border-black/15 rounded-xs text-xs font-mono mb-6 shadow-md">
                  <span className="font-bold text-[#8E2429] block mb-1">
                    5-YEAR VERIFIED PATRON (GOOGLE REVIEWS):
                  </span>
                  <p className="font-sans text-xs text-[#2E2D2B]">
                    “Muhammad Zia-ur-Rehman reported visiting for approximately 5 years and specifically praised beard trims, haircuts and the fade team, mentioning Usman bhai.”
                  </p>
                </div>

                <button
                  onClick={() => scrollTo('book', 'Beard Trim')}
                  className="cursor-pointer bg-[#8E2429] hover:bg-[#721c20] text-[#FFFFFF] px-6 py-3 text-xs font-semibold tracking-wider rounded-xs transition-colors shadow-sm"
                >
                  BOOK BEARD SCULPTING
                </button>
              </div>

              <div className="lg:col-span-6">
                <div className="aspect-[4/3] bg-[#0D0D0D] rounded-xs overflow-hidden border border-white/15">
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

        {/* ========================================================
            5. FEATURED CONTENT / VISUAL STORY (id="visual-story")
               - The Shop & Environment
           ======================================================== */}
        <section id="visual-story" className="py-20 sm:py-28 border-b border-white/10 bg-[#0D0D0D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#8E2429] uppercase">
                  SECTION 05 · PHYSICAL ENVIRONMENT
                </span>
                <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#FFFFFF] mt-1 uppercase">
                  THE SHOP
                </h2>
              </div>
              <div className="max-w-md text-xs sm:text-sm font-sans text-[#A7A9A8] leading-relaxed">
                <p className="font-serif italic text-base text-[#FFFFFF] mb-1">
                  “The place behind the cut.”
                </p>
                <p>
                  Sector Q, DHA Phase 2, Lahore. An atmosphere designed around precision cuts, clean mirrored workstations, and focused grooming.
                </p>
              </div>
            </div>

            {/* Uneven Magazine-Grid Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-16">
              {/* Main Large Visual */}
              <div className="md:col-span-8 bg-[#171717] rounded-xs overflow-hidden border border-white/15 relative group">
                <div className="aspect-[16/10] w-full">
                  <img
                    src={IMAGES.shopInterior}
                    alt="Inside Razor's Edge Ltd barber stations in DHA Phase 2"
                    className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute bottom-4 left-4 bg-[#0D0D0D]/90 text-[#F3EFE7] px-3 py-1 font-mono text-xs border border-white/20">
                  INSIDE / WORKSTATIONS & MIRROR REFLECTIONS
                </div>
              </div>

              {/* Secondary Stacked Visual & Light Statement Card */}
              <div className="md:col-span-4 flex flex-col justify-between gap-6">
                <div className="bg-[#171717] rounded-xs overflow-hidden border border-white/15 relative group flex-1">
                  <div className="aspect-[4/3] w-full h-full">
                    <img
                      src={IMAGES.barberTools}
                      alt="Precision shears clippers and tools on work surface"
                      className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 bg-[#0D0D0D]/90 text-[#F3EFE7] px-2.5 py-1 font-mono text-[10px] border border-white/20">
                    TOOLS / CHROME & BLADE DISCIPLINE
                  </div>
                </div>

                {/* Light Element: Visitor Statement in Warm Ivory */}
                <div className="p-6 bg-[#F4F0E8] text-[#111111] border border-white/20 rounded-xs shadow-md flex flex-col justify-between">
                  <span className="text-xs font-mono text-[#8E2429] tracking-wider uppercase font-bold">
                    ATMOSPHERE NOTE
                  </span>
                  <p className="font-serif text-lg text-[#111111] italic font-semibold my-2">
                    “Best environment in town for haircut like fade.”
                  </p>
                  <span className="text-[11px] font-mono text-[#242321]/70">
                    Visitor-provided Google review remark
                  </span>
                </div>
              </div>

              {/* Lower Row Offsets */}
              <div className="md:col-span-5 bg-[#171717] rounded-xs overflow-hidden border border-white/15 relative group">
                <div className="aspect-[4/3] w-full">
                  <img
                    src={IMAGES.cutCraft}
                    alt="Hands at work with shears and comb"
                    className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute bottom-3 left-3 bg-[#0D0D0D]/90 text-[#F3EFE7] px-2.5 py-1 font-mono text-[10px] border border-white/20">
                  CRAFT / HANDS AT WORK
                </div>
              </div>

              <div className="md:col-span-7 bg-[#171717] rounded-xs overflow-hidden border border-white/15 relative group">
                <div className="aspect-[16/9] w-full">
                  <img
                    src={IMAGES.fadeDetail}
                    alt="Clean fade finish on skin"
                    className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute bottom-3 left-3 bg-[#0D0D0D]/90 text-[#F3EFE7] px-2.5 py-1 font-mono text-[10px] border border-white/20">
                  FINISH / TEMPLE BLEND
                </div>
              </div>
            </div>

            {/* Factually Supported Environment Points - Crisp Bright Light Ivory Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-[#FAF7F2] text-[#111111] border border-black/15 rounded-xs shadow-md">
                <span className="font-mono text-xs text-[#8E2429] font-bold block mb-2">01 / STATIONS</span>
                <h4 className="font-serif text-lg font-bold text-[#111111] mb-2">
                  Dedicated Work Bays
                </h4>
                <p className="text-xs text-[#2E2D2B] leading-relaxed">
                  Clean mirrored work bays equipped with clippers, sanitize pots, and directional lighting for accurate gradient inspection.
                </p>
              </div>

              <div className="p-6 bg-[#FAF7F2] text-[#111111] border border-black/15 rounded-xs shadow-md">
                <span className="font-mono text-xs text-[#8E2429] font-bold block mb-2">02 / HANDLING</span>
                <h4 className="font-serif text-lg font-bold text-[#111111] mb-2">
                  Trained & Cooperative Staff
                </h4>
                <p className="text-xs text-[#2E2D2B] leading-relaxed">
                  Praised across 492 customer reviews for good client handling, patience during consultations, and attentiveness to detail.
                </p>
              </div>

              <div className="p-6 bg-[#FAF7F2] text-[#111111] border border-black/15 rounded-xs shadow-md">
                <span className="font-mono text-xs text-[#8E2429] font-bold block mb-2">03 / SCHEDULE</span>
                <h4 className="font-serif text-lg font-bold text-[#111111] mb-2">
                  Operating Hours
                </h4>
                <p className="text-xs text-[#2E2D2B] leading-relaxed">
                  Currently open with standard schedule closing at 9 PM. Send a quick WhatsApp message to check chair availability before traveling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            6. TRUST / REVIEWS (id="reviews") - LUMINOUS WARM ALABASTER
           ======================================================== */}
        <section id="reviews" className="py-20 sm:py-28 border-b border-black/10 bg-[#F7F5EF] text-[#111111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
              <div className="lg:col-span-8">
                <span className="text-xs font-mono tracking-widest text-[#8E2429] uppercase font-bold">
                  SECTION 06 · AUTHENTIC SOCIAL PROOF
                </span>
                <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#111111] mt-1 uppercase">
                  CUSTOMER NOTES
                </h2>
                <p className="text-xs sm:text-sm font-sans text-[#444444] mt-3 max-w-xl leading-relaxed">
                  Transparent, unedited customer feedback from our official Google profile in Sector Q, DHA Phase 2. We present both longstanding praises and constructive notes honestly.
                </p>
              </div>

              <div className="lg:col-span-4 flex items-baseline gap-4 bg-white p-6 border border-black/10 rounded-xs shadow-xl">
                <span className="font-serif text-6xl sm:text-7xl font-bold text-[#111111]">
                  {BUSINESS_INFO.googleRating}
                </span>
                <div>
                  <div className="flex text-[#8E2429] mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#111111] uppercase block">
                    {BUSINESS_INFO.googleReviewCount} GOOGLE REVIEWS
                  </span>
                  <span className="text-[11px] font-sans text-[#555555]">
                    Sector Q · DHA Phase 2, Lahore
                  </span>
                </div>
              </div>
            </div>

            {/* Topic Filter Buttons (Zero-Pills Discipline) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-black/10">
              <span className="text-xs font-mono text-[#555555] uppercase mr-2 shrink-0 font-semibold">
                FILTER BY TOPIC:
              </span>
              {(['all', 'fade', 'haircut', 'beard', 'staff', 'experience'] as ReviewFilterCategory[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setReviewFilter(cat)}
                  className={`cursor-pointer px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-xs transition-colors shrink-0 ${
                    reviewFilter === cat
                      ? 'bg-[#111111] text-[#FFFFFF] font-bold shadow-md'
                      : 'bg-white text-[#333333] border border-black/15 hover:border-black/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Testimonial Cards - Pure White Floating Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {filteredReviews.map((rev) => (
                <div
                  key={rev.id}
                  className={`p-6 sm:p-8 rounded-xs border flex flex-col justify-between shadow-md ${
                    rev.isCritical
                      ? 'bg-white border-[#8E2429]'
                      : 'bg-white border-black/10'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-4">
                      <span
                        className={
                          rev.isCritical ? 'text-[#8E2429] font-bold' : 'text-[#8E2429] font-semibold'
                        }
                      >
                        {rev.isCritical ? 'RECENT CUSTOMER FEEDBACK' : rev.source}
                      </span>
                      <div className="flex text-[#8E2429]">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>

                    <blockquote
                      className={`font-serif text-lg sm:text-xl text-[#111111] leading-relaxed mb-6 ${
                        rev.isCritical ? 'italic' : ''
                      }`}
                    >
                      {rev.text}
                    </blockquote>

                    {/* Practical UX Improvement for Critical Feedback */}
                    {rev.isCritical && (
                      <div className="mt-4 p-4 bg-[#FAF0F0] border border-[#8E2429]/40 rounded-xs">
                        <div className="flex items-center gap-2 text-xs font-mono text-[#8E2429] font-bold mb-1">
                          <Clock className="w-4 h-4 shrink-0" />
                          <span>RECOMMENDED ADVICE FOR PATRONS:</span>
                        </div>
                        <p className="text-xs font-sans text-[#2E2D2B] leading-relaxed">
                          “Want to avoid uncertainty about availability? Message the shop before heading over.”
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 mt-6 border-t border-black/10 flex items-center justify-between text-xs font-mono text-[#555555]">
                    <span className="font-bold text-[#111111]">{rev.author}</span>
                    <span>{rev.period || 'Google Verified'}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct WhatsApp Availability Callout - Pure White Radiant Box */}
            <div className="bg-white border-2 border-[#8E2429] text-[#111111] p-8 rounded-xs shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#8E2429] uppercase font-bold">
                  AVOID WAIT UNCERTAINTY
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-[#111111] font-bold mt-1">
                  Ask about live chair availability
                </h4>
              </div>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8E2429] hover:bg-[#721c20] text-[#FFFFFF] px-6 py-3.5 text-xs font-bold tracking-wider rounded-xs flex items-center gap-2 transition-colors shrink-0 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WHATSAPP CHAIR CHECK</span>
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================
            7. PROCESS / HOW IT WORKS (id="process")
               - 4-Stage Signature Craft Sequence & Booking Steps
           ======================================================== */}
        <section id="process" className="border-b border-black/10">
          {/* Part A: Signature Horizontal Pinned Sequence */}
          <HorizontalPinnedSection />

          {/* Part B: How Booking Works - Luminous Light Ivory Spread */}
          <div className="bg-[#F8F6F0] text-[#111111] py-16 sm:py-20 border-t border-black/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-mono tracking-widest text-[#8E2429] uppercase font-bold">
                  STRAIGHTFORWARD FLOW
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111] mt-1">
                  HOW APPOINTMENTS WORK
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 bg-white border border-black/10 rounded-xs shadow-md">
                  <span className="font-mono text-xl font-bold text-[#8E2429] block mb-2">01</span>
                  <h4 className="font-serif text-lg font-bold text-[#111111] mb-1">Choose Service</h4>
                  <p className="text-xs text-[#444444] leading-relaxed">
                    Select Haircut, Fade, Beard Trim, or combined appointment from the configurator.
                  </p>
                </div>

                <div className="p-6 bg-white border border-black/10 rounded-xs shadow-md">
                  <span className="font-mono text-xl font-bold text-[#8E2429] block mb-2">02</span>
                  <h4 className="font-serif text-lg font-bold text-[#111111] mb-1">Pick Timing</h4>
                  <p className="text-xs text-[#444444] leading-relaxed">
                    Specify your preferred day and time slot window (e.g. Afternoon, Evening).
                  </p>
                </div>

                <div className="p-6 bg-white border border-black/10 rounded-xs shadow-md">
                  <span className="font-mono text-xl font-bold text-[#8E2429] block mb-2">03</span>
                  <h4 className="font-serif text-lg font-bold text-[#111111] mb-1">Send Request</h4>
                  <p className="text-xs text-[#444444] leading-relaxed">
                    A unique reference code is attached and WhatsApp opens with your pre-formatted note.
                  </p>
                </div>

                <div className="p-6 bg-white border border-black/10 rounded-xs shadow-md">
                  <span className="font-mono text-xl font-bold text-[#8E2429] block mb-2">04</span>
                  <h4 className="font-serif text-lg font-bold text-[#111111] mb-1">Staff Confirms</h4>
                  <p className="text-xs text-[#444444] leading-relaxed">
                    The shop in Sector Q confirms chair availability directly so you avoid waiting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            8. BUSINESS-SPECIFIC INFORMATION (id="team")
               - Usman Bhai & The Fade Team
           ======================================================== */}
        <section id="team" className="py-20 sm:py-28 border-b border-white/10 bg-[#0D0D0D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-mono tracking-widest text-[#8E2429] uppercase">
                SECTION 08 · THE PEOPLE BEHIND THE CUT
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#FFFFFF] mt-1 uppercase">
                THE TEAM
              </h2>
              <p className="text-xs sm:text-sm font-sans text-[#A7A9A8] mt-3 leading-relaxed">
                Reputation built upon trained hands and genuine client care in Sector Q, DHA Phase 2. Presented strictly based on verifiable customer feedback.
              </p>
            </div>

            {/* Usman Bhai Spotlight */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#141414] p-8 sm:p-12 border border-white/15 rounded-xs mb-12 shadow-xl">
              {/* Left Column: Authentic Customer Citation Card (No placeholder portrait box) */}
              <div className="lg:col-span-5">
                <div className="bg-[#F4F0E8] text-[#111111] p-8 sm:p-10 rounded-xs border border-white/20 shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-6">
                      <span className="text-[#8E2429] font-bold tracking-widest uppercase">CUSTOMER COMMENDED</span>
                      <div className="flex text-[#8E2429]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#111111] block mb-3">
                      USMAN BHAI
                    </span>
                    <p className="font-serif text-lg sm:text-xl italic text-[#242321] leading-relaxed mb-6">
                      “Praised beard trims, haircuts, and the fade team, with special mention of Usman bhai.”
                    </p>
                  </div>
                  <div className="pt-4 border-t border-black/10 text-xs font-mono text-[#242321]/80 flex items-center justify-between">
                    <span className="font-bold text-[#111111]">Muhammad Zia-ur-Rehman</span>
                    <span>5-Year Regular Patron</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8E2429] mb-3">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="uppercase tracking-widest font-semibold">CUSTOMER COMMENDED</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-5xl font-normal text-[#FFFFFF] tracking-tight mb-4">
                  USMAN BHAI
                </h3>

                <div className="space-y-4 font-sans text-sm sm:text-base text-[#D8D0C6] leading-relaxed">
                  <p>
                    In the Google review corpus for Razor&apos;s Edge Ltd, long-term patron Muhammad Zia-ur-Rehman—who reported visiting regularly for approximately 5 years—specifically praised the beard trims, haircuts, and the fade team, giving particular honorable mention to Usman bhai.
                  </p>
                  <p>
                    We do not invent elaborate biographies or fabricated credentials. The work speaks through the consistency of client satisfaction in the chair.
                  </p>
                </div>

                <div className="p-4 bg-[#1C1C1C] border border-white/15 rounded-xs mt-6 mb-8 text-xs font-mono text-[#D8D0C6]">
                  <span className="font-bold text-[#8E2429] block mb-1">VERIFIED REVIEW CITATION:</span>
                  “Praising beard trims, haircuts, and the fade team, mentioning Usman bhai.” — Google Reviews
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => scrollTo('book', 'Fade')}
                    className="cursor-pointer bg-[#8E2429] hover:bg-[#721c20] text-[#FFFFFF] px-6 py-3 text-xs sm:text-sm font-semibold tracking-wider rounded-xs flex items-center gap-2 transition-colors shadow-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>BOOK APPOINTMENT</span>
                  </button>

                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/20 hover:border-white/50 bg-[#1A1A1A] text-[#F3EFE7] px-6 py-3 text-xs sm:text-sm font-semibold tracking-wider rounded-xs flex items-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#8E2429]" />
                    <span>ASK ABOUT AVAILABILITY</span>
                  </a>
                </div>
              </div>
            </div>

            {/* The Fade Team (Collective Language) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#141414] p-8 sm:p-12 border border-white/15 rounded-xs">
              <div className="lg:col-span-7">
                <span className="text-xs font-mono tracking-widest text-[#8E2429] uppercase">
                  COLLECTIVE CRAFT
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#FFFFFF] tracking-tight mt-1 mb-4">
                  THE FADE TEAM
                </h3>
                <p className="font-sans text-sm text-[#D8D0C6] leading-relaxed mb-4">
                  Our barbers work collectively under rigorous standards of clipper graduation, straight-edge razor hygiene, and client communication.
                </p>
                <p className="font-sans text-sm text-[#D8D0C6] leading-relaxed mb-6">
                  Whether you are requesting a high skin fade, a classic scissor contour, or a structured beard realignment, the staff brings cooperative handling and patience to every chair.
                </p>

                <div className="grid grid-cols-2 gap-4 text-xs font-mono text-[#D8D0C6] pt-4 border-t border-white/10">
                  <div>
                    <span className="text-[#8E2429] font-bold block">492 REVIEWS</span>
                    <span className="text-[#A7A9A8]">Consistently praised staff</span>
                  </div>
                  <div>
                    <span className="text-[#8E2429] font-bold block">FADE DISCIPLINE</span>
                    <span className="text-[#A7A9A8]">86 review keyword tags</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="aspect-[4/3] bg-[#0A0A0A] rounded-xs overflow-hidden border border-white/15">
                  <img
                    src={IMAGES.cutCraft}
                    alt="Hands of the fade team working with comb and shears"
                    className="w-full h-full object-cover grayscale contrast-125"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            9. LOCATION / CONTACT (id="visit")
           ======================================================== */}
        <section id="visit" className="py-20 sm:py-28 border-b border-white/10 bg-[#141414]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#8E2429] uppercase">
                  SECTION 09 · PHYSICAL LOCATION & GOOGLE MAPS NAVIGATION
                </span>
                <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#FFFFFF] mt-1 uppercase">
                  SECTOR Q · DHA PHASE 2
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#A7A9A8] mt-3 max-w-xl leading-relaxed">
                  Razor&apos;s Edge Ltd is situated in Sector Q, DHA Phase 2, Lahore. Easy access from Ghazi Road, Lalik Jan Chowk, and Ring Road with convenient commercial parking outside.
                </p>
              </div>

              {/* Direct Maps Quick Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Razor%27s+Edge+Ltd+Sector+Q+DHA+Phase+2+Lahore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#8E2429] hover:bg-[#721c20] text-[#FFFFFF] px-5 py-2.5 text-xs font-semibold tracking-wider rounded-xs flex items-center gap-2 transition-colors shadow-sm"
                >
                  <NavIcon className="w-4 h-4" />
                  <span>GET DIRECTIONS IN GOOGLE MAPS</span>
                </a>
              </div>
            </div>

            {/* Address Cards Grid - Crisp Bright Light Ivory Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-[#FAF7F2] text-[#111111] p-6 border border-black/15 rounded-xs shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8E2429] uppercase mb-3 font-bold">
                    <MapPin className="w-4 h-4" />
                    <span>EXACT ADDRESS</span>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#111111] mb-2">
                    Razor&apos;s Edge Ltd
                  </h4>
                  <address className="not-italic text-xs font-sans text-[#2E2D2B] leading-relaxed space-y-1">
                    <p className="font-bold text-[#111111]">Sector Q Commercial Area</p>
                    <p>DHA Phase 2, Cantt</p>
                    <p>Lahore, Punjab, Pakistan</p>
                  </address>
                </div>
                <div className="pt-4 mt-4 border-t border-black/10">
                  <a
                    href={BUSINESS_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono font-bold text-[#111111] hover:text-[#8E2429] hover:underline flex items-center gap-1"
                  >
                    <span>VIEW ON GOOGLE MAPS</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8E2429]" />
                  </a>
                </div>
              </div>

              <div className="bg-[#FAF7F2] text-[#111111] p-6 border border-black/15 rounded-xs shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8E2429] uppercase mb-3 font-bold">
                    <Phone className="w-4 h-4" />
                    <span>DIRECT TELEPHONE</span>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#111111] mb-2">
                    Phone & WhatsApp
                  </h4>
                  <p className="text-xs font-sans text-[#2E2D2B] mb-3">
                    Speak directly with staff regarding wait times, specific barber availability, or live location guidance.
                  </p>
                  <p className="font-mono text-sm font-bold text-[#111111]">
                    {BUSINESS_INFO.phone}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-black/10 flex items-center justify-between text-xs font-mono">
                  <a href={BUSINESS_INFO.phoneLink} className="text-[#8E2429] font-bold hover:underline">
                    CALL NOW
                  </a>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#111111] font-semibold hover:text-[#8E2429]"
                  >
                    WHATSAPP
                  </a>
                </div>
              </div>

              <div className="bg-[#FAF7F2] text-[#111111] p-6 border border-black/15 rounded-xs shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8E2429] uppercase mb-3 font-bold">
                    <Clock className="w-4 h-4" />
                    <span>LISTING SCHEDULE</span>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#111111] mb-2">
                    Operating Hours
                  </h4>
                  <p className="font-mono text-sm font-bold text-[#8E2429] mb-1">
                    Open · Closes 9 PM
                  </p>
                  <p className="text-xs font-sans text-[#2E2D2B] leading-relaxed">
                    Operating info reflected from the Google business listing. Check with the shop for current chair availability.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-black/10 text-xs font-mono text-[#666666]">
                  Open daily · Check ahead on holidays
                </div>
              </div>
            </div>

            {/* Embedded Google Map Frame with Natural Vibrant Map Colors */}
            <div className="bg-[#1A1A1A] border border-white/20 rounded-xs overflow-hidden shadow-2xl">
              <div className="p-4 bg-[#F8F6F0] text-[#111111] border-b border-black/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-[#8E2429] font-bold">
                    <MapPin className="w-3.5 h-3.5 fill-current" />
                    GOOGLE MAPS PIN:
                  </span>
                  <span className="font-semibold text-[#111111]">Razor&apos;s Edge Ltd, Sector Q, DHA Phase 2, Lahore</span>
                </div>
                <div className="flex items-center gap-4 text-[#444444]">
                  <span>~5 mins from Lalik Jan Chowk</span>
                  <span className="text-black/20">|</span>
                  <span>~7 mins from Ghazi Road</span>
                  <span className="text-black/20">|</span>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Razor%27s+Edge+Ltd+Sector+Q+DHA+Phase+2+Lahore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8E2429] font-bold hover:underline flex items-center gap-1"
                  >
                    <span>Start Navigation</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="aspect-[16/8] sm:aspect-[16/6] w-full bg-[#E5E3DF] relative">
                <iframe
                  title="Razor's Edge Ltd Google Map"
                  src="https://maps.google.com/maps?q=Razor's%20Edge%20Ltd%20Sector%20Q%20DHA%20Phase%202%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
                
                {/* Floating Map Navigation Badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-black/15 px-4 py-2 rounded-xs shadow-xl flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#8E2429] animate-pulse" />
                  <div className="text-[11px] font-mono">
                    <span className="font-bold text-[#111111] block">Razor&apos;s Edge Ltd</span>
                    <span className="text-[#555555]">Sector Q, DHA Phase 2, Lahore</span>
                  </div>
                  <a
                    href={BUSINESS_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-xs font-mono font-bold bg-[#8E2429] hover:bg-[#721c20] text-[#FFFFFF] px-2.5 py-1 rounded-xs transition-colors shadow-sm"
                  >
                    Open App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            10. FINAL CTA / DIRECT BOOKING FLOW (id="book") - LUMINOUS WARM IVORY
           ======================================================== */}
        <section id="book" className="py-20 sm:py-28 bg-[#F5F2EB] text-[#111111] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono tracking-widest text-[#8E2429] uppercase font-bold">
                SECTION 10 · DIRECT APPOINTMENT REQUEST
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#111111] tracking-tight mt-1 uppercase">
                WHEN ARE YOU GETTING CLEANED UP?
              </h2>
              <p className="font-serif italic text-lg sm:text-xl text-[#242321] mt-3 font-semibold">
                “Choose what you need. Tell us when. Send one message.”
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#444444] mt-2 max-w-lg mx-auto leading-relaxed">
                Eliminate vague back-and-forth messages. Configure your preferred grooming service and timing below to generate an exact WhatsApp appointment request.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Main Booking Form - Pure White Floating Pavilion */}
              <div className="lg:col-span-8 bg-white p-6 sm:p-10 border border-black/10 rounded-xs shadow-2xl text-[#111111]">
                <BookingFlowContent initialService={bookingService} isStandalonePage={true} />
              </div>

              {/* Context Sidebar - Crisp White Highlight Cards */}
              <div className="lg:col-span-4 space-y-6">
                <div className="p-6 bg-white border border-black/10 rounded-xs shadow-md space-y-4 text-[#111111]">
                  <span className="text-xs font-mono tracking-widest text-[#8E2429] uppercase block font-bold">
                    HOW BOOKING WORKS
                  </span>
                  <ol className="space-y-3 text-xs font-mono text-[#2E2D2B]">
                    <li className="flex gap-2">
                      <span className="font-bold text-[#8E2429]">1.</span>
                      <span>Select service and ideal timing window.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-[#8E2429]">2.</span>
                      <span>A unique tracking reference is generated.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-[#8E2429]">3.</span>
                      <span>WhatsApp opens with your exact request.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-[#8E2429]">4.</span>
                      <span>Shop staff checks chair schedule and confirms.</span>
                    </li>
                  </ol>
                </div>

                <div className="p-6 bg-white border border-black/10 rounded-xs shadow-md space-y-3 text-xs font-mono text-[#111111]">
                  <span className="text-[11px] font-mono tracking-widest text-[#8E2429] uppercase block font-bold">
                    SHOP CONTACT INFO
                  </span>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#8E2429]" />
                    <span>Sector Q, DHA Phase 2, Lahore</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#8E2429]" />
                    <a href={BUSINESS_INFO.phoneLink} className="hover:underline font-bold text-[#111111]">
                      {BUSINESS_INFO.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#8E2429]" />
                    <span>{BUSINESS_INFO.operatingInfo}</span>
                  </p>
                </div>

                <div className="p-6 bg-[#111111] text-white rounded-xs shadow-xl text-xs font-sans border border-white/10">
                  <span className="font-serif text-sm block mb-1 text-[#FFFFFF] font-bold">
                    Prefer calling directly?
                  </span>
                  <p className="text-[#A7A9A8] mb-4 text-xs leading-relaxed">
                    Call our front desk for quick chair availability checks in Sector Q.
                  </p>
                  <a
                    href={BUSINESS_INFO.phoneLink}
                    className="inline-block bg-[#8E2429] hover:bg-[#721c20] text-[#FFFFFF] py-2.5 px-5 rounded-xs font-mono text-xs font-bold transition-colors shadow-md"
                  >
                    CALL {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================
          11. FOOTER (id="footer")
         ======================================================== */}
      <Footer onOpenBookingModal={() => setIsBookingModalOpen(true)} />

      {/* Mobile Booking Bottom Dock */}
      <MobileBookingDock onOpenBooking={() => scrollTo('book')} />

      {/* Quick Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialService={bookingService}
      />
    </div>
  );
}
