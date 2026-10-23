import React from 'react';
import { Locale, valuesContent } from '@/src/data/content';
import { Image } from '@/src/components/ui/Image';
import { motion } from 'motion/react';

interface ValuesSectionProps {
  currentLocale: Locale;
  onSelectDish?: (dish: typeof valuesContent.dishes[0]) => void;
}

export const ValuesSection: React.FC<ValuesSectionProps> = ({ currentLocale }) => {
  return (
    <section id="valori" className="w-full py-20 lg:py-28 bg-[#FAF6F5] border-t border-[#EFE5E2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TITOLO CENTRATO: "I miei valori" (Font Serif, colore antracite) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium text-[#222222] tracking-tight mt-1">
            {valuesContent.title[currentLocale]}
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* TESTO CENTRATO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto mb-16 text-[#333333] font-light text-base sm:text-lg leading-relaxed"
        >
          <p lang={currentLocale} style={{ hyphens: 'auto', WebkitHyphens: 'auto' }} className="text-justify">
            {valuesContent.manifesto[currentLocale]}
          </p>
        </motion.div>

        {/* SOTTO IL TESTO: Griglia di 3 foto di piatti gourmet (senza etichette) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valuesContent.dishes.map((dish, idx) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative h-80 w-full rounded-2xl overflow-hidden border border-[#E9DBD5] shadow-md hover:shadow-xl hover:border-[#D4AF37]/70 transition-all duration-500 bg-[#201D1A]"
            >
              <Image
                src={`/images/${dish.file}`}
                fallbackSrc={dish.imageFallback}
                alt={dish.title}
                fill
                className="group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ValuesSection;
