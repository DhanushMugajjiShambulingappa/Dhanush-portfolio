import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) return;
    window.location.href = `mailto:dmugajji@asu.edu?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.name}%0AEmail: ${formData.email}`;
    setSubmitted(true);
  };

  const contacts = [
    { label: 'Email', value: 'dmugajji@asu.edu', href: 'mailto:dmugajji@asu.edu' },
    { label: 'Phone', value: '260-364-4981', href: 'tel:2603644981' },
    { label: 'LinkedIn', value: 'linkedin.com/in/dhanushshambulingappa', href: 'https://linkedin.com/in/dhanushshambulingappa' },
    { label: 'GitHub', value: 'github.com/DhanushMugajjiShambulingappa', href: 'https://github.com/DhanushMugajjiShambulingappa' },
  ];

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', padding: '6rem 3rem', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div style={{ fontFamily: 'var(--font-head)', fontSize: '11px', letterSpacing: '4px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.8rem', opacity: 0.8 }}>
            // get in touch
          </div>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
            Contact Me
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--gold)', marginBottom: '1rem', opacity: 0.7 }} />
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '500px' }}>
            Have a question, opportunity, or just want to say hi? I would love to hear from you.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={{ padding: '0.85rem 1.2rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', fontSize: '0.95rem', fontFamily: 'var(--font-body)', outline: 'none' }}
              onFocus={e => e.target.style.borderColor = 'rgba(212,175,55,0.5)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={{ padding: '0.85rem 1.2rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', fontSize: '0.95rem', fontFamily: 'var(--font-body)', outline: 'none' }}
              onFocus={e => e.target.style.borderColor = 'rgba(212,175,55,0.5)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              style={{ padding: '0.85rem 1.2rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', fontSize: '0.95rem', fontFamily: 'var(--font-body)', outline: 'none', resize: 'vertical' }}
              onFocus={e => e.target.style.borderColor = 'rgba(212,175,55,0.5)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
            <button
              onClick={handleSubmit}
              style={{
                padding: '0.85rem 2rem',
                background: formData.name && formData.email && formData.message ? 'var(--gold)' : 'rgba(212,175,55,0.2)',
                border: 'none',
                borderRadius: '8px',
                color: formData.name && formData.email && formData.message ? '#050505' : 'var(--text-muted)',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                transition: 'all 0.2s',
              }}
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.2rem 1.5rem', textDecoration: 'none', display: 'block' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.5)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ fontSize: '11px', color: 'var(--gold)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  {item.value}
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;