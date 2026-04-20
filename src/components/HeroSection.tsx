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
          <p className="hero-kicker">FEATURED ANIME</p>
          <h1>One Punch Man</h1>
          <p className="hero-meta">Action | 2 Seasons | 24 Episodes</p>

          <div className="hero-tags" aria-label="Anime tags">
            <span>Trending</span>
            <span>Comedy</span>
            <span>Action</span>
          </div>

          <p className="hero-description">
            Saitama keeps the world in balance with one impossible punch, while every battle around him grows
            louder, stranger, and more cinematic. Start here for the cleanest entry into the lineup.
          </p>

          <div className="hero-actions" aria-label="Hero action buttons">
            <button type="button" className="hero-read-more">
              Start Watching
            </button>
            <button type="button" className="hero-ghost-button">
              Add to Queue
            </button>
          </div>
        </div>

        <div className="hero-teasers" aria-label="Hero teaser links">
          <button type="button" className="hero-teaser-card is-dark">
            Railgun S Trailer
          </button>
          <button type="button" className="hero-teaser-card is-accent">
            Beyond the Boundary Teaser
          </button>
        </div>

        <button type="button" className="hero-play" aria-label="Play featured anime">
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
