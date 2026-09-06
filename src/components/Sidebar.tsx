import { useState } from 'react';
import type { ComponentType } from 'react';
import type { PageType, User } from '../App';
import {
  CalendarDays,
  Clapperboard,
  Download,
  Grid3X3,
  Home,
  LogOut,
  Settings,
  Tv,
  Users,
  Film,
  History,
  Flame,
  Sparkles,
  BookmarkPlus,
  Bell,
  User as UserIcon,
} from 'lucide-react';

interface NavItem {
  label: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
  page?: PageType;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    title: 'Discovery',
    items: [
      { label: 'Home', icon: Home, page: 'home' },
      { label: 'Trending', icon: Flame, page: 'trending' },
      { label: 'New Releases', icon: Sparkles, page: 'new-releases' },
    ],
  },
  {
    title: 'Categories',
    items: [
      { label: 'Movies', icon: Film, page: 'movies' },
      { label: 'Series', icon: Tv, page: 'series' },
    ],
  },
  {
    title: 'My Library',
    items: [
      { label: 'Watchlist', icon: BookmarkPlus, page: 'watchlist' },
      { label: 'Recent', icon: History, page: 'recent' },
      { label: 'Downloaded', icon: Download, page: 'downloads' },
    ],
  },
  {
    title: 'Community',
    items: [
      { label: 'Community', icon: Users, page: 'community' },
      { label: 'Events', icon: CalendarDays, page: 'events' },
    ],
  },
  {
    title: 'Account',
    items: [
      { label: 'Profile', icon: UserIcon, page: 'profile' },
      { label: 'Settings', icon: Settings, page: 'settings' },
    ],
  },
];

interface SidebarProps {
  contentType: 'Movies' | 'Series';
  onContentTypeChange: (type: 'Movies' | 'Series') => void;
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
  user: User | null;
  onLogout: () => void;
}

export default function Sidebar({ contentType, onContentTypeChange, currentPage, onPageChange, user, onLogout }: SidebarProps) {
  const handleNavClick = (label: string, page?: PageType) => {
    if (label === 'Movies' || label === 'Series') {
      onContentTypeChange(label);
      onPageChange(label === 'Movies' ? 'movies' : 'series');
    } else if (page) {
      onPageChange(page);
    }
  };

  return (
    <aside className="left-sidebar" aria-label="Main navigation sidebar">
      <div className="sidebar-brand">
        <div className="brand-mark" aria-hidden="true">
          <Clapperboard size={16} strokeWidth={2.4} />
        </div>
        <span>ANIME VAULT</span>
      </div>

      {navGroups.map((group) => (
        <section key={group.title} className="sidebar-group" aria-label={group.title}>
          <h3>{group.title}</h3>
          <ul>
            {group.items.map((item) => {
              const Icon = item.icon;
              const isContentTypeFilter = item.label === 'Movies' || item.label === 'Series';
              const isActive = isContentTypeFilter 
                ? contentType === item.label 
                : currentPage === item.page;
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    className={isActive ? 'is-active' : ''}
                    aria-pressed={isActive}
                    onClick={() => handleNavClick(item.label, item.page)}
                  >
                    <Icon size={16} strokeWidth={2.2} />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      {/* User Info Section */}
      {user && (
        <section style={{
          marginTop: 'auto',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            padding: '0.8rem'
          }}>
            <img
              src={user.avatar}
              alt={user.username}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ margin: 0, color: '#e4e4e7', fontSize: '0.9rem', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {user.username}
              </p>
              <p style={{ margin: 0, color: '#7b7b87', fontSize: '0.75rem' }}>
                {user.isPremium ? '⭐ Premium' : 'Free'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              width: '100%',
              padding: '0.6rem 0.8rem',
              background: 'rgba(239, 35, 60, 0.1)',
              border: '1px solid rgba(239, 35, 60, 0.2)',
              borderRadius: '6px',
              color: '#ef233c',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: 600,
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(239, 35, 60, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(239, 35, 60, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(239, 35, 60, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(239, 35, 60, 0.2)';
            }}
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </section>
      )}

      <div className="sidebar-footer" aria-hidden="true">
        <Grid3X3 size={14} strokeWidth={2.2} />
        <span>anime vault</span>
      </div>
    </aside>
  );
}
