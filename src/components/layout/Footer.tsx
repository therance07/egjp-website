'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Share2, Camera, MessageCircle, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  const year = new Date().getFullYear();

  const quickLinks = [
    { href: `/${locale}/formations`, label: nav('formations') },
    { href: `/${locale}/l-ecole`, label: nav('school') },
    { href: `/${locale}/la-petite-faim`, label: nav('restaurant') },
    { href: `/${locale}/galerie`, label: nav('gallery') },
    { href: `/${locale}/actualites`, label: nav('news') },
    { href: `/${locale}/inscription`, label: nav('enroll') },
  ];

  return (
    <footer className="bg-[#1A0F00] text-white/70 relative overflow-hidden">
      {/* Gold top border */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-[#E8A020] to-transparent" />

      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 10% 50%, #E8A020 0%, transparent 50%),
            radial-gradient(circle at 90% 50%, #E8A020 0%, transparent 50%)`
        }}
      />

      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 border-2 border-[#E8A020] flex items-center justify-center">
                  <span className="font-playfair font-bold text-[#E8A020] text-base">EG</span>
                </div>
                <div>
                  <div className="font-playfair text-white font-bold text-sm leading-tight">
                    École de Gastronomie
                  </div>
                  <div className="font-barlow text-[#E8A020]/80 text-[0.6rem] tracking-[0.2em] uppercase">
                    Jean Paul II
                  </div>
                </div>
              </div>
            </Link>

            <p className="font-cormorant italic text-lg text-white/60 leading-relaxed mb-6">
              &ldquo;{t('tagline')}&rdquo;
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: Share2, label: 'Facebook', href: '#' },
                { icon: Camera, label: 'Instagram', href: '#' },
                { icon: MessageCircle, label: 'WhatsApp', href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}` },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:border-[#E8A020] hover:text-[#E8A020] transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-barlow font-700 text-[0.7rem] tracking-[0.2em] uppercase text-[#E8A020] mb-6">
              {t('quick_links')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-barlow text-sm text-white/50 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-[1px] bg-[#E8A020]/40 group-hover:w-6 group-hover:bg-[#E8A020] transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-barlow font-700 text-[0.7rem] tracking-[0.2em] uppercase text-[#E8A020] mb-6">
              {t('contact')}
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin size={14} className="text-[#E8A020] flex-shrink-0 mt-0.5" />
                <span className="text-white/50 leading-relaxed">{t('address')}</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone size={14} className="text-[#E8A020] flex-shrink-0 mt-0.5" />
                <a href="tel:+242064000000" className="text-white/50 hover:text-white transition-colors">
                  +242 064 000 000
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail size={14} className="text-[#E8A020] flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@egjp-brazzaville.cg" className="text-white/50 hover:text-white transition-colors">
                  contact@egjp-brazzaville.cg
                </a>
              </li>
            </ul>
          </div>

          {/* La Petite Faim highlight */}
          <div>
            <h4 className="font-barlow font-700 text-[0.7rem] tracking-[0.2em] uppercase text-[#E8A020] mb-6">
              La Petite Faim
            </h4>
            <div className="border border-[#E8A020]/20 p-4 mb-4">
              <p className="font-barlow text-sm text-white/50 mb-3 leading-relaxed">
                Notre restaurant d&apos;application. Réservez votre table pour une expérience gastronomique unique.
              </p>
              <div className="text-xs text-white/30 font-barlow mb-1">Mardi — Vendredi</div>
              <div className="text-sm text-white/60 font-barlow font-600">12h00 — 14h30 · 19h00 — 22h00</div>
            </div>
            <Link
              href={`/${locale}/la-petite-faim`}
              className="inline-flex items-center gap-2 font-barlow font-700 text-[0.7rem] tracking-[0.1em] uppercase text-[#E8A020] hover:text-white transition-colors group"
            >
              Réserver une table
              <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-barlow text-xs text-white/25 tracking-wide">
            © {year} École de Gastronomie Jean Paul II · Brazzaville, Congo
          </p>
          <div className="flex gap-6">
            {['Mentions légales', 'Confidentialité'].map((label) => (
              <Link
                key={label}
                href="#"
                className="font-barlow text-xs text-white/25 hover:text-white/50 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
