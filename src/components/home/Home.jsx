import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules

import './home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Hero from "../hero/Hero";
import Features from "../features/Features";
import Testimonials from "../testimonials/Testimonials";
import Contact from "../contact/Contact";
import Posts from "../posts/Posts";

import about from "../../assets/images/photo-1618220179428-22790b461013.webp";
import client1 from '../../assets/images/client1.png';
import client2 from "../../assets/images/client2.png";
import client3 from "../../assets/images/client3.png";
import client4 from "../../assets/images/client4.png";
import client5 from "../../assets/images/client5.png";

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
          <img src={about} className="object-cover h-[700px] w-full" alt="" />
        </div>
      </div>
      <Features />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-teal-900">500+</h2>
              <p className="leading-relaxed">Happy Clients</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-teal-900">4K+</h2>
              <p className="leading-relaxed">Enquiries</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-teal-900">3</h2>
              <p className="leading-relaxed">Active Projects</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-teal-900">10+</h2>
              <p className="leading-relaxed">Services</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Posts />
      <h3 className="mb-2 text-center leading-10 text-4xl font-bold text-teal-900 tracking-tight  ">Our Clients</h3>
      <section className="max-w-6xl  mb-8 sm:mx-auto">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        autoplay={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper hover:cursor-pointer" >
        <SwiperSlide><img className="object-contain w-full grayscale h-32 hover:grayscale-0" src={client4} alt="" /></SwiperSlide>
        <SwiperSlide><img className="object-contain w-full grayscale h-32 hover:grayscale-0" src={client1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="object-contain w-full grayscale h-32 hover:grayscale-0" src={client3} alt="" /></SwiperSlide>
        <SwiperSlide><img className="object-contain w-full grayscale h-32 hover:grayscale-0" src={client2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="object-contain w-full grayscale h-32 hover:grayscale-0" src={client5} alt="" /></SwiperSlide>
      </Swiper>
      </section>
      <Contact />
    </>

  )
}

export default Home;