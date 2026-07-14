import { useEffect, useRef, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Nav from './components/Nav';
import Footer from './components/Footer';

const HomeView = lazy(() => import('./components/HomeView'));
const MenuView = lazy(() => import('./components/MenuView'));
const StoryView = lazy(() => import('./components/StoryView'));
const GalleryView = lazy(() => import('./components/GalleryView'));
const ContactView = lazy(() => import('./components/ContactView'));

gsap.registerPlugin(ScrollTrigger);

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
};

function LoadingFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <svg
          className="animate-float text-terracotta/40"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M12 2C7.58 2 4 5.58 4 10c0 4.42 3.58 11 8 11s8-6.58 8-11c0-4.42-3.58-8-8-8z" />
          <path d="M12 6c-2.21 0-4 1.79-4 4" />
        </svg>
        <span className="font-script text-terracotta/60 text-lg">loading...</span>
      </div>
    </div>
  );
}

function AnimatedPages() {
  const location = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Lenis init
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy({
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value as number, { immediate: true, force: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: 'transform',
    });

    ScrollTrigger.refresh();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} {...pageTransition}>
        <Suspense fallback={<LoadingFallback />}>
          <Routes location={location}>
            <Route path="/" element={<HomeView />} />
            <Route path="/menu" element={<MenuView />} />
            <Route path="/story" element={<StoryView />} />
            <Route path="/gallery" element={<GalleryView />} />
            <Route path="/contact" element={<ContactView />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream">
        <Nav />
        <main className="pt-[72px]">
          <AnimatedPages />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
