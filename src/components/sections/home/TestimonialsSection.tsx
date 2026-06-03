'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimateInView from '@/components/ui/AnimateInView';
import SectionHeader from '@/components/ui/SectionHeader';

const testimonials = [
  {
    id: 1,
    name: 'Josiane Makosso',
    role: "Chef de cuisine · Hôtel Mbamou Palace, Brazzaville",
    year: 'Promotion 2021',
    text: "L'EGJP m'a donné bien plus que des techniques culinaires. Elle m'a transmis une philosophie : valoriser nos produits locaux avec des méthodes d'excellence. Aujourd'hui, je propose une cuisine congolaise gastronomique qui reçoit des retours incroyables de nos clients internationaux.",
    avatarUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80',
  },
  {
    id: 2,
    name: 'Patrick Moukassa',
    role: "Propriétaire · Restaurant Le Palmier, Paris 15e",
    year: 'Promotion 2019',
    text: "Formé à l'EGJP, j'ai pu m'installer à Paris avec une solide base technique et une identité culinaire forte. Les recruteurs sont souvent surpris par la qualité de la formation que nous recevons à Brazzaville. C'est une école qui a une vraie vision internationale.",
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    id: 3,
    name: 'Marie-Claire Itoua',
    role: "Pâtissière · Maison Chocolat, Brazzaville",
    year: 'Promotion 2022',
    text: "La formation pâtisserie de l'EGJP est exceptionnelle. Les chefs formateurs nous poussent constamment à dépasser nos limites. J'ai ouvert ma propre pâtisserie 18 mois après ma certification. L'école m'a accompagnée même dans mes démarches entrepreneuriales.",
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
];

export default function TestimonialsSection() {
  const t = useTranslations('home');
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="section-padding section-alt relative overflow-hidden">
      {/* Large background number */}
      <div
        className="absolute top-1/2 -translate-y-1/2 right-0 font-playfair font-bold text-[20rem] leading-none text-[#E8A020]/05 pointer-events-none select-none overflow-hidden"
        style={{ lineHeight: 0.8 }}
      >
        &ldquo;
      </div>

      <div className="container-custom relative z-10">
        <SectionHeader
          eyebrow="Témoignages"
          title={t('testimonials_title')}
          subtitle={t('testimonials_subtitle')}
          center
          className="mb-16"
        />

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto">
          <AnimateInView key={current} direction="fade">
            <div className="relative">
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <Quote size={40} className="text-[#E8A020]/20 fill-[#E8A020]/10" />
              </div>

              <div className="bg-[#FDFAF3] border border-[#E8A020]/15 p-10 md:p-14">
                <p className="font-cormorant italic text-[#2C1A00] leading-relaxed mb-8 relative z-10"
                  style={{ fontSize: 'clamp(1.15rem, 2vw, 1.4rem)' }}>
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 flex-shrink-0 relative overflow-hidden">
                    <Image
                      src={testimonials[current].avatarUrl}
                      alt={`Portrait de ${testimonials[current].name}`}
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  <div>
                    <div className="font-playfair font-bold text-[#1A0F00] text-base">
                      {testimonials[current].name}
                    </div>
                    <div className="font-barlow text-xs text-[#5C3D11]/70 tracking-wide">
                      {testimonials[current].role}
                    </div>
                  </div>

                  <div className="ml-auto">
                    <span className="badge badge-gold">{testimonials[current].year}</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateInView>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 border border-[#E8A020]/30 flex items-center justify-center text-[#E8A020] hover:bg-[#E8A020] hover:text-white hover:border-[#E8A020] transition-all duration-300"
              aria-label="Précédent"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 ${
                    i === current
                      ? 'w-8 h-1.5 bg-[#E8A020]'
                      : 'w-1.5 h-1.5 bg-[#E8A020]/30 hover:bg-[#E8A020]/60'
                  }`}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-[#E8A020]/30 flex items-center justify-center text-[#E8A020] hover:bg-[#E8A020] hover:text-white hover:border-[#E8A020] transition-all duration-300"
              aria-label="Suivant"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
