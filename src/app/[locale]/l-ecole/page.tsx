import Image from 'next/image';
import AnimateInView from '@/components/ui/AnimateInView';
import SectionHeader from '@/components/ui/SectionHeader';
import { Award, BookOpen, Heart, Globe, Star } from 'lucide-react';

const team = [
  {
    name: 'Chef Jean-Marie Nkounga',
    role: 'Directeur pédagogique & Chef exécutif',
    formation: 'École Ferrandi Paris · 25 ans d\'expérience',
    specialty: 'Cuisine gastronomique franco-africaine',
    bio: 'Formé à l\'école Ferrandi et au Cordon Bleu de Paris, Jean-Marie Nkounga est revenu au Congo en 2009 avec une mission : créer la première école gastronomique d\'excellence d\'Afrique centrale.',
    photo: 'https://images.unsplash.com/photo-1583394293214-0b3e4c2d4b6e?w=400&q=80',
  },
  {
    name: 'Chef Patricia Loemba',
    role: 'Responsable formation Pâtisserie',
    formation: 'École Valrhona · 18 ans d\'expérience',
    specialty: 'Pâtisserie fine & chocolaterie',
    bio: 'Première Congolaise à avoir intégré les équipes de Valrhona en France, Patricia a développé un langage pâtissier qui fusionne techniques européennes et ingrédients africains.',
    photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80',
  },
  {
    name: 'M. Stéphane Bouanga',
    role: 'Professeur de gestion & entrepreneuriat',
    formation: 'MBA Management Hôtelier · Paris',
    specialty: 'Gestion de restaurant, Finance',
    bio: 'Ancien directeur F&B de chaînes hôtelières en Afrique de l\'Ouest, Stéphane apporte une expertise unique en gestion financière et développement commercial pour les métiers de la restauration.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Chef Aimée Tsiba',
    role: 'Responsable service & sommellerie',
    formation: 'Institut Paul Bocuse · Lyon',
    specialty: 'Service gastronomique, Vins africains',
    bio: 'Aimée a révolutionné l\'enseignement du service en incluant les vins d\'Afrique du Sud et les spiritueux traditionnels africains dans le cursus de sommellerie de l\'école.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
];

const values = [
  { icon: Award, title: 'Excellence', desc: 'Chaque geste enseigné l\'est avec la rigueur d\'un chef étoilé. Nous ne faisons aucun compromis sur la qualité technique.' },
  { icon: Heart, title: 'Passion', desc: 'La cuisine est un art qui se transmet avec passion. Nos formateurs aiment ce qu\'ils font, et cela se ressent dans chaque cours.' },
  { icon: Globe, title: 'Ouverture', desc: 'Ancrés au Congo, ouverts sur le monde. Nous formons des professionnels capables d\'exceller partout sur la planète.' },
  { icon: BookOpen, title: 'Transmission', desc: 'Nous ne formons pas seulement des cuisiniers. Nous transmettons un patrimoine culinaire africain pour les générations futures.' },
];

export default function LeckolePage() {
  return (
    <div>
      {/* Hero */}
      <section className="section-dark relative overflow-hidden pt-[70px] md:pt-[80px] pb-24">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(232,160,32,0.08) 0%, transparent 60%), linear-gradient(160deg, #1A0F00 0%, #2C1A00 100%)' }}
        />
        <div className="container-custom relative z-10">
          <AnimateInView>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#E8A020]" />
              <span className="font-barlow font-700 text-[0.65rem] tracking-[0.25em] uppercase text-[#E8A020]">
                EGJP · Notre institution
              </span>
            </div>
          </AnimateInView>
          <AnimateInView delay={100}>
            <h1 className="font-playfair font-bold text-white mb-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05 }}>
              L'École
            </h1>
          </AnimateInView>
          <AnimateInView delay={200}>
            <p className="font-cormorant italic text-white/60 max-w-2xl"
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', lineHeight: 1.6 }}>
              Une institution fondée sur la passion de la gastronomie africaine et l'exigence de l'excellence internationale.
            </p>
          </AnimateInView>
        </div>
      </section>

      {/* History + Mission */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Notre Histoire"
                title="15 ans d'excellence gastronomique"
                className="mb-8"
              />
              <div className="space-y-4 font-barlow text-sm text-[#5C3D11]/80 leading-relaxed">
                <p>
                  Fondée en 2009 par le Chef Jean-Marie Nkounga, l'École de Gastronomie Jean Paul II est née d'une conviction profonde : l'Afrique centrale méritait une institution capable de former des chefs de niveau international tout en valorisant le patrimoine culinaire congolais.
                </p>
                <p>
                  En quinze ans, l'EGJP est devenue la référence en matière de formation culinaire au Congo-Brazzaville, avec plus de 500 diplômés qui excellent dans les plus grands établissements du continent et au-delà.
                </p>
                <p>
                  L'école porte le nom de Jean Paul II en hommage aux valeurs universelles d'excellence, de service et d'ouverture à l'autre qui inspirent notre pédagogie chaque jour.
                </p>
              </div>
            </div>
            <AnimateInView direction="right" delay={200}>
              <div className="relative">
                <div className="w-full aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80"
                    alt="Cuisine pédagogique de l'EGJP — étudiants en formation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-[#E8A020] p-5">
                  <div className="font-playfair font-bold text-[#1A0F00] text-2xl">500+</div>
                  <div className="font-barlow text-[0.62rem] tracking-wide uppercase text-[#1A0F00]/70">diplômés formés</div>
                </div>
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding section-alt">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Nos Valeurs"
            title="Ce qui nous guide"
            center
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <AnimateInView key={value.title} delay={i * 100}>
                <div className="card-base p-7 group text-center h-full">
                  <div className="w-12 h-12 border border-[#E8A020]/30 flex items-center justify-center mx-auto mb-5 group-hover:border-[#E8A020] group-hover:bg-[#E8A020]/10 transition-all duration-300">
                    <value.icon size={20} className="text-[#E8A020]" />
                  </div>
                  <h3 className="font-playfair font-bold text-[#1A0F00] text-lg mb-3">{value.title}</h3>
                  <p className="font-barlow text-xs text-[#5C3D11]/70 leading-relaxed">{value.desc}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <SectionHeader
            eyebrow="L'Équipe"
            title="Nos chefs formateurs"
            subtitle="Des professionnels au parcours exceptionnel, qui transmettent leur passion avec exigence et bienveillance."
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <AnimateInView key={member.name} delay={i * 100}>
                <div className="card-base overflow-hidden flex flex-col sm:flex-row group">
                  {/* Avatar */}
                  <div className="w-full sm:w-24 h-32 sm:h-24 flex-shrink-0 relative overflow-hidden">
                    <Image
                      src={member.photo}
                      alt={`Portrait de ${member.name}`}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-playfair font-bold text-[#1A0F00] text-lg leading-tight">{member.name}</h3>
                        <p className="font-barlow font-600 text-[0.65rem] tracking-wide uppercase text-[#E8A020] mt-1">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <p className="font-barlow text-[0.68rem] text-[#5C3D11]/50 mb-3">{member.formation}</p>
                    <p className="font-barlow text-xs text-[#5C3D11]/70 leading-relaxed">{member.bio}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <Star size={10} className="text-[#E8A020]" />
                      <span className="font-barlow text-[0.65rem] text-[#E8A020]">{member.specialty}</span>
                    </div>
                  </div>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section-dark relative overflow-hidden">
        <div className="container-custom section-padding">
          <SectionHeader
            eyebrow="Infrastructures"
            title="Des équipements professionnels"
            subtitle="L'EGJP investit continuellement dans ses équipements pour offrir des conditions de formation au niveau des meilleures écoles mondiales."
            light
            className="mb-16"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: '3 Cuisines pédagogiques', desc: 'Entièrement équipées en matériel professionnel Rational & De Dietrich' },
              { title: 'Laboratoire pâtisserie', desc: 'Dédié à la pâtisserie fine, chocolaterie et viennoiseries' },
              { title: 'Restaurant d\'application', desc: 'La Petite Faim — 40 couverts, ouvert au public' },
              { title: 'Cave à vins pédagogique', desc: '200 références pour les cours de sommellerie' },
              { title: 'Bibliothèque gastronomique', desc: '500+ ouvrages culinaires et de gestion' },
              { title: 'Espace multimédia', desc: 'Cours théoriques et documentation en ligne' },
            ].map((item, i) => (
              <AnimateInView key={item.title} delay={i * 80}>
                <div className="border border-[#E8A020]/15 p-5 hover:border-[#E8A020]/40 transition-colors duration-300">
                  <div className="w-2 h-2 bg-[#E8A020] mb-3" />
                  <h4 className="font-barlow font-700 text-sm text-white mb-2">{item.title}</h4>
                  <p className="font-barlow text-xs text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
