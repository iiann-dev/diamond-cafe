import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Story from './components/Story';
import MenuSection from './components/Menu';
import Gallery from './components/Gallery';
import Community from './components/Community';
import Footer from './components/Footer';
import type { TabType } from './types';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const activeTabRef = useRef<TabType>('home');
  const scrollTargetRef = useRef<{ tab: TabType; el: HTMLElement | null }>({ tab: 'home', el: null });

  useEffect(() => {
    // Lenis init
    const lenis = new Lenis({
      duration: 1.2,
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

    // RAF loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // IntersectionObserver for active section
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id') as TabType;
            if (id) activeTabRef.current = id;
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => observer.observe(s));

    return () => {
      lenis.destroy();
      observer.disconnect();
    };
  }, []);

  const handleNavigate = (tab: TabType) => {
    const el = document.getElementById(tab === 'our story' ? 'story' : tab);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cream">
      <Nav activeTab={activeTabRef.current} onNavigate={handleNavigate} />

      <main>
        <Hero onNavigate={handleNavigate} />
        <Story />
        <MenuSection />
        <Community />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}
