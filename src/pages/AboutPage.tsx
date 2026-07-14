import { motion } from 'motion/react';
import { SITE, IMAGES } from '../data';

const VALUES = [
  { title: 'Quality Ingredients', desc: 'We source locally and make everything from scratch. No shortcuts, no compromises.' },
  { title: 'Community First', desc: 'Diamond Cafe is your living room away from home. A place to gather, connect, and feel welcome.' },
  { title: 'Crafted with Care', desc: 'From the espresso pull to the pastry finish, every detail matters. We take pride in the small things.' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 pt-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="container-frame overflow-hidden"
        >
          <img src={IMAGES.team} alt="Diamond Cafe team" className="w-full h-full object-cover min-h-[400px]" decoding="async" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="container-frame p-8 md:p-12 flex flex-col justify-center"
        >
          <p className="font-label-caps text-primary uppercase tracking-[0.12em] mb-2">About</p>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-text-warm-white mb-4">
            Our <span className="text-primary">Story</span>
          </h1>
          <p className="text-muted-stone text-sm leading-relaxed">{SITE.fullStory}</p>
        </motion.div>
      </section>

      {/* Values Bento */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <h2 className="font-display-lg text-headline-md text-text-warm-white">What We Stand For</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="container-frame p-8"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8634C" strokeWidth="1.5" strokeLinecap="round">
                  {i === 0 && <path d="M12 2L2 7l10 5 10-5-10-5Z M2 17l10 5 10-5 M2 12l10 5 10-5" />}
                  {i === 1 && <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>}
                  {i === 2 && <><path d="M12 2L2 7l10 5 10-5-10-5Z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>}
                </svg>
              </div>
              <h3 className="font-display-lg text-[18px] text-text-warm-white mb-2">{v.title}</h3>
              <p className="text-muted-stone text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container-frame p-8 md:p-12 flex flex-col justify-center"
          >
            <h2 className="font-display-lg text-headline-md text-text-warm-white mb-4">Family-Run Since 2010</h2>
            <p className="text-muted-stone text-sm leading-relaxed mb-4">
              What started as a dream between two siblings has grown into the neighborhood gathering spot it is today.
            </p>
            <p className="text-muted-stone text-sm leading-relaxed">
              Every morning at 7 AM, the espresso machine hums to life and the aroma of freshly brewed coffee fills the block.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container-frame overflow-hidden"
          >
            <img src={IMAGES.coffee} alt="Pour over coffee" className="w-full h-full object-cover min-h-[350px]" decoding="async" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
