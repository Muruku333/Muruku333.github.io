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
    // Frontend-only demo — wire to EmailJS / Formspree / your API later.
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact">
      <div className="section-inner contact__layout">
        <div>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let&apos;s build something iridescent</h2>
          <p className="section-lead">
            Say hello — whether it&apos;s a role, a collaboration, or a curious idea.
          </p>

          <ul className="contact__channels">
            <li>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span>GitHub</span>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                Profile
              </a>
            </li>
            <li>
              <span>LinkedIn</span>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                Connect
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
              placeholder="What should we create together?"
            />
          </label>
          <button type="submit" className="btn btn--primary">
            Send message
          </button>
          {sent && (
            <p className="contact__thanks" role="status">
              Thanks — your message is ready locally. Connect a backend to deliver it.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
