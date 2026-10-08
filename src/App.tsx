/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HeaderHero } from './components/HeaderHero.tsx';
import { BistroExperiencesSection } from './components/BistroExperiencesSection.tsx';
import { EditorialGastronomicoSection } from './components/EditorialGastronomicoSection.tsx';
import { GoogleReviewSection } from './components/GoogleReviewSection.tsx';
import { PetFriendlySection } from './components/PetFriendlySection.tsx';
import { GastronomyEditorial } from './components/GastronomyEditorial.tsx';
import { AmbianceCachacas } from './components/AmbianceCachacas.tsx';
import { LocationSection } from './components/LocationSection.tsx';
import { SocialFollowSection } from './components/SocialFollowSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0906] text-[#f7ede2] font-sans-clean overflow-x-hidden selection:bg-[#b86e28] selection:text-white">
      
      {/* 1. Header: Logo Oficial, Tagline, Canais Oficiais, Fale Conosco */}
      <HeaderHero />

      <main className="w-full">
        {/* 2. Seção: EXPERIÊNCIAS DO BISTRÔ
               - PROGRAME SUA VISITA
               - Imagem oficial “SE AGENDE AÍ”
               - SEMANA GASTRONÔMICA & PROGRAMAÇÃO ESPECIAL
               - EXPERIÊNCIAS GASTRONÔMICAS EXCLUSIVAS
               - PRATOS TRADICIONAIS AO LONGO DA SEMANA NO BISTRÔ
               - Programação semanal (Terça -> Quarta -> Última Quinta) com fotos e informações ligadas */}
        <BistroExperiencesSection />

        {/* SEÇÃO — AVALIE-NOS NO GOOGLE MAPS (Posicionada imediatamente antes de Editorial Gastronômico — Nossa História) */}
        <GoogleReviewSection />

        {/* 3. Seção: EDITORIAL GASTRONÔMICO
               - NOSSA HISTÓRIA (desde 2013)
               - CHEF SIMONE LEBEDENCO & CHEF LUCAS ALESSI (foto oficial definitiva)
               - RECONHECIMENTO OFICIAL TRIPADVISOR (4,7 estrelas, Certificado de Excelência, logo oficial) */}
        <EditorialGastronomicoSection />

        {/* 4. Seção: PET-FRIENDLY (Área Externa Aconchegante e Sombreada) */}
        <PetFriendlySection />

        {/* 5. Seção Movida: ALTA CULINÁRIA REGIONAL / GASTRONOMIA NORDESTINA (Imediatamente abaixo de Pet-Friendly) */}
        <GastronomyEditorial />

        {/* 6. Ambiente do Restaurante & Cachaças e Experiências */}
        <AmbianceCachacas />

        {/* 7. Como Chegar (Google Maps) & Informações Úteis */}
        <LocationSection />

        {/* 8. Siga o Fulô de Mandacaru (Redes Sociais Oficiais) */}
        <SocialFollowSection />
      </main>

      {/* 9. Rodapé com Logo Oficial, Logo TripAdvisor e crédito TCONDE */}
      <Footer />

      {/* Botão Flutuante 3D de WhatsApp Permanente */}
      <FloatingWhatsApp />
    </div>
  );
}
