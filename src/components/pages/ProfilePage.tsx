import { Edit2, LogOut } from 'lucide-react';

export default function ProfilePage() {
  const userStats = [
    { label: 'Anime Watched', value: '127' },
    { label: 'Episodes Watched', value: '2,456' },
    { label: 'Hours Watched', value: '1,234h' },
    { label: 'Watchlist Items', value: '48' },
  ];

  return (
    <main className="main-content" aria-label="Profile">
      <header className="main-top-nav">
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700 }}>👤 My Profile</h1>
      </header>

      <section style={{ padding: '1.2rem 1.05rem', maxWidth: '800px' }}>
        {/* Profile Header */}
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          borderRadius: '12px',
          border: '1px solid rgba(255,255,255,0.08)',
          padding: '2rem',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <img
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=200&q=80"
            alt="Profile"
            style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem' }}
          />
          <h2 style={{ margin: '0 0 0.5rem 0', color: 'white', fontSize: '1.3rem' }}>anime_fan24</h2>
          <p style={{ margin: '0 0 1.5rem 0', color: '#a1a1aa' }}>Premium Member • Joined 6 months ago</p>
          <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center' }}>
            <button type="button" style={{
              background: 'var(--accent)',
              border: 'none',
              color: 'white',
              padding: '0.6rem 1.2rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Edit2 size={16} /> Edit Profile
            </button>
            <button type="button" style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              padding: '0.6rem 1.2rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <LogOut size={16} /> Sign Out
            </button>
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {userStats.map((stat) => (
            <div key={stat.label} style={{
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '1.2rem',
              textAlign: 'center'
            }}>
              <p style={{ margin: 0, color: '#a1a1aa', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{stat.label}</p>
              <p style={{ margin: 0, color: 'var(--accent)', fontSize: '1.5rem', fontWeight: 700 }}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Favorite Genres */}
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          borderRadius: '12px',
          border: '1px solid rgba(255,255,255,0.08)',
          padding: '1.2rem',
          marginBottom: '1.5rem'
        }}>
          <h3 style={{ margin: '0 0 1rem 0', color: 'white', fontSize: '1.05rem', fontWeight: 600 }}>Favorite Genres</h3>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            {['Action', 'Dark Fantasy', 'Supernatural', 'Shonen', 'Sci-Fi'].map((genre) => (
              <span key={genre} style={{
                background: 'rgba(239, 35, 60, 0.2)',
                color: 'var(--accent)',
                padding: '0.4rem 0.8rem',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: 500
              }}>
                {genre}
              </span>
            ))}
          </div>
        </div>

        {/* Subscription Info */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(239, 35, 60, 0.2), rgba(124, 92, 255, 0.2))',
          borderRadius: '12px',
          border: '1px solid rgba(239, 35, 60, 0.3)',
          padding: '1.2rem'
        }}>
          <h3 style={{ margin: '0 0 0.8rem 0', color: 'white', fontSize: '1.05rem', fontWeight: 600 }}>Premium Subscription</h3>
          <p style={{ margin: '0 0 0.8rem 0', color: '#a1a1aa' }}>Your premium subscription renews on March 15, 2024</p>
          <div style={{ display: 'flex', gap: '0.8rem' }}>
            <button type="button" style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              padding: '0.6rem 1.2rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 600
            }}>Manage Subscription</button>
          </div>
        </div>
      </section>
    </main>
  );
}
