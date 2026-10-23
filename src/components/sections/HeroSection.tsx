import React from 'react';
import { Signature } from '@/src/components/ui/Signature';
import { motion } from 'motion/react';

interface HeroSectionProps {
  currentLocale?: string;
}

/**
 * Hero Section:
 * Sinistra: Foto allegata dall'utente "GIOVANNA DE VINCENTIS senza sfondo.png"
 * Destra: Solo il testo del file allegato "Presentazione.pdf" + la firma autografa
 */
export const HeroSection: React.FC<HeroSectionProps> = () => {
  const quoteText =
    "«I miei piatti sono l'espressione di me stessa e del mio Abruzzo, della terra che mi circonda e delle mani artigiane che la lavorano. Il mio obiettivo è preservare il patrimonio della cucina tradizionale e valorizzare i prodotti tipici, guardandoli con occhi nuovi e accendendoli con un guizzo di avanguardia.»";

  return (
    <section id="giovanna" className="w-full py-10 md:py-16 lg:py-20 bg-white overflow-hidden border-b border-[#E8DBD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* SINISTRA: Foto allegata "GIOVANNA DE VINCENTIS senza sfondo.png" */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6 flex justify-center items-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg flex justify-center">
              <img
                src="/GIOVANNA DE VINCENTIS senza sfondo.png"
                alt="Chef Giovanna De Vincentis"
                className="w-auto max-h-[500px] sm:max-h-[580px] lg:max-h-[640px] object-contain drop-shadow-sm"
              />
            </div>
          </motion.div>

          {/* DESTRA: Esclusivamente il testo da Presentazione.pdf + Firma */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Testo esatto di Presentazione.pdf */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#D4AF37]/60">
              <p className="font-serif-luxury italic text-xl sm:text-2xl lg:text-3xl text-[#222222] leading-relaxed font-normal">
                {quoteText}
              </p>
            </div>

            {/* Subito sotto il testo: la firma autografa */}
            <div className="mt-8 sm:mt-10 pt-4">
              <Signature className="w-72 sm:w-80 h-24" color="#A8813B" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
