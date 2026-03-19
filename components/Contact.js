'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.css';

const socials = [
  { label: 'Instagram', icon: '📸', href: 'https://www.instagram.com/its_mano_off' },
  { label: 'YouTube', icon: '▶️', href: 'https://youtube.com/@flowmedia' },
  { label: 'WhatsApp', icon: '💬', href: 'https://wa.me/919025805736' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          {/* Left info */}
          <div ref={(el) => (refs.current[0] = el)} className={`anim-fade-up ${styles.info}`}>
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">Let&apos;s Create Something <span className="gradient-text">Incredible</span></h2>
            <p className="section-subtitle">
              Have a project in mind? I&apos;d love to hear about it. Reach out and let&apos;s bring your vision to life.
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <div>
                  <span className={styles.contactLabel}>Email</span>
                  <span className={styles.contactValue}>manokaredit@gmail.com</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <div>
                  <span className={styles.contactLabel}>Mobile</span>
                  <span className={styles.contactValue}>+91 90258 05736</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <div>
                  <span className={styles.contactLabel}>Based In</span>
                  <span className={styles.contactValue}>Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            <div className={styles.socials}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} className={`glass-card ${styles.social}`}>
                  <span>{s.icon}</span>
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div ref={(el) => (refs.current[1] = el)} className={`anim-fade-up glass-card ${styles.formCard}`}>
            {sent ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>✅</span>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form 
                className={styles.form} 
                action="https://formspree.io/f/manokaredit@gmail.com" 
                method="POST"
                onSubmit={() => setSent(true)}
              >
                <h3 className={styles.formTitle}>Send a Message</h3>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-name">Name</label>
                    <input id="contact-name" name="name" type="text" placeholder="Your name" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-email">Email</label>
                    <input id="contact-email" name="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-service">Service Needed</label>
                  <select id="contact-service" name="service">
                    <option value="">Select a service...</option>
                    <option>Short Form Video Editing</option>
                    <option>Long Form / Candid Video</option>
                    <option>Motion Graphics</option>
                    <option>Social Media Branding</option>
                    <option>Canva Design</option>
                    <option>Color Grading</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" name="message" rows={5} placeholder="Tell me about your project..." required />
                </div>
                <button type="submit" className={styles.submitBtn}>Send Message →</button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <p>© 2026 <span className="gradient-text">FlowMedia</span>. All rights reserved. Crafted with ❤️</p>
      </div>
    </section>
  );
}
