import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp} from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import Blog from "./components/blog/Blog";
import Portfolio from "./components/portfolio/Portfolio";

//All services 
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
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";





const App = () => {
  return (
    <>
      <Header />
      <Router>
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
      </Router>
      <Footer />
      <div className="bg-teal-900 hover:animate-bounce w-[35px] h-[35px] p-[7px] z-30 rounded-full fixed bottom-20 right-2">
        <a href='https://api.whatsapp.com/send?phone=919507776777&forceIntent=true&load=loadInIOSExternalSafari'>
          <FontAwesomeIcon icon={faWhatsapp} className='text-teal-100' size='xl' />
        </a>
      </div>
      <div className="hover:animate-bounce  w-[35px] h-[35px] bg-teal-900 p-[6px] z-30 rounded-full fixed bottom-32 right-2">
          <FontAwesomeIcon icon={faCircleArrowUp} className='text-teal-100 ' size='xl' />
      </div>
    </>
  )
}

export default App;
