import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-black text-[#E1E0CC] selection:bg-[#06b6d4] selection:text-black antialiased">
        {/* Global Navigation Pill */}
        <Navbar />
        
        {/* App Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos/:slug" element={<ProjectDetail />} />
          {/* Fallback to Home if route not found */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
