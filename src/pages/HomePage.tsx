import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SITE, FEATURES, IMAGES } from '../data';

export default function HomePage() {
  return (
    <div className="pt-[64px]">
      {/* ─── Hero: Organic Blob Bento ─── */}
      <section className="container-diamond pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Hero text — large bento */}
          <div className="md:col-span-7 bento-card p-8 md:p-12 flex flex-col justify-center">
            <span className="section-eyebrow">{SITE.neighborhood}</span>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.1] text-white mb-4">
              Good Coffee,
              <br />
              <span className="text-gradient">Happy People.</span>
            </h1>
            <p className="text-white/50 text-lg max-w-md mb-8 leading-relaxed">
              {SITE.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu" className="btn-primary">
                View Menu
                <span className="text-xs opacity-70">→</span>
              </Link>
              <Link to="/contact" className="btn-secondary">
                Visit Us
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/5">
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider">Open Daily</p>
                <p className="text-white text-sm font-medium">{SITE.hours}</p>
              </div>
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider">Since</p>
                <p className="text-white text-sm font-medium">{SITE.founded}</p>
              </div>
            </div>
          </div>

          {/* Hero image — organic blob shape */}
          <div className="md:col-span-5 bento-card overflow-hidden relative min-h-[300px] md:min-h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-amethyst-500/20 to-coral-400/20 mix-blend-overlay z-10" />
            <img
              src={IMAGES.hero}
              alt="Diamond Cafe interior"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ink/60 backdrop-blur-md border border-white/10">
                <span className="w-2 h-2 rounded-full bg-coral-400 animate-sparkle" />
                <span className="text-white/80 text-xs">Open now</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features: 4-card bento grid ─── */}
      <section className="container-diamond pb-16 md:pb-24">
        <div className="text-center mb-12">
          <span className="section-eyebrow">Why Diamond</span>
          <h2 className="font-display text-3xl md:text-5xl text-white">
            Crafted with <span className="text-gradient">Love</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              className="bento-card p-6 md:p-8 text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-white font-display text-lg mb-2">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── About Preview: split bento ─── */}
      <section className="container-diamond pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-5 bento-card overflow-hidden min-h-[300px] relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-amethyst-600/30 to-transparent z-10" />
            <img
              src={IMAGES.interior}
              alt="Cozy cafe corner"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-7 bento-card p-8 md:p-12 flex flex-col justify-center">
            <span className="section-eyebrow">Our Story</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              A Neighborhood
              <br />
              <span className="text-gradient">Gathering Place</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-6 max-w-xl">
              {SITE.fullStory}
            </p>
            <div>
              <Link to="/about" className="btn-secondary">
                Read More
                <span className="text-xs opacity-70">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Gallery Preview bento ─── */}
      <section className="container-diamond pb-16 md:pb-24">
        <div className="text-center mb-12">
          <span className="section-eyebrow">Moments</span>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
            A Glimpse of <span className="text-gradient">Diamond</span>
          </h2>
          <p className="text-white/40 max-w-md mx-auto">Peek inside our little corner of Noe Valley.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {IMAGES.gallery.slice(0, 4).map((img, i) => (
            <motion.div
              key={i}
              className={`bento-card overflow-hidden aspect-square relative ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            >
              <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/gallery" className="btn-secondary">
            View All Photos
            <span className="text-xs opacity-70">→</span>
          </Link>
        </div>
      </section>

      {/* ─── Visit / CTA bento ─── */}
      <section className="container-diamond pb-24">
        <div className="bento-card p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amethyst-500/10 via-transparent to-coral-400/10" />
          <div className="relative z-10">
            <span className="section-eyebrow">Visit Us</span>
            <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
              Come Say <span className="text-gradient">Hello</span>
            </h2>
            <p className="text-white/50 max-w-md mx-auto mb-8">
              {SITE.address}. Open daily {SITE.hours}. We can't wait to meet you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get Directions
                <span className="text-xs opacity-70">↗</span>
              </Link>
              <a
                href="#"
                className="btn-secondary"
                onClick={(e) => { e.preventDefault(); window.open('https://order.diamondcafesf.com', '_blank'); }}
              >
                Order Online
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
