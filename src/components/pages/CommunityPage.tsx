import { MessageCircle, Heart } from 'lucide-react';

export default function CommunityPage() {
  const posts = [
    { id: 1, author: 'anime_fan24', content: 'Just finished Demon Slayer! That finale was insane 🔥', likes: 1234, comments: 89, avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=80&q=80' },
    { id: 2, author: 'manga_lover', content: 'My Hero Academia Season 7 when? Waiting for Deku vs Star and Stripe arc 😭', likes: 892, comments: 124, avatar: 'https://images.unsplash.com/photo-1535148830293-c1760b06beee?auto=format&fit=crop&w=80&q=80' },
    { id: 3, author: 'jjk_theories', content: 'Theory: Sukuna is actually...', likes: 2145, comments: 456, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80' },
    { id: 4, author: 'aot_endgame', content: 'Attack on Titan finale discussion thread! No spoilers first hour', likes: 3421, comments: 892, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80' },
  ];

  return (
    <main className="main-content" aria-label="Community">
      <header className="main-top-nav">
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700 }}>👥 Community</h1>
      </header>

      <section style={{ padding: '1.2rem 1.05rem' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <textarea
            placeholder="Share your thoughts with the community..."
            style={{
              width: '100%',
              padding: '1rem',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              color: 'white',
              fontFamily: 'inherit',
              fontSize: '0.95rem',
              resize: 'vertical',
              minHeight: '80px'
            }}
          />
          <button type="button" style={{
            marginTop: '0.5rem',
            background: 'var(--accent)',
            border: 'none',
            color: 'white',
            padding: '0.6rem 1.2rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600
          }}>Post</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {posts.map((post) => (
            <article key={post.id} style={{
              padding: '1rem',
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '0.8rem' }}>
                <img
                  src={post.avatar}
                  alt={post.author}
                  style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <h4 style={{ margin: 0, color: 'white', fontSize: '0.95rem', fontWeight: 600 }}>@{post.author}</h4>
                  <p style={{ margin: 0, color: '#a1a1aa', fontSize: '0.8rem' }}>2 hours ago</p>
                </div>
              </div>
              <p style={{ margin: '0 0 1rem 0', color: '#e4e4e7', fontSize: '0.95rem', lineHeight: 1.5 }}>{post.content}</p>
              <div style={{ display: 'flex', gap: '1.5rem', color: '#a1a1aa', fontSize: '0.85rem' }}>
                <button type="button" style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Heart size={16} /> {post.likes}
                </button>
                <button type="button" style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MessageCircle size={16} /> {post.comments}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
