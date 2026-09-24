import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../../data/portfolio';
import './Navbar.css';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 24);
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <div className="nav-progress" style={{ width: `${progress}%` }} />
      <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="navbar__inner">
          <Link
            to="home"
            smooth
            duration={500}
            offset={-70}
            className="navbar__brand"
            onClick={() => setOpen(false)}
          >
            <span className="navbar__eye" aria-hidden="true" />
            <span className="navbar__name">{profile.name}</span>
          </Link>

          <nav className="navbar__desktop" aria-label="Primary">
            {LINKS.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                spy
                smooth
                duration={500}
                offset={-70}
                activeClass="is-active"
                className="navbar__link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className={`navbar__burger ${open ? 'is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="navbar__drawer"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
          >
            {LINKS.map((link, i) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i }}
              >
                <Link
                  to={link.id}
                  smooth
                  duration={500}
                  offset={-70}
                  className="navbar__drawer-link"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
