import React, { useState, useEffect } from 'react';
import { ServiceType } from '../types';
import { BUSINESS_INFO } from '../data/content';
import { X, Send, Calendar, Clock, Check, Copy } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceType | string;
}

const SERVICES: ServiceType[] = [
  'Haircut',
  'Fade',
  'Beard Trim',
  'Haircut + Beard',
  'Other',
];

const DAYS = ['Today', 'Tomorrow', 'This Friday', 'This Saturday', 'This Sunday', 'Select Date'];
const TIMES = [
  'Morning (11:00 AM - 1:00 PM)',
  'Afternoon (1:00 PM - 4:00 PM)',
  'Late Afternoon (4:00 PM - 6:30 PM)',
  'Evening (6:30 PM - 8:30 PM)',
];

export const BookingFlowContent: React.FC<{
  initialService?: ServiceType | string;
  onDone?: () => void;
  isStandalonePage?: boolean;
}> = ({ initialService, onDone, isStandalonePage = false }) => {
  const [service, setService] = useState<ServiceType>(
    (initialService as ServiceType) || 'Fade'
  );
  const [day, setDay] = useState<string>('Today');
  const [customDay, setCustomDay] = useState<string>('');
  const [time, setTime] = useState<string>('Afternoon (1:00 PM - 4:00 PM)');
  const [note, setNote] = useState<string>('');
  const [referenceId, setReferenceId] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setReferenceId(`RE-${randomNum}`);
  }, []);

  useEffect(() => {
    if (initialService && SERVICES.includes(initialService as ServiceType)) {
      setService(initialService as ServiceType);
    }
  }, [initialService]);

  const resolvedDay = day === 'Select Date' ? customDay || 'Upcoming day' : day;

  const generatedMessage = `Assalam o Alaikum, I'd like to book a ${service} at Razor's Edge Ltd. My preferred day is ${resolvedDay} and preferred time is ${time}.${
    note.trim() ? ` Note: ${note.trim()}.` : ''
  } [Ref: ${referenceId}] Please confirm availability.`;

  const encodedUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    generatedMessage
  )}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Step 1: Service */}
      <div>
        <label className="block text-xs font-mono font-semibold tracking-wider text-[#111111] uppercase mb-2.5">
          01. WHAT ARE YOU BOOKING FOR?
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {SERVICES.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setService(item)}
              className={`cursor-pointer py-2.5 px-3 text-xs font-medium text-left border rounded-xs transition-all ${
                service === item
                  ? 'bg-[#111111] text-[#FFFFFF] font-semibold border-[#111111] shadow-sm'
                  : 'bg-white text-[#111111] border-black/15 hover:border-black/40 hover:bg-[#F8F6F0]'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Preferred Day */}
      <div>
        <label className="block text-xs font-mono font-semibold tracking-wider text-[#111111] uppercase mb-2.5">
          02. PREFERRED DAY
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {DAYS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setDay(item)}
              className={`cursor-pointer py-2 px-3 text-xs font-medium text-left border rounded-xs transition-all ${
                day === item
                  ? 'bg-[#111111] text-[#FFFFFF] font-semibold border-[#111111]'
                  : 'bg-white text-[#111111] border-black/15 hover:border-black/40 hover:bg-[#F8F6F0]'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        {day === 'Select Date' && (
          <input
            type="date"
            onChange={(e) => setCustomDay(e.target.value)}
            className="mt-2 w-full p-2 bg-white border border-black/20 rounded-xs text-xs font-sans text-[#111111] focus:outline-[#8E2429]"
          />
        )}
      </div>

      {/* Step 3: Preferred Time */}
      <div>
        <label className="block text-xs font-mono font-semibold tracking-wider text-[#111111] uppercase mb-2.5">
          03. PREFERRED TIME WINDOW
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {TIMES.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTime(item)}
              className={`cursor-pointer py-2 px-3 text-xs font-medium text-left border rounded-xs transition-all ${
                time === item
                  ? 'bg-[#111111] text-[#FFFFFF] font-semibold border-[#111111]'
                  : 'bg-white text-[#111111] border-black/15 hover:border-black/40 hover:bg-[#F8F6F0]'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="text-[11px] text-[#666666] mt-1.5 font-mono">
          Operating hours: Open · Closes 9 PM.
        </p>
      </div>

      {/* Step 4: Optional Note */}
      <div>
        <label className="block text-xs font-mono font-semibold tracking-wider text-[#111111] uppercase mb-1.5">
          04. OPTIONAL NOTE
        </label>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="E.g. low fade, temple taper, or specific barber preference if any"
          className="w-full p-2.5 bg-white border border-black/15 rounded-xs text-xs font-sans text-[#111111] placeholder:text-[#888888] focus:border-[#8E2429] focus:outline-none"
        />
      </div>

      {/* Message Output Card (Light highlight element) */}
      <div className="p-4 bg-white text-[#171717] rounded-xs shadow-md border border-black/15">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] tracking-widest uppercase font-mono font-bold text-[#8E2429]">
              ENQUIRY READY
            </span>
            <span className="text-xs font-mono font-bold text-[#171717]">
              REF: {referenceId}
            </span>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="cursor-pointer text-[11px] font-mono text-[#171717] hover:text-[#8E2429] flex items-center gap-1 font-semibold"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#8E2429]" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <p className="text-xs font-mono leading-relaxed bg-[#F8F6F0] p-3 rounded-xs border border-black/10 text-[#242321]">
          {generatedMessage}
        </p>

        <p className="text-[11px] text-[#8E2429] font-medium mt-3 leading-normal flex items-start gap-1.5 font-sans">
          <span>*</span>
          <span>
            This sends your request to the shop. Your appointment is only confirmed once the shop confirms availability.
          </span>
        </p>
      </div>

      {/* Action */}
      <div className="pt-2">
        <a
          href={encodedUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onDone}
          className="w-full bg-[#8E2429] hover:bg-[#721c20] text-[#FFFFFF] py-3.5 px-6 rounded-xs font-sans text-xs sm:text-sm font-semibold tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
        >
          <Send className="w-4 h-4" />
          <span>SEND ON WHATSAPP (+92 321 4197477)</span>
        </a>
      </div>
    </div>
  );
};

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
    >
      <div className="bg-[#F8F6F0] max-w-xl w-full max-h-[90vh] overflow-y-auto rounded-xs shadow-2xl p-6 sm:p-8 border border-black/15 text-[#111111]">
        <div className="flex items-start justify-between border-b border-black/10 pb-4 mb-6">
          <div>
            <span className="text-[11px] font-mono font-semibold tracking-wider text-[#8E2429] uppercase">
              Razor&apos;s Edge Ltd · Sector Q, DHA Phase 2
            </span>
            <h2 id="booking-title" className="font-serif text-2xl font-bold text-[#111111] mt-0.5">
              BOOK A SLOT
            </h2>
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer p-1.5 text-[#666666] hover:text-[#111111] transition-colors rounded-xs border border-transparent hover:border-black/20"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <BookingFlowContent initialService={initialService} onDone={onClose} />
      </div>
    </div>
  );
};
