import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { MENU_ITEMS, SITE } from '../data';

gsap.registerPlugin(ScrollTrigger);

type Cat = 'all' | 'coffee' | 'food' | 'pastry';

const CATEGORIES: { key: Cat; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'coffee', label: 'Coffee' },
  { key: 'food', label: 'Food' },
  { key: 'pastry', label: 'Pastry' },
];

const catCounts: Record<Cat, number> = {
  all: MENU_ITEMS.length,
  coffee: MENU_ITEMS.filter((i) => i.category === 'coffee').length,
  food: MENU_ITEMS.filter((i) => i.category === 'food').length,
  pastry: MENU_ITEMS.filter((i) => i.category === 'pastry').length,
};

export default function MenuView() {
  const [activeCat, setActiveCat] = useState<Cat>('all');
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCat === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCat);

  /* ── initial GSAP hero + stagger ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.mv-hero-el',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
        }
      );
      gsap.fromTo(
        '.menu-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.06,
          duration: 0.6,
          ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  /* ── re-stagger on filter change ── */
  useEffect(() => {
    gsap.fromTo(
      '.menu-card',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.45,
        ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
        overwrite: 'auto',
      }
    );
  }, [activeCat]);

  return (
    <section ref={sectionRef} className="bg-cream">
      {/* ── Hero Banner ── */}
      <div className="relative pt-32 pb-16 md:pb-20 overflow-hidden">
        <div ref={heroRef} className="container-cafe text-center">
          <motion.span
            className="section-label justify-center mb-3 block mv-hero-el"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            ♡ from our kitchen
          </motion.span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-espresso leading-tight mv-hero-el">
            Our Menu
          </h1>
          <p className="font-script text-xl text-terracotta mt-2 mv-hero-el">
            crafted with love, served with a smile
          </p>
        </div>
        {/* Decorative flourishes */}
        <div className="absolute -top-10 right-0 text-sage/15 text-8xl font-script pointer-events-none select-none leading-none">
          ♡
        </div>
        <div className="absolute -bottom-8 -left-6 text-sage/10 text-7xl pointer-events-none select-none leading-none">
          ✦
        </div>
      </div>

      {/* ── Filter Bar ── */}
      <div className="container-cafe pb-8">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCat(cat.key)}
              className={`filter-btn ${activeCat === cat.key ? 'active' : ''}`}
            >
              {cat.label}
              <span className="ml-1.5 text-[11px] opacity-60">
                {catCounts[cat.key]}
              </span>
            </button>
          ))}
        </div>
        {/* Mobile count indicator */}
        <p className="text-center text-[0.75rem] font-body text-espresso-muted mt-4 sm:hidden">
          {filtered.length} item{filtered.length !== 1 ? 's' : ''} shown
        </p>
      </div>

      {/* ── Menu Grid ── */}
      <div className="container-cafe pb-24 md:pb-32">
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="card-cafe menu-card"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-[220px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  {item.popular && (
                    <span className="stamp-badge absolute top-3 left-3">
                      ★ popular
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="p-5">
                  <h3 className="font-display text-lg text-espresso leading-tight">
                    {item.name}
                  </h3>
                  <p className="font-body text-[0.8125rem] text-espresso-muted mt-1.5 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/50">
                    <span className="font-display text-xl text-terracotta font-semibold">
                      ${item.price.toFixed(2)}
                    </span>
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      className="btn-primary text-[0.75rem] py-[8px] px-[18px]"
                      aria-label={`Add ${item.name}`}
                    >
                      Add
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-body text-espresso-muted">
              No items in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
