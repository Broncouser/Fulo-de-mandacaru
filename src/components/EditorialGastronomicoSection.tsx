import React from 'react';
import { OFFICIAL_IMAGES, OFFICIAL_LINKS } from '../data/constants.ts';
import { BookOpen, Star, ExternalLink, Award } from 'lucide-react';

export const EditorialGastronomicoSection: React.FC = () => {
  return (
    <section className="relative w-full py-12 px-4 sm:px-6 bg-[#120a06] border-t border-[#b86e28]/20 overflow-hidden">
      
      {/* Warm ambient lighting */}
      <div 
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 w-80 h-80 rounded-full opacity-10 blur-[130px]"
        style={{ background: '#b86e28' }}
      />
      <div 
        className="pointer-events-none absolute right-10 bottom-10 w-64 h-64 rounded-full opacity-10 blur-[100px]"
        style={{ background: '#00AA6C' }}
      />

      <div className="relative max-w-2xl mx-auto space-y-6">
        
        {/* ==================================================
            1. CABEÇALHO DA SEÇÃO: EDITORIAL GASTRONÔMICO
            ================================================== */}
        <div className="text-center mb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24160d] border border-[#b86e28]/35 mb-2 shadow-sm">
            <BookOpen className="w-3 h-3 text-[#e59b4c]" />
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-[#e8b57b]">
              EDITORIAL GASTRONÔMICO
            </span>
          </div>

          <h2 className="font-display-luxury text-xl sm:text-2xl font-extrabold tracking-wide text-[#fdf6ee] uppercase">
            NOSSA HISTÓRIA
          </h2>
          <p className="text-[11px] sm:text-xs text-[#cf9f74] font-serif-luxury italic mt-1">
            Desde 2013, o encontro da sofisticação com o tempero arretado do Nordeste
          </p>
        </div>

        {/* ==================================================
            2. CARD EDITORIAL DOS CHEFS
            - Foto oficial compacta (~30% reduzida para maior equilíbrio editorial)
            - No mobile: foto compacta e texto fluido
            - No desktop: foto à esquerda e texto à direita
            ================================================== */}
        <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-[#1d120a]/95 via-[#160d07]/95 to-[#100905]/95 border border-[#b86e28]/35 shadow-[0_10px_30px_rgba(0,0,0,0.7)] backdrop-blur-sm">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5">
            
            {/* Foto Oficial dos Mestres Culinários (Aumentada em ~20% no tamanho visual) */}
            <div className="w-44 sm:w-48 md:w-52 shrink-0">
              <div className="relative group p-1 rounded-xl bg-gradient-to-b from-[#342013] via-[#20130b] to-[#140c07] border border-[#b86e28]/40 shadow-lg">
                <div className="overflow-hidden rounded-lg bg-[#000]">
                  <img
                    src={OFFICIAL_IMAGES.chefsPhoto}
                    alt="Chef Simone Lebedenco e Chef Lucas Alessi - Fulô de Mandacaru Bistrô"
                    className="w-full h-auto object-cover rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-1 px-1 py-0.5 text-center">
                  <span className="text-[9px] font-medium text-[#c49a6c] tracking-wider uppercase">
                    Mestres Culinários
                  </span>
                </div>
              </div>
            </div>

            {/* Conteúdo ao lado da fotografia */}
            <div className="flex-1 flex flex-col justify-center text-center sm:text-left">
              
              {/* Apresentação dos Chefs */}
              <div className="mb-2">
                <span className="text-[9px] font-bold text-[#d49e6a] uppercase tracking-wider block mb-0.5">
                  Criadores & Chefs
                </span>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-0.5">
                  <span className="font-serif-luxury text-sm sm:text-base font-bold text-[#fbf4ea] tracking-wide">
                    CHEF SIMONE LEBEDENCO
                  </span>
                  <span className="text-[#b86e28] hidden sm:inline">·</span>
                  <span className="font-serif-luxury text-sm sm:text-base font-bold text-[#fbf4ea] tracking-wide">
                    CHEF LUCAS ALESSI
                  </span>
                </div>
              </div>

              {/* História do Fulô de Mandacaru */}
              <p className="text-xs text-[#ecd7c3] leading-relaxed font-sans-clean font-light mb-2.5">
                O Fulô de Mandacaru Bistrô nasceu em 2013 da paixão da chef paulista Simone Lebedenco e o chef Lucas Alessi pelas cores, sabores e temperos do Nordeste.
              </p>

              {/* Citação da Chef Simone Lebedenco */}
              <div className="p-2.5 rounded-xl bg-[#24160d]/80 border border-[#b86e28]/25 text-left">
                <div className="flex items-center gap-1.5 text-[9px] font-bold text-[#e59b4c] uppercase tracking-wider mb-0.5">
                  <Award className="w-3 h-3 text-[#e59b4c]" />
                  <span>Assinatura Culinária</span>
                </div>
                <p className="text-[11px] text-[#edd7c2] leading-relaxed font-sans-clean font-light italic">
                  “Nossa Chef Simone Lebedenco combina a sofisticação de pratos requintados com o sabor especial do Nordeste.”
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* ==================================================
            3. RECONHECIMENTO OFICIAL — TRIPADVISOR
            ================================================== */}
        <div className="relative">
          <a
            href={OFFICIAL_LINKS.tripAdvisor}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-[#181a14] via-[#12140e] to-[#0c0d09] border border-[#00AA6C]/40 shadow-[0_10px_28px_rgba(0,0,0,0.65)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00AA6C] hover:shadow-[0_14px_35px_rgba(0,170,108,0.2)]"
          >
            {/* Topo do Reconhecimento */}
            <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-[#00AA6C]/20">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00AA6C]/15 border border-[#00AA6C]/35 text-[#34d399]">
                <Award className="w-3 h-3" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                  RECONHECIMENTO OFICIAL
                </span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-[#34d399] font-medium group-hover:underline">
                <span>Ver Avaliações</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              
              {/* LOGO OFICIAL DO TRIPADVISOR */}
              <div className="w-20 sm:w-24 p-1.5 rounded-xl bg-[#0c120e] border border-[#00AA6C]/30 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300">
                <img
                  src={OFFICIAL_IMAGES.tripAdvisorLogo}
                  alt="Logo Oficial TripAdvisor"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>

              <div className="flex-1">
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#00AA6C] uppercase block mb-0.5">
                  TRIPADVISOR
                </span>

                <h3 className="font-display-luxury text-base sm:text-lg font-bold text-[#f7faee] uppercase tracking-wide mb-1">
                  Certificado de Excelência do TripAdvisor
                </h3>

                {/* Avaliação e Estrelas */}
                <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-1.5">
                  <div className="flex items-center gap-0.5 text-[#00AA6C]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-[#f7faee] tracking-tight">
                    4,7 estrelas
                  </span>
                </div>

                <p className="text-[11px] text-[#cbd6cb] font-sans-clean font-light leading-relaxed">
                  Reconhecido pelos clientes pela consistência de sabores, hospitalidade acolhedora e excelência gastronômica no bistrô.
                </p>
              </div>

            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
