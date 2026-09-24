import { motion } from 'framer-motion';
import projects from '../../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-inner">
        <motion.p
          className="section-index"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          03 · My Projects
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Some of the projects I&apos;ve worked on
        </motion.h2>
        <p className="section-lead">
          Production enterprise systems across aviation, HR, QR utilities and canteen operations.
        </p>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
