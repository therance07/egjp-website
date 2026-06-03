import Image from 'next/image';
import Link from 'next/link';
import { getLocale } from 'next-intl/server';
import { Calendar, ArrowRight } from 'lucide-react';
import AnimateInView from '@/components/ui/AnimateInView';
import { articles } from '@/data/articles';

export default async function ActualitesPage() {
  const locale = await getLocale();

  return (
    <div>
      {/* Hero */}
      <section className="section-dark relative overflow-hidden pt-[70px] md:pt-[80px] pb-20">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 40% 60%, rgba(232,160,32,0.07) 0%, transparent 60%), #1A0F00' }}
        />
        <div className="container-custom relative z-10">
          <AnimateInView>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#E8A020]" />
              <span className="font-barlow font-700 text-[0.65rem] tracking-[0.25em] uppercase text-[#E8A020]">
                EGJP · Actualités
              </span>
            </div>
          </AnimateInView>
          <AnimateInView delay={100}>
            <h1 className="font-playfair font-bold text-white mb-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05 }}>
              Actualités
            </h1>
          </AnimateInView>
          <AnimateInView delay={200}>
            <p className="font-cormorant italic text-white/60 max-w-lg"
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)' }}>
              Concours, distinctions, success stories, événements — la vie de l'EGJP en continu.
            </p>
          </AnimateInView>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-custom">
          {/* Featured article */}
          {articles.filter(a => a.featured).map((article) => (
            <AnimateInView key={article.slug} className="mb-12">
              <Link href={`/${locale}/actualites/${article.slug}`}
                className="grid grid-cols-1 md:grid-cols-2 gap-0 group border border-[#E8A020]/15 hover:border-[#E8A020]/50 transition-all duration-400 overflow-hidden">
                <div className="relative h-64 md:h-auto md:min-h-[280px] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#1A0F00]/20 group-hover:bg-[#1A0F00]/10 transition-colors duration-300" />
                </div>
                <div className="p-8 md:p-10 bg-white flex flex-col justify-center">
                  <span className={`badge badge-gold mb-4 self-start`}>{article.tag} · Article phare</span>
                  <h2 className="font-playfair font-bold text-[#1A0F00] text-2xl md:text-3xl leading-tight mb-4 group-hover:text-[#E8A020] transition-colors duration-300">
                    {article.title}
                  </h2>
                  <p className="font-barlow text-sm text-[#5C3D11]/70 leading-relaxed mb-6">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#5C3D11]/40">
                      <Calendar size={12} />
                      <span className="font-barlow text-xs">{article.date}</span>
                    </div>
                    <span className="inline-flex items-center gap-2 font-barlow font-700 text-[0.7rem] tracking-[0.1em] uppercase text-[#E8A020] group-hover:gap-3 transition-all">
                      Lire <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateInView>
          ))}

          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.filter(a => !a.featured).map((article, i) => (
              <AnimateInView key={article.slug} delay={i * 80} direction="up">
                <Link
                  href={`/${locale}/actualites/${article.slug}`}
                  className="card-base group flex flex-col h-full overflow-hidden"
                >
                  <div className="relative h-48 flex-shrink-0 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#1A0F00]/15 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`badge ${article.tagColor === 'gold' ? 'badge-gold' : article.tagColor === 'green' ? 'badge-green' : 'badge-gray'}`}>
                        {article.tag}
                      </span>
                      <div className="flex items-center gap-1 text-[#5C3D11]/40">
                        <Calendar size={10} />
                        <span className="font-barlow text-[0.6rem]">{article.date}</span>
                      </div>
                    </div>
                    <h3 className="font-playfair font-bold text-[#1A0F00] text-lg leading-tight mb-3 flex-1 group-hover:text-[#E8A020] transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="font-barlow text-xs text-[#5C3D11]/60 leading-relaxed mb-4">
                      {article.excerpt.slice(0, 100)}...
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-barlow font-700 text-[0.65rem] tracking-[0.1em] uppercase text-[#E8A020] mt-auto">
                      Lire la suite <ArrowRight size={10} />
                    </span>
                  </div>
                </Link>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
