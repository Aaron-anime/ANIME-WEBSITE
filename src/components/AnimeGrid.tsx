import { ChevronRight } from 'lucide-react';

interface AnimeItem {
  id: number;
  title: string;
  imageUrl: string;
  subtitle: string;
}

interface SeasonalItem {
  id: number;
  title: string;
  genre: string;
  imageUrl: string;
  highlight?: string;
}

interface EpisodeItem {
  id: number;
  title: string;
  episode: string;
  views: string;
  imageUrl: string;
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

const seasonalTabs = ['Airing now', 'Spring', 'Summer', 'Fall', 'Winter'];

const seasonalAnime: SeasonalItem[] = [
  {
    id: 1,
    title: 'Samurai Flamenco',
    genre: 'Drama, Comedy',
    imageUrl:
      'https://images.unsplash.com/photo-1612036782180-6f0822045d26?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    title: 'Strike the Blood',
    genre: 'Action, Adventure',
    imageUrl:
      'https://images.unsplash.com/photo-1608889176105-4f7e4a5ef8f0?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    title: 'World Conquest Zvezda',
    genre: 'Fantasy, Sci-Fi',
    imageUrl:
      'https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=500&q=80',
    highlight: '3/16 episodes aired',
  },
  {
    id: 4,
    title: 'Black Bullet',
    genre: 'Action, Adventure',
    imageUrl:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=500&q=80',
  },
];

const recentEpisodes: EpisodeItem[] = [
  {
    id: 1,
    title: 'Akuma no Riddle',
    episode: 'Episode 2, Newcomer Student',
    views: '1,012 views',
    imageUrl:
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=320&q=80',
  },
  {
    id: 2,
    title: 'Free! Eternal Summer',
    episode: 'Episode 3, Summer Feelings',
    views: '1,832 views',
    imageUrl:
      'https://images.unsplash.com/photo-1604079628040-94301bb21b91?auto=format&fit=crop&w=320&q=80',
  },
  {
    id: 3,
    title: 'Attack on Titan',
    episode: 'Episode 8, Titan Fight!',
    views: '1,125 views',
    imageUrl:
      'https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?auto=format&fit=crop&w=320&q=80',
  },
  {
    id: 4,
    title: 'Kill la Kill',
    episode: 'Episode 10, Come and Get Us!',
    views: '984 views',
    imageUrl:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=320&q=80',
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

      <section className="latest-layout" aria-label="Latest anime and recent episodes">
        <div className="latest-main-column">
          <div className="season-tabs" role="tablist" aria-label="Seasonal anime filters">
            {seasonalTabs.map((tab) => (
              <button key={tab} type="button" role="tab" aria-selected={tab === 'Airing now'}>
                {tab}
              </button>
            ))}
          </div>

          <div className="latest-card-grid">
            {seasonalAnime.map((anime) => (
              <article key={anime.id} className="latest-anime-card">
                <img src={anime.imageUrl} alt={anime.title} loading="lazy" />
                {anime.highlight ? <span className="episode-pill">{anime.highlight}</span> : null}
                <div className="latest-card-copy">
                  <h4>{anime.title}</h4>
                  <p>{anime.genre}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="recent-episodes-panel" aria-label="Recent episodes">
          <header>
            <h4>Recent Episodes</h4>
            <button type="button">Recommended</button>
          </header>

          <div className="episode-list">
            {recentEpisodes.map((item) => (
              <article key={item.id} className="episode-item">
                <img src={item.imageUrl} alt={item.title} loading="lazy" />
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.episode}</p>
                  <span>{item.views}</span>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </section>
    </section>
  );
}
