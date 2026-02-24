import React, { useState } from 'react';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { ArenaHud } from './components/ArenaHud';
import { Tournament } from './components/Tournament';
import { Hardware } from './components/Hardware';
import { VRFrontier } from './components/VRFrontier';
import { ConsoleSelection } from './components/ConsoleSelection';

export enum Page {
  HOME = 'HOME',
  PROFILE = 'PROFILE',
  ARENA = 'ARENA',
  TOURNAMENT = 'TOURNAMENT',
  HARDWARE = 'HARDWARE',
  VR = 'VR',
  CONSOLE_SELECTION = 'CONSOLE_SELECTION'
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME: return <Home onNavigate={navigate} />;
      case Page.PROFILE: return <Profile onNavigate={navigate} />;
      case Page.ARENA: return <ArenaHud onNavigate={navigate} />;
      case Page.TOURNAMENT: return <Tournament onNavigate={navigate} />;
      case Page.HARDWARE: return <Hardware onNavigate={navigate} />;
      case Page.VR: return <VRFrontier onNavigate={navigate} />;
      case Page.CONSOLE_SELECTION: return <ConsoleSelection onNavigate={navigate} />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="relative min-h-screen font-display">
      {/* Navigation Switcher - Mobile Only */}
      <div className={`fixed top-4 right-4 z-[100] transition-all duration-300 md:hidden ${menuOpen ? 'w-64' : 'w-12'}`}>
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-12 h-12 bg-black/80 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        >
          <span className="material-icons">{menuOpen ? 'close' : 'menu'}</span>
        </button>
        
        {menuOpen && (
          <div className="absolute top-14 right-0 bg-black/90 border border-white/10 rounded-xl p-2 w-64 shadow-2xl backdrop-blur-xl flex flex-col gap-1">
            {Object.values(Page).filter(p => p !== Page.CONSOLE_SELECTION).map((page) => (
              <button
                key={page}
                onClick={() => navigate(page)}
                className={`text-left px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
                  currentPage === page 
                    ? 'bg-white text-black shadow-[0_0_10px_rgba(255,255,255,0.5)]' 
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {page.replace('_', ' ')}
              </button>
            ))}
          </div>
        )}
      </div>

      {renderPage()}
    </div>
  );
};

export default App;