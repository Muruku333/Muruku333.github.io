import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../theme/ThemeContext';
import './ThemeToggle.css';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className={`theme-toggle cursor-target ${className}`}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className="theme-toggle__icon"
          initial={{ opacity: 0, rotate: -40, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 40, scale: 0.7 }}
          transition={{ duration: 0.28 }}
          aria-hidden="true"
        >
          {isDark ? (
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
              <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
              <path
                d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.05 5.05l1.55 1.55M17.4 17.4l1.55 1.55M5.05 18.95l1.55-1.55M17.4 6.6l1.55-1.55"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
              <path
                d="M19.5 13.2A7.5 7.5 0 1 1 10.8 4.5 6 6 0 0 0 19.5 13.2Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
