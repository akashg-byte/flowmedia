'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Skills.module.css';

const software = [
  { name: 'DaVinci Resolve', level: 90, icon: '🎞️', desc: 'Professional editing & color grading' },
  { name: 'CapCut (PC)', level: 92, icon: '✂️', desc: 'Fast & dynamic short-form editing' },
  { name: 'CapCut (Mobile)', level: 88, icon: '📱', desc: 'On-the-go mobile editing' },
  { name: 'Canva', level: 95, icon: '🖌️', desc: 'Creative design & branding templates' },
  { name: 'Photoshop', level: 80, icon: '🖼️', desc: 'Photo editing & compositing' },
];

const specialties = [
  { label: 'Color Grading', desc: 'Cinematic LUTs & professional color correction' },
  { label: 'Motion Graphics', desc: 'Animated text, transitions & visual effects' },
  { label: 'Short Form', desc: 'Viral-ready Reels, Shorts & TikTok edits' },
  { label: 'Long Form', desc: 'Weddings, events & documentary films' },
];

export default function Skills() {
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
    <section id="skills" className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          {/* Left: Profile */}
          <div ref={(el) => (refs.current[0] = el)} className={`anim-fade-up ${styles.profileCol}`}>
            <div className={styles.profileFrame}>
              <Image src="/profile.png" alt="Manokar — Video Editor" fill style={{ objectFit: 'cover' }} />
              <div className={styles.profileOverlay} />
            </div>
            <div className={styles.specialties}>
              {specialties.map((s) => (
                <div key={s.label} className={`glass-card ${styles.specialty}`}>
                  <span className={styles.specialtyLabel}>{s.label}</span>
                  <span className={styles.specialtyDesc}>{s.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills */}
          <div className={styles.skillsCol}>
            <div ref={(el) => (refs.current[1] = el)} className="anim-fade-up">
              <p className="section-label">Expertise</p>
              <h2 className="section-title">Software & <span className="gradient-text">Skills</span></h2>
              <p className="section-subtitle">
                Proficient in industry-leading tools to bring creative visions to life with precision and style.
              </p>
            </div>

            <div className={styles.bars}>
              {software.map((sw, i) => (
                <div
                  key={sw.name}
                  ref={(el) => (refs.current[i + 2] = el)}
                  className={`anim-fade-up ${styles.barItem}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className={styles.barTop}>
                    <div className={styles.barInfo}>
                      <span className={styles.barIcon}>{sw.icon}</span>
                      <div>
                        <span className={styles.barName}>{sw.name}</span>
                        <span className={styles.barDesc}>{sw.desc}</span>
                      </div>
                    </div>
                    <span className={styles.barPct}>{sw.level}%</span>
                  </div>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ '--width': `${sw.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
