import Image from 'next/image';
import Link from 'next/link';
import { getLocale } from 'next-intl/server';
import { ArrowLeft, Calendar } from 'lucide-react';
import AnimateInView from '@/components/ui/AnimateInView';

export default async function ArticlePage({ params }: { params: { slug: string; locale: string } }) {
  const locale = await getLocale();

  return (
    <div className="pt-24">
      <section className="section-dark relative overflow-hidden py-16">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: '#1A0F00' }}
        />
        <div className="container-custom relative z-10 max-w-4xl">
          <Link href={`/${locale}/actualites`}
            className="inline-flex items-center gap-2 font-barlow text-[0.68rem] tracking-wide uppercase text-[#E8A020] hover:text-white transition-colors mb-8">
            <ArrowLeft size={12} />
            Retour aux actualités
          </Link>
          <AnimateInView>
            <span className="badge badge-gold mb-4 inline-block">Article</span>
            <h1 className="font-playfair font-bold text-white mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
              Article : {params.slug.replace(/-/g, ' ')}
            </h1>
            <div className="flex items-center gap-3 text-white/30">
              <Calendar size={12} />
              <span className="font-barlow text-xs">EGJP · Brazzaville</span>
            </div>
          </AnimateInView>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-custom max-w-3xl">
          <AnimateInView>
            <div className="relative h-72 w-full overflow-hidden mb-10">
              <Image
                src="https://images.unsplash.com/photo-1549476464-37392f717541?w=1200&q=80"
                alt="Actualité de l'École de Gastronomie Jean Paul II"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#1A0F00]/20" />
            </div>
            <div className="font-barlow text-sm text-[#5C3D11]/70 leading-loose space-y-4">
              <p>Contenu complet de l&apos;article à venir. L&apos;article <strong>{params.slug}</strong> sera publié prochainement par l&apos;équipe de communication de l&apos;EGJP.</p>
              <p>En attendant, découvrez nos formations ou contactez-nous directement pour toute information.</p>
            </div>
          </AnimateInView>
        </div>
      </section>
    </div>
  );
}
