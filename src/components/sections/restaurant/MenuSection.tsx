'use client';

import { useState } from 'react';
import { Leaf, Star } from 'lucide-react';
import AnimateInView from '@/components/ui/AnimateInView';
import SectionHeader from '@/components/ui/SectionHeader';

const menu = {
  entrees: [
    { name: 'Tartare de tilapia du fleuve Congo', desc: 'Citron vert, gingembre, feuilles de manioc fermentées, chips de plantain', price: '4 500', veg: false, signature: true },
    { name: 'Velouté de safou & noix de coco', desc: 'Crème légère de safou du Congo, lait de coco, épices douces, huile de palme vierge', price: '3 800', veg: true, signature: true },
    { name: 'Foie gras poêlé, condiment ndolé', desc: 'Foie gras de canard, réduction de ndolé, pain brioché au beurre de karité', price: '5 500', veg: false, signature: false },
    { name: 'Salade de cœurs de palmier', desc: 'Palmito frais, avocat, vinaigrette passion-citron, herbes du jardin', price: '3 200', veg: true, signature: false },
  ],
  plats: [
    { name: 'Filet de capitaine en croûte d\'épices', desc: 'Capitaine du Congo, croûte d\'épices africaines, purée de plantain, sauce moambe revisitée', price: '8 500', veg: false, signature: true },
    { name: 'Poulet de Brazzaville façon confit', desc: 'Cuisse de poulet fermier confite, jus court aux épices locales, légumes rôtis au four à bois', price: '7 200', veg: false, signature: false },
    { name: 'Risotto au millet africain & champignons', desc: 'Millet du Congo cuisiné façon risotto, champignons sauvages, parmesan vieilli, truffe locale', price: '6 800', veg: true, signature: true },
    { name: 'Côte de veau à la braise', desc: 'Veau local, sauce chimichurri africain, gratin dauphinois aux tubercules, jus corsé', price: '9 500', veg: false, signature: false },
  ],
  desserts: [
    { name: 'Fondant au chocolat Ivoire du Congo', desc: 'Cacao de la Sangha, cœur coulant, glace à la vanille de Mayombe, tuile croustillante', price: '3 500', veg: true, signature: true },
    { name: 'Tarte tatin aux mangues caramélisées', desc: 'Mangues du Congo, caramel au beurre salé, pâte sablée à la noix de cajou, crème légère', price: '3 200', veg: true, signature: false },
    { name: 'Crème brûlée à la citronnelle', desc: 'Crème onctueuse infusée à la citronnelle fraîche, caramel blond, zestes d\'agrumes', price: '2 800', veg: true, signature: false },
  ],
  boissons: [
    { name: 'Eau plate / pétillante', desc: 'Bonne source, litrée', price: '800', veg: true, signature: false },
    { name: 'Bissap royal', desc: 'Infusion de fleurs d\'hibiscus, citron vert, miel de baobab, gingembre frais', price: '1 800', veg: true, signature: true },
    { name: 'Jus de corossol pressé', desc: 'Corossol frais du jardin, légèrement sucré', price: '1 500', veg: true, signature: false },
    { name: 'Sélection de vins', desc: 'Vins d\'Afrique du Sud & France, carte disponible sur demande', price: 'Dès 3 500', veg: true, signature: false },
  ],
};

type Category = 'entrees' | 'plats' | 'desserts' | 'boissons';
type MenuFilter = 'all' | 'veg' | 'signature';

export default function MenuSection() {
  const [category, setCategory] = useState<Category>('plats');
  const [menuFilter, setMenuFilter] = useState<MenuFilter>('all');

  const categories: { key: Category; label: string; emoji: string }[] = [
    { key: 'entrees', label: 'Entrées', emoji: '🥗' },
    { key: 'plats', label: 'Plats', emoji: '🍽️' },
    { key: 'desserts', label: 'Desserts', emoji: '🍫' },
    { key: 'boissons', label: 'Boissons', emoji: '🥤' },
  ];

  const currentItems = menu[category].filter(item => {
    if (menuFilter === 'veg') return item.veg;
    if (menuFilter === 'signature') return item.signature;
    return true;
  });

  return (
    <section className="section-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(232,160,32,0.04) 0%, transparent 50%), linear-gradient(180deg, #1A0F00 0%, #120800 100%)' }}
      />

      <div className="container-custom section-padding relative z-10">
        <SectionHeader
          eyebrow="Notre Carte"
          title="Une cuisine d'auteur"
          subtitle="Inspirée par la richesse culinaire du Congo, sublimée par les techniques gastronomiques de nos chefs formateurs."
          light
          center
          className="mb-12"
        />

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map(({ key, label, emoji }) => (
            <button
              key={key}
              onClick={() => setCategory(key)}
              className={`font-barlow font-700 text-[0.72rem] tracking-[0.1em] uppercase px-5 py-2.5 border transition-all duration-300 flex items-center gap-2 ${
                category === key
                  ? 'bg-[#E8A020] text-[#1A0F00] border-[#E8A020]'
                  : 'border-[#E8A020]/25 text-white/50 hover:border-[#E8A020]/60 hover:text-white/80'
              }`}
            >
              <span>{emoji}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex gap-3 justify-center mb-10">
          {(['all', 'veg', 'signature'] as MenuFilter[]).map((f) => (
            <button
              key={f}
              onClick={() => setMenuFilter(f)}
              className={`flex items-center gap-1.5 font-barlow text-[0.65rem] tracking-wide uppercase px-3 py-1.5 border transition-all duration-300 ${
                menuFilter === f
                  ? 'border-[#E8A020] text-[#E8A020]'
                  : 'border-white/10 text-white/30 hover:border-white/30 hover:text-white/50'
              }`}
            >
              {f === 'veg' && <Leaf size={10} />}
              {f === 'signature' && <Star size={10} />}
              {f === 'all' ? 'Tout' : f === 'veg' ? 'Végétarien' : 'Signature'}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {currentItems.map((item, i) => (
            <AnimateInView key={item.name} delay={i * 60} direction="up">
              <div className="menu-card p-5 group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-playfair font-bold text-white text-base leading-tight group-hover:text-[#E8A020] transition-colors duration-300">
                        {item.name}
                      </h3>
                      <div className="flex gap-1 flex-shrink-0">
                        {item.veg && <span title="Végétarien"><Leaf size={10} className="text-green-400" /></span>}
                        {item.signature && <span title="Signature"><Star size={10} className="text-[#E8A020] fill-[#E8A020]" /></span>}
                      </div>
                    </div>
                    <p className="font-barlow text-[0.7rem] text-white/40 leading-relaxed italic">{item.desc}</p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <span className="font-barlow font-700 text-[#E8A020] whitespace-nowrap">
                      {item.price} FCFA
                    </span>
                  </div>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>

        {currentItems.length === 0 && (
          <div className="text-center py-12 text-white/30 font-barlow">
            Aucun plat dans cette catégorie pour ce filtre.
          </div>
        )}

        <div className="text-center mt-10">
          <p className="font-barlow text-[0.68rem] text-white/25 tracking-wide">
            Carte sujette à modifications selon la saison · Menu du jour disponible sur demande
          </p>
        </div>
      </div>
    </section>
  );
}
