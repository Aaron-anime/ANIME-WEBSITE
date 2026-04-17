import HeroSection from './components/HeroSection';
import AnimeGrid from './components/AnimeGrid';
import './App.css';

const navItems: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Home', href: '#home' },
  { label: 'Trending', href: '#trending' },
  { label: 'My List', href: '#my-list' },
];

export default function App() {
  return (
    <div className="app-shell">
      <header className="top-nav">
        <a className="brand" href="#home" aria-label="ANIME hub home">
          ANIME.hub
        </a>

        <nav aria-label="Main navigation">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <div id="home">
          <HeroSection />
        </div>

        <div id="trending">
          <AnimeGrid />
        </div>

        <section id="my-list" className="my-list-placeholder">
          <h2>My List</h2>
          <p>Save your favorites here and keep your watch queue organized.</p>
        </section>
      </main>
    </div>
  );
}
