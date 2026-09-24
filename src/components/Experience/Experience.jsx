import { motion } from 'framer-motion';
import { certifications, education, experiences } from '../../data/portfolio';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section-inner">
        <motion.p
          className="section-index"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional journey
        </motion.h2>
        <p className="section-lead">
          Full-stack delivery for Refex Group — architecture, integrations, deployment and support.
        </p>

        <ol className="experience__timeline">
          {experiences.map((job, i) => (
            <motion.li
              key={`${job.company}-${job.date}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
            >
              <div className="experience__dot" aria-hidden="true" />
              <div className="experience__card glass">
                <div className="experience__meta">
                  <span>{job.date}</span>
                  <span>{job.type}</span>
                  <span>{job.location}</span>
                </div>
                <h3>
                  {job.role}
                  <span> · {job.company}</span>
                </h3>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>

        <div className="experience__bottom">
          <div>
            <p className="section-index">Education</p>
            {education.map((item) => (
              <div key={item.degree} className="experience__edu glass">
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
                <p>
                  {item.board} · {item.date} · {item.score}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p className="section-index">Certifications</p>
            <ul className="experience__certs glass">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
