import React, { useState, useRef } from 'react';
import { OFFICIAL_IMAGES, OFFICIAL_LINKS } from '../data/constants.ts';
import { Calendar, Sparkles, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

interface ScheduleCard {
  id: string;
  dayLabel: string;
  experienceTitle: string;
  badge?: string;
  image: string;
  caption: string;
  information: string;
  additionalNote?: string;
}

const WEEKLY_SCHEDULE: ScheduleCard[] = [
  {
    id: "terca",
    dayLabel: "SEGUNDAS E TERÇAS",
    experienceTitle: "MENU DEGUSTAÇÃO",
    badge: "Degustação",
    image: OFFICIAL_IMAGES.bannerTerca,
    caption: "TERÇA-FEIRA — MENU DEGUSTAÇÃO",
    information: "Uma imersão completa pelos sabores mais refinados e marcantes da culinária nordestina, em sequências pensadas pelos nossos chefs.",
  },
  {
    id: "quarta",
    dayLabel: "QUARTAS",
    experienceTitle: "TAPIOCAS E ESCONDIDINHOS",
    badge: "50% OFF",
    image: OFFICIAL_IMAGES.bannerQuarta,
    caption: "QUARTA-FEIRA — ESCONDIDINHOS",
    additionalNote: "50% DE DESCONTO",
    information: "O sabor clássico da mandioca dourada e recheios suculentos preparados na manteiga de garrafa e queijo coalho.",
  },
  {
    id: "quinta",
    dayLabel: "ÚLTIMA QUINTA-FEIRA DO MÊS",
    experienceTitle: "NOITE DO ACARAJÉ",
    badge: "Edição Mensal",
    image: OFFICIAL_IMAGES.bannerQuinta,
    caption: "ÚLTIMA QUINTA-FEIRA DO MÊS — NOITE DO ACARAJÉ",
    additionalNote: "Acontece sempre na última quinta-feira do mês.",
    information: "Massa de feijão-fradinho frita no azeite de dendê puro, vatapá aveludado, caruru, vinagrete fresco e camarões secos selecionados.",
  },
];

export const BistroExperiencesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const targetChild = container.children[index] as HTMLElement;
      if (targetChild) {
        targetChild.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const nextIndex = Math.max(0, currentIndex - 1);
    scrollToIndex(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = Math.min(WEEKLY_SCHEDULE.length - 1, currentIndex + 1);
    scrollToIndex(nextIndex);
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;
    const newIndex = Math.round(scrollLeft / width);
    if (newIndex >= 0 && newIndex < WEEKLY_SCHEDULE.length && newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section className="relative w-full py-12 px-4 sm:px-6 bg-gradient-to-b from-[#0d0906] via-[#140c08] to-[#0d0906] overflow-hidden">
      {/* Iluminação de fundo sutil */}
      <div 
        className="pointer-events-none absolute right-0 top-1/4 w-72 h-72 rounded-full opacity-10 blur-[100px]"
        style={{ background: '#f59e0b' }}
      />
      <div 
        className="pointer-events-none absolute left-0 bottom-1/4 w-64 h-64 rounded-full opacity-10 blur-[90px]"
        style={{ background: '#b86e28' }}
      />

      <div className="relative max-w-2xl mx-auto">
        
        {/* ==================================================
            1. SEÇÃO EXPERIÊNCIAS DO BISTRÔ / PROGRAME SUA VISITA
            ================================================== */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#20130c] border border-[#b86e28]/35 mb-2 shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-[#e59b4c]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#e8b57b]">
              EXPERIÊNCIAS DO BISTRÔ
            </span>
          </div>

          <h2 className="font-display-luxury text-2xl sm:text-3xl font-bold tracking-wide text-[#fdf6ee] uppercase">
            PROGRAME SUA VISITA
          </h2>
        </div>

        {/* IMAGEM OFICIAL “SE AGENDE AÍ” — CONTAINER EQUALIZADO EM ~30% MAIS COMPACTO COM MAIS RESPIRO */}
        <div className="max-w-md sm:max-w-lg mx-auto mb-8">
          <div className="relative group rounded-2xl overflow-hidden p-1.5 sm:p-2 bg-gradient-to-b from-[#382315] via-[#21140c] to-[#120a06] border border-[#b86e28]/45 shadow-[0_12px_32px_rgba(0,0,0,0.75)]">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#b86e28]/20 via-[#f59e0b]/20 to-[#b86e28]/20 opacity-30 blur-lg group-hover:opacity-60 transition duration-500 pointer-events-none" />

            <div className="relative overflow-hidden rounded-xl bg-[#000]">
              <img
                src={OFFICIAL_IMAGES.bannerSeAgendeAi}
                alt="Se Agende Aí - Gastronomia Fulô de Mandacaru Bistrô"
                className="w-full h-auto object-contain rounded-xl transform transition-transform duration-700 group-hover:scale-[1.01]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* ==================================================
            2. CONCEITO DA SEMANA GASTRONÔMICA & PROGRAMAÇÃO ESPECIAL
            ================================================== */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#241710] border border-[#b86e28]/40 mb-2 shadow-sm">
            <Sparkles className="w-3 h-3 text-[#e59b4c]" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-[#e8b57b] uppercase">
              SEMANA GASTRONÔMICA
            </span>
          </div>

          <h3 className="font-display-luxury text-xl sm:text-2xl font-bold tracking-wider text-[#faeedc] uppercase mb-1">
            PROGRAMAÇÃO ESPECIAL
          </h3>

          <p className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#e59b4c] uppercase mb-1">
            EXPERIÊNCIAS GASTRONÔMICAS EXCLUSIVAS
          </p>

          <p className="text-xs text-[#d49e6a] max-w-md mx-auto font-sans-clean font-light px-2">
            PRATOS TRADICIONAIS AO LONGO DA SEMANA NO BISTRÔ
          </p>
        </div>

        {/* ==================================================
            3. CARROSSEL HORIZONTAL DE PROGRAMAÇÃO SEMANAL
            (TERÇA → QUARTA → ÚLTIMA QUINTA)
            - Imagens e Cards reduzidos em ~30%
            - Perfeita fluidez mobile com toque e swipe suave
            ================================================== */}
        <div className="relative">
          
          {/* Navegação */}
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs font-medium text-[#c49a6c]">
              Experiências da semana ({currentIndex + 1} de {WEEKLY_SCHEDULE.length})
            </span>
            
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#241710] border border-[#b86e28]/40 flex items-center justify-center text-[#e8b57b] transition-all hover:bg-[#b86e28] hover:text-[#140b05] disabled:opacity-30 disabled:pointer-events-none shadow-sm cursor-pointer"
                aria-label="Experiência anterior"
              >
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={currentIndex === WEEKLY_SCHEDULE.length - 1}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#241710] border border-[#b86e28]/40 flex items-center justify-center text-[#e8b57b] transition-all hover:bg-[#b86e28] hover:text-[#140b05] disabled:opacity-30 disabled:pointer-events-none shadow-sm cursor-pointer"
                aria-label="Próxima experiência"
              >
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>

          {/* Carousel Track: Cards ~30% mais compactos, elegantes e responsivos */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-3 sm:gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-3 px-1 sm:justify-center"
          >
            {WEEKLY_SCHEDULE.map((item) => (
              <div
                key={item.id}
                className="w-[195px] sm:w-[215px] shrink-0 snap-center rounded-xl overflow-hidden bg-gradient-to-b from-[#22150e] to-[#140d07] border border-[#b86e28]/35 shadow-[0_6px_20px_rgba(0,0,0,0.55)] transition-all duration-300 hover:border-[#e59b4c]/60 hover:-translate-y-0.5 flex flex-col"
              >
                {/* 1. DIA & EXPERIÊNCIA NO TOPO DO CARD */}
                <div className="px-3 pt-2.5 pb-1.5 border-b border-[#b86e28]/20 bg-[#1a0f09]">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className="text-[9px] font-bold text-[#e59b4c] uppercase tracking-wider">
                      {item.dayLabel}
                    </span>
                    {item.badge && (
                      <span className="text-[8px] font-extrabold text-[#120a06] px-1.5 py-0.5 rounded-full bg-[#b86e28] uppercase shadow-sm">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="font-display-luxury text-xs sm:text-[13px] font-bold text-[#fbf4ea] uppercase leading-tight line-clamp-1">
                    {item.experienceTitle}
                  </h4>
                </div>

                {/* 2. FOTO OFICIAL DA PROGRAMAÇÃO — COMPACTA E PROPORCIONAL (~30% REDUÇÃO VISUAL) */}
                <div className="relative overflow-hidden bg-[#0a0604] p-1">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-auto object-contain rounded-md transition-transform duration-500 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* 3. INFORMAÇÃO CORRESPONDENTE */}
                <div className="p-2.5 sm:p-3 flex flex-col flex-1 justify-between">
                  <div>
                    {item.additionalNote && (
                      <div className="mb-1.5">
                        <span className="text-[9px] font-bold text-[#fce8cc] px-1.5 py-0.5 rounded bg-[#b86e28]/35 border border-[#b86e28]/40 block text-center">
                          {item.additionalNote}
                        </span>
                      </div>
                    )}
                    <p className="text-[10px] text-[#cfb79f] leading-relaxed font-sans-clean font-light mb-2.5 line-clamp-3">
                      {item.information}
                    </p>
                  </div>

                  <a
                    href={OFFICIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 w-full py-1.5 px-2.5 rounded-lg bg-[#28180e] border border-[#b86e28]/35 hover:border-[#e59b4c] text-[10px] font-semibold text-[#f8caa0] transition-colors"
                  >
                    <MessageCircle className="w-3 h-3 text-[#25D366]" />
                    <span>Reservar Mesa</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores de bolinhas */}
          <div className="flex items-center justify-center gap-1.5 mt-2.5">
            {WEEKLY_SCHEDULE.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-5 h-1.5 bg-[#e59b4c]'
                    : 'w-1.5 h-1.5 bg-[#b86e28]/40 hover:bg-[#b86e28]'
                }`}
                aria-label={`Ir para card ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
