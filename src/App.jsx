import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Atmosphere from './components/Atmosphere/Atmosphere';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 420);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="app-shell">
      <Atmosphere />
      <CustomCursor />
      <Navbar />

      <main className="app-content">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />

      <AnimatePresence>
        {showTop && (
          <motion.button
            className="scroll-top cursor-target"
            type="button"
            aria-label="Scroll to top"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
