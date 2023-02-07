import React from "react";

import sofa1 from "../../../assets/images/sofa1.jpg";
import sofa2 from "../../../assets/images/sofa2.jpg";
import sofa3 from "../../../assets/images/sofa3.jpg";

const Sofa = () => {
  return (
    <section className="max-w-6xl mx-auto">

      <h2 className="px-10 py-4 mt-20  md:text-3xl text-xl font-bold ">Sofa Making<span className="text-teal-900"> For Homes and Offices</span></h2>

      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5" >At RM interiors Era Company, We understand that the furniture in your home or office is an expression of your personal style and brand. That's why we offer a wide range of custom sofa manufacturing services that are tailored to meet the specific needs of our clients. Whether you're looking to furnish a new home or update the look of your office space, we have the skills and expertise to create the perfect sofa to meet your needs.</p>
          <p className=" text-base py-5" >Our team of experienced designers will work with you to understand your vision and create a customized design plan that is tailored to your specific requirements. From selecting the right style and fabric to creating a sofa that is the perfect size for your space, we will guide you through every step of the process.</p>
        </div>
        <div className=" my-auto  md:w-1/3">
          <img src={sofa3} alt="sofa style living room" className="object-cover  h-80  w-full" />
        </div>
      </div>
      <div className="flex md:flex-row-reverse flex-col">
        <div className=" md:w-2/3 px-10 text-gray-600 font-normal text-justify bg-teal-50">
          <p className=" text-base py-5" >We use only the highest-quality materials and expert craftsmanship to ensure that your sofa is not only beautiful, but also built to last. Our frames are made of solid wood, and are designed to withstand years of use. Our cushions are filled with high-density foam, and are designed to provide superior support and comfort.</p>
          <p className=" text-base py-5" >With our custom sofa manufacturing service, you can be confident that you'll receive a piece of furniture that is both beautiful and functional, and that it will stand the test of time. Contact us today to schedule a consultation and see how we can bring your sofa visions to life.
          </p>
        </div>
        <div className=" my-auto  md:w-1/3">
          <img src={sofa1} alt="sofa style living room" className="object-cover h-72  w-full" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal text-justify text-gray-600  bg-gray-50">
        <p className=" text-base py-5" >Our exclusive sofa manufacturing facility offers top-of-the-line quality and craftsmanship for all your sofa needs. With state-of-the-art technology and a team of skilled professionals, we are dedicated to delivering the finest products to our customers. Our facility features a modern production line equipped with the latest machinery and tools, allowing us to streamline the manufacturing process and produce high-quality sofas efficiently.</p>

          <p className=" text-base py-5" >Our team of expert designers and craftsmen are passionate about creating the perfect sofa for each and every customer. We use only the best materials, including premium quality leather and hardwood frames, to ensure that every sofa we produce is built to last. In addition to our commitment to quality, we are also dedicated to sustainability. Our facility uses eco-friendly production methods, and we source materials from suppliers who share our values.</p>

          <p className=" text-base py-5" >With a wide range of customizable options, our sofas can be tailored to suit any style or taste. Whether you are looking for a traditional, modern or contemporary design, we have the perfect sofa for you. At our exclusive sofa manufacturing facility, we believe that a sofa should not just be functional, but also a beautiful and stylish addition to your home. Contact us today to experience the quality and craftsmanship of our sofas for yourself.</p>
        </div>
        <div className=" my-auto  md:w-1/3">
          <img src={sofa2} alt="sofa style living room" className="object-cover  h-64  w-full " />
        </div>
      </div>
    </section >


  )
}

export default Sofa;