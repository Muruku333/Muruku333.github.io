import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { profile } from '../../data/portfolio';
import PeacockFeather from '../PeacockMotif/PeacockFeather';
import './Home.css';

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="home">
      <div className="home__plume" aria-hidden="true">
        <motion.div
          className="home__feather-wrap"
          initial={{ opacity: 0, scale: 0.92, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <PeacockFeather className="home__feather" />
        </motion.div>
      </div>

      <div className="home__content">
        <motion.p
          className="home__greeting"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          Portfolio · Full Stack Developer
        </motion.p>

        <motion.h1
          className="home__brand"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          className="home__headline"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {profile.headline}
        </motion.p>

        <motion.div
          className="home__role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="home__role-label">I am a</span>
          <span key={roleIndex} className="home__role-value">
            {profile.roles[roleIndex]}
          </span>
        </motion.div>

        <motion.p
          className="home__tagline"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="home__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.55 }}
        >
          <Link to="projects" smooth duration={500} offset={-70} className="btn btn--primary">
            View work
          </Link>
          <Link to="contact" smooth duration={500} offset={-70} className="btn btn--ghost">
            Get in touch
          </Link>
        </motion.div>
      </div>

      <Link
        to="about"
        smooth
        duration={500}
        offset={-70}
        className="home__scroll"
        aria-label="Scroll to about"
      >
        <span />
      </Link>
    </section>
  );
}
