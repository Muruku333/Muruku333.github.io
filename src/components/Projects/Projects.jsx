import projects from '../../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-inner">
        <h2 className="section-title" data-aos="fade-up">
          Projects
        </h2>
        <p className="section-lead" data-aos="fade-up">
          Some of the projects I&apos;ve worked on
        </p>
        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
