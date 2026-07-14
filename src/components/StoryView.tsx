import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { IMAGES, SITE } from '../data';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { label: 'Years in Noe Valley', value: `${new Date().getFullYear() - SITE.founded}+` },
  { label: 'Happy Guests Served', value: '15k+' },
  { label: 'Family-Run', value: '100%' },
];

export default function StoryView() {
  const sectionRef = useRef<HTMLElement>(null);
  const splitRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Split-layout reveals ── */
      gsap.fromTo(
        '.sv-reveal',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
          scrollTrigger: {
            trigger: splitRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );

      /* ── Stat badges staggered ── */
      gsap.fromTo(
        '.sv-stat',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.06,
          duration: 0.5,
          ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
          scrollTrigger: {
            trigger: '.sv-stats-row',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );

      /* ── Bottom banner ── */
      gsap.fromTo(
        '.sv-banner',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-cream pt-32">
      {/* ── Split Layout ── */}
      <div
        ref={splitRef}
        className="container-cafe grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-24 md:pb-32"
      >
        {/* Left: Narrative */}
        <div>
          <span className="section-label mb-3 block sv-reveal">
            Our Story
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-espresso leading-tight sv-reveal">
            More Than Just{' '}
            <span className="relative inline-block text-terracotta">
              Coffee
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 180 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.4"
              >
                <path d="M2,6 Q45,0 90,6 Q135,12 178,6" />
              </svg>
            </span>
          </h2>

          {/* Full story text */}
          <div className="mt-6 space-y-4 sv-reveal">
            {SITE.fullStory.split(/(?<=\.) /).map((sentence: string, i: number) => (
              <p
                key={i}
                className="font-body text-[0.9375rem] text-espresso/80 leading-relaxed"
              >
                {sentence}
              </p>
            ))}
          </div>

          {/* Stats badges */}
          <div className="sv-stats-row flex flex-wrap gap-3 mt-8 sv-reveal">
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                className="sv-stat card-glass px-5 py-3 text-center min-w-[120px]"
                whileTap={{ scale: 0.97 }}
              >
                <span className="block font-display text-xl text-terracotta font-semibold leading-tight">
                  {stat.value}
                </span>
                <span className="block font-body text-[0.6875rem] text-espresso-muted uppercase tracking-[0.05em] mt-0.5">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Coffee pour image with arch frame */}
        <div className="sv-reveal justify-self-center lg:justify-self-end w-full max-w-md">
          <div className="arch-frame relative">
            <img
              src={IMAGES.coffeePour}
              alt="Coffee pour over bar"
              className="w-full h-[480px] md:h-[560px] object-cover"
            />
            {/* Decorative overlay */}
            <div className="absolute inset-0 ring-1 ring-espresso/5 rounded-inherit pointer-events-none" />
          </div>
          {/* Caption */}
          <p className="font-script text-sm text-espresso-muted text-center mt-4">
            slow pour, rich flavor — every cup tells a story
          </p>
        </div>
      </div>

      {/* ── Bottom Image Banner ── */}
      <div ref={bannerRef} className="sv-banner relative w-full h-[280px] md:h-[360px] overflow-hidden">
        <img
          src={IMAGES.storyWide}
          alt="Diamond Cafe interior with warm light"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/50 via-transparent to-espresso/30" />

        {/* Callout overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-cream px-6">
            <p className="font-script text-xl md:text-2xl text-cream/90">
              come be part of our story
            </p>
            <motion.button
              whileTap={{ scale: 0.97 }}
              className="btn-accent mt-4 text-[0.8125rem]"
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Visit Us Today
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
