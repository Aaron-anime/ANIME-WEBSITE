import { ChevronRight } from 'lucide-react';

export default function NewReleasesPage() {
  const newReleases = [
    { id: 1, title: 'Solo Leveling', date: 'Jan 2024', rating: '9.2/10', image: 'https://images.unsplash.com/photo-1536440936351-2e2641f43dae?auto=format&fit=crop&w=500&q=80' },
    { id: 2, title: 'Wind Breaker', date: 'Feb 2024', rating: '8.8/10', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80' },
    { id: 3, title: 'Frieren', date: 'Sep 2023', rating: '9.1/10', image: 'https://images.unsplash.com/photo-1534704192104-0f72e8993c82?auto=format&fit=crop&w=500&q=80' },
    { id: 4, title: 'Haikyu!!', date: 'Oct 2023', rating: '8.9/10', image: 'https://images.unsplash.com/photo-1533461502717-83546f485c55?auto=format&fit=crop&w=500&q=80' },
    { id: 5, title: 'Blue Exorcist', date: 'Nov 2023', rating: '8.7/10', image: 'https://images.unsplash.com/photo-1483389127117-b6a2102724ae?auto=format&fit=crop&w=500&q=80' },
    { id: 6, title: 'Bungo Stray Dogs', date: 'Dec 2023', rating: '8.6/10', image: 'https://images.unsplash.com/photo-1516450360452-9312f5ff84ab?auto=format&fit=crop&w=500&q=80' },
  ];

  return (
    <main className="main-content" aria-label="New releases">
      <header className="main-top-nav">
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700 }}>✨ New Releases</h1>
        <div className="main-top-actions">
          <button type="button" className="icon-button" aria-label="View all new releases">
            <ChevronRight size={16} />
          </button>
        </div>
      </header>

      <section style={{ padding: '1.2rem 1.05rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.2rem' }}>
          {newReleases.map((anime) => (
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
                    right: '0.8rem',
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(8px)',
                    color: 'white',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                  }}>
                    ⭐ {anime.rating}
                  </div>
                  <h3 style={{ margin: 0, color: 'white', fontSize: '1rem', fontWeight: 600 }}>{anime.title}</h3>
                  <p style={{ margin: '0.4rem 0 0 0', color: '#a1a1aa', fontSize: '0.8rem' }}>{anime.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
