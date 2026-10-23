import React, { useState } from 'react';
import { Locale, contactContent } from '@/src/data/content';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactSectionProps {
  currentLocale: Locale;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLocale }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Catering Esclusivo',
    message: '',
    privacyAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) {
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <section id="contatti" className="w-full py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#EDE1DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TITOLO CENTRATO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium text-[#222222] tracking-tight mt-1">
            {contactContent.title[currentLocale]}
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* LAYOUT A 2 COLONNE: Sinistra Form, Destra Testo di Benvenuto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* SINISTRA (7/12): Form di contatto elegante */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-[#FAF6F5] rounded-3xl p-8 sm:p-10 border border-[#E8DBD5] shadow-lg relative"
          >
            <div className="mb-6">
              <h3 className="font-serif-luxury text-2xl font-medium text-[#1A1A1A] mt-1">
                Descrivimi il tuo Progetto
              </h3>
            </div>

            {isSuccess ? (
              <div className="py-12 text-center bg-white rounded-2xl border border-[#D4AF37]/50 p-8 shadow-sm">
                <CheckCircle2 className="w-14 h-14 text-[#B8860B] mx-auto mb-4" />
                <h4 className="font-serif-luxury text-2xl font-medium text-[#222222] mb-2">
                  Messaggio inviato con successo!
                </h4>
                <p className="text-sm text-[#555555] max-w-md mx-auto mb-6">
                  Grazie per aver contattato Chef Giovanna De Vincentis. La tua richiesta è stata presa in carico, ti risponderò al più presto.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      serviceType: 'Catering Esclusivo',
                      message: '',
                      privacyAccepted: false,
                    });
                  }}
                  className="px-6 py-2.5 rounded-md border border-[#D4AF37] text-xs uppercase tracking-wider font-medium text-[#8C6D2D] hover:bg-[#F8EDED]"
                >
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Nome e Cognome */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#444444] mb-2">
                      Nome e Cognome <span className="text-[#B8860B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="es. Beatrice Rossi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8C7C1] text-sm text-[#222222] focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#444444] mb-2">
                      Indirizzo Email <span className="text-[#B8860B]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nome@dominio.it"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8C7C1] text-sm text-[#222222] focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Telefono */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#444444] mb-2">
                      Recapito Telefonico <span className="text-[#B8860B]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+39 333 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8C7C1] text-sm text-[#222222] focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-all"
                    />
                  </div>

                  {/* Servizio desiderato */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#444444] mb-2">
                      Tipologia Evento / Esperienza
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8C7C1] text-sm text-[#222222] focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-all"
                    >
                      <option value="Catering Esclusivo">Catering &amp; Banqueting Esclusivo</option>
                      <option value="Cena Privata / Chef a Domicilio">Cena Privata &amp; Private Dining</option>
                      <option value="Evento Istituzionale o Diplomatico">Evento Istituzionale o Diplomatico</option>
                      <option value="Masterclass Arte Bianca & Pasticceria">Masterclass Arte Bianca &amp; Pasticceria</option>
                      <option value="Consulenza Enogastronomica">Consulenza Enogastronomica &amp; Menu</option>
                    </select>
                  </div>
                </div>

                {/* Messaggio */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#444444] mb-2">
                    Dettagli del Messaggio <span className="text-[#B8860B]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Raccontami la tua visione: data presunta, numero di ospiti, desideri e dettagli..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#D8C7C1] text-sm text-[#222222] focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-all resize-none"
                  />
                </div>

                {/* Checkbox Privacy */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    checked={formData.privacyAccepted}
                    onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-[#D8C7C1] text-[#B8860B] focus:ring-[#B8860B] accent-[#B8860B] cursor-pointer"
                  />
                  <label htmlFor="privacy" className="text-xs text-[#555555] leading-normal cursor-pointer">
                    Ho letto e accettato l&apos;informativa sulla privacy e acconsento al trattamento dei miei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).
                  </label>
                </div>

                {/* Bottone submit color oro */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 bg-gradient-to-r from-[#B8860B] via-[#C5A059] to-[#996515] text-white text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold rounded-xl shadow-md hover:shadow-xl hover:brightness-105 active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Invio in corso...</span>
                    </span>
                  ) : (
                    <>
                      <span>Invia Richiesta</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* DESTRA (5/12): Testo di benvenuto allineato a sinistra */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Testo di benvenuto richiesto */}
            <div className="mb-8">
              <p className="font-serif italic text-2xl sm:text-3xl text-[#1A1A1A] leading-snug mb-4">
                Vuoi saperne di più?<br /><span className="block h-3" />Vieni a trovarmi presso il mio laboratorio e parliamone
              </p>
              <p className="text-base text-[#555555] font-light leading-relaxed">
                Lasciami i tuoi dati e ti ricontatterò al più presto per pianificare una degustazione privata o una consulenza dedicata.
              </p>
            </div>

            {/* Atelier Info Cards */}
            <div className="space-y-5 bg-[#FAF6F5] p-6 rounded-2xl border border-[#E8DBD5]">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-[#D4AF37]/50 flex items-center justify-center text-[#B8860B] shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#222222]">
                    Laboratorio &amp; Atelier
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555555] mt-0.5">
                    {contactContent.atelierDetails.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-[#D4AF37]/50 flex items-center justify-center text-[#B8860B] shrink-0 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#222222]">
                    Ricevimento Ospiti
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555555] mt-0.5">
                    {contactContent.atelierDetails.hours}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-[#D4AF37]/50 flex items-center justify-center text-[#B8860B] shrink-0 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#222222]">
                    Telefono &amp; WhatsApp Diretto
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555555] mt-0.5">
                    Tel: <a href="tel:08576567" className="hover:text-[#B8860B] font-medium">{contactContent.atelierDetails.phone}</a> • WA:{' '}
                    <a
                      href="https://wa.me/393286623025"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#B8860B] font-medium text-[#B8860B]"
                    >
                      {contactContent.atelierDetails.whatsapp}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-[#D4AF37]/50 flex items-center justify-center text-[#B8860B] shrink-0 shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#222222]">
                    Email Ufficiale
                  </h4>
                  <a
                    href="mailto:gioeventsandmore@gmail.com"
                    className="text-xs sm:text-sm text-[#B8860B] hover:underline font-medium"
                  >
                    {contactContent.atelierDetails.email}
                  </a>
                </div>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
