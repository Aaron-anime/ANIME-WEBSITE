import type { PageType } from '../App';
import { Bell, ChevronDown } from 'lucide-react';
import HeroSection from './HeroSection';
import AnimeGrid from './AnimeGrid';
import TrendingPage from './pages/TrendingPage';
import NewReleasesPage from './pages/NewReleasesPage';
import WatchlistPage from './pages/WatchlistPage';
import RecentPage from './pages/RecentPage';
import DownloadsPage from './pages/DownloadsPage';
import CommunityPage from './pages/CommunityPage';
import EventsPage from './pages/EventsPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';

const topNavItems = ['Movies', 'Series'] as const;
type TopNavItem = (typeof topNavItems)[number];

interface MainContentProps {
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  contentType: 'Movies' | 'Series';
  onContentTypeChange: (type: 'Movies' | 'Series') => void;
  currentPage: PageType;
}

export default function MainContent({ searchQuery, onSearchQueryChange, contentType, onContentTypeChange, currentPage }: MainContentProps) {
  
  // Render different pages based on currentPage
  if (currentPage === 'trending') return <TrendingPage />;
  if (currentPage === 'new-releases') return <NewReleasesPage />;
  if (currentPage === 'watchlist') return <WatchlistPage />;
  if (currentPage === 'recent') return <RecentPage />;
  if (currentPage === 'downloads') return <DownloadsPage />;
  if (currentPage === 'community') return <CommunityPage />;
  if (currentPage === 'events') return <EventsPage />;
  if (currentPage === 'settings') return <SettingsPage />;
  if (currentPage === 'profile') return <ProfilePage />;

  return (
    <main className="main-content" aria-label="Main dashboard content">
      <header className="main-top-nav">
        <nav aria-label="Content type navigation">
          <ul>
            {topNavItems.map((item) => (
              <li key={item} className={item === contentType ? 'is-active' : ''}>
                <button type="button" onClick={() => onContentTypeChange(item)}>
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
      <AnimeGrid searchQuery={searchQuery} contentType={contentType} />
    </main>
  );
}
