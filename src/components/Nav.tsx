import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_ITEMS, SITE } from '../data';
import type { TabType } from '../types';

const tabToPath: Record<TabType, string> = {
  home: '/',
  menu: '/menu',
  story: '/story',
  gallery: '/gallery',
  contact: '/contact',
};

export default function Nav() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const currentPath = location.pathname;
  const activeTab = NAV_ITEMS.find(
    (item) => tabToPath[item.tab] === currentPath
  )?.tab ?? 'home';

  const handleNav = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-glass shadow-[0_1px_0_var(--color-border)]' : 'bg-transparent'
      }`}
    >
      <div className="container-cafe flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link
          to="/"
          onClick={handleNav}
          className="flex items-baseline gap-2 text-left group"
        >
          <span className="font-script text-[1.6rem] text-espresso leading-none relative">
            Diamond
            <span className="text-terracotta">.</span>
            <span className="absolute -top-1 -right-3 text-[10px] text-terracotta opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              &#9825;
            </span>
          </span>
          <span className="text-[10px] font-body text-espresso-muted uppercase tracking-[0.15em] hidden sm:block">
            Cafe
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.tab;
            return (
              <Link
                key={item.tab}
                to={tabToPath[item.tab]}
                className={`relative px-4 py-2 font-nav text-[0.75rem] tracking-[0.08em] uppercase transition-colors duration-200 ${
                  isActive
                    ? 'text-espresso font-semibold'
                    : 'text-espresso-muted hover:text-espresso'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="navDot"
                    className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-5 h-[2px] rounded-full bg-terracotta"
                    transition={{ type: 'spring', duration: 0.4, bounce: 0.2 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <Link
            to="/menu"
            className="btn-primary hidden md:inline-flex text-[0.75rem] py-[10px] px-[22px]"
          >
            View Menu
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-espresso/5 text-espresso"
            aria-label="Toggle menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden bg-cream border-t border-border overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2">
              {NAV_ITEMS.map((item, i) => {
                const isActive = activeTab === item.tab;
                return (
                  <motion.div
                    key={item.tab}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <Link
                      to={tabToPath[item.tab]}
                      onClick={handleNav}
                      className={`block w-full text-left py-3 font-nav text-[0.8125rem] tracking-[0.08em] uppercase border-b border-border/50 last:border-0 ${
                        isActive
                          ? 'text-terracotta font-semibold'
                          : 'text-espresso-muted'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <Link
                to="/menu"
                onClick={handleNav}
                className="btn-primary justify-center mt-5 w-full"
              >
                View Menu
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
