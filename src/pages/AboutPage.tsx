import { SITE, IMAGES } from '../data';

export default function AboutPage() {
  return (
    <div className="pt-[64px]">
      {/* ─── Hero bento ─── */}
      <section className="container-diamond pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7 bento-card p-8 md:p-12 flex flex-col justify-center">
            <span className="section-eyebrow">Since {SITE.founded}</span>
            <h1 className="font-display text-4xl md:text-6xl text-white mb-4">
              Your Neighborhood
              <br />
              <span className="text-gradient">Living Room</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-lg">
              {SITE.description}
            </p>
          </div>
          <div className="md:col-span-5 bento-card overflow-hidden min-h-[300px] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amethyst-500/20 to-transparent z-10" />
            <img src={IMAGES.interior} alt="Cafe interior" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ─── Story + Values bento ─── */}
      <section className="container-diamond pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4 bento-card overflow-hidden min-h-[400px] relative">
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent z-10" />
            <img src={IMAGES.coffee} alt="Coffee pour" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 z-20">
              <span className="text-white/80 font-display text-lg">Est. 2010</span>
            </div>
          </div>
          <div className="md:col-span-8 bento-card p-8 md:p-12">
            <span className="section-eyebrow">Our Story</span>
            <h2 className="font-display text-3xl text-white mb-6">
              Born in Noe Valley,
              <br />
              <span className="text-gradient">Brewed with Heart</span>
            </h2>
            <div className="space-y-4 text-white/50 leading-relaxed max-w-2xl">
              <p>{SITE.fullStory}</p>
              <p>
                Every morning at 7 AM, the espresso machine hums to life, and the aroma of freshly brewed Big Mike Blend fills the block. Our beans are sourced from small, ethical farms and roasted in small batches for peak flavor.
              </p>
              <p>
                But what truly makes Diamond Cafe sparkle is our community — the regulars who wave from the door, the writers who claim "their corner table," the families who stop in after school drop-off. We're more than a cafe. We're a living room for Noe Valley.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Team / Neighborhood bento ─── */}
      <section className="container-diamond pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 bento-card p-8 md:p-12">
            <span className="section-eyebrow">Our Promise</span>
            <h2 className="font-display text-3xl text-white mb-6">
              Quality, Community,
              <br />
              <span className="text-gradient">Kindness</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: 'House-Roasted', desc: 'Our Big Mike Blend is roasted in small batches for bold, smooth flavor every cup.' },
                { title: 'Baked Fresh', desc: 'Everything from our pastry case is made from scratch each morning. No shortcuts.' },
                { title: 'Family-Run', desc: 'We treat every customer like part of the Diamond family. Your name, your order, your story.' },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <h3 className="text-white font-display text-lg mb-2">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-4 bento-card overflow-hidden min-h-[400px] relative">
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent z-10" />
            <img src={IMAGES.team} alt="Team at work" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="container-diamond pb-24">
        <div className="bento-card p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-coral-400/10 via-transparent to-amethyst-500/10" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
              Come Experience{' '}
              <span className="text-gradient">Diamond</span>
            </h2>
            <p className="text-white/50 max-w-md mx-auto mb-8">
              Stop by for a cup of Big Mike Blend or one of our delicious breakfast meals. We're saving a seat for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Find Us
                <span className="text-xs opacity-70">↗</span>
              </a>
              <a href={`tel:${SITE.phone}`} className="btn-secondary">
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
