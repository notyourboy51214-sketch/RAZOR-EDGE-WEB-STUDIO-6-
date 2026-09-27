import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/content';
import { Menu, X, Phone, MessageSquare, Calendar, ChevronRight } from 'lucide-react';

interface NavigationProps {
  onOpenBookingModal?: (servicePreselect?: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenBookingModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect active section on scroll
      const sections = ['home', 'story', 'services', 'approach', 'visual-story', 'reviews', 'process', 'team', 'visit', 'book'];
      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
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

  const navItems = [
    { id: 'home', num: '01', label: 'THE CUT' },
    { id: 'services', num: '02', label: 'SERVICES' },
    { id: 'approach', num: '03', label: 'FADES & BEARDS' },
    { id: 'visual-story', num: '04', label: 'THE SHOP' },
    { id: 'reviews', num: '05', label: 'REVIEWS' },
    { id: 'process', num: '06', label: 'THE CRAFT' },
    { id: 'team', num: '07', label: 'THE TEAM' },
    { id: 'visit', num: '08', label: 'VISIT' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Lockup */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('home')}
              className="group text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#8E2429]"
              aria-label="Razor's Edge Ltd - Scroll to top"
            >
              <span className="block font-serif text-lg sm:text-xl font-bold tracking-tight text-[#F3EFE7] leading-none group-hover:text-[#C5C6C5] transition-colors">
                RAZOR&apos;S EDGE
              </span>
              <span className="block text-[10px] tracking-wider text-[#A7A9A8] font-sans mt-0.5">
                SECTOR Q · DHA PHASE 2 · LAHORE
              </span>
            </button>
          </div>

          {/* Desktop Nav Shortcuts & Anchor Links */}
          <div className="hidden lg:flex items-center gap-7">
            <nav className="flex items-center gap-5 text-xs tracking-wider font-medium text-[#D8D0C6]">
              {navItems.slice(0, 5).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`cursor-pointer transition-colors relative py-1 hover:text-[#FFFFFF] ${
                    activeSection === item.id
                      ? 'text-[#FFFFFF] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#8E2429]'
                      : 'text-[#D8D0C6]/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="h-4 w-px bg-white/20" aria-hidden="true" />

            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium tracking-wider text-[#F3EFE7] hover:text-[#FFFFFF] transition-colors py-2 px-3 border border-white/20 hover:border-white/40 rounded-xs flex items-center gap-1.5 bg-[#171717]"
                title="Open WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#8E2429]" />
                <span className="hidden xl:inline">WHATSAPP</span>
              </a>

              <button
                onClick={() => scrollToSection('book')}
                className="cursor-pointer text-xs font-bold tracking-wider text-[#111111] bg-[#F8F6F0] hover:bg-white transition-all py-2 px-4 rounded-xs shadow-md flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8E2429]"
              >
                <Calendar className="w-3.5 h-3.5 text-[#8E2429]" />
                <span>BOOK A SLOT</span>
              </button>
            </div>
          </div>

          {/* Hamburger / Menu Trigger for Complete Index */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer p-2 rounded-xs border border-white/20 text-[#F3EFE7] hover:border-white/50 hover:text-[#FFFFFF] transition-colors flex items-center gap-2 text-xs font-medium tracking-wider focus-visible:outline-2 focus-visible:outline-[#8E2429] bg-[#141414]"
              aria-expanded={isOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span className="hidden sm:inline">{isOpen ? 'CLOSE' : 'INDEX'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen / Off-Canvas Editorial Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#0A0A0A] text-[#F3EFE7] flex flex-col justify-between p-6 sm:p-12 lg:p-16 animate-fadeIn">
          {/* Drawer Top */}
          <div className="flex items-center justify-between border-b border-white/15 pb-6">
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#F3EFE7]">
                RAZOR&apos;S EDGE LTD
              </span>
              <span className="block text-xs text-[#A7A9A8] font-sans mt-0.5">
                Sector Q, DHA Phase 2, Lahore · +92 321 4197477
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="cursor-pointer p-2.5 rounded-xs border border-white/20 hover:border-white/60 text-[#F3EFE7] transition-colors flex items-center gap-2 text-xs tracking-wider"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
              <span className="hidden sm:inline">CLOSE</span>
            </button>
          </div>

          {/* Drawer Navigation List */}
          <div className="my-auto py-8 grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-12 max-w-4xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group flex items-baseline justify-between text-left py-2 border-b border-white/10 hover:border-[#8E2429] transition-all cursor-pointer"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-[#A7A9A8] group-hover:text-[#8E2429] transition-colors">
                    {item.num}
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F3EFE7] group-hover:translate-x-2 transition-transform duration-200">
                    {item.label}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-[#A7A9A8] opacity-0 group-hover:opacity-100 group-hover:text-[#8E2429] transition-all" />
              </button>
            ))}

            <button
              onClick={() => scrollToSection('book')}
              className="group flex items-baseline justify-between text-left py-2 border-b border-[#8E2429]/60 hover:border-[#8E2429] transition-all cursor-pointer bg-[#8E2429]/15 px-2"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-[#8E2429]">09</span>
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F3EFE7] group-hover:translate-x-2 transition-transform duration-200">
                  BOOK A SLOT
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-[#8E2429]" />
            </button>
          </div>

          {/* Drawer Footer Micro-Info */}
          <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A7A9A8]">
            <div>
              <span className="font-semibold text-[#F3EFE7]">4.8 / 5 Rating</span>
              <span className="mx-2">·</span>
              <span>492 Google Reviews</span>
              <span className="mx-2">·</span>
              <span>Open Closes 9 PM</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href={BUSINESS_INFO.phoneLink}
                className="hover:text-[#F3EFE7] flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5C6C5]" />
                {BUSINESS_INFO.phone}
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F3EFE7] flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#8E2429]" />
                WhatsApp Direct
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
