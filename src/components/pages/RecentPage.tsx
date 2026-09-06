export default function RecentPage() {
  const recentItems = [
    { id: 1, title: 'Demon Slayer', episode: 'Episode 12 - Unwavering Resolve', date: '2 hours ago', image: 'https://images.unsplash.com/photo-1508042049619-aba7e08e0fbb?auto=format&fit=crop&w=500&q=80' },
    { id: 2, title: 'My Hero Academia', episode: 'Episode 78 - The Final War Begins', date: '1 day ago', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=500&q=80' },
    { id: 3, title: 'Jujutsu Kaisen', episode: 'Episode 8 - The Shibuya Incident', date: '3 days ago', image: 'https://images.unsplash.com/photo-1503315668682-6e6f5a31f9b8?auto=format&fit=crop&w=500&q=80' },
    { id: 4, title: 'Attack on Titan', episode: 'Episode 75 - Rumbling', date: '1 week ago', image: 'https://images.unsplash.com/photo-1489599849228-da7355aeace5?auto=format&fit=crop&w=500&q=80' },
  ];

  return (
    <main className="main-content" aria-label="Recently watched">
      <header className="main-top-nav">
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700 }}>⏱️ Recently Watched</h1>
      </header>

      <section style={{ padding: '1.2rem 1.05rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {recentItems.map((item) => (
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
                style={{ width: '160px', height: '90px', borderRadius: '8px', objectFit: 'cover' }}
              />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ margin: 0, color: 'white', fontSize: '1.1rem', fontWeight: 600 }}>{item.title}</h3>
                  <p style={{ margin: '0.4rem 0 0 0', color: '#a1a1aa', fontSize: '0.9rem' }}>{item.episode}</p>
                </div>
                <p style={{ margin: 0, color: '#7b7b87', fontSize: '0.8rem' }}>{item.date}</p>
              </div>
              <button type="button" style={{
                background: 'var(--accent)',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                fontSize: '0.85rem',
                fontWeight: 600,
                whiteSpace: 'nowrap'
              }} aria-label="Continue watching">
                Continue
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
