import { useRef, useState, useEffect } from 'react';
import { SITE, HOURS } from '../data';

const dirsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.address)}`;

function LazyMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="img-frame min-h-[200px] md:min-h-full">
      {loaded ? (
        <iframe
          src={SITE.mapEmbed}
          width="100%"
          height="100%"
          className="min-h-[200px] md:min-h-full"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Diamond Cafe location"
        />
      ) : (
        <a
          href={dirsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full min-h-[200px] md:min-h-[300px] bg-diamond-mist flex flex-col items-center justify-center gap-3 p-8 text-center hover:bg-soft-ice transition-colors block group"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-diamond-blue)" strokeWidth="1.5" strokeLinecap="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" />
          </svg>
          <span className="text-diamond-blue font-label text-caption mb-1">{SITE.address}</span>
          <span className="text-diamond-blue font-label text-caption underline group-hover:no-underline">Open in Google Maps</span>
        </a>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 pt-8">
        <div className="porcelain-card p-8 md:p-12 flex flex-col justify-center">
          <p className="font-label text-caption text-diamond-blue mb-2">Contact</p>
          <h1 className="font-display text-display-mobile md:text-display text-rich-charcoal mb-6">
            Find <span className="text-diamond-blue">Us</span>
          </h1>
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-diamond-blue)" strokeWidth="1.5" strokeLinecap="round" className="mt-0.5 shrink-0">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <p className="text-rich-charcoal text-body font-semibold">Address</p>
                <p className="text-muted-charcoal text-body">{SITE.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-diamond-blue)" strokeWidth="1.5" strokeLinecap="round" className="mt-0.5 shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              <div>
                <p className="text-rich-charcoal text-body font-semibold">Phone</p>
                <p className="text-muted-charcoal text-body">{SITE.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-diamond-blue)" strokeWidth="1.5" strokeLinecap="round" className="mt-0.5 shrink-0">
                <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <div>
                <p className="text-rich-charcoal text-body font-semibold">Email</p>
                <p className="text-muted-charcoal text-body">{SITE.email}</p>
              </div>
            </div>
          </div>
          <a
            href={dirsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Get Directions
          </a>
        </div>

        <LazyMap />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <div className="glass-card p-8">
          <h2 className="font-display text-heading text-rich-charcoal mb-6">Hours</h2>
          <div className="space-y-3">
            {HOURS.map((h) => (
              <div key={h.day} className="flex justify-between items-center py-2 border-b border-border-faint last:border-0">
                <span className="text-muted-charcoal text-body">{h.day}</span>
                <span className="text-rich-charcoal text-body font-semibold">{h.hours}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-crystal-edge rounded-lg">
            <p className="text-diamond-blue font-label text-caption mb-1">Neighborhood</p>
            <p className="text-rich-charcoal text-body">{SITE.neighborhood}</p>
          </div>
        </div>
        <div className="porcelain-card p-8">
          <h2 className="font-display text-heading text-rich-charcoal mb-6">Send a Message</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-muted-charcoal text-caption font-label mb-2">Name</label>
              <input type="text" className="w-full bg-surface border border-border-light rounded-lg px-4 py-3 text-rich-charcoal text-body focus:outline-none focus:border-diamond-blue focus:ring-2 focus:ring-crystal-edge-medium transition-all" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-muted-charcoal text-caption font-label mb-2">Email</label>
              <input type="email" className="w-full bg-surface border border-border-light rounded-lg px-4 py-3 text-rich-charcoal text-body focus:outline-none focus:border-diamond-blue focus:ring-2 focus:ring-crystal-edge-medium transition-all" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-muted-charcoal text-caption font-label mb-2">Message</label>
              <textarea rows={4} className="w-full bg-surface border border-border-light rounded-lg px-4 py-3 text-rich-charcoal text-body focus:outline-none focus:border-diamond-blue focus:ring-2 focus:ring-crystal-edge-medium transition-all resize-none" placeholder="How can we help?" />
            </div>
            <button type="submit" className="btn-primary w-full md:w-auto">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
