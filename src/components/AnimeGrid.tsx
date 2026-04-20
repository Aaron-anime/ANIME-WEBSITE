import { ChevronRight } from 'lucide-react';

interface AnimeItem {
  id: number;
  title: string;
  imageUrl: string;
  subtitle: string;
}

const animeList: AnimeItem[] = [
  {
    id: 1,
    title: 'Demon Slayer',
    imageUrl:
      'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=500&q=80',
    subtitle: 'Fantasy',
  },
  {
    id: 2,
    title: 'One Piece',
    imageUrl:
      'https://images.unsplash.com/photo-1511407397940-d57f68e81203?auto=format&fit=crop&w=500&q=80',
    subtitle: 'Adventure',
  },
  {
    id: 3,
    title: 'Naruto',
    imageUrl:
      'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=500&q=80',
    subtitle: 'Shonen',
  },
  {
    id: 4,
    title: 'Dragon Ball Z',
    imageUrl:
      'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&w=500&q=80',
    subtitle: 'Action',
  },
  {
    id: 5,
    title: 'Death Note',
    imageUrl:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=500&q=80',
    subtitle: 'Thriller',
  },
];

export default function AnimeGrid() {
  return (
    <section className="top-rated-section" aria-label="Top rated anime">
      <header className="top-rated-header">
        <h2>Top Rated Anime</h2>
        <button type="button" className="icon-button" aria-label="Show more top rated anime">
          <ChevronRight size={16} />
        </button>
      </header>

      <div className="poster-row">
        {animeList.map((anime) => (
          <article key={anime.id} className="poster-card">
            <img src={anime.imageUrl} alt={anime.title} loading="lazy" decoding="async" />
            <div className="poster-meta">
              <h3>{anime.title}</h3>
              <p>{anime.subtitle}</p>
            </div>
          </article>
        ))}
      </div>

      <h3 className="subsection-title">Latest Anime</h3>
    </section>
  );
}
