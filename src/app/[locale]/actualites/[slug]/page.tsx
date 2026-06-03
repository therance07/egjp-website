import Image from 'next/image';
import Link from 'next/link';
import { getLocale } from 'next-intl/server';
import { ArrowLeft, Calendar } from 'lucide-react';
import AnimateInView from '@/components/ui/AnimateInView';
import { getArticleBySlug } from '@/data/articles';

export default async function ArticlePage({ params }: { params: { slug: string; locale: string } }) {
  const locale = await getLocale();
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return (
      <div className="pt-32 section-padding section-light text-center">
        <h1 className="font-playfair text-3xl text-[#1A0F00] mb-6">Article introuvable</h1>
        <Link
          href={`/${locale}/actualites`}
          className="inline-flex items-center gap-2 font-barlow text-[0.68rem] tracking-wide uppercase text-[#E8A020] hover:text-[#1A0F00] transition-colors"
        >
          <ArrowLeft size={12} />
          Retour aux actualités
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-dark relative overflow-hidden py-16">
        <div className="absolute inset-0 pointer-events-none" style={{ background: '#1A0F00' }} />
        <div className="container-custom relative z-10 max-w-4xl">
          <Link
            href={`/${locale}/actualites`}
            className="inline-flex items-center gap-2 font-barlow text-[0.68rem] tracking-wide uppercase text-[#E8A020] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={12} />
            Retour aux actualités
          </Link>
          <AnimateInView>
            <span className={`badge ${article.tagColor === 'gold' ? 'badge-gold' : article.tagColor === 'green' ? 'badge-green' : 'badge-gray'} mb-4 inline-block`}>
              {article.tag}
            </span>
            <h1
              className="font-playfair font-bold text-white mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
            >
              {article.title}
            </h1>
            <div className="flex items-center gap-3 text-white/30">
              <Calendar size={12} />
              <span className="font-barlow text-xs">{article.date} · EGJP · Brazzaville</span>
            </div>
          </AnimateInView>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding section-light">
        <div className="container-custom max-w-3xl">
          <AnimateInView>
            <div className="relative h-72 w-full overflow-hidden mb-10">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#1A0F00]/20" />
            </div>
            <div className="font-barlow text-sm text-[#5C3D11]/70 leading-loose space-y-5">
              {article.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </AnimateInView>

          {/* Footer nav */}
          <div className="mt-16 pt-8 border-t border-[#E8A020]/15">
            <Link
              href={`/${locale}/actualites`}
              className="inline-flex items-center gap-2 font-barlow font-700 text-[0.68rem] tracking-[0.1em] uppercase text-[#E8A020] hover:text-[#1A0F00] transition-colors"
            >
              <ArrowLeft size={12} />
              Toutes les actualités
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
