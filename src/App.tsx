import HeroSection from './components/HeroSection';
import AnimeGrid from './components/AnimeGrid';
import './App.css';

const navItems: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'HOME', href: '#home' },
  { label: 'TRENDING', href: '#trending' },
  { label: 'MY LIST', href: '#my-list' },
];

export default function App() {
  return (
    <div className="app-shell">
      <nav className="top-nav">
        <a className="brand" href="#home" aria-label="ANIME hub home">
          ANIME.hub
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="trending">
          <AnimeGrid />
        </section>

        <section id="my-list" className="my-list-placeholder">
          <h2>My List</h2>
          <p>Save your favorites here and keep your watch queue organized.</p>
        </section>
      </main>
    </div>
  );
}
