import React from 'react';
import { Star, MapPin, ExternalLink, MessageSquareHeart } from 'lucide-react';

export const GoogleReviewSection: React.FC = () => {
  return (
    <section className="relative w-full py-12 px-4 sm:px-6 bg-gradient-to-b from-[#100a06] via-[#140c08] to-[#0d0805] border-t border-[#b86e28]/25 overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 blur-[100px]"
        style={{ background: '#e59b4c' }}
      />

      <div className="relative max-w-xl mx-auto text-center">
        
        {/* Badge Elegante */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#20140c] border border-[#b86e28]/35 mb-3 shadow-sm">
          <MessageSquareHeart className="w-3.5 h-3.5 text-[#e59b4c]" />
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-[#e8b57b]">
            Opinião dos Clientes
          </span>
        </div>

        {/* Título Principal */}
        <h2 className="font-display-luxury text-xl sm:text-2xl font-extrabold tracking-wide text-[#fdf6ee] uppercase mb-2">
          AVALIE SUA EXPERIÊNCIA NO FULÔ
        </h2>

        {/* Subtítulo */}
        <p className="text-xs sm:text-sm text-[#e59b4c] font-serif-luxury italic font-medium mb-3">
          Sua experiência é muito importante para nós.
        </p>

        {/* Card Editorial de Avaliação */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#1f130b]/95 via-[#160d07]/95 to-[#100905]/95 border border-[#b86e28]/35 shadow-[0_10px_30px_rgba(0,0,0,0.65)] backdrop-blur-sm">
          
          {/* Texto Complementar */}
          <p className="text-xs sm:text-[13px] text-[#e8d2bd] font-sans-clean font-light leading-relaxed mb-4 max-w-md mx-auto">
            Se você gostou da experiência no Fulô de Mandacaru, deixe sua avaliação no Google Maps e compartilhe sua experiência com outras pessoas.
          </p>

          {/* Destaque Visual das 5 Estrelas */}
          <div className="flex items-center justify-center gap-1.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#fbbf24] fill-[#fbbf24] drop-shadow-[0_2px_8px_rgba(251,191,36,0.4)] transition-transform duration-300 hover:scale-110" 
              />
            ))}
          </div>

          {/* Texto de incentivo */}
          <p className="text-[11px] sm:text-xs font-bold text-[#faeedc] tracking-wider uppercase mb-5">
            AVALIE O FULÔ DE MANDACARU COM 5 ESTRELAS
          </p>

          {/* Botão / CTA */}
          <div className="flex justify-center">
            <a
              href="https://maps.app.goo.gl/V5wLCjRnkysGxmor7?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#b86e28] via-[#d9822b] to-[#b86e28] text-[#120803] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_6px_20px_rgba(184,110,40,0.4)] hover:shadow-[0_8px_25px_rgba(229,155,76,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <MapPin className="w-4 h-4 text-[#120803] shrink-0" />
              <span>AVALIAR NO GOOGLE MAPS</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#120803]/80 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
