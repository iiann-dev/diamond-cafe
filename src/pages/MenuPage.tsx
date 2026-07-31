import { useState } from 'react';
import { motion } from 'motion/react';
import { MENU_ITEMS, MENU_CATEGORIES, ORDER_URL } from '../data';
import { useSiteData } from '../context/SiteDataContext';
import Seo from '../components/Seo';
import type { SanityDocument } from '@sanity/client';

const CATEGORY_DISPLAY: Record<string, string> = {
  crepes: 'Crepes', breakfast: 'Breakfast', bagels: 'Bagels',
  sandwiches: 'Sandwiches', scramblers: 'Scramblers', eggs: 'Eggs', salads: 'Salads',
};

export default function MenuPage() {
  const { siteInfo, categories, menuItems } = useSiteData();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // ── CMS-first resolution ────────────────────────────────
  const cmsCategories = categories.length > 0
    ? categories.map((c) => ({ slug: c.slug?.current ?? c.name.toLowerCase(), name: c.name }))
    : MENU_CATEGORIES.map((c) => ({ slug: c, name: CATEGORY_DISPLAY[c] ?? c }));

  const cmsItems = menuItems.length > 0
    ? (menuItems as SanityDocument[]).map((i) => {
        const cat = i.category as { slug?: { current?: string } } | string | undefined
        return {
          id: i._id ?? Math.random().toString(36),
          name: String(i.name ?? ''),
          category: cat && typeof cat === 'object' ? cat.slug?.current ?? '' : '',
          description: String(i.description ?? ''),
          popular: !!i.popular,
        }
      })
    : MENU_ITEMS;

  const filteredItems = activeCategory
    ? cmsItems.filter((i) => i.category === activeCategory)
    : cmsItems;

  const orderUrl = siteInfo?.orderUrl || ORDER_URL;

  return (
    <div>
      <Seo
        title="Menu"
        description="Browse the Diamond Cafe menu — fresh crepes, breakfast favorites, bagels, sandwiches, scramblers, eggs, and salads made fresh daily in Noe Valley, SF."
        path="/menu"
      />
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
        {cmsCategories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActiveCategory(activeCategory === cat.slug ? null : cat.slug)}
            className={`crystal-chip ${activeCategory === cat.slug ? 'active' : ''}`}
          >
            {cat.name}
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
          href={orderUrl}
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
