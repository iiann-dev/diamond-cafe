import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SITE, IMAGES, MENU_ITEMS, FEATURES, TESTIMONIALS } from '../data';

gsap.registerPlugin(ScrollTrigger);

// ─── SVG Icons ───

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function LayersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function BagIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function CoffeeSvg({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8h1a4 4 0 110 8h-1" />
      <path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" />
      <line x1="6" y1="2" x2="6" y2="4" />
      <line x1="10" y1="2" x2="10" y2="4" />
      <line x1="14" y1="2" x2="14" y2="4" />
    </svg>
  );
}

function CookieSvg({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 1010 10 4 4 0 01-5-5 4 4 0 01-5-5" />
      <circle cx="8" cy="8" r="1" fill="currentColor" />
      <circle cx="16" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="16" r="1" fill="currentColor" />
    </svg>
  );
}

function HeartSvg({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

function StarSvg({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function StarFilled({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

const FEATURE_ICONS: Record<string, React.FC<{ className?: string }>> = {
  coffee: CoffeeSvg,
  cookie: CookieSvg,
  heart: HeartSvg,
  star: StarSvg,
};

// ─── Hero ───

function HeroSection({ onNavigate: onNav }: { onNavigate?: (tab: string) => void }) {
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { clipPath: 'inset(0 0 100% 0)' },
          { clipPath: 'inset(0 0 0 0)', duration: 1.2, ease: 'cubic-bezier(0.77, 0, 0.175, 1)', delay: 0.3 }
        );
      }
      if (badgeRef.current) {
        gsap.to(badgeRef.current, { rotation: 360, duration: 24, repeat: -1, ease: 'none' });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const easeCustom = [0.23, 1, 0.32, 1] as const;

  return (
    <section ref={sectionRef} id="home" className="container-cafe min-h-[100dvh] pt-[72px] flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-12 lg:py-0">
      {/* Left: text */}
      <div className="flex-1 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeCustom }}
        >
          <span className="section-label">
            <SunIcon />
            {SITE.heroTag}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: easeCustom }}
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.08] text-espresso mt-4 mb-4"
        >
          {SITE.heroTitle}
          <br />
          <span className="font-script text-terracotta text-5xl md:text-6xl lg:text-7xl">{SITE.heroTitleAlt}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: easeCustom }}
          className="font-body text-espresso-muted text-lg md:text-xl max-w-md leading-relaxed mb-8"
        >
          {SITE.heroDesc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: easeCustom }}
          className="flex flex-wrap gap-4 mb-10"
        >
          <button onClick={() => onNav?.('menu')} className="btn-primary">
            Explore Menu
            <ArrowRight />
          </button>
          <button onClick={() => onNav?.('story')} className="btn-secondary">
            Our Story
            <ArrowRight />
          </button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: easeCustom }}
          className="flex items-center gap-4"
        >
          <div className="flex -space-x-3">
            {IMAGES.avatars.map((src, i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-cream overflow-hidden">
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <span className="font-body text-sm text-espresso-muted">
            Loved by <strong className="text-espresso">1,200+</strong> happy regulars
          </span>
        </motion.div>
      </div>

      {/* Right: arch-frame image + rotating badge */}
      <div className="flex-1 w-full max-w-lg lg:max-w-none">
        <div className="relative">
          <div ref={imageRef} className="arch-frame overflow-hidden">
            <img
              src={IMAGES.hero}
              alt="Diamond Cafe interior"
              className="w-full h-[520px] lg:h-[620px] object-cover"
            />
          </div>

          <div
            ref={badgeRef}
            className="absolute -top-4 -right-4 w-28 h-28 flex items-center justify-center pointer-events-none"
          >
            <div className="w-24 h-24 rounded-full bg-terracotta flex items-center justify-center shadow-card">
              <span className="font-script text-sm text-white text-center leading-tight">
                since
                <br />
                <span className="text-lg font-bold">{SITE.founded}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Features Bento ───

function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.feature-card',
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.08,
          duration: 0.7,
          ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
          scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32">
      <div className="container-cafe">
        <div className="text-center mb-12">
          <span className="section-label justify-center mb-2">
            <LayersIcon />
            Why Diamond
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-espresso">What makes us sparkle</h2>
        </div>

        <div className="features-grid grid grid-cols-1 sm:grid-cols-2 gap-6">
          {FEATURES.map((f) => {
            const Icon = FEATURE_ICONS[f.icon];
            return (
              <div key={f.title} className="feature-card card-cafe p-8 md:p-10">
                <div className="w-14 h-14 rounded-2xl bg-sage/15 text-sage-dark flex items-center justify-center mb-5">
                  {Icon ? <Icon /> : null}
                </div>
                <h3 className="font-display text-xl text-espresso mb-2">{f.title}</h3>
                <p className="font-body text-espresso-muted leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Featured Items ───

function FeaturedItemsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const popular = MENU_ITEMS.filter((m) => m.popular).slice(0, 3);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.featured-item',
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.08,
          duration: 0.7,
          ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
          scrollTrigger: {
            trigger: '.featured-row',
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-cream-dark">
      <div className="container-cafe">
        <div className="text-center mb-12">
          <span className="section-label justify-center mb-2">
            <BagIcon />
            Crowd Favorites
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-espresso">Our most-loved items</h2>
        </div>

        <div className="featured-row grid grid-cols-1 md:grid-cols-3 gap-6">
          {popular.map((item) => (
            <div key={item.id} className="featured-item card-cafe">
              <div className="arch-frame h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-espresso mb-1">{item.name}</h3>
                <p className="font-body text-sm text-espresso-muted mb-3 line-clamp-2">{item.description}</p>
                <span className="font-body font-semibold text-terracotta text-lg">
                  ${item.price.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ───

function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-card',
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.08,
          duration: 0.7,
          ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
          scrollTrigger: {
            trigger: '.testimonials-row',
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32">
      <div className="container-cafe">
        <div className="text-center mb-12">
          <span className="section-label justify-center mb-2">
            <QuoteIcon />
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-espresso">What our community says</h2>
        </div>

        <div className="testimonials-row grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="testimonial-card card-glass p-8 flex flex-col">
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarFilled key={i} className="text-terracotta" />
                ))}
              </div>
              <blockquote className="font-body text-espresso leading-relaxed mb-6 flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <span className="font-display text-sm text-espresso font-semibold">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main ───

interface HomeViewProps {
  onNavigate?: (tab: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <FeaturesSection />
      <FeaturedItemsSection />
      <TestimonialsSection />
    </>
  );
}
