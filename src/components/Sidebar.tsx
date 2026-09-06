import { useState } from 'react';
import type { ComponentType } from 'react';
import type { PageType } from '../App';
import {
  CalendarDays,
  Clapperboard,
  Download,
  Grid3X3,
  Home,
  LogIn,
  Settings,
  Tv,
  Users,
  Film,
  History,
  Flame,
  Sparkles,
  BookmarkPlus,
  Bell,
  User,
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
      { label: 'Profile', icon: User, page: 'profile' },
      { label: 'Settings', icon: Settings, page: 'settings' },
      { label: 'Sign in', icon: LogIn, page: 'profile' },
    ],
  },
];

interface SidebarProps {
  contentType: 'Movies' | 'Series';
  onContentTypeChange: (type: 'Movies' | 'Series') => void;
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

export default function Sidebar({ contentType, onContentTypeChange, currentPage, onPageChange }: SidebarProps) {
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

      <div className="sidebar-footer" aria-hidden="true">
        <Grid3X3 size={14} strokeWidth={2.2} />
        <span>anime vault</span>
      </div>
    </aside>
  );
}
