'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Clock, GraduationCap, Briefcase, ChevronRight, Filter } from 'lucide-react';
import AnimateInView from '@/components/ui/AnimateInView';

const programs = [
  {
    id: 'cap-cuisine',
    type: 'diplômante',
    title: 'CAP Cuisine',
    shortDesc: 'Maîtrisez les fondamentaux culinaires avec une approche franco-africaine d\'excellence.',
    fullDesc: 'Le CAP Cuisine de l\'EGJP vous forme aux techniques culinaires classiques tout en intégrant la richesse des saveurs africaines. Vous maîtriserez découpes, cuissons, sauces, hygiène alimentaire et gestion d\'un poste de cuisine.',
    duration: '2 ans',
    level: 'Brevet des collèges ou équivalent',
    career: ['Chef de partie', 'Cuisinier', 'Assistant chef', 'Traiteur'],
    fees: '450 000 FCFA / an',
    starts: 'Septembre',
    icon: '🍳',
    highlights: ['Techniques culinaires classiques', 'Cuisine africaine contemporaine', 'Hygiène HACCP', 'Stage en entreprise 6 mois'],
  },
  {
    id: 'brevet-technicien',
    type: 'diplômante',
    title: 'Brevet de Technicien Hôtellerie-Restauration',
    shortDesc: 'Formation complète et reconnue pour les futurs managers de la restauration.',
    fullDesc: 'Le BT Hôtellerie-Restauration est notre formation phare. Elle couvre la cuisine gastronomique, le service en salle, l\'œnologie basique, le management d\'équipe, la gestion des coûts et le marketing de la restauration.',
    duration: '3 ans',
    level: 'CAP ou baccalauréat',
    career: ['Chef de cuisine', 'Maître d\'hôtel', 'Directeur de restaurant', 'Consultant F&B'],
    fees: '600 000 FCFA / an',
    starts: 'Septembre',
    icon: '🏆',
    highlights: ['Cuisine gastronomique avancée', 'Management de restaurant', 'Oenologie & sommellerie', 'Double stage international possible'],
  },
  {
    id: 'patisserie',
    type: 'courte',
    title: 'Formation Pâtisserie & Boulangerie',
    shortDesc: 'Devenez artisan pâtissier avec une spécialisation sur les saveurs africaines.',
    fullDesc: 'Cette formation intensive vous plonge dans l\'univers de la pâtisserie française et africaine : entremets, viennoiseries, chocolaterie, desserts de restaurant et gâteaux cérémoniels. Idéale pour les profils créatifs.',
    duration: '6 mois',
    level: 'Ouvert à tous',
    career: ['Pâtissier artisan', 'Chef pâtissier', 'Créateur de pâtisseries événementielles'],
    fees: '280 000 FCFA',
    starts: 'Janvier et Juillet',
    icon: '🍰',
    highlights: ['Pâtisserie française classique', 'Chocolaterie artisanale', 'Viennoiseries & pains', 'Création & décoration'],
  },
  {
    id: 'sommellerie',
    type: 'courte',
    title: 'Service & Sommellerie',
    shortDesc: 'Maîtrisez l\'art du service et initiez-vous à l\'œnologie africaine et française.',
    fullDesc: 'Formation axée sur le service en salle d\'excellence, les vins du monde, les accords mets-vins et les spiritueux. Idéale pour les professionnels du service souhaitant monter en compétences.',
    duration: '3 mois',
    level: 'Expérience service souhaitée',
    career: ['Sommelier', 'Chef de rang', 'Maître d\'hôtel', 'Caviste'],
    fees: '180 000 FCFA',
    starts: 'Continu',
    icon: '🍷',
    highlights: ['Service gastronomique', 'Vins & spiritueux', 'Accords mets-vins', 'Protocoles & étiquette'],
  },
  {
    id: 'pro-continue',
    type: 'courte',
    title: 'Formation Continue Professionnels',
    shortDesc: 'Modules courts pour les professionnels en activité souhaitant se spécialiser.',
    fullDesc: 'Programme sur-mesure pour les professionnels de la restauration. Modules disponibles : Cuisine végétale, Gestion des coûts, Hygiène et sécurité alimentaire HACCP, Pâtisserie avancée, Management d\'équipe cuisine.',
    duration: '1 à 4 semaines',
    level: 'Professionnels en activité',
    career: ['Montée en compétences', 'Spécialisation', 'Certification professionnelle'],
    fees: 'Sur devis',
    starts: 'Continu tout au long de l\'année',
    icon: '📚',
    highlights: ['Modules flexibles', 'Horaires adaptés', 'Attestation de formation', 'Financement FODEC possible'],
  },
];

type FilterType = 'all' | 'diplômante' | 'courte';

export default function FormationsPage() {
  const locale = useLocale();
  const t = useTranslations('formations');
  const [filter, setFilter] = useState<FilterType>('all');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = programs.filter(p => filter === 'all' || p.type === filter);

  return (
    <div>
      {/* Page hero */}
      <section className="section-dark relative overflow-hidden pt-[70px] md:pt-[80px] pb-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1920&q=80"
            alt="Cours de cuisine professionnelle à l'EGJP"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(232,160,32,0.08) 0%, transparent 60%), linear-gradient(135deg, rgba(26,15,0,0.9) 0%, rgba(44,26,0,0.9) 100%)' }}
        />
        <div className="container-custom relative z-10">
          <AnimateInView>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#E8A020]" />
              <span className="font-barlow font-700 text-[0.65rem] tracking-[0.25em] uppercase text-[#E8A020]">
                EGJP · Programmes
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
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}>
              {t('subtitle')}
            </p>
          </AnimateInView>
        </div>
      </section>

      {/* Filter + Programs */}
      <section className="section-padding section-light">
        <div className="container-custom">
          {/* Filters */}
          <AnimateInView className="flex items-center gap-4 mb-12 flex-wrap">
            <div className="flex items-center gap-2 text-[#5C3D11]/50 mr-2">
              <Filter size={14} />
              <span className="font-barlow text-xs tracking-wide uppercase">Filtrer :</span>
            </div>
            {(['all', 'diplômante', 'courte'] as FilterType[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`font-barlow font-600 text-[0.72rem] tracking-[0.1em] uppercase px-5 py-2.5 border transition-all duration-300 ${
                  filter === f
                    ? 'bg-[#E8A020] text-[#1A0F00] border-[#E8A020]'
                    : 'border-[#E8A020]/30 text-[#5C3D11] hover:border-[#E8A020] hover:text-[#1A0F00]'
                }`}
              >
                {f === 'all' ? t('filter_all') : f === 'diplômante' ? t('filter_diploma') : t('filter_short')}
              </button>
            ))}
            <span className="ml-auto font-barlow text-xs text-[#5C3D11]/40">
              {filtered.length} programme{filtered.length > 1 ? 's' : ''}
            </span>
          </AnimateInView>

          {/* Programs list */}
          <div className="space-y-6">
            {filtered.map((program, i) => (
              <AnimateInView key={program.id} delay={i * 80} direction="up">
                <div
                  id={program.id}
                  className={`card-base overflow-hidden transition-all duration-500 ${
                    expanded === program.id ? 'border-[#E8A020]/40' : ''
                  }`}
                >
                  {/* Top accent */}
                  <div className="h-1 bg-gradient-to-r from-[#E8A020] to-[#F5C842]" />

                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Icon + type */}
                      <div className="flex-shrink-0 flex flex-row md:flex-col items-center gap-4 md:gap-2">
                        <div className="w-14 h-14 bg-[#E8A020]/10 border border-[#E8A020]/20 flex items-center justify-center text-2xl">
                          {program.icon}
                        </div>
                        <span className={`badge ${program.type === 'diplômante' ? 'badge-gold' : 'badge-gray'}`}>
                          {program.type === 'diplômante' ? 'Diplômante' : 'Courte'}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h2 className="font-playfair font-bold text-[#1A0F00] text-2xl mb-2">
                          {program.title}
                        </h2>
                        <p className="font-barlow text-sm text-[#5C3D11]/70 mb-5 leading-relaxed">
                          {expanded === program.id ? program.fullDesc : program.shortDesc}
                        </p>

                        {/* Meta row */}
                        <div className="flex flex-wrap gap-6 mb-5">
                          <div className="flex items-center gap-2">
                            <Clock size={13} className="text-[#E8A020]" />
                            <span className="font-barlow text-xs">
                              <span className="font-600 text-[#1A0F00]">{t('duration')} :</span>{' '}
                              <span className="text-[#5C3D11]">{program.duration}</span>
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <GraduationCap size={13} className="text-[#E8A020]" />
                            <span className="font-barlow text-xs">
                              <span className="font-600 text-[#1A0F00]">{t('level')} :</span>{' '}
                              <span className="text-[#5C3D11]">{program.level}</span>
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Briefcase size={13} className="text-[#E8A020]" />
                            <span className="font-barlow text-xs font-600 text-[#E8A020]">
                              {program.fees}
                            </span>
                          </div>
                        </div>

                        {/* Expanded content */}
                        {expanded === program.id && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 pt-6 border-t border-[#E8A020]/10">
                            <div>
                              <h4 className="font-barlow font-700 text-[0.68rem] tracking-[0.15em] uppercase text-[#E8A020] mb-3">
                                Points forts
                              </h4>
                              <ul className="space-y-2">
                                {program.highlights.map((h) => (
                                  <li key={h} className="flex items-start gap-2 font-barlow text-xs text-[#5C3D11]/80">
                                    <span className="w-1.5 h-1.5 bg-[#E8A020] rounded-full flex-shrink-0 mt-1.5" />
                                    {h}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-barlow font-700 text-[0.68rem] tracking-[0.15em] uppercase text-[#E8A020] mb-3">
                                {t('career')}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {program.career.map((c) => (
                                  <span key={c} className="badge badge-gray text-[0.6rem]">{c}</span>
                                ))}
                              </div>
                              <div className="mt-4 font-barlow text-xs text-[#5C3D11]/60">
                                <span className="font-600">Démarrage :</span> {program.starts}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex flex-wrap gap-4 mt-6">
                          <button
                            onClick={() => setExpanded(expanded === program.id ? null : program.id)}
                            className="font-barlow font-600 text-[0.68rem] tracking-[0.08em] uppercase text-[#E8A020] hover:text-[#1A0F00] transition-colors flex items-center gap-1"
                          >
                            {expanded === program.id ? 'Réduire' : 'En savoir plus'}
                            <ChevronRight size={12} className={`transition-transform ${expanded === program.id ? 'rotate-90' : ''}`} />
                          </button>
                          <Link
                            href={`/${locale}/inscription?formation=${program.id}`}
                            className="btn-primary text-[0.68rem] px-5 py-2.5"
                          >
                            <span>{t('enroll_cta')}</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
