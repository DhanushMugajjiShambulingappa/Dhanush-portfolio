import React from 'react';
import { motion } from 'framer-motion';

function About() {
  const stats = [
    { value: '4.0', label: 'GPA at ASU' },
    { value: '1', label: 'German Patent' },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '6rem 3rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div style={{ fontFamily: 'var(--font-head)', fontSize: '11px', letterSpacing: '4px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.8rem', opacity: 0.8 }}>
            // about me
          </div>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
            Who I Am
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--gold)', marginBottom: '2rem', opacity: 0.7 }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              I'm a graduate student at Arizona State University pursuing my M.S. in Computer Science with a perfect 4.0 GPA. My passion lies in building systems that can perceive, reason, and understand the physical world.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              From fine-tuning vision-language models with LoRA to building an 85GB annotated Indian traffic dataset from scratch, I thrive at the intersection of research and real-world engineering.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--text-muted)' }}>
              I hold a German patent in autonomous vehicle perception and have professional experience building production systems at Hindustan Aeronautics Limited, one of India's largest defense organizations.
            </p>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="mailto:dmugajji@asu.edu" style={{ padding: '0.6rem 1.5rem', background: 'var(--gold)', borderRadius: '6px', color: '#050505', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>
                Contact Me
              </a>
              <a href="https://linkedin.com/in/dhanushshambulingappa" target="_blank" rel="noreferrer" style={{ padding: '0.6rem 1.5rem', background: 'none', border: '1px solid rgba(212,175,55,0.4)', borderRadius: '6px', color: 'var(--gold)', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  viewport={{ once: true }}
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}
                >
                  <div style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: 'var(--gold)', marginBottom: '0.4rem' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
              <div style={{ fontSize: '12px', letterSpacing: '2px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem', fontFamily: 'var(--font-head)' }}>
                Education
              </div>
              <div style={{ fontSize: '1rem', color: '#fff', fontWeight: 600, marginBottom: '0.3rem' }}>
                M.S. Computer Science
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                Arizona State University · Tempe, AZ
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--gold)', opacity: 0.7 }}>
                Expected May 2027
              </div>
              <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Statistical Machine Learning · Data Visualization · Information Assurance · Knowledge Representation · Semantic Web Mining · Applied Cryptography
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;