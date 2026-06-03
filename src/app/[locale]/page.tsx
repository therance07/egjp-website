import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/home/HeroSection';
import WhySection from '@/components/sections/home/WhySection';
import StatsSection from '@/components/sections/home/StatsSection';
import ProgramsPreview from '@/components/sections/home/ProgramsPreview';
import TestimonialsSection from '@/components/sections/home/TestimonialsSection';
import RestaurantTeaser from '@/components/sections/home/RestaurantTeaser';
import PartnersSection from '@/components/sections/home/PartnersSection';
import CtaSection from '@/components/sections/home/CtaSection';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'home' });
  return {
    title: 'École de Gastronomie Jean Paul II — Brazzaville',
    description: t('hero.subtitle'),
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <StatsSection />
      <ProgramsPreview />
      <RestaurantTeaser />
      <TestimonialsSection />
      <PartnersSection />
      <CtaSection />
    </>
  );
}
