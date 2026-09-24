import { motion } from 'framer-motion';
import skills from '../../data/skills';
import './Skills.css';

const ICONS = {
  monitor: (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" aria-hidden="true">
      <rect x="3" y="4" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="7" cy="7" r="1" fill="currentColor" />
      <circle cx="7" cy="17" r="1" fill="currentColor" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" aria-hidden="true">
      <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  wrench: (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22" aria-hidden="true">
      <path
        d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-2.5 2.5-2.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-inner">
        <motion.p
          className="section-index"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          02 · My Skills
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technologies I work with
        </motion.h2>
        <p className="section-lead">
          A focused toolkit for building, shipping and supporting production web applications.
        </p>

        <div className="skills__grid">
          {skills.map((group, i) => (
            <motion.article
              key={group.id}
              className="skills__card glass cursor-target"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              whileHover={{ y: -8 }}
            >
              <div className="skills__icon">{ICONS[group.icon]}</div>
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
