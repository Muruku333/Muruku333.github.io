import { motion } from 'framer-motion';
import { skills } from '../../data/portfolio';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-inner">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Colours in the toolkit</h2>
        <p className="section-lead">
          A spectrum of languages and tools — each one a barb on the feather.
        </p>

        <div className="skills__rows">
          {skills.map((group, i) => (
            <motion.div
              key={group.group}
              className="skills__row"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
            >
              <h3>{group.group}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
