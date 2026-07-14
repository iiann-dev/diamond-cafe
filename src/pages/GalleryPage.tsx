import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IMAGES } from '../data';

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="pt-[64px]">
      <section className="container-diamond pt-16 md:pt-24 pb-8">
        <div className="max-w-2xl">
          <span className="section-eyebrow">Gallery</span>
          <h1 className="font-display text-4xl md:text-6xl text-white mb-4">
            A Visual <span className="text-gradient">Diamond</span>
          </h1>
          <p className="text-white/50 text-lg">Come take a peek inside our cozy Noe Valley corner.</p>
        </div>
      </section>

      {/* ─── Masonry Bento Grid ─── */}
      <section className="container-diamond pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {IMAGES.gallery.map((img, i) => {
            let spanClass = '';
            if (img.span === 'wide') spanClass = 'md:col-span-2';
            else if (img.span === 'tall') spanClass = 'md:row-span-2';
            else if (img.span === 'big') spanClass = 'md:col-span-2 md:row-span-2';

            return (
              <motion.button
                key={i}
                className={`bento-card overflow-hidden relative group cursor-pointer ${spanClass}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ aspectRatio: img.span === 'tall' ? '3/4' : img.span === 'wide' ? '4/3' : '1/1' }}
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white/0 group-hover:text-white/80 text-xs uppercase tracking-widest transition-all duration-300">
                    View
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* ─── Lightbox ─── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-xl flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={() => setLightbox(null)}
            >
              ✕
            </button>

            {/* Prev */}
            {lightbox > 0 && (
              <button
                className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
              >
                ←
              </button>
            )}

            {/* Next */}
            {lightbox < IMAGES.gallery.length - 1 && (
              <button
                className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
              >
                →
              </button>
            )}

            <motion.img
              key={lightbox}
              src={IMAGES.gallery[lightbox].src}
              alt={IMAGES.gallery[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {lightbox + 1} / {IMAGES.gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
