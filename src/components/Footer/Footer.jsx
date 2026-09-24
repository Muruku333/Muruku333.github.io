import { profile } from '../../data/portfolio';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__eye" aria-hidden="true" />
          <strong>{profile.fullName}</strong>
        </div>
        <p>Mayūra palette · sapphire · teal · gold</p>
        <p className="footer__copy">© {year} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
