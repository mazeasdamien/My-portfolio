import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { FilterType } from './types';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { Loader2 } from 'lucide-react';

// Lazy load project pages
const HCICoursePage = lazy(() => import('./pages/ProjectDetailPages').then(module => ({ default: module.HCICoursePage })));
const RemoteMaintenancePage = lazy(() => import('./pages/ProjectDetailPages').then(module => ({ default: module.RemoteMaintenancePage })));
const TelexistenceInterfacePage = lazy(() => import('./pages/ProjectDetailPages').then(module => ({ default: module.TelexistenceInterfacePage })));
const RemoteCollabPage = lazy(() => import('./pages/ProjectDetailPages').then(module => ({ default: module.RemoteCollabPage })));
const VRPrototypingPage = lazy(() => import('./pages/ProjectDetailPages').then(module => ({ default: module.VRPrototypingPage })));
const IndustrialRoboticsPage = lazy(() => import('./pages/ProjectDetailPages').then(module => ({ default: module.IndustrialRoboticsPage })));
const MasterProjectsPage = lazy(() => import('./pages/ProjectDetailPages').then(module => ({ default: module.MasterProjectsPage })));
const ArduinoPage = lazy(() => import('./pages/ProjectDetailPages').then(module => ({ default: module.ArduinoPage })));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const LoadingFallback = () => (
  <div className="min-h-screen flex flex-col items-center justify-center">
    <Loader2 className="animate-spin text-neutral-300 mb-4" size={48} strokeWidth={1} />
  </div>
);

function App() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [isLoading, setIsLoading] = useState(false);

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
          {/* Global Modern Halo Effect */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
            <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-[rgba(98,183,77,0.15)] via-[rgba(9,172,239,0.15)] to-[rgba(154,58,137,0.15)] blur-[120px] opacity-70 dark:opacity-50" />
          </div>

          <div className="relative z-10 flex flex-col min-h-screen">
            <Header activeFilter={filter} onFilterChange={handleFilterChange} />

            <div className="flex-grow">
              <Suspense fallback={<LoadingFallback />}>
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
              </Suspense>
            </div>

            <Footer />
          </div>
        </div>
      </HashRouter>
    </DarkModeProvider>
  );
}

export default App;
