import { motion } from 'framer-motion';
import { skills } from '../../data/portfolio';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-inner">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Technical toolkit</h2>
        <p className="section-lead">
          Frontend, backend, databases, integrations, automation and enterprise platforms used
          across Refex Group applications.
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
