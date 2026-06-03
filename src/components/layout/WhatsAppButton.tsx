'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '242064000000';
  const message = encodeURIComponent("Bonjour ! Je souhaite avoir des informations sur les formations de l'EGJP.");
  const href = `https://wa.me/${number}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip bubble */}
      <div
        className={`bg-[#1A0F00] text-white/90 text-sm font-barlow py-2 px-4 shadow-[0_4px_20px_rgba(26,15,0,0.5)] border border-[#E8A020]/20 max-w-[200px] text-center transition-all duration-300 ${
          showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        Besoin d&apos;infos ?<br />
        <span className="text-[#E8A020] font-semibold">Écrivez-nous !</span>
        <div className="absolute -bottom-1.5 right-7 w-3 h-3 bg-[#1A0F00] border-r border-b border-[#E8A020]/20 rotate-45" />
      </div>

      {/* Main button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Contactez-nous sur WhatsApp"
        className="relative w-14 h-14 bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-300 active:scale-95"
        style={{
          animation: 'whatsappPulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }}
      >
        <MessageCircle size={26} strokeWidth={1.5} />
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-none"
          style={{
            boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.6)',
            animation: 'whatsappRing 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }}
        />
      </a>

      <style jsx global>{`
        @keyframes whatsappPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes whatsappRing {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
      `}</style>
    </div>
  );
}
