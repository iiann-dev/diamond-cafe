import { motion } from 'motion/react';
import { SITE, HOURS } from '../data';

export default function ContactPage() {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 pt-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="container-frame p-8 md:p-12 flex flex-col justify-center"
        >
          <p className="font-label-caps text-[#C75B39] uppercase tracking-[0.12em] mb-2">Contact</p>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-[#2E2420] mb-6">
            Find <span className="text-[#C75B39]">Us</span>
          </h1>
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C75B39" strokeWidth="1.5" strokeLinecap="round" className="mt-0.5 shrink-0">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <p className="text-[#2E2420] text-sm font-semibold">Address</p>
                <p className="text-[#7D716A] text-sm">{SITE.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C75B39" strokeWidth="1.5" strokeLinecap="round" className="mt-0.5 shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              <div>
                <p className="text-[#2E2420] text-sm font-semibold">Phone</p>
                <p className="text-[#7D716A] text-sm">{SITE.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C75B39" strokeWidth="1.5" strokeLinecap="round" className="mt-0.5 shrink-0">
                <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <div>
                <p className="text-[#2E2420] text-sm font-semibold">Email</p>
                <p className="text-[#7D716A] text-sm">{SITE.email}</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="container-frame overflow-hidden"
        >
          <iframe
            src={SITE.mapEmbed}
            width="100%"
            height="100%"
            className="min-h-[380px]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Diamond Cafe location"
          />
        </motion.div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container-frame p-8"
        >
          <h2 className="font-display-lg text-headline-md text-[#2E2420] mb-6">Hours</h2>
          <div className="space-y-3">
            {HOURS.map((h) => (
              <div key={h.day} className="flex justify-between items-center py-2 border-b border-[rgba(46,36,32,0.06)] last:border-0">
                <span className="text-[#7D716A] text-sm">{h.day}</span>
                <span className="text-[#2E2420] text-sm font-semibold">{h.hours}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-[#FDE8DE] rounded-lg">
            <p className="text-[#B04A2A] font-label-caps uppercase text-xs tracking-widest mb-1">Neighborhood</p>
            <p className="text-[#2E2420] text-sm">{SITE.neighborhood}</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="container-frame p-8"
        >
          <h2 className="font-display-lg text-headline-md text-[#2E2420] mb-6">Send a Message</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-[#7D716A] text-xs font-label-caps uppercase tracking-widest mb-2">Name</label>
              <input type="text" className="w-full bg-[#FFFBFA] border border-[rgba(46,36,32,0.08)] rounded-lg px-4 py-3 text-[#2E2420] text-sm focus:outline-none focus:border-[#C75B39] focus:ring-2 focus:ring-[#C75B39]/20 transition-all" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-[#7D716A] text-xs font-label-caps uppercase tracking-widest mb-2">Email</label>
              <input type="email" className="w-full bg-[#FFFBFA] border border-[rgba(46,36,32,0.08)] rounded-lg px-4 py-3 text-[#2E2420] text-sm focus:outline-none focus:border-[#C75B39] focus:ring-2 focus:ring-[#C75B39]/20 transition-all" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-[#7D716A] text-xs font-label-caps uppercase tracking-widest mb-2">Message</label>
              <textarea rows={4} className="w-full bg-[#FFFBFA] border border-[rgba(46,36,32,0.08)] rounded-lg px-4 py-3 text-[#2E2420] text-sm focus:outline-none focus:border-[#C75B39] focus:ring-2 focus:ring-[#C75B39]/20 transition-all resize-none" placeholder="How can we help?" />
            </div>
            <button type="submit" className="bg-[#C75B39] hover:bg-[#B04A2A] text-white px-8 py-3 rounded-lg font-label-caps uppercase tracking-wider hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer text-sm w-full md:w-auto">
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
