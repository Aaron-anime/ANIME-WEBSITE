import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface AnimeItem {
  id: number;
  title: string;
  imageUrl: string;
  synopsis: string;
}

const animeList: AnimeItem[] = [
  {
    id: 1,
    title: 'Attack on Titan',
    imageUrl:
      'https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'A relentless war for survival unfolds as humanity confronts terrifying giants and hidden truths.',
  },
  {
    id: 2,
    title: 'Jujutsu Kaisen',
    imageUrl:
      'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'A cursed teenager enters a brutal world of sorcerers where every battle pushes his limits.',
  },
  {
    id: 3,
    title: 'One Piece',
    imageUrl:
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'A fearless pirate crew sails the Grand Line chasing freedom, treasure, and legendary status.',
  },
  {
    id: 4,
    title: 'Demon Slayer',
    imageUrl:
      'https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'A determined swordsman hunts demons to save his sister in a world of breathtaking danger.',
  },
  {
    id: 5,
    title: 'Vinland Saga',
    imageUrl:
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'A young warrior faces brutal battles and hard lessons on revenge, honor, and purpose.',
  },
  {
    id: 6,
    title: 'Solo Leveling',
    imageUrl:
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'The weakest hunter rises through deadly gates to become an unstoppable force.',
  },
];

export default function AnimeGrid() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll<HTMLElement>('.anime-card'));

    const enterHandlers: Array<(event: Event) => void> = [];
    const leaveHandlers: Array<(event: Event) => void> = [];

    cards.forEach((card) => {
      const enterHandler = () => {
        gsap.to(card, {
          scale: 1.03,
          borderColor: 'rgba(94, 76, 255, 0.95)',
          boxShadow: '0 0 0 1px rgba(94, 76, 255, 0.8), 0 20px 40px rgba(94, 76, 255, 0.25)',
          duration: 0.25,
          ease: 'power2.out',
        });
      };

      const leaveHandler = () => {
        gsap.to(card, {
          scale: 1,
          borderColor: 'rgba(255, 255, 255, 0.12)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
          duration: 0.25,
          ease: 'power2.out',
        });
      };

      card.addEventListener('mouseenter', enterHandler);
      card.addEventListener('mouseleave', leaveHandler);

      enterHandlers.push(enterHandler);
      leaveHandlers.push(leaveHandler);
    });

    return () => {
      cards.forEach((card, index) => {
        card.removeEventListener('mouseenter', enterHandlers[index]);
        card.removeEventListener('mouseleave', leaveHandlers[index]);
      });
    };
  }, []);

  return (
    <section className="anime-grid-section" aria-label="Popular anime">
      <header className="section-header">
        <h2>Trending Anime</h2>
      </header>

      <div ref={gridRef} className="anime-grid">
        {animeList.map((anime) => (
          <article key={anime.id} className="anime-card">
            <img src={anime.imageUrl} alt={anime.title} loading="lazy" />
            <div className="anime-card-content">
              <h3>{anime.title}</h3>
              <p>{anime.synopsis}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
