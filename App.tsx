import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import {
  HCICoursePage,
  RemoteMaintenancePage,
  TelexistenceInterfacePage,
  RemoteCollabPage,
  VRPrototypingPage,
  IndustrialRoboticsPage,
  MasterProjectsPage,
  ArduinoPage
} from './pages/ProjectDetailPages';
import { FilterType } from './types';
import { DarkModeProvider } from './contexts/DarkModeContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [isLoading, setIsLoading] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track mouse position globally
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleFilterChange = (newFilter: FilterType) => {
    if (filter === newFilter) return;

    setFilter(newFilter);
    setIsLoading(true);
    window.scrollTo(0, 0);

    // Simulate network/fetch delay
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  };

  return (
    <DarkModeProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen font-sans selection:bg-neutral-900 dark:selection:bg-neutral-100 selection:text-white dark:selection:text-neutral-900 relative bg-neutral-100 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
          {/* Global Interactive Gradient Blob */}
          <div
            className="fixed inset-0 overflow-hidden pointer-events-none"
            style={{ zIndex: 0 }}
          >
            <div
              className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-3xl transition-all duration-1000 ease-out"
              style={{
                background: 'radial-gradient(circle, rgba(98, 183, 77, 0.3) 0%, rgba(9, 172, 239, 0.25) 40%, rgba(154, 58, 137, 0.15) 70%, transparent 100%)',
                left: `${mousePos.x - 400}px`,
                top: `${mousePos.y - 400}px`,
              }}
            />
          </div>

          <div className="relative z-10">
            <Header activeFilter={filter} onFilterChange={handleFilterChange} />

            <Routes>
              <Route path="/" element={<Home filter={filter} isLoading={isLoading} />} />

              {/* Project Routes */}
              <Route path="/project/hci-course" element={<HCICoursePage />} />
              <Route path="/project/remote-maintenance" element={<RemoteMaintenancePage />} />
              <Route path="/project/telexistence-interface" element={<TelexistenceInterfacePage />} />
              <Route path="/project/remote-collab" element={<RemoteCollabPage />} />
              <Route path="/project/vr-prototyping" element={<VRPrototypingPage />} />
              <Route path="/project/industrial-robotics" element={<IndustrialRoboticsPage />} />
              <Route path="/project/master-projects" element={<MasterProjectsPage />} />
              <Route path="/project/arduino-unity" element={<ArduinoPage />} />
            </Routes>

            <Footer />
          </div>
        </div>
      </HashRouter>
    </DarkModeProvider>
  );
}

export default App;