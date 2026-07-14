import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IMAGES } from '../data';

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div>
      <div className="text-center mb-10 pt-8">
        <p className="font-label-caps text-primary uppercase tracking-[0.12em] mb-2">Gallery</p>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-text-warm-white">
          Around the <span className="text-primary">Cafe</span>
        </h1>
      </div>

      {/* Masonry bento grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {IMAGES.gallery.map((img, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            onClick={() => setLightbox(i)}
            className={`container-frame overflow-hidden cursor-pointer text-left ${
              img.span === 'tall' ? 'row-span-2' : ''
            } ${img.span === 'wide' ? 'col-span-2' : ''} ${
              img.span === 'big' ? 'col-span-2 row-span-2' : ''
            }`}
          >
            <img src={img.thumb} srcSet={`${img.thumb} 200w, ${img.src} 600w`} sizes="(max-width: 768px) 50vw, 33vw" alt={img.alt} className="w-full h-full object-cover min-h-[200px]" loading="lazy" decoding="async" />
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          >
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
              className="absolute top-6 right-6 text-white/70 hover:text-white z-10 cursor-pointer"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <motion.img
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={IMAGES.gallery[lightbox].src}
              alt={IMAGES.gallery[lightbox].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
              decoding="async"
            />
            <div className="absolute bottom-8 flex gap-3">
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox === 0 ? IMAGES.gallery.length - 1 : lightbox - 1); }}
                className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox === IMAGES.gallery.length - 1 ? 0 : lightbox + 1); }}
                className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
