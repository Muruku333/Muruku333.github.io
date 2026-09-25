import './ProjectCard.css';

export default function ProjectCard({ project }) {
  const hasLive = Boolean(project.liveUrl);
  const hasGithub = Boolean(project.githubUrl);

  return (
    <article className="glass-card project-card" data-aos="fade-up">
      <div className="project-card__media">
        <img src={project.image} alt="" aria-hidden="true" loading="lazy" />
      </div>
      <div className="project-card__body">
        {project.subtitle && <p className="project-card__sub">{project.subtitle}</p>}
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul>
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-card__actions">
          {hasLive && (
            <a
              className="btn btn--primary"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          )}
          {hasGithub && (
            <a
              className="btn btn--ghost"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
