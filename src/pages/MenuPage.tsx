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
        <p className="font-label-caps text-[#C75B39] uppercase tracking-[0.12em] mb-2">Our Menu</p>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-[#2E2420]">
          Made Fresh <span className="text-[#C75B39]">Daily</span>
        </h1>
      </div>

      {/* Full menu image from diamondcafesf.com */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="container-frame overflow-hidden mb-8"
      >
        <a href="https://diamondcafesf.com/hubfs/Diamond%20Cafe%20Menu%20PRICELESS.png" target="_blank" rel="noopener noreferrer" className="block">
          <img
            src="https://diamondcafesf.com/hubfs/Diamond%20Cafe%20Menu%20PRICELESS.png"
            alt="Diamond Cafe full menu"
            className="w-full h-auto object-contain"
            loading="eager"
            decoding="async"
          />
        </a>
      </motion.div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-5 py-2 rounded-full font-label-caps text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
            !activeCategory ? 'bg-[#C75B39] text-white' : 'bg-[#F5EDE8] text-[#7D716A] hover:text-[#2E2420]'
          }`}
        >
          All
        </button>
        {MENU_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            className={`px-5 py-2 rounded-full font-label-caps text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
              activeCategory === cat ? 'bg-[#C75B39] text-white' : 'bg-[#F5EDE8] text-[#7D716A] hover:text-[#2E2420]'
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
              <h3 className="font-display-lg text-[18px] text-[#2E2420]">{item.name}</h3>
              {item.popular && (
                <span className="text-[10px] font-label-caps uppercase tracking-widest text-[#E8A954] border border-[#E8A954]/30 px-2 py-0.5 rounded-full shrink-0 ml-2">
                  Popular
                </span>
              )}
            </div>
            <p className="text-[#7D716A] text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Order CTA */}
      <div className="text-center mt-10">
        <a
          href={ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#16A34A] hover:bg-[#15803D] text-white px-8 py-4 rounded-xl font-label-caps text-sm hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
        >
          Order Online
        </a>
      </div>
    </div>
  );
}
