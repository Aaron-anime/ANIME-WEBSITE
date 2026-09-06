import { Trash2 } from 'lucide-react';

export default function WatchlistPage() {
  const watchlistItems = [
    { id: 1, title: 'Demon Slayer', progress: '45%', episode: 'Ep 12/24', image: 'https://images.unsplash.com/photo-1508042049619-aba7e08e0fbb?auto=format&fit=crop&w=500&q=80' },
    { id: 2, title: 'My Hero Academia', progress: '78%', episode: 'Ep 78/130', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=500&q=80' },
    { id: 3, title: 'Attack on Titan', progress: '92%', episode: 'Ep 75/86', image: 'https://images.unsplash.com/photo-1489599849228-da7355aeace5?auto=format&fit=crop&w=500&q=80' },
    { id: 4, title: 'Jujutsu Kaisen', progress: '34%', episode: 'Ep 8/24', image: 'https://images.unsplash.com/photo-1503315668682-6e6f5a31f9b8?auto=format&fit=crop&w=500&q=80' },
  ];

  return (
    <main className="main-content" aria-label="My watchlist">
      <header className="main-top-nav">
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700 }}>📋 My Watchlist</h1>
      </header>

      <section style={{ padding: '1.2rem 1.05rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {watchlistItems.map((item) => (
            <article key={item.id} style={{
              display: 'flex',
              gap: '1rem',
              padding: '1rem',
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.08)',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '120px', height: '160px', borderRadius: '8px', objectFit: 'cover' }}
              />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ margin: 0, color: 'white', fontSize: '1.1rem', fontWeight: 600 }}>{item.title}</h3>
                  <p style={{ margin: '0.4rem 0 0 0', color: '#a1a1aa', fontSize: '0.9rem' }}>{item.episode}</p>
                </div>
                <div>
                  <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: item.progress,
                      background: 'linear-gradient(90deg, var(--accent), #ff6b35)',
                      borderRadius: '999px'
                    }} />
                  </div>
                  <p style={{ margin: '0.4rem 0 0 0', color: '#a1a1aa', fontSize: '0.8rem' }}>{item.progress}</p>
                </div>
              </div>
              <button type="button" style={{
                background: 'transparent',
                border: 'none',
                color: '#a1a1aa',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }} aria-label="Remove from watchlist">
                <Trash2 size={18} />
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
