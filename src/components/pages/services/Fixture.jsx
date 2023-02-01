import React from "react";

import bohemian1 from "../../../assets/images/bohemian1.jpg";
import bohemian2  from "../../../assets/images/bohemian2.jpg";

const Fixture = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="px-10 py-4 mt-20  md:text-3xl text-xl font-bold ">Fixture and Furniture<span className="text-teal-900"> Design and Making</span></h2>
        <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
        <p className=" text-base py-5" >

          Are you looking for unique and high-quality fixtures and furniture for your home or business? Look no further! Our team specializes in custom fixture and furniture design and making, ensuring that each piece is tailored to your exact needs and preferences. From modern and minimalist to classic and elegant, our designs will elevate the aesthetic of any space. Plus, our use of top-quality materials and expert craftsmanship guarantees durability and longevity. Don't settle for cookie-cutter, mass-produced furniture. Invest in custom pieces that truly reflect your personal style and enhance the functionality of your space. Contact us today to discuss your project and start bringing your vision to life!</p>
          </div>
        <div className="my-auto md:w-1/3">
          <img src={bohemian1} alt="ceiling" className="object-cover h-80  " />
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-teal-50">
          <p className=" text-base py-5" >Are you looking to elevate the design and functionality of your space? Look no further than our expert fixture and furniture design and making services. Our team of skilled designers and craftsmen will work with you to create custom pieces that perfectly fit the aesthetic and practical needs of your home or business. From sleek and modern designs to traditional and timeless styles, we have the expertise to bring your vision to life. Our high-quality materials and superior craftsmanship ensure that your fixtures and furniture will stand the test of time. Don't settle for cookie-cutter solutions, let us create unique and personalized pieces that will make your space truly stand out. Contact us today to schedule a consultation and start bringing your design dreams to reality."
        </p>
        </div>
        <div className="my-auto md:w-1/3">
          <img src={bohemian1} alt="ceiling" className="object-cover h-80  " />
        </div>
      </div>
    </section>


  )
}

export default Fixture;