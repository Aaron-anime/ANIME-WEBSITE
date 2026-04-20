import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Play } from 'lucide-react';

export default function HeroSection() {
  const bannerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        banner,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.95, ease: 'power3.out' },
      );
    }, banner);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" aria-label="Featured anime hero banner">
      <div ref={bannerRef} className="hero-banner">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />

        <div className="hero-content">
          <p className="hero-kicker">ONE PUNCH MAN</p>
          <h1>One Punch Man</h1>
          <p className="hero-meta">2 Seasons | 24 Episodes</p>

          <div className="hero-tags" aria-label="Anime tags">
            <span>Story</span>
            <span>Actors</span>
          </div>

          <p className="hero-description">
            His name is Saitama, and every strong enemy learns the same lesson in one punch. Follow his
            bizarre rise through hero rankings in a world full of monsters and absurd rivalries.
          </p>
        </div>

        <button type="button" className="hero-play" aria-label="Play One Punch Man">
          <Play size={28} fill="currentColor" />
        </button>

        <div className="hero-dots" aria-label="Hero carousel pagination">
          <span className="is-active" />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
