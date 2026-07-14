import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { MENU_ITEMS, SITE } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function MenuSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'cubic-bezier(0.23, 1, 0.32, 1)', scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none none' } });
      gsap.fromTo('.menu-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: 'cubic-bezier(0.23, 1, 0.32, 1)', scrollTrigger: { trigger: '.menu-grid', start: 'top 80%', toggleActions: 'play none none none' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="menu" className="bg-cream py-24 md:py-32">
      <div className="container-cafe">
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="section-label mb-2 block">OUR FAVORITES</span>
            <h2 className="font-display text-3xl md:text-4xl text-forest">
              Made with love, <span className="font-script text-peach">just for you</span>
              <span className="text-peach ml-1">♡</span>
            </h2>
          </div>
          <div className="doodle-flower self-start md:self-auto">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-peach/60">
              <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
              <path d="M12 5V3M12 21v-2M5 12H3M21 12h-2M7.05 7.05L5.64 5.64M18.36 18.36l-1.41-1.41M7.05 16.95l-1.41 1.41M18.36 5.64l-1.41 1.41" strokeWidth="2" />
            </svg>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 menu-grid">
          {MENU_ITEMS.slice(0, 4).map(item => (
            <motion.div key={item.id} className="card-menu menu-card" whileTap={{ scale: 0.97 }}>
              <div className="relative overflow-hidden h-[200px]">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                {item.popular && (
                  <span className="absolute top-3 left-3 bg-peach text-white text-[10px] font-nav uppercase tracking-wider px-3 py-1 rounded-full">Popular</span>
                )}
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-body font-semibold text-charcoal">{item.name}</h3>
                  <span className="font-body text-muted text-sm">${item.price.toFixed(2)}</span>
                </div>
                <button className="w-9 h-9 rounded-full bg-forest text-cream flex items-center justify-center hover:bg-forest-light transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
