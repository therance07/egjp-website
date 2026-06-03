'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { GraduationCap, CalendarDays, Handshake, TrendingUp } from 'lucide-react';
import AnimateInView from '@/components/ui/AnimateInView';

function useCountUp(target: number, duration = 2000, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);

  return count;
}

function StatCard({ value, suffix, label, icon: Icon, delay, started }: {
  value: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
  delay: number;
  started: boolean;
}) {
  const count = useCountUp(value, 2000, started);

  return (
    <AnimateInView delay={delay} direction="up">
      <div className="text-center group">
        <div className="w-10 h-10 border border-[#E8A020]/30 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:border-[#E8A020] group-hover:bg-[#E8A020]/10">
          <Icon size={18} color="#E8A020" />
        </div>
        <div className="relative inline-block mb-3">
          <span className="font-playfair font-bold text-white leading-none"
            style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}>
            {count}
          </span>
          <span className="font-playfair font-bold text-[#E8A020] leading-none"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            {suffix}
          </span>
        </div>
        <div className="font-barlow font-600 text-[0.68rem] tracking-[0.2em] uppercase text-white/40">
          {label}
        </div>
        <div className="w-8 h-[1px] bg-[#E8A020]/30 mx-auto mt-4 transition-all duration-300 group-hover:w-16 group-hover:bg-[#E8A020]" />
      </div>
    </AnimateInView>
  );
}

export default function StatsSection() {
  const t = useTranslations('home.stats');
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 500, suffix: '+', label: t('graduates'), icon: GraduationCap },
    { value: 15, suffix: ' ans', label: t('years'), icon: CalendarDays },
    { value: 30, suffix: '+', label: t('partners'), icon: Handshake },
    { value: 95, suffix: '%', label: t('placement'), icon: TrendingUp },
  ];

  return (
    <section ref={ref} className="section-dark relative overflow-hidden">
      <div className="container-custom section-padding relative z-10">
        {/* Central quote */}
        <AnimateInView direction="up" className="text-center mb-20">
          <p className="font-cormorant italic text-white/60 max-w-3xl mx-auto"
            style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)', lineHeight: 1.5 }}>
            &ldquo;Former des professionnels de demain capables de porter haut les saveurs africaines sur la scène gastronomique mondiale.&rdquo;
          </p>
          <div className="divider-gold mt-8 max-w-xs mx-auto" />
          <p className="font-barlow font-600 text-[0.65rem] tracking-[0.25em] uppercase text-[#E8A020]/60 mt-4">
            Direction Pédagogique · EGJP
          </p>
        </AnimateInView>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 100} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
