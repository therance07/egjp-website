'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Clock, ArrowRight, GraduationCap } from 'lucide-react';
import AnimateInView from '@/components/ui/AnimateInView';
import SectionHeader from '@/components/ui/SectionHeader';

const programs = [
  {
    id: 'cap-cuisine',
    type: 'diplômante',
    title: 'CAP Cuisine',
    description: 'Maîtrisez les techniques culinaires fondamentales, de la découpe à la présentation, en passant par les cuissons et les bases des sauces classiques.',
    duration: '2 ans',
    level: 'Brevet des collèges',
    color: '#E8A020',
    icon: '🍳',
  },
  {
    id: 'brevet-technicien',
    type: 'diplômante',
    title: 'Brevet de Technicien Hôtellerie-Restauration',
    description: 'Formation complète alliant cuisine gastronomique, management de restaurant, hygiène alimentaire et service en salle.',
    duration: '3 ans',
    level: 'CAP ou équivalent',
    color: '#F5C842',
    icon: '🏆',
  },
  {
    id: 'patisserie',
    type: 'courte',
    title: 'Formation Pâtisserie',
    description: 'Maîtrisez l\'art de la pâtisserie : entremets, viennoiseries, chocolaterie et desserts de restaurant, avec une approche franco-africaine.',
    duration: '6 mois',
    level: 'Ouvert à tous',
    color: '#C4841A',
    icon: '🍰',
  },
];

export default function ProgramsPreview() {
  const locale = useLocale();
  const t = useTranslations('home');

  return (
    <section className="section-padding section-light relative">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <SectionHeader
            eyebrow="Nos Programmes"
            title={t('programs_title')}
            subtitle={t('programs_subtitle')}
            className="lg:max-w-xl"
          />
          <AnimateInView delay={300} direction="right">
            <Link
              href={`/${locale}/formations`}
              className="inline-flex items-center gap-2 font-barlow font-700 text-[0.72rem] tracking-[0.1em] uppercase text-[#E8A020] hover:text-[#1A0F00] transition-colors duration-300 group"
            >
              {t('common', { key: 'see_all' }) || 'Voir toutes les formations'}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-2" />
            </Link>
          </AnimateInView>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, i) => (
            <AnimateInView key={program.id} delay={i * 120} direction="up">
              <div className="card-base group h-full flex flex-col overflow-hidden">
                {/* Top colored strip */}
                <div
                  className="h-1.5 transition-all duration-300 group-hover:h-2"
                  style={{ background: `linear-gradient(90deg, ${program.color}, ${program.color}88)` }}
                />

                <div className="p-7 flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-3xl">{program.icon}</span>
                    <span className={`badge ${program.type === 'diplômante' ? 'badge-gold' : 'badge-gray'}`}>
                      {program.type === 'diplômante' ? 'Diplômante' : 'Courte'}
                    </span>
                  </div>

                  <h3 className="font-playfair font-bold text-[#1A0F00] text-xl leading-tight mb-3 group-hover:text-[#E8A020] transition-colors duration-300">
                    {program.title}
                  </h3>

                  <p className="font-barlow text-sm text-[#5C3D11]/70 leading-relaxed mb-6 flex-1">
                    {program.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#E8A020]/10">
                    <div className="flex items-center gap-2">
                      <Clock size={13} className="text-[#E8A020]" />
                      <span className="font-barlow text-xs font-600 text-[#5C3D11]">{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap size={13} className="text-[#E8A020]" />
                      <span className="font-barlow text-xs text-[#5C3D11]/70">{program.level}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/${locale}/formations#${program.id}`}
                    className="inline-flex items-center gap-2 font-barlow font-700 text-[0.7rem] tracking-[0.1em] uppercase text-[#E8A020] hover:text-[#1A0F00] transition-colors duration-300 group/link"
                  >
                    En savoir plus
                    <ArrowRight size={12} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
