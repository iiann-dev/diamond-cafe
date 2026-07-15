import { lazy, Suspense, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { motion } from 'motion/react';
import Lenis from 'lenis';
import Nav from './components/Nav';
import Footer from './components/Footer';

const HomePage = lazy(() => import('./pages/HomePage'));
const MenuPage = lazy(() => import('./pages/MenuPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[var(--color-frost-white)] text-[var(--color-rich-charcoal)] flex flex-col overflow-x-hidden">
      <Nav />
      <ScrollToTop />
      <main className="flex-1 pt-20 pb-section-padding px-margin-mobile md:px-gutter">
        <div className="max-w-container-max mx-auto">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Suspense fallback={<div className="h-screen" />}>
                <Outlet />
              </Suspense>
            </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
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

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
