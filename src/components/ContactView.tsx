import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SITE, HOURS } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function ContactView() {
  const sectionRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  // GSAP reveals
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(infoRef.current, { opacity: 0, x: -30 }, {
        opacity: 1, x: 0, duration: 0.7, ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
        scrollTrigger: { trigger: infoRef.current, start: 'top 82%', toggleActions: 'play none none none' },
      });
      gsap.fromTo(formRef.current, { opacity: 0, x: 30 }, {
        opacity: 1, x: 0, duration: 0.7, ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
        scrollTrigger: { trigger: formRef.current, start: 'top 82%', toggleActions: 'play none none none' },
      });
      gsap.fromTo(bottomRef.current, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
        scrollTrigger: { trigger: bottomRef.current, start: 'top 88%', toggleActions: 'play none none none' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section ref={sectionRef} id="contact" className="bg-cream py-24 md:py-32">
      <div className="container-cafe">
        {/* Section heading */}
        <div className="text-center mb-14">
          <span className="section-label justify-center mb-2">GET IN TOUCH</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-espresso leading-tight">
            Let's <span className="text-terracotta">connect</span>
          </h2>
          <p className="font-body text-espresso-muted mt-3 max-w-md mx-auto text-sm md:text-base">
            Drop by, say hello, or send us a message. We'd love to hear from you.
          </p>
        </div>

        {/* Split layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* ─── INFO SIDE ─── */}
          <div ref={infoRef} className="space-y-6">
            <div className="card-glass p-6 md:p-8 space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-terracotta">
                    <path d="M12 22s-8-5.5-8-10a8 8 0 1116 0c0 4.5-8 10-8 10z" />
                    <circle cx="12" cy="10" r="2.5" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-body font-semibold text-espresso text-sm uppercase tracking-wider mb-1">Visit Us</h3>
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`} target="_blank" rel="noopener noreferrer" className="font-body text-espresso-light hover:text-terracotta transition-colors text-sm leading-relaxed block">
                    {SITE.address}
                  </a>
                  <span className="font-body text-espresso-muted text-xs">{SITE.neighborhood}</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-terracotta">
                    <rect x="2" y="4" width="20" height="16" rx="3" />
                    <path d="M2 4l10 8 10-8" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-body font-semibold text-espresso text-sm uppercase tracking-wider mb-1">Email</h3>
                  <a href={`mailto:${SITE.email}`} className="font-body text-espresso-light hover:text-terracotta transition-colors text-sm break-all">
                    {SITE.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-terracotta">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.2 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-body font-semibold text-espresso text-sm uppercase tracking-wider mb-1">Phone</h3>
                  <a href={`tel:${SITE.phone.replace(/\D/g, '')}`} className="font-body text-espresso-light hover:text-terracotta transition-colors text-sm">
                    {SITE.phone}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-terracotta">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-body font-semibold text-espresso text-sm uppercase tracking-wider mb-2">Hours</h3>
                  <div className="space-y-1.5">
                    {HOURS.map((d, i) => (
                      <div key={i} className="flex justify-between text-sm font-body">
                        <span className="text-espresso-light">{d.day}</span>
                        <span className="text-terracotta font-medium">{d.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="arch-frame relative h-[200px] md:h-[240px] bg-sage/20 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-terracotta/10 via-transparent to-sage/20" />
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 flex flex-col items-center gap-2 text-espresso-light hover:text-terracotta transition-colors group"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:scale-105 transition-transform">
                  <path d="M12 22s-8-5.5-8-10a8 8 0 1116 0c0 4.5-8 10-8 10z" />
                  <circle cx="12" cy="10" r="3" fill="currentColor" stroke="none" />
                </svg>
                <span className="font-body text-sm font-semibold">Find Us</span>
                <span className="font-body text-xs text-espresso-muted">Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* ─── FORM SIDE ─── */}
          <div ref={formRef}>
            <div className="card-glass p-6 md:p-8">
              <h3 className="font-display text-xl text-espresso mb-1">Send a message</h3>
              <p className="font-body text-espresso-muted text-sm mb-6">
                We'll get back to you as soon as we can.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="font-body text-espresso text-sm font-semibold block mb-1.5">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-white border border-border rounded-2xl p-4 font-body text-espresso text-sm placeholder:text-espresso-muted/50 outline-none transition-all duration-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="font-body text-espresso text-sm font-semibold block mb-1.5">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="hello@example.com"
                    className="w-full bg-white border border-border rounded-2xl p-4 font-body text-espresso text-sm placeholder:text-espresso-muted/50 outline-none transition-all duration-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="font-body text-espresso text-sm font-semibold block mb-1.5">Message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    className="w-full bg-white border border-border rounded-2xl p-4 font-body text-espresso text-sm placeholder:text-espresso-muted/50 outline-none transition-all duration-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 resize-none"
                  />
                </div>

                <button type="submit" className="btn-accent w-full justify-center">
                  {submitted ? (
                    <span className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Message sent!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 2L11 13" />
                        <path d="M22 2L15 22L11 13L2 9L22 2z" />
                      </svg>
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ─── BOTTOM CTA ─── */}
        <div ref={bottomRef} className="mt-16 text-center">
          <div className="card-glass inline-block p-6 md:p-8 max-w-xl mx-auto">
            <div className="flex flex-col items-center gap-3">
              <span className="font-script text-terracotta text-lg">♡</span>
              <h3 className="font-display text-2xl text-espresso">
                Come see us
              </h3>
              <p className="font-body text-espresso-muted text-sm leading-relaxed max-w-sm">
                We're in the heart of <strong className="text-espresso font-semibold">{SITE.neighborhood}</strong> —{' '}
                grab a coffee, stay a while.
              </p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 22s-8-5.5-8-10a8 8 0 1116 0c0 4.5-8 10-8 10z" />
                  <circle cx="12" cy="10" r="3" fill="currentColor" stroke="none" />
                </svg>
                {SITE.address}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
