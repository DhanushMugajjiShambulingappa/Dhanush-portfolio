import React from 'react';
import { motion } from 'framer-motion';

function Patent() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', padding: '6rem 3rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div style={{ fontFamily: 'var(--font-head)', fontSize: '11px', letterSpacing: '4px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.8rem', opacity: 0.8 }}>
            // intellectual property
          </div>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
            Patent
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--gold)', marginBottom: '3rem', opacity: 0.7 }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', background: 'var(--bg-card)', border: '1px solid rgba(212,175,55,0.4)', borderRadius: '16px', padding: '3rem' }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-head)', fontSize: '11px', letterSpacing: '3px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem', opacity: 0.8 }}>
              German Utility Patent · Gebrauchsmuster
            </div>
            <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 700, color: '#fff', marginBottom: '0.5rem', lineHeight: 1.3 }}>
              System for Object Detection for Autonomous Vehicles
            </h3>
            <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '0.85rem', fontWeight: 400, color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.3 }}>
              System zur Objekterkennung für autonome Fahrzeuge
            </h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              A patented system for detecting and classifying objects in real-time for autonomous vehicle perception, addressing the unique challenges of diverse traffic environments including Indian road conditions.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Covers novel approaches to detecting auto-rickshaws, two-wheelers, animals, and pedestrians across varied weather and lighting conditions — object classes critically underrepresented in standard benchmarks.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://depatisnet.dpma.de/DepatisNet/depatisnet?action=bibdat&docid=DE202024105420U1"
                target="_blank"
                rel="noreferrer"
                style={{ padding: '0.6rem 1.4rem', background: 'var(--gold)', border: 'none', borderRadius: '6px', color: '#050505', fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}
              >
                View on DEPATISnet
              </a>
              <a
                href="https://worldwide.espacenet.com/patent/search?q=pn%3DDE202024105420U1"
                target="_blank"
                rel="noreferrer"
                style={{ padding: '0.6rem 1.4rem', background: 'none', border: '1px solid rgba(212,175,55,0.4)', borderRadius: '6px', color: 'var(--gold)', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}
              >
                View on Espacenet
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { label: 'Patent Number', value: 'DE 20 2024 105 420' },
              { label: 'Type', value: 'Gebrauchsmuster (Utility Model)' },
              { label: 'IPC Classification', value: 'B60W 40/02' },
              { label: 'Field', value: 'Autonomous Vehicles · Computer Vision' },
              { label: 'Filing Date', value: '20 September 2024' },
              { label: 'Registration Date', value: '29 October 2024' },
              { label: 'Status', value: 'Registered ✓' },
              { label: 'Institution', value: 'Nitte Meenakshi Institute of Technology' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                viewport={{ once: true }}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0', borderBottom: '1px solid var(--border)' }}
              >
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {item.label}
                </span>
                <span style={{ fontSize: '13px', color: item.label === 'Status' ? 'var(--gold)' : '#fff', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Patent;