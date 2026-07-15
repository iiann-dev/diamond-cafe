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
        <p className="font-label-caps text-[#7FB7F4] uppercase tracking-[0.12em] mb-2">Our Menu</p>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-[#2F3742]">
          Made Fresh <span className="text-[#7FB7F4]">Daily</span>
        </h1>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-5 py-2 rounded-full font-label-caps text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
            !activeCategory ? 'bg-[#7FB7F4] text-white' : 'bg-[#F3F8FD] text-[#6C757E] hover:text-[#2F3742]'
          }`}
        >
          All
        </button>
        {MENU_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            className={`px-5 py-2 rounded-full font-label-caps text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
              activeCategory === cat ? 'bg-[#7FB7F4] text-white' : 'bg-[#F3F8FD] text-[#6C757E] hover:text-[#2F3742]'
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
              <h3 className="font-display-lg text-[18px] text-[#2F3742]">{item.name}</h3>
              {item.popular && (
                <span className="text-[10px] font-label-caps uppercase tracking-widest text-[#D9C7A4] border border-[#D9C7A4]/30 px-2 py-0.5 rounded-full shrink-0 ml-2">
                  Popular
                </span>
              )}
            </div>
            <p className="text-[#6C757E] text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Order CTA */}
      <div className="text-center mt-10">
        <a
          href={ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#7FB7F4] hover:bg-[#5A94D6] text-white px-8 py-4 rounded-xl font-label-caps text-sm hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
        >
          Order Online
        </a>
      </div>
    </div>
  );
}
