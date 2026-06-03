import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

export const metadata: Metadata = {
  title: {
    default: 'École de Gastronomie Jean Paul II — Brazzaville',
    template: '%s | EGJP — École de Gastronomie',
  },
  description: "L'art culinaire au service de l'excellence africaine. Formation professionnelle en gastronomie et restauration à Brazzaville, Congo.",
  keywords: ['gastronomie', 'formation culinaire', 'Brazzaville', 'Congo', 'école hôtelière', 'restauration'],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'École de Gastronomie Jean Paul II',
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
