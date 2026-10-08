import React from 'react';
import { OFFICIAL_IMAGES, OFFICIAL_LINKS } from '../data/constants.ts';
import { Calendar, ArrowUpRight } from 'lucide-react';

export const MainBannerSection: React.FC = () => {
  return (
    <section className="relative w-full py-12 px-4 sm:px-6 bg-[#0d0906] overflow-hidden">
      <div className="relative max-w-xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#20130c] border border-[#b86e28]/30 mb-2">
            <Calendar className="w-3.5 h-3.5 text-[#e59b4c]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e8b57b]">
              Experiências do Bistrô
            </span>
          </div>
          <h2 className="font-display-luxury text-xl sm:text-2xl font-bold tracking-wide text-[#fdf6ee] uppercase">
            Programe Sua Visita
          </h2>
        </div>

        {/* BANNER PRINCIPAL "SE AGENDE AÍ" — GRANDE DESTAQUE VISUAL (FOTO OFICIAL DEFINITIVA) */}
        <div className="relative group rounded-3xl overflow-hidden p-1.5 sm:p-2 bg-gradient-to-b from-[#382315] via-[#21140c] to-[#120a06] border border-[#b86e28]/45 shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
          
          {/* Subtle gold ambient glow around the card */}
          <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#b86e28]/20 via-[#f59e0b]/20 to-[#b86e28]/20 opacity-40 blur-xl group-hover:opacity-70 transition duration-500 pointer-events-none" />

          <div className="relative overflow-hidden rounded-2xl bg-[#000]">
            <img
              src={OFFICIAL_IMAGES.bannerSeAgendeAi}
              alt="Se Agende Aí - Gastronomia Fulô de Mandacaru Bistrô"
              className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>

          {/* Action trigger right below the banner */}
          <div className="mt-3 px-2 py-2 flex items-center justify-between text-xs sm:text-sm">
            <span className="text-[#ecd7c3] font-medium font-sans-clean">
              Confira nossa programação semanal abaixo
            </span>
            <a
              href={OFFICIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[#e59b4c] hover:text-[#f8caa0] transition-colors"
            >
              <span>Reservar mesa</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
