import { motion } from 'framer-motion';
import { certifications, education, experiences } from '../../data/portfolio';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section-inner">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Professional journey</h2>
        <p className="section-lead">
          Full-stack delivery for Refex Group — enterprise apps, integrations, deployment and
          production support.
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
              <div className="experience__card">
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

        <motion.div
          className="experience__edu"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Education</p>
          <ul className="experience__edu-list">
            {education.map((item) => (
              <li key={item.degree}>
                <h3>{item.degree}</h3>
                <p className="experience__edu-school">{item.school}</p>
                <p>
                  {item.board} · {item.date} · {item.score}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="experience__certs"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Certifications &amp; training</p>
          <ul>
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
