import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Services from "./components/pages/Services";
import Blog from "./components/blog/Blog";
import Portfolio from "./components/portfolio/Portfolio";
import PageNotFound from "./components/404Page"

//All event components 
import WhatsAppButton from "./components/buttons/WhatsAppButton";
import ScrollButton from "./components/buttons/ScrollButton";

//All services components 
import Concept from "./components/pages/services/Concept";
import Sofa from "./components/pages/services/Sofa";
import Office from "./components/pages/services/Office";
import Kitchen from "./components/pages/services/Kitchen";
import Wardrobe from "./components/pages/services/Wardrobe";
import Ceiling from "./components/pages/services/Ceiling";
import Fixture from "./components/pages/services/Fixture";
import Living from "./components/pages/services/Living";
import Bedroom from "./components/pages/services/Bedroom";
import Space from "./components/pages/services/Space";

//All style components
import Bohemian from "./components/pages/styles/Bohemian";
import Transitional from "./components/pages/styles/Transitional";
import Traditional from "./components/pages/styles/Traditional";
import Scandinavian from "./components/pages/styles/Scandinavian";
import Contemporary from "./components/pages/styles/Contemporary";
import Coastal from "./components/pages/styles/Costal";
import FreanchCountry from "./components/pages/styles/FrenchCountry";
import Hollwood from "./components/pages/styles/Hollywood";
import Industrial from "./components/pages/styles/Industrial";
import MidCentuary from "./components/pages/styles/MidCentuary";
import Minimalist from "./components/pages/styles/Minimalist";
import Modern from "./components/pages/styles/Modern";
import Rustic from "./components/pages/styles/Rustic";
import ShabbyChic from "./components/pages/styles/ShabbyChic";

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

          <Route path="/bohemian" element={<Bohemian />} />
          <Route path="/transitional" element={<Transitional />} />
          <Route path="/traditional" element={<Traditional />} />
          <Route path="/scandinavian" element={<Scandinavian />} />
          <Route path="/minimalist" element={<Minimalist />} />
          <Route path="/rustic" element={<Rustic />} />
          <Route path="/coastal" element={<Coastal />} />
          <Route path="/midcentuary" element={<MidCentuary />} />
          <Route path="/shabbychic" element={<ShabbyChic />} />
          <Route path="/industrial" element={<Industrial />} />
          <Route path="/hollywood" element={<Hollwood />} />
          <Route path="/frenchcountry" element={<FreanchCountry />} />
          <Route path="/modern" element={<Modern />} />
          <Route path="/contemporary" element={<Contemporary />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>   
      <WhatsAppButton />
      <ScrollButton />   
    </>
  )
}

export default App;
