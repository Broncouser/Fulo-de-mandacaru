import React from 'react';
import { OFFICIAL_LINKS } from '../data/constants.ts';
import { TripAdvisorOfficialLogo } from './BrandIcons.tsx';
import { Star, Award, ExternalLink } from 'lucide-react';

export const TripAdvisorAward: React.FC = () => {
  return (
    <section className="relative w-full py-14 px-4 sm:px-6 bg-[#100a06] border-y border-[#00AA6C]/30 overflow-hidden">
      
      {/* Subtle emerald/green ambient glow to honor TripAdvisor's identity */}
      <div 
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 blur-[110px]"
        style={{ background: '#00AA6C' }}
      />

      <div className="relative max-w-xl mx-auto">
        
        {/* Clickable Recognition Seal */}
        <a
          href={OFFICIAL_LINKS.tripAdvisor}
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#181a14] via-[#12140e] to-[#0c0d09] border border-[#00AA6C]/40 shadow-[0_12px_35px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00AA6C] hover:shadow-[0_18px_45px_rgba(0,170,108,0.25)]"
        >
          {/* Top Label */}
          <div className="flex items-center justify-between mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00AA6C]/15 border border-[#00AA6C]/35 text-[#34d399]">
              <Award className="w-3.5 h-3.5" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                RECONHECIMENTO OFICIAL
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs text-[#34d399] font-medium group-hover:underline">
              <span>Ver Avaliações</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            
            {/* TripAdvisor Official Logo Icon Badge */}
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-b from-[#00AA6C] to-[#007f50] p-3 text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <TripAdvisorOfficialLogo className="w-10 h-10" />
            </div>

            <div className="flex-1">
              <span className="text-xs font-bold tracking-[0.25em] text-[#00AA6C] uppercase block mb-1">
                TRIPADVISOR
              </span>

              <h3 className="font-display-luxury text-xl sm:text-2xl font-bold text-[#f7faee] uppercase tracking-wide mb-2">
                CERTIFICADO DE EXCELÊNCIA
              </h3>

              {/* Stars & Rating */}
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <div className="flex items-center gap-1 text-[#00AA6C]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-base sm:text-lg font-extrabold text-[#f7faee] tracking-tight">
                  4,7 ESTRELAS
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#cbd6cb] font-sans-clean font-light leading-relaxed">
                Reconhecido pela consistência, sabor inigualável e atendimento acolhedor no coração de Presidente Prudente.
              </p>
            </div>
          </div>
        </a>

      </div>
    </section>
  );
};
