import { Calendar, MapPin, Users } from 'lucide-react';

export default function EventsPage() {
  const events = [
    { id: 1, title: 'Demon Slayer Movie Premiere', date: 'Mar 15, 2024', location: 'Online Watch Party', attendees: 1234, image: 'https://images.unsplash.com/photo-1508042049619-aba7e08e0fbb?auto=format&fit=crop&w=500&q=80' },
    { id: 2, title: 'Anime Fan Fest 2024', date: 'Apr 22, 2024', location: 'Convention Center', attendees: 5678, image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=500&q=80' },
    { id: 3, title: 'Jujutsu Kaisen S3 Discussion', date: 'May 1, 2024', location: 'Discord Server', attendees: 892, image: 'https://images.unsplash.com/photo-1503315668682-6e6f5a31f9b8?auto=format&fit=crop&w=500&q=80' },
    { id: 4, title: 'Summer Anime Marathon', date: 'Jun 10, 2024', location: 'Streaming Platform', attendees: 3456, image: 'https://images.unsplash.com/photo-1489599849228-da7355aeace5?auto=format&fit=crop&w=500&q=80' },
  ];

  return (
    <main className="main-content" aria-label="Events">
      <header className="main-top-nav">
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700 }}>📅 Anime Events</h1>
      </header>

      <section style={{ padding: '1.2rem 1.05rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.2rem' }}>
          {events.map((event) => (
            <article key={event.id} style={{
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              <img
                src={event.image}
                alt={event.title}
                style={{ width: '100%', height: '160px', objectFit: 'cover' }}
              />
              <div style={{ padding: '1rem' }}>
                <h3 style={{ margin: 0, color: 'white', fontSize: '1.05rem', fontWeight: 600 }}>{event.title}</h3>
                
                <div style={{ marginTop: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#a1a1aa' }}>
                    <Calendar size={16} /> {event.date}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#a1a1aa' }}>
                    <MapPin size={16} /> {event.location}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#a1a1aa' }}>
                    <Users size={16} /> {event.attendees.toLocaleString()} attending
                  </div>
                </div>

                <button type="button" style={{
                  marginTop: '1rem',
                  width: '100%',
                  background: 'var(--accent)',
                  border: 'none',
                  color: 'white',
                  padding: '0.6rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 600
                }}>Attend Event</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
