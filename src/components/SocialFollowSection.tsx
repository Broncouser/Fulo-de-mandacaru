import React from 'react';
import { OFFICIAL_LINKS } from '../data/constants.ts';
import {
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
  GoogleMapsIcon,
  TripAdvisorOfficialLogo,
} from './BrandIcons.tsx';
import { Share2 } from 'lucide-react';

export const SocialFollowSection: React.FC = () => {
  return (
    <section className="relative w-full py-14 px-4 sm:px-6 bg-[#0c0805] overflow-hidden">
      <div className="relative max-w-xl mx-auto text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#20140c] border border-[#b86e28]/35 mb-3">
          <Share2 className="w-3.5 h-3.5 text-[#e59b4c]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#e8b57b]">
            Comunidade & Conexão
          </span>
        </div>

        <h2 className="font-display-luxury text-2xl sm:text-3xl font-bold tracking-wide text-[#fdf6ee] uppercase mb-2">
          SIGA O FULÔ DE MANDACARU
        </h2>

        <p className="text-xs sm:text-sm text-[#cf9f74] font-serif-luxury italic max-w-md mx-auto mb-8">
          Acompanhe os bastidores, novidades do cardápio e pratos da semana em nossas redes
        </p>

        {/* Links Cards */}
        <div className="flex flex-col gap-3">
          {/* WhatsApp */}
          <a
            href={OFFICIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#1c120a] to-[#140d07] border border-[#25D366]/40 shadow-lg hover:border-[#25D366] transition-all hover:scale-[1.01]"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 flex items-center justify-center text-[#25D366]">
                <WhatsAppIcon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-sm font-bold text-[#fcf4ea] block">WhatsApp Oficial</span>
                <span className="text-xs text-[#25D366]">{OFFICIAL_LINKS.phoneFormatted}</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-[#f8caa0] px-3 py-1 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30">
              Conversar
            </span>
          </a>

          {/* Instagram */}
          <a
            href={OFFICIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#1c120a] to-[#140d07] border border-[#E1306C]/40 shadow-lg hover:border-[#E1306C] transition-all hover:scale-[1.01]"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#E1306C]/15 flex items-center justify-center text-[#E1306C]">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-sm font-bold text-[#fcf4ea] block">Instagram</span>
                <span className="text-xs text-[#d8a878]">Fotos, vídeos e histórias</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-[#f8caa0] px-3 py-1 rounded-lg bg-[#E1306C]/10 border border-[#E1306C]/30">
              Seguir
            </span>
          </a>

          {/* TripAdvisor */}
          <a
            href={OFFICIAL_LINKS.tripAdvisor}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#1c120a] to-[#140d07] border border-[#00AA6C]/40 shadow-lg hover:border-[#00AA6C] transition-all hover:scale-[1.01]"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#00AA6C]/15 flex items-center justify-center text-[#00AA6C]">
                <TripAdvisorOfficialLogo className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-sm font-bold text-[#fcf4ea] block">TripAdvisor</span>
                <span className="text-xs text-[#00AA6C]">4,7 Estrelas · Certificado</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-[#f8caa0] px-3 py-1 rounded-lg bg-[#00AA6C]/10 border border-[#00AA6C]/30">
              Avaliar
            </span>
          </a>

          {/* Facebook */}
          <a
            href={OFFICIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#1c120a] to-[#140d07] border border-[#1877F2]/40 shadow-lg hover:border-[#1877F2] transition-all hover:scale-[1.01]"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#1877F2]/15 flex items-center justify-center text-[#1877F2]">
                <FacebookIcon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-sm font-bold text-[#fcf4ea] block">Facebook</span>
                <span className="text-xs text-[#d8a878]">Página e publicações</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-[#f8caa0] px-3 py-1 rounded-lg bg-[#1877F2]/10 border border-[#1877F2]/30">
              Acompanhar
            </span>
          </a>

          {/* Google Maps */}
          <a
            href={OFFICIAL_LINKS.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#1c120a] to-[#140d07] border border-[#EA4335]/40 shadow-lg hover:border-[#EA4335] transition-all hover:scale-[1.01]"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#EA4335]/15 flex items-center justify-center text-[#EA4335]">
                <GoogleMapsIcon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-sm font-bold text-[#fcf4ea] block">Google Maps</span>
                <span className="text-xs text-[#EA4335]">Ver rota no mapa</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-[#f8caa0] px-3 py-1 rounded-lg bg-[#EA4335]/10 border border-[#EA4335]/30">
              Navegar
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};
