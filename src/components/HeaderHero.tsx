import React from 'react';
import { BRAND, OFFICIAL_IMAGES, OFFICIAL_LINKS } from '../data/constants.ts';
import {
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
  GoogleMapsIcon,
} from './BrandIcons.tsx';
import { MapPin, ChevronDown } from 'lucide-react';

export const HeaderHero: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      {/* ==================================================
          1. CABEÇALHO HORIZONTAL FINO & COMPACTO
          - Ocupa 100% da largura da tela (extrema esquerda à extrema direita)
          - Barra superior fina: ~1cm de altura (h-11 sm:h-12)
          - LOGO PEQUENA NO CANTO SUPERIOR ESQUERDO
          - ÍCONES DAS REDES SOCIAIS NO CANTO SUPERIOR DIREITO
          ================================================== */}
      <header className="sticky top-0 z-40 w-full h-11 sm:h-12 bg-[#120a06]/95 backdrop-blur-md border-b border-[#b86e28]/25 shadow-md px-3 sm:px-6 flex items-center justify-between">
        
        {/* LADO ESQUERDO: LOGO OFICIAL PEQUENA & QUADRADA */}
        <div className="flex items-center">
          <img
            src={OFFICIAL_IMAGES.logo}
            alt="Logo Fulô de Mandacaru Bistrô"
            className="h-8 w-8 sm:h-9 sm:w-9 object-contain rounded-md shadow-sm border border-[#b86e28]/25"
            loading="eager"
          />
        </div>

        {/* LADO DIREITO: ÍCONES DAS MÍDIAS SOCIAIS OFICIAIS (Aumentada em aproximadamente 10%) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 scale-110 origin-right mr-1">
          {/* WhatsApp */}
          <a
            href={OFFICIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1b1009] border border-[#25D366]/30 flex items-center justify-center text-[#25D366] hover:scale-110 hover:border-[#25D366] transition-all shadow-sm"
            title="WhatsApp Oficial"
            aria-label="WhatsApp Oficial"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>

          {/* Instagram */}
          <a
            href={OFFICIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1b1009] border border-[#E1306C]/30 flex items-center justify-center text-[#E1306C] hover:scale-110 hover:border-[#E1306C] transition-all shadow-sm"
            title="Instagram Oficial"
            aria-label="Instagram Oficial"
          >
            <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>

          {/* Google Maps (Levemente aumentado em 15% para perfeito equilíbrio visual) */}
          <a
            href={OFFICIAL_LINKS.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#1b1009] border border-[#EA4335]/35 flex items-center justify-center text-[#EA4335] hover:scale-110 hover:border-[#EA4335] transition-all shadow-sm"
            title="Google Maps"
            aria-label="Google Maps"
          >
            <GoogleMapsIcon className="w-[17px] h-[17px] sm:w-[19px] sm:h-[19px]" />
          </a>

          {/* TripAdvisor (com a imagem oficial do logo) */}
          <a
            href={OFFICIAL_LINKS.tripAdvisor}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#121b14] border border-[#00AA6C]/35 flex items-center justify-center p-1 hover:scale-110 hover:border-[#00AA6C] transition-all shadow-sm"
            title="TripAdvisor"
            aria-label="TripAdvisor"
          >
            <img
              src={OFFICIAL_IMAGES.tripAdvisorLogo}
              alt="TripAdvisor"
              className="w-full h-full object-contain"
              loading="eager"
            />
          </a>

          {/* Facebook */}
          <a
            href={OFFICIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1b1009] border border-[#1877F2]/30 flex items-center justify-center text-[#1877F2] hover:scale-110 hover:border-[#1877F2] transition-all shadow-sm"
            title="Facebook"
            aria-label="Facebook"
          >
            <FacebookIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
        </div>
      </header>

      {/* ==================================================
          2. PRIMEIRA SEÇÃO / BANNER HERO CENTRAL
          - RESTAURAÇÃO DA LOGO OFICIAL GRANDE, QUADRADA E CENTRALIZADA
          - Ambas as logos coexistem (pequena no topo e grande na primeira seção)
          ================================================== */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#140c08] via-[#100a06] to-[#0d0906] pt-8 pb-12 px-4 sm:px-6">
        {/* Iluminação ambiente dourada */}
        <div 
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[350px] rounded-full opacity-20 blur-[110px]"
          style={{ background: 'radial-gradient(circle, #e2903c 0%, #b86e28 40%, transparent 70%)' }}
        />

        <div className="relative max-w-xl mx-auto flex flex-col items-center text-center z-10">
          
          {/* LOGO OFICIAL PRINCIPAL ISOLADA — REDUZIDA EM 15% MANTENDO PROPORÇÃO E DESTAQUE */}
          <div className="relative group mb-6">
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#b86e28] via-[#e59b4c] to-[#78350f] opacity-40 blur-lg transition duration-500 group-hover:opacity-65" />
            <div className="relative p-2 rounded-2xl bg-gradient-to-b from-[#2a1a11] to-[#160d07] border border-[#b86e28]/45 shadow-2xl">
              <img
                src={OFFICIAL_IMAGES.logo}
                alt="Logo Oficial do Fulô de Mandacaru Bistrô"
                className="w-40 sm:w-48 md:w-[204px] h-auto object-contain rounded-xl shadow-inner transition-transform duration-500 group-hover:scale-[1.01]"
                loading="eager"
              />
            </div>
          </div>

          {/* Tag de Localização */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#241710]/80 border border-[#b86e28]/30 shadow-inner mb-3.5 backdrop-blur-md">
            <MapPin className="w-3 h-3 text-[#e59b4c]" />
            <span className="text-[11px] tracking-wider uppercase font-medium text-[#f3dfcb]">
              {BRAND.city}
            </span>
            <span className="text-[#b86e28]/50">·</span>
            <span className="text-[11px] text-[#d8a878]">Desde {BRAND.foundationYear}</span>
          </div>

          {/* Nome da Marca */}
          <h1 className="font-display-luxury text-2xl sm:text-3xl font-extrabold tracking-wide text-[#fbf4ea] uppercase drop-shadow-md mb-2">
            {BRAND.name}
          </h1>

          {/* Frase Principal da Marca (MANTIDA 100% EXATAMENTE COMO ESTÁ) */}
          <p className="font-serif-luxury italic text-base sm:text-lg text-[#e8b57b] font-medium tracking-normal mb-6 max-w-md drop-shadow">
            “{BRAND.tagline}”
          </p>

          {/* BARRA DE MÍDIAS SOCIAIS ABAIXO DA FRASE (Aumentada proporcionalmente em aproximadamente 10%) */}
          <div className="btn-emboss-gold w-auto px-5.5 py-3 sm:px-6.5 sm:py-3.5 rounded-xl flex items-center justify-center gap-3 sm:gap-4 shadow-2xl scale-110 my-1.5">
            {/* WhatsApp */}
            <a
              href={OFFICIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1b1009] border border-[#25D366]/30 flex items-center justify-center text-[#25D366] hover:scale-110 hover:border-[#25D366] transition-all shadow-sm"
              title="WhatsApp Oficial"
              aria-label="WhatsApp Oficial"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* Instagram */}
            <a
              href={OFFICIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1b1009] border border-[#E1306C]/30 flex items-center justify-center text-[#E1306C] hover:scale-110 hover:border-[#E1306C] transition-all shadow-sm"
              title="Instagram Oficial"
              aria-label="Instagram Oficial"
            >
              <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* Google Maps (Levemente aumentado em 15% para perfeito equilíbrio visual) */}
            <a
              href={OFFICIAL_LINKS.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#1b1009] border border-[#EA4335]/35 flex items-center justify-center text-[#EA4335] hover:scale-110 hover:border-[#EA4335] transition-all shadow-sm"
              title="Google Maps"
              aria-label="Google Maps"
            >
              <GoogleMapsIcon className="w-[17px] h-[17px] sm:w-[19px] sm:h-[19px]" />
            </a>

            {/* TripAdvisor (com a imagem oficial do logo) */}
            <a
              href={OFFICIAL_LINKS.tripAdvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#121b14] border border-[#00AA6C]/35 flex items-center justify-center p-1 hover:scale-110 hover:border-[#00AA6C] transition-all shadow-sm"
              title="TripAdvisor"
              aria-label="TripAdvisor"
            >
              <img
                src={OFFICIAL_IMAGES.tripAdvisorLogo}
                alt="TripAdvisor"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </a>

            {/* Facebook */}
            <a
              href={OFFICIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1b1009] border border-[#1877F2]/30 flex items-center justify-center text-[#1877F2] hover:scale-110 hover:border-[#1877F2] transition-all shadow-sm"
              title="Facebook"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>

          <div className="mt-6 flex items-center gap-1.5 text-[11px] text-[#d49e6a]/70 font-medium">
            <span>Deslize para vivenciar o Bistrô</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#e59b4c]" />
          </div>

        </div>
      </section>
    </div>
  );
};
