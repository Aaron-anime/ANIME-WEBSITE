import { useState } from 'react';
import type { ComponentType } from 'react';
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
} from 'lucide-react';

interface NavItem {
  label: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
  active?: boolean;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    title: 'Menu',
    items: [
      { label: 'Home', icon: Home, active: true },
      { label: 'Community', icon: Users },
      { label: 'Events', icon: CalendarDays },
    ],
  },
  {
    title: 'Categories',
    items: [
      { label: 'Movies', icon: Film },
      { label: 'Series', icon: Tv },
    ],
  },
  {
    title: 'Library',
    items: [
      { label: 'Recent', icon: History },
      { label: 'Downloaded', icon: Download },
    ],
  },
  {
    title: 'General',
    items: [
      { label: 'Settings', icon: Settings },
      { label: 'Sign in', icon: LogIn },
    ],
  },
];

interface SidebarProps {
  contentType: 'Movies' | 'Series';
  onContentTypeChange: (type: 'Movies' | 'Series') => void;
}

export default function Sidebar({ contentType, onContentTypeChange }: SidebarProps) {
  const [activeItem, setActiveItem] = useState('Home');

  const handleNavClick = (label: string) => {
    setActiveItem(label);
    if (label === 'Movies' || label === 'Series') {
      onContentTypeChange(label);
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
              const isActive = isContentTypeFilter ? contentType === item.label : activeItem === item.label;
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    className={isActive ? 'is-active' : ''}
                    aria-pressed={isActive}
                    onClick={() => handleNavClick(item.label)}
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
