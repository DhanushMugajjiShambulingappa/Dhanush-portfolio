import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Certifications() {
  const [selected, setSelected] = useState(null);

  const certifications = [
    { title: 'DevOps & Google Cloud Computing Foundations', issuer: 'Google Cloud Skill Boost Program', year: '2023-2024', color: 'rgba(66,133,244,0.15)', border: 'rgba(66,133,244,0.3)' },
    { title: 'Skills and Personality Development Program', issuer: 'NMIT x AICTE', year: '2023', color: 'rgba(212,175,55,0.1)', border: 'rgba(212,175,55,0.3)' },
    { title: 'Entrepreneurship Essentials', issuer: 'NPTEL', year: '2023', color: 'rgba(212,175,55,0.1)', border: 'rgba(212,175,55,0.3)' },
    { title: 'Joy Of Computing Using Python', issuer: 'NPTEL', year: '2022', color: 'rgba(212,175,55,0.1)', border: 'rgba(212,175,55,0.3)' },
    { title: 'Entrepreneurship Workshop', issuer: 'IIT Bombay', year: '2022', color: 'rgba(180,0,0,0.15)', border: 'rgba(180,0,0,0.3)' },
    { title: 'Artificial Intelligence', issuer: 'SmartKnower', year: '2022', color: 'rgba(123,47,255,0.15)', border: 'rgba(123,47,255,0.3)' },
    { title: 'Java Programming Fundamentals', issuer: 'Infosys Springboard', year: '2022', color: 'rgba(0,112,243,0.15)', border: 'rgba(0,112,243,0.3)' },
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
            // credentials & learning
          </div>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
            Certification Courses
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--gold)', marginBottom: '1rem', opacity: 0.7 }} />
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
            Click on any card to view the scanned certificate.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              onClick={() => setSelected(i)}
              style={{ background: cert.color, border: `1px solid ${cert.border}`, borderRadius: '12px', padding: '1.5rem', cursor: 'pointer', transition: 'transform 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ width: '36px', height: '36px', background: 'rgba(212,175,55,0.15)', border: '1px solid var(--border)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
                  ✦
                </div>
                <span style={{ fontSize: '12px', color: 'var(--gold)', opacity: 0.7, letterSpacing: '1px' }}>{cert.year}</span>
              </div>
              <h3 style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 600, lineHeight: 1.5, marginBottom: '0.5rem' }}>
                {cert.title}
              </h3>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                {cert.issuer}
              </div>
              <div style={{ marginTop: '1rem', fontSize: '12px', color: 'var(--gold)', letterSpacing: '1px', opacity: 0.7 }}>
                View Certificate →
              </div>
            </motion.div>
          ))}
        </div>

        {selected !== null && (
          <div
            onClick={() => setSelected(null)}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.85)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '2rem', maxWidth: '600px', width: '100%' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1rem', color: '#fff', marginBottom: '0.5rem' }}>
                    {certifications[selected].title}
                  </h3>
                  <div style={{ fontSize: '13px', color: 'var(--gold)', opacity: 0.8 }}>
                    {certifications[selected].issuer} · {certifications[selected].year}
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  style={{ background: 'none', border: '1px solid var(--border)', borderRadius: '6px', color: 'var(--text-muted)', padding: '0.4rem 0.8rem', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: '13px' }}
                >
                  Close
                </button>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '8px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '1px', textAlign: 'center' }}>
                  Upload your scanned certificate image to display it here.
                </div>
                <div style={{ fontSize: '12px', color: 'var(--gold)', opacity: 0.6, letterSpacing: '1px' }}>
                  Add image to src/assets/certificates/
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Certifications;