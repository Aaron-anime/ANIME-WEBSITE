import { useMemo, useState } from 'react'
import './App.css'

const mangaCatalog = [
  {
    id: 1,
    title: 'Jujutsu Kaisen',
    section: 'new',
    image: 'https://picsum.photos/seed/jujutsu/520/720',
    year: '2024',
    quality: 'HD',
    genre: 'Action',
    rating: '18+',
    language: 'Japanese',
    order: 'Feature',
    popularity: 98,
    summary: 'A dark, fast-paced battle manga about cursed energy, cursed spirits, and impossible stakes.',
  },
  {
    id: 2,
    title: 'One Piece',
    section: 'new',
    image: 'https://picsum.photos/seed/onepiece/520/720',
    year: '2023',
    quality: 'HD',
    genre: 'Adventure',
    rating: '12+',
    language: 'Japanese',
    order: 'Feature',
    popularity: 100,
    summary: 'A long-running voyage for the ultimate treasure, built on freedom, loyalty, and chaos.',
  },
  {
    id: 3,
    title: 'Attack on Titan',
    section: 'new',
    image: 'https://picsum.photos/seed/aot/520/720',
    year: '2021',
    quality: 'HD',
    genre: 'Action',
    rating: '16+',
    language: 'Japanese',
    order: 'Popular',
    popularity: 97,
    summary: 'Humanity fights for survival behind walls while the truth keeps getting worse.',
  },
  {
    id: 4,
    title: 'Bleach',
    section: 'new',
    image: 'https://picsum.photos/seed/bleach/520/720',
    year: '2008',
    quality: 'HD',
    genre: 'Action',
    rating: '16+',
    language: 'Japanese',
    order: 'Feature',
    popularity: 90,
    summary: 'Soul reapers, swords, and a huge supernatural conflict with a sharp visual identity.',
  },
  {
    id: 5,
    title: 'Frieren',
    section: 'new',
    image: 'https://picsum.photos/seed/frieren/520/720',
    year: '2024',
    quality: 'HD',
    genre: 'Fantasy',
    rating: '12+',
    language: 'Japanese',
    order: 'Feature',
    popularity: 93,
    summary: 'A reflective fantasy about time, memory, and what remains after the big adventure ends.',
  },
  {
    id: 6,
    title: 'Monster',
    section: 'new',
    image: 'https://picsum.photos/seed/monster/520/720',
    year: '2010',
    quality: 'HD',
    genre: 'Mystery',
    rating: '18+',
    language: 'Japanese',
    order: 'Popular',
    popularity: 88,
    summary: 'A quiet thriller where one decision changes a life, then the entire city around it.',
  },
  {
    id: 7,
    title: 'Vinland Saga',
    section: 'new',
    image: 'https://picsum.photos/seed/vinland/520/720',
    year: '2023',
    quality: 'HD',
    genre: 'Drama',
    rating: '16+',
    language: 'Japanese',
    order: 'Feature',
    popularity: 87,
    summary: 'A brutal, character-driven story about violence, revenge, and finding a better path.',
  },
  {
    id: 8,
    title: 'Blue Lock',
    section: 'new',
    image: 'https://picsum.photos/seed/bluelock/520/720',
    year: '2022',
    quality: 'HD',
    genre: 'Sports',
    rating: '12+',
    language: 'Japanese',
    order: 'Popular',
    popularity: 82,
    summary: 'A ruthless soccer competition built to forge the world’s best striker.',
  },
  {
    id: 9,
    title: 'Spy x Family',
    section: 'new',
    image: 'https://picsum.photos/seed/spyfamily/520/720',
    year: '2022',
    quality: 'HD',
    genre: 'Comedy',
    rating: '12+',
    language: 'Japanese',
    order: 'Feature',
    popularity: 89,
    summary: 'A fake family hiding big secrets while trying to survive espionage and school life.',
  },
  {
    id: 10,
    title: 'Chainsaw Man',
    section: 'new',
    image: 'https://picsum.photos/seed/chainsaw/520/720',
    year: '2022',
    quality: 'HD',
    genre: 'Action',
    rating: '18+',
    language: 'Japanese',
    order: 'Popular',
    popularity: 91,
    summary: 'A violent, irreverent monster-hunter story with an unstable heart under the noise.',
  },
  {
    id: 11,
    title: 'Haikyu!!',
    section: 'new',
    image: 'https://picsum.photos/seed/haikyu/520/720',
    year: '2014',
    quality: 'HD',
    genre: 'Sports',
    rating: '12+',
    language: 'Japanese',
    order: 'Feature',
    popularity: 84,
    summary: 'Volleyball energy with excellent pacing, character growth, and momentum.',
  },
  {
    id: 12,
    title: 'Solo Leveling',
    section: 'new',
    image: 'https://picsum.photos/seed/sololeveling/520/720',
    year: '2024',
    quality: 'HD',
    genre: 'Action',
    rating: '16+',
    language: 'Korean',
    order: 'Feature',
    popularity: 96,
    summary: 'A power-fantasy dungeon rise with a crisp progression loop and sharp art direction.',
  },
]

const releaseRows = [
  ['Jujutsu Kaisen', 'One Piece', 'Attack on Titan'],
  ['Bleach', 'Frieren', 'Monster'],
  ['Vinland Saga', 'Blue Lock', 'Spy x Family'],
  ['Chainsaw Man', 'Haikyu!!', 'Solo Leveling'],
  ['Bleach', 'Monster', 'Spy x Family'],
]

const filterOptions = {
  quality: ['All', 'HD', 'SD', 'CAM'],
  genre: ['All', 'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Mystery', 'Sports'],
  rating: ['All', '12+', '16+', '18+'],
  year: ['All', '2024', '2023', '2022', '2021', '2014', '2010'],
  language: ['All', 'Japanese', 'Korean', 'English'],
  orderBy: ['Feature', 'Popular', 'Newest', 'A-Z'],
}

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [quality, setQuality] = useState('All')
  const [genre, setGenre] = useState('All')
  const [rating, setRating] = useState('All')
  const [year, setYear] = useState('All')
  const [language, setLanguage] = useState('All')
  const [orderBy, setOrderBy] = useState('Feature')

  const filteredCatalog = useMemo(() => {
    const lowered = searchTerm.trim().toLowerCase()

    const matches = mangaCatalog.filter((item) => {
      const matchesSearch =
        lowered.length === 0 ||
        item.title.toLowerCase().includes(lowered) ||
        item.summary.toLowerCase().includes(lowered) ||
        item.genre.toLowerCase().includes(lowered)

      const matchesQuality = quality === 'All' || item.quality === quality
      const matchesGenre = genre === 'All' || item.genre === genre
      const matchesRating = rating === 'All' || item.rating === rating
      const matchesYear = year === 'All' || item.year === year
      const matchesLanguage = language === 'All' || item.language === language

      return (
        matchesSearch &&
        matchesQuality &&
        matchesGenre &&
        matchesRating &&
        matchesYear &&
        matchesLanguage
      )
    })

    const ordered = [...matches].sort((left, right) => {
      if (orderBy === 'Newest') {
        return Number(right.year) - Number(left.year) || right.popularity - left.popularity
      }

      if (orderBy === 'Popular') {
        return right.popularity - left.popularity
      }

      if (orderBy === 'A-Z') {
        return left.title.localeCompare(right.title)
      }

      return right.popularity - left.popularity
    })

    return ordered
  }, [genre, language, orderBy, quality, rating, searchTerm, year])

  const trendingCatalog = useMemo(() => filteredCatalog.slice(0, 10), [filteredCatalog])

  const releaseRowsData = useMemo(() => {
    const mapByTitle = new Map(filteredCatalog.map((item) => [item.title, item]))

    return releaseRows.map((rowTitles) => rowTitles.map((title) => mapByTitle.get(title)).filter(Boolean))
  }, [filteredCatalog])

  const handleSearchSubmit = (event) => {
    event.preventDefault()

    const resultsSection = document.getElementById('results')
    resultsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="page-shell">
      <section className="site-frame">
        <header className="site-header">
          <a className="logo" href="#home" aria-label="Manga Collec home">
            <strong>ANIME</strong>
            <span>FILMY I SERIALE</span>
          </a>

          <nav className="main-nav" aria-label="Primary navigation">
            <a href="#new-release">New Release</a>
            <a href="#trending">Top Trending</a>
            <a href="#footer">Footer</a>
          </nav>

          <button className="menu-btn" type="button" aria-label="Open menu">
            ☰
          </button>
        </header>

        <section className="hero" id="home">
          <div className="hero-copy">
            <h1>
              DISCOVER THE ULTIMATE MANGA MASTERPIECES DIVE INTO THE BEST READS!
            </h1>
            <p>
              Embark on an exhilarating journey through the captivating world of manga with our curated
              selection of the finest titles. Whether you are a seasoned manga enthusiast or starting
              your first shelf, everything here is searchable and filterable.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#new-release">
                READ NOW
              </a>
              <a className="btn btn-ghost" href="#results">
                CHAPTER 205
              </a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="hero-glow" />
            <div className="hero-character">
              <div className="hero-mask" />
              <div className="hero-hands" />
            </div>
          </div>
        </section>

        <section className="filter-panel" aria-label="Search and filters">
          <form className="filters" onSubmit={handleSearchSubmit}>
            <label className="search-field" htmlFor="search-term">
              <span>Search Term:</span>
              <div className="search-input-row">
                <input
                  id="search-term"
                  type="text"
                  placeholder="Search Manga..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
                <button type="submit">Search</button>
              </div>
            </label>

            <div className="filter-grid">
              <label>
                <span>Quality:</span>
                <select value={quality} onChange={(event) => setQuality(event.target.value)}>
                  {filterOptions.quality.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span>Genre:</span>
                <select value={genre} onChange={(event) => setGenre(event.target.value)}>
                  {filterOptions.genre.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span>Rating:</span>
                <select value={rating} onChange={(event) => setRating(event.target.value)}>
                  {filterOptions.rating.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span>Year:</span>
                <select value={year} onChange={(event) => setYear(event.target.value)}>
                  {filterOptions.year.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span>Language</span>
                <select value={language} onChange={(event) => setLanguage(event.target.value)}>
                  {filterOptions.language.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span>Order By:</span>
                <select value={orderBy} onChange={(event) => setOrderBy(event.target.value)}>
                  {filterOptions.orderBy.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </form>
        </section>

        <section className="content-grid" id="results">
          <div className="release-column" id="new-release">
            {releaseRowsData.slice(0, 5).map((rowItems, rowIndex) => (
              <section className="release-block" key={`${rowIndex}-${rowItems.length}`}>
                <header className="section-head">
                  <h2>NEW RELEASE</h2>
                  <a href="#results">SEE MORE</a>
                </header>

                <div className="release-grid">
                  {rowItems.length > 0 ? (
                    rowItems.map((item) => (
                      <article className="release-card" key={item.id}>
                        <img src={item.image} alt={item.title} loading="lazy" />
                        <h3>{item.title}</h3>
                      </article>
                    ))
                  ) : (
                    <div className="empty-state">No titles match the current filters.</div>
                  )}
                </div>
              </section>
            ))}
          </div>

          <aside className="trending-panel" id="trending">
            <div className="section-head trending-head">
              <h2>TOP TRENDING</h2>
            </div>

            <ol className="trending-list">
              {trendingCatalog.length > 0 ? (
                trendingCatalog.map((item, index) => (
                  <li key={item.id}>
                    <span className="rank">{String(index + 1).padStart(2, '0')}</span>
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className="trend-copy">
                      <strong>{item.title}</strong>
                      <div className="trend-tags">
                        <span>{item.genre}</span>
                        <span>{item.rating}</span>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <li className="empty-state">No trending titles found.</li>
              )}
            </ol>
          </aside>
        </section>

        <footer className="site-footer" id="footer">
          <div className="footer-card">
            <h2>MANGA COLLEC</h2>
            <p>STAY CONNECTED STAY CURIOUS - READ MORE WITH US!</p>
            <div className="footer-links">
              <a href="#home">Term of Service</a>
              <a href="#home">Privacy Policy</a>
              <a href="#home">Support Center</a>
              <a href="#home">Sitemap</a>
            </div>
          </div>
        </footer>
      </section>
    </main>
  )
}

export default App
