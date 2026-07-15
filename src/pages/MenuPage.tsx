import { useState } from 'react';
import { motion } from 'motion/react';
import { MENU_ITEMS, MENU_CATEGORIES, ORDER_URL } from '../data';

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
        <p className="font-label text-caption text-diamond-blue mb-2">Our Menu</p>
        <h1 className="font-display text-display-mobile md:text-display text-rich-charcoal">
          Made Fresh <span className="text-diamond-blue">Daily</span>
        </h1>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        <button
          onClick={() => setActiveCategory(null)}
          className={`crystal-chip ${!activeCategory ? 'active' : ''}`}
        >
          All
        </button>
        {MENU_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            className={`crystal-chip ${activeCategory === cat ? 'active' : ''}`}
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
            className="porcelain-card p-6"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-display text-heading-sm text-rich-charcoal">{item.name}</h3>
              {item.popular && (
                <span className="text-[10px] font-label text-caption text-warm-stone border border-warm-stone/30 px-2 py-0.5 rounded-full shrink-0 ml-2">
                  Popular
                </span>
              )}
            </div>
            <p className="text-muted-charcoal text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Order CTA */}
      <div className="text-center mt-10">
        <a
          href={ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Order Online
        </a>
      </div>
    </div>
  );
}
