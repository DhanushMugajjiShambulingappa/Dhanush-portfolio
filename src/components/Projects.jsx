import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const [expanded, setExpanded] = useState(null);

  const projects = [
    {
      id: 0,
      title: 'Knowledge-Augmented VLM for Physical World Reasoning',
      date: 'Spring 2026',
      tags: ['PyTorch', 'HuggingFace', 'LoRA', 'Flask', 'ConceptNet', 'SLURM'],
      summary: 'Fine-tuned PaliGemma-3B with LoRA to answer physical world reasoning questions using a knowledge graph pipeline.',
      details: [
        'Fine-tuned PaliGemma-3B with LoRA using only 0.77% of 2.9B parameters to answer physical world reasoning questions with structured PREDICTION + CONFIDENCE + REASONING output.',
        'Built an offline ConceptNet knowledge graph pipeline indexing 112,905 physical facts injected into prompts at inference time.',
        'Developed a full-stack Flask web demo for live KG fact retrieval from images and free-form questions.',
        'Targeting 15% accuracy improvement over baseline on the PhysBench benchmark.',
      ],
    },
    {
      id: 1,
      title: 'Autonomous Driving in India: Traffic Dataset & Object Detection',
      date: 'Spring 2024',
      tags: ['YOLOv5', 'PyTorch', 'OpenCV', 'Python', 'FP16'],
      summary: 'Built an 85GB annotated Indian traffic dataset and fine-tuned YOLOv5s for real-time object detection.',
      details: [
        'Built an ~85GB annotated Indian traffic dataset from dashcam footage, extracting and labeling 5,000+ images across 8 object classes including cars, buses, two-wheelers, auto-rickshaws, pedestrians, and animals.',
        'Covered village roads, city highways, and busy junctions under varied weather and lighting conditions.',
        'Fine-tuned YOLOv5s for real-time object detection at 640px resolution over 250 training epochs with FP16 inference optimization.',
        'Validated against the COCO 2017 benchmark (~5,000 images) with custom Indian-specific object classes.',
      ],
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
            // what i have built
          </div>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
            Projects
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--gold)', marginBottom: '3rem', opacity: 0.7 }} />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem', cursor: 'pointer', transition: 'border-color 0.3s' }}
              onClick={() => setExpanded(expanded === project.id ? null : project.id)}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.5)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', fontWeight: 700, color: '#fff', maxWidth: '75%' }}>
                  {project.title}
                </h3>
                <span style={{ fontSize: '12px', color: 'var(--gold)', letterSpacing: '1px', opacity: 0.7 }}>
                  {project.date}
                </span>
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.2rem' }}>
                {project.summary}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.2rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ padding: '0.25rem 0.75rem', background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.15)', borderRadius: '20px', fontSize: '12px', color: 'var(--gold)', letterSpacing: '0.5px' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ fontSize: '12px', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase', opacity: 0.7 }}>
                {expanded === project.id ? '▲ Show Less' : '▼ Show More'}
              </div>

              {expanded === project.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}
                >
                  <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {project.details.map((detail, j) => (
                      <li key={j} style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ marginTop: '2rem', background: 'var(--bg-card)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-head)', fontSize: '11px', letterSpacing: '2px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              German Patent
            </div>
            <div style={{ fontSize: '1rem', color: '#fff', fontWeight: 600 }}>
              Object Detection for Autonomous Vehicles
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
              Granted 20/09/2024
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;