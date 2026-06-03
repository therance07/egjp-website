'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { supabase } from '@/lib/supabase';
import AnimateInView from '@/components/ui/AnimateInView';
import { CheckCircle, MessageCircle, Loader2, ChevronDown } from 'lucide-react';

const inscriptionSchema = z.object({
  nom: z.string().min(2, 'Nom requis'),
  prenom: z.string().min(2, 'Prénom requis'),
  date_naissance: z.string().optional(),
  nationalite: z.string().optional(),
  email: z.string().email('Email invalide'),
  telephone: z.string().min(8, 'Téléphone requis'),
  whatsapp: z.string().optional(),
  formation_souhaitee: z.string().min(1, 'Veuillez choisir une formation'),
  niveau_etudes: z.string().optional(),
  message: z.string().min(20, 'Veuillez rédiger un minimum de motivation (20 caractères)'),
});

type InscriptionData = z.infer<typeof inscriptionSchema>;

const formations = [
  { value: 'cap-cuisine', label: 'CAP Cuisine (2 ans)' },
  { value: 'brevet-technicien', label: 'Brevet de Technicien Hôtellerie-Restauration (3 ans)' },
  { value: 'patisserie', label: 'Formation Pâtisserie (6 mois)' },
  { value: 'sommellerie', label: 'Formation Service & Sommellerie (3 mois)' },
  { value: 'pro-continue', label: 'Formation Continue Professionnels' },
];

const niveaux = [
  'Brevet des collèges (BEPC)',
  'CAP / BEP',
  'Baccalauréat',
  'Bac+2',
  'Bac+3 et plus',
  'Sans diplôme (adulte)',
];

const faq = [
  {
    q: 'Quand démarrent les prochaines formations ?',
    a: 'Les formations diplômantes démarrent en septembre. Les formations courtes ont des sessions en janvier et juillet. La formation continue est ouverte toute l\'année.',
  },
  {
    q: 'Comment se déroule la sélection ?',
    a: 'Après réception de votre dossier, vous serez contacté pour un entretien de motivation, suivi d\'un test pratique pour les formations techniques avancées.',
  },
  {
    q: 'Les frais de formation peuvent-ils être financés ?',
    a: 'Oui, le FODEC (Congo) peut prendre en charge une partie ou la totalité des frais pour les ressortissants congolais. Nous vous accompagnons dans les démarches.',
  },
  {
    q: 'Y a-t-il des bourses disponibles ?',
    a: 'L\'EGJP propose des bourses partielles sur critères sociaux. Mentionnez votre situation dans le formulaire de candidature.',
  },
  {
    q: 'Peut-on intégrer l\'école en cours d\'année ?',
    a: 'Pour les formations diplômantes, l\'intégration se fait en début d\'année scolaire uniquement. Pour les formations courtes, des sessions régulières permettent une intégration rapide.',
  },
];

export default function InscriptionPage() {
  const t = useTranslations('inscription');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const { register, handleSubmit, formState: { errors }, getValues } = useForm<InscriptionData>({
    resolver: zodResolver(inscriptionSchema),
  });

  const onSubmit = async (data: InscriptionData) => {
    setLoading(true);
    setError(null);
    try {
      const { error: supaError } = await supabase.from('inscriptions').insert({
        nom: data.nom,
        prenom: data.prenom,
        date_naissance: data.date_naissance || undefined,
        nationalite: data.nationalite || undefined,
        email: data.email,
        telephone: data.telephone,
        whatsapp: data.whatsapp || undefined,
        formation_souhaitee: data.formation_souhaitee,
        niveau_etudes: data.niveau_etudes || undefined,
        message: data.message,
      });
      if (supaError) throw supaError;
      setSubmitted(true);
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
    } finally {
      setLoading(false);
    }
  };

  const buildWhatsApp = () => {
    const v = getValues();
    const msg = `Nouvelle candidature EGJP\n\nNom : ${v.prenom} ${v.nom}\nEmail : ${v.email}\nFormation : ${v.formation_souhaitee}\nTél : ${v.telephone}`;
    return `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div>
      {/* Hero */}
      <section className="section-dark relative overflow-hidden pt-[70px] md:pt-[80px] pb-24">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 40% 60%, rgba(232,160,32,0.08) 0%, transparent 60%), linear-gradient(160deg, #1A0F00 0%, #2C1A00 100%)' }}
        />
        <div className="container-custom relative z-10">
          <AnimateInView>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#E8A020]" />
              <span className="font-barlow font-700 text-[0.65rem] tracking-[0.25em] uppercase text-[#E8A020]">
                EGJP · Rejoindre l'école
              </span>
            </div>
          </AnimateInView>
          <AnimateInView delay={100}>
            <h1 className="font-playfair font-bold text-white mb-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05 }}>
              {t('title')}
            </h1>
          </AnimateInView>
          <AnimateInView delay={200}>
            <p className="font-cormorant italic text-white/60 max-w-xl"
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)' }}>
              {t('subtitle')}
            </p>
          </AnimateInView>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Form */}
            <div className="lg:col-span-2">
              <AnimateInView>
                <h2 className="font-playfair font-bold text-[#1A0F00] text-2xl mb-8">{t('form_title')}</h2>
              </AnimateInView>

              {submitted ? (
                <AnimateInView>
                  <div className="border border-[#E8A020]/30 bg-[#E8A020]/05 p-10 text-center">
                    <CheckCircle size={48} className="text-[#E8A020] mx-auto mb-4" />
                    <h3 className="font-playfair font-bold text-[#1A0F00] text-2xl mb-3">{t('success_title')}</h3>
                    <p className="font-barlow text-sm text-[#5C3D11]/70 mb-6 leading-relaxed max-w-md mx-auto">
                      {t('success_msg')}
                    </p>
                    <a
                      href={buildWhatsApp()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-white font-barlow font-700 text-[0.72rem] tracking-[0.1em] uppercase px-6 py-3 hover:bg-[#128C7E] transition-colors"
                    >
                      <MessageCircle size={14} />
                      {t('whatsapp_follow')}
                    </a>
                  </div>
                </AnimateInView>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal info */}
                  <div>
                    <h3 className="font-barlow font-700 text-[0.68rem] tracking-[0.2em] uppercase text-[#E8A020] mb-4 flex items-center gap-3">
                      <span>01</span>
                      <span className="w-8 h-[1px] bg-[#E8A020]" />
                      {t('personal_info')}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="form-label block mb-1.5">Prénom *</label>
                        <input {...register('prenom')} placeholder="Jean" className={`form-input ${errors.prenom ? 'error' : ''}`} />
                        {errors.prenom && <p className="form-error mt-1">{errors.prenom.message}</p>}
                      </div>
                      <div>
                        <label className="form-label block mb-1.5">Nom *</label>
                        <input {...register('nom')} placeholder="Nkounga" className={`form-input ${errors.nom ? 'error' : ''}`} />
                        {errors.nom && <p className="form-error mt-1">{errors.nom.message}</p>}
                      </div>
                      <div>
                        <label className="form-label block mb-1.5">Date de naissance</label>
                        <input {...register('date_naissance')} type="date" className="form-input" />
                      </div>
                      <div>
                        <label className="form-label block mb-1.5">Nationalité</label>
                        <input {...register('nationalite')} placeholder="Congolaise" className="form-input" />
                      </div>
                      <div>
                        <label className="form-label block mb-1.5">Email *</label>
                        <input {...register('email')} type="email" placeholder="jean@exemple.com" className={`form-input ${errors.email ? 'error' : ''}`} />
                        {errors.email && <p className="form-error mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="form-label block mb-1.5">Téléphone *</label>
                        <input {...register('telephone')} placeholder="+242 00 000 000" className={`form-input ${errors.telephone ? 'error' : ''}`} />
                        {errors.telephone && <p className="form-error mt-1">{errors.telephone.message}</p>}
                      </div>
                      <div>
                        <label className="form-label block mb-1.5">WhatsApp</label>
                        <input {...register('whatsapp')} placeholder="+242 00 000 000" className="form-input" />
                      </div>
                    </div>
                  </div>

                  {/* Program */}
                  <div>
                    <h3 className="font-barlow font-700 text-[0.68rem] tracking-[0.2em] uppercase text-[#E8A020] mb-4 flex items-center gap-3">
                      <span>02</span>
                      <span className="w-8 h-[1px] bg-[#E8A020]" />
                      {t('program_choice')}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label className="form-label block mb-1.5">Formation souhaitée *</label>
                        <select {...register('formation_souhaitee')} className={`form-input ${errors.formation_souhaitee ? 'error' : ''}`}>
                          <option value="">-- Choisir une formation --</option>
                          {formations.map((f) => (
                            <option key={f.value} value={f.value}>{f.label}</option>
                          ))}
                        </select>
                        {errors.formation_souhaitee && <p className="form-error mt-1">{errors.formation_souhaitee.message}</p>}
                      </div>
                      <div>
                        <label className="form-label block mb-1.5">Niveau d'études actuel</label>
                        <select {...register('niveau_etudes')} className="form-input">
                          <option value="">-- Choisir --</option>
                          {niveaux.map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Motivation */}
                  <div>
                    <h3 className="font-barlow font-700 text-[0.68rem] tracking-[0.2em] uppercase text-[#E8A020] mb-4 flex items-center gap-3">
                      <span>03</span>
                      <span className="w-8 h-[1px] bg-[#E8A020]" />
                      {t('motivation')}
                    </h3>
                    <div>
                      <label className="form-label block mb-1.5">Lettre de motivation *</label>
                      <textarea
                        {...register('message')}
                        rows={5}
                        placeholder="Parlez-nous de votre passion pour la gastronomie, de votre parcours et de vos ambitions professionnelles..."
                        className={`form-input resize-none ${errors.message ? 'error' : ''}`}
                      />
                      {errors.message && <p className="form-error mt-1">{errors.message.message}</p>}
                    </div>
                  </div>

                  {error && (
                    <div className="border border-red-400/30 bg-red-400/10 p-4">
                      <p className="font-barlow text-xs text-red-500">{error}</p>
                    </div>
                  )}

                  <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-60">
                    {loading ? (
                      <><Loader2 size={14} className="animate-spin" /><span>Envoi en cours...</span></>
                    ) : (
                      <span>Soumettre ma candidature</span>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar FAQ */}
            <div>
              <AnimateInView direction="right" delay={200}>
                <h3 className="font-playfair font-bold text-[#1A0F00] text-xl mb-6">{t('faq_title')}</h3>
                <div className="space-y-2">
                  {faq.map((item, i) => (
                    <div key={i} className="border border-[#E8A020]/20 overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-start justify-between gap-3 p-4 text-left hover:bg-[#E8A020]/05 transition-colors"
                      >
                        <span className="font-barlow font-600 text-[0.75rem] text-[#1A0F00] leading-snug">
                          {item.q}
                        </span>
                        <ChevronDown size={14} className={`text-[#E8A020] flex-shrink-0 mt-0.5 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaq === i && (
                        <div className="px-4 pb-4 font-barlow text-xs text-[#5C3D11]/70 leading-relaxed border-t border-[#E8A020]/10 pt-3">
                          {item.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </AnimateInView>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
