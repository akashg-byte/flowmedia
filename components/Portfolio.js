'use client';
import { useEffect, useRef } from 'react';
import styles from './Portfolio.module.css';

const projects = [
  { title: 'Wedding Cinematic Film', category: 'Long Form', desc: 'A 20-minute cinematic wedding film with custom color grade and emotional storytelling.', emoji: '💍', accent: '#c9a84c' },
  { title: 'Brand Awareness Reel', category: 'Short Form', desc: 'A 30-second punchy product reveal reel with motion graphics and dynamic cuts.', emoji: '🚀', accent: '#4a90d9' },
  { title: 'Social Media Kit', category: 'Branding', desc: 'Full Canva-based social media branding kit with templates for Instagram & Facebook.', emoji: '🎨', accent: '#a084c9' },
  { title: 'Birthday Highlights', category: 'Candid', desc: 'A vibrant candid highlights edit with custom soundtrack and motion overlays.', emoji: '🎉', accent: '#c9a84c' },
  { title: 'Product Animation', category: 'Motion Graphics', desc: 'Sleek 3D-style product presentation with kinetic text and logo animation.', emoji: '✨', accent: '#4a90d9' },
  { title: 'Travel Vlog Edit', category: 'Long Form', desc: 'A 10-minute travel montage with cinematic color grading and ambient soundscape.', emoji: '🌍', accent: '#a084c9' },
];

export default function Portfolio() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className={styles.section}>
      <div className="container">
        <div ref={(el) => (refs.current[0] = el)} className={`anim-fade-up ${styles.header}`}>
          <p className="section-label">Recent Work</p>
          <h2 className="section-title">Portfolio <span className="gradient-text">Showcase</span></h2>
          <p className="section-subtitle">
            A glimpse into some of the projects I have crafted with passion and precision.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <div
              key={p.title}
              ref={(el) => (refs.current[i + 1] = el)}
              className={`anim-fade-up glass-card ${styles.card}`}
              style={{ transitionDelay: `${i * 0.1}s`, '--accent': p.accent }}
            >
              <div className={styles.thumb}>
                <div className={styles.thumbBg} style={{ background: `radial-gradient(circle at 30% 40%, ${p.accent}22 0%, transparent 70%)` }} />
                <span className={styles.thumbEmoji}>{p.emoji}</span>
                <div className={styles.overlay}>
                  <button className={styles.playBtn} aria-label={`View ${p.title}`}>▶ Play</button>
                </div>
              </div>
              <div className={styles.info}>
                <span className={styles.category}>{p.category}</span>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
