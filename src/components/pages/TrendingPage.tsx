import { ChevronRight } from 'lucide-react';

export default function TrendingPage() {
  const trendingAnime = [
    { id: 1, title: 'Jujutsu Kaisen', rank: 1, views: '2.5M views', image: 'https://images.unsplash.com/photo-1503315668682-6e6f5a31f9b8?auto=format&fit=crop&w=500&q=80' },
    { id: 2, title: 'Demon Slayer', rank: 2, views: '2.3M views', image: 'https://images.unsplash.com/photo-1508042049619-aba7e08e0fbb?auto=format&fit=crop&w=500&q=80' },
    { id: 3, title: 'Attack on Titan', rank: 3, views: '2.1M views', image: 'https://images.unsplash.com/photo-1489599849228-da7355aeace5?auto=format&fit=crop&w=500&q=80' },
    { id: 4, title: 'Tokyo Revengers', rank: 4, views: '1.9M views', image: 'https://images.unsplash.com/photo-1502356128c64-bee7eeba266d?auto=format&fit=crop&w=500&q=80' },
  ];

  return (
    <main className="main-content" aria-label="Trending anime">
      <header className="main-top-nav">
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700 }}>🔥 Trending Now</h1>
        <div className="main-top-actions">
          <button type="button" className="icon-button" aria-label="View all trending">
            <ChevronRight size={16} />
          </button>
        </div>
      </header>

      <section style={{ padding: '1.2rem 1.05rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.2rem' }}>
          {trendingAnime.map((anime) => (
            <article key={anime.id} style={{ cursor: 'pointer', position: 'relative' }}>
              <div style={{ position: 'relative', paddingBottom: '150%', borderRadius: '12px', overflow: 'hidden' }}>
                <img
                  src={anime.image}
                  alt={anime.title}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.8))',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1rem'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '0.8rem',
                    left: '0.8rem',
                    background: 'var(--accent)',
                    color: 'white',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                  }}>
                    #{anime.rank}
                  </div>
                  <h3 style={{ margin: 0, color: 'white', fontSize: '1rem', fontWeight: 600 }}>{anime.title}</h3>
                  <p style={{ margin: '0.4rem 0 0 0', color: '#a1a1aa', fontSize: '0.8rem' }}>{anime.views}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
