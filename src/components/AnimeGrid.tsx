import { useMemo, useRef, useState } from 'react';
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
  { id: 1, title: 'Demon Slayer', imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=500&q=80', subtitle: 'Action, Fantasy', contentType: 'Series' },
  { id: 2, title: 'One Piece', imageUrl: 'https://images.unsplash.com/photo-1508042049619-aba7e08e0fbb?auto=format&fit=crop&w=500&q=80', subtitle: 'Adventure, Shonen', contentType: 'Series' },
  { id: 3, title: 'Naruto Shippuden', imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80', subtitle: 'Action, Shonen', contentType: 'Series' },
  { id: 4, title: 'Dragon Ball Z', imageUrl: 'https://images.unsplash.com/photo-1501634430926-15f72ecfedba?auto=format&fit=crop&w=500&q=80', subtitle: 'Action, Martial Arts', contentType: 'Movies' },
  { id: 5, title: 'Death Note', imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3af38d4f?auto=format&fit=crop&w=500&q=80', subtitle: 'Thriller, Supernatural', contentType: 'Series' },
  { id: 6, title: 'Attack on Titan', imageUrl: 'https://images.unsplash.com/photo-1489599849228-da7355aeace5?auto=format&fit=crop&w=500&q=80', subtitle: 'Dark Fantasy, Action', contentType: 'Series' },
  { id: 7, title: 'My Hero Academia', imageUrl: 'https://images.unsplash.com/photo-1503315668682-6e6f5a31f9b8?auto=format&fit=crop&w=500&q=80', subtitle: 'Superhero, School', contentType: 'Series' },
  { id: 8, title: 'Jujutsu Kaisen', imageUrl: 'https://images.unsplash.com/photo-1536440936351-2e2641f43dae?auto=format&fit=crop&w=500&q=80', subtitle: 'Dark Fantasy, Action', contentType: 'Series' },
  { id: 9, title: 'Tokyo Revengers', imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80', subtitle: 'Action, Supernatural', contentType: 'Series' },
  { id: 10, title: 'Bleach', imageUrl: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&w=500&q=80', subtitle: 'Action, Supernatural', contentType: 'Series' },
  { id: 11, title: 'Chainsaw Man', imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80', subtitle: 'Action, Dark Fantasy', contentType: 'Series' },
  { id: 12, title: 'Solo Leveling', imageUrl: 'https://images.unsplash.com/photo-1534704192104-0f72e8993c82?auto=format&fit=crop&w=500&q=80', subtitle: 'Action, Fantasy', contentType: 'Series' },
  { id: 13, title: 'Steins;Gate', imageUrl: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=500&q=80', subtitle: 'Sci-Fi Thriller', contentType: 'Movies' },
  { id: 14, title: 'Sword Art Online', imageUrl: 'https://images.unsplash.com/photo-1533461502717-83546f485c55?auto=format&fit=crop&w=500&q=80', subtitle: 'Sci-Fi, Adventure', contentType: 'Series' },
  { id: 15, title: 'Code Geass', imageUrl: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?auto=format&fit=crop&w=500&q=80', subtitle: 'Sci-Fi, Action', contentType: 'Series' },
  { id: 16, title: 'Neon Genesis Evangelion', imageUrl: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=500&q=80', subtitle: 'Mecha, Psychological', contentType: 'Movies' },
  { id: 17, title: 'Mob Psycho 100', imageUrl: 'https://images.unsplash.com/photo-1495909900881-9269cf999fa0?auto=format&fit=crop&w=500&q=80', subtitle: 'Comedy, Action', contentType: 'Series' },
  { id: 18, title: 'The Promised Neverland', imageUrl: 'https://images.unsplash.com/photo-1505739998589-00fc193ce96a?auto=format&fit=crop&w=500&q=80', subtitle: 'Mystery, Thriller', contentType: 'Series' },
  { id: 19, title: 'Spy x Family', imageUrl: 'https://images.unsplash.com/photo-1487180144351-b8a2102724ae?auto=format&fit=crop&w=500&q=80', subtitle: 'Comedy, Action', contentType: 'Series' },
  { id: 20, title: 'Wind Breaker', imageUrl: 'https://images.unsplash.com/photo-1532777946891-8c63ec3a3e9f?auto=format&fit=crop&w=500&q=80', subtitle: 'Action, School', contentType: 'Series' },
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
        'https://images.unsplash.com/photo-1534728282221-b8e3f7a5703f?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 2,
      title: 'Strike the Blood',
      genre: 'Action, Adventure',
      imageUrl:
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 3,
      title: 'World Conquest Zvezda',
      genre: 'Fantasy, Sci-Fi',
      imageUrl:
        'https://images.unsplash.com/photo-1536440936351-2e2641f43dae?auto=format&fit=crop&w=500&q=80',
      highlight: '3/16 episodes aired',
      contentType: 'Movies',
    },
    {
      id: 4,
      title: 'Black Bullet',
      genre: 'Action, Adventure',
      imageUrl:
        'https://images.unsplash.com/photo-1535016120754-fd394ab932bc?auto=format&fit=crop&w=500&q=80',
      contentType: 'Movies',
    },
    {
      id: 5,
      title: 'Jujutsu Kaisen',
      genre: 'Dark Fantasy, Action',
      imageUrl:
        'https://images.unsplash.com/photo-1503315668682-6e6f5a31f9b8?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 6,
      title: 'Tokyo Revengers',
      genre: 'Action, Drama',
      imageUrl:
        'https://images.unsplash.com/photo-1502356128c64-bee7eeba266d?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
  ],
  Spring: [
    {
      id: 7,
      title: 'Blue Exorcist',
      genre: 'Supernatural',
      imageUrl:
        'https://images.unsplash.com/photo-1483389127117-b6a2102724ae?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 8,
      title: 'Noragami',
      genre: 'Urban Fantasy',
      imageUrl:
        'https://images.unsplash.com/photo-1505695521149-3c74dc08b386?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 9,
      title: 'K-On!',
      genre: 'Slice of Life',
      imageUrl:
        'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 10,
      title: 'Bungo Stray Dogs',
      genre: 'Mystery, Action',
      imageUrl:
        'https://images.unsplash.com/photo-1516450360452-9312f5ff84ab?auto=format&fit=crop&w=500&q=80',
      contentType: 'Movies',
    },
    {
      id: 11,
      title: 'Fruits Basket',
      genre: 'Romance, Comedy',
      imageUrl:
        'https://images.unsplash.com/photo-1518066331714-f49ad1db688f?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 12,
      title: 'A Place Further Than the Universe',
      genre: 'Adventure, Drama',
      imageUrl:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80',
      contentType: 'Movies',
    },
  ],
  Summer: [
    {
      id: 13,
      title: 'Free!',
      genre: 'Sports',
      imageUrl:
        'https://images.unsplash.com/photo-1520893278798-5e89f0d8c9d4?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 14,
      title: 'Fire Force',
      genre: 'Action',
      imageUrl:
        'https://images.unsplash.com/photo-1523821741446-edb766ce0aab?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 15,
      title: 'Dr. Stone',
      genre: 'Sci-Fi',
      imageUrl:
        'https://images.unsplash.com/photo-1499978329105-b40eb5e94ca3?auto=format&fit=crop&w=500&q=80',
      contentType: 'Movies',
    },
    {
      id: 16,
      title: 'Toradora!',
      genre: 'Romance',
      imageUrl:
        'https://images.unsplash.com/photo-1516881959230-a75ee9dfc0eb?auto=format&fit=crop&w=500&q=80',
      contentType: 'Movies',
    },
    {
      id: 17,
      title: 'Haikyuu!!',
      genre: 'Sports, Drama',
      imageUrl:
        'https://images.unsplash.com/photo-1533461502717-83546f485c55?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 18,
      title: 'Your Name',
      genre: 'Romance, Sci-Fi',
      imageUrl:
        'https://images.unsplash.com/photo-1534704192104-0f72e8993c82?auto=format&fit=crop&w=500&q=80',
      contentType: 'Movies',
    },
  ],
  Fall: [
    {
      id: 19,
      title: 'Psycho-Pass',
      genre: 'Cyberpunk',
      imageUrl:
        'https://images.unsplash.com/photo-1498842812105-8d5d59f3a5b5?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 20,
      title: 'Mob Psycho 100',
      genre: 'Comedy, Action',
      imageUrl:
        'https://images.unsplash.com/photo-1495909900881-9269cf999fa0?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 21,
      title: 'Violet Evergarden',
      genre: 'Drama',
      imageUrl:
        'https://images.unsplash.com/photo-1505739998589-00fc193ce96a?auto=format&fit=crop&w=500&q=80',
      contentType: 'Movies',
    },
    {
      id: 22,
      title: 'Parasyte',
      genre: 'Horror',
      imageUrl:
        'https://images.unsplash.com/photo-1532777946891-8c63ec3a3e9f?auto=format&fit=crop&w=500&q=80',
      contentType: 'Movies',
    },
    {
      id: 23,
      title: 'Demon Slayer: Kimetsu no Yaiba',
      genre: 'Dark Fantasy, Action',
      imageUrl:
        'https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 24,
      title: 'A Silent Voice',
      genre: 'Drama, Romance',
      imageUrl:
        'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?auto=format&fit=crop&w=500&q=80',
      contentType: 'Movies',
    },
  ],
  Winter: [
    {
      id: 25,
      title: 'Erased',
      genre: 'Mystery',
      imageUrl:
        'https://images.unsplash.com/photo-1494723969897-58ba04ebb195?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 26,
      title: 'Made in Abyss',
      genre: 'Adventure',
      imageUrl:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 27,
      title: 'Ranking of Kings',
      genre: 'Fantasy',
      imageUrl:
        'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=500&q=80',
      highlight: '2/12 episodes aired',
      contentType: 'Movies',
    },
    {
      id: 28,
      title: 'Baccano!',
      genre: 'Crime, Thriller',
      imageUrl:
        'https://images.unsplash.com/photo-1524712245610-eaeb2b12f96b?auto=format&fit=crop&w=500&q=80',
      contentType: 'Movies',
    },
    {
      id: 29,
      title: 'Bleach',
      genre: 'Action, Supernatural',
      imageUrl:
        'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=500&q=80',
      contentType: 'Series',
    },
    {
      id: 30,
      title: 'Weathering with You',
      genre: 'Fantasy, Romance',
      imageUrl:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=500&q=80',
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
  const posterRowRef = useRef<HTMLDivElement | null>(null);

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

  const handlePosterScroll = () => {
    if (!posterRowRef.current) return;
    posterRowRef.current.scrollBy({ left: 240, behavior: 'smooth' });
  };

  return (
    <section className="top-rated-section" aria-label="Top rated anime">
      <header className="top-rated-header">
        <h2>Trending Anime</h2>
        <button
          type="button"
          className="icon-button"
          aria-label="Scroll top rated anime"
          onClick={handlePosterScroll}
        >
          <ChevronRight size={16} />
        </button>
      </header>

      <div ref={posterRowRef} className="poster-row">
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

      <h3 className="subsection-title">Seasonal Picks</h3>

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
            <h4>{episodeMode === 'recent' ? 'Recent Episodes' : 'Recommended Picks'}</h4>
            <button
              type="button"
              onClick={() => setEpisodeMode((current) => (current === 'recent' ? 'recommended' : 'recent'))}
            >
              {episodeMode === 'recent' ? 'Recommended Picks' : 'Recent Episodes'}
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
