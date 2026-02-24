import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Dark mode state
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const isActive = (path: string) => {
    if (path.includes('#')) {
      return location.pathname + location.hash === path;
    }
    if (path === '/process') {
      return location.pathname === path && location.hash === '';
    }
    return location.pathname === path;
  };

  const scrollToCatalog = () => {
    if (location.pathname !== '/') {
      navigate('/#catalog');
    } else {
      document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'The Process', path: '/process' },
    { name: 'Batch Verify', path: '/process#verify' },
    { name: 'Logistics', path: '/logistics' },
    { name: 'Impact', path: '/impact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-primary/20 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="material-icons text-secondary dark:text-primary text-3xl group-hover:text-primary transition-colors animate-float">water_drop</span>
            <span className="font-bold text-xl tracking-wider text-slate-900 dark:text-white uppercase">
              <span className="text-orange-500">Orient</span> Water
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={scrollToCatalog}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-secondary dark:hover:text-primary transition-colors"
            >
              Catalog
            </button>

            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path) 
                    ? 'text-secondary dark:text-primary font-bold' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-secondary dark:hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              <span className="material-icons text-xl">{isDark ? 'light_mode' : 'dark_mode'}</span>
            </button>

            <button className="bg-primary hover:bg-primary-dark text-secondary font-semibold px-6 py-2 rounded-full transition-all duration-300 shadow-ice hover:shadow-lg transform hover:-translate-y-1">
              Contact Sales
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="material-icons text-xl">{isDark ? 'light_mode' : 'dark_mode'}</span>
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300">
              <span className="material-icons">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 transition-colors">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <button
                onClick={scrollToCatalog}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-secondary hover:bg-primary/10"
              >
                Catalog
              </button>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-secondary hover:bg-primary/10"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;