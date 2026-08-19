import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText: string;
  onCtaClick: () => void;
}

export function Hero({ title, subtitle, backgroundImage, ctaText, onCtaClick }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const scope = heroRef.current;
    if (!scope) return;

    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
        y: 36,
        opacity: 0,
      });

      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .to(titleRef.current, { y: 0, opacity: 1, duration: 0.9 })
        .to(subtitleRef.current, { y: 0, opacity: 1, duration: 0.7 }, '-=0.45')
        .to(ctaRef.current, { y: 0, opacity: 1, duration: 0.6 }, '-=0.35');
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.banner} style={{ backgroundImage: `url(${backgroundImage})` }} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <p className={styles.kicker}>Watch in ultra HD</p>
        <h1 ref={titleRef} className={styles.title}>
          {title}
        </h1>
        <p ref={subtitleRef} className={styles.subtitle}>
          {subtitle}
        </p>
        <button ref={ctaRef} type="button" className={styles.cta} onClick={onCtaClick}>
          <span className={styles.ctaText}>{ctaText}</span>
          <span className={styles.ctaGlow} aria-hidden="true" />
        </button>
      </div>
      <div className={styles.orb} aria-hidden="true" />
    </section>
  );
}
