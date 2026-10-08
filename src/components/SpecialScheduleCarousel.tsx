import React, { useState, useRef } from 'react';
import { PROMOTIONAL_SCHEDULE, OFFICIAL_LINKS } from '../data/constants.ts';
import { ChevronLeft, ChevronRight, Sparkles, MessageCircle } from 'lucide-react';

export const SpecialScheduleCarousel: React.FC = () => {
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
    const nextIndex = Math.min(PROMOTIONAL_SCHEDULE.length - 1, currentIndex + 1);
    scrollToIndex(nextIndex);
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;
    const newIndex = Math.round(scrollLeft / width);
    if (newIndex >= 0 && newIndex < PROMOTIONAL_SCHEDULE.length && newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section className="relative w-full py-14 px-4 sm:px-6 bg-gradient-to-b from-[#0d0906] via-[#140c08] to-[#0d0906] overflow-hidden">
      
      {/* Decorative ambiance */}
      <div 
        className="pointer-events-none absolute right-0 top-1/4 w-80 h-80 rounded-full opacity-10 blur-[100px]"
        style={{ background: '#f59e0b' }}
      />

      <div className="max-w-2xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#241710] border border-[#b86e28]/40 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#e59b4c]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#e8b57b] uppercase">
              Semana Gastronômica
            </span>
          </div>

          <h2 className="font-display-luxury text-2xl sm:text-3xl font-bold tracking-wider text-[#faeedc] uppercase mb-3">
            PROGRAMAÇÃO ESPECIAL
          </h2>

          <p className="text-xs sm:text-sm text-[#d49e6a] max-w-md mx-auto font-sans-clean font-light">
            Experiências gastronômicas exclusivas e pratos tradicionais ao longo da semana no bistrô.
          </p>
        </div>

        {/* Resumo da Programação em Destaque */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <div className="p-3.5 rounded-xl bg-[#1b110b]/90 border border-[#b86e28]/25 text-center shadow-lg">
            <span className="block text-[11px] font-bold text-[#e59b4c] uppercase tracking-wider mb-1">
              Segundas e Terças
            </span>
            <span className="text-xs sm:text-sm text-[#f5ebd9] font-medium block">
              Menu degustação
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#1b110b]/90 border border-[#b86e28]/40 text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 px-2 py-0.5 bg-[#b86e28] text-[#140b05] text-[9px] font-extrabold uppercase tracking-wider rounded-bl-lg">
              50% OFF
            </div>
            <span className="block text-[11px] font-bold text-[#e59b4c] uppercase tracking-wider mb-1">
              Quartas
            </span>
            <span className="text-xs sm:text-sm text-[#f5ebd9] font-medium block">
              Tapiocas & Escondidinhos
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#1b110b]/90 border border-[#b86e28]/25 text-center shadow-lg">
            <span className="block text-[11px] font-bold text-[#e59b4c] uppercase tracking-wider mb-1">
              Última Quinta do Mês
            </span>
            <span className="text-xs sm:text-sm text-[#f5ebd9] font-medium block">
              Noite do acarajé
            </span>
          </div>
        </div>

        {/* CARROSSEL HORIZONTAL DE CARDS PROMOCIONAIS COMPACTOS */}
        <div className="relative">
          
          {/* Controls Navigation Buttons for Desktop / Tablet */}
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-xs font-medium text-[#c49a6c]">
              Programação semanal ({currentIndex + 1} de {PROMOTIONAL_SCHEDULE.length})
            </span>
            
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-8 h-8 rounded-full bg-[#241710] border border-[#b86e28]/40 flex items-center justify-center text-[#e8b57b] transition-all hover:bg-[#b86e28] hover:text-[#140b05] disabled:opacity-30 disabled:pointer-events-none shadow-md cursor-pointer"
                aria-label="Card anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={currentIndex === PROMOTIONAL_SCHEDULE.length - 1}
                className="w-8 h-8 rounded-full bg-[#241710] border border-[#b86e28]/40 flex items-center justify-center text-[#e8b57b] transition-all hover:bg-[#b86e28] hover:text-[#140b05] disabled:opacity-30 disabled:pointer-events-none shadow-md cursor-pointer"
                aria-label="Próximo card"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Carousel Track: Cards compactos em formato editorial (Ordem: Terça -> Quarta -> Quinta) */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-4 px-1 sm:justify-center"
          >
            {PROMOTIONAL_SCHEDULE.map((item, idx) => (
              <div
                key={item.id}
                className="w-[245px] sm:w-[260px] shrink-0 snap-center rounded-2xl overflow-hidden bg-gradient-to-b from-[#22150e] to-[#140d07] border border-[#b86e28]/35 shadow-[0_8px_24px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-[#e59b4c]/60 hover:-translate-y-1 flex flex-col"
              >
                {/* Imagem Oficial com proporção preservada e tamanho compacto */}
                <div className="relative overflow-hidden bg-[#0a0604] p-1.5">
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-auto object-contain rounded-lg transition-transform duration-500 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  {item.badge && (
                    <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[#b86e28] text-[#120a06] text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                      {item.badge}
                    </div>
                  )}
                </div>

                {/* Conteúdo Editorial do Card Compacto */}
                <div className="p-3.5 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[10px] font-bold text-[#e59b4c] uppercase tracking-wider">
                        {item.day}
                      </span>
                      {item.highlight && (
                        <span className="text-[9px] font-bold text-[#fce8cc] px-1.5 py-0.5 rounded bg-[#b86e28]/35 border border-[#b86e28]/40">
                          {item.highlight}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display-luxury text-sm font-bold text-[#fbf4ea] uppercase leading-tight mb-1.5">
                      {item.title}
                    </h3>

                    <p className="text-[11px] text-[#cfb79f] leading-relaxed font-sans-clean font-light mb-3 line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <a
                    href={OFFICIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg bg-[#28180e] border border-[#b86e28]/35 hover:border-[#e59b4c] text-[11px] font-semibold text-[#f8caa0] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Reservar Mesa</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-3">
            {PROMOTIONAL_SCHEDULE.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-6 h-1.5 bg-[#e59b4c]'
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
