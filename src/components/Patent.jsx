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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ background: 'var(--bg-card)', border: '1px solid rgba(212,175,55,0.4)', borderRadius: '16px', padding: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-head)', fontSize: '11px', letterSpacing: '3px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem', opacity: 0.8 }}>
              German Patent
            </div>
            <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#fff', marginBottom: '1rem', lineHeight: 1.3 }}>
              Object Detection for Autonomous Vehicles
            </h3>
            <div style={{ fontSize: '0.95rem', color: 'var(--gold)', marginBottom: '1.5rem', opacity: 0.8 }}>
              Granted: 20 September 2024
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              A patented system for detecting and classifying objects in real-time for autonomous vehicle perception. This work addresses the unique challenges of traffic scenarios in diverse environments, contributing to safer and more reliable self-driving systems.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {[
              { label: 'Patent Type', value: 'German Patent' },
              { label: 'Field', value: 'Autonomous Vehicles / Computer Vision' },
              { label: 'Technology', value: 'Object Detection & Classification' },
              { label: 'Status', value: 'Granted' },
              { label: 'Grant Date', value: '20 September 2024' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.8rem', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {item.label}
                </span>
                <span style={{ fontSize: '13px', color: '#fff', fontWeight: 600 }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Patent;