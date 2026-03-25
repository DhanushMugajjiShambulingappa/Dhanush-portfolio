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
    { id: 'certifications', label: 'Certifications' },
    { id: 'activities', label: 'Activities' },
    { id: 'ai', label: 'AI Agent' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 3rem',
      background: scrolled ? 'rgba(5,5,5,0.97)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        fontFamily: 'var(--font-head)',
        fontSize: '13px',
        letterSpacing: '3px',
        color: 'var(--gold)',
        cursor: 'pointer',
      }} onClick={() => scrollTo('home')}>
        DMS<span style={{ color: 'var(--text-muted)', fontWeight: 300 }}> // portfolio</span>
      </div>

      <div style={{ display: 'flex', gap: '0', flexWrap: 'wrap', justifyContent: 'flex-end', background: 'rgba(212,175,55,0.06)', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            style={{
              background: activeSection === link.id ? 'var(--gold)' : 'none',
              border: 'none',
              padding: '0.5rem 0.9rem',
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
    </nav>
  );
}

export default Navbar;