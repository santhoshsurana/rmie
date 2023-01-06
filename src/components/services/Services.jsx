import React from "react";
import './services.css';

const Services = () => {
  return (
    <section className="flex-col justify-center flex gap-4 items-start py-12" id="services">
      <div className="w-full mx-auto">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-base text-teal-800 font-semibold tracking-wide uppercase accent_text editable">Services</h2>
              <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-black dark:text-black sm:text-4xl primary_text section_title editable" data-content="website-headlines">World Class Interior Design Serivices</p>
            </div>
            
            <div className="flex flex-wrap mt-12 mb-1 dark:text-white">
              <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8" data-content="features">
                <div className="flex items-center mb-6">
                  <i className="fa-solid fa-pen text-teal-800" />
                  <div className="ml-4 text-xl text-teal-900 primary_text font-semibold editable" data-subcontent="feature-title">We understand your needs</div>
                </div>
                <p className="leading-loose text-gray-600  dark:text-gray-600 text-md editable" data-subcontent="feature-content"><span className="placeholder small" />Designing interiors with a
                  professional approach is what sets rm
                  interior era apart from the competition. We take the time to understand your specific needs and design
                  a space that meets all of your requirements.</p>
              </div>
              <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8" data-content="features">
                <div className="flex items-center mb-6">
                  <i className="fa-solid fa-pen text-teal-800" />
                  <div className="ml-4 text-xl text-teal-900 primary_text font-semibold editable" data-subcontent="feature-title">Step by Step guiding</div>
                </div>
                <p className="leading-loose text-gray-600  dark:text-gray-600 text-md editable active-elem" data-subcontent="feature-content"><span className="placeholder small" />Designing your home with RM
                  Interiors Era means having a team of
                  professional designers by your side every step of the way. We'll work with you to create a space
                  that's both stylish and functional, tailored to your specific needs.</p>
              </div>
              <div className="w-full border-b md:w-1/2 lg:w-1/3 p-8" data-content="features">
                <div className="flex items-center mb-6">
                  <i className="fa-solid fa-pen text-teal-800" />
                  <div className="ml-4 text-xl text-teal-900 primary_text font-semibold editable" data-subcontent="feature-title">Let our professionals handle your home design</div>
                </div>
                <p className="leading-loose text-gray-600  dark:text-gray-600 text-md editable" data-subcontent="feature-content"><span className="placeholder small" />If you're looking for a
                  professional team to help design your home's
                  interior, look no further than RM Interiors Era. We have a wealth of experience and expertise, and can
                  create a space that is both functional and stylish.</p>
              </div>
              <div className="w-full md:w-1/2 md:border-r lg:w-1/3 p-8" data-content="features">
                <div className="flex items-center mb-6">
                  <i className="fa-solid fa-pen text-teal-800" />
                  <div className="ml-4 text-xl text-teal-900 primary_text font-semibold editable" data-subcontent="feature-title">Designing your dream home</div>
                </div>
                <p className="leading-loose text-gray-600  dark:text-gray-600 text-md editable" data-subcontent="feature-content"><span className="placeholder small" />Designing your dream home
                  doesn't have to be a nightmare. With rm
                  interior era, you can get professional help to create the home of your dreams. Our team will work with
                  you to create a custom design that fits your style and budget.</p>
              </div>
              <div className="w-full md:w-1/2 md:border-r lg:w-1/3 p-8" data-content="features">
                <div className="flex items-center mb-6">
                  <i className="fa-solid fa-pen text-teal-800" />
                  <div className="ml-4 text-xl text-teal-900 primary_text font-semibold editable" data-subcontent="feature-title">Designing by professionals
                  </div>
                </div>
                <p className="leading-loose text-gray-600  dark:text-gray-600 text-md editable" data-subcontent="feature-content"><span className="placeholder small" />Designing your home with RM
                  Interiors Era means having a team of
                  professionals by your side who will take care of every detail and create a space that you will love.</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-8" data-content="features">
                <div className="flex items-center mb-6">
                  <i className="fa-solid fa-pen text-teal-800" />
                  <div className="ml-4 text-xl text-teal-900 primary_text font-semibold editable" data-subcontent="feature-title">Bringing your vision to life</div>
                </div>
                <p className="leading-loose text-gray-600  dark:text-gray-600 text-md editable" data-subcontent="feature-content"> At RM Interiors Era, we work with you to bring your vision for your
                  home to life. We take the time to understand your style and preferences, and work with you to create a
                  space that is both stylish and functional.</p>
              </div>
            </div>
          </div>
      </div>
    </section>


  )
}

export default Services;