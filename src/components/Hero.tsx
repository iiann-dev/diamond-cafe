import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SITE, IMAGES } from '../data';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onNavigate: (tab: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(imageRef.current, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0 0)', duration: 1.2, ease: 'cubic-bezier(0.77, 0, 0.175, 1)', delay: 0.3 });
    }
    if (badgeRef.current) {
      gsap.to(badgeRef.current, { rotation: 360, duration: 20, repeat: -1, ease: 'none' });
    }
  }, []);

  return (
    <section ref={sectionRef} id="home" className="container-cafe min-h-[100dvh] pt-[72px] flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-12 lg:py-0">
      {/* Left content */}
      <div className="flex-1 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}>
          <span className="inline-flex items-center gap-2 bg-peach/20 text-peach-dark font-script text-sm px-4 py-1.5 rounded-full mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            {SITE.heroTag}
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.08] text-forest mb-4">
          {SITE.heroTitle}
          <br />
          <span className="font-script text-peach text-5xl md:text-6xl lg:text-7xl">{SITE.heroScript} <span className="text-peach">♡</span></span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="font-body text-muted text-lg md:text-xl max-w-md leading-relaxed mb-8">
          {SITE.heroDesc}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-wrap gap-4 mb-10">
          <button onClick={() => onNavigate('menu')} className="btn-primary">
            Explore Menu
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </button>
          <button onClick={() => onNavigate('story')} className="btn-outline flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-forest text-cream flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
            </span>
            Watch Our Story
          </button>
        </motion.div>

        {/* Social proof */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-center gap-4">
          <div className="flex -space-x-3">
            {IMAGES.avatars.map((src, i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-cream overflow-hidden">
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <span className="font-body text-sm text-muted">Loved by <strong className="text-forest">{SITE.rating.toLocaleString()}+</strong> coffee lovers</span>
        </motion.div>
      </div>

      {/* Right image */}
      <div className="flex-1 w-full max-w-lg lg:max-w-none">
        <div className="relative">
          <div ref={imageRef} className="hero-frame overflow-hidden">
            <img src={IMAGES.hero} alt="Diamond Cafe interior" className="w-full h-[520px] lg:h-[620px] object-cover" />
          </div>

          {/* Sticky note badge */}
          <div ref={badgeRef} className="absolute -top-4 -right-4 w-28 h-28 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-pink shadow-lg flex items-center justify-center rotate-6">
              <span className="font-script text-sm text-forest text-center leading-tight">
                coffee<br />friends<br />good times<br /><span className="text-peach">♡</span>
              </span>
            </div>
          </div>

          {/* Doodles */}
          <svg className="absolute -bottom-6 -left-6 w-20 h-20 text-sage/30 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20,50 Q40,20 50,50 Q60,80 80,50" />
            <path d="M30,50 Q40,35 50,50 Q60,65 70,50" />
          </svg>
        </div>
      </div>
    </section>
  );
}
