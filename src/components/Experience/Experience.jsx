import { certifications, education, experiences } from '../../data/portfolio';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-inner">
        <h2 className="section-title" data-aos="fade-up">
          Resume
        </h2>
        <p className="section-lead" data-aos="fade-up">
          Experience, education and certifications
        </p>

        <div className="experience-list">
          {experiences.map((job) => (
            <article key={`${job.company}-${job.date}`} className="glass-card experience-card" data-aos="fade-up">
              <div className="experience-meta">
                <span>{job.date}</span>
                <span>{job.type}</span>
                <span>{job.location}</span>
              </div>
              <h3>
                {job.role} · {job.company}
              </h3>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="experience-bottom">
          {education.map((item) => (
            <div key={item.degree} className="glass-card experience-side" data-aos="fade-up">
              <h3>Education</h3>
              <strong>{item.degree}</strong>
              <p>{item.school}</p>
              <p>
                {item.board} · {item.date} · {item.score}
              </p>
            </div>
          ))}
          <div className="glass-card experience-side" data-aos="fade-up" data-aos-delay="80">
            <h3>Certifications</h3>
            <ul>
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
