import React, { useState } from 'react';
import { Locale, pressItems, PressItem } from '@/src/data/content';
import { Image } from '@/src/components/ui/Image';
import { Newspaper, PlayCircle, Video, ExternalLink, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PressSectionProps {
  currentLocale: Locale;
}

type FilterCategory = 'all' | 'press' | 'video' | 'social';

export const PressSection: React.FC<PressSectionProps> = ({ currentLocale }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filteredItems = activeFilter === 'all'
    ? pressItems
    : pressItems.filter((item) => item.category === activeFilter);

  const filterTabs: { id: FilterCategory; label: Record<Locale, string>; icon: React.ReactNode }[] = [
    { id: 'all', label: { it: 'Tutti', en: 'All Media', fr: 'Tous les Médias' }, icon: <Filter className="w-3.5 h-3.5" /> },
    { id: 'press', label: { it: 'Articoli & Stampa', en: 'Press & Articles', fr: 'Presse & Articles' }, icon: <Newspaper className="w-3.5 h-3.5" /> },
    { id: 'video', label: { it: 'Video & TV', en: 'Video & TV', fr: 'Vidéo & TV' }, icon: <PlayCircle className="w-3.5 h-3.5" /> },
    { id: 'social', label: { it: 'Social & Reels', en: 'Social & Reels', fr: 'Social & Reels' }, icon: <Video className="w-3.5 h-3.5" /> },
  ];

  return (
    <section id="dicono-di-me" className="w-full py-20 lg:py-28 bg-[#FAF6F5] border-t border-[#EDE1DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TITOLO CENTRATO: "Dicono di me" */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium text-[#222222] tracking-tight mt-1">
            Dicono di me
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
          <p className="text-sm sm:text-base text-[#555555] font-light mt-4 max-w-2xl mx-auto">
            Dalle colonne di Gambero Rosso alle interviste televisive, dai premi nazionali agli eventi internazionali: i racconti e le voci dei media su Chef Giovanna De Vincentis.
          </p>
        </div>

        {/* TAB FILTER BAR ELEGANTE */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-[#B8860B] to-[#996515] text-white shadow-md'
                  : 'bg-white/80 hover:bg-white text-[#555555] hover:text-[#222222] border border-[#E5D7D1]'
              }`}
            >
              {tab.icon}
              <span>{tab.label[currentLocale]}</span>
            </button>
          ))}
        </div>

        {/* GRIGLIA DELLE CARD (Stampa, Video, Social) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E8DBD5] shadow-sm hover:shadow-xl hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Header card image preview */}
                <div className="relative h-48 w-full bg-[#1F1C19] overflow-hidden">
                  <Image
                    src={item.imageFallback}
                    alt={item.title}
                    fill
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-[#1A1816]/80 backdrop-blur-md rounded-md text-[10px] uppercase tracking-wider font-semibold text-[#E5C07B] border border-[#D4AF37]/30">
                      {item.source}
                    </span>
                    <span className="text-[10px] text-white/80 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded">
                      {item.date}
                    </span>
                  </div>

                  {/* Play badge for video/social */}
                  {item.category !== 'press' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-white/30 backdrop-blur-md border border-white/60 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        <PlayCircle className="w-6 h-6 fill-white/20" />
                      </div>
                    </div>
                  )}

                  {/* Category Pill on bottom of image */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[11px] font-medium text-white/90 drop-shadow-sm">
                      {item.categoryLabel[currentLocale]}
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-luxury text-lg font-medium text-[#1A1A1A] group-hover:text-[#B8860B] transition-colors leading-snug mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>

                  {/* Link action button */}
                  <div className="mt-6 pt-4 border-t border-[#F0E4DE] flex items-center justify-between">
                    <span className="text-[11px] text-[#8C6D2D] uppercase tracking-wider font-medium">
                      Fonte verificata
                    </span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#FAF4F2] hover:bg-[#B8860B] text-[#8C6D2D] hover:text-white text-xs font-medium uppercase tracking-wider transition-all duration-300"
                    >
                      <span>{item.actionText[currentLocale]}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default PressSection;
