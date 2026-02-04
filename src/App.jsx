import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PremiumLoader from './components/PremiumLoader';

import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Programs from './pages/Programs';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Apply from './pages/Apply';

import './index.css';

import ScrollToTop from './components/ScrollToTop';



/* ---------- Route Loader Wrapper ---------- */
function RouteLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 900); // short & elegant

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <PremiumLoader />}
      {children}
    </>
  );
}

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

/* ---------- App ---------- */
function App() {
  return (
    <Router>

      <ScrollToTop />

      <RouteLoader>
        <div className="App">
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/apply" element={<Apply />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </RouteLoader>
    </Router>
  );
}

export default App;
