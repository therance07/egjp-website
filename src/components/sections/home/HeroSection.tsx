'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowDown, ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const t = useTranslations('home.hero');
  const locale = useLocale();
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1A0F00] pt-[90px] md:pt-[80px]">
      {/* Background photo */}
      <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.15}px)` }}>
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80"
          alt="Chef cuisinier en action dans une cuisine professionnelle"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(232,160,32,0.08) 0%, transparent 60%),
            linear-gradient(160deg, rgba(26,15,0,0.85) 0%, rgba(44,26,0,0.8) 40%, rgba(26,15,0,0.9) 100%)
          `,
        }}
      />

      {/* Gold geometric decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 right-[8%] w-[280px] h-[280px] border border-[#E8A020]/10 rotate-45"
          style={{
            opacity: loaded ? 1 : 0,
            transform: `rotate(45deg) translateY(${scrollY * 0.1}px)`,
            transition: 'opacity 2s ease 0.5s',
          }}
        />
        <div
          className="absolute top-1/3 right-[10%] w-[200px] h-[200px] border border-[#E8A020]/06 rotate-45"
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 2s ease 0.8s',
          }}
        />
        <div
          className="absolute bottom-1/4 left-[5%] w-[160px] h-[160px] border border-[#E8A020]/08 rotate-12"
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 2s ease 1s',
          }}
        />

        {/* Thin gold lines */}
        <div
          className="absolute top-[20%] left-0 w-[30%] h-[1px]"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(232,160,32,0.3))',
            transform: `scaleX(${loaded ? 1 : 0})`,
            transformOrigin: 'right',
            transition: 'transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s',
          }}
        />
        <div
          className="absolute bottom-[25%] right-0 w-[25%] h-[1px]"
          style={{
            background: 'linear-gradient(90deg, rgba(232,160,32,0.3), transparent)',
            transform: `scaleX(${loaded ? 1 : 0})`,
            transformOrigin: 'left',
            transition: 'transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s',
          }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-16">
        <div className="max-w-4xl">

          {/* Main title */}
          <h1
            className="font-playfair font-bold text-white mb-6"
            style={{
              fontSize: 'clamp(2.6rem, 7vw, 6.5rem)',
              lineHeight: '1.05',
              letterSpacing: '-0.02em',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 1s ease 0.4s, transform 1s ease 0.4s',
            }}
          >
            L&apos;art culinaire<br />
            <span className="text-[#E8A020]">au service</span><br />
            de l&apos;excellence africaine
          </h1>

          {/* Subtitle */}
          <p
            className="font-cormorant italic text-white/60 max-w-lg mb-10"
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              lineHeight: 1.6,
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.9s ease 0.7s, transform 0.9s ease 0.7s',
            }}
          >
            {t('subtitle')}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease 0.9s, transform 0.8s ease 0.9s',
            }}
          >
            <Link href={`/${locale}/formations`} className="btn-primary group">
              <span>{t('cta_discover')}</span>
              <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href={`/${locale}/inscription`} className="btn-outline group">
              <span>{t('cta_enroll')}</span>
              <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Stats row */}
          <div
            className="flex flex-wrap gap-8 mt-16 pt-16 border-t border-white/08"
            style={{
              opacity: loaded ? 1 : 0,
              transition: 'opacity 1s ease 1.2s',
            }}
          >
            {[
              { value: '500+', label: 'Diplômés' },
              { value: '15', label: "Ans d'expérience" },
              { value: '95%', label: 'Taux d\'insertion' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-playfair font-bold text-white text-3xl leading-none">
                  {stat.value}
                </span>
                <span className="font-barlow text-[0.65rem] tracking-[0.15em] uppercase text-white/40 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: loaded ? 0.5 : 0,
          transition: 'opacity 1s ease 2s',
          animation: loaded ? 'bounce 2s ease-in-out infinite 2.5s' : 'none',
        }}
      >
        <span className="font-barlow text-[0.6rem] tracking-[0.2em] uppercase text-white/40">
          Défiler
        </span>
        <ArrowDown size={14} className="text-[#E8A020]" />
      </div>

      <style jsx global>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
