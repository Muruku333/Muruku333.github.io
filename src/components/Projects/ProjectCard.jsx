import { motion } from 'framer-motion';
import './ProjectCard.css';

export default function ProjectCard({ project, index = 0 }) {
  const hasLive = Boolean(project.liveUrl);
  const hasGithub = Boolean(project.githubUrl);

  return (
    <motion.article
      className="project-card glass cursor-target"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: Math.min(index * 0.08, 0.32), duration: 0.5 }}
    >
      <div className="project-card__media">
        <img src={project.image} alt="" aria-hidden="true" loading="lazy" />
        <div className="project-card__overlay" />
      </div>

      <div className="project-card__body">
        {project.subtitle && <p className="project-card__subtitle">{project.subtitle}</p>}
        <h3>{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        <ul className="project-card__tech">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          {hasLive && (
            <a
              className="btn btn--primary project-card__cta cursor-target"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project <span aria-hidden="true">→</span>
            </a>
          )}
          {hasGithub && (
            <a
              className="btn btn--ghost cursor-target"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
