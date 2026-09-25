import skills from '../../data/skills';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-inner">
        <h2 className="section-title" data-aos="fade-up">
          My Skills
        </h2>
        <p className="section-lead" data-aos="fade-up">
          Technologies I work with
        </p>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <article
              key={group.id}
              className="glass-card skills-card"
              data-aos="fade-up"
              data-aos-delay={String(i * 80)}
            >
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
