'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { supabase } from '@/lib/supabase';
import AnimateInView from '@/components/ui/AnimateInView';
import { MapPin, Phone, Mail, MessageCircle, CheckCircle, Loader2 } from 'lucide-react';

const contactSchema = z.object({
  nom: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  objet: z.string().optional(),
  message: z.string().min(10, 'Message trop court'),
});

type ContactData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const t = useTranslations('contact');
  const common = useTranslations('common');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactData) => {
    setLoading(true);
    try {
      await supabase.from('contacts').insert({
        nom: data.nom,
        email: data.email,
        objet: data.objet || undefined,
        message: data.message,
      });
      setSubmitted(true);
    } catch { /* continue */ }
    finally { setLoading(false); }
  };

  return (
    <div>
      {/* Hero */}
      <section className="section-dark relative overflow-hidden pt-[70px] md:pt-[80px] pb-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1920&q=80"
            alt="Cuisine de l'École de Gastronomie Jean Paul II"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(232,160,32,0.08) 0%, transparent 60%), linear-gradient(160deg, rgba(26,15,0,0.92) 0%, rgba(44,26,0,0.92) 100%)' }}
        />
        <div className="container-custom relative z-10">
          <AnimateInView>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#E8A020]" />
              <span className="font-barlow font-700 text-[0.65rem] tracking-[0.25em] uppercase text-[#E8A020]">
                EGJP · Contactez-nous
              </span>
            </div>
          </AnimateInView>
          <AnimateInView delay={100}>
            <h1 className="font-playfair font-bold text-white mb-3"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05 }}>
              {t('title')}
            </h1>
          </AnimateInView>
          <AnimateInView delay={200}>
            <p className="font-cormorant italic text-white/60 max-w-lg"
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)' }}>
              {t('subtitle')}
            </p>
          </AnimateInView>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact info */}
            <div>
              <AnimateInView>
                <h2 className="font-playfair font-bold text-[#1A0F00] text-2xl mb-8">{t('info_title')}</h2>
              </AnimateInView>

              <div className="space-y-5 mb-10">
                {[
                  { icon: MapPin, label: 'Adresse', value: 'Avenue de la Paix, Brazzaville\nRépublique du Congo' },
                  { icon: Phone, label: 'Téléphone', value: '+242 064 000 000', href: 'tel:+242064000000' },
                  { icon: Mail, label: 'Email', value: 'contact@egjp-brazzaville.cg', href: 'mailto:contact@egjp-brazzaville.cg' },
                  { icon: MessageCircle, label: 'WhatsApp', value: '+242 064 000 001', href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}` },
                ].map(({ icon: Icon, label, value, href }) => (
                  <AnimateInView key={label} delay={50}>
                    <div className="flex gap-5 p-5 border border-[#E8A020]/15 hover:border-[#E8A020]/40 transition-colors group">
                      <div className="w-10 h-10 bg-[#E8A020]/10 border border-[#E8A020]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E8A020]/20 transition-colors">
                        <Icon size={16} className="text-[#E8A020]" />
                      </div>
                      <div>
                        <div className="font-barlow font-700 text-[0.65rem] tracking-wide uppercase text-[#5C3D11]/40 mb-1">
                          {label}
                        </div>
                        {href ? (
                          <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="font-barlow text-sm text-[#1A0F00] hover:text-[#E8A020] transition-colors whitespace-pre-line">
                            {value}
                          </a>
                        ) : (
                          <p className="font-barlow text-sm text-[#1A0F00] whitespace-pre-line">{value}</p>
                        )}
                      </div>
                    </div>
                  </AnimateInView>
                ))}
              </div>

              {/* Google Maps embed placeholder */}
              <AnimateInView delay={200}>
                <div className="w-full h-64 bg-[#1A0F00]/10 border border-[#E8A020]/15 flex items-center justify-center">
                  <div className="text-center text-[#5C3D11]/40">
                    <MapPin size={24} className="mx-auto mb-2" />
                    <p className="font-barlow text-xs">Carte Google Maps</p>
                    <p className="font-barlow text-[0.65rem]">Brazzaville, Congo</p>
                  </div>
                </div>
              </AnimateInView>
            </div>

            {/* Form */}
            <AnimateInView direction="right" delay={200}>
              <h2 className="font-playfair font-bold text-[#1A0F00] text-2xl mb-8">{t('form_title')}</h2>

              {submitted ? (
                <div className="border border-[#E8A020]/30 bg-[#E8A020]/05 p-10 text-center">
                  <CheckCircle size={40} className="text-[#E8A020] mx-auto mb-4" />
                  <h3 className="font-playfair font-bold text-[#1A0F00] text-xl mb-3">{t('success_title')}</h3>
                  <p className="font-barlow text-sm text-[#5C3D11]/70 leading-relaxed">{t('success_msg')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label className="form-label block mb-1.5">Nom complet *</label>
                      <input {...register('nom')} placeholder="Jean Nkounga" className={`form-input ${errors.nom ? 'error' : ''}`} />
                      {errors.nom && <p className="form-error mt-1">{errors.nom.message}</p>}
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="form-label block mb-1.5">Email *</label>
                      <input {...register('email')} type="email" placeholder="email@exemple.com" className={`form-input ${errors.email ? 'error' : ''}`} />
                      {errors.email && <p className="form-error mt-1">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="form-label block mb-1.5">Objet</label>
                    <input {...register('objet')} placeholder="Demande d'information, partenariat..." className="form-input" />
                  </div>
                  <div>
                    <label className="form-label block mb-1.5">Message *</label>
                    <textarea {...register('message')} rows={6} placeholder="Votre message..." className={`form-input resize-none ${errors.message ? 'error' : ''}`} />
                    {errors.message && <p className="form-error mt-1">{errors.message.message}</p>}
                  </div>
                  <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-60">
                    {loading ? (
                      <><Loader2 size={14} className="animate-spin" /><span>Envoi...</span></>
                    ) : (
                      <span>{common('send')}</span>
                    )}
                  </button>
                </form>
              )}
            </AnimateInView>
          </div>
        </div>
      </section>
    </div>
  );
}
