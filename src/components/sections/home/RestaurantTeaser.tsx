'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, Clock, MapPin, Star } from 'lucide-react';
import AnimateInView from '@/components/ui/AnimateInView';

export default function RestaurantTeaser() {
  const locale = useLocale();
  const t = useTranslations('home');

  return (
    <section className="section-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 70% 50%, rgba(232,160,32,0.06) 0%, transparent 60%),
            linear-gradient(135deg, #1A0F00 0%, #2C1A00 100%)
          `
        }}
      />

      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — visual */}
          <AnimateInView direction="left" delay={0}>
            <div className="relative">
              {/* Main image */}
              <div className="w-full aspect-[4/3] relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                  alt="Salle du restaurant gastronomique La Petite Faim"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F00]/60 to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-[#E8A020] p-5 max-w-[200px]">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="text-[#1A0F00] fill-[#1A0F00]" />
                  ))}
                </div>
                <div className="font-playfair font-bold text-[#1A0F00] text-sm leading-tight">
                  Restaurant d&apos;application
                </div>
                <div className="font-barlow text-[#1A0F00]/70 text-[0.65rem] tracking-wide uppercase mt-1">
                  Géré par nos étudiants
                </div>
              </div>

              {/* Decorative border */}
              <div className="absolute -top-3 -left-3 right-3 bottom-3 border border-[#E8A020]/20 pointer-events-none" />
            </div>
          </AnimateInView>

          {/* Right — content */}
          <div>
            <AnimateInView delay={100}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-[#E8A020]" />
                <span className="font-barlow font-700 text-[0.65rem] tracking-[0.25em] uppercase text-[#E8A020]">
                  Restaurant d&apos;Application
                </span>
              </div>
            </AnimateInView>

            <AnimateInView delay={200}>
              <h2 className="font-playfair font-bold text-white mb-2"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.05 }}>
                La Petite Faim
              </h2>
            </AnimateInView>

            <AnimateInView delay={300}>
              <p className="font-cormorant italic text-white/50 text-xl mb-6">
                {t('restaurant_subtitle')}
              </p>
            </AnimateInView>

            <AnimateInView delay={400}>
              <p className="font-barlow text-sm text-white/60 leading-relaxed mb-8">
                G&eacute;r&eacute; enti&egrave;rement par nos &eacute;tudiants sous la supervision de chefs exp&eacute;riment&eacute;s, La Petite Faim vous offre une exp&eacute;rience gastronomique authentique alliant cuisine franco-africaine contemporaine et service d&apos;excellence. Chaque repas est une le&ccedil;on mise en pratique.
              </p>
            </AnimateInView>

            {/* Info cards */}
            <AnimateInView delay={500}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="border border-[#E8A020]/15 p-4">
                  <Clock size={14} className="text-[#E8A020] mb-2" />
                  <div className="font-barlow font-700 text-xs tracking-wide uppercase text-white/40 mb-1">Horaires</div>
                  <div className="font-barlow text-sm text-white/70">Mar — Ven</div>
                  <div className="font-barlow text-xs text-white/40">12h – 14h30 · 19h – 22h</div>
                </div>
                <div className="border border-[#E8A020]/15 p-4">
                  <MapPin size={14} className="text-[#E8A020] mb-2" />
                  <div className="font-barlow font-700 text-xs tracking-wide uppercase text-white/40 mb-1">Lieu</div>
                  <div className="font-barlow text-sm text-white/70">Avenue de la Paix</div>
                  <div className="font-barlow text-xs text-white/40">Brazzaville, Congo</div>
                </div>
              </div>
            </AnimateInView>

            <AnimateInView delay={600}>
              <Link href={`/${locale}/la-petite-faim`} className="btn-primary group inline-flex">
                <span>{t('restaurant_cta')}</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimateInView>
          </div>
        </div>
      </div>
    </section>
  );
}
