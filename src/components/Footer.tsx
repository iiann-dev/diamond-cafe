import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SITE, HOURS, NAV_ITEMS } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer-reveal',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.06,
          duration: 0.6,
          ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
          scrollTrigger: {
            trigger: '.footer-reveal',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={sectionRef} className="relative">
      {/* Top organic divider */}
      <div className="relative h-16 -mb-[1px]">
        <svg
          className="absolute inset-0 w-full h-full text-cream fill-cream"
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
        >
          <path d="M0,32 C360,96 1080,-32 1440,32 L1440,64 L0,64 Z" />
        </svg>
      </div>

      <div className="bg-deep text-cream/80">
        <div className="container-cafe py-16 md:py-20">
          {/* Top row */}
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-4 footer-reveal">
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-script text-2xl text-cream">Diamond.</span>
                <span className="text-[10px] font-body text-cream/40 uppercase tracking-[0.15em]">
                  Cafe
                </span>
              </div>
              <p className="font-body text-[0.875rem] text-cream/60 leading-relaxed max-w-xs">
                {SITE.tagline}. Noe Valley&apos;s living room since 2010.
              </p>
            </div>

            {/* Quick links */}
            <div className="lg:col-span-2 footer-reveal">
              <h4 className="font-nav text-[0.6875rem] uppercase tracking-[0.12em] text-cream/50 mb-5">
                Explore
              </h4>
              <ul className="space-y-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.tab}>
                    <Link
                      to={
                        item.tab === 'home'
                          ? '/'
                          : `/${item.tab === 'story' ? 'story' : item.tab}`
                      }
                      className="font-body text-[0.875rem] text-cream/70 hover:text-cream transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours */}
            <div className="lg:col-span-3 footer-reveal">
              <h4 className="font-nav text-[0.6875rem] uppercase tracking-[0.12em] text-cream/50 mb-5">
                Open Daily
              </h4>
              <div className="space-y-2">
                {HOURS.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between font-body text-[0.875rem]"
                  >
                    <span className="text-cream/50">{h.day}</span>
                    <span className="text-cream font-medium">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3 footer-reveal">
              <h4 className="font-nav text-[0.6875rem] uppercase tracking-[0.12em] text-cream/50 mb-5">
                Visit Us
              </h4>
              <p className="font-body text-[0.875rem] text-cream/70 leading-relaxed mb-3">
                {SITE.address}
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="font-body text-[0.875rem] text-terracotta-light hover:text-terracotta transition-colors duration-200 block"
              >
                {SITE.email}
              </a>
              <a
                href="#"
                className="font-body text-[0.875rem] text-terracotta-light hover:text-terracotta transition-colors duration-200 mt-1 block"
              >
                {SITE.phone}
              </a>

              {/* Social */}
              <div className="flex gap-3 mt-6">
                {[
                  { label: 'IG', path: 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-8a2 2 0 114 0 2 2 0 01-4 0zm5.5-4.5a1 1 0 110 2 1 1 0 010-2z' },
                  { label: 'FB', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    className="w-9 h-9 rounded-full border border-cream/15 text-cream/50 flex items-center justify-center hover:border-terracotta hover:text-terracotta transition-all duration-200"
                    aria-label={s.label}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 pt-8 border-t border-cream/8 flex flex-col sm:flex-row justify-between items-center gap-4 footer-reveal">
            <p className="font-body text-[0.75rem] text-cream/40">
              &copy; {new Date().getFullYear()} Diamond Cafe. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-cream/30">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="M12 2C7.58 2 4 5.58 4 10c0 4.42 3.58 11 8 11s8-6.58 8-11c0-4.42-3.58-8-8-8z" />
                <path d="M12 6c-2.21 0-4 1.79-4 4" />
              </svg>
              <span className="font-script text-sm font-semibold text-cream/60">
                &#9825;
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
