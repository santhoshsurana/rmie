import React from 'react';
import './home.css';
import Hero from "../hero/Hero";
import About from "../about/About";
import Testimonials from "../testimonials/Testimonials";
import Contact from "../contact/Contact";
import Posts from "../posts/Posts";

const Home = () => {
  
  return (
    <>
      <Hero />
      <div className="h-screen w-full"></div>
      <Testimonials />
      <Posts />
      <Contact />
    </>

  )
}

export default Home;