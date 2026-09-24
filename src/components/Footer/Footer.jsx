import { profile } from '../../data/portfolio';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="footer__stack">Built with React • Node.js • MySQL</p>
        <div className="footer__social">
          {profile.github && (
            <a
              className="cursor-target"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
          )}
          {profile.linkedin && (
            <a
              className="cursor-target"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          )}
          <a className="cursor-target" href={`mailto:${profile.email}`} aria-label="Email">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
