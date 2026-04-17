import { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Hero } from './components/Hero/Hero';
import { FilterPanel } from './components/FilterPanel/FilterPanel';
import { ContentGrid } from './components/ContentGrid/ContentGrid';
import type { ActiveFilters, AnimeItem, FilterOption } from './types/anime';
import styles from './App.module.css';

const animeCatalog: AnimeItem[] = [
  {
    id: 1,
    title: 'Jujutsu Kaisen',
    imageUrl: 'https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&w=900&q=80',
    year: 2024,
    quality: 'HD',
    genre: 'Action',
    rating: '18+',
    language: 'Japanese',
    popularity: 98,
    episodes: '47 episodes',
    summary: 'A dark supernatural war where cursed energy rewrites every rule.',
  },
  {
    id: 2,
    title: 'One Piece',
    imageUrl: 'https://images.unsplash.com/photo-1542204625-de293a06df4b?auto=format&fit=crop&w=900&q=80',
    year: 2023,
    quality: 'HD',
    genre: 'Adventure',
    rating: '12+',
    language: 'Japanese',
    popularity: 100,
    episodes: '1100+ episodes',
    summary: 'A giant ocean epic about freedom, found family, and impossible dreams.',
  },
  {
    id: 3,
    title: 'Attack on Titan',
    imageUrl: 'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=900&q=80',
    year: 2021,
    quality: 'HD',
    genre: 'Action',
    rating: '16+',
    language: 'Japanese',
    popularity: 97,
    episodes: '87 episodes',
    summary: 'Humanity fights to survive while the real enemy hides in plain sight.',
  },
  {
    id: 4,
    title: 'Frieren',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80',
    year: 2024,
    quality: 'HD',
    genre: 'Fantasy',
    rating: '12+',
    language: 'Japanese',
    popularity: 93,
    episodes: '28 episodes',
    summary: 'A reflective fantasy journey across memory, grief, and legacy.',
  },
  {
    id: 5,
    title: 'Vinland Saga',
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=80',
    year: 2023,
    quality: 'HD',
    genre: 'Drama',
    rating: '16+',
    language: 'Japanese',
    popularity: 87,
    episodes: '48 episodes',
    summary: 'A brutal but deeply human story about revenge and choosing peace.',
  },
  {
    id: 6,
    title: 'Solo Leveling',
    imageUrl: 'https://images.unsplash.com/photo-1613679074971-91fc27180061?auto=format&fit=crop&w=900&q=80',
    year: 2024,
    quality: 'HD',
    genre: 'Action',
    rating: '16+',
    language: 'Korean',
    popularity: 96,
    episodes: '12 episodes',
    summary: 'A dungeon crawler power fantasy with stylish progression arcs.',
  },
  {
    id: 7,
    title: 'Blue Lock',
    imageUrl: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=900&q=80',
    year: 2022,
    quality: 'HD',
    genre: 'Sports',
    rating: '12+',
    language: 'Japanese',
    popularity: 82,
    episodes: '24 episodes',
    summary: 'A ruthless striker academy built around ego and pure velocity.',
  },
  {
    id: 8,
    title: 'Monster',
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80',
    year: 2010,
    quality: 'SD',
    genre: 'Mystery',
    rating: '18+',
    language: 'Japanese',
    popularity: 88,
    episodes: '74 episodes',
    summary: 'A chilling psychological thriller where one choice haunts everything.',
  },
];

const option = (value: string): FilterOption => ({ value, label: value });

const qualityOptions: FilterOption[] = ['All', 'HD', 'SD', 'CAM'].map(option);
const genreOptions: FilterOption[] = ['All', 'Action', 'Adventure', 'Drama', 'Fantasy', 'Mystery', 'Sports'].map(option);
const ratingOptions: FilterOption[] = ['All', '12+', '16+', '18+'].map(option);
const yearOptions: FilterOption[] = ['All', '2024', '2023', '2022', '2021', '2010'].map(option);
const languageOptions: FilterOption[] = ['All', 'Japanese', 'Korean', 'English'].map(option);
const sortOptions: FilterOption[] = ['Popular', 'Newest', 'A-Z'].map(option);

const initialFilters: ActiveFilters = {
  quality: 'All',
  genre: 'All',
  rating: 'All',
  year: 'All',
  language: 'All',
  orderBy: 'Popular',
};

export default function App() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<ActiveFilters>(initialFilters);

  useEffect(() => {
    const scope = pageRef.current;
    if (!scope) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.reveal}`,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out', delay: 0.2 }
      );
    }, scope);

    return () => ctx.revert();
  }, []);

  const filteredCatalog = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    const result = animeCatalog.filter((item) => {
      const bySearch =
        normalizedSearch.length === 0 ||
        item.title.toLowerCase().includes(normalizedSearch) ||
        item.summary.toLowerCase().includes(normalizedSearch) ||
        item.genre.toLowerCase().includes(normalizedSearch);

      const byQuality = filters.quality === 'All' || item.quality === filters.quality;
      const byGenre = filters.genre === 'All' || item.genre === filters.genre;
      const byRating = filters.rating === 'All' || item.rating === filters.rating;
      const byYear = filters.year === 'All' || String(item.year) === filters.year;
      const byLanguage = filters.language === 'All' || item.language === filters.language;

      return bySearch && byQuality && byGenre && byRating && byYear && byLanguage;
    });

    const sorted = [...result].sort((a, b) => {
      if (filters.orderBy === 'Newest') {
        return b.year - a.year || b.popularity - a.popularity;
      }

      if (filters.orderBy === 'A-Z') {
        return a.title.localeCompare(b.title);
      }

      return b.popularity - a.popularity;
    });

    return sorted;
  }, [filters, searchTerm]);

  const trending = useMemo(() => filteredCatalog.slice(0, 5), [filteredCatalog]);

  return (
    <div ref={pageRef} className={styles.app}>
      <Hero
        title="Stream anime with style"
        subtitle="Browse top releases, discover hidden gems, and jump into your next obsession with smooth cinematic UI."
        backgroundImage="https://images.unsplash.com/photo-1613376023733-0a73315d9b06?auto=format&fit=crop&w=2000&q=80"
        ctaText="Start Watching"
        onCtaClick={() => {
          document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <main className={`${styles.main} container section-stack`} id="catalog">
        <section className={`${styles.reveal} glass ${styles.panelWrap}`}>
          <FilterPanel
            initialFilters={initialFilters}
            genres={genreOptions}
            years={yearOptions}
            qualities={qualityOptions}
            ratings={ratingOptions}
            languages={languageOptions}
            sortOptions={sortOptions}
            onSearch={setSearchTerm}
            onFiltersChange={setFilters}
          />
        </section>

        <section className={styles.layout}>
          <div className={styles.reveal}>
            <ContentGrid
              title="New Releases"
              items={filteredCatalog}
              onViewAll={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onItemClick={(id) => {
                const selected = animeCatalog.find((item) => item.id === id);
                if (selected) {
                  console.log(`Selected: ${selected.title}`);
                }
              }}
            />
          </div>

          <aside className={`${styles.reveal} ${styles.trending} glass`}>
            <h2 className={styles.trendingTitle}>Top Trending</h2>
            <ol className={styles.trendingList}>
              {trending.map((item, index) => (
                <li key={item.id}>
                  <span className={styles.rank}>{String(index + 1).padStart(2, '0')}</span>
                  <img src={item.imageUrl} alt={item.title} loading="lazy" />
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.genre}</p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </section>
      </main>
    </div>
  );
}
