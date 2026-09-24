import { motion } from 'framer-motion';
import { aboutInfo, profile } from '../../data/portfolio';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-inner about__layout">
        <div>
          <motion.p
            className="section-index"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            01 · About Me
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Turning Ideas Into Web Experiences
          </motion.h2>
          <motion.div
            className="about__bio"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
            {profile.bio.split('\n\n').map((para) => (
              <p key={para}>{para}</p>
            ))}
          </motion.div>
          <div className="about__feather" aria-hidden="true" />
        </div>

        <motion.aside
          className="about__card glass cursor-target"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          whileHover={{ y: -6 }}
        >
          <div className="about__card-glow" aria-hidden="true" />
          <dl>
            {aboutInfo.map((row) => (
              <div key={row.label} className="about__row">
                <dt>{row.label}</dt>
                <dd>
                  {row.href ? (
                    <a href={row.href} className="cursor-target">
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </motion.aside>
      </div>
    </section>
  );
}
