import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { AnimatePresence, motion } from 'framer-motion';
import { profile, siteConfig } from '../../data/portfolio';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navbar.css';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
      <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="navbar__inner">
          <Link
            to="home"
            smooth
            duration={500}
            offset={-70}
            className="navbar__brand cursor-target"
            onClick={() => setOpen(false)}
          >
            <span className="navbar__mark" aria-hidden="true">
              {profile.brand}
            </span>
            <span className="sr-only">{profile.name}</span>
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
                className="navbar__link cursor-target"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="navbar__actions">
            <ThemeToggle />
            <a
              className="navbar__cv btn btn--ghost cursor-target"
              href={siteConfig.resumePath}
              download={siteConfig.resumeFileName}
            >
              Download CV
            </a>
            <button
              type="button"
              className={`navbar__burger cursor-target ${open ? 'is-open' : ''}`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="navbar__drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28 }}
          >
            {LINKS.map((link, i) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i }}
              >
                <Link
                  to={link.id}
                  smooth
                  duration={500}
                  offset={-70}
                  className="navbar__drawer-link cursor-target"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <a
              className="btn btn--primary navbar__drawer-cv cursor-target"
              href={siteConfig.resumePath}
              download={siteConfig.resumeFileName}
              onClick={() => setOpen(false)}
            >
              Download CV ↓
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
