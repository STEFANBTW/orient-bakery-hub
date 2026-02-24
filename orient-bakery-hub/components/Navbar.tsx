
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Live Menu', path: '/' },
    { name: 'Cake Architect', path: '/architect' },
    { name: 'Wholesale', path: '/wholesale' },
    { name: 'Our Story', path: '/story' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <span className="material-icons text-primary text-3xl">bakery_dining</span>
            <span className="text-2xl font-bold tracking-tight uppercase font-display dark:text-white">Orient Bakery</span>
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    isActive(link.path)
                      ? 'text-primary'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary'
                  } transition-colors px-3 py-2 rounded-md text-sm font-medium`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-2"></div>

              {/* Transported CTA */}
              <button className="flex items-center gap-2 text-text-coffee dark:text-white hover:text-primary font-bold text-sm px-3 py-2 transition-colors">
                <span className="material-icons text-primary">call</span>
                Call the Baker
              </button>

              <Link
                to="/wholesale"
                className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-orange-600 transition-all shadow-lg shadow-primary/30"
              >
                Order Pickup
              </Link>
            </div>
          </div>
          
          {/* Mobile Menu Trigger (Simplified) */}
          <div className="md:hidden flex items-center gap-4">
             <button className="text-primary font-bold">
                <span className="material-icons">call</span>
             </button>
             <button className="text-gray-600 dark:text-gray-300">
                <span className="material-icons">menu</span>
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
