import './App.css'

const featuredAnime = [
  {
    title: 'Skyline Blades',
    genre: 'Action / Sci-Fi',
    description:
      'A rogue pilot and an exiled prince fight across neon cities to stop a war machine waking under the sea.',
    badge: 'Trending',
  },
  {
    title: 'Moonlit Garden',
    genre: 'Fantasy / Drama',
    description:
      'A quiet story about a shrine keeper who can hear wishes growing inside the flowers he tends at midnight.',
    badge: 'New',
  },
  {
    title: 'Zero Hour Tokyo',
    genre: 'Thriller / Mystery',
    description:
      'When the city resets every 12 minutes, a delivery runner becomes the only person who remembers the loop.',
    badge: 'Top Pick',
  },
]

const weeklySchedule = [
  { day: 'Mon', title: 'Midnight Signal', time: '20:00 JST' },
  { day: 'Wed', title: 'Neon Bloom', time: '21:30 JST' },
  { day: 'Fri', title: 'Blade Archive', time: '22:00 JST' },
  { day: 'Sun', title: 'Starlight Orbit', time: '19:00 JST' },
]

const stats = [
  { label: 'Series tracked', value: '120+' },
  { label: 'Episode updates', value: 'Daily' },
  { label: 'Genres covered', value: '18' },
]

function App() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Anime base for React</p>
          <h1>Discover your next favorite series.</h1>
        </div>
        <nav className="nav-pills" aria-label="Primary">
          <a href="#featured">Featured</a>
          <a href="#schedule">Schedule</a>
          <a href="#library">Library</a>
        </nav>
      </header>

      <section className="hero-panel">
        <div className="hero-copy">
          <span className="status-chip">Seasonal catalog open</span>
          <h2>Curated anime cards, episode timing, and genre discovery in one clean base.</h2>
          <p>
            Use this React starter as the foundation for an anime streaming site, fan catalog, or review hub.
            The layout is already split into hero, featured shows, and weekly schedule sections.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#featured">
              Browse featured
            </a>
            <a className="secondary-action" href="#library">
              Explore genres
            </a>
          </div>
          <div className="stats-row" aria-label="Site stats">
            {stats.map((stat) => (
              <article key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="poster-card main-poster">
            <span className="poster-tag">Tonight</span>
            <h3>Neon Samurai</h3>
            <p>Episode 08 - City lights, steel rain.</p>
          </div>
          <div className="poster-card small-poster">
            <span className="dot" />
            <p>Next premiere in 02:14:36</p>
          </div>
        </div>
      </section>

      <section className="content-grid" id="featured">
        <div className="section-heading">
          <p className="eyebrow">Featured series</p>
          <h3>Shows with strong hooks and visual identity.</h3>
        </div>
        <div className="anime-grid">
          {featuredAnime.map((anime) => (
            <article key={anime.title} className="anime-card">
              <span className="card-badge">{anime.badge}</span>
              <h4>{anime.title}</h4>
              <p className="genre">{anime.genre}</p>
              <p>{anime.description}</p>
              <a href="#library">View details</a>
            </article>
          ))}
        </div>
      </section>

      <section className="content-grid two-column" id="schedule">
        <div>
          <div className="section-heading">
            <p className="eyebrow">Weekly schedule</p>
            <h3>Make release timing easy to scan.</h3>
          </div>
          <div className="schedule-list">
            {weeklySchedule.map((item) => (
              <article key={item.title} className="schedule-item">
                <span>{item.day}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.time}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="library-panel" id="library">
          <div className="section-heading compact">
            <p className="eyebrow">Library notes</p>
            <h3>Base sections ready for search, filtering, or watchlists.</h3>
          </div>
          <ul className="library-tags">
            <li>Action</li>
            <li>Romance</li>
            <li>Slice of life</li>
            <li>Fantasy</li>
            <li>Mystery</li>
            <li>Mecha</li>
          </ul>
        </aside>
      </section>
    </main>
  )
}

export default App
