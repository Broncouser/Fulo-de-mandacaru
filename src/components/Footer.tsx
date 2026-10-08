import React from 'react';
import { BRAND, OFFICIAL_IMAGES, OFFICIAL_LINKS } from '../data/constants.ts';
import {
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
  GoogleMapsIcon,
} from './BrandIcons.tsx';

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full py-12 px-4 sm:px-6 bg-[#080503] border-t border-[#b86e28]/25 text-center text-xs text-[#a88d75] overflow-hidden">
      
      {/* Decorative top accent line */}
      <div className="h-[1px] max-w-md mx-auto bg-gradient-to-r from-transparent via-[#b86e28]/40 to-transparent mb-8" />

      <div className="max-w-xl mx-auto flex flex-col items-center">
        
        {/* LOGO OFICIAL NO RODAPÉ + SELO OFICIAL TRIPADVISOR AO LADO (ITEM 8) */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-5">
          {/* Logo Oficial Fulô de Mandacaru */}
          <div className="p-1.5 rounded-2xl bg-gradient-to-b from-[#22150d] to-[#120a06] border border-[#b86e28]/35 shadow-xl">
            <img
              src={OFFICIAL_IMAGES.logo}
              alt="Logo Oficial Fulô de Mandacaru Bistrô"
              className="w-32 sm:w-40 h-auto object-contain rounded-xl"
              loading="lazy"
            />
          </div>

          {/* Selo Elegante de Reconhecimento TripAdvisor ao lado da identidade da marca (Tamanho visual equivalente à logo oficial) */}
          <a
            href={OFFICIAL_LINKS.tripAdvisor}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-2xl bg-[#0e1410] border border-[#00AA6C]/35 shadow-lg hover:border-[#00AA6C] hover:scale-105 transition-all duration-300"
            title="Ver no TripAdvisor - 4,7 Estrelas"
          >
            <img
              src={OFFICIAL_IMAGES.tripAdvisorLogo}
              alt="TripAdvisor Selo Oficial"
              className="w-28 sm:w-36 h-auto object-contain"
              loading="lazy"
            />
            <span className="text-[9px] font-bold text-[#34d399] tracking-wider uppercase mt-1">
              Certificado
            </span>
          </a>
        </div>

        {/* IDENTIDADE DA MARCA & FRASE PRINCIPAL */}
        <h3 className="font-display-luxury text-base sm:text-lg font-bold text-[#fbf4ea] uppercase tracking-wide mb-1">
          {BRAND.name}
        </h3>

        <p className="font-serif-luxury italic text-sm text-[#e8b57b] mb-2">
          “{BRAND.tagline}”
        </p>

        <p className="text-xs text-[#b89a80] mb-6">
          {BRAND.city} · Tradição e Alta Gastronomia Nordestina
        </p>

        {/* Canais Oficiais no Rodapé (com a imagem oficial do TripAdvisor no respectivo botão/link - ITEM 9) */}
        <div className="flex items-center justify-center gap-3.5 sm:gap-4 mb-8">
          <a
            href={OFFICIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-[#1b110a] border border-[#25D366]/40 flex items-center justify-center text-[#25D366] hover:scale-110 transition-transform shadow-md"
            title="WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>

          <a
            href={OFFICIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-[#1b110a] border border-[#E1306C]/40 flex items-center justify-center text-[#E1306C] hover:scale-110 transition-transform shadow-md"
            title="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>

          <a
            href={OFFICIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-[#1b110a] border border-[#1877F2]/40 flex items-center justify-center text-[#1877F2] hover:scale-110 transition-transform shadow-md"
            title="Facebook"
          >
            <FacebookIcon className="w-4 h-4" />
          </a>

          {/* Botão/Link TripAdvisor com a imagem oficial da logo (ITEM 9) */}
          <a
            href={OFFICIAL_LINKS.tripAdvisor}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-[#0d1410] border border-[#00AA6C]/45 flex items-center justify-center p-1.5 hover:scale-110 hover:border-[#00AA6C] transition-all shadow-md"
            title="TripAdvisor"
          >
            <img
              src={OFFICIAL_IMAGES.tripAdvisorLogo}
              alt="TripAdvisor"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </a>

          <a
            href={OFFICIAL_LINKS.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-[#1b110a] border border-[#EA4335]/40 flex items-center justify-center text-[#EA4335] hover:scale-110 transition-transform shadow-md"
            title="Google Maps"
          >
            <GoogleMapsIcon className="w-4 h-4" />
          </a>
        </div>

        <div className="text-[11px] text-[#7a6452] mb-5">
          <p>© {new Date().getFullYear()} {BRAND.name}. Todos os direitos reservados.</p>
        </div>

        {/* CRÉDITO FINAL ABSOLUTO — DESENVOLVIDO POR TCONDE (NÃO CLICÁVEL, 3D SUAVE & PULSANTE) */}
        <div className="pt-4 border-t border-[#b86e28]/15 w-full flex justify-center items-center select-none pointer-events-none">
          <span 
            className="tconde-credit-3d text-[11px] sm:text-xs font-semibold tracking-wider uppercase drop-shadow cursor-default select-none"
            aria-label="Desenvolvido por TCONDE"
          >
            Desenvolvido por TCONDE
          </span>
        </div>

      </div>
    </footer>
  );
};
