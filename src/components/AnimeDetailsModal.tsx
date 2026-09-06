import { Star, MessageSquare } from 'lucide-react';
import { useState } from 'react';

interface AnimeDetailsModalProps {
  anime: {
    id: number;
    title: string;
    imageUrl: string;
    genre: string;
    rating: number;
    episodes: number;
    description: string;
  };
  onClose: () => void;
}

export default function AnimeDetailsModal({ anime, onClose }: AnimeDetailsModalProps) {
  const [userRating, setUserRating] = useState(0);
  const [userReview, setUserReview] = useState('');

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1rem'
    }} onClick={onClose}>
      <div style={{
        background: 'rgba(16,16,20,0.95)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        padding: '2rem',
        maxWidth: '600px',
        width: '100%',
        maxHeight: '80vh',
        overflow: 'auto'
      }} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
          <img
            src={anime.imageUrl}
            alt={anime.title}
            style={{ width: '120px', height: '160px', borderRadius: '8px', objectFit: 'cover' }}
          />
          <div style={{ flex: 1 }}>
            <h2 style={{ margin: '0 0 0.5rem 0', color: 'white', fontSize: '1.5rem' }}>{anime.title}</h2>
            <p style={{ margin: '0 0 1rem 0', color: '#a1a1aa' }}>{anime.genre}</p>
            
            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
              <div style={{ display: 'flex', gap: '0.2rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    style={{
                      color: i < Math.floor(anime.rating / 2) ? '#fbbf24' : '#7b7b87',
                      fill: i < Math.floor(anime.rating / 2) ? '#fbbf24' : 'none'
                    }}
                  />
                ))}
              </div>
              <span style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>{anime.rating.toFixed(1)}/10</span>
            </div>

            <p style={{ margin: 0, color: '#7b7b87', fontSize: '0.85rem' }}>
              {anime.episodes} Episodes
            </p>
          </div>
        </div>

        {/* Description */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ margin: '0 0 0.8rem 0', color: 'white', fontSize: '1.05rem' }}>About</h3>
          <p style={{ margin: 0, color: '#c7c7d1', lineHeight: 1.6 }}>{anime.description}</p>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '2rem' }}>
          <button type="button" style={{
            flex: 1,
            background: 'var(--accent)',
            border: 'none',
            color: 'white',
            padding: '0.8rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600
          }}>
            Watch Now
          </button>
          <button type="button" style={{
            flex: 1,
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'white',
            padding: '0.8rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600
          }}>
            Add to Watchlist
          </button>
        </div>

        {/* Rating Section */}
        <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <h3 style={{ margin: '0 0 1rem 0', color: 'white' }}>Rate This Anime</h3>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', justifyContent: 'center' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setUserRating(star * 2)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '2rem',
                  padding: 0
                }}
              >
                <Star
                  size={28}
                  style={{
                    color: userRating >= star * 2 ? '#fbbf24' : '#7b7b87',
                    fill: userRating >= star * 2 ? '#fbbf24' : 'none'
                  }}
                />
              </button>
            ))}
          </div>
          {userRating > 0 && (
            <p style={{ textAlign: 'center', color: '#a1a1aa', margin: '0.5rem 0 0 0' }}>
              You rated: {userRating}/10
            </p>
          )}
        </div>

        {/* Review Section */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ margin: '0 0 1rem 0', color: 'white' }}>Write a Review</h3>
          <textarea
            placeholder="Share your thoughts about this anime..."
            value={userReview}
            onChange={(e) => setUserReview(e.target.value)}
            style={{
              width: '100%',
              padding: '0.8rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: 'white',
              fontFamily: 'inherit',
              fontSize: '0.9rem',
              minHeight: '80px',
              resize: 'vertical'
            }}
          />
          <button type="button" style={{
            marginTop: '0.8rem',
            background: 'var(--accent)',
            border: 'none',
            color: 'white',
            padding: '0.6rem 1.2rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.9rem'
          }}>
            <MessageSquare size={14} style={{ marginRight: '0.4rem' }} />
            Post Review
          </button>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          style={{
            width: '100%',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'white',
            padding: '0.8rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
