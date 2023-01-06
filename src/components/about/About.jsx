import React from "react";
import './about.css';

import about_image from '../../assets/images/photo-1618221195710-dd6b41faaea6.webp';
import about_image2 from "../../assets/images/photo-1586023492125-27b2c045efd7.webp";
import about_image3 from "../../assets/images/photo-1618219740975-d40978bb7378.webp";
import about_image4 from "../../assets/images/photo-1567016376408-0226e4d0c1ea.webp";
import about_image5 from "../../assets/images/photo-1606744837616-56c9a5c6a6eb.webp";
const AboutUs = () => {
  return (
    <section id="aboutUs" className="bg-teal-50">
      <div className="max-w-6xl mx-auto pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]">
        <div className="wow fadeInUp bg-white rounded-md" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s' }}>
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="items-stretch justify-between flex">
                <div className="w-full px-14 py-12">
                  <span className="mb-2 inline-block text-base font-semibold   text-teal-800 rounded-md">ABOUT US</span>
                  <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px] tracking-tight primary_text " data-content="website-headlines">Welcome to <span className="text-teal-900">RM Interiors Era!</span></h2>
                  <p className="mb-9 text-base leading-relaxed text-gray-600 font-normal  " data-content="about-us">RM Interiors Era is a professional interior design firm that has been designing spaces since 2013. We approach each project with a fresh perspective, taking into consideration the client's needs and wants, the space itself, and the overall aesthetic. We believe that good design should be accessible to everyone, which is why we offer affordable and customizable solutions. Whether you're looking for a complete overhaul or just a few finishing touches, we'll work with you to create a space that you love.</p>
                  <p className="mb-9 text-base leading-relaxed text-gray-600 font-normal" data-content="about-us">We are a team of creative and passionate interior designers with a wealth of experience in the industry. Our goal is to transform mundane spaces into functional and aesthetically pleasing environments that reflect the personalities and lifestyles of our clients.</p>

                    <p className="mb-9 text-base leading-relaxed text-gray-600 font-normal">We believe that good design goes beyond just choosing a color palette and furniture. It’s about understanding how a space will be used and creating a functional layout that meets the needs of the people who use it. Whether you want to revamp a single room or redesign your entire home, we have the skills and expertise to bring your vision to life.</p>

                    <p className="mb-9 text-base leading-relaxed text-gray-600 font-normal">Our process begins with a consultation where we listen to your ideas and preferences, and then we create a personalized design plan tailored to your budget and style. We handle everything from sourcing materials to managing contractors, so you can sit back and relax while we bring your dream space to fruition.</p>

                    <p className="mb-9 text-base leading-relaxed text-gray-600 font-normal">Thank you for considering us for your interior design needs. We look forward to working with you and bringing your unique style to life!</p>
                  <a href="#" className="inline-flex items-center justify-center rounded py-3 px-6 text-base font-semibold text-white transition duration-300 ease-in-out bg-teal-800 hover:bg-teal-900 hover:shadow-lg btn-"> Learn More </a>
                </div>
                <div className="text-center flex" style={{ maxWidth: '50%' }}>
                  <div className="relative z-10 h-full">
                    <img src={about_image} alt="image" className="mx-auto lg:ml-auto rounded-tr-md rounded-br-md h-full object-cover img-" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 pb-16 pt-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-24 lg:px-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <p className="inline-block px-3 py-px mb-2 text-base font-semibold tracking-wider w-full text-teal-800 uppercase  "> About RM Interiors Era</p>
          <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto primary_text " data-content="website-headlines">Interior Design Made Easy</h2>
          <p className="text-base text-gray-700 md:text-lg  " data-content="product-descriptions">rm interior era is a well-known design company with a strong background in the design and construction industry. Focusing on residential design, RM Interiors Era offers affordable luxury for your home. We take a professional approach to each project, ensuring that every client can enjoy their new space.</p>
        </div>
        <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
          <div className="relative">
            <img className="object-cover w-full h-56 rounded shadow-lg img-" src={about_image2} alt="" />
          </div>
          <div className="relative">
            <img className="object-cover w-full h-56 rounded shadow-lg img-" src={about_image3} alt="" />
          </div>
          <div className="relative">
            <img className="object-cover w-full h-56 rounded shadow-lg img-" src={about_image4} alt="" />
          </div>
          <div className="relative">
            <img className="object-cover w-full h-56 rounded shadow-lg img-" src={about_image5} alt="" />
          </div>
        </div>
        <div className="flex items-center sm:justify-center">
          <a href="#" className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-800 hover:bg-teal-900 focus:shadow-outline focus:outline-none  btn- ">Ask our Expert!</a>
          <a href="#" aria-label className="inline-flex items-center font-semibold transition-colors duration-200 text-gray-900 hover:text-gray-800  link- ">Learn more</a>
        </div>
      </div>
    </section>

  )
}

export default AboutUs;