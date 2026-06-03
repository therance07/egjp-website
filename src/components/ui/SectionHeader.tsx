import AnimateInView from './AnimateInView';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <AnimateInView delay={0}>
          <div className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : ''}`}>
            <span className="w-8 h-[1px] bg-[#E8A020]" />
            <span className="font-barlow font-700 text-[0.68rem] tracking-[0.25em] uppercase text-[#E8A020]">
              {eyebrow}
            </span>
            <span className="w-8 h-[1px] bg-[#E8A020]" />
          </div>
        </AnimateInView>
      )}

      <AnimateInView delay={100}>
        <h2
          className={`font-playfair font-bold leading-tight mb-4 ${
            light ? 'text-white' : 'text-[#1A0F00]'
          }`}
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
        >
          {title}
        </h2>
      </AnimateInView>

      {subtitle && (
        <AnimateInView delay={200}>
          <p
            className={`font-cormorant italic leading-relaxed max-w-2xl ${
              center ? 'mx-auto' : ''
            }`}
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: light ? 'rgba(253,250,243,0.7)' : '#5C3D11',
            }}
          >
            {subtitle}
          </p>
        </AnimateInView>
      )}

      <AnimateInView delay={250}>
        <span className={`gold-line${center ? '-center' : ''} mt-6`} />
      </AnimateInView>
    </div>
  );
}
