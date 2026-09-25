import { lazy, Suspense, useEffect, useState } from 'react';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';
import { scroller } from 'react-scroll';
import { useTheme } from './theme/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CursorGlow from './components/CursorGlow/CursorGlow';
import { initScrollReveal } from './utils/scrollReveal';
import './styles/scrollReveal.css';
import './App.css';

const ParticlesBackground = lazy(
  () => import('./components/ParticlesBackground/ParticlesBackground'),
);

function App() {
  const { theme, toggleTheme } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.pageYOffset > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    const timer = setTimeout(() => setLoading(false), 300);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      initScrollReveal();
      const hash = window.location.hash.slice(1);
      if (hash) {
        scroller.scrollTo(hash, { offset: -70, duration: 0 });
      }
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="dots">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </div>
    );
  }

  return (
    <LazyMotion features={domAnimation}>
      <Suspense fallback={null}>
        <ParticlesBackground theme={theme} />
      </Suspense>
      <CursorGlow theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />

      <AnimatePresence>
        {showScrollTop && (
          <m.button
            className="scroll-to-top"
            type="button"
            aria-label="Scroll to top"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.12, y: -3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ↑
          </m.button>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}

export default App;
