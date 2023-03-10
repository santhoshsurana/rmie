import React from "react";
import './portfolio.css';

import portfolio1 from "../../assets/images/portfolio14.jpg";
import portfolio2 from "../../assets/images/portfolio15.jpg";
import portfolio3 from "../../assets/images/portfolio13.jpg";
import portfolio4 from "../../assets/images/portfolio12.webp";
import portfolio5 from "../../assets/images/portfolio5.jpg";
import portfolio6 from "../../assets/images/portfolio6.jpg";


const Portfolio = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Creating Beautiful and Functional Spaces: A Look at Our Interior Design Portfolio</h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-justify text-base">Our portfolio showcases a variety of projects, from residential homes to commercial spaces, including living rooms, bedrooms, bathrooms, kitchens, offices, and more. We specialize in creating cohesive and elegant designs that seamlessly blend different elements such as color, texture, and lighting.</p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src={ portfolio1} />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src={ portfolio2} />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src={ portfolio3} />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src={ portfolio4} />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src={ portfolio5} />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src={ portfolio6} />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Portfolio;