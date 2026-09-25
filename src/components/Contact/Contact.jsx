import { profile } from '../../data/portfolio';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-inner">
        <h2 className="section-title" data-aos="fade-up">
          Let&apos;s Work Together
        </h2>
        <p className="section-lead" data-aos="fade-up">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>

        <div className="glass-card contact-card" data-aos="fade-up">
          <ul>
            <li>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span>Location</span>
              <strong>{profile.location}</strong>
            </li>
            <li>
              <span>Phone</span>
              <a href={profile.phoneHref}>{profile.phone}</a>
            </li>
            {profile.linkedin ? (
              <li>
                <span>LinkedIn</span>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  Connect
                </a>
              </li>
            ) : null}
          </ul>
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
