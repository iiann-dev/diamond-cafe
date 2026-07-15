import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_ITEMS, LOGOS, ORDER_URL } from '../data';

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
    <header className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-[rgba(47,55,66,0.06)]">
      <div className="max-w-container-max mx-auto flex justify-between items-center px-gutter py-4">
        <motion.div
          onClick={() => handleNavClick('/')}
          className="cursor-pointer shrink-0"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <img
            src={LOGOS.square}
            alt="Diamond Cafe"
            className="h-12 w-12 object-contain"
            loading="eager"
            decoding="async"
          />
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.tab}
              onClick={() => handleNavClick(item.tab === 'home' ? '/' : `/${item.tab}`)}
              className={`font-body-md text-sm text-[#2F3742]/80 relative nav-hover-line ${
                currentPath === item.tab ? 'active' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#7FB7F4] hover:bg-[#5A94D6] text-white px-5 py-2.5 rounded-lg font-label-caps text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Order Online
          </a>
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[#7FB7F4] border border-[rgba(47,55,66,0.08)] rounded-lg active:scale-95 transition-transform cursor-pointer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {isMobileMenuOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white/98 backdrop-blur-lg border-t border-[rgba(47,55,66,0.06)]"
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
                  className={`w-full text-left font-display-lg text-display-lg-mobile py-3 border-b border-[rgba(47,55,66,0.06)] cursor-pointer ${
                    currentPath === item.tab ? 'text-[#7FB7F4]' : 'text-[#6C757E]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#7FB7F4] hover:bg-[#5A94D6] text-white px-5 py-3 rounded-lg font-label-caps text-xs uppercase tracking-widest transition-colors"
              >
                Order Online
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
