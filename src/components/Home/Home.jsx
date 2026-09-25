import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { profile, siteConfig } from '../../data/portfolio';
import './Home.css';

const socials = [
  { label: 'GitHub', href: profile.github },
  profile.linkedin ? { label: 'LinkedIn', href: profile.linkedin } : null,
  { label: 'Email', href: `mailto:${profile.email}` },
].filter(Boolean);

export default function Home() {
  const typeSequence = profile.roles.flatMap((role) => [role, 1200]);

  return (
    <section id="home" className="home-section">
      <div className="home-section__inner">
        <div className="home-visual" data-aos="fade-right">
          <div className="profile-ring">
            <div className="profile-fallback" aria-hidden="true">
              {profile.brand}
            </div>
            <span className="orbit-ball orbit-ball-1" />
            <span className="orbit-ball orbit-ball-2" />
          </div>
        </div>

        <div className="home-content" data-aos="fade-left">
          <p className="home-hello">Hi, I&apos;m</p>
          <h1 className="home-name">{profile.name}</h1>
          <div className="typing-container">
            <TypeAnimation
              sequence={typeSequence}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="typing-text"
            />
          </div>
          <p className="home-tagline">{profile.tagline}</p>

          <motion.div
            className="home-socials"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
            }}
          >
            {socials.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="home-social"
                aria-label={item.label}
                variants={{
                  hidden: { opacity: 0, y: 12, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>

          <div className="home-actions">
            <Link to="projects" smooth duration={500} offset={-70} className="btn btn--primary">
              View My Projects
            </Link>
            <Link to="contact" smooth duration={500} offset={-70} className="btn btn--ghost">
              Contact Me
            </Link>
            <a
              className="btn btn--ghost"
              href={siteConfig.resumePath}
              download={siteConfig.resumeFileName}
            >
              Download CV
            </a>
          </div>

          <Link
            to="about"
            smooth
            duration={500}
            offset={-70}
            className="scroll-indicator"
            aria-label="Scroll to About"
          >
            ↓
          </Link>
        </div>
      </div>
    </section>
  );
}
