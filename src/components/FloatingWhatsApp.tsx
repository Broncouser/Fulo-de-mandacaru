import React, { useState } from 'react';
import { OFFICIAL_LINKS } from '../data/constants.ts';
import { WhatsAppIcon } from './BrandIcons.tsx';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50 flex items-center gap-3">
      
      {/* Subtle floating badge tooltip */}
      <div 
        className={`hidden sm:block px-3 py-1.5 rounded-xl bg-[#1a110a]/95 border border-[#25D366]/40 text-[#fbf5ee] text-xs font-medium shadow-2xl backdrop-blur-md transition-all duration-300 pointer-events-none ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="text-[#25D366] font-bold">Fulô de Mandacaru:</span> Fale conosco no WhatsApp
      </div>

      {/* Floating 3D Button with subtle glow pulse */}
      <a
        href={OFFICIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="btn-emboss-whatsapp animate-subtle-pulse relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full text-white cursor-pointer shadow-2xl"
        aria-label="Falar conosco no WhatsApp"
        title="Falar no WhatsApp com o Fulô de Mandacaru Bistrô"
      >
        <WhatsAppIcon className="w-8 h-8 sm:w-9 sm:h-9 filter drop-shadow-md" />
        
        {/* Subtle top gloss badge */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-[#128C7E]" />
      </a>

    </div>
  );
};
