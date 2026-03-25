import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
  const experiences = [
    {
      role: 'Web Developer Intern',
      company: 'Hindustan Aeronautics Limited',
      location: 'Bengaluru, India',
      duration: 'Jul 2023 – Aug 2023',
      tags: ['PL/SQL', 'HTML', 'CSS', 'JavaScript', 'PHP', 'RBAC'],
      details: [
        'Designed and developed an Employee Clearance Portal using PL/SQL, HTML, CSS, JavaScript, and PHP to digitize and track employee exit workflows across multiple departments at a large-scale defense organization.',
        'Reduced manual clearance processing time by approximately 30–40% by automating multi-stage approval workflows and centralizing employee records into a unified system.',
        'Implemented role-based access control (RBAC) to manage permissions across different user types: employees, department heads, and HR, ensuring secure and structured access to sensitive clearance data.',
      ],
    },
  ];

  const coursework = [
    'Statistical Machine Learning',
    'Data Visualization',
    'Information Assurance & Security',
    'Knowledge Representation & Reasoning',
    'Semantic Web Mining',
    'Applied Cryptography',
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
            // my journey
          </div>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
            Experience
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--gold)', marginBottom: '3rem', opacity: 0.7 }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
          <div>
            <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '1px solid var(--border)' }}>
              <div style={{ position: 'absolute', left: '-5px', top: '6px', width: '9px', height: '9px', background: 'var(--gold)', borderRadius: '50%' }} />
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.8rem', transition: 'border-color 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.5)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1rem', fontWeight: 700, color: '#fff' }}>
                      {exp.role}
                    </h3>
                    <span style={{ fontSize: '12px', color: 'var(--gold)', letterSpacing: '1px', opacity: 0.7 }}>
                      {exp.duration}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--gold)', marginBottom: '0.3rem', opacity: 0.8 }}>
                    {exp.company}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.2rem' }}>
                    {exp.location}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.2rem' }}>
                    {exp.tags.map(tag => (
                      <span key={tag} style={{ padding: '0.25rem 0.75rem', background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.15)', borderRadius: '20px', fontSize: '12px', color: 'var(--gold)', letterSpacing: '0.5px' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {exp.details.map((detail, j) => (
                      <li key={j} style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.8rem', marginBottom: '1.5rem' }}>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: '11px', letterSpacing: '2px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.2rem', paddingBottom: '0.8rem', borderBottom: '1px solid var(--border)' }}>
                Relevant Coursework
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {coursework.map((course, i) => (
                  <motion.div
                    key={course}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                    viewport={{ once: true }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}
                  >
                    <div style={{ width: '6px', height: '6px', background: 'var(--gold)', borderRadius: '50%', flexShrink: 0, opacity: 0.7 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '12px', padding: '1.8rem' }}>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: '11px', letterSpacing: '2px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Connect
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <a href="mailto:dmugajji@asu.edu" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--gold)', opacity: 0.7 }}>✉</span> dmugajji@asu.edu
                </a>
                <a href="tel:2603644981" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--gold)', opacity: 0.7 }}>✆</span> 260-364-4981
                </a>
                <a href="https://linkedin.com/in/dhanushshambulingappa" target="_blank" rel="noreferrer" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--gold)', opacity: 0.7 }}>in</span> linkedin.com/in/dhanushshambulingappa
                </a>
                <a href="https://github.com/DhanushMugajjiShambulingappa" target="_blank" rel="noreferrer" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--gold)', opacity: 0.7 }}>gh</span> github.com/DhanushMugajjiShambulingappa
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Experience;