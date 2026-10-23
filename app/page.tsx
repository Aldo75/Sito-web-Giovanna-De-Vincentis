'use client';

import React, { useState } from 'react';
import { Locale, valuesContent } from '@/src/data/content';
import { Header } from '@/src/components/sections/Header';
import { HeroSection } from '@/src/components/sections/HeroSection';
import { ValuesSection } from '@/src/components/sections/ValuesSection';
import { InternationalEventsSection } from '@/src/components/sections/InternationalEventsSection';
import { TerritorySection } from '@/src/components/sections/TerritorySection';
import { PastrySection } from '@/src/components/sections/PastrySection';
import { PressSection } from '@/src/components/sections/PressSection';
import { ContactSection } from '@/src/components/sections/ContactSection';
import { PartnershipSection } from '@/src/components/sections/PartnershipSection';
import { Footer } from '@/src/components/sections/Footer';
import { Image } from '@/src/components/ui/Image';
import { X, ChefHat } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export default function HomePage() {
  const [currentLocale, setCurrentLocale] = useState<Locale>('it');
  const [selectedDish, setSelectedDish] = useState<typeof valuesContent.dishes[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#FAF8F7] text-[#222222] font-sans antialiased selection:bg-[#E8C5C8] selection:text-[#1a1a1a] flex flex-col">
      {/* 1. HEADER (Due righe: Top bar bianca + Top menu rosa vetrina con switcher lingue) */}
      <Header
        currentLocale={currentLocale}
        onLocaleChange={(locale) => setCurrentLocale(locale)}
      />

      <main className="flex-1 w-full" id="home">
        {/* 2. HERO SECTION (Chi Sono / Intro con ritratto e firma SVG) */}
        <HeroSection currentLocale={currentLocale} />

        {/* 3. SEZIONE "I MIEI VALORI" (Testo a sinistra + Griglia 3 piatti gourmet) */}
        <ValuesSection
          currentLocale={currentLocale}
          onSelectDish={(dish) => setSelectedDish(dish)}
        />

        {/* 4. SEZIONE "EVENTI INTERNAZIONALI" (Testo a sinistra + Griglia 3x3 di 9 foto) */}
        <InternationalEventsSection currentLocale={currentLocale} />

        {/* 5. SEZIONE "VALORIZZAZIONE DEL TERRITORIO" (Testo centrato + Griglia 3 foto) */}
        <TerritorySection currentLocale={currentLocale} />

        {/* 6. SEZIONE "ARTE BIANCA E PASTICCERIA" (Testo centrato + Griglia 3 foto lievitati) */}
        <PastrySection currentLocale={currentLocale} />

        {/* 7. SEZIONE "DICONO DI ME" (Press & Testimonials con Tab interattivi e card) */}
        <PressSection currentLocale={currentLocale} />

        {/* 8. SEZIONE CONTATTI (Form 2 colonne con bottone oro e benvenuto laboratorio) */}
        <ContactSection currentLocale={currentLocale} />

        {/* 9. SEZIONE PARTNERSHIP (Griglia di loghi in scala di grigi con hover a colori) */}
        <PartnershipSection />
      </main>

      {/* 10. FOOTER (Sfondo scuro luxury, 4 colonne + bottom bar 2026) */}
      <Footer currentLocale={currentLocale} />

      {/* MODAL DETTAGLI PIATTO SIGNATURE */}
      <AnimatePresence>
        {selectedDish && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md"
            onClick={() => setSelectedDish(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.93 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full border border-[#D4AF37]/50 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white hover:text-[#D4AF37] flex items-center justify-center border border-white/20 transition-colors"
                aria-label="Chiudi finestra"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-72 sm:h-80 w-full bg-[#1A1816]">
                <Image
                  src={`/${selectedDish.file}`}
                  fallbackSrc={selectedDish.imageFallback}
                  alt={selectedDish.title}
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#E5C07B] font-semibold">
                    {selectedDish.category[currentLocale]}
                  </span>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium mt-1">
                    {selectedDish.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-[#FCFAF9]">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C6D2D] font-semibold mb-3">
                  <ChefHat className="w-4 h-4 text-[#B8860B]" />
                  <span>Note di Degustazione &amp; Filosofia del Piatto</span>
                </div>
                <p className="text-sm sm:text-base text-[#444444] leading-relaxed font-light mb-6">
                  {selectedDish.description[currentLocale]}
                </p>

                <div className="p-4 bg-[#F8EDED] rounded-xl border border-[#D4AF37]/30 flex items-center justify-between text-xs text-[#8C6D2D]">
                  <span className="font-serif italic text-sm">
                    Chef Giovanna De Vincentis
                  </span>
                  <a
                    href="#contatti"
                    onClick={() => setSelectedDish(null)}
                    className="px-4 py-2 bg-[#B8860B] text-white rounded-md uppercase tracking-wider font-medium hover:brightness-105 transition-all"
                  >
                    Prenota Degustazione
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
