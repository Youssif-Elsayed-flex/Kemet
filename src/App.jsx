import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AIAssistant from './components/features/AIAssistant';

// Pages
import Home from './pages/Home';
import History from './pages/History';
import FamousPlaces from './pages/FamousPlaces';
import Places from './pages/Places';
import PlaceDetails from './pages/PlaceDetails';
import Sports from './pages/Sports';
import HiddenPlaces from './pages/HiddenPlaces';
import AntiquitiesAbroad from './pages/AntiquitiesAbroad';
import Hotels from './pages/Hotels';
import AboutUs from './pages/AboutUs';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  return (
    <div className="flex flex-col min-h-screen bg-papyrus dark:bg-gray-900 transition-colors duration-300">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/places" element={<Places />} />
            <Route path="/places/:type/:id" element={<PlaceDetails />} />
            <Route path="/famous-places" element={<FamousPlaces />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/hidden" element={<HiddenPlaces />} />
            <Route path="/antiquities" element={<AntiquitiesAbroad />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <AppContent />
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
