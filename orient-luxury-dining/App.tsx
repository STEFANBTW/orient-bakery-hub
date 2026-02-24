import React, { useState, useEffect } from 'react';
import DashboardScreen from './components/DashboardScreen';
import MenuScreen from './components/MenuScreen';
import AboutScreen from './components/AboutScreen';
import SommelierScreen from './components/SommelierScreen';
import DeliveryScreen from './components/DeliveryScreen';
import ReservationsScreen from './components/ReservationsScreen';

type View = 'dashboard' | 'menu' | 'about' | 'sommelier' | 'delivery' | 'reservations';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('about');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Initialize theme based on HTML class or system pref
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('dark');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      setIsDark(true);
    }
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard': return <DashboardScreen />;
      case 'menu': return <MenuScreen />;
      case 'about': return <AboutScreen />;
      case 'sommelier': return <SommelierScreen />;
      case 'delivery': return <DeliveryScreen />;
      case 'reservations': return <ReservationsScreen />;
      default: return <MenuScreen />;
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Super Navigation for Demo Purposes */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[100] flex gap-4 items-center max-w-[95vw]">
        <div className="bg-black/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-2xl flex gap-4 overflow-x-auto no-scrollbar">
          {(['menu', 'sommelier', 'reservations', 'delivery', 'about', 'dashboard'] as View[]).map((view) => (
            <button
              key={view}
              onClick={() => setCurrentView(view)}
              className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transition-all whitespace-nowrap ${
                currentView === view 
                  ? 'bg-primary text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {view}
            </button>
          ))}
        </div>
        
        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className="bg-black/80 backdrop-blur-md p-3 rounded-full border border-white/10 shadow-2xl hover:bg-white/10 text-white transition-colors"
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          <span className="material-icons text-sm">{isDark ? 'light_mode' : 'dark_mode'}</span>
        </button>
      </div>

      {/* Main Content */}
      {renderView()}
    </div>
  );
};

export default App;