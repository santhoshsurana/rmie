import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const App = () => {
  return (
    <>
    <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App;
