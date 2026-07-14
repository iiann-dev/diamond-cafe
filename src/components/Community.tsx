import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { IMAGES } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function Community() {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      elementsRef.current.forEach(el => {
        gsap.fromTo(el, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, ease: 'cubic-bezier(0.23, 1, 0.32, 1)', scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const addRef = (el: HTMLDivElement | null) => { if (el && !elementsRef.current.includes(el)) elementsRef.current.push(el); };

  return (
    <section ref={sectionRef} className="relative mt-16">
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-cream z-10" style={{ clipPath: 'path("M0,20 C160,-16 320,40 600,20 C800,0 960,48 1440,20 L1440,0 L0,0 Z")' }} />

      <div className="bg-forest pt-28 pb-20">
        <div className="container-cafe">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left image */}
            <div className="lg:col-span-4">
              <div ref={addRef}>
                <div className="img-mask-organic overflow-hidden">
                  <img src={IMAGES.community} alt="Cafe interior" className="w-full h-[380px] object-cover" />
                </div>
              </div>
            </div>

            {/* Center text */}
            <div className="lg:col-span-4">
              <div ref={addRef}>
                <span className="section-label text-cream/70 mb-3 block">POPPY COMMUNITY</span>
                <h2 className="font-display text-3xl md:text-4xl text-cream leading-tight">
                  Good coffee tastes<br />
                  better together.
                  <span className="text-cream/60 ml-2">☕</span>
                </h2>
              </div>
              <div ref={addRef} className="mt-5">
                <p className="font-body text-cream/70 leading-relaxed">
                  Join our community for special offers, fun events, and a little happiness delivered to your inbox.
                </p>
              </div>
            </div>

            {/* Right — Newsletter card */}
            <div className="lg:col-span-4">
              <div ref={addRef} className="card-glass p-6 md:p-8 relative">
                <div className="absolute -top-3 -right-3 text-3xl opacity-30 pointer-events-none">✉️</div>
                <h3 className="font-script text-xl text-forest mb-4">Join the Poppy Club!</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 rounded-xl border border-border bg-white/80 font-body text-sm text-charcoal placeholder:text-muted/60 outline-none focus:ring-2 focus:ring-forest/20 transition-shadow"
                  />
                  <button className="btn-primary whitespace-nowrap text-xs py-3 px-5">
                    Join Now
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
