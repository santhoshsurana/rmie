import React from 'react';
import './home.css';
import Hero from "../hero/Hero";
import About from "../about/About";
import Testimonials from "../testimonials/Testimonials";
import Contact from "../contact/Contact";
import Services from "../services/Services";
import Posts from "../posts/Posts";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Posts />
      <Contact />
    </>

  )
}

export default Home;