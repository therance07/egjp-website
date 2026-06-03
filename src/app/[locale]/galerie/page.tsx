'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';
import AnimateInView from '@/components/ui/AnimateInView';

const categories = ['Tout', 'Cours', 'Plats réalisés', 'Événements', 'La Petite Faim', 'Diplômés'];

const galleryUrls = [
  'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&q=80',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
  'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&q=80',
  'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80',
  'https://images.unsplash.com/photo-1583394293214-0b3e4c2d4b6e?w=600&q=80',
  'https://images.unsplash.com/photo-1549476464-37392f717541?w=600&q=80',
  'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=600&q=80',
];

const titles = [
  'Atelier de découpe',
  'Création pâtissière',
  'Service en salle',
  'Plat signature étudiant',
  'Cérémonie de remise des diplômes',
  'Déjeuner gastronomique',
  'Cours de chocolaterie',
  'Mise en place cuisine',
];

const photos = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  category: categories[1 + (i % (categories.length - 1))],
  title: titles[i % 8],
  imgUrl: galleryUrls[i % galleryUrls.length],
  aspect: [4/3, 3/4, 16/9, 1, 4/3, 3/4][i % 6],
}));

export default function GaleriePage() {
  const [activeCategory, setActiveCategory] = useState('Tout');
  const [lightbox, setLightbox] = useState<typeof photos[0] | null>(null);

  const filtered = activeCategory === 'Tout' ? photos : photos.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-dark relative overflow-hidden py-20">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(232,160,32,0.07) 0%, transparent 60%), #1A0F00' }}
        />
        <div className="container-custom relative z-10">
          <AnimateInView>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#E8A020]" />
              <span className="font-barlow font-700 text-[0.65rem] tracking-[0.25em] uppercase text-[#E8A020]">EGJP · Galerie</span>
            </div>
          </AnimateInView>
          <AnimateInView delay={100}>
            <h1 className="font-playfair font-bold text-white mb-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05 }}>
              Galerie
            </h1>
          </AnimateInView>
          <AnimateInView delay={200}>
            <p className="font-cormorant italic text-white/60 max-w-lg"
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)' }}>
              La vie à l'EGJP en images — cours, créations, événements et moments de fierté.
            </p>
          </AnimateInView>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-custom">
          {/* Category filters */}
          <AnimateInView className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-barlow font-600 text-[0.7rem] tracking-[0.1em] uppercase px-4 py-2 border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#E8A020] text-[#1A0F00] border-[#E8A020]'
                    : 'border-[#E8A020]/25 text-[#5C3D11] hover:border-[#E8A020]'
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimateInView>

          {/* Masonry grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((photo, i) => (
              <AnimateInView key={photo.id} delay={i * 40}>
                <div
                  className="break-inside-avoid cursor-pointer group relative overflow-hidden bg-[#1A0F00] mb-4"
                  onClick={() => setLightbox(photo)}
                >
                  <div
                    className="w-full relative overflow-hidden"
                    style={{ aspectRatio: photo.aspect }}
                  >
                    <Image
                      src={photo.imgUrl}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#1A0F00]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn size={24} className="text-white" />
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-2 left-2">
                    <span className="badge badge-gold text-[0.55rem] bg-[#1A0F00]/80 backdrop-blur-sm">
                      {photo.category}
                    </span>
                  </div>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] bg-[#1A0F00]/97 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
          >
            <X size={24} />
          </button>
          <div
            className="max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full aspect-video relative overflow-hidden mb-4">
              <Image
                src={lightbox.imgUrl}
                alt={lightbox.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
            <div className="flex items-center justify-between px-1">
              <h3 className="font-playfair font-bold text-white">{lightbox.title}</h3>
              <span className="badge badge-gold">{lightbox.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
