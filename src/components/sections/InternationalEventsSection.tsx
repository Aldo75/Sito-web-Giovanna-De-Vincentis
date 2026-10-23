import React, { useState } from 'react';
import { Locale, internationalEventsContent } from '@/src/data/content';
import { Image } from '@/src/components/ui/Image';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InternationalEventsSectionProps {
  currentLocale: Locale;
}

export const InternationalEventsSection: React.FC<InternationalEventsSectionProps> = ({ currentLocale }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof internationalEventsContent.items[0] | null>(null);

  return (
    <section id="eventi" className="w-full py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#EFE5E2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TITOLO CENTRATO: "Eventi internazionali" */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium text-[#222222] tracking-tight mt-1">
            {internationalEventsContent.title[currentLocale]}
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* TESTO */}
        <div className="max-w-4xl mx-auto mb-14">
          <p lang={currentLocale} style={{ hyphens: 'auto', WebkitHyphens: 'auto' }} className="text-base sm:text-lg text-[#444444] font-light leading-relaxed text-justify">
            {internationalEventsContent.intro[currentLocale]}
          </p>
        </div>

        {/* Foto (nessun testo sopra le immagini) */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {internationalEventsContent.items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              onClick={() => setSelectedPhoto(item)}
              className="group relative h-80 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-[#EBE1DC] transition-all duration-500 cursor-pointer bg-[#1E1B18]"
            >
              <Image
                src={`/${item.file}`}
                alt=""
                fill
                className="group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#D4AF37]/60 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for Photo Details */}
      <AnimatePresence>
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1C1A18] text-white rounded-2xl overflow-hidden max-w-3xl w-full border border-[#D4AF37]/50 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white hover:text-[#D4AF37] flex items-center justify-center border border-white/20 transition-colors"
                aria-label="Chiudi finestra"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-[70vh] w-full bg-black">
                <Image
                  src={`/${selectedPhoto.file}`}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InternationalEventsSection;
