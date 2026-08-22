import { useState } from 'react';
import { SITE, HOURS } from '../data';
import { useSiteData } from '../context/SiteDataContext';
import Seo from '../components/Seo';

// Hardcoded Google Maps embed URL with real place ID (faster, no Sanity round-trip)
const MAP_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.6529342248955!2d-122.43614280000003!3d37.7512857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e0d926d00c3%3A0x2f3f5323903f0534!2sDiamond%20Cafe!5e0!3m2!1sen!2sid!4v1787402473881!5m2!1sen!2sid';

export default function ContactPage() {
  const { siteInfo, hours } = useSiteData();

  // ── CMS-first resolution ────────────────────────────────
  const address = siteInfo?.address || SITE.address;
  const phone = siteInfo?.phone || SITE.phone;
  const email = siteInfo?.email || SITE.email;
  const neighborhood = siteInfo?.neighborhood || SITE.neighborhood;
  const hoursList = hours.length > 0 ? hours : HOURS;

  const dirsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  function ImmediateMap() {
    return (
      <div className="img-frame min-h-[200px] md:min-h-full">
        <iframe
          src={MAP_EMBED}
          width="100%"
          height="100%"
          className="min-h-[200px] md:min-h-full"
          style={{ border: 0 }}
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          title="Diamond Cafe location"
        />
      </div>
    );
  }

  return (
    <div>
      <Seo
        page="contact"
        title="Contact & Hours"
        description="Find Diamond Cafe at 751 Diamond Street, Noe Valley, San Francisco. Open daily 7:00 am — 3:00 pm. Call (415) 655-3674 or get directions."
        path="/contact"
      />
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
                <p className="text-muted-charcoal text-body">{address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-diamond-blue)" strokeWidth="1.5" strokeLinecap="round" className="mt-0.5 shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              <div>
                <p className="text-rich-charcoal text-body font-semibold">Phone</p>
                <p className="text-muted-charcoal text-body">{phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-diamond-blue)" strokeWidth="1.5" strokeLinecap="round" className="mt-0.5 shrink-0">
                <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <div>
                <p className="text-rich-charcoal text-body font-semibold">Email</p>
                <p className="text-muted-charcoal text-body">{email}</p>
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

        <ImmediateMap />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <div className="glass-card p-8">
          <h2 className="font-display text-heading text-rich-charcoal mb-6">Hours</h2>
          <div className="space-y-3">
            {hoursList.map((h) => (
              <div key={(h as { _id?: string })._id ?? h.day} className="flex justify-between items-center py-2 border-b border-border-faint last:border-0">
                <span className="text-muted-charcoal text-body">{h.day}</span>
                <span className="text-rich-charcoal text-body font-semibold">{h.hours}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-crystal-edge rounded-lg">
            <p className="text-diamond-blue font-label text-caption mb-1">Neighborhood</p>
            <p className="text-rich-charcoal text-body">{neighborhood}</p>
          </div>
        </div>
        <div className="porcelain-card p-8">
          <h2 className="font-display text-heading text-rich-charcoal mb-6">Send a Message</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in all fields.');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json().catch(() => null);

      if (res.ok && data?.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        setErrorMsg(data?.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  }

  const inputCls =
    'w-full bg-surface border border-border-light rounded-lg px-4 py-3 text-rich-charcoal text-body focus:outline-none focus:border-diamond-blue focus:ring-2 focus:ring-crystal-edge-medium transition-all disabled:opacity-60';

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div>
        <label className="block text-muted-charcoal text-caption font-label mb-2" htmlFor="cf-name">Name</label>
        <input
          id="cf-name"
          type="text"
          className={inputCls}
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={status === 'sending'}
        />
      </div>
      <div>
        <label className="block text-muted-charcoal text-caption font-label mb-2" htmlFor="cf-email">Email</label>
        <input
          id="cf-email"
          type="email"
          className={inputCls}
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'sending'}
        />
      </div>
      <div>
        <label className="block text-muted-charcoal text-caption font-label mb-2" htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          rows={4}
          className={`${inputCls} resize-none`}
          placeholder="How can we help?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={status === 'sending'}
        />
      </div>

      {status === 'success' && (
        <p className="text-emerald-600 text-body font-semibold" role="status">
          ✅ Message sent! We'll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-body font-semibold" role="alert">
          ⚠️ {errorMsg}
        </p>
      )}

      <button type="submit" className="btn-primary w-full md:w-auto" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}