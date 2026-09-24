import { motion } from 'framer-motion';
import { aboutHighlights, profile } from '../../data/portfolio';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-inner">
        <p className="section-label">About</p>
        <h2 className="section-title">The plumage behind the code</h2>
        <p className="section-lead">{profile.bio}</p>

        <div className="about__grid">
          {aboutHighlights.map((item, i) => (
            <motion.article
              key={item.title}
              className="about__panel"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>

        <dl className="about__meta">
          <div>
            <dt>Based in</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Product &amp; web engineering</dd>
          </div>
          <div>
            <dt>Open to</dt>
            <dd>Roles · collaborations · builds</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
