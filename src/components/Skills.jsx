import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const skillGroups = [
    { category: 'Languages', skills: ['Python', 'C', 'C++', 'Java', 'HTML', 'CSS'] },
    { category: 'Machine Learning', skills: ['PyTorch', 'TensorFlow', 'HuggingFace', 'LoRA', 'CNN', 'Knowledge Graphs', 'Fine-Tuning VLMs', 'Classification', 'Regression', 'Predictive Modelling'] },
    { category: 'Computer Vision', skills: ['OpenCV', 'YOLOv5', 'Object Detection', 'Image Annotation', 'FP16 Inference', 'Dataset Management'] },
    { category: 'Data Science', skills: ['Data Cleaning', 'Data Preprocessing', 'Data Visualization', 'Big Data Analytics', 'PowerBI', 'Pandas', 'NumPy'] },
    { category: 'Frameworks & Libraries', skills: ['Flask', 'ConceptNet', 'HuggingFace Transformers'] },
    { category: 'Dev & Deployment', skills: ['Docker', 'Git', 'GitHub', 'CI/CD', 'AWS', 'Google Cloud', 'SLURM', 'Android Studio', 'Jupyter Notebook'] },
    { category: 'Databases', skills: ['SQL', 'MongoDB'] },
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
            // technical arsenal
          </div>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
            Skills
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--gold)', marginBottom: '3rem', opacity: 0.7 }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem', transition: 'border-color 0.3s, background 0.3s' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(212,175,55,0.5)';
                e.currentTarget.style.background = 'var(--bg-card-hover)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = 'var(--bg-card)';
              }}
            >
              <div style={{ fontFamily: 'var(--font-head)', fontSize: '11px', letterSpacing: '2px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.2rem', paddingBottom: '0.8rem', borderBottom: '1px solid var(--border)' }}>
                {group.category}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{ padding: '0.3rem 0.8rem', background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.15)', borderRadius: '20px', fontSize: '13px', color: 'var(--text)', letterSpacing: '0.5px' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;