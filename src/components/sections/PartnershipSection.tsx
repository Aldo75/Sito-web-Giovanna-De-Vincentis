import React from 'react';
import { motion } from 'motion/react';

interface PartnerItem {
  id: number;
  filename: string;
  name: string;
}

// I 15 loghi allegati in colori originali (senza scala di grigio e senza hover filter)
const partnerLogos: PartnerItem[] = [
  { id: 1, filename: 'images/Logo1.jpg', name: 'Federazione Italiana Cuochi' },
  { id: 2, filename: 'images/Logo2.jpg', name: 'FIC Lady Chef' },
  { id: 3, filename: 'images/Logo3.jpeg', name: 'Slow Food Terra Madre' },
  { id: 4, filename: 'images/Logo4.jpg', name: 'Casa Sanremo' },
  { id: 5, filename: 'images/Logo5.png', name: 'Extra Cuoca Nazionale' },
  { id: 6, filename: 'images/Logo6.jpg', name: 'Cortina Queen of Taste' },
  { id: 7, filename: 'images/Logo7.jpg', name: 'Consorzio Olio Casaurino' },
  { id: 8, filename: 'images/Logo8.jpg', name: 'Ambasciata Riyadh' },
  { id: 9, filename: 'images/Logo9.jpeg', name: 'Regione Abruzzo' },
  { id: 10, filename: 'images/Logo10.png', name: 'Gambero Rosso' },
  { id: 11, filename: 'images/Logo11.svg.jpg', name: 'Accademia Italiana della Cucina' },
  { id: 12, filename: 'images/Logo12.png', name: 'Parco Nazionale della Majella' },
  { id: 13, filename: 'images/Logo13.jpg', name: 'Consorzio Zafferano DOP' },
  { id: 14, filename: 'images/Logo14.png', name: 'Associazione Cuochi Pescara' },
  { id: 15, filename: 'images/Logo15.jpeg', name: 'Maestri del Lievito Madre' },
];

export const PartnershipSection: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-[#FCFAF9] border-t border-[#EFE5E2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TITOLO CENTRATO: "Partnership" */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#8C6D2D] font-semibold">
              I Nostri Partner
            </span>
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium text-[#222222] tracking-tight mt-1">
            Partnership
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* GRIGLIA DEI 15 LOGHI IN COLORI ORIGINALI (Senza scala di grigi, senza filtri hover) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
          {partnerLogos.map((logo, idx) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (idx % 5) * 0.05 }}
              className="w-full h-24 sm:h-28 bg-white rounded-xl border border-[#EDE2DC] shadow-xs p-3 sm:p-4 flex items-center justify-center"
            >
              {/* Logo nei suoi colori originali naturali */}
              <img
                src={`/${logo.filename}`}
                alt={logo.name}
                loading="eager"
                className="max-h-16 max-w-full w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PartnershipSection;
