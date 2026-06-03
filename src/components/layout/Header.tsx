'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const otherLocale = locale === 'fr' ? 'en' : 'fr';
  const switchLocalePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/formations`, label: t('formations') },
    { href: `/${locale}/l-ecole`, label: t('school') },
    { href: `/${locale}/la-petite-faim`, label: t('restaurant') },
    { href: `/${locale}/actualites`, label: t('news') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#1A0F00]/95 backdrop-blur-md shadow-[0_2px_30px_rgba(26,15,0,0.4)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className="w-10 h-10 border-2 border-[#E8A020] flex items-center justify-center transition-all duration-300 group-hover:bg-[#E8A020]">
              <span className="font-playfair font-bold text-[#E8A020] text-sm group-hover:text-[#1A0F00] transition-colors duration-300">
                EG
              </span>
            </div>
            <div className="hidden sm:block">
              <div className="font-playfair text-white font-bold text-sm leading-tight tracking-wide">
                École de Gastronomie
              </div>
              <div className="font-barlow text-[#E8A020] text-[0.6rem] font-600 tracking-[0.2em] uppercase">
                Jean Paul II · Brazzaville
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-barlow font-600 text-[0.72rem] tracking-[0.1em] uppercase px-3 py-2 transition-all duration-300 relative group ${
                  isActive(link.href)
                    ? 'text-[#E8A020]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-3 right-3 h-[1px] bg-[#E8A020] transition-all duration-300 origin-left ${
                  isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Locale switcher */}
            <Link
              href={switchLocalePath}
              className="hidden sm:flex font-barlow font-700 text-[0.65rem] tracking-[0.15em] uppercase text-white/60 hover:text-[#E8A020] transition-colors duration-300 border border-white/20 hover:border-[#E8A020]/50 px-2 py-1"
            >
              {otherLocale.toUpperCase()}
            </Link>

            {/* Enroll CTA */}
            <div className="hidden lg:block">
              <Link
                href={`/${locale}/inscription`}
                className="btn-primary text-[0.7rem] px-4 py-2"
              >
                <span>{t('enroll')}</span>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white hover:text-[#E8A020] transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#1A0F00]/95 backdrop-blur-lg"
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#1A0F00] flex flex-col transition-transform duration-500 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-[#E8A020]/20">
            <span className="font-playfair text-white font-bold text-lg">Menu</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-white/60 hover:text-[#E8A020] transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 p-6 flex flex-col gap-1 overflow-y-auto">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-barlow font-600 text-sm tracking-[0.12em] uppercase py-4 px-4 border-b border-white/5 transition-all duration-300 flex items-center justify-between ${
                  isActive(link.href) ? 'text-[#E8A020]' : 'text-white/70 hover:text-white hover:pl-6'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="w-6 h-[1px] bg-[#E8A020]" />
                )}
              </Link>
            ))}
          </nav>

          <div className="p-6 border-t border-[#E8A020]/20 flex flex-col gap-3">
            <Link
              href={`/${locale}/inscription`}
              onClick={() => setMobileOpen(false)}
              className="btn-primary justify-center"
            >
              <span>{t('enroll')}</span>
            </Link>
            <Link
              href={switchLocalePath}
              onClick={() => setMobileOpen(false)}
              className="font-barlow font-600 text-[0.7rem] tracking-[0.15em] uppercase text-center py-2 text-white/40 hover:text-white/70 transition-colors"
            >
              Voir en {otherLocale === 'fr' ? 'Français' : 'English'}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
