import React from 'react';

function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
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

  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '3rem', background: 'rgba(5,5,5,0.98)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-head)', fontSize: '15px', letterSpacing: '3px', color: 'var(--gold)', marginBottom: '0.5rem' }}>
              DMS <span style={{ color: 'var(--text-muted)', fontWeight: 300 }}>// portfolio</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: '300px', lineHeight: 1.7 }}>
              ML Engineer · CS Graduate Student · Inventor
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem 2rem' }}>
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'color 0.2s', padding: 0 }}
                onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/DhanushMugajjiShambulingappa' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/dhanushshambulingappa' },
              { label: 'Email', href: 'mailto:dhanushmush2002@gmail.com' },
            ].map((item) => (
            <a  
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '1px', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >
                {item.label} →
              </a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '1px' }}>
            © 2026 Dhanush Mugajji Shambulingappa. All rights reserved.
          </p>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '1px' }}>
            Built with React · Deployed on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;