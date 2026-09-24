import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/portfolio';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact">
      <div className="section-inner contact__layout">
        <div>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let&apos;s build the next solution</h2>
          <p className="section-lead">
            Open to roles, collaborations and product builds across full-stack and enterprise
            application development.
          </p>

          <ul className="contact__channels">
            <li>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span>Phone</span>
              <a href={profile.phoneHref}>{profile.phone}</a>
            </li>
            <li>
              <span>Location</span>
              <span className="contact__plain">{profile.location}</span>
            </li>
            <li>
              <span>GitHub</span>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                github.com/Muruku333
              </a>
            </li>
          </ul>
        </div>

        <motion.form
          className="contact__form"
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <label>
            Name
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              required
              autoComplete="name"
              placeholder="Your name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              autoComplete="email"
              placeholder="you@example.com"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows={5}
              placeholder="Tell me about the role or project..."
            />
          </label>
          <button type="submit" className="btn btn--primary">
            Send message
          </button>
          {sent && (
            <p className="contact__thanks" role="status">
              Opening your email client — if it didn&apos;t open, write to {profile.email}.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
