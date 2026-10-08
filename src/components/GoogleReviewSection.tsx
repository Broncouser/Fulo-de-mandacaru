import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { OFFICIAL_IMAGES, OFFICIAL_LINKS } from '../data/constants.ts';

export const GoogleReviewSection: React.FC = () => {
  return (
    <section className="relative w-full py-14 px-4 sm:px-6 bg-gradient-to-b from-[#110b07] via-[#140c09] to-[#0f0906] border-y border-[#b86e28]/25 overflow-hidden">
      
      {/* Luz ambiente refinada inspirada sutilmente nas cores do Google */}
      <div 
        className="pointer-events-none absolute -left-20 top-1/4 w-72 h-72 rounded-full opacity-[0.08] blur-[95px]"
        style={{ background: '#4285F4' }}
      />
      <div 
        className="pointer-events-none absolute -right-20 top-1/3 w-72 h-72 rounded-full opacity-[0.08] blur-[95px]"
        style={{ background: '#EA4335' }}
      />
      <div 
        className="pointer-events-none absolute left-1/3 bottom-0 w-64 h-64 rounded-full opacity-[0.07] blur-[90px]"
        style={{ background: '#FBBC05' }}
      />
      <div 
        className="pointer-events-none absolute right-1/4 bottom-0 w-64 h-64 rounded-full opacity-[0.07] blur-[90px]"
        style={{ background: '#34A853' }}
      />

      {/* Linha decorativa sutil com as 4 cores do Google no topo da seção */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-72 h-[2px] bg-gradient-to-r from-transparent via-[#4285F4] via-[#EA4335] via-[#FBBC05] via-[#34A853] to-transparent opacity-60" />

      <div className="relative max-w-xl mx-auto text-center">
        
        {/* LOGO OFICIAL DO GOOGLE MAPS EM DESTAQUE (+20% em formato natural sem enquadramento quadrado artificial) */}
        <div className="inline-flex flex-col items-center mb-5">
          <div className="relative group transition-transform duration-300 hover:scale-105">
            {/* Halo sutil de luz suave com cores do Google */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#4285F4]/30 via-[#EA4335]/30 to-[#34A853]/30 opacity-60 blur-xl -z-10" />
            <img
              src={OFFICIAL_IMAGES.googleMapsLogo}
              alt="Logo Oficial do Google Maps"
              className="w-20 sm:w-24 h-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.65)] rounded-2xl"
              loading="lazy"
            />
          </div>

          {/* Micro-badge com as 4 cores do Google */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mt-3 rounded-full bg-[#1c120b] border border-[#b86e28]/30 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#e8b57b] ml-1">
              Google Maps
            </span>
          </div>
        </div>

        {/* Título Principal Convidativo */}
        <h2 className="font-display-luxury text-xl sm:text-2xl md:text-[26px] font-extrabold tracking-wide text-[#fdf6ee] uppercase mb-2">
          Gostou da experiência no Fulô de Mandacaru?
        </h2>

        {/* Mensagem Afetiva */}
        <p className="text-sm sm:text-base text-[#e59b4c] font-serif-luxury italic font-medium mb-5">
          Sua experiência é muito importante para nós ❤️
        </p>

        {/* Card Editorial de Avaliação */}
        <div className="relative p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#1e130c]/95 via-[#160d08]/95 to-[#100905]/95 border border-[#b86e28]/35 shadow-[0_12px_32px_rgba(0,0,0,0.65)] backdrop-blur-md">
          
          {/* Detalhe de borda com as cores do Google no topo do card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-[2px] bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853] rounded-full" />

          {/* Texto de convite */}
          <p className="text-sm sm:text-[15px] text-[#ebd8c5] font-sans-clean font-light leading-relaxed mb-5 max-w-md mx-auto">
            Conte para outras pessoas como foi sua experiência e deixe sua avaliação no Google Maps.
          </p>

          {/* Destaque Visual das 5 Estrelas Douradas */}
          <div className="flex items-center justify-center gap-1.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="w-6 h-6 sm:w-7 sm:h-7 text-[#fbbf24] fill-[#fbbf24] drop-shadow-[0_2px_10px_rgba(251,191,36,0.55)] transition-transform duration-300 hover:scale-125 cursor-default" 
              />
            ))}
          </div>

          <p className="text-[11px] sm:text-xs font-semibold text-[#f8e5d0] tracking-wider uppercase mb-6">
            Avalie o Fulô de Mandacaru com 5 Estrelas
          </p>

          {/* BOTÃO DE DESTAQUE PREMIUM COM AS CORES DO GOOGLE */}
          <div className="flex justify-center">
            <a
              href={OFFICIAL_LINKS.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#1b120c] via-[#241710] to-[#1b120c] border border-[#4285F4]/60 text-[#ffffff] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_8px_25px_rgba(0,0,0,0.7)] hover:border-[#EA4335] hover:shadow-[0_10px_30px_rgba(66,133,244,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              {/* Barra sutil colorida na base do botão */}
              <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853] rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />

              <span className="text-base text-[#fbbf24] drop-shadow-sm">⭐</span>
              <span className="font-bold tracking-wide">AVALIAR NO GOOGLE MAPS</span>
              <ExternalLink className="w-4 h-4 text-[#ffffff]/80 group-hover:translate-x-0.5 group-hover:text-white transition-all" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
