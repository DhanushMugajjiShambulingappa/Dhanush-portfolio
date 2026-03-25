import React from 'react';
import { motion } from 'framer-motion';

function Activities() {
  const activities = [
    {
      role: 'Officer of Professional Development',
      event: 'Indian Student Association',
      org: 'Arizona State University, Tempe, AZ',
      year: '2025',
      description: 'Supporting the professional growth of Indian students at ASU by organizing networking events, career development workshops, and conducting multiple events.',
    },
    {
      role: 'Convener',
      event: 'Technical Fest 2024',
      org: 'Nitte Meenakshi Institute of Technology',
      year: '2024',
      description: 'Led the organization of the college technical fest, managing multiple events across different departments and clubs.',
    },
    {
      role: 'Co-Convener',
      event: 'Technical Fest 2023',
      org: 'Nitte Meenakshi Institute of Technology',
      year: '2023',
      description: 'Co-led the organization of the technical fest, coordinating teams and ensuring smooth execution of all events.',
    },
    {
      role: 'Joint Events Head',
      event: 'Entrepreneurship Club',
      org: 'Nitte Meenakshi Institute of Technology',
      year: '2023-2024',
      description: 'Managed and organized entrepreneurship-focused events, fostering innovation and startup culture among students.',
    },
    {
      role: 'Events Head',
      event: 'IEEE Club',
      org: 'Nitte Meenakshi Institute of Technology',
      year: '2023-2024',
      description: 'Organized and managed technical events for the IEEE student chapter, promoting engineering excellence.',
    },
    {
      role: 'Volunteer',
      event: 'NGO Arogya Bharathi',
      org: 'Community Service',
      year: '2024',
      description: 'Monitored disturbance levels of primary school kids to help them focus better on studies. Also planted saplings at various locations to enhance greenery levels.',
    },
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
            // beyond the code
          </div>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
            Extra-Curricular Activities
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--gold)', marginBottom: '3rem', opacity: 0.7 }} />
        </motion.div>

        <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '1px solid var(--border)' }}>
          {activities.map((activity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{ marginBottom: '2rem', position: 'relative' }}
            >
              <div style={{ position: 'absolute', left: '-2.45rem', top: '6px', width: '10px', height: '10px', background: 'var(--gold)', borderRadius: '50%', opacity: 0.8 }} />
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem', transition: 'border-color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.5)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-head)', fontSize: '13px', color: 'var(--gold)', letterSpacing: '1px' }}>
                      {activity.role}
                    </span>
                    <span style={{ color: 'var(--text-muted)', margin: '0 0.5rem' }}>—</span>
                    <span style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 600 }}>
                      {activity.event}
                    </span>
                  </div>
                  <span style={{ fontSize: '12px', color: 'var(--gold)', opacity: 0.7, letterSpacing: '1px' }}>
                    {activity.year}
                  </span>
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '0.8rem', letterSpacing: '0.5px' }}>
                  {activity.org}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Activities;