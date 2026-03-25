import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: '#050505',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          <div style={{ position: 'absolute', top: '20px', left: '20px', width: '20px', height: '20px', borderTop: '1px solid rgba(212,175,55,0.5)', borderLeft: '1px solid rgba(212,175,55,0.5)' }} />
          <div style={{ position: 'absolute', top: '20px', right: '20px', width: '20px', height: '20px', borderTop: '1px solid rgba(212,175,55,0.5)', borderRight: '1px solid rgba(212,175,55,0.5)' }} />
          <div style={{ position: 'absolute', bottom: '20px', left: '20px', width: '20px', height: '20px', borderBottom: '1px solid rgba(212,175,55,0.5)', borderLeft: '1px solid rgba(212,175,55,0.5)' }} />
          <div style={{ position: 'absolute', bottom: '20px', right: '20px', width: '20px', height: '20px', borderBottom: '1px solid rgba(212,175,55,0.5)', borderRight: '1px solid rgba(212,175,55,0.5)' }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: '0.3rem' }}>
              DMS
            </div>
            <div style={{ fontFamily: 'var(--font-head)', fontSize: '10px', letterSpacing: '6px', color: 'var(--gold)', textTransform: 'uppercase', opacity: 0.7 }}>
              // portfolio
            </div>
          </motion.div>

          <div style={{ width: '200px', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ width: '100%', height: '1px', background: 'rgba(212,175,55,0.15)', borderRadius: '1px', overflow: 'hidden' }}>
              <motion.div
                style={{ height: '100%', background: 'var(--gold)', borderRadius: '1px' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-head)', fontSize: '9px', letterSpacing: '3px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Loading
              </span>
              <span style={{ fontFamily: 'var(--font-head)', fontSize: '9px', letterSpacing: '2px', color: 'var(--gold)', opacity: 0.7 }}>
                {Math.min(Math.round(progress), 100)}%
              </span>
            </div>
          </div>

          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ position: 'absolute', bottom: '3rem', fontFamily: 'var(--font-head)', fontSize: '9px', letterSpacing: '4px', color: 'var(--text-dim)', textTransform: 'uppercase' }}
          >
            Initializing Universe
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;