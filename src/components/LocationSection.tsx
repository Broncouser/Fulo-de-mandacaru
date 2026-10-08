import React from 'react';
import { OFFICIAL_LINKS, BRAND } from '../data/constants.ts';
import { MapPin, Navigation, Phone, CalendarClock, ShieldCheck } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 px-4 sm:px-6 bg-[#0f0a06] border-t border-[#b86e28]/20 overflow-hidden">
      
      {/* Background radial highlight */}
      <div 
        className="pointer-events-none absolute right-1/4 bottom-0 w-80 h-80 rounded-full opacity-10 blur-[110px]"
        style={{ background: '#EA4335' }}
      />

      <div className="relative max-w-xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#24160e] border border-[#b86e28]/35 mb-2.5">
            <MapPin className="w-3.5 h-3.5 text-[#EA4335]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#e8b57b]">
              Localização & Acesso
            </span>
          </div>

          <h2 className="font-display-luxury text-2xl sm:text-3xl font-extrabold tracking-wide text-[#fdf6ee] uppercase mb-2">
            COMO CHEGAR
          </h2>

          <p className="text-xs sm:text-sm text-[#cf9f74] font-serif-luxury italic max-w-md mx-auto mb-6">
            Esperamos por você para uma experiência inesquecível em Presidente Prudente
          </p>

          {/* BOTÃO “ABRIR NO GOOGLE MAPS” */}
          <a
            href={OFFICIAL_LINKS.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#c53929] via-[#ea4335] to-[#c53929] text-white font-bold text-sm sm:text-base tracking-wider uppercase shadow-[0_10px_25px_rgba(234,67,53,0.35)] hover:shadow-[0_14px_30px_rgba(234,67,53,0.5)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 cursor-pointer"
          >
            <Navigation className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
            <span>ABRIR NO GOOGLE MAPS</span>
          </a>
        </div>

        {/* INFORMAÇÕES ÚTEIS */}
        <div className="p-6 rounded-3xl bg-gradient-to-b from-[#1b110a] to-[#120a06] border border-[#b86e28]/30 shadow-xl">
          
          <div className="flex items-center gap-2 text-xs font-bold text-[#e59b4c] uppercase tracking-wider mb-4 pb-3 border-b border-[#b86e28]/20">
            <ShieldCheck className="w-4 h-4" />
            <span>INFORMAÇÕES ÚTEIS</span>
          </div>

          <div className="space-y-4 text-xs sm:text-sm font-sans-clean font-light text-[#ecd7c3]">
            
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#e59b4c] shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-[#fcf5ec] block">Localização:</strong>
                <span>{BRAND.city}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-[#fcf5ec] block">Atendimento & WhatsApp:</strong>
                <a 
                  href={OFFICIAL_LINKS.whatsapp}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#f8caa0] hover:underline"
                >
                  {OFFICIAL_LINKS.phoneFormatted}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CalendarClock className="w-4 h-4 text-[#e59b4c] shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-[#fcf5ec] block">Reservas & Eventos:</strong>
                <span>Atendimento personalizado e reservas com antecedência diretamente via WhatsApp.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
