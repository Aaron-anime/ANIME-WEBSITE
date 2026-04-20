import { Bell, ChevronDown } from 'lucide-react';
import HeroSection from './HeroSection';
import AnimeGrid from './AnimeGrid';

const topNavItems = ['Movies', 'Series'];

export default function MainContent() {
  return (
    <main className="main-content" aria-label="Main dashboard content">
      <header className="main-top-nav">
        <nav aria-label="Content type navigation">
          <ul>
            {topNavItems.map((item) => (
              <li key={item} className={item === 'Series' ? 'is-active' : ''}>
                <button type="button">{item}</button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="main-top-actions">
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
      <AnimeGrid />
    </main>
  );
}
