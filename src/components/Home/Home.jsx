import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { profile, siteConfig } from '../../data/portfolio';
import HeroIllustration from './HeroIllustration';
import './Home.css';

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home__grid">
        <div className="home__copy">
          <motion.p
            className="home__hello"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            className="home__name"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            {profile.name}
          </motion.h1>

          <motion.p
            className="home__title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
          >
            {profile.title}
          </motion.p>

          <motion.p
            className="home__tagline"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="home__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.38 }}
          >
            <Link to="projects" smooth duration={500} offset={-70} className="btn btn--primary cursor-target">
              View My Projects →
            </Link>
            <Link to="contact" smooth duration={500} offset={-70} className="btn btn--secondary cursor-target">
              Contact Me
            </Link>
            <a
              className="btn btn--ghost cursor-target"
              href={siteConfig.resumePath}
              download={siteConfig.resumeFileName}
            >
              Download CV ↓
            </a>
          </motion.div>
        </div>

        <div className="home__visual">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
