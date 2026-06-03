import Image from 'next/image';
import ReservationForm from '@/components/forms/ReservationForm';
import MenuSection from '@/components/sections/restaurant/MenuSection';
import AnimateInView from '@/components/ui/AnimateInView';
import { Clock, MapPin, Phone, Star, Users } from 'lucide-react';

export const metadata = {
  title: 'La Petite Faim — Restaurant d\'application',
  description: 'Vivez une expérience gastronomique unique à La Petite Faim, restaurant d\'application de l\'EGJP, géré par nos étudiants à Brazzaville.',
};

export default function LaPetiteFaimPage() {
  return (
    <div className="bg-[#1A0F00]">

      {/* Hero Cinématique */}
      <section className="relative min-h-screen flex items-end overflow-hidden pt-[70px] md:pt-[80px]">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1920&q=80"
            alt="Salle du restaurant gastronomique La Petite Faim, Brazzaville"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(26,15,0,0.3) 0%, rgba(26,15,0,0.5) 40%, rgba(26,15,0,0.95) 100%)' }}
          />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 pb-24 pt-32">
          <AnimateInView>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#E8A020]" />
              <span className="font-barlow font-700 text-[0.65rem] tracking-[0.3em] uppercase text-[#E8A020]">
                Restaurant d'Application · EGJP
              </span>
            </div>
          </AnimateInView>

          <AnimateInView delay={150}>
            <h1 className="font-playfair font-bold text-white mb-4"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', lineHeight: 0.95, letterSpacing: '-0.02em' }}>
              La Petite<br />
              <span className="text-[#E8A020]">Faim</span>
            </h1>
          </AnimateInView>

          <AnimateInView delay={300}>
            <p className="font-cormorant italic text-white/60 max-w-lg mb-8"
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', lineHeight: 1.6 }}>
              Une cuisine franco-africaine contemporaine, sublimée par la passion de nos étudiants et la rigueur de nos chefs.
            </p>
          </AnimateInView>

          {/* Quick info */}
          <AnimateInView delay={450}>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-white/50">
                <Clock size={14} className="text-[#E8A020]" />
                <span className="font-barlow text-xs">Mar–Ven · 12h–14h30 · 19h–22h</span>
              </div>
              <div className="flex items-center gap-2 text-white/50">
                <Users size={14} className="text-[#E8A020]" />
                <span className="font-barlow text-xs">40 couverts</span>
              </div>
              <div className="flex items-center gap-2 text-white/50">
                <Star size={14} className="text-[#E8A020] fill-[#E8A020]" />
                <span className="font-barlow text-xs">Restaurant d'excellence depuis 2012</span>
              </div>
            </div>
          </AnimateInView>
        </div>
      </section>

      {/* Concept */}
      <section className="section-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(232,160,32,0.05) 0%, transparent 60%)' }}
        />
        <div className="container-custom section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimateInView>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-[1px] bg-[#E8A020]" />
                  <span className="font-barlow font-700 text-[0.65rem] tracking-[0.25em] uppercase text-[#E8A020]">
                    Le Concept
                  </span>
                </div>
              </AnimateInView>
              <AnimateInView delay={100}>
                <h2 className="font-playfair font-bold text-white mb-6"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>
                  Où l'apprentissage rencontre l'excellence
                </h2>
              </AnimateInView>
              <AnimateInView delay={200}>
                <div className="space-y-4 font-barlow text-sm text-white/60 leading-relaxed">
                  <p>La Petite Faim est bien plus qu'un restaurant. C'est le laboratoire vivant de l'EGJP, où nos étudiants mettent en pratique leurs apprentissages dans des conditions réelles, face à une clientèle exigeante.</p>
                  <p>Chaque service est un cours. Chaque plat envoyé en salle a été supervisé par un chef formateur. Chaque interaction avec le client est une leçon d'hospitality.</p>
                  <p>Le résultat ? Une expérience gastronomique d'exception, à prix accessible, qui reflète l'identité culinaire congolaise avec une technique irréprochable.</p>
                </div>
              </AnimateInView>
            </div>
            <AnimateInView direction="right" delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: '40', label: 'Couverts maximum' },
                  { num: '12', label: 'Étudiants par service' },
                  { num: '4', label: 'Chefs superviseurs' },
                  { num: '2012', label: 'Année d\'ouverture' },
                ].map((stat) => (
                  <div key={stat.label} className="border border-[#E8A020]/15 p-5 text-center hover:border-[#E8A020]/40 transition-colors">
                    <div className="font-playfair font-bold text-[#E8A020] text-3xl mb-1">{stat.num}</div>
                    <div className="font-barlow text-[0.62rem] tracking-wide uppercase text-white/30">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* Menu */}
      <MenuSection />

      {/* Reservation */}
      <section className="section-dark relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 20% 70%, rgba(232,160,32,0.05) 0%, transparent 50%)' }}
        />
        <div className="container-custom section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left info */}
            <div>
              <AnimateInView>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-[1px] bg-[#E8A020]" />
                  <span className="font-barlow font-700 text-[0.65rem] tracking-[0.25em] uppercase text-[#E8A020]">
                    Réservation
                  </span>
                </div>
              </AnimateInView>
              <AnimateInView delay={100}>
                <h2 className="font-playfair font-bold text-white mb-6"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.1 }}>
                  Réserver votre table
                </h2>
              </AnimateInView>
              <AnimateInView delay={200}>
                <p className="font-barlow text-sm text-white/50 mb-8 leading-relaxed">
                  Réservez en ligne ou contactez-nous directement. Nous vous confirmons sous 24h.
                </p>
              </AnimateInView>

              <AnimateInView delay={300}>
                <div className="space-y-4">
                  {[
                    { icon: Clock, label: 'Déjeuner', value: 'Mardi – Vendredi · 12h00 – 14h30' },
                    { icon: Clock, label: 'Dîner', value: 'Mardi – Vendredi · 19h00 – 22h00' },
                    { icon: MapPin, label: 'Adresse', value: 'Avenue de la Paix, Brazzaville' },
                    { icon: Phone, label: 'Téléphone', value: '+242 064 000 001' },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex gap-4 items-start border border-[#E8A020]/10 p-4 hover:border-[#E8A020]/25 transition-colors">
                      <Icon size={14} className="text-[#E8A020] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-barlow font-700 text-[0.65rem] tracking-wide uppercase text-white/30 mb-0.5">
                          {label}
                        </div>
                        <div className="font-barlow text-sm text-white/70">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateInView>
            </div>

            {/* Right form */}
            <AnimateInView delay={200} direction="right">
              <ReservationForm />
            </AnimateInView>
          </div>
        </div>
      </section>
    </div>
  );
}
