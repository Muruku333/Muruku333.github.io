import { aboutInfo, profile } from '../../data/portfolio';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-inner">
        <h2 className="section-title" data-aos="fade-up">
          About Me
        </h2>
        <p className="section-lead" data-aos="fade-up">
          {profile.bio}
        </p>

        <div className="about-grid">
          <div className="glass-card about-card" data-aos="fade-up">
            <h3>What I do</h3>
            <p>{profile.summary}</p>
          </div>

          <div className="glass-card about-card about-info" data-aos="fade-up" data-aos-delay="100">
            <h3>Contact Information</h3>
            <ul>
              {aboutInfo.map((row) => (
                <li key={row.label}>
                  <span>{row.label}</span>
                  {row.href ? <a href={row.href}>{row.value}</a> : <strong>{row.value}</strong>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
