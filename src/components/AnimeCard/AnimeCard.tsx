import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './AnimeCard.module.css';

interface AnimeCardProps {
  id: number;
  title: string;
  imageUrl: string;
  rating: string;
  episodes: string;
  genre: string;
  onClick?: (id: number) => void;
}

export function AnimeCard({ id, title, imageUrl, rating, episodes, genre, onClick }: AnimeCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const metaRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const titleElement = titleRef.current;
    const meta = metaRef.current;

    if (!card || !image || !titleElement || !meta) return;

    gsap.set([titleElement, meta], { y: 18, opacity: 0 });

    const hoverTimeline = gsap
      .timeline({ paused: true, defaults: { ease: 'power3.out' } })
      .to(card, { scale: 1.035, duration: 0.35, boxShadow: '0 30px 60px -24px rgba(56, 189, 248, 0.45)' }, 0)
      .to(image, { scale: 1.14, xPercent: 3, duration: 0.5, ease: 'power2.out' }, 0)
      .to(titleElement, { y: 0, opacity: 1, duration: 0.4 }, 0.1)
      .to(meta, { y: 0, opacity: 1, duration: 0.35 }, 0.18);

    const handleEnter = () => hoverTimeline.play();
    const handleLeave = () => hoverTimeline.reverse();

    card.addEventListener('mouseenter', handleEnter);
    card.addEventListener('mouseleave', handleLeave);

    return () => {
      card.removeEventListener('mouseenter', handleEnter);
      card.removeEventListener('mouseleave', handleLeave);
      hoverTimeline.kill();
    };
  }, []);

  const handleActivate = () => {
    onClick?.(id);
  };

  return (
    <article
      ref={cardRef}
      className={styles.card}
      onClick={handleActivate}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          handleActivate();
        }
      }}
      aria-label={`Open ${title}`}
    >
      <img ref={imageRef} src={imageUrl} alt={title} className={styles.poster} loading="lazy" />
      <div className={styles.overlay} />
      <span className={styles.badge}>{rating}</span>
      <div className={styles.info}>
        <p className={styles.genre}>{genre}</p>
        <h3 ref={titleRef} className={styles.title}>
          {title}
        </h3>
        <p ref={metaRef} className={styles.meta}>
          {episodes}
        </p>
      </div>
    </article>
  );
}
