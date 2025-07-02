import React, { useEffect } from "react";
import CustomCursor from "./components/CustomCursor/CustomCursor.jsx";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Services from "./components/Services/Services.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Scrollup from "./components/Scrollup/Scrollup.jsx";
// import Dot from "./components/Dot/Dot.jsx";


function App() {

  return (
    <>
      <CustomCursor />
      <Header />
      <main className="main">
        <Home />
        {/* <Dot /> */}
        <About />
        <Skills />
        <Services />
        <Reviews />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
