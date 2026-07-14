import { motion } from 'motion/react';
import { SITE, FEATURES, IMAGES } from '../data';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden rounded-container mb-12">
        <div className="absolute inset-0">
          <img src={IMAGES.hero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4 py-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-label-caps text-primary uppercase tracking-[0.15em] mb-4"
          >
            Noe Valley since 2010
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display-lg text-display-lg-mobile md:text-display-lg text-text-warm-white mb-6"
          >
            Diamond <span className="text-primary">Cafe</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-stone text-body-lg max-w-2xl mx-auto mb-8"
          >
            Fresh coffee, homemade food, and the warmest welcome in Noe Valley.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button
              onClick={() => navigate('/menu')}
              className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-caps hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              VIEW MENU
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border border-primary text-primary px-8 py-4 rounded-lg font-label-caps hover:bg-primary/10 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              FIND US
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Bento */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="container-frame p-8 flex items-start gap-5"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0 mt-1">
                {f.icon === 'coffee' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8634C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 8h1a4 4 0 1 1 0 8h-1" /><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8Z" /><line x1="6" y1="2" x2="6" y2="4" /><line x1="10" y1="2" x2="10" y2="4" /><line x1="14" y1="2" x2="14" y2="4" />
                  </svg>
                )}
                {f.icon === 'pastry' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8634C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a4 4 0 0 0-4 4c0 2 2 4 4 4s4-2 4-4a4 4 0 0 0-4-4Z" /><path d="M4 10c0 4.4 3.6 8 8 8s8-3.6 8-8" /><path d="M12 18v4" /><path d="M8 22h8" />
                  </svg>
                )}
                {f.icon === 'heart' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8634C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                )}
                {f.icon === 'map' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8634C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                )}
              </div>
              <div>
                <h3 className="font-display-lg text-headline-md text-primary mb-2">{f.title}</h3>
                <p className="text-muted-stone text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container-frame overflow-hidden"
          >
            <img src={IMAGES.interior} alt="Diamond Cafe interior" className="w-full h-full object-cover min-h-[400px]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container-frame p-8 md:p-12 flex flex-col justify-center"
          >
            <p className="font-label-caps text-primary uppercase tracking-[0.12em] mb-3">Our Story</p>
            <h2 className="font-display-lg text-headline-md text-text-warm-white mb-4">A Neighborhood Gem</h2>
            <p className="text-muted-stone text-sm leading-relaxed mb-6">{SITE.fullStory}</p>
            <button
              onClick={() => navigate('/about')}
              className="self-start text-primary font-label-caps uppercase tracking-widest hover:opacity-80 transition-opacity cursor-pointer"
            >
              Read More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <p className="font-label-caps text-primary uppercase tracking-[0.12em] mb-2">Gallery</p>
          <h2 className="font-display-lg text-headline-md text-text-warm-white">Around the Cafe</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {IMAGES.gallery.slice(0, 4).map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="container-frame overflow-hidden"
            >
              <img src={img.src} alt={img.alt} className="w-full h-48 object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/gallery')}
            className="text-primary font-label-caps uppercase tracking-widest hover:opacity-80 transition-opacity cursor-pointer"
          >
            View All Photos
          </button>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container-frame p-8 md:p-12 text-center"
        >
          <h2 className="font-display-lg text-headline-md text-text-warm-white mb-3">Visit Us</h2>
          <p className="text-muted-stone text-sm mb-2">751 Diamond Street, San Francisco</p>
          <p className="text-primary font-label-caps uppercase tracking-widest mb-6">Open Daily 7:00 am — 3:00 pm</p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-caps hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            GET DIRECTIONS
          </button>
        </motion.div>
      </section>
    </div>
  );
}
