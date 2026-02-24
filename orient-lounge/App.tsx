
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Visualizer from './pages/Visualizer';
import Concierge from './pages/Concierge';
import Lab from './pages/Lab';
import Booking from './pages/Booking';
import Menu from './pages/Menu';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Lab', path: '/lab' },
    { name: 'Menu', path: '/menu' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-xl border-b border-white/5 h-20 px-8 md:px-12 transition-all duration-300">
      <div className="max-w-7xl mx-auto h-full relative flex items-center justify-between">
        
        {/* Left: Brand */}
        <Link to="/" className="flex items-center gap-3 group relative z-10">
          <div className="relative">
            <span className="material-icons text-primary-gold text-3xl group-hover:rotate-180 transition-transform duration-700">liquor</span>
            <div className="absolute inset-0 bg-primary-gold/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif italic font-semibold text-xl leading-none text-white tracking-wide">Orient</span>
            <span className="font-display uppercase text-[10px] tracking-[0.3em] text-primary-gold">Lounge</span>
          </div>
        </Link>
        
        {/* Center: Navigation Links (Absolutely Centered) */}
        <div className="hidden lg:flex items-center gap-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-[11px] uppercase tracking-[0.25em] font-bold transition-all duration-300 group py-2 ${
                location.pathname === item.path ? 'text-primary-gold' : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.name}
              {/* Animated underline */}
              <span className={`absolute bottom-0 left-0 h-[1px] bg-primary-gold transition-all duration-500 ease-out ${
                location.pathname === item.path ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50'
              }`}></span>
            </Link>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-6 relative z-10">
          <Link 
            to="/booking"
            className="group relative px-6 py-2.5 overflow-hidden rounded-sm hidden md:block"
          >
            <div className="absolute inset-0 w-full h-full transition-all duration-300 ease-out bg-primary-gold/10 border border-primary-gold/40 group-hover:bg-primary-gold group-hover:border-transparent"></div>
            <span className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-primary-gold group-hover:text-black transition-colors">
              Reservations
            </span>
          </Link>

          {/* User Icon Link to Dashboard */}
          <Link 
            to="/dashboard" 
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 group ${
              location.pathname === '/dashboard' 
                ? 'border-primary-gold bg-primary-gold/10 text-primary-gold' 
                : 'border-white/10 text-white/70 hover:text-primary-gold hover:border-primary-gold hover:bg-white/5'
            }`}
            aria-label="Member Dashboard"
          >
            <span className="material-icons text-xl group-hover:scale-110 transition-transform">person</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

const AnimatedContent: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <div className="pt-20">
        {/* Key on wrapping div forces re-render and animation on route change */}
        <div key={location.pathname} className="page-transition">
          <Routes location={location}>
            <Route path="/" element={<Visualizer />} />
            <Route path="/dashboard" element={<Concierge />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AnimatedContent />
    </HashRouter>
  );
};

export default App;
