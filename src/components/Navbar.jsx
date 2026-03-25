import React, { useState, useEffect } from 'react';

function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'patent', label: 'Patent' },
    { id: 'certifications', label: 'Certification Courses' },
    { id: 'activities', label: 'Activities' },
    { id: 'ai', label: 'AI Agent' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        background: scrolled ? 'rgba(5,5,5,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}>
        <div
          onClick={() => scrollTo('home')}
          style={{ fontFamily: 'var(--font-head)', fontSize: '13px', letterSpacing: '3px', color: 'var(--gold)', cursor: 'pointer' }}
        >
          DMS<span style={{ color: 'var(--text-muted)', fontWeight: 300 }}> // portfolio</span>
        </div>

        <div className="desktop-nav" style={{ display: 'flex', gap: '0', background: 'rgba(212,175,55,0.06)', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                background: activeSection === link.id ? 'var(--gold)' : 'none',
                border: 'none',
                padding: '0.45rem 0.8rem',
                fontSize: '10px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: activeSection === link.id ? '#050505' : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'var(--font-body)',
                fontWeight: activeSection === link.id ? 700 : 400,
              }}
              onMouseEnter={e => {
                if (activeSection !== link.id) {
                  e.target.style.color = 'var(--gold)';
                  e.target.style.background = 'rgba(212,175,55,0.08)';
                }
              }}
              onMouseLeave={e => {
                if (activeSection !== link.id) {
                  e.target.style.color = 'var(--text-muted)';
                  e.target.style.background = 'none';
                }
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: '1px solid var(--border)', borderRadius: '6px', padding: '0.5rem 0.7rem', cursor: 'pointer', flexDirection: 'column', gap: '5px', alignItems: 'center', justifyContent: 'center' }}
        >
          {[0, 1, 2].map(i => (
            <div key={i} style={{ width: '18px', height: '1px', background: 'var(--gold)' }} />
          ))}
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(5,5,5,0.98)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
        }}>
          <button
            onClick={() => setMenuOpen(false)}
            style={{ position: 'absolute', top: '1.5rem', right: '2rem', background: 'none', border: 'none', color: 'var(--gold)', fontSize: '1.5rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}
          >
            ✕
          </button>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: 'var(--font-head)',
                fontSize: '1.1rem',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: activeSection === link.id ? 'var(--gold)' : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'color 0.2s',
                padding: '0.3rem 0',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => { if (activeSection !== link.id) e.target.style.color = 'var(--text-muted)'; }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        .hamburger { display: none !important; }
        .desktop-nav { display: flex !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}

export default Navbar;