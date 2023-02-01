import React from 'react';
import './home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Hero from "../hero/Hero";
import Features from "../features/Features";
import Testimonials from "../testimonials/Testimonials";
import Contact from "../contact/Contact";
import Posts from "../posts/Posts";

import about_image6 from "../../assets/images/photo-1618220179428-22790b461013.webp";


const Home = () => {

  return (
    <>
      <Hero />
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-1/2 text-center p-5 md:pr-8">
          <h1 className="md:mb-6 text-2xl font-extrabold leading-none tracking-normal text-teal-900 md:text-4xl md:tracking-tight  "
          >Our Vision</h1>
          <p className="py-6 mb-6 text-lg text-gray-600 text-justify " data-content="website-subheadlines">
            To be the premier interior design company that consistently delivers exceptional design solutions that exceed our clients' expectations.</p>
          <h1 className="md:mb-6 text-2xl font-extrabold leading-none tracking-normal text-teal-900 md:text-4xl md:tracking-tight  "
          >Our Mission</h1>
          <p className="py-6 mb-6 text-lg text-gray-600 text-justify    " data-content="website-subheadlines">
            To provide a full range of interior design services that enhance the functionality, aesthetics, and value of our clients' spaces. We strive to create meaningful and enduring designs that reflect our clients' personalities and lifestyles, and to deliver these services with the highest level of professionalism, creativity, and customer satisfaction. We are committed to being a trusted partner for our clients and to contributing to the betterment of the communities in which we work.</p>
          <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <a href="/services" className="inline-flex items-center transition easy-in-out delay-150 hover:translate-1 hover:scale-110 duration-300 justify-center border-none bg-teal-800 hover:bg-teal-900 h-12 px-6 text-white text-md font-medium rounded-lg sm:w-auto sm:mb-0 ">
              Get Started
              <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={about_image6} className="object-cover h-[700px] w-full" alt="" />
        </div>
      </div>
      <Features />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-teal-900">2.7K</h2>
              <p className="leading-relaxed">Users</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-teal-900">1.8K</h2>
              <p className="leading-relaxed">Subscribes</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-teal-900">35</h2>
              <p className="leading-relaxed">Downloads</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-teal-900">4</h2>
              <p className="leading-relaxed">Products</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Posts />
      <Contact />
    </>

  )
}

export default Home;