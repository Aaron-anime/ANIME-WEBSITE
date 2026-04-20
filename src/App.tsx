import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import RightPanel from './components/RightPanel';
import './App.css';

export default function App() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <MainContent />
      <RightPanel />
    </div>
  );
}
