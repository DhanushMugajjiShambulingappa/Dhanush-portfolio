import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Patent from './components/Patent';
import Certifications from './components/Certifications';
import Activities from './components/Activities';
import AIAgent from './components/AIAgent';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'patent', 'certifications', 'activities', 'ai', 'contact'];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <LoadingScreen />
      <ScrollProgress />
      <Navbar activeSection={activeSection} />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="patent"><Patent /></section>
        <section id="certifications"><Certifications /></section>
        <section id="activities"><Activities /></section>
        <section id="ai"><AIAgent /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;