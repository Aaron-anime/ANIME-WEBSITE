import { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import type { ActiveFilters, FilterOption } from '../../types/anime';
import styles from './FilterPanel.module.css';

interface FilterPanelProps {
  initialFilters: ActiveFilters;
  genres: FilterOption[];
  years: FilterOption[];
  qualities: FilterOption[];
  ratings: FilterOption[];
  languages: FilterOption[];
  sortOptions: FilterOption[];
  onSearch: (query: string) => void;
  onFiltersChange: (filters: ActiveFilters) => void;
}

export function FilterPanel({
  initialFilters,
  genres,
  years,
  qualities,
  ratings,
  languages,
  sortOptions,
  onSearch,
  onFiltersChange,
}: FilterPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<ActiveFilters>(initialFilters);

  useEffect(() => {
    const scope = panelRef.current;
    if (!scope) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        scope,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
      );
    }, scope);

    return () => ctx.revert();
  }, []);

  const groups = useMemo(
    () => [
      { key: 'quality', label: 'Quality', options: qualities },
      { key: 'genre', label: 'Genre', options: genres },
      { key: 'rating', label: 'Rating', options: ratings },
      { key: 'year', label: 'Year', options: years },
      { key: 'language', label: 'Language', options: languages },
      { key: 'orderBy', label: 'Order By', options: sortOptions },
    ],
    [genres, years, qualities, ratings, languages, sortOptions]
  );

  const updateFilter = (key: keyof ActiveFilters, value: string) => {
    const next = { ...filters, [key]: value };
    setFilters(next);
    onFiltersChange(next);
  };

  return (
    <section ref={panelRef} className={styles.panel} aria-label="Search and filters">
      <div className={styles.searchRow}>
        <label htmlFor="anime-search" className={styles.label}>
          Search Anime
        </label>
        <div className={styles.searchControl}>
          <input
            id="anime-search"
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                onSearch(searchQuery);
              }
            }}
            className={styles.searchInput}
            placeholder="Search titles, genres, and summaries"
          />
          <button type="button" className={styles.searchButton} onClick={() => onSearch(searchQuery)}>
            Search
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        {groups.map((group) => (
          <label key={group.key} className={styles.field}>
            <span className={styles.label}>{group.label}</span>
            <select
              className={styles.select}
              value={filters[group.key as keyof ActiveFilters]}
              onChange={(event) => updateFilter(group.key as keyof ActiveFilters, event.target.value)}
            >
              {group.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>
    </section>
  );
}
