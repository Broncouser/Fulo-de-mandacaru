import React from 'react';
import { OFFICIAL_IMAGES } from '../data/constants.ts';
import { Flame, Sparkles } from 'lucide-react';

export const GastronomyEditorial: React.FC = () => {
  return (
    <section className="relative w-full py-12 px-4 sm:px-6 bg-gradient-to-b from-[#0e0805] via-[#140c08] to-[#100a06] border-t border-[#b86e28]/20 overflow-hidden">
      
      {/* Background glow */}
      <div 
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-10 blur-[100px]"
        style={{ background: '#e59b4c' }}
      />

      <div className="relative max-w-xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24160e] border border-[#b86e28]/35 mb-2 shadow-sm">
            <Flame className="w-3.5 h-3.5 text-[#e59b4c]" />
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-[#e8b57b]">
              Alta Culinária Regional
            </span>
          </div>

          <h2 className="font-display-luxury text-xl sm:text-2xl font-extrabold tracking-wide text-[#fdf6ee] uppercase mb-1.5">
            GASTRONOMIA NORDESTINA
          </h2>

          <p className="text-xs text-[#cf9f74] font-serif-luxury italic max-w-md mx-auto">
            A autenticidade das raízes sertanejas com a precisão e refinamento de bistrô contemporâneo.
          </p>
        </div>

        {/* Cinematic Gastronomic Showcase — Foto reduzida em 20% com proporção original intacta */}
        <div className="max-w-[305px] sm:max-w-[358px] mx-auto mb-5">
          <div className="relative rounded-2xl overflow-hidden p-1.5 bg-gradient-to-b from-[#342013] via-[#1f130b] to-[#140c07] border border-[#b86e28]/40 shadow-xl">
            <div className="relative overflow-hidden rounded-xl bg-[#000]">
              <img
                src={OFFICIAL_IMAGES.gastronomiaPhoto}
                alt="Prato Gastronômico Autoral do Fulô de Mandacaru Bistrô"
                className="w-full h-auto object-cover rounded-xl transform transition-transform duration-700 hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100a06] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 p-3 rounded-lg bg-[#140c08]/85 backdrop-blur-md border border-[#b86e28]/30">
                <span className="text-[9px] font-bold tracking-[0.2em] text-[#e59b4c] uppercase block mb-0.5">
                  Autoral & Afetivo
                </span>
                <p className="text-[11px] text-[#f5ebd9] font-sans-clean font-light leading-relaxed">
                  Ingredientes selecionados, manteiga de garrafa aromática, queijo coalho tostado e temperos frescos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Culinary Notes */}
        <div className="max-w-md mx-auto p-4 rounded-xl bg-[#1b110a] border border-[#b86e28]/25 text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#e59b4c] uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Feito com Alma, Raiz e Amor</span>
          </div>
          <p className="text-xs text-[#d4baa0] font-sans-clean font-light leading-relaxed">
            Cada prato servido no Fulô de Mandacaru resgata a memória afetiva do sertão brasileiro, transformando ingredientes nobres em criações inesquecíveis.
          </p>
        </div>

      </div>
    </section>
  );
};
