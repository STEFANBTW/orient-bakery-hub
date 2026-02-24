import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Wholesale from './pages/Wholesale';
import Deals from './pages/Deals';
import Dashboard from './pages/Dashboard';
import SmartPaste from './pages/SmartPaste';
import Cart from './pages/Cart';
import Produce from './pages/Produce';
import Aisles from './pages/Aisles';
import PreviouslyBought from './pages/PreviouslyBought';
import BOGOF from './pages/BOGOF';
import Under5 from './pages/Under5';
import Bundles from './pages/Bundles';
import Bakery from './pages/Bakery';
import Receipts from './pages/Receipts';
import Favorites from './pages/Favorites';
import Loyalty from './pages/Loyalty';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Register from './pages/Register';

export type Page = 'Home' | 'Wholesale' | 'Deals' | 'Dashboard' | 'Cart' | 'Produce' | 'Aisles' | 'PreviouslyBought' | 'BOGOF' | 'Under5' | 'Bundles' | 'Bakery' | 'Receipts' | 'Favorites' | 'Loyalty' | 'Settings' | 'Login' | 'Register';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('Home');
  const [isSmartPasteOpen, setIsSmartPasteOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const pages: { id: Page; label: string; icon: string }[] = [
    { id: 'Home', label: 'Storefront', icon: 'storefront' },
    { id: 'Produce', label: 'Produce', icon: 'eco' },
    { id: 'Deals', label: 'Deals', icon: 'local_offer' },
    { id: 'Wholesale', label: 'Wholesale', icon: 'inventory_2' },
    { id: 'Dashboard', label: 'Dashboard', icon: 'dashboard' },
  ];

  const renderContent = () => {
    // Pages that take over the full screen (no nav)
    if (activePage === 'Login') return <Login onNavigate={setActivePage} />;
    if (activePage === 'Register') return <Register onNavigate={setActivePage} />;

    return (
      <div className="min-h-screen flex flex-col font-sans relative bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
        {/* Global Navigation Switcher */}
        <nav className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-[100] shadow-md">
          <div className="max-w-[1600px] mx-auto px-4">
            <div className="flex items-center justify-between h-14 overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-1 mr-6 shrink-0 cursor-pointer" onClick={() => setActivePage('Home')}>
                 <motion.span 
                   whileHover={{ rotate: 180 }}
                   transition={{ duration: 0.6 }}
                   className="material-icons text-orange-500"
                 >
                   api
                 </motion.span>
                 <span className="font-bold tracking-tight">Orient<span className="font-normal text-slate-400">Suite</span></span>
              </div>
              <div className="flex items-center gap-1 flex-1">
                {pages.map((page) => (
                  <button
                    key={page.id}
                    onClick={() => setActivePage(page.id)}
                    className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap z-10 ${
                      activePage === page.id
                        ? 'text-slate-900'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {activePage === page.id && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white rounded-full shadow-sm -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="material-icons text-sm">{page.icon}</span>
                    {page.label}
                  </button>
                ))}
                <div className="w-px h-6 bg-slate-700 mx-2"></div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSmartPasteOpen(true)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <span className="material-icons text-sm">content_paste</span>
                  Smart Paste
                </motion.button>
              </div>
              
              <div className="flex items-center ml-4 gap-4">
                 <button 
                   onClick={() => setActivePage('Cart')} 
                   className={`text-xs font-bold flex items-center gap-1 transition-colors ${activePage === 'Cart' ? 'text-[#ff6a00]' : 'text-slate-300 hover:text-white'}`}
                 >
                    <span className="material-icons text-sm">shopping_cart</span> Smart Cart
                 </button>
                 <div className="w-px h-4 bg-slate-700"></div>
                 <button onClick={() => setActivePage('Login')} className="text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1">
                    <span className="material-icons text-sm">login</span> Sign In
                 </button>
                 
                 {/* Dark Mode Toggle */}
                 <div 
                   onClick={() => setIsDarkMode(!isDarkMode)}
                   className="w-10 h-5 bg-slate-700 rounded-full relative cursor-pointer flex items-center transition-colors hover:bg-slate-600"
                 >
                    <motion.div 
                      layout 
                      className="w-3 h-3 bg-white rounded-full absolute"
                      initial={false}
                      animate={{ left: isDarkMode ? '22px' : '4px', backgroundColor: isDarkMode ? '#fbbf24' : '#ffffff' }}
                    />
                    <span className="material-icons text-[10px] absolute left-1 text-slate-400 opacity-0 dark:opacity-100">dark_mode</span>
                 </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 relative bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(5px)" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="min-h-full"
            >
              {activePage === 'Home' && <Home onNavigate={setActivePage} onOpenSmartPaste={() => setIsSmartPasteOpen(true)} />}
              {activePage === 'Wholesale' && <Wholesale />}
              {activePage === 'Deals' && <Deals onNavigate={setActivePage} />}
              {activePage === 'Dashboard' && <Dashboard onNavigate={setActivePage} />}
              {activePage === 'Cart' && <Cart />}
              {activePage === 'Produce' && <Produce onNavigate={setActivePage} />}
              
              {/* Sub Pages */}
              {activePage === 'Aisles' && <Aisles onNavigate={setActivePage} />}
              {activePage === 'PreviouslyBought' && <PreviouslyBought onNavigate={setActivePage} />}
              {activePage === 'BOGOF' && <BOGOF onNavigate={setActivePage} />}
              {activePage === 'Under5' && <Under5 onNavigate={setActivePage} />}
              {activePage === 'Bundles' && <Bundles onNavigate={setActivePage} />}
              {activePage === 'Bakery' && <Bakery onNavigate={setActivePage} />}
              {activePage === 'Receipts' && <Receipts onNavigate={setActivePage} />}
              {activePage === 'Favorites' && <Favorites onNavigate={setActivePage} />}
              {activePage === 'Loyalty' && <Loyalty onNavigate={setActivePage} />}
              {activePage === 'Settings' && <Settings onNavigate={setActivePage} />}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Smart Paste Modal */}
        <AnimatePresence>
          {isSmartPasteOpen && <SmartPaste onClose={() => setIsSmartPasteOpen(false)} />}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <AuthProvider>
      <CartProvider>
        {renderContent()}
      </CartProvider>
    </AuthProvider>
  );
};

export default App;