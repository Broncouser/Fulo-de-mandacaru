import React from 'react';
import { OFFICIAL_IMAGES, OFFICIAL_LINKS } from '../data/constants.ts';
import { Heart, Sun, Trees, MessageCircle } from 'lucide-react';

export const PetFriendlySection: React.FC = () => {
  return (
    <section className="relative w-full py-12 px-4 sm:px-6 bg-[#0f0a06] border-t border-[#b86e28]/20 overflow-hidden">
      
      {/* Iluminação ambiente dourada e acolhedora */}
      <div 
        className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-10 blur-[110px]"
        style={{ background: '#e59b4c' }}
      />
      <div 
        className="pointer-events-none absolute right-0 top-1/3 w-64 h-64 rounded-full opacity-10 blur-[90px]"
        style={{ background: '#b86e28' }}
      />

      <div className="relative max-w-2xl mx-auto">
        
        {/* Card Editorial Pet-Friendly */}
        <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-[#1c120a]/95 via-[#150d07]/95 to-[#0e0804]/95 border border-[#b86e28]/35 shadow-[0_10px_30px_rgba(0,0,0,0.7)] backdrop-blur-sm">
          
          {/* Tag / Badge da Seção */}
          <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-[#b86e28]/20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24160d] border border-[#b86e28]/35 shadow-sm">
              <Heart className="w-3.5 h-3.5 text-[#e59b4c] fill-[#e59b4c]/30" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#e8b57b] uppercase">
                PET-FRIENDLY
              </span>
            </div>
            <span className="text-[10px] text-[#cfa175] font-medium tracking-wide">
              Área Externa Aconchegante
            </span>
          </div>

          {/* Composição Editorial: Foto + Texto Lado a Lado no Desktop / Empilhado no Mobile */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            
            {/* Foto Oficial da Área Pet-Friendly (Reduzida em ~30% do tamanho visual para elegância e equilíbrio) */}
            <div className="w-36 sm:w-36 md:w-40 shrink-0">
              <div className="relative group p-1 rounded-xl bg-gradient-to-b from-[#342013] via-[#20130b] to-[#140c07] border border-[#b86e28]/40 shadow-xl overflow-hidden">
                <div className="overflow-hidden rounded-lg bg-[#000]">
                  <img
                    src={OFFICIAL_IMAGES.petFriendlyPhoto}
                    alt="Espaço Pet-Friendly do Fulô de Mandacaru Bistrô"
                    className="w-full h-auto object-cover rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-1 px-1 py-0.5 flex items-center justify-center gap-1 text-center">
                  <Trees className="w-3 h-3 text-[#e59b4c]" />
                  <span className="text-[8px] sm:text-[9px] font-medium text-[#c49a6c] tracking-wider uppercase">
                    Ambiente Arborizado
                  </span>
                </div>
              </div>
            </div>

            {/* Texto Editorial e Mensagem de Acolhimento */}
            <div className="flex-1 flex flex-col justify-center text-center sm:text-left">
              
              {/* Título Principal */}
              <h3 className="font-display-luxury text-lg sm:text-xl font-extrabold tracking-wide text-[#fdf6ee] uppercase mb-1">
                SEU PET É BEM-VINDO
              </h3>

              {/* Subtítulo / Frase Principal */}
              <p className="font-serif-luxury italic text-xs sm:text-sm text-[#e8b57b] font-medium mb-3">
                “Seu melhor amigo também é bem-vindo ao Fulô.”
              </p>

              {/* Parágrafos Narrativos */}
              <p className="text-xs text-[#ecd7c3] leading-relaxed font-sans-clean font-light mb-2.5">
                Nosso espaço externo é perfeito para você aproveitar uma experiência gastronômica especial na companhia do seu pet.
              </p>

              <p className="text-xs text-[#d4baa0] leading-relaxed font-sans-clean font-light mb-4">
                Com uma área externa aconchegante e sombreada, o Fulô de Mandacaru recebe você e seu companheiro para momentos ainda mais especiais.
              </p>

              {/* Destaques em Pill Editorial */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-4">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#24160d] border border-[#b86e28]/30 text-[10px] font-semibold text-[#f8caa0]">
                  <Sun className="w-3 h-3 text-[#e59b4c]" />
                  Área Externa Sombreada
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#24160d] border border-[#b86e28]/30 text-[10px] font-semibold text-[#f8caa0]">
                  <Heart className="w-3 h-3 text-[#e59b4c]" />
                  Espaço Amigável para Pets
                </span>
              </div>

              {/* Botão de contato rápido para dúvidas/reservas com pet */}
              <a
                href={OFFICIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full sm:w-auto py-2 px-4 rounded-xl bg-[#28180e] border border-[#b86e28]/40 hover:border-[#e59b4c] text-[11px] font-semibold text-[#f8caa0] transition-colors shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Reservar Mesa na Área Externa</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
