import { profile } from '../../data/portfolio';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p>Built with React • Node.js • MySQL</p>
        <div className="footer__links">
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
