import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import RightPanel from './components/RightPanel';
import './App.css';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [contentType, setContentType] = useState<'Movies' | 'Series'>('Series');

  return (
    <div className="dashboard-layout">
      <Sidebar contentType={contentType} onContentTypeChange={setContentType} />
      <MainContent searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} contentType={contentType} onContentTypeChange={setContentType} />
      <RightPanel searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} />
    </div>
  );
}
