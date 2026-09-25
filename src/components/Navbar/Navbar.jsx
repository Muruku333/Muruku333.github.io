import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { AnimatePresence, motion } from 'framer-motion';
import { profile, siteConfig } from '../../data/portfolio';
import './Navbar.css';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.05 5.05l1.55 1.55M17.4 17.4l1.55 1.55M5.05 18.95l1.55-1.55M17.4 6.6l1.55-1.55"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M19.5 13.2A7.5 7.5 0 1 1 10.8 4.5 6 6 0 0 0 19.5 13.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar({ theme, toggleTheme }) {
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.pageYOffset / total) * 100 : 0);
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

  const handleNav = (id) => {
    setOpen(false);
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <header className={`navbar navbar--${theme}`}>
        <div className="navbar__inner">
          <Link
            to="home"
            smooth
            duration={500}
            offset={-70}
            className="navbar__brand"
            onClick={() => handleNav('home')}
          >
            {profile.brand}
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
                onClick={() => handleNav(link.id)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="navbar__actions">
            <a
              className="navbar__cv"
              href={siteConfig.resumePath}
              download={siteConfig.resumeFileName}
            >
              Resume
            </a>
            <motion.button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -50, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 50, scale: 0.6 }}
                  transition={{ duration: 0.25 }}
                >
                  {isDark ? <SunIcon /> : <MoonIcon />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
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
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="navbar__drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {LINKS.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth
                duration={500}
                offset={-70}
                className="navbar__drawer-link"
                onClick={() => handleNav(link.id)}
              >
                {link.label}
              </Link>
            ))}
            <a
              className="btn btn--primary"
              href={siteConfig.resumePath}
              download={siteConfig.resumeFileName}
              onClick={() => setOpen(false)}
            >
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
