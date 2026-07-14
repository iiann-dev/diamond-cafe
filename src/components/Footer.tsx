import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SITE, HOURS } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      elementsRef.current.forEach(el => {
        gsap.fromTo(el, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'cubic-bezier(0.23, 1, 0.32, 1)', scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const addRef = (el: HTMLDivElement | null) => { if (el && !elementsRef.current.includes(el)) elementsRef.current.push(el); };

  return (
    <footer ref={sectionRef} id="contact" className="relative mt-16">
      {/* Peach top border */}
      <div className="h-1.5 bg-peach/60" />

      <div className="bg-pink-light py-16 md:py-20">
        <div className="container-cafe">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Brand */}
            <div ref={addRef} className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-script text-2xl text-forest">poppy</span>
                <span>🌸</span>
              </div>
              <p className="font-body text-muted text-sm leading-relaxed">{SITE.tagline}</p>
            </div>

            {/* Hours */}
            <div ref={addRef} className="lg:col-span-3">
              <h4 className="font-nav text-xs uppercase tracking-widest text-forest mb-4">Open Daily</h4>
              {HOURS.slice(0, 1).map(h => (
                <p key={h.day} className="font-body text-sm text-muted">{h.day} — <span className="text-forest font-semibold">{h.hours}</span></p>
              ))}
            </div>

            {/* Location & Links */}
            <div ref={addRef} className="lg:col-span-3">
              <h4 className="font-nav text-xs uppercase tracking-widest text-forest mb-4">Location</h4>
              <p className="font-body text-sm text-muted mb-4">{SITE.address}</p>
              <h4 className="font-nav text-xs uppercase tracking-widest text-forest mb-3">Links</h4>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {['Menu', 'Our Story', 'Gallery', 'Events', 'Contact', 'FAQ'].map(link => (
                  <button key={link} onClick={() => {
                    const tab = link.toLowerCase().replace(' ', '');
                    document.getElementById(tab === 'menu' ? 'menu' : tab === 'our story' ? 'story' : tab === 'gallery' ? 'gallery' : tab === 'contact' ? 'contact' : 'home')?.scrollIntoView({ behavior: 'smooth' });
                  }} className="font-body text-sm text-muted hover:text-forest transition-colors">{link}</button>
                ))}
              </div>
            </div>

            {/* Social */}
            <div ref={addRef} className="lg:col-span-3">
              <h4 className="font-nav text-xs uppercase tracking-widest text-forest mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { label: 'IG', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg> },
                  { label: 'FB', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
                  { label: 'TT', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg> },
                  { label: 'EM', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/></svg> },
                ].map(social => (
                  <a key={social.label} href="#" className="w-10 h-10 rounded-full border border-forest/20 text-forest flex items-center justify-center hover:bg-forest hover:text-cream transition-all duration-200">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom doodle */}
          <div className="mt-12 pt-8 border-t border-forest/10 flex justify-between items-center">
            <p className="font-body text-xs text-muted">© 2026 Poppy Cafe. All rights reserved.</p>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-forest/20">
              <path d="M12 2C7.58 2 4 5.58 4 10c0 4.42 3.58 11 8 11s8-6.58 8-11c0-4.42-3.58-8-8-8z" />
              <path d="M12 6c-2.21 0-4 1.79-4 4" />
              <path d="M8 12c0 2.21 1.79 4 4 4" />
              <path d="M12 16c1.66 0 3-1.34 3-3" />
              <path d="M14 11c0-1.1-.9-2-2-2" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
