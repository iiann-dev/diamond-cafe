import { useState } from 'react';
import { motion } from 'motion/react';
import { MENU_ITEMS, MENU_CATEGORIES } from '../data';

const CATEGORY_DISPLAY: Record<string, string> = {
  crepes: 'Crepes',
  breakfast: 'Breakfast',
  bagels: 'Bagels',
  sandwiches: 'Sandwiches',
  scramblers: 'Scramblers',
  eggs: 'Eggs',
  salads: 'Salads',
};

const CATEGORY_ICONS: Record<string, string> = {
  crepes: '🥞',
  breakfast: '🌅',
  bagels: '🥯',
  sandwiches: '🥪',
  scramblers: '🍳',
  eggs: '🥚',
  salads: '🥗',
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredItems = activeCategory
    ? MENU_ITEMS.filter((item) => item.category === activeCategory)
    : MENU_ITEMS;

  return (
    <div className="pt-[64px]">
      {/* ─── Hero ─── */}
      <section className="container-diamond pt-16 md:pt-24 pb-8">
        <div className="max-w-2xl">
          <span className="section-eyebrow">Our Menu</span>
          <h1 className="font-display text-4xl md:text-6xl text-white mb-4">
            Made Fresh,{' '}
            <span className="text-gradient">Daily</span>
          </h1>
          <p className="text-white/50 text-lg max-w-lg">
            All crepes served with house potatoes, mixed green salad, or fresh fruit. Everything made to order with love.
          </p>
        </div>
      </section>

      {/* ─── Category Filter Bento ─── */}
      <section className="container-diamond pb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              !activeCategory
                ? 'bg-amethyst-500 text-white shadow-glow'
                : 'bg-white/5 text-white/50 hover:text-white hover:bg-white/10 border border-white/10'
            }`}
          >
            All
          </button>
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-amethyst-500 text-white shadow-glow'
                  : 'bg-white/5 text-white/50 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {CATEGORY_ICONS[cat]} {CATEGORY_DISPLAY[cat]}
            </button>
          ))}
        </div>
      </section>

      {/* ─── Menu Grid: Bento cards ─── */}
      <section className="container-diamond pb-24">
        {activeCategory ? (
          /* Single category view */
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">{CATEGORY_ICONS[activeCategory]}</span>
              <h2 className="font-display text-2xl text-white">{CATEGORY_DISPLAY[activeCategory]}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  className="bento-card p-6"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white font-display text-lg">{item.name}</h3>
                    {item.popular && (
                      <span className="text-[10px] uppercase tracking-widest text-gold-300 bg-gold-500/10 px-2 py-0.5 rounded-full whitespace-nowrap ml-2">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          /* All categories: bento grid */
          <div className="space-y-16">
            {MENU_CATEGORIES.map((cat) => {
              const items = MENU_ITEMS.filter((item) => item.category === cat);
              return (
                <div key={cat}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{CATEGORY_ICONS[cat]}</span>
                    <h2 className="font-display text-2xl text-white">{CATEGORY_DISPLAY[cat]}</h2>
                    <span className="text-white/20 text-sm font-body">{items.length} items</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((item, i) => (
                      <motion.div
                        key={item.id}
                        className="bento-card p-6"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-white font-display text-lg">{item.name}</h3>
                          {item.popular && (
                            <span className="text-[10px] uppercase tracking-widest text-gold-300 bg-gold-500/10 px-2 py-0.5 rounded-full whitespace-nowrap ml-2">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
