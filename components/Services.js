'use client';
import { useEffect, useRef } from 'react';
import styles from './Services.module.css';

const services = [
  {
    icon: '⚡',
    title: 'Short Form Video',
    desc: 'High-energy Reels, TikToks & YouTube Shorts. Fast cuts, trendy transitions, and viral-ready edits.',
    tags: ['Reels', 'TikTok', 'Shorts'],
  },
  {
    icon: '🎬',
    title: 'Traditional & Candid',
    desc: 'Emotional long-form edits for weddings, events, and documentaries. Storytelling at its finest.',
    tags: ['Wedding', 'Events', 'Documentary'],
  },
  {
    icon: '✨',
    title: 'Motion Graphics',
    desc: 'Sleek animated titles, lower thirds, kinetic typography, and eye-catching visual effects.',
    tags: ['Animation', 'Titles', 'VFX'],
  },
  {
    icon: '🎨',
    title: 'Social Media Branding',
    desc: 'Cohesive visual identity for your brand — covers, thumbnails, story templates, and feed aesthetics.',
    tags: ['Instagram', 'YouTube', 'Branding'],
  },
  {
    icon: '🖼️',
    title: 'Canva Design',
    desc: 'Professional-quality posters, presentations, social media kits, and digital templates designed in Canva.',
    tags: ['Posters', 'Templates', 'Flyers'],
  },
  {
    icon: '🎞️',
    title: 'Color Grading',
    desc: 'Cinematic color grading and correction that transforms raw footage into visually stunning sequences.',
    tags: ['LUTs', 'Correction', 'Cinematic'],
  },
];

export default function Services() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div ref={(el) => (cardsRef.current[0] = el)} className={`anim-fade-up ${styles.header}`}>
          <p className="section-label">What I Do</p>
          <h2 className="section-title">Services I <span className="gradient-text">Offer</span></h2>
          <p className="section-subtitle">
            From fast-paced social content to cinematic wedding films — I cover every frame of your story.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <div
              key={s.title}
              ref={(el) => (cardsRef.current[i + 1] = el)}
              className={`anim-fade-up glass-card ${styles.card}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{s.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <div className={styles.tags}>
                {s.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
