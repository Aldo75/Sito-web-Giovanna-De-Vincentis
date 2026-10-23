import React from 'react';
import { Locale, pastryContent } from '@/src/data/content';
import { Image } from '@/src/components/ui/Image';
import { Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface PastrySectionProps {
  currentLocale: Locale;
}

export const PastrySection: React.FC<PastrySectionProps> = ({ currentLocale }) => {
  return (
    <section id="arte-bianca" className="w-full py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#EFE5E2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TITOLO CENTRATO: "Arte bianca e pasticceria" */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium text-[#222222] tracking-tight mt-1">
            {pastryContent.title[currentLocale]}
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* TESTO CENTRATO (usa il file allegato “Arte bianca e pasticceria.docx) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-justify mb-16 space-y-4"
          lang={currentLocale}
          style={{ hyphens: 'auto', WebkitHyphens: 'auto' }}
        >
          <p className="text-base sm:text-lg text-[#3E3E3E] font-light leading-relaxed">
            {pastryContent.text[currentLocale].split('\n\n')[0]}
          </p>
          <p className="text-base sm:text-lg text-[#3E3E3E] font-light leading-relaxed">
            {pastryContent.text[currentLocale].split('\n\n')[1]}
          </p>
        </motion.div>

        {/* SOTTO IL TESTO: Griglia di 3 foto di pasticceria/lievitati */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pastryContent.cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group bg-[#FAF7F6] rounded-2xl overflow-hidden border border-[#E9DFDB] shadow-md hover:shadow-2xl hover:border-[#D4AF37] transition-all duration-500 flex flex-col"
            >
              <div className="relative h-72 w-full overflow-hidden bg-[#26221E]">
                <Image
                  src={`/${card.file}`}
                  fallbackSrc={card.fallback}
                  alt={card.title}
                  fill
                  className="group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase bg-white/90 backdrop-blur-md text-[#8C6D2D] border border-[#D4AF37]/50 shadow-xs">
                    <Clock className="w-3.5 h-3.5 text-[#B8860B]" />
                    <span>{card.badge}</span>
                  </span>
                </div>

                {/* Subtitle & Title overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] uppercase tracking-widest text-[#E5C07B] font-semibold">
                    {card.subtitle}
                  </span>
                  <h4 className="font-serif-luxury text-xl font-medium leading-snug mt-0.5">
                    {card.title}
                  </h4>
                </div>
              </div>

              {/* Description body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-light mb-4">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PastrySection;
