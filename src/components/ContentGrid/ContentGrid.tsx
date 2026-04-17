import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { AnimeCard } from '../AnimeCard/AnimeCard';
import type { AnimeItem } from '../../types/anime';
import styles from './ContentGrid.module.css';

interface ContentGridProps {
  title: string;
  items: AnimeItem[];
  onViewAll?: () => void;
  onItemClick?: (id: number) => void;
}

export function ContentGrid({ title, items, onViewAll, onItemClick }: ContentGridProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.gridItem}`,
        { opacity: 0, y: 28, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power2.out',
          delay: 0.1,
        }
      );
    }, section);

    return () => ctx.revert();
  }, [items]);

  return (
    <section ref={sectionRef} className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {onViewAll ? (
          <button type="button" className={styles.viewAll} onClick={onViewAll}>
            View all
          </button>
        ) : null}
      </header>

      {items.length ? (
        <div className={styles.grid}>
          {items.map((item) => (
            <div className={styles.gridItem} key={item.id}>
              <AnimeCard
                id={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
                rating={item.rating}
                episodes={item.episodes}
                genre={item.genre}
                onClick={onItemClick}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.empty}>No anime found with current filters.</div>
      )}
    </section>
  );
}
