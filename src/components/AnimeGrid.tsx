import { useMemo, useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface AnimeItem {
  id: number;
  title: string;
  imageUrl: string;
  subtitle: string;
  contentType: 'Movies' | 'Series';
}

interface SeasonalItem {
  id: number;
  title: string;
  genre: string;
  imageUrl: string;
  highlight?: string;
  contentType: 'Movies' | 'Series';
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
    contentType: 'Series',
  },
  {
    id: 2,
    title: 'One Piece',
    imageUrl:
      'https://images.unsplash.com/photo-1511407397940-d57f68e81203?auto=format&fit=crop&w=500&q=80',
    subtitle: 'Adventure',
    contentType: 'Series',
  },
  {
    id: 3,
    title: 'Naruto',
    imageUrl:
      'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=500&q=80',
    subtitle: 'Shonen',
    contentType: 'Series',
  },
  {
    id: 4,
    title: 'Dragon Ball Z',
    imageUrl:
      'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&w=500&q=80',
    subtitle: 'Action',
    contentType: 'Movies',
  },
  {
    id: 5,
    title: 'Death Note',
    imageUrl:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=500&q=80',
    subtitle: 'Thriller',
    contentType: 'Movies',
  },
];

const seasonalTabs = ['Airing now', 'Spring', 'Summer', 'Fall', 'Winter'] as const;
type SeasonalTab = (typeof seasonalTabs)[number];

const seasonalAnimeByTab: Record<SeasonalTab, SeasonalItem[]> = {
  'Airing now': [
    {
      id: 1,
      title: 'Samurai Flamenco',
      genre: 'Drama, Comedy',
      imageUrl:
        'https://images.unsplash.com/photo-1612036782180-6f0822045d26?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 2,
      title: 'Strike the Blood',
      genre: 'Action, Adventure',
      imageUrl:
        'https://images.unsplash.com/photo-1608889176105-4f7e4a5ef8f0?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 3,
      title: 'World Conquest Zvezda',
      genre: 'Fantasy, Sci-Fi',
      imageUrl:
        'https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=500&q=80',
      highlight: '3/16 episodes aired',
      contentType: 'Movies',
    },
    {
      id: 4,
      title: 'Black Bullet',
      genre: 'Action, Adventure',
      imageUrl:
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=500&q=80',
      contentType: 'Movies',
    },
  ],
  Spring: [
    {
      id: 5,
      title: 'Blue Exorcist',
      genre: 'Supernatural',
      imageUrl:
        'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 6,
      title: 'Noragami',
      genre: 'Urban Fantasy',
      imageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 7,
      title: 'K-On!',
      genre: 'Slice of Life',
      imageUrl:
        'https://images.unsplash.com/photo-1535598745644-bc7913bbf157?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 8,
      title: 'Bungo Stray Dogs',
      genre: 'Mystery, Action',
      imageUrl:
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80',
      contentType: 'Movies',
    },
  ],
  Summer: [
    {
      id: 9,
      title: 'Free!',
      genre: 'Sports',
      imageUrl:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 10,
      title: 'Fire Force',
      genre: 'Action',
      imageUrl:
        'https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 11,
      title: 'Dr. Stone',
      genre: 'Sci-Fi',
      imageUrl:
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=500&q=80',
      contentType: 'Movies',
    },
    {
      id: 12,
      title: 'Toradora!',
      genre: 'Romance',
      imageUrl:
        'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=500&q=80',
      contentType: 'Movies',
    },
  ],
  Fall: [
    {
      id: 13,
      title: 'Psycho-Pass',
      genre: 'Cyberpunk',
      imageUrl:
        'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 14,
      title: 'Mob Psycho 100',
      genre: 'Comedy, Action',
      imageUrl:
        'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 15,
      title: 'Violet Evergarden',
      genre: 'Drama',
      imageUrl:
        'https://images.unsplash.com/photo-1608889175638-9322300c46f0?auto=format&fit=crop&w=500&q=80',
      contentType: 'Movies',
    },
    {
      id: 16,
      title: 'Parasyte',
      genre: 'Horror',
      imageUrl:
        'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=500&q=80',
      contentType: 'Movies',
    },
  ],
  Winter: [
    {
      id: 17,
      title: 'Erased',
      genre: 'Mystery',
      imageUrl:
        'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 18,
      title: 'Made in Abyss',
      genre: 'Adventure',
      imageUrl:
        'https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 19,
      title: 'Ranking of Kings',
      genre: 'Fantasy',
      imageUrl:
        'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=500&q=80',
      highlight: '2/12 episodes aired',
      contentType: 'Movies',
    },
    {
      id: 20,
      title: 'Baccano!',
      genre: 'Crime, Thriller',
      imageUrl:
        'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=500&q=80',
      contentType: 'Movies',
    },
  ],
};

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

const recommendedEpisodes: EpisodeItem[] = [
  {
    id: 5,
    title: 'Classroom of the Elite',
    episode: 'Episode 6, New Strategy',
    views: '2,101 views',
    imageUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=320&q=80',
  },
  {
    id: 6,
    title: 'Dorohedoro',
    episode: 'Episode 4, Smoke and Steel',
    views: '1,474 views',
    imageUrl:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=320&q=80',
  },
  {
    id: 7,
    title: '86 Eighty-Six',
    episode: 'Episode 9, Spearhead',
    views: '1,930 views',
    imageUrl:
      'https://images.unsplash.com/photo-1542204625-de293a26e4a5?auto=format&fit=crop&w=320&q=80',
  },
  {
    id: 8,
    title: 'Mushoku Tensei',
    episode: 'Episode 5, The Journey',
    views: '2,287 views',
    imageUrl:
      'https://images.unsplash.com/photo-1526401485004-2fda9f4b2fda?auto=format&fit=crop&w=320&q=80',
  },
];

interface AnimeGridProps {
  searchQuery: string;
  contentType: 'Movies' | 'Series';
}

export default function AnimeGrid({ searchQuery, contentType }: AnimeGridProps) {
  const [activeSeason, setActiveSeason] = useState<SeasonalTab>('Airing now');
  const [episodeMode, setEpisodeMode] = useState<'recent' | 'recommended'>('recent');

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const visibleTopRatedAnime = useMemo(() => {
    return animeList.filter((anime) => {
      const matchesType = anime.contentType === contentType;
      if (!normalizedQuery) return matchesType;
      return (
        matchesType &&
        (anime.title.toLowerCase().includes(normalizedQuery) || anime.subtitle.toLowerCase().includes(normalizedQuery))
      );
    });
  }, [contentType, normalizedQuery]);

  const visibleSeasonalAnime = useMemo(() => {
    return seasonalAnimeByTab[activeSeason].filter((anime) => {
      const matchesType = anime.contentType === contentType;
      if (!normalizedQuery) return matchesType;
      return (
        matchesType &&
        (anime.title.toLowerCase().includes(normalizedQuery) || anime.genre.toLowerCase().includes(normalizedQuery))
      );
    });
  }, [activeSeason, contentType, normalizedQuery]);

  const visibleEpisodes = useMemo(() => {
    return episodeMode === 'recent' ? recentEpisodes : recommendedEpisodes;
  }, [episodeMode]);

  return (
    <section className="top-rated-section" aria-label="Top rated anime">
      <header className="top-rated-header">
        <h2>Top Rated Anime</h2>
        <button type="button" className="icon-button" aria-label="Show more top rated anime">
          <ChevronRight size={16} />
        </button>
      </header>

      <div className="poster-row">
        {visibleTopRatedAnime.length > 0 ? (
          visibleTopRatedAnime.map((anime) => (
            <article key={anime.id} className="poster-card">
              <img src={anime.imageUrl} alt={anime.title} loading="lazy" decoding="async" />
              <div className="poster-meta">
                <h3>{anime.title}</h3>
                <p>{anime.subtitle}</p>
              </div>
            </article>
          ))
        ) : (
          <p className="content-empty">No top rated anime matched your filters.</p>
        )}
      </div>

      <h3 className="subsection-title">Latest Anime</h3>

      <section className="latest-layout" aria-label="Latest anime and recent episodes">
        <div className="latest-main-column">
          <div className="season-tabs" role="tablist" aria-label="Seasonal anime filters">
            {seasonalTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={tab === activeSeason}
                onClick={() => setActiveSeason(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="latest-card-grid">
            {visibleSeasonalAnime.length > 0 ? (
              visibleSeasonalAnime.map((anime) => (
                <article key={anime.id} className="latest-anime-card">
                  <img src={anime.imageUrl} alt={anime.title} loading="lazy" />
                  {anime.highlight ? <span className="episode-pill">{anime.highlight}</span> : null}
                  <div className="latest-card-copy">
                    <h4>{anime.title}</h4>
                    <p>{anime.genre}</p>
                  </div>
                </article>
              ))
            ) : (
              <p className="content-empty">No latest anime matched your filters.</p>
            )}
          </div>
        </div>

        <aside className="recent-episodes-panel" aria-label="Recent episodes">
          <header>
            <h4>{episodeMode === 'recent' ? 'Recent Episodes' : 'Recommended'}</h4>
            <button
              type="button"
              onClick={() => setEpisodeMode((current) => (current === 'recent' ? 'recommended' : 'recent'))}
            >
              {episodeMode === 'recent' ? 'Recommended' : 'Recent Episodes'}
            </button>
          </header>

          <div className="episode-list">
            {visibleEpisodes.map((item) => (
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
