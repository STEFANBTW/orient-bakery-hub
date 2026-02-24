import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Process from './pages/Process';
import Impact from './pages/Impact';
import Logistics from './pages/Logistics';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  React.useEffect(() => {
    // If there is no hash, scroll to top (e.g. clicking "The Process")
    // If there is a hash, the page component handles the scrolling (e.g. clicking "Batch Verify")
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/process" element={<Process />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/logistics" element={<Logistics />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Chat Bot Widget */}
        <div className="fixed bottom-6 right-6 z-50 group">
          <div className="absolute bottom-full right-0 mb-4 w-64 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none transform translate-y-2 group-hover:translate-y-0 border border-slate-100 dark:border-slate-700">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center animate-bounce">
                <span className="material-icons text-primary">smart_toy</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white mb-1">Dr. H2O says:</p>
                <p className="text-xs text-slate-600 dark:text-slate-300">"Did you know adequate hydration improves focus by 20%? Start a subscription today!"</p>
              </div>
            </div>
          </div>
          <button className="w-14 h-14 bg-primary text-secondary rounded-full shadow-lg flex items-center justify-center hover:bg-primary-dark transition-colors hover:scale-110 transform duration-200">
            <span className="material-icons text-2xl">support_agent</span>
          </button>
        </div>
      </div>
    </Router>
  );
};

export default App;