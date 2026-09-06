import { Download, Trash2 } from 'lucide-react';

export default function DownloadsPage() {
  const downloadedItems = [
    { id: 1, title: 'Demon Slayer', episodes: '12/24 episodes', size: '8.4 GB', image: 'https://images.unsplash.com/photo-1508042049619-aba7e08e0fbb?auto=format&fit=crop&w=500&q=80' },
    { id: 2, title: 'My Hero Academia', episodes: '78/130 episodes', size: '12.2 GB', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=500&q=80' },
    { id: 3, title: 'Jujutsu Kaisen', episodes: '8/24 episodes', size: '4.6 GB', image: 'https://images.unsplash.com/photo-1503315668682-6e6f5a31f9b8?auto=format&fit=crop&w=500&q=80' },
  ];

  return (
    <main className="main-content" aria-label="Downloaded anime">
      <header className="main-top-nav">
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700 }}>⬇️ My Downloads</h1>
        <div style={{ fontSize: '0.9rem', color: '#a1a1aa' }}>Total: 25.2 GB / 50 GB</div>
      </header>

      <section style={{ padding: '1.2rem 1.05rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {downloadedItems.map((item) => (
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
                style={{ width: '100px', height: '140px', borderRadius: '8px', objectFit: 'cover' }}
              />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ margin: 0, color: 'white', fontSize: '1.1rem', fontWeight: 600 }}>{item.title}</h3>
                  <p style={{ margin: '0.4rem 0 0 0', color: '#a1a1aa', fontSize: '0.9rem' }}>{item.episodes}</p>
                </div>
                <p style={{ margin: 0, color: '#7b7b87', fontSize: '0.8rem' }}>📦 {item.size}</p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
                <button type="button" style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }} aria-label="Download">
                  <Download size={18} />
                </button>
                <button type="button" style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#ff4444',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }} aria-label="Delete">
                  <Trash2 size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
