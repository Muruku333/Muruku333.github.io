import { motion } from 'framer-motion';
import { projects } from '../../data/portfolio';
import './Projects.css';

export default function Projects() {
  const ordered = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));

  return (
    <section id="projects" className="section projects">
      <div className="section-inner">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Selected work</h2>
        <p className="section-lead">
          Featured pieces first — replace these with your real projects in{' '}
          <code>src/data/portfolio.js</code>.
        </p>

        <div className="projects__list">
          {ordered.map((project, i) => (
            <motion.article
              key={project.name}
              className={`project ${project.featured ? 'is-featured' : ''}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="project__index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="project__body">
                <div className="project__head">
                  <h3>{project.name}</h3>
                  {project.featured && <span className="project__badge">Featured</span>}
                </div>
                <p>{project.description}</p>
                <ul className="project__tech">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project__links">
                  {project.liveUrl && (
                    <a href={project.liveUrl}>Live</a>
                  )}
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    Source
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
