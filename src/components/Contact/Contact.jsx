import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { profile } from '../../data/portfolio';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section-inner contact__layout">
        <div>
          <motion.p
            className="section-index"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            04 · Let&apos;s Work Together
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Have a project in mind or just want to say hi?
          </motion.h2>
          <p className="section-lead">Feel free to reach out.</p>
          <div className="contact__feather" aria-hidden="true" />
        </div>

        <motion.div
          className="contact__card glass"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ul className="contact__channels">
            <li>
              <span>Email</span>
              <a className="cursor-target" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </li>
            <li>
              <span>Location</span>
              <p>{profile.location}</p>
            </li>
            {profile.linkedin ? (
              <li>
                <span>LinkedIn</span>
                <a
                  className="cursor-target"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect
                </a>
              </li>
            ) : null}
            <li>
              <span>Phone</span>
              <a className="cursor-target" href={profile.phoneHref}>
                {profile.phone}
              </a>
            </li>
          </ul>

          <a className="btn btn--primary cursor-target" href={`mailto:${profile.email}`}>
            Get In Touch →
          </a>
        </motion.div>
      </div>

      <Link to="home" smooth duration={500} className="sr-only">
        Back to top
      </Link>
    </section>
  );
}
