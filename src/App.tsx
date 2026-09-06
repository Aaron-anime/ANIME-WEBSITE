import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import RightPanel from './components/RightPanel';
import LoginPage from './components/pages/LoginPage';
import './App.css';

export type PageType = 'home' | 'trending' | 'new-releases' | 'movies' | 'series' | 'watchlist' | 'recent' | 'downloads' | 'community' | 'events' | 'settings' | 'profile' | 'notifications';

export interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
  isPremium: boolean;
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [contentType, setContentType] = useState<'Movies' | 'Series'>('Series');
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [user, setUser] = useState<User | null>(null);
  const [notifications, setNotifications] = useState<Array<{ id: string; message: string; type: 'info' | 'success' | 'warning' }>>([]);

  const handleLogin = (username: string, email: string) => {
    const newUser: User = {
      id: `user_${Date.now()}`,
      username,
      email,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + username,
      isPremium: true
    };
    setUser(newUser);
    setCurrentPage('home');
    addNotification(`Welcome back, ${username}!`, 'success');
  };

  const handleLogout = () => {
    const username = user?.username;
    setUser(null);
    setCurrentPage('home');
    addNotification(`Goodbye ${username}!`, 'info');
  };

  const addNotification = (message: string, type: 'info' | 'success' | 'warning' = 'info') => {
    const id = `notif_${Date.now()}`;
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="dashboard-layout">
      <Sidebar contentType={contentType} onContentTypeChange={setContentType} currentPage={currentPage} onPageChange={setCurrentPage} user={user} onLogout={handleLogout} />
      <MainContent searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} contentType={contentType} onContentTypeChange={setContentType} currentPage={currentPage} />
      <RightPanel searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} notifications={notifications} />
      
      {/* Notification Toast */}
      <div style={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
        {notifications.map(notif => (
          <div key={notif.id} style={{
            background: notif.type === 'success' ? '#10b981' : notif.type === 'warning' ? '#f59e0b' : '#3b82f6',
            color: 'white',
            padding: '1rem',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            animation: 'slideIn 0.3s ease'
          }}>
            {notif.message}
          </div>
        ))}
      </div>
    </div>
  );
}
