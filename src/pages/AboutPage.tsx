import { motion } from 'motion/react';
import { SITE } from '../data';

const ease = [0.16, 1, 0.3, 1] as const;

export default function AboutPage() {
  return (
    <div>
      {/* ═══════════════════════════════════════════════════
          CHAPTER 1 — Our Story
          Calm, centered editorial introduction
          ═══════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease }}
        className="mb-24 pt-16 md:pt-28 text-center max-w-3xl mx-auto px-5 md:px-8"
      >
        <p className="font-label text-caption text-diamond-blue mb-4 tracking-[0.15em]">
          About Diamond Cafe
        </p>
        <h1 className="font-display text-display-mobile md:text-[56px] lg:text-[68px] text-rich-charcoal leading-[1.05] mb-6">
          Our <span className="text-diamond-blue italic">Story</span>
        </h1>
        <div className="w-12 h-[2px] bg-diamond-blue/20 mx-auto mb-8" />
        <p className="text-muted-charcoal text-body-lg md:text-[18px] leading-relaxed max-w-xl mx-auto text-pretty">
          Nestled in the heart of Noe Valley, Diamond Cafe is a minority-owned family treasure.
          With Mike and Gaby at the helm — bringing over two decades of culinary expertise —
          we serve crepes, breakfast favorites, and the kind of warmth that turns first-time
          visitors into regulars. Since opening our doors in 2014, your support has been our
          backbone. Here's to celebrating 10 incredible years together.
        </p>
      </motion.section>

      {/* ═══════════════════════════════════════════════════
          CHAPTER 2 — Editorial Photography
          Full-width visual pause — emotional bridge
          ═══════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease }}
        className="mb-24 px-5 md:px-0"
      >
        <div className="max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-[24px] shadow-[0_8px_40px_-8px_rgba(0,0,0,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1400&h=550&fit=crop&q=80"
              alt="Warm cafe atmosphere at Diamond Cafe"
              className="w-full h-[300px] md:h-[500px] object-cover"
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="mt-4 text-center">
            <span className="inline-block font-label text-[11px] text-faint-charcoal/50 tracking-[0.12em] uppercase">
              — Morning light on Diamond Street —
            </span>
          </div>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════
          CHAPTER 3 — Our Philosophy
          Emotional centerpiece — editorial statement
          ═══════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease }}
        className="mb-24 text-center max-w-3xl mx-auto px-5 md:px-8"
      >
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="w-10 h-px bg-diamond-blue/15" />
          <span className="font-label text-caption text-diamond-blue tracking-[0.15em]">Our Philosophy</span>
          <span className="w-10 h-px bg-diamond-blue/15" />
        </div>
        <blockquote className="font-display text-[28px] md:text-[40px] lg:text-[44px] text-rich-charcoal leading-[1.15] mb-8 text-pretty">
          "A neighborhood cafe should feel like an extension of your living room — warm, familiar, and always welcoming."
        </blockquote>
        <div className="flex items-center justify-center gap-3">
          <span className="w-6 h-px bg-diamond-blue/10" />
          <span className="font-label text-caption text-diamond-blue tracking-[0.15em]">The Diamond Family</span>
          <span className="w-6 h-px bg-diamond-blue/10" />
        </div>
        <p className="text-muted-charcoal text-body-sm mt-2 opacity-60">
          Since 2014
        </p>
      </motion.section>

      {/* ═══════════════════════════════════════════════════
          CHAPTER 4 — Core Values
          Alternating rhythm — image left/text right & vice versa
          ═══════════════════════════════════════════════════ */}
      <section className="mb-24">
        {/* Value 1 — Craftsmanship: Text Left / Image Right */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0, ease }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:mb-20 max-w-5xl mx-auto px-5"
        >
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-label text-[11px] text-diamond-blue/40 tracking-[0.15em]">01</span>
              <span className="w-8 h-px bg-diamond-blue/15" />
            </div>
            <h2 className="font-display text-[32px] md:text-[38px] text-rich-charcoal leading-[1.1] mb-4">
              Crafted with <span className="text-diamond-blue italic">Care</span>
            </h2>
            <p className="text-muted-charcoal text-body leading-relaxed max-w-md text-pretty">
              From the espresso pull to the pastry finish, every detail matters. We source locally
              and make everything from scratch. No shortcuts, no compromises — just honest food
              made with intention.
            </p>
          </div>
          <div className="overflow-hidden rounded-[20px] shadow-[0_4px_24px_-6px_rgba(0,0,0,0.06)]">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&h=520&fit=crop&q=70"
              alt="Latte art being poured"
              className="w-full h-[320px] md:h-[400px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>

        {/* Value 2 — Community: Image Left / Text Right */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.18, ease }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:mb-20 max-w-5xl mx-auto px-5"
        >
          <div className="order-2 md:order-2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-label text-[11px] text-diamond-blue/40 tracking-[0.15em]">02</span>
              <span className="w-8 h-px bg-diamond-blue/15" />
            </div>
            <h2 className="font-display text-[32px] md:text-[38px] text-rich-charcoal leading-[1.1] mb-4">
              Community <span className="text-diamond-blue italic">First</span>
            </h2>
            <p className="text-muted-charcoal text-body leading-relaxed max-w-md text-pretty">
              Diamond Cafe is your living room away from home. A place to gather, connect, and feel
              welcome. Every face that walks through our door becomes part of the family — regulars
              and newcomers alike.
            </p>
          </div>
          <div className="order-1 md:order-1 overflow-hidden rounded-[20px] shadow-[0_4px_24px_-6px_rgba(0,0,0,0.06)]">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&h=520&fit=crop&q=70"
              alt="Warm cafe interior atmosphere"
              className="w-full h-[320px] md:h-[400px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>

        {/* Value 3 — Quality: Text Left / Image Right */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.36, ease }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-5"
        >
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-label text-[11px] text-diamond-blue/40 tracking-[0.15em]">03</span>
              <span className="w-8 h-px bg-diamond-blue/15" />
            </div>
            <h2 className="font-display text-[32px] md:text-[38px] text-rich-charcoal leading-[1.1] mb-4">
              Quality <span className="text-diamond-blue italic">Ingredients</span>
            </h2>
            <p className="text-muted-charcoal text-body leading-relaxed max-w-md text-pretty">
              We believe great food starts with great ingredients. Locally sourced, thoughtfully
              prepared, and served with pride — every plate tells a story of care from farm to table.
            </p>
          </div>
          <div className="overflow-hidden rounded-[20px] shadow-[0_4px_24px_-6px_rgba(0,0,0,0.06)]">
            <img
              src="https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?w=700&h=520&fit=crop&q=80"
              alt="Fresh coffee beans"
              className="w-full h-[320px] md:h-[400px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CLOSING — Since 2014 + Visit
          Warm invitation with subtle depth
          ═══════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease }}
        className="mb-24 relative overflow-hidden rounded-[24px] bg-gradient-to-br from-diamond-blue/[0.04] via-frost-white to-soft-champagne/20 max-w-5xl mx-auto px-5 md:px-0"
        style={{ padding: 'clamp(2.5rem, 5vw, 4rem)' }}
      >
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-diamond-blue/[0.04] blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-soft-champagne/20 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <span className="font-display text-[80px] md:text-[100px] text-diamond-blue/[0.06] leading-none select-none tracking-tighter">
            ✦
          </span>
          <h2 className="font-display text-[34px] md:text-[42px] text-rich-charcoal leading-[1.1] mt-4 mb-3">
            Family-Run <span className="text-diamond-blue italic">Since 2014</span>
          </h2>
          <p className="text-muted-charcoal text-body-lg leading-relaxed max-w-md mx-auto mb-8 text-pretty">
            What started as a dream between two siblings has grown into the heart of the neighborhood.
            Stop by and taste the difference that fifteen years of care makes.
          </p>

          <div className="w-px h-8 bg-diamond-blue/15 mx-auto mb-6" />

          <p className="font-label text-caption text-diamond-blue mb-2 tracking-[0.15em]">
            Visit Us
          </p>
          <p className="font-display text-heading text-rich-charcoal mb-2">
            {SITE.address}
          </p>
          <p className="text-muted-charcoal text-body-sm mb-1">
            Open Daily
          </p>
          <p className="text-muted-charcoal text-body-sm">
            7:00 am — 3:00 pm
          </p>
        </div>
      </motion.section>
    </div>
  );
}
