import React from "react";

import living1 from "../../../assets/images/living1.webp";
import living2  from "../../../assets/images/living2.jpg";
import living3  from "../../../assets/images/living3.jpg";

const Living = () => {
  return (
    <section className="max-w-6xl mx-auto">
        <h2 className="px-10 py-4 mt-20  md:text-3xl text-xl font-bold">Living Room Interior <span className="text-teal-900"> Design and Development</span></h2>
        <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
        <p className=" text-base py-5" >Welcome to our interior design service! Are you looking to revamp your living room and give it a fresh new look? Look no further, because we are here to help you create the perfect space for you and your family to relax and entertain in. Our team of experienced designers will work closely with you to understand your preferences and style, and create a design that reflects your unique personality. Whether you're looking for a modern and minimalist design, or a cozy and traditional look, we can help you achieve the perfect balance of style and functionality in your living room.</p>

        <p className=" text-base py-5" >We offer a wide range of services, including furniture selection, color consultation, lighting design, and more. We'll take care of everything from start to finish, so you can sit back and relax while we transform your living room into the space of your dreams. Our team is dedicated to providing you with the highest level of customer service, and we'll be there every step of the way to ensure that you're completely satisfied with the final result. Don't wait any longer, contact us today to schedule a consultation and let us help you create the living room of your dreams!</p>
        </div>
        <div className="my-auto md:w-1/3">
          <img src={living1} alt="ceiling" className="object-cover h-96  " />
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-teal-50">
        <p className=" text-base py-5" >We understand that every homeowner has different needs and preferences, which is why we offer a wide range of services to cater to your individual needs. Our team of designers will work with you to create a customized design plan that fits your style and budget. We start by conducting a thorough assessment of your living room, taking into account the size, layout, natural light, and any other important factors. We'll then work with you to create a design plan that takes into account your desired style, color scheme, and functionality.</p>

        <p className=" text-base py-5" >Our furniture selection service includes sourcing high-quality, stylish furniture that not only looks great but is also comfortable and functional. We'll help you choose the perfect pieces that fit your space and bring your living room to life. Our color consultation service includes working with you to choose the perfect paint colors, fabrics, and other materials that will bring your living room to life. We'll help you create a color scheme that complements your furniture and creates a cohesive look throughout the space. Our lighting design service includes selecting the perfect lighting fixtures to create the perfect ambiance in your living room. We'll help you choose the right type of lighting to suit your needs, whether you're looking for task lighting, ambient lighting, or accent lighting.</p>
        </div>
        <div className="my-auto md:w-1/3">
          <img src={living2} alt="ceiling" className="object-cover h-96  " />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
        <p className=" text-base py-5" >Finally, we offer a full installation service, where our team of experts will take care of everything from start to finish. We'll install all of your new furniture, paint your walls, and install your new lighting fixtures, so you can sit back and relax while we do all the hard work. In summary, our living room interior design service is tailored to suit your individual needs and preferences. We'll work closely with you to create a design plan that fits your style and budget, and take care of everything from start to finish, so you can sit back and relax while we transform your living room into the space of your dreams.</p>
        </div>
        <div className="my-auto md:w-1/3">
          <img src={living3} alt="ceiling" className="object-cover h-72  " />
        </div>
      </div>
    </section>
  )
}

export default Living;