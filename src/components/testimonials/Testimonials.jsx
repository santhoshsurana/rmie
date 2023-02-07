import React from "react";
import './testimonials.css';

import test_img1 from "../../assets/images/photo-1618220179428-22790b461013.webp";
import test_img2 from "../../assets/images/photo-1618221195710-dd6b41faaea6.webp";
import test_img3 from "../../assets/images/photo-1586023492125-27b2c045efd7.webp";
import testimonial from "../../assets/images/testimonial1.webp"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  return (
    <section className="items-center justify-center py-16 bg-teal-50 min-w-screen">
      <div className="max-w-6xl px-12 mx-auto md:px-16 xl:px-10">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl  gray">
              Testimonials</h2>
            <p className="mt-2 text-base font-medium text-teal-900">Interior Designers,
              Contractors, Architects, Love RM Interiors Era</p>
            <p className="my-6 text-lg text-gray-600  gray">Don't just take our word for it, read from our
              extensive list of case studies and customer testimonials.</p>
            <a href="#_" className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-teal-800 border border-transparent rounded-md shadow hover:bg-teal-900 focus:outline-none btn-gray gray">View
              Case Studies</a>
            <img src={testimonial} alt="" className="md:rounded-full md:h-96 md:w-96 w-full border-[14px] border-white shadow-teal-900 shadow-2hxl object-cover  mt-10  " />
          </div>
          <div className="w-full lg:w-1/2">
            <blockquote className="flex items-center justify-between w-full col-span-1 p-6 bg-white rounded-lg shadow">
              <div className="flex flex-col ">
                <div className="md:relative pl-12">
                  <FontAwesomeIcon icon={faQuoteLeft} className="fa-solid fa-quote-left fa-2xl -ml-8 text-teal-700"></FontAwesomeIcon>
                  <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base" data-content="testimonials">"I really appreciate the work that RM Interiors Era did for my home. They
                    have a professional approach to designing and it showed. I am constantly bragging about them to
                    friends and family."</p>
                </div>
                <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-base ">
                  <span className="gray">Raju Dasari</span>
                  <span className="mt-1 text-sm leading-5 text-gray-500 truncate  gray">- Rajahmundry</span>
                </h3>
              </div>
              <img className="flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full object-cover " src={test_img1} alt="" />
            </blockquote>

            <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow">
              <div className="flex flex-col">
                <div className="md:relative pl-12">
                  <FontAwesomeIcon icon={faQuoteLeft} className="fa-solid fa-quote-left fa-2xl -ml-8 text-teal-700"></FontAwesomeIcon>
                  <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base" data-content="testimonials">"I was looking for an interior design company and asked the people I knew. They all recommended RM Interiors Era and that's where I went. I loved their approach and now my house is more beautiful than it has ever been."</p>
                </div>
                <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-base ">
                  <span className="gray">Durga Prasad</span>
                  <span className="mt-1 text-sm leading-5 text-gray-500 truncate">- Kakinada</span>
                </h3>
              </div>
              <img className=" flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full object-cover " src={test_img3} alt="" />
            </blockquote>
            <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow">
              <div className="flex flex-col">
                <div className="md:relative pl-12">
                  <FontAwesomeIcon icon={faQuoteLeft} className="fa-solid fa-quote-left fa-2xl -ml-8 text-teal-700"></FontAwesomeIcon>
                  <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base" data-content="testimonials">"I recently hired RM Interior Era to help redesign my living room, and I am so happy with the results! The team was professional and really listened to my ideas. They were able to bring my vision to life and create a beautiful and functional space. I would highly recommend RM Interior Era for any of your design needs."</p>
                </div>
                <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-base ">
                  <span className="gray">Kareem Syed</span>
                  <span className="mt-1 text-sm leading-5 text-gray-500 truncate">- Kakinada</span>
                </h3>
              </div>
              <img className=" flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full object-cover " src={test_img2} alt="" />
            </blockquote>
          </div>
        </div>
      </div>
    </section >


  )
}

export default Testimonials;