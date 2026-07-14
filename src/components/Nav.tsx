import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_ITEMS, SITE } from '../data';
import type { TabType } from '../types';

interface NavProps {
  activeTab: TabType;
  onNavigate: (tab: TabType) => void;
}

export default function Nav({ activeTab, onNavigate }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (tab: TabType) => {
    onNavigate(tab);
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-glass shadow-sm' : 'bg-transparent'}`}>
      <div className="container-cafe flex items-center justify-between h-[72px]">
        {/* Logo */}
        <button onClick={() => handleNav('home')} className="flex items-center gap-2 text-left">
          <span className="font-script text-2xl text-forest leading-none">poppy</span>
          <span className="text-lg">🌸</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(item => (
            <button
              key={item.tab}
              onClick={() => handleNav(item.tab)}
              className={`relative font-nav text-sm tracking-wider uppercase transition-colors duration-200 ${
                activeTab === item.tab ? 'text-forest' : 'text-muted hover:text-forest'
              }`}
            >
              {item.label}
              {activeTab === item.tab && (
                <motion.span layoutId="navDot" className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-peach" />
              )}
            </button>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button onClick={() => handleNav('contact')} className="btn-primary hidden md:flex text-xs py-3 px-6">
            Book a Table
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </button>
          <button onClick={() => setMobileOpen(v => !v)} className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-forest/5 text-forest">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? <path d="M6 6l12 12M6 18L18 6"/> : <path d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden bg-cream border-t border-border px-6 pb-8 pt-4"
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item.tab}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
                onClick={() => handleNav(item.tab)}
                className={`block w-full text-left py-3 font-nav text-sm tracking-wider uppercase border-b border-border/50 last:border-0 ${
                  activeTab === item.tab ? 'text-forest font-semibold' : 'text-muted'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
            <button onClick={() => handleNav('contact')} className="btn-primary w-full justify-center mt-4">
              Book a Table
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
