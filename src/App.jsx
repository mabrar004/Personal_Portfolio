import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isSpecificPage =
    location.pathname === "/services" ||
    location.pathname === "/about" ||
    location.pathname === "/contact" ||
    location.pathname === "/portfolio";

  return (
    <div>
      <Navbar />
      {isSpecificPage ? (
        <Outlet />
      ) : (
        <>
          <HeroSection />
          <AboutMe />
          <Portfolio />
          <Contact />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
