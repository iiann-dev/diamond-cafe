import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_ITEMS } from '../data';

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentPath = location.pathname === '/' ? 'home' : location.pathname.slice(1);

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-container-max mx-auto flex justify-between items-center px-gutter py-6">
        <motion.div
          onClick={() => handleNavClick('/')}
          className="cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="font-display-lg text-[24px] uppercase tracking-widest text-primary">
            Diamond Cafe
          </span>
        </motion.div>

        <nav className="hidden md:flex gap-8 items-center">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.tab}
              onClick={() => handleNavClick(item.tab === 'home' ? '/' : `/${item.tab}`)}
              className={`font-body-md text-text-warm-white relative nav-hover-line ${
                currentPath === item.tab ? 'active' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-primary border border-border-subtle rounded-lg active:scale-95 transition-transform cursor-pointer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border-subtle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-gutter py-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.tab}
                  onClick={() => handleNavClick(item.tab === 'home' ? '/' : `/${item.tab}`)}
                  className={`w-full text-left font-display-lg text-display-lg-mobile py-3 border-b border-border-subtle/40 cursor-pointer ${
                    currentPath === item.tab ? 'text-primary' : 'text-text-warm-white/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
