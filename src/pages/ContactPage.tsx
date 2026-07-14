import { SITE, HOURS } from '../data';

export default function ContactPage() {
  return (
    <div className="pt-[64px]">
      {/* ─── Hero bento ─── */}
      <section className="container-diamond pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7 bento-card p-8 md:p-12 flex flex-col justify-center">
            <span className="section-eyebrow">Get in Touch</span>
            <h1 className="font-display text-4xl md:text-6xl text-white mb-4">
              We'd Love to{' '}
              <span className="text-gradient">Hear From You</span>
            </h1>
            <p className="text-white/50 text-lg max-w-md mb-8">
              Questions, catering inquiries, or just want to say hi? Drop us a line or stop by.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-amethyst-400 shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.36 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-wider">Phone</p>
                  <a href={`tel:${SITE.phone}`} className="text-white hover:text-amethyst-300 transition-colors">{SITE.phone}</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-coral-400 shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-wider">Email</p>
                  <a href={`mailto:${SITE.email}`} className="text-white hover:text-coral-300 transition-colors">{SITE.email}</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold-400 shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-wider">Address</p>
                  <p className="text-white/70">{SITE.address}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 bento-card p-8 md:p-10">
            <h2 className="font-display text-2xl text-white mb-6">Send a Message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First Name*"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-amethyst-500/50 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-amethyst-500/50 transition-colors"
                />
              </div>
              <input
                type="email"
                placeholder="Email*"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-amethyst-500/50 transition-colors"
              />
              <textarea
                placeholder="Your message..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-amethyst-500/50 transition-colors resize-none"
              />
              <button type="submit" className="btn-primary w-full justify-center">
                Send Message
                <span className="text-xs opacity-70">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── Hours + Map bento ─── */}
      <section className="container-diamond pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4 bento-card p-8">
            <h2 className="font-display text-2xl text-white mb-6">Hours</h2>
            <div className="space-y-4">
              {HOURS.map((d) => (
                <div key={d.day} className="flex justify-between items-center pb-3 border-b border-white/5 last:border-0">
                  <span className="text-white/60 text-sm">{d.day}</span>
                  <span className="text-white font-medium text-sm">{d.hours}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/5">
              <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Neighborhood</p>
              <p className="text-white/70 text-sm">{SITE.neighborhood}</p>
            </div>
          </div>
          <div className="md:col-span-8 bento-card overflow-hidden min-h-[350px]">
            <iframe
              src={SITE.mapEmbed}
              width="100%"
              height="100%"
              style={{ minHeight: '350px' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Diamond Cafe Location"
              className="border-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
