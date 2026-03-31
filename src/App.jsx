import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Collections from './pages/Collections';
import Technical from './pages/Technical';
import Contact from './pages/Contact';
import ScrollToTop from './components/layout/ScrollToTop';

import LoadingScreen from './components/layout/LoadingScreen';
import { AnimatePresence } from 'motion/react';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate initial asset loading / branded entrance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loader" />
          ) : null}
        </AnimatePresence>
        
        {!isLoading && (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="collections" element={<Collections />} />
              <Route path="technical" element={<Technical />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        )}
      </Router>
    </HelmetProvider>
  );
}

export default App;
