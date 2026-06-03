import AnimateInView from '@/components/ui/AnimateInView';
import SectionHeader from '@/components/ui/SectionHeader';

const partners = [
  { name: 'Hôtel Mbamou Palace', category: 'Partenaire hôtelier' },
  { name: 'Chambre de Commerce Congo', category: 'Institution' },
  { name: 'Institut Paul Bocuse', category: 'Partenariat académique' },
  { name: 'ONEMO Congo', category: 'Insertion professionnelle' },
  { name: 'Maison Lenôtre', category: 'Partenaire formation' },
  { name: 'FODEC', category: 'Financement' },
];

export default function PartnersSection() {
  return (
    <section className="section-padding section-light">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Réseau & Accréditations"
          title="Nos partenaires"
          subtitle="Un réseau solide d'institutions reconnues qui garantit la qualité de nos formations et l'insertion professionnelle de nos diplômés."
          center
          className="mb-16"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner, i) => (
            <AnimateInView key={partner.name} delay={i * 80} direction="up">
              <div className="border border-[#E8A020]/15 p-5 text-center hover:border-[#E8A020] hover:shadow-[0_4px_20px_rgba(232,160,32,0.15)] transition-all duration-300 group cursor-default">
                {/* Logo placeholder */}
                <div className="w-10 h-10 bg-[#E8A020]/10 border border-[#E8A020]/20 mx-auto mb-3 flex items-center justify-center group-hover:bg-[#E8A020]/20 transition-colors">
                  <span className="font-playfair font-bold text-[#E8A020] text-xs">
                    {partner.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <div className="font-barlow font-600 text-[0.65rem] text-[#1A0F00] leading-tight mb-1">
                  {partner.name}
                </div>
                <div className="font-barlow text-[0.6rem] text-[#5C3D11]/50 tracking-wide">
                  {partner.category}
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
