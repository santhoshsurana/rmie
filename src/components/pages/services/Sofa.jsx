import React from "react";

import bohemian1 from "../../../assets/images/bohemian1.jpg";
import bohemian2  from "../../../assets/images/bohemian2.jpg";

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
          <img src={bohemian1} alt="bohemian style living room" className="object-cover  h-80 " />
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col">
        <div className=" md:w-2/3 px-10 text-gray-600 font-normal text-justify bg-teal-50">
        <p className=" text-base py-5" >We use only the highest-quality materials and expert craftsmanship to ensure that your sofa is not only beautiful, but also built to last. Our frames are made of solid wood, and are designed to withstand years of use. Our cushions are filled with high-density foam, and are designed to provide superior support and comfort.</p>
        <p className=" text-base py-5" >With our custom sofa manufacturing service, you can be confident that you'll receive a piece of furniture that is both beautiful and functional, and that it will stand the test of time. Contact us today to schedule a consultation and see how we can bring your sofa visions to life.
        </p>
      </div>
      <div className=" my-auto  md:w-1/3">
        <img src={bohemian2} alt="bohemian style living room" className="object-cover h-80" />
      </div>
      </div>
    </section >


  )
}

export default Sofa;