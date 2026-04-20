import { Search } from 'lucide-react';

interface SideListItem {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
}

const popularAnime: SideListItem[] = [
  {
    id: 1,
    title: 'Black Clover',
    subtitle: '4 Seasons',
    imageUrl:
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 2,
    title: 'Haikyu!!',
    subtitle: '4 Seasons',
    imageUrl:
      'https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 3,
    title: 'Blue Lock',
    subtitle: '2 Seasons',
    imageUrl:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=200&q=80',
  },
];

const watchlistAnime: SideListItem[] = [
  {
    id: 1,
    title: 'My Hero Academia',
    subtitle: 'Resume episode 6',
    imageUrl:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 2,
    title: 'Bleach',
    subtitle: 'Resume episode 120',
    imageUrl:
      'https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 3,
    title: 'Chainsaw Man',
    subtitle: 'Resume episode 9',
    imageUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&q=80',
  },
];

function SideList({ title, items }: { title: string; items: SideListItem[] }) {
  return (
    <section className="side-section" aria-label={title}>
      <h3>{title}</h3>
      <div className="side-list">
        {items.map((item) => (
          <article key={item.id} className="side-list-item">
            <img src={item.imageUrl} alt={item.title} loading="lazy" />
            <div>
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
      {title === 'Popular Anime' ? (
        <button type="button" className="see-more-button">
          See More
        </button>
      ) : null}
    </section>
  );
}

export default function RightPanel() {
  return (
    <aside className="right-panel" aria-label="Search and recommendations panel">
      <label className="search-wrap" aria-label="Search anime">
        <Search size={16} />
        <input type="search" placeholder="Type to search" />
      </label>

      <SideList title="Popular Anime" items={popularAnime} />
      <SideList title="Watchlist" items={watchlistAnime} />
    </aside>
  );
}
