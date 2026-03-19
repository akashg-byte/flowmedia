'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    // Stagger reveal words
    const words = titleRef.current?.querySelectorAll('.' + styles.word);
    words?.forEach((w, i) => {
      setTimeout(() => w.classList.add(styles.wordVisible), 200 + i * 150);
    });
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      {/* Background */}
      <div className={styles.bg}>
        <Image src="/hero-bg.png" alt="Cinematic background" fill priority style={{ objectFit: 'cover' }} />
        <div className={styles.bgOverlay} />
      </div>

      {/* Floating orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          FlowMedia • Available for Projects
        </div>

        <h1 ref={titleRef} className={styles.title}>
          {['Turning', 'Raw', 'Clips', 'Into'].map((w) => (
            <span key={w} className={styles.word}>{w} </span>
          ))}
          <br />
          <span className={`${styles.word} gradient-text`}>Cinematic Stories</span>
        </h1>

        <p className={styles.sub}>
          Professional Video Editor & Creative Designer. Specializing in Short Form, Long Form,
          Motion Graphics, Branding &amp; Color Grading.
        </p>

        <div className={styles.actions}>
          <a href="#portfolio" className={styles.btnPrimary}>View Portfolio</a>
          <a href="#contact" className={styles.btnGhost}>Get In Touch</a>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          {[
            { num: '3+', label: 'Years Experience' },
            { num: '100+', label: 'Projects Done' },
            { num: '50+', label: 'Happy Clients' },
          ].map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scroll}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
