import React from 'react';
import { BUSINESS_INFO } from '../data/content';
import { Phone, MessageSquare, MapPin, ArrowUpRight, Clock } from 'lucide-react';

interface FooterProps {
  onOpenBookingModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBookingModal }) => {
  const navLinks = [
    { id: 'home', label: 'The Cut (Top)' },
    { id: 'services', label: 'Services' },
    { id: 'approach', label: 'Fades & Beards' },
    { id: 'visual-story', label: 'The Shop' },
    { id: 'reviews', label: 'Customer Reviews' },
    { id: 'process', label: 'The Craft' },
    { id: 'team', label: 'The Team' },
    { id: 'visit', label: 'Location & Visit' },
    { id: 'book', label: 'Book a Slot' },
  ];

  const scrollToSection = (id: string) => {
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

  return (
    <footer id="footer" className="bg-[#070707] text-[#F3EFE7] pt-16 pb-24 lg:pb-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand & Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/15">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#FFFFFF]">
              RAZOR&apos;S EDGE LTD
            </h2>
            <p className="font-sans text-xs tracking-widest uppercase text-[#A7A9A8] mt-2 mb-6">
              Sector Q · DHA Phase 2 · Lahore, Pakistan
            </p>
            <p className="font-sans text-sm text-[#D8D0C6] max-w-md leading-relaxed">
              Craft, precision, and consistency in men&apos;s grooming. Known locally for trained staff, clean fades, and beard geometry.
            </p>

            {/* Quick Proof Badge without pills */}
            <div className="mt-8 flex items-baseline gap-4 text-xs font-mono text-[#D8D0C6]">
              <span className="text-2xl font-serif text-[#FFFFFF] font-bold">4.8</span>
              <span>/ 5.0</span>
              <span className="text-[#A7A9A8]">·</span>
              <span>492 Google Reviews</span>
              <span className="text-[#A7A9A8]">·</span>
              <span className="text-[#A7A9A8] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#8E2429]" />
                {BUSINESS_INFO.operatingInfo}
              </span>
            </div>
          </div>

          {/* Quick Direct Actions */}
          <div className="lg:col-span-3 space-y-4">
            <span className="block text-xs font-mono tracking-widest text-[#A7A9A8] uppercase">
              CONTACT & VISIT
            </span>
            <div className="space-y-3 text-sm">
              <a
                href={BUSINESS_INFO.phoneLink}
                className="flex items-center gap-2 text-[#D8D0C6] hover:text-[#FFFFFF] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5C6C5]" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#D8D0C6] hover:text-[#FFFFFF] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#8E2429]" />
                <span>WhatsApp Enquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A7A9A8]" />
              </a>

              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#D8D0C6] hover:text-[#FFFFFF] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#C5C6C5]" />
                <span>Get Directions (Maps)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A7A9A8]" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={() => scrollToSection('book')}
                className="cursor-pointer inline-flex items-center gap-2 bg-[#8E2429] hover:bg-[#721c20] text-[#FFFFFF] py-2 px-4 rounded-xs text-xs font-semibold tracking-wider transition-colors shadow-sm"
              >
                <span>BOOK A SLOT</span>
              </button>
            </div>
          </div>

          {/* Complete Section Navigation (Anchors on the same page) */}
          <div className="lg:col-span-3">
            <span className="block text-xs font-mono tracking-widest text-[#A7A9A8] uppercase mb-4">
              PAGE DIRECTORY
            </span>
            <ul className="grid grid-cols-2 gap-y-2.5 text-xs text-[#D8D0C6]">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="cursor-pointer hover:text-[#FFFFFF] hover:translate-x-1 transition-all text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Realistic Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A7A9A8] font-mono">
          <p>© {new Date().getFullYear()} Razor&apos;s Edge Ltd. Sector Q, DHA Phase 2, Lahore.</p>
          <p className="text-[11px] text-[#A7A9A8]/80">
            Current listing operating hours: Closes 9 PM. Please check availability before traveling.
          </p>
        </div>
      </div>
    </footer>
  );
};
