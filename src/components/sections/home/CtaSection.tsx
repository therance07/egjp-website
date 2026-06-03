'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import AnimateInView from '@/components/ui/AnimateInView';

export default function CtaSection() {
  const locale = useLocale();
  const t = useTranslations('home');

  return (
    <section className="section-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 30% 50%, rgba(232,160,32,0.12) 0%, transparent 60%),
            radial-gradient(ellipse at 70% 50%, rgba(245,200,66,0.06) 0%, transparent 50%),
            linear-gradient(135deg, #1A0F00 0%, #2C1A00 100%)
          `
        }}
      />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E8A020]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E8A020]/20 to-transparent" />

      <div className="container-custom section-padding relative z-10 text-center">
        <AnimateInView direction="up">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-12 h-[1px] bg-[#E8A020]/50" />
            <span className="font-barlow font-700 text-[0.65rem] tracking-[0.3em] uppercase text-[#E8A020]">
              Rejoindre l&apos;EGJP
            </span>
            <span className="w-12 h-[1px] bg-[#E8A020]/50" />
          </div>
        </AnimateInView>

        <AnimateInView delay={150}>
          <h2 className="font-playfair font-bold text-white max-w-3xl mx-auto mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
            {t('cta_title')}
          </h2>
        </AnimateInView>

        <AnimateInView delay={250}>
          <p className="font-cormorant italic text-white/50 max-w-xl mx-auto mb-10"
            style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', lineHeight: 1.6 }}>
            {t('cta_subtitle')}
          </p>
        </AnimateInView>

        <AnimateInView delay={350}>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={`/${locale}/inscription`} className="btn-primary group">
              <span>{t('cta_button')}</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href={`/${locale}/formations`} className="btn-outline group">
              <span>D&eacute;couvrir les formations</span>
            </Link>
          </div>
        </AnimateInView>

        {/* Decorative element */}
        <AnimateInView delay={500}>
          <div className="mt-16 flex justify-center">
            <div className="font-playfair italic text-[#E8A020]/20 text-8xl leading-none select-none">
              EGJP
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
