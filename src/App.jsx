import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import Blog from "./components/blog/Blog";
import Portfolio from "./components/portfolio/Portfolio";

//All event components 
import WhatsappButton from "./components/event/WhatsappButton";
import ScrollButton from "./components/event/ScrollButton";
//All services components 
import Concept from "./components/services/Concept";
import Sofa from "./components/services/Sofa";
import Office from "./components/services/Office";
import Kitchen from "./components/services/Kitchen";
import Wardrobe from "./components/services/Wardrobe";
import Ceiling from "./components/services/Ceiling";
import Fixture from "./components/services/Fixture";
import Living from "./components/services/Living";
import Bedroom from "./components/services/Bedroom";
import Space from "./components/services/Space";
import whatsappButton from "./components/event/ScrollButton";

const App = () => {
  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/concept" element={<Concept />} />
          <Route path="/sofa" element={<Sofa />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/office" element={<Office />} />
          <Route path="/wardrobe" element={<Wardrobe />} />
          <Route path="/ceiling" element={<Ceiling />} />
          <Route path="/fixture" element={<Fixture />} />
          <Route path="/space" element={<Space />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path="/living" element={<Living />} />
        </Routes>
        <Footer />
      </Router>   
      <WhatsappButton />
      <ScrollButton />   
    </>
  )
}

export default App;
