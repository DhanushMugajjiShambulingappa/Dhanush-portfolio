import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let stars = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      for (let i = 0; i < 250; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.5 + 0.2,
          o: Math.random() * 0.7 + 0.1,
          speed: Math.random() * 0.2 + 0.05,
          gold: Math.random() < 0.12,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.gold
          ? `rgba(212,175,55,${s.o})`
          : `rgba(255,255,255,${s.o})`;
        ctx.fill();
        s.o += (Math.random() - 0.5) * 0.03;
        s.o = Math.max(0.05, Math.min(0.9, s.o));
        s.y -= s.speed;
        if (s.y < -2) {
          s.y = canvas.height + 2;
          s.x = Math.random() * canvas.width;
        }
      });
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-wrapper" style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />

      <div style={{ position: 'absolute', top: '16px', left: '16px', width: '20px', height: '20px', borderTop: '2px solid var(--gold)', borderLeft: '2px solid var(--gold)', opacity: 0.4 }} />
      <div style={{ position: 'absolute', top: '16px', right: '16px', width: '20px', height: '20px', borderTop: '2px solid var(--gold)', borderRight: '2px solid var(--gold)', opacity: 0.4 }} />
      <div style={{ position: 'absolute', bottom: '16px', left: '16px', width: '20px', height: '20px', borderBottom: '2px solid var(--gold)', borderLeft: '2px solid var(--gold)', opacity: 0.4 }} />
      <div style={{ position: 'absolute', bottom: '16px', right: '16px', width: '20px', height: '20px', borderBottom: '2px solid var(--gold)', borderRight: '2px solid var(--gold)', opacity: 0.4 }} />

      <div className="hero-content" style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '4rem', padding: '0 4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ flexShrink: 0 }}
        >
          <div className="hero-photo" style={{ width: '200px', height: '200px', borderRadius: '50%', border: '3px solid var(--gold)', padding: '4px', background: 'rgba(212,175,55,0.1)' }}>
            <img
              src={require('../assets/profile.jpg')}
              alt="Dhanush Mugajji Shambulingappa"
              style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
            />
          </div>
        </motion.div>

        <div style={{ textAlign: 'left', maxWidth: '600px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: 'var(--font-head)', fontSize: '11px', letterSpacing: '4px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.2rem', opacity: 0.8 }}
          >
            // welcome to my universe
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '0.8rem', color: '#fff' }}
          >
            Dhanush{' '}
            <span style={{ color: 'var(--gold)' }}>Mugajji</span>
            <br />
            Shambulingappa
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ fontSize: '1rem', letterSpacing: '2px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '2rem' }}
          >
            {/* ML Engineer &nbsp;·&nbsp; CS Graduate Student &nbsp;·&nbsp; Inventor */}
            CS Graduate Student &nbsp;
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.5rem' }}
          >
            {['4.0 GPA @ ASU', 'German Patent Holder', 'Vision-Language Models', 'Autonomous Vehicles'].map((tag) => (
              <span key={tag} style={{ padding: '0.35rem 1rem', border: '1px solid var(--border)', borderRadius: '30px', fontSize: '12px', color: 'var(--gold)', background: 'rgba(212,175,55,0.06)', letterSpacing: '1px' }}>
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ maxWidth: '560px', margin: '0 0 2.5rem', fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}
          >
            Building intelligent systems at the intersection of machine learning, computer vision, and real-world reasoning. Currently pursuing my M.S. in Computer Science at Arizona State University.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <button
              onClick={() => scrollTo('projects')}
              style={{ padding: '0.75rem 2.2rem', background: 'var(--gold)', border: 'none', borderRadius: '6px', color: '#050505', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.target.style.opacity = '0.85'}
              onMouseLeave={e => e.target.style.opacity = '1'}
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo('ai')}
              style={{ padding: '0.75rem 2.2rem', background: 'none', border: '1px solid rgba(212,175,55,0.4)', borderRadius: '6px', color: 'var(--gold)', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'background 0.2s' }}
              onMouseEnter={e => e.target.style.background = 'rgba(212,175,55,0.08)'}
              onMouseLeave={e => e.target.style.background = 'none'}
            >
              Talk to AI Agent
            </button>
            <a
              href={process.env.PUBLIC_URL + '/DhanushMugajjiShambulingappa_Resume.pdf'}
              download="DhanushMugajjiShambulingappa_Resume.pdf"
              style={{ padding: '0.75rem 2.2rem', background: 'none', border: '1px solid rgba(212,175,55,0.4)', borderRadius: '6px', color: 'var(--gold)', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'background 0.2s', textDecoration: 'none', display: 'inline-block' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,175,55,0.08)'}
              onMouseLeave={e => e.currentTarget.style.background = 'none'}
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
