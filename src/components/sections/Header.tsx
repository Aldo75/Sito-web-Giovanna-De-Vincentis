import React, { useState } from 'react';
import { asset } from '@/src/lib/asset';
import { Locale, navItems } from '@/src/data/content';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentLocale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentLocale, onLocaleChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 shadow-xs">
      {/* RIGA 1: TOP BAR (Sfondo bianco puro con SOLO al centro il logo ufficiale allegato senza alcuna modifica) */}
      <div className="w-full bg-white py-1.5 sm:py-2 px-4 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          
          {/* Spacer sinistro */}
          <div className="hidden lg:block w-16" />

          {/* SOLO AL CENTRO IL LOGO UFFICIALE ORIGINALE */}
          <div className="flex-1 flex justify-center items-center">
            <a
              href="#home"
              className="inline-flex items-center justify-center cursor-pointer"
              title="Gio Events and More - Chef Giovanna De Vincentis"
            >
              <img
                src={asset("/logo_gold_trim.png")}
                alt="Gio Events and More"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              />
              <img
                src={asset("/scritta_logo_vector.png")}
                alt=""
                className="ml-3 sm:ml-4 h-4 sm:h-5 md:h-6 w-auto object-contain"
              />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#222222] hover:text-[#B8860B] transition-colors focus:outline-none"
            aria-label="Apri menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Spacer destro */}
          <div className="hidden lg:block w-16" />
        </div>
      </div>

      {/* RIGO DORATO DI SEPARAZIONE */}
      <div className="w-full h-[2px] bg-[#C5A059]" />

      {/* RIGA 2: TOP MENU (Colore esatto di above_the_fold_rosa_vetrina.png: #DF7B9A) */}
      <div className="w-full bg-[#DF7B9A] py-3 px-4 sm:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Spazio bilanciamento a sinistra */}
          <div className="hidden lg:block w-28" />

          {/* Voci di menu centrate in bianco */}
          <nav className="hidden lg:flex items-center justify-center gap-8 xl:gap-11 flex-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-xs xl:text-sm uppercase tracking-[0.22em] text-white hover:text-[#FFF0F5] font-semibold transition-all duration-200 relative py-1 group"
              >
                {item.label[currentLocale]}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </nav>

          {/* All'estrema destra: Switcher lingue IT | EN | FR in bianco */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs uppercase tracking-widest font-semibold ml-auto lg:ml-0 text-white">
            {(['it', 'en', 'fr'] as Locale[]).map((lang, idx) => (
              <React.Fragment key={lang}>
                <button
                  onClick={() => onLocaleChange(lang)}
                  className={`px-2 py-0.5 rounded transition-all duration-200 cursor-pointer ${
                    currentLocale === lang
                      ? 'bg-white text-[#DF7B9A] font-bold shadow-xs'
                      : 'text-white/90 hover:text-white hover:bg-white/20'
                  }`}
                  aria-label={`Lingua ${lang.toUpperCase()}`}
                >
                  {lang.toUpperCase()}
                </button>
                {idx < 2 && <span className="text-white/60 select-none">|</span>}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>

      {/* Mobile Menu a discesa */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#DF7B9A] text-white border-t border-white/20 px-6 py-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-4 text-center">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.25em] text-white hover:text-[#FFE4EC] py-2 border-b border-white/20 transition-colors font-medium"
              >
                {item.label[currentLocale]}
              </a>
            ))}
            <div className="pt-2 text-[11px] tracking-widest text-white/80">
              GIO EVENTS AND MORE
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
