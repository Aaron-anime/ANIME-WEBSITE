import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import RightPanel from './components/RightPanel';
import './App.css';

export type PageType = 'home' | 'trending' | 'new-releases' | 'movies' | 'series' | 'watchlist' | 'recent' | 'downloads' | 'community' | 'events' | 'settings' | 'profile' | 'notifications';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [contentType, setContentType] = useState<'Movies' | 'Series'>('Series');
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  return (
    <div className="dashboard-layout">
      <Sidebar contentType={contentType} onContentTypeChange={setContentType} currentPage={currentPage} onPageChange={setCurrentPage} />
      <MainContent searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} contentType={contentType} onContentTypeChange={setContentType} currentPage={currentPage} />
      <RightPanel searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} />
    </div>
  );
}
