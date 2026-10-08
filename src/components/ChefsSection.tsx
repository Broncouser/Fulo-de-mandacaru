import React from 'react';
import { OFFICIAL_IMAGES } from '../data/constants.ts';
import { Award, Sparkles, BookOpen } from 'lucide-react';

export const ChefsSection: React.FC = () => {
  return (
    <section className="relative w-full py-14 px-4 sm:px-6 bg-[#120a06] border-t border-[#b86e28]/20 overflow-hidden">
      
      {/* Warm ambient back-glow */}
      <div 
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-[130px]"
        style={{ background: '#b86e28' }}
      />

      <div className="relative max-w-2xl mx-auto">
        
        {/* Editorial Magazine Card Container */}
        <div className="p-5 sm:p-7 rounded-3xl bg-gradient-to-b from-[#1d120a]/95 via-[#160d07]/95 to-[#100905]/95 border border-[#b86e28]/35 shadow-[0_12px_35px_rgba(0,0,0,0.7)] backdrop-blur-sm">
          
          {/* Tag de Destaque Editorial */}
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#b86e28]/20">
            <BookOpen className="w-4 h-4 text-[#e59b4c]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#e8b57b]">
              Editorial Gastronômico
            </span>
          </div>

          {/* Composição Editorial: Foto Menor (30-35%) + Texto à Direita */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
            
            {/* Foto Oficial Compacta dos Chefs (Apoio Editorial, ~35%) */}
            <div className="w-44 sm:w-48 md:w-52 shrink-0">
              <div className="relative group p-1 rounded-2xl bg-gradient-to-b from-[#342013] via-[#20130b] to-[#140c07] border border-[#b86e28]/40 shadow-xl">
                <div className="overflow-hidden rounded-xl bg-[#000]">
                  <img
                    src={OFFICIAL_IMAGES.chefsPhoto}
                    alt="Chef Simone Lebedenco e Chef Lucas Alessi - Fulô de Mandacaru Bistrô"
                    className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-1.5 px-1 py-0.5 text-center">
                  <span className="text-[10px] font-medium text-[#c49a6c] tracking-wider uppercase">
                    Mestres Culinários
                  </span>
                </div>
              </div>
            </div>

            {/* Texto Editorial da Seção */}
            <div className="flex-1 flex flex-col justify-center text-center sm:text-left">
              
              {/* Título Principal */}
              <h2 className="font-display-luxury text-xl sm:text-2xl font-extrabold tracking-wide text-[#fdf6ee] uppercase mb-2">
                NOSSA HISTÓRIA DESDE 2013
              </h2>

              {/* Nomes dos Chefs em Destaque */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1 mb-3">
                <span className="font-serif-luxury text-sm sm:text-base font-bold text-[#e59b4c] tracking-wide">
                  CHEF SIMONE LEBEDENCO
                </span>
                <span className="text-[#b86e28]/60 text-xs hidden sm:inline">·</span>
                <span className="font-serif-luxury text-sm sm:text-base font-bold text-[#e59b4c] tracking-wide">
                  CHEF LUCAS ALESSI
                </span>
              </div>

              {/* Texto Oficial da História */}
              <p className="text-xs sm:text-sm text-[#ecd7c3] leading-relaxed font-sans-clean font-light mb-3">
                O Fulô de Mandacaru Bistrô nasceu em 2013 da paixão da chef paulista Simone Lebedenco e o chef Lucas Alessi pelas cores, sabores e temperos do Nordeste.
              </p>

              {/* Complemento Editorial Chef Simone Lebedenco */}
              <div className="p-3 rounded-xl bg-[#24160d]/80 border border-[#b86e28]/25 text-left">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#e59b4c] uppercase tracking-wider mb-1">
                  <Award className="w-3.5 h-3.5 text-[#e59b4c]" />
                  <span>Toque de Bistrô</span>
                </div>
                <p className="text-xs text-[#edd7c2] leading-relaxed font-sans-clean font-light italic">
                  “Nossa Chef Simone Lebedenco combina a sofisticação de pratos requintados com o sabor especial do Nordeste.”
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
