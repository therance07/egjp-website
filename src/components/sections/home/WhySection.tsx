'use client';

import { useTranslations } from 'next-intl';
import { Award, TrendingUp, Globe, ChefHat } from 'lucide-react';
import AnimateInView from '@/components/ui/AnimateInView';
import SectionHeader from '@/components/ui/SectionHeader';

export default function WhySection() {
  const t = useTranslations('home.why');

  type CardKey = 'card1_title' | 'card1_desc' | 'card2_title' | 'card2_desc' | 'card3_title' | 'card3_desc' | 'card4_title' | 'card4_desc';

  const cards: { icon: typeof Award; titleKey: CardKey; descKey: CardKey }[] = [
    { icon: Award, titleKey: 'card1_title', descKey: 'card1_desc' },
    { icon: TrendingUp, titleKey: 'card2_title', descKey: 'card2_desc' },
    { icon: Globe, titleKey: 'card3_title', descKey: 'card3_desc' },
    { icon: ChefHat, titleKey: 'card4_title', descKey: 'card4_desc' },
  ];

  return (
    <section className="section-padding section-alt relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #E8A020 0, #E8A020 1px, transparent 0, transparent 50%)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="container-custom relative z-10">
        <SectionHeader
          eyebrow="Excellence & Formation"
          title={t('title')}
          subtitle={t('subtitle')}
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ icon: Icon, titleKey, descKey }, i) => (
            <AnimateInView key={titleKey} delay={i * 100} direction="up">
              <div className="card-base p-8 group cursor-default h-full">
                {/* Icon */}
                <div className="w-12 h-12 border border-[#E8A020]/30 flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-[#E8A020] group-hover:bg-[#E8A020]/10">
                  <Icon size={20} color="#E8A020" className="transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Number */}
                <div className="font-playfair font-bold text-5xl text-[#E8A020]/10 leading-none mb-4 select-none transition-colors duration-300 group-hover:text-[#E8A020]/20">
                  0{i + 1}
                </div>

                <h3 className="font-playfair font-bold text-[#1A0F00] text-lg mb-3 leading-tight">
                  {t(titleKey)}
                </h3>

                <p className="font-barlow text-sm text-[#5C3D11]/80 leading-relaxed">
                  {t(descKey)}
                </p>

                {/* Bottom gold line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E8A020] to-[#F5C842] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
