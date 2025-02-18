import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Categories from './Components/Categories';
import ExploreApp from './Components/ExploreApp';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const categoriesRef = useRef(null);
  const exploreAppRef = useRef(null);
  const contactUsRef = useRef(null);

  // State to store the header height
  const [headerHeight, setHeaderHeight] = useState(0);

  // Function to handle smooth scrolling and URL update
  const scrollToSection = (ref, path) => {
    if (ref.current) {
      const offset = ref.current.offsetTop - headerHeight; // Adjust for header height
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
    navigate(path); // Update the URL
  };

  // Scroll to the correct section based on the current URL
  useEffect(() => {
    const hash = location.pathname; // Get the current path (e.g., '/about')
    let offset = 0;

    if (hash === '/about' && aboutRef.current) {
      offset = aboutRef.current.offsetTop - headerHeight;
    } else if (hash === '/categories' && categoriesRef.current) {
      offset = categoriesRef.current.offsetTop - headerHeight;
    } else if (hash === '/explore' && exploreAppRef.current) {
      offset = exploreAppRef.current.offsetTop - headerHeight;
    } else if (hash === '/contact' && contactUsRef.current) {
      offset = contactUsRef.current.offsetTop - headerHeight;
    } else if (homeRef.current) {
      offset = homeRef.current.offsetTop - headerHeight;
    }

    window.scrollTo({ top: offset, behavior: 'smooth' });
  }, [location, headerHeight]);

  // Measure the header height after the component mounts
  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  }, []);

  return (
    <>
      {/* Pass the scrollToSection function and refs to the Header */}
      <Header
        scrollToHome={() => scrollToSection(homeRef, '/')}
        scrollToAbout={() => scrollToSection(aboutRef, '/about')}
        scrollToCategories={() => scrollToSection(categoriesRef, '/categories')}
        scrollToExploreApp={() => scrollToSection(exploreAppRef, '/explore')}
        scrollToContactUs={() => scrollToSection(contactUsRef, '/contact')}
      />

      {/* Assign refs to each section */}
      <div ref={homeRef} className="pt-16"> {/* Add padding-top to account for header height */}
        <Home />
      </div>
      <div ref={aboutRef} className="pt-16">
        <About />
      </div>
      <div ref={categoriesRef} className="pt-16">
        <Categories />
      </div>
      <div ref={exploreAppRef} className="pt-16">
        <ExploreApp />
      </div>
      <div ref={contactUsRef} className="pt-16">
        <ContactUs />
      </div>

      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<AppContent />} />
      </Routes>
    </Router>
  );
};

export default App;