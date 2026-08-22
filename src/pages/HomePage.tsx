import { motion, useScroll, useTransform } from 'motion/react';
import { SITE, FEATURES, IMAGES, ORDER_URL } from '../data';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { useSiteData } from '../context/SiteDataContext';
import { urlFor, type SanityImageSource } from '../lib/sanity';
import Seo from '../components/Seo';
import { buildRestaurantJsonLd } from '../lib/seo';

export default function HomePage() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const { siteInfo, hero, features, gallery, menuItems, categories } = useSiteData();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const imageParallax = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  // ── CMS-only resolution ──────────────────────────────────────
  const heroImage = hero?.image ? urlFor(hero.image).width(1400).url() : '';

  // Preload hero image for faster LCP
  useEffect(() => {
    if (heroImage) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = heroImage;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
      return () => {
        // Cleanup: remove preload link on unmount
        const existing = document.querySelector(`link[rel="preload"][as="image"][href="${heroImage}"]`);
        existing?.remove();
      };
    }
  }, [heroImage]);

  const eyebrow = hero?.eyebrow || siteInfo?.neighborhood || SITE.neighborhood;
  const headlineTop = hero?.headlineTop || 'Diamond';
  const headlineAccent = hero?.headlineAccent || 'Cafe';
  const subheadline = hero?.subheadline || 'Fresh coffee, homemade food, and the warmest welcome in Noe Valley.';
  const orderUrl = siteInfo?.orderUrl || ORDER_URL;
  const sinceBadge = hero?.sinceBadge || `Since ${siteInfo?.founded || SITE.founded}`;

  const featureList = features.length > 0 ? features : FEATURES;
  const description = siteInfo?.description || SITE.description;
  const address = siteInfo?.address || SITE.address;
  const hoursLabel = siteInfo?.hoursLabel || SITE.days;
  const hoursRange = siteInfo?.hoursRange || SITE.hours;

  const galleryPreview = gallery.length > 0
    ? gallery.slice(0, 4)
    : IMAGES.gallery.slice(0, 4);

  return (
    <div>
      <Seo
        page="home"
        path="/"
        description={siteInfo?.description || undefined}
        jsonLd={buildRestaurantJsonLd({ siteInfo, menuItems, categories })}
      />
      {/* ═══════════════════════════════════════════════════
          HERO — Desktop: cinematic split w/ organic blend
          Mobile:  image-first vertical storytelling
          ═══════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative mb-16 md:mb-20 overflow-hidden"
      >
        {/* ─── Shared ambient background glow ─── */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[10%] left-[5%] w-[50%] h-[40%] rounded-full bg-diamond-blue/4 blur-[100px]" />
          <div className="absolute top-[30%] right-[5%] w-[40%] h-[50%] rounded-full bg-soft-champagne/25 blur-[80px]" />
        </div>

        {/* ═══════════════════════════════════════════════
            MOBILE HERO (< 768px)
            Composition: Nav → Image → Text → CTAs
            ═══════════════════════════════════════════════ */}
        <div className="block md:hidden">
          {/* Image — emotional anchor, mobile-first */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-4 mt-20 overflow-hidden"
            style={{ borderRadius: '24px', height: '40vh', minHeight: '280px' }}
          >
            <img
              src={heroImage}
              alt=""
              className="w-full h-full object-cover"
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
            {/* Bottom fade — seamless blend into content */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-frost-white via-frost-white/60 to-transparent pointer-events-none" />
            {/* Top-right light caress */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-white/15 to-transparent pointer-events-none" />
          </motion.div>

          {/* Content — generous air around every element */}
          <div className="px-5 -mt-2 relative z-10">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-label text-caption text-diamond-blue mb-4 tracking-[0.15em]"
            >
              {eyebrow}
            </motion.p>

            {/* Heading — editorial, natural wrap */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-display-mobile text-rich-charcoal leading-[1.08] mb-5"
            >
              {headlineTop}{' '}
              <span className="relative inline-block">
                <span className="text-diamond-blue italic">{headlineAccent}</span>
                <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-diamond-blue/60 via-diamond-blue/30 to-transparent rounded-full" />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-muted-charcoal text-body leading-relaxed mb-10 max-w-sm"
            >
              {subheadline}
            </motion.p>

            {/* CTAs — stacked vertical, premium touch targets */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3 pb-2"
            >
              <a
                href={orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-primary w-full justify-center py-[18px]"
              >
                {hero?.primaryCtaLabel || 'Order Online'}
              </a>
              <button
                onClick={() => navigate(hero?.secondaryCtaTarget || '/menu')}
                className="btn-hero-secondary w-full justify-center py-[18px]"
              >
                {hero?.secondaryCtaLabel || 'View Menu'}
              </button>
            </motion.div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            TABLET & DESKTOP HERO (≥ 768px)
            Overlap layout — image bleeds into text territory
            ═══════════════════════════════════════════════ */}
        <div className="hidden md:block relative min-h-[90vh]">
          {/* ─── Ambient glow ─── */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-[20%] left-[15%] w-[60%] h-[50%] rounded-full bg-diamond-blue/4 blur-[120px]" />
            <div className="absolute top-[40%] right-[10%] w-[40%] h-[60%] rounded-full bg-soft-champagne/30 blur-[100px]" />
          </div>

          {/* LEFT — Content */}
          <div className="relative z-20 w-1/2 h-full flex flex-col justify-center px-12 lg:px-16 xl:px-20 py-24">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-label text-caption text-diamond-blue mb-4 tracking-[0.15em]"
            >
              {eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-display lg:text-[64px] xl:text-[72px] text-rich-charcoal leading-[1.05] mb-6 max-w-xl"
            >
              {headlineTop}{' '}
              <span className="relative inline-block">
                <span className="text-diamond-blue italic">{headlineAccent}</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-diamond-blue/60 via-diamond-blue/30 to-transparent rounded-full" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-muted-charcoal text-body-lg leading-relaxed max-w-lg mb-10"
            >
              {subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-primary"
              >
                <span className="relative z-10">{hero?.primaryCtaLabel || 'Order Online'}</span>
              </a>
              <button
                onClick={() => navigate(hero?.secondaryCtaTarget || '/menu')}
                className="btn-hero-secondary"
              >
                {hero?.secondaryCtaLabel || 'View Menu'}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="absolute bottom-8 left-12 lg:left-16 xl:left-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-px h-8 bg-gradient-to-b from-diamond-blue/20 to-transparent" />
                <span className="text-[10px] font-label text-faint-charcoal tracking-[0.12em] uppercase">
                  {sinceBadge}
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Image bleeds into left territory */}
                    <div className="absolute inset-y-0 right-0 w-[58%] lg:w-[56%] xl:w-[55%] overflow-hidden rounded-[32px] lg:rounded-[40px] xl:rounded-[48px] border border-diamond-blue/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)]">
                      <motion.div
                        style={{ y: imageParallax }}
                        className="absolute inset-0 w-[115%] lg:w-[112%] xl:w-[110%] h-[115%] -top-[7.5%]"
                      >
                        <img
                          src={heroImage}
                          alt=""
                          className="w-full h-full object-cover scale-105"
                          fetchPriority="high"
                          loading="eager"
                          decoding="async"
                          width="1400"
                          height="1600"
                        />

                        {/* Gradient bridge — image dissolves into text side */}
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background: `linear-gradient(
                              to right,
                              var(--color-frost-white) 0%,
                              rgba(250, 249, 247, 0.85) 10%,
                              transparent 28%
                            )`,
                          }}
                        />
                      </motion.div>

                      {/* Crystal highlight reflection */}
                      <div className="absolute top-[15%] right-[8%] w-[30%] h-[20%] pointer-events-none opacity-40">
                        <div className="w-full h-full bg-gradient-to-br from-white/30 via-white/5 to-transparent rounded-full blur-[60px]" />
                      </div>

                      {/* Bottom fade */}
                      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-frost-white to-transparent pointer-events-none" />
                    </div>
                  </div>
                </section>

      {/* Features Bento */}
      <section className="mb-16 md:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {featureList.map((f, i) => (
            <motion.div
              key={f.title || i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="porcelain-card p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-diamond-blue/8 flex items-center justify-center mx-auto mb-3">
                {f.icon === 'coffee' && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-diamond-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 8h1a4 4 0 1 1 0 8h-1" /><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8Z" /><line x1="6" y1="2" x2="6" y2="4" /><line x1="10" y1="2" x2="10" y2="4" /><line x1="14" y1="2" x2="14" y2="4" />
                  </svg>
                )}
                {f.icon === 'pastry' && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-diamond-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a4 4 0 0 0-4 4c0 2 2 4 4 4s4-2 4-4a4 4 0 0 0-4-4Z" /><path d="M4 10c0 4.4 3.6 8 8 8s8-3.6 8-8" /><path d="M12 18v4" /><path d="M8 22h8" />
                  </svg>
                )}
                {f.icon === 'heart' && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-diamond-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                )}
                {f.icon === 'map' && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-diamond-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                )}
                {f.icon === 'star' && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-diamond-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                )}
                {f.icon === 'leaf' && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-diamond-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
                )}
                {f.icon === 'users' && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-diamond-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                )}
              </div>
              <h3 className="font-display text-heading-sm text-rich-charcoal mb-1">{f.title}</h3>
              <p className="text-muted-charcoal text-sm leading-relaxed">{(f as { description?: string }).description ?? (f as { desc?: string }).desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="mb-16 md:mb-20 ambient-warm rounded-[24px] p-5 md:p-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="img-frame overflow-hidden">
            <img src={IMAGES.interior} alt="Diamond Cafe interior" className="w-full h-full object-cover min-h-[280px]" decoding="async" loading="lazy" />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="porcelain-card p-8 md:p-12 flex flex-col justify-center"
          >
            <p className="font-label text-caption text-diamond-blue mb-3">Our Story</p>
            <h2 className="font-display text-heading text-rich-charcoal mb-4">A Neighborhood Gem</h2>
            <p className="text-muted-charcoal text-sm leading-relaxed mb-6">{description}</p>
            <button
              onClick={() => navigate('/about')}
              className="self-start text-diamond-blue font-label text-caption hover:underline cursor-pointer"
            >
              Read More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="mb-16 md:mb-20">
        <div className="text-center mb-8">
          <p className="font-label text-caption text-diamond-blue mb-2">Gallery</p>
          <h2 className="font-display text-heading text-rich-charcoal">Around the Cafe</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryPreview.map((img, i) => {
            const g = img as { _id?: string; image?: unknown; thumb?: string; alt?: string }
            return (
              <div
                key={g._id ?? i}
                className="img-frame overflow-hidden"
              >
                <img
                  src={g.image ? urlFor(g.image as SanityImageSource).width(600).url() : g.thumb}
                  alt={g.alt || ''}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )
          })}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/gallery')}
            className="text-diamond-blue font-label text-caption hover:underline cursor-pointer"
          >
            View All Photos
          </button>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="mb-16 md:mb-20">
        <div className="glass-card p-8 md:p-12 text-center">
          <h2 className="font-display text-heading text-rich-charcoal mb-2">Visit Us</h2>
          <p className="text-muted-charcoal text-sm mb-1">{address}</p>
          <p className="text-diamond-blue font-label text-caption mb-6">{hoursLabel} {hoursRange}</p>
          <p className="text-muted-charcoal text-sm mb-6">
            Come stop by for a cup of <strong className="text-rich-charcoal">Big Mike Blend</strong> or enjoy one of our delicious breakfast meals!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Order Online
            </a>
            <button
              onClick={() => navigate('/contact')}
              className="btn-outline"
            >
              Get Directions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
