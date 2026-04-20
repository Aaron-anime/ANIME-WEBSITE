import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import RightPanel from './components/RightPanel';
import './App.css';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <MainContent searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} />
      <RightPanel searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} />
    </div>
  );
}
