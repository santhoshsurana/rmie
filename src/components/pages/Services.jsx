import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen,  } from "@fortawesome/free-solid-svg-icons";
import './services.css';

const Services = () => {
  return (
    <section className="max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-teal-900 sm:text-4xl   " data-content="website-headlines">World Class Interior Design Services</p>
            </div>
            
            <div className="flex flex-wrap text-justify mt-12 mb-1 dark:text-white">
              <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8" data-content="features">
                <div className="flex items-center mb-6">
                  <FontAwesomeIcon size="2x" icon={faPen} className='text-teal-900' ></FontAwesomeIcon>
                  <div className="ml-4 text-xl text-teal-900  font-semibold " data-subcontent="feature-title">We understand your needs</div>
                </div>
                <p className="leading-loose text-gray-600  dark:text-gray-600 text-md " data-subcontent="feature-content"><span className="placeholder small" />Designing interiors with a
                  professional approach is what sets rm
                  interior era apart from the competition. We take the time to understand your specific needs and design
                  a space that meets all of your requirements.</p>
              </div>
              <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8" data-content="features">
                <div className="flex items-center mb-6">
                  <FontAwesomeIcon size="2x" icon={faPen} className='text-teal-900' ></FontAwesomeIcon>
                  <div className="ml-4 text-xl text-teal-900  font-semibold " data-subcontent="feature-title">Step by Step guiding</div>
                </div>
                <p className="leading-loose text-gray-600  dark:text-gray-600 text-md  active-elem" data-subcontent="feature-content"><span className="placeholder small" />Designing your home with RM
                  Interiors Era means having a team of
                  professional designers by your side every step of the way. We'll work with you to create a space
                  that's both stylish and functional, tailored to your specific needs.</p>
              </div>
              <div className="w-full border-b md:w-1/2 lg:w-1/3 p-8" data-content="features">
                <div className="flex items-center mb-6">
                  <FontAwesomeIcon size="2x" icon={faPen} className='text-teal-900' ></FontAwesomeIcon>
                  <div className="ml-4 text-xl text-teal-900  font-semibold " data-subcontent="feature-title">Let our professionals handle your home design</div>
                </div>
                <p className="leading-loose text-gray-600  dark:text-gray-600 text-md " data-subcontent="feature-content"><span className="placeholder small" />If you're looking for a
                  professional team to help design your home's
                  interior, look no further than RM Interiors Era. We have a wealth of experience and expertise, and can
                  create a space that is both functional and stylish.</p>
              </div>
              <div className="w-full md:w-1/2 md:border-r lg:w-1/3 p-8" data-content="features">
                <div className="flex items-center mb-6">
                  <FontAwesomeIcon size="2x" icon={faPen} className='text-teal-900' ></FontAwesomeIcon>
                  <div className="ml-4 text-xl text-teal-900  font-semibold " data-subcontent="feature-title">Designing your dream home</div>
                </div>
                <p className="leading-loose text-gray-600  dark:text-gray-600 text-md " data-subcontent="feature-content"><span className="placeholder small" />Designing your dream home
                  doesn't have to be a nightmare. With rm
                  interior era, you can get professional help to create the home of your dreams. Our team will work with
                  you to create a custom design that fits your style and budget.</p>
              </div>
              <div className="w-full md:w-1/2 md:border-r lg:w-1/3 p-8" data-content="features">
                <div className="flex items-center mb-6">
                  <FontAwesomeIcon size="2x" icon={faPen} className='text-teal-900' ></FontAwesomeIcon>
                  <div className="ml-4 text-xl text-teal-900  font-semibold " data-subcontent="feature-title">Designing by professionals
                  </div>
                </div>
                <p className="leading-loose text-gray-600  dark:text-gray-600 text-md " data-subcontent="feature-content"><span className="placeholder small" />Designing your home with RM
                  Interiors Era means having a team of
                  professionals by your side who will take care of every detail and create a space that you will love.</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-8" data-content="features">
                <div className="flex items-center mb-6">
                  <FontAwesomeIcon size="2x" icon={faPen} className='text-teal-900' ></FontAwesomeIcon>
                  <div className="ml-4 text-xl text-teal-900  font-semibold " data-subcontent="feature-title">Bringing your vision to life</div>
                </div>
                <p className="leading-loose text-gray-600  dark:text-gray-600 text-md " data-subcontent="feature-content"> At RM Interiors Era, we work with you to bring your vision for your
                  home to life. We take the time to understand your style and preferences, and work with you to create a
                  space that is both stylish and functional.</p>
              </div>
            </div>

    </section>


  )
}

export default Services;