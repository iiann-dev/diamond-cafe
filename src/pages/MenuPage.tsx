import { useState } from 'react';
import { motion } from 'motion/react';
import { MENU_ITEMS, MENU_CATEGORIES } from '../data';

const CATEGORY_DISPLAY: Record<string, string> = {
  crepes: 'Crepes', breakfast: 'Breakfast', bagels: 'Bagels',
  sandwiches: 'Sandwiches', scramblers: 'Scramblers', eggs: 'Eggs', salads: 'Salads',
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredItems = activeCategory
    ? MENU_ITEMS.filter((i) => i.category === activeCategory)
    : MENU_ITEMS;

  return (
    <div>
      <div className="text-center mb-10 pt-8">
        <p className="font-label-caps text-primary uppercase tracking-[0.12em] mb-2">Our Menu</p>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-text-warm-white">
          Made Fresh <span className="text-primary">Daily</span>
        </h1>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-5 py-2 rounded-full font-label-caps text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
            !activeCategory ? 'bg-primary text-on-primary' : 'bg-surface-onyx text-muted-stone hover:text-text-warm-white'
          }`}
        >
          All
        </button>
        {MENU_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            className={`px-5 py-2 rounded-full font-label-caps text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
              activeCategory === cat ? 'bg-primary text-on-primary' : 'bg-surface-onyx text-muted-stone hover:text-text-warm-white'
            }`}
          >
            {CATEGORY_DISPLAY[cat]}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            className="container-frame p-6"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-display-lg text-[18px] text-text-warm-white">{item.name}</h3>
              {item.popular && (
                <span className="text-[10px] font-label-caps uppercase tracking-widest text-tertiary border border-tertiary/30 px-2 py-0.5 rounded-full shrink-0 ml-2">
                  Popular
                </span>
              )}
            </div>
            <p className="text-muted-stone text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
