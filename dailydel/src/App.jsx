import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Categories from './Components/Categories';
import ExploreApp from './Components/ExploreApp';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';

const App = () => {
  // Create refs for each section
  const homeRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const categoriesRef = React.useRef(null);
  const exploreAppRef = React.useRef(null);
  const contactUsRef = React.useRef(null);

  // Function to handle smooth scrolling
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Pass the scrollToSection function and refs to the Header */}
      <Header
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToCategories={() => scrollToSection(categoriesRef)}
        scrollToExploreApp={() => scrollToSection(exploreAppRef)}
        scrollToContactUs={() => scrollToSection(contactUsRef)}
      />

      {/* Assign refs to each section */}
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={categoriesRef}>
        <Categories />
      </div>
      <div ref={exploreAppRef}>
        <ExploreApp />
      </div>
      <div ref={contactUsRef}>
        <ContactUs />
      </div>

      <Footer />
    </>
  );
};

export default App;