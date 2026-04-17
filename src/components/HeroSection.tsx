import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, buttonRef.current], { y: 48, opacity: 0 });

      gsap.to(backgroundRef.current, {
        scale: 1.12,
        duration: 9,
        ease: 'none',
      });

      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .to(titleRef.current, { y: 0, opacity: 1, duration: 0.9 })
        .to(buttonRef.current, { y: 0, opacity: 1, duration: 0.7 }, '-=0.45');
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hero-section" aria-label="Hero section">
      <div
        ref={backgroundRef}
        className="hero-background"
        role="img"
        aria-label="Epic anime inspired cinematic background"
      />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <h1 ref={titleRef}>Discover Your Next Obsession</h1>
        <button ref={buttonRef} type="button" className="hero-cta">
          Watch Now
        </button>
      </div>
    </section>
  );
}
