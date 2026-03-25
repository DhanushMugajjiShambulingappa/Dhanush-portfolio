import React, { useState, useEffect } from 'react';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / totalHeight) * 100;
      setProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '2px',
      background: 'rgba(212,175,55,0.1)',
      zIndex: 9999,
    }}>
      <div style={{
        height: '100%',
        width: `${progress}%`,
        background: 'var(--gold)',
        transition: 'width 0.1s ease',
      }} />
    </div>
  );
}

export default ScrollProgress;