import { motion } from 'framer-motion';
import { projects, contributions } from '../../data/portfolio';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-inner">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Selected work</h2>
        <p className="section-lead">
          Enterprise applications designed, built, deployed and supported for Refex Group and
          Sparzana Aviation — from aviation ops to QR utilities and canteen systems.
        </p>

        <div className="projects__list">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              className={`project ${project.featured ? 'is-featured' : ''}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: Math.min(i * 0.06, 0.3), duration: 0.5 }}
            >
              <div className="project__index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="project__body">
                <div className="project__head">
                  <h3>{project.name}</h3>
                  {project.featured && <span className="project__badge">Featured</span>}
                </div>
                {project.client && <p className="project__client">{project.client}</p>}
                <p>{project.description}</p>
                {project.highlights?.length > 0 && (
                  <ul className="project__highlights">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                <ul className="project__tech">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project__links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Application
                    </a>
                  )}
                  {project.websiteUrl && (
                    <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                      Website
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Digital card demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="projects__contrib">
          <p className="section-label">Additional contributions</p>
          <h3 className="projects__contrib-title">Integrations &amp; supporting systems</h3>
          <ul className="projects__contrib-list">
            {contributions.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <strong>{item.name}</strong>
                <span>{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
