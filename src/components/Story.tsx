import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { IMAGES, SITE } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const revealRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealRefs.current.forEach(el => {
        gsap.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'cubic-bezier(0.23, 1, 0.32, 1)', scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const addRef = (el: HTMLDivElement | null) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  return (
    <section ref={sectionRef} id="story" className="relative mt-24">
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-cream" style={{ clipPath: 'path("M0,24 C160,-24 320,48 600,24 C800,0 960,72 1440,24 L1440,0 L0,0 Z")' }} />

      {/* Dark section */}
      <div className="bg-forest pt-24 pb-32 relative">
        {/* Doodle decor */}
        <div className="absolute top-12 right-12 text-sage/10 text-6xl font-script pointer-events-none select-none">♡</div>
        <div className="absolute bottom-16 left-12 text-sage/10 text-4xl pointer-events-none select-none">✦</div>

        <div className="container-cafe">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left image */}
            <div className="lg:col-span-4">
              <div ref={addRef} className="relative">
                <div className="img-mask-organic overflow-hidden">
                  <img src={IMAGES.story} alt="Diamond Cafe seating" className="w-full h-[400px] object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 text-4xl">😊</div>
              </div>
            </div>

            {/* Center text */}
            <div className="lg:col-span-4">
              <div ref={addRef}>
                <span className="section-label text-cream/70 mb-3 block">OUR STORY</span>
                <h2 className="font-display text-3xl md:text-4xl text-cream leading-tight mb-2">
                  More Than <br /><span className="relative">Just Coffee
                    <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5">
                      <path d="M2,6 Q50,0 100,6 Q150,12 198,6" />
                    </svg>
                  </span>
                </h2>
              </div>
              <div ref={addRef} className="mt-6">
                <p className="font-body text-cream/80 leading-relaxed">
                  {SITE.description}
                </p>
              </div>
              <div ref={addRef} className="mt-6">
                <button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary text-sm">
                  Our Story
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>

            {/* Right polaroid */}
            <div className="lg:col-span-4 justify-self-center lg:justify-self-end">
              <div ref={addRef} className="polaroid max-w-[260px]">
                <img src={IMAGES.polaroid} alt="Latte art" className="w-full h-[280px] object-cover rounded-[2px]" />
                <p className="font-script text-forest text-sm text-center mt-3">take a break, you deserve it.♡</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-cream" style={{ clipPath: 'path("M0,0 C160,60 320,-20 600,0 C800,20 960,-40 1440,0 L1440,24 L0,24 Z")' }} />
    </section>
  );
}
