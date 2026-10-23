import React from 'react';
import { Locale, territoryContent } from '@/src/data/content';
import { Image } from '@/src/components/ui/Image';
import { Award, Compass, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface TerritorySectionProps {
  currentLocale: Locale;
}

export const TerritorySection: React.FC<TerritorySectionProps> = ({ currentLocale }) => {
  return (
    <section id="territorio" className="w-full py-20 lg:py-28 bg-[#FAF6F4] border-t border-[#EDE1DC] relative overflow-hidden">
      {/* Background soft circular gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#F7EBEB]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TITOLO CENTRATO: "Valorizzazione del territorio" */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium text-[#222222] tracking-tight mt-1">
            {territoryContent.title[currentLocale]}
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* TESTO CENTRATO O A LARGHEZZA MEDIA (usa il file allegato Valorizzazione del territorio.docx) */}
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
            {territoryContent.narrative[currentLocale].split('\n\n')[0]}
          </p>
          <p className="text-base sm:text-lg text-[#3E3E3E] font-light leading-relaxed">
            {territoryContent.narrative[currentLocale].split('\n\n')[1]}
          </p>
        </motion.div>

        {/* SOTTO IL TESTO: Griglia di 3 foto legate al territorio/olio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {territoryContent.items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E8DBD5] shadow-md hover:shadow-xl hover:border-[#D4AF37] transition-all duration-500 flex flex-col"
            >
              <div className="relative h-80 w-full overflow-hidden bg-[#24201D]">
                <Image
                  src={`/${item.file}`}
                  fallbackSrc={item.fallback}
                  alt={item.title}
                  fill
                  className="group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase bg-[#B8860B] text-white shadow-md">
                    <Award className="w-3.5 h-3.5 text-[#FFE8A3]" />
                    <span>{item.badge}</span>
                  </span>
                </div>

                {/* Bottom title on photo */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-serif-luxury text-lg sm:text-xl font-medium leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>

              {/* Text caption below */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-light">
                  {item.caption}
                </p>
                <div className="mt-4 pt-3 border-t border-[#F0E4DE] flex items-center justify-between text-xs text-[#8C6D2D]">
                  <span className="flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-[#B8860B]" />
                    <span>Tocco da Casauria</span>
                  </span>
                  <span className="font-serif italic">Eccellenza Territoriale</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TerritorySection;
