import { motion } from 'motion/react';
import { SITE } from '../data';

const ease = [0.16, 1, 0.3, 1] as const;

export default function AboutPage() {
  return (
    <div>
      {/* ═══════════════════════════════════════════════════
          HERO — Editorial split: barista / story
          ═══════════════════════════════════════════════════ */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20 pt-10">
        {/* Image — immersive, authentic cafe life */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease }}
          className="md:col-span-7 overflow-hidden rounded-[20px] md:rounded-[24px]"
        >
          <img
            src="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=360&h=440&fit=crop&q=60"
            alt="Barista preparing coffee at Diamond Cafe"
            className="w-full h-[45vh] md:h-full object-cover"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </motion.div>

        {/* Text — generous, editorial */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="md:col-span-5 flex flex-col justify-center px-5 md:px-6 lg:px-10"
        >
          <p className="font-label text-caption text-diamond-blue mb-3 tracking-[0.15em]">
            About
          </p>
          <h1 className="font-display text-display-mobile md:text-[52px] lg:text-[60px] text-rich-charcoal leading-[1.05] mb-6">
            Our <span className="text-diamond-blue italic">Story</span>
          </h1>
          <p className="text-muted-charcoal text-body leading-relaxed max-w-md">
            {SITE.description}
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          EDITORIAL MOMENT — Quote / Philosophy
          ═══════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease }}
        className="mb-20 text-center max-w-2xl mx-auto px-5"
      >
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="w-8 h-px bg-diamond-blue/20" />
          <span className="font-label text-caption text-diamond-blue tracking-[0.15em]">Our Philosophy</span>
          <span className="w-8 h-px bg-diamond-blue/20" />
        </div>
        <blockquote className="font-display text-heading-lg md:text-[36px] text-rich-charcoal leading-[1.2] mb-6">
          "A neighborhood cafe should feel like an extension of your living room — warm, familiar, and always welcoming."
        </blockquote>
        <p className="text-muted-charcoal text-body-sm">
          — The Diamond Family, Since 2010
        </p>
      </motion.section>

      {/* ═══════════════════════════════════════════════════
          VALUES — Editorial three-act rhythm
          ═══════════════════════════════════════════════════ */}
      <section className="mb-20">
        {/* Value 1 — Craftsmanship */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0, ease }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <div className="order-2 md:order-1 flex flex-col justify-center px-5 md:pr-10">
            <div className="flex items-center gap-3 mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-diamond-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5Z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
              </svg>
              <span className="font-label text-caption text-diamond-blue tracking-[0.1em]">01</span>
            </div>
            <h2 className="font-display text-heading-lg text-rich-charcoal mb-3">Crafted with Care</h2>
            <p className="text-muted-charcoal text-body leading-relaxed max-w-md">
              From the espresso pull to the pastry finish, every detail matters. We source locally and make everything from scratch. No shortcuts, no compromises.
            </p>
          </div>
          <div className="order-1 md:order-2 overflow-hidden rounded-[20px]">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&h=500&fit=crop&q=70"
              alt="Latte art being poured"
              className="w-full h-[300px] md:h-[360px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>

        {/* Value 2 — Community */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.18, ease }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <div className="order-1 overflow-hidden rounded-[20px]">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&h=500&fit=crop&q=70"
              alt="Warm cafe interior atmosphere"
              className="w-full h-[300px] md:h-[360px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="order-2 flex flex-col justify-center px-5 md:pl-10">
            <div className="flex items-center gap-3 mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-diamond-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
              </svg>
              <span className="font-label text-caption text-diamond-blue tracking-[0.1em]">02</span>
            </div>
            <h2 className="font-display text-heading-lg text-rich-charcoal mb-3">Community First</h2>
            <p className="text-muted-charcoal text-body leading-relaxed max-w-md">
              Diamond Cafe is your living room away from home. A place to gather, connect, and feel welcome. Every face that walks through our door is part of the family.
            </p>
          </div>
        </motion.div>

        {/* Value 3 — Quality */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.36, ease }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="order-2 md:order-1 flex flex-col justify-center px-5 md:pr-10">
            <div className="flex items-center gap-3 mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-diamond-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a4 4 0 0 0-4 4c0 2 2 4 4 4s4-2 4-4a4 4 0 0 0-4-4Z" /><path d="M4 10c0 4.4 3.6 8 8 8s8-3.6 8-8" /><path d="M12 18v4" /><path d="M8 22h8" />
              </svg>
              <span className="font-label text-caption text-diamond-blue tracking-[0.1em]">03</span>
            </div>
            <h2 className="font-display text-heading-lg text-rich-charcoal mb-3">Quality Ingredients</h2>
            <p className="text-muted-charcoal text-body leading-relaxed max-w-md">
              We believe great food starts with great ingredients. Locally sourced, thoughtfully prepared, and served with pride — every plate tells a story of care.
            </p>
          </div>
          <div className="order-1 md:order-2 overflow-hidden rounded-[20px]">
            <img
              src="https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?w=700&h=500&fit=crop&q=80"
              alt="Fresh coffee beans"
              className="w-full h-[300px] md:h-[360px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          EDITORIAL MOMENT — Since 2010 full-width
          ═══════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease }}
        className="mb-20 relative overflow-hidden rounded-[24px] bg-gradient-to-br from-diamond-blue/3 to-frost-white p-10 md:p-16"
      >
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-diamond-blue/5 blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-soft-champagne/20 blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <span className="font-display text-[72px] md:text-[96px] text-diamond-blue/8 leading-none select-none">✦</span>
          <h2 className="font-display text-heading-lg md:text-[42px] text-rich-charcoal mt-4 mb-4">
            Family-Run <span className="text-diamond-blue italic">Since 2010</span>
          </h2>
          <p className="text-muted-charcoal text-body-lg leading-relaxed max-w-lg mx-auto">
            What started as a dream between two siblings has grown into the neighborhood gathering spot it is today.
            Every morning at 7 AM, the espresso machine hums to life and the aroma of freshly brewed coffee fills the block.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-diamond-blue/20" />
            <span className="font-label text-caption text-diamond-blue tracking-[0.15em]">Noe Valley's Living Room</span>
            <span className="w-6 h-px bg-diamond-blue/20" />
          </div>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════
          CTA — Handcrafted invitation
          ═══════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease }}
        className="mb-20 text-center max-w-lg mx-auto px-5"
      >
        <p className="font-label text-caption text-diamond-blue mb-3 tracking-[0.15em]">
          Visit Us
        </p>
        <h2 className="font-display text-heading text-rich-charcoal mb-3">
          Come Experience Diamond Cafe
        </h2>
        <p className="text-muted-charcoal text-body leading-relaxed mb-8">
          {SITE.address}
        </p>
        <p className="font-label text-caption text-diamond-blue tracking-[0.1em] mb-1">
          Open Daily
        </p>
        <p className="font-display text-heading-sm text-rich-charcoal">
          7:00 am — 3:00 pm
        </p>
      </motion.section>
    </div>
  );
}
