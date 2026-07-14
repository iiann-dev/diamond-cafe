import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Lenis from 'lenis';
import type { TabType } from './types';
import { NAV_ITEMS } from './data';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
      easing: (t: number) => Math.min(1, 1 - Math.pow(1 - t, 3)),
      orientation: 'vertical',
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const handleNavClick = (tab: TabType) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home': return <HomePage onNavigate={(tab) => setActiveTab(tab)} />;
      case 'menu': return <MenuPage />;
      case 'gallery': return <GalleryPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage onNavigate={(tab) => setActiveTab(tab)} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-body-md overflow-x-hidden">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border-subtle">
        <div className="max-w-container-max mx-auto flex justify-between items-center px-gutter py-6">
          <motion.div
            onClick={() => handleNavClick('home')}
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
                onClick={() => handleNavClick(item.tab)}
                className={`font-body-md text-text-warm-white relative nav-hover-line ${
                  activeTab === item.tab ? 'active' : ''
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
                    onClick={() => handleNavClick(item.tab)}
                    className={`w-full text-left font-display-lg text-display-lg-mobile py-3 border-b border-border-subtle/40 cursor-pointer ${
                      activeTab === item.tab ? 'text-primary' : 'text-text-warm-white/80'
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

      <main className="flex-1 pt-20 pb-section-padding px-margin-mobile md:px-gutter">
        <div className="max-w-container-max mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderActiveView()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <footer className="border-t border-border-subtle bg-surface">
        <div className="max-w-container-max mx-auto px-gutter py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display-lg text-headline-md text-primary mb-4">Diamond</h3>
              <p className="text-muted-stone text-sm leading-relaxed max-w-xs">
                A family-run cafe in Noe Valley since 2010. Fresh coffee, homemade food, and warm smiles every day.
              </p>
            </div>
            <div>
              <h4 className="font-label-caps text-primary uppercase mb-4">Navigation</h4>
              <div className="space-y-2">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.tab}
                    onClick={() => handleNavClick(item.tab)}
                    className="block text-muted-stone text-sm hover:text-primary transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-label-caps text-primary uppercase mb-4">Contact</h4>
              <div className="space-y-2 text-muted-stone text-sm">
                <p>751 Diamond Street</p>
                <p>San Francisco, CA 94114</p>
                <p className="text-primary">(415) 655-3674</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border-subtle/50 mt-8 pt-8 text-center text-muted-stone text-xs font-label-caps uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Diamond Cafe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
