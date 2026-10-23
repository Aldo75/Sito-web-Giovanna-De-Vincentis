import React, { useState } from 'react';
import { asset } from '@/src/lib/asset';
import { Locale, footerContent } from '@/src/data/content';
import { OfficialLogo } from '@/src/components/ui/OfficialLogo';
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Youtube, Linkedin, CheckCircle2 } from 'lucide-react';

/** Simbolo ufficiale di WhatsApp (Simple Icons) */
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

interface FooterProps {
  currentLocale: Locale;
}

export const Footer: React.FC<FooterProps> = ({ currentLocale }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  return (
    <footer className="w-full bg-[#DF7B9A] text-white pt-16 lg:pt-20 pb-8 border-t-2 border-[#D4AF37]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 COLONNE PRINCIPALI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b-2 border-[#D4AF37]">
          
          {/* COLONNA 1 (lg:col-span-4): Logo originale, breve descrizione, contatti diretti */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo ufficiale del brand */}
            <a href="#home" className="inline-block group" title="Gio Events and More">
              <div className="py-1">
                <img
                  src={asset("/logo_oro_page-0001 (1)-Photoroom.png")}
                  alt="Gio Events and More"
                  className="h-20 sm:h-24 w-auto object-contain"
                />
              </div>
            </a>

            {/* Contatti diretti specificati dal brief */}
            <div className="space-y-2.5 pt-2 text-xs text-white">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>
                  Tel:{' '}
                  <a href={`tel:${footerContent.contacts.phone}`} className="hover:text-[#FFE9A8] transition-colors">
                    {footerContent.contacts.phone}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>
                  WhatsApp:{' '}
                  <a
                    href="https://wa.me/393286623025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FFE9A8] transition-colors"
                  >
                    {footerContent.contacts.whatsapp}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>
                  Email:{' '}
                  <a
                    href={`mailto:${footerContent.contacts.email}`}
                    className="hover:text-[#FFE9A8] transition-colors"
                  >
                    {footerContent.contacts.email}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{footerContent.contacts.location}</span>
              </div>
            </div>
          </div>

          {/* COLONNA 2 (lg:col-span-2): Link rapidi (Home, Giovanna, Servizi, Contatti) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-white">
              Link Rapidi
            </h4>
            <ul className="space-y-2.5 text-xs text-white">
              {footerContent.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-[#FFE9A8] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                  >
                    <span className="text-[#D4AF37]/40 text-[9px]">▪</span>
                    <span>{link.label[currentLocale]}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLONNA 3 (lg:col-span-2): Social Media (YouTube, IG, FB, LinkedIn) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-white">
              Social Media
            </h4>
            <p className="text-xs text-white/90 leading-relaxed">
              Segui i dietro le quinte, le masterclass e i video reportage ufficiali.
            </p>
            <div className="grid grid-cols-2 gap-3 w-max pt-2">
              {[
                { name: 'Instagram', href: 'https://www.instagram.com/gustalabruzzo/reel/DcYJQrmKHYq/?hl=ar', color: '#E4405F', Icon: Instagram },
                { name: 'Facebook', href: 'https://www.facebook.com/watch/?v=537924237804843', color: '#1877F2', Icon: Facebook },
                { name: 'YouTube', href: 'https://www.youtube.com/watch?v=lTbzASTD8rY', color: '#FF0000', Icon: Youtube },
                { name: 'LinkedIn', href: '#', color: '#0A66C2', Icon: Linkedin },
              ].map(({ name, href, color, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target={href === '#' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white shadow-sm hover:scale-110 flex items-center justify-center transition-transform duration-300"
                  style={{ color }}
                  aria-label={name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* COLONNA 4 (lg:col-span-3): Newsletter (Input email + bottone) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-white">
              Club Privé &amp; Newsletter
            </h4>
            <p className="text-xs text-white/90 font-light leading-relaxed">
              Ricevi inviti esclusivi per cene degustazione a porte chiuse, nuovi lievitati d’autore e masterclass riservate.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 bg-white/5 border border-[#D4AF37]/50 rounded-xl flex items-center gap-2.5 text-xs text-[#D4AF37]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Grazie per l’iscrizione al Club Privé!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2.5">
                <input
                  type="email"
                  required
                  placeholder="Il tuo indirizzo email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white/95 border border-white/40 rounded-lg text-xs text-[#222222] placeholder-[#857B72] focus:outline-none focus:border-[#D4AF37] transition-all"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-[#B8860B] to-[#996515] hover:brightness-110 text-white text-xs uppercase tracking-widest font-medium rounded-lg shadow-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Iscriviti</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* BOTTOM BAR: Copyright © 2026 Gio Events and More | P.IVA [] | Privacy Policy | Cookie Policy | GDPR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/90 gap-4">
          <div>
            Copyright © 2026 <strong className="text-white font-semibold">Gio Events and More</strong> | P.IVA 02194820684 | All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <a href="#privacy" className="hover:text-[#FFE9A8] transition-colors">Privacy Policy</a>
            <span className="text-white/20">•</span>
            <a href="#cookies" className="hover:text-[#FFE9A8] transition-colors">Cookie Policy</a>
            <span className="text-white/20">•</span>
            <a href="#gdpr" className="hover:text-[#FFE9A8] transition-colors">GDPR Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
