import { useState } from 'react';
import { Bell, ChevronDown } from 'lucide-react';
import HeroSection from './HeroSection';
import AnimeGrid from './AnimeGrid';

const topNavItems = ['Movies', 'Series'] as const;
type TopNavItem = (typeof topNavItems)[number];

interface MainContentProps {
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
}

export default function MainContent({ searchQuery, onSearchQueryChange }: MainContentProps) {
  const [activeTab, setActiveTab] = useState<TopNavItem>('Series');

  return (
    <main className="main-content" aria-label="Main dashboard content">
      <header className="main-top-nav">
        <nav aria-label="Content type navigation">
          <ul>
            {topNavItems.map((item) => (
              <li key={item} className={item === activeTab ? 'is-active' : ''}>
                <button type="button" onClick={() => setActiveTab(item)}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="main-top-actions">
          <label className="top-search" aria-label="Search from main navigation">
            <input
              type="search"
              placeholder="Search anime, movies, or episodes"
              value={searchQuery}
              onChange={(event) => onSearchQueryChange(event.target.value)}
            />
          </label>

          <button type="button" className="icon-button" aria-label="Notifications">
            <Bell size={16} />
          </button>

          <button type="button" className="profile-chip" aria-label="Open profile menu">
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=80&q=80"
              alt="Profile avatar"
            />
            <ChevronDown size={14} />
          </button>
        </div>
      </header>

      <HeroSection />
      <AnimeGrid searchQuery={searchQuery} contentType={activeTab} />
    </main>
  );
}
