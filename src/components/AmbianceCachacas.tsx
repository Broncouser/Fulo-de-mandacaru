import React from 'react';
import { Wine, Sparkles, Lamp, Music, GlassWater } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/constants.ts';

export const AmbianceCachacas: React.FC = () => {
  return (
    <section className="relative w-full py-16 px-4 sm:px-6 bg-[#0c0805] overflow-hidden">
      
      {/* Ambient lighting */}
      <div 
        className="pointer-events-none absolute -left-20 top-1/3 w-72 h-72 rounded-full opacity-10 blur-[100px]"
        style={{ background: '#b86e28' }}
      />

      <div className="relative max-w-xl mx-auto">
        
        {/* Section Header: Ambiente */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#20140c] border border-[#b86e28]/35 mb-2.5">
            <Lamp className="w-3.5 h-3.5 text-[#e59b4c]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#e8b57b]">
              Bistrô & Aconchego
            </span>
          </div>

          <h2 className="font-display-luxury text-2xl sm:text-3xl font-extrabold tracking-wide text-[#fdf6ee] uppercase mb-2">
            AMBIENTE DO RESTAURANTE
          </h2>

          <p className="text-xs sm:text-sm text-[#cf9f74] font-serif-luxury italic max-w-md mx-auto">
            Um refúgio acolhedor onde a sofisticação encontra a genuína hospitalidade nordestina.
          </p>
        </div>

        {/* Atmosphere Highlights */}
        <div className="p-6 rounded-3xl bg-gradient-to-b from-[#1e130b] to-[#120a06] border border-[#b86e28]/30 shadow-xl mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#170e08] border border-[#b86e28]/20">
              <Lamp className="w-5 h-5 text-[#e59b4c] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#f7ead8] uppercase tracking-wide mb-1">
                  Iluminação Intimista
                </h4>
                <p className="text-[11px] text-[#c9a788] leading-relaxed">
                  Luz suave e atmosfera perfeita para almoços relaxantes e jantares memoráveis.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#170e08] border border-[#b86e28]/20">
              <Music className="w-5 h-5 text-[#e59b4c] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#f7ead8] uppercase tracking-wide mb-1">
                  Música & Clima
                </h4>
                <p className="text-[11px] text-[#c9a788] leading-relaxed">
                  Trilha sonora de bom gosto que celebra o melhor da nossa cultura com delicadeza.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Cachaças & Experiências */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#20140c] border border-[#b86e28]/35 mb-2.5">
            <Wine className="w-3.5 h-3.5 text-[#e59b4c]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#e8b57b]">
              Carta Selecionada
            </span>
          </div>

          <h3 className="font-display-luxury text-xl sm:text-2xl font-bold tracking-wide text-[#fdf6ee] uppercase mb-2">
            CACHAÇAS E EXPERIÊNCIAS
          </h3>

          <p className="text-xs text-[#cf9f74] font-serif-luxury italic max-w-md mx-auto mb-6">
            Harmonizações que completam o sabor inconfundível de cada prato
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-gradient-to-b from-[#1e130b] to-[#120a06] border border-[#b86e28]/30 shadow-xl mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#b86e28]/20 flex items-center justify-center text-[#e59b4c]">
              <GlassWater className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#f7ead8] uppercase tracking-wider">
                Nossas Cachaças e Bebidas Típicas
              </h4>
              <p className="text-xs text-[#c9a788]">
                Apreciação pura ou em coquetéis autorais
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#ecd7c3] leading-relaxed font-sans-clean font-light mb-4">
            Venha se surpreender com nossa seleção especial de cachaças, elaboradas para harmonizar perfeitamente com os temperos marcantes e a textura de nossas receitas exclusivas.
          </p>

          <a
            href={OFFICIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#28190f] border border-[#b86e28]/40 hover:border-[#e59b4c] text-xs font-semibold text-[#f8caa0] transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#e59b4c]" />
            <span>Consultar Recomendações da Casa no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
