import { Toggle } from 'lucide-react';

export default function SettingsPage() {
  return (
    <main className="main-content" aria-label="Settings">
      <header className="main-top-nav">
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700 }}>⚙️ Settings</h1>
      </header>

      <section style={{ padding: '1.2rem 1.05rem', maxWidth: '600px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Account Settings */}
          <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.2rem' }}>
            <h3 style={{ margin: '0 0 1rem 0', color: 'white', fontSize: '1.1rem', fontWeight: 600 }}>Account</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div>
                <label style={{ display: 'block', color: '#a1a1aa', fontSize: '0.9rem', marginBottom: '0.4rem' }}>Email</label>
                <input type="email" placeholder="your@email.com" style={{ width: '100%', padding: '0.6rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: 'white', fontFamily: 'inherit' }} />
              </div>
              <div>
                <label style={{ display: 'block', color: '#a1a1aa', fontSize: '0.9rem', marginBottom: '0.4rem' }}>Username</label>
                <input type="text" placeholder="your_username" style={{ width: '100%', padding: '0.6rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: 'white', fontFamily: 'inherit' }} />
              </div>
            </div>
          </div>

          {/* Privacy & Safety */}
          <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.2rem' }}>
            <h3 style={{ margin: '0 0 1rem 0', color: 'white', fontSize: '1.1rem', fontWeight: 600 }}>Privacy & Safety</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                <span style={{ color: '#e4e4e7' }}>Private Profile</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                <span style={{ color: '#e4e4e7' }}>Hide Watch History</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer' }}>
                <input type="checkbox" style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                <span style={{ color: '#e4e4e7' }}>Allow Community Posts</span>
              </label>
            </div>
          </div>

          {/* Notifications */}
          <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.2rem' }}>
            <h3 style={{ margin: '0 0 1rem 0', color: 'white', fontSize: '1.1rem', fontWeight: 600 }}>Notifications</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                <span style={{ color: '#e4e4e7' }}>Episode Releases</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                <span style={{ color: '#e4e4e7' }}>New Recommendations</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer' }}>
                <input type="checkbox" style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                <span style={{ color: '#e4e4e7' }}>Community Messages</span>
              </label>
            </div>
          </div>

          {/* Playback */}
          <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', padding: '1.2rem' }}>
            <h3 style={{ margin: '0 0 1rem 0', color: 'white', fontSize: '1.1rem', fontWeight: 600 }}>Playback</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div>
                <label style={{ display: 'block', color: '#a1a1aa', fontSize: '0.9rem', marginBottom: '0.4rem' }}>Default Video Quality</label>
                <select style={{ width: '100%', padding: '0.6rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: 'white', fontFamily: 'inherit' }}>
                  <option>Auto</option>
                  <option>1080p</option>
                  <option>720p</option>
                  <option>480p</option>
                </select>
              </div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                <span style={{ color: '#e4e4e7' }}>Auto-play Next Episode</span>
              </label>
            </div>
          </div>

          <button type="button" style={{
            background: 'var(--accent)',
            border: 'none',
            color: 'white',
            padding: '0.8rem 1.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.95rem'
          }}>Save Settings</button>
        </div>
      </section>
    </main>
  );
}
