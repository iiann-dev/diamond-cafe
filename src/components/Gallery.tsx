import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { IMAGES } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.gallery-item', { opacity: 0, y: 40, scale: 0.95 }, {
        opacity: 1, y: 0, scale: 1, stagger: 0.08, duration: 0.7, ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
        scrollTrigger: { trigger: '.gallery-grid', start: 'top 82%', toggleActions: 'play none none none' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const galleryImages = [IMAGES.gallery1, IMAGES.gallery2, IMAGES.gallery3, IMAGES.gallery4, IMAGES.gallery5, IMAGES.gallery6];

  return (
    <section ref={sectionRef} id="gallery" className="bg-cream py-24 md:py-32">
      <div className="container-cafe">
        <div className="text-center mb-12">
          <span className="section-label justify-center mb-2">GALLERY</span>
          <h2 className="font-display text-3xl md:text-4xl text-forest">Moments at Diamond Cafe <span className="text-peach">♡</span></h2>
        </div>

        <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, i) => (
            <div key={i} className="gallery-item relative group overflow-hidden rounded-2xl aspect-square cursor-pointer">
              <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/40 transition-colors duration-300 flex items-center justify-center">
                <svg className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="4" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
