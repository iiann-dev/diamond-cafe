import { motion } from 'motion/react';
import { SITE, FEATURES, IMAGES, ORDER_URL } from '../data';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hiring Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#FDE8E6] border border-[#F5C5C0] rounded-container p-4 md:p-5 mb-8 text-center"
      >
        <h2 className="font-label-caps text-[#E05A4E] uppercase text-sm tracking-widest mb-1">
          We Are Hiring a Line Cook — Estamos Contratando Cocinero
        </h2>
        <p className="text-[#8B7E81] text-sm">
          Send us an email or visit us to express your interest. &middot; Mándanos un correo o visítanos si estás interesado.
        </p>
        <a
          href="mailto:diamondcafelunches@gmail.com"
          className="inline-block mt-2 text-[#F2766A] font-label-caps text-xs uppercase tracking-widest hover:underline"
        >
          Contact
        </a>
      </motion.div>

      {/* ─── HERO: organic split ─── */}
      <section className="relative min-h-[85vh] grid grid-cols-1 md:grid-cols-2 mb-10 overflow-hidden rounded-container">
        {/* LEFT — Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 md:py-0"
        >
          <p className="font-label-caps text-[#F2766A] uppercase tracking-[0.15em] mb-3">
            {SITE.neighborhood} — {SITE.tagline}
          </p>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-[#2D2B3A] mb-4 leading-[1.1]">
            Diamond{' '}
            <span className="text-[#F2766A] italic">Cafe</span>
          </h1>
          <p className="text-[#8B7E81] text-body-lg max-w-lg mb-8 leading-relaxed">
            Fresh coffee, homemade food, and the warmest welcome in Noe Valley.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F2766A] hover:bg-[#E05A4E] text-white px-8 py-4 rounded-xl font-label-caps text-sm hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
            >
              Order Online
            </a>
            <button
              onClick={() => navigate('/menu')}
              className="border-2 border-[#5EC4B4] text-[#5EC4B4] px-8 py-4 rounded-xl font-label-caps text-sm hover:bg-[#5EC4B4] hover:text-white hover:-translate-y-1 active:translate-y-0 transition-all duration-300 cursor-pointer"
            >
              View Menu
            </button>
          </div>
        </motion.div>

        {/* RIGHT — Image with organic wave separator + fade blend */}
        <div className="relative min-h-[50vh] md:min-h-full overflow-hidden">
          {/* The wave-clipped image */}
          <div
            className="absolute inset-0 w-[120%] -left-[10%] md:w-[115%] md:-left-[8%] h-full"
            style={{
              clipPath: `path('M 80,0 C 180,80 20,200 100,320 C 180,420 30,540 90,650 C 150,740 50,830 80,920 L 2000,920 L 2000,0 Z')`,
            }}
          >
            <img
              src={IMAGES.hero}
              alt=""
              className="w-full h-full object-cover"
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Fade blend overlay — softens the wave edge into the background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(to right, #FFF9F5 0%, rgba(255, 249, 245, 0.85) 8%, rgba(255, 249, 245, 0.3) 20%, transparent 35%)`,
            }}
          />

          {/* Decorative floating element */}
          <div
            className="absolute bottom-8 right-8 w-24 h-24 rounded-full bg-[#F4B942]/20 floating-element pointer-events-none hidden md:block"
          />
        </div>
      </section>

      {/* Features Bento */}
      <section className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="container-frame p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F2766A]/10 flex items-center justify-center mx-auto mb-3">
                {f.icon === 'coffee' && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F2766A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 8h1a4 4 0 1 1 0 8h-1" /><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8Z" /><line x1="6" y1="2" x2="6" y2="4" /><line x1="10" y1="2" x2="10" y2="4" /><line x1="14" y1="2" x2="14" y2="4" />
                  </svg>
                )}
                {f.icon === 'pastry' && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F2766A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a4 4 0 0 0-4 4c0 2 2 4 4 4s4-2 4-4a4 4 0 0 0-4-4Z" /><path d="M4 10c0 4.4 3.6 8 8 8s8-3.6 8-8" /><path d="M12 18v4" /><path d="M8 22h8" />
                  </svg>
                )}
                {f.icon === 'heart' && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F2766A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                )}
                {f.icon === 'map' && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F2766A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                )}
              </div>
              <h3 className="font-display-lg text-[18px] text-[#2D2B3A] mb-1">{f.title}</h3>
              <p className="text-[#8B7E81] text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container-frame overflow-hidden"
          >
            <img src={IMAGES.interior} alt="Diamond Cafe interior" className="w-full h-full object-cover min-h-[380px]" decoding="async" loading="lazy" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container-frame p-8 md:p-12 flex flex-col justify-center"
          >
            <p className="font-label-caps text-[#F2766A] uppercase tracking-[0.12em] mb-3">Our Story</p>
            <h2 className="font-display-lg text-headline-md text-[#2D2B3A] mb-4">A Neighborhood Gem</h2>
            <p className="text-[#8B7E81] text-sm leading-relaxed mb-6">{SITE.description}</p>
            <button
              onClick={() => navigate('/about')}
              className="self-start text-[#F2766A] font-label-caps uppercase tracking-widest hover:underline cursor-pointer"
            >
              Read More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="mb-10">
        <div className="text-center mb-8">
          <p className="font-label-caps text-[#F2766A] uppercase tracking-[0.12em] mb-2">Gallery</p>
          <h2 className="font-display-lg text-headline-md text-[#2D2B3A]">Around the Cafe</h2>
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
              <img src={img.thumb} alt={img.alt} className="w-full h-48 object-cover" loading="lazy" decoding="async" />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/gallery')}
            className="text-[#F2766A] font-label-caps uppercase tracking-widest hover:underline cursor-pointer"
          >
            View All Photos
          </button>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="mb-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container-frame p-8 md:p-12 text-center"
        >
          <h2 className="font-display-lg text-headline-md text-[#2D2B3A] mb-2">Visit Us</h2>
          <p className="text-[#8B7E81] text-sm mb-1">{SITE.address}</p>
          <p className="text-[#F2766A] font-label-caps uppercase tracking-widest mb-6">Open Daily 7:00 am — 3:00 pm</p>
          <p className="text-[#8B7E81] text-sm mb-6">
            Come stop by for a cup of <strong className="text-[#2D2B3A]">Big Mike Blend</strong> or enjoy one of our delicious breakfast meals!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F2766A] hover:bg-[#E05A4E] text-white px-8 py-4 rounded-xl font-label-caps text-sm hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
            >
              Order Online
            </a>
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-[#5EC4B4] text-[#5EC4B4] px-8 py-4 rounded-xl font-label-caps text-sm hover:bg-[#5EC4B4] hover:text-white hover:-translate-y-1 active:translate-y-0 transition-all duration-300 cursor-pointer"
            >
              Get Directions
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
