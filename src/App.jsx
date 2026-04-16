import './App.css'

const dayMovies = [
  {
    title: 'Sousou no Frieren',
    year: '2022',
    image: 'https://picsum.photos/seed/frieren/320/460',
  },
  {
    title: 'Gintama',
    year: '1998',
    image: 'https://picsum.photos/seed/gintama/320/460',
  },
  {
    title: 'Shingeki no Kyojin',
    year: '2021',
    image: 'https://picsum.photos/seed/aot/320/460',
  },
  {
    title: 'Hunter x Hunter',
    year: '2014',
    image: 'https://picsum.photos/seed/hxh/320/460',
  },
  {
    title: 'Bleach: Sennen Kessen-hen',
    year: '2008',
    image: 'https://picsum.photos/seed/bleach/320/460',
  },
]

const popularSeries = [
  {
    title: 'Shingeki no Kyojin',
    year: '2021',
    image: 'https://picsum.photos/seed/aot2/320/460',
  },
  {
    title: 'Hunter x Hunter',
    year: '2014',
    image: 'https://picsum.photos/seed/hxh2/320/460',
  },
  {
    title: 'Gintama',
    year: '1998',
    image: 'https://picsum.photos/seed/gintama2/320/460',
  },
  {
    title: 'Bleach: Sennen Kessen-hen',
    year: '2008',
    image: 'https://picsum.photos/seed/bleach2/320/460',
  },
  {
    title: 'Sousou no Frieren',
    year: '2022',
    image: 'https://picsum.photos/seed/frieren2/320/460',
  },
]

const movieNews = [
  {
    title: 'Kaguya-sama wa Kokurasetai',
    image: 'https://picsum.photos/seed/kaguya/220/300',
    excerpt: 'Opowiada historię Naruto Uzumakiego, młodego ninja, który marzy o zostaniu najsilniejszym...',
  },
  {
    title: 'Monster',
    image: 'https://picsum.photos/seed/monster/220/300',
    excerpt: 'Opowiada historię Naruto Uzumakiego, młodego ninja, który marzy o zostaniu najsilniejszym...',
  },
  {
    title: 'Shingeki no Kyojin: The Final Season',
    image: 'https://picsum.photos/seed/final/220/300',
    excerpt: 'Opowiada historię Naruto Uzumakiego, młodego ninja, który marzy o zostaniu najsilniejszym...',
  },
  {
    title: 'Gintama',
    image: 'https://picsum.photos/seed/gintama-news/220/300',
    excerpt: 'Opowiada historię Naruto Uzumakiego, młodego ninja, który marzy o zostaniu najsilniejszym...',
  },
  {
    title: 'Vinland Saga 2',
    image: 'https://picsum.photos/seed/vinland/220/300',
    excerpt: 'Opowiada historię Naruto Uzumakiego, młodego ninja, który marzy o zostaniu najsilniejszym...',
  },
  {
    title: 'Hajime no Ippo',
    image: 'https://picsum.photos/seed/ippo/220/300',
    excerpt: 'Opowiada historię Naruto Uzumakiego, młodego ninja, który marzy o zostaniu najsilniejszym...',
  },
]

function App() {
  return (
    <main className="site-wrap">
      <section className="site-panel">
        <header className="site-header">
          <a className="logo" href="#home" aria-label="Anime">
            <strong>ANIME</strong>
            <span>FILMY I SERIALE</span>
          </a>

          <nav className="main-nav" aria-label="Nawigacja główna">
            <a href="#filmy">Filmy</a>
            <a href="#seriale">Seriale</a>
            <a href="#nowosci">Nowości</a>
            <a href="#popularne">Popularne</a>
            <a href="#aktorzy">Aktorzy</a>
            <a href="#blog">Blog</a>
          </nav>

          <div className="header-tools">
            <label className="search-box" htmlFor="search">
              <input id="search" type="text" placeholder="Wyszukaj film" />
              <span>⌕</span>
            </label>
            <button className="menu-btn" type="button" aria-label="Open menu">
              ☰
            </button>
          </div>
        </header>

        <section className="hero" id="home">
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1>NARUTO</h1>
            <div className="hero-tags">
              <span>12+</span>
              <span>AKCJA</span>
              <span>Z NAPISAMI</span>
            </div>
            <p>
              Opowiada historię Naruto Uzumakiego, młodego ninja, który marzy o zostaniu najsilniejszym
              ninja w swojej wiosce (Hokage), jednocześnie szukając uznania i walcząc z wewnętrznymi
              demonami.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#filmy">
                OGLĄDAJ TERAZ
              </a>
              <a className="btn btn-ghost" href="#opis">
                CZYTAJ OPIS
              </a>
            </div>
          </div>
          <div className="slider-dots" aria-hidden="true">
            <span className="active" />
            <span />
            <span />
          </div>
        </section>

        <section className="shelf" id="filmy">
          <header className="shelf-head">
            <h2>FILMY DNIA</h2>
          </header>
          <div className="poster-row">
            {dayMovies.map((item) => (
              <article key={item.title} className="poster-item">
                <div className="poster-frame">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span className="year-pill">{item.year}</span>
                </div>
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="shelf" id="popularne">
          <header className="shelf-head">
            <h2>POPULARNE SERIALE</h2>
          </header>
          <div className="poster-row">
            {popularSeries.map((item) => (
              <article key={item.title} className="poster-item">
                <div className="poster-frame">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span className="year-pill">{item.year}</span>
                </div>
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="news" id="nowosci">
          <header className="shelf-head">
            <h2>NOWOŚCI FILMOWE</h2>
          </header>
          <div className="news-grid">
            {movieNews.map((item) => (
              <article key={item.title} className="news-card">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.excerpt}</p>
                  <a href="#home">OGLĄDAJ TERAZ →</a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}

export default App
