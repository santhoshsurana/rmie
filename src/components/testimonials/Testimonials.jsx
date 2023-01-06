import React from "react";
import './testimonials.css';

import test_img1 from "../../assets/images/photo-1618220179428-22790b461013.webp";
import test_img2 from "../../assets/images/photo-1618221195710-dd6b41faaea6.webp";
import test_img3 from "../../assets/images/photo-1586023492125-27b2c045efd7.webp";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  return (
    <section className="items-center justify-center py-16 bg-teal-50 min-w-screen">
      <div className="max-w-6xl px-12 mx-auto md:px-16 xl:px-10">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
            <p className="mb-2 text-base font-medium text-teal-800 uppercase accent_text editable">interior designers,
              contractors, architects, love RM Interiors Era</p>
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl primary_text editable">
              Testimonials</h2>
            <p className="my-6 text-lg text-gray-600  editable">Don't just take our word for it, read from our
              extensive list of case studies and customer testimonials.</p>
            <a href="#_" className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-teal-800 border border-transparent rounded-md shadow hover:bg-teal-900 focus:outline-none btn-editable editable">View
              Case Studies</a>
          </div>
          <div className="w-full lg:w-1/2">
            <blockquote className="flex items-center justify-between w-full col-span-1 p-6 bg-white rounded-lg shadow">
              <div className="flex flex-col pr-8">
                <div className="relative pl-12">
                  <FontAwesomeIcon icon={faQuoteLeft} className="fa-solid fa-quote-left fa-2xl -ml-8 text-teal-700"></FontAwesomeIcon>
                  <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base  editable" data-content="testimonials">"I really appreciate the work that RM Interiors Era did for my home. They
                    have a professional approach to designing and it showed. I am constantly bragging about them to
                    friends and family."</p>
                </div>
                <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base ">
                  <span className="editable">Raju Dasari</span>
                  <span className="mt-1 text-sm leading-5 text-gray-500 truncate  editable">- Rajahmundry</span>
                </h3>
              </div>
              <img className="is_avatar flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full xl:w-24 xl:h-24 object-cover img-editable" src={test_img1} alt="" />
            </blockquote>
            <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow">
              <div className="flex flex-col pr-10">
                <div className="relative pl-12">
                  <FontAwesomeIcon icon={faQuoteLeft} className="fa-solid fa-quote-left fa-2xl -ml-8 text-teal-700"></FontAwesomeIcon>
                  <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base  editable" data-content="testimonials">"We are happy to collaborate with RM Interiors Era. They always provide us
                    with excellent customer service. They won't let you down."</p>
                </div>
                <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base ">
                  <span className="editable">Naveen Komarthy</span>
                  <span className="mt-1 text-sm leading-5 text-gray-500 truncate  editable">- Bangalore</span>
                </h3>
                <p className="mt-1 text-sm leading-5 text-gray-500 truncate" />
              </div>
              <img className="is_avatar flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full object-cover img-editable" src={test_img2} alt="" />
            </blockquote>
            <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow">
              <div className="flex flex-col pr-10">
                <div className="relative pl-12">
                  <FontAwesomeIcon icon={faQuoteLeft} className="fa-solid fa-quote-left fa-2xl -ml-8 text-teal-700"></FontAwesomeIcon>
                  <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base  editable" data-content="testimonials">"I was looking for an interior design company and asked the people I knew.
                    They all recommended RM Interiors Era and that's where I went. I loved their approach and now my house
                    is more beautiful than it has ever been."</p>
                </div>
                <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base ">
                  <span className="editable">Durga Prasad</span>
                  <span className="mt-1 text-sm leading-5 text-gray-500 truncate  editable">- Hyderabad</span>
                </h3>
                <p className="mt-1 text-sm leading-5 text-gray-500 truncate" />
              </div>
              <img className="is_avatar flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full object-cover img-editable" src={test_img3} alt="" />
            </blockquote>
          </div>
        </div>
      </div>
    </section>


  )
}

export default Testimonials;