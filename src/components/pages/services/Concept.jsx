import React from "react";

import bohemian1 from "../../../assets/images/bohemian1.jpg";
import bohemian2 from "../../../assets/images/bohemian2.jpg";

const Concept = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="px-10 py-4 mt-20  md:text-3xl text-xl font-bold">Interior Concept<span className="text-teal-900"> Design and Development</span></h2>

      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5" >Are you looking to revamp the interior of your space? Look no further than our Interior Concept Design and Development services. Our team of experts will work closely with you to understand your vision and create a custom design that not only meets your functional needs but also reflects your personal style. From layout and colour scheme to lighting and furniture selection, we'll handle every aspect of the design process to bring your space to life. We also offer development services to ensure your design is executed seamlessly and to the highest standards. With our comprehensive approach and attention to detail, you can trust that the final result will be a space that you'll love and be proud to show off. Let us help you create a space that truly reflects who you are and enhances your daily life. Contact us today to schedule a consultation and start bringing your dream space to reality.</p>
          <p className=" text-base py-5" >
            Our Interior Concept Design and Development services are tailored to meet the unique needs of each of our clients. We start by conducting an in-depth consultation to understand your goals and preferences for your space. Whether you're looking to create a modern, minimalist aesthetic or a warm and inviting atmosphere, we'll work with you to create a design that reflects your personal style.</p>
        </div>
        <div className="my-auto md:w-1/3">
          <img src={bohemian1} alt="ceiling" className="object-cover h-[440px]  " />
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col ">
        <div className=" md:w-2/3 px-10 text-gray-600 leading-relaxed font-normal text-justify bg-teal-50">
          <p className=" text-base py-5" >
            Once the design concept is established, our team of experts will handle every aspect of the design process, from layout and colour scheme to lighting and furniture selection. We'll take into account the functional needs of the space and ensure that the design is both functional and visually appealing. Our team will also consider the existing architectural features of your space and integrate them into the design to create a cohesive and polished final result.
            In addition to design, we also offer development services to ensure that your design is executed seamlessly and to the highest standards. We'll work closely with our network of trusted contractors and vendors to ensure that your space is built to the highest quality and meets all safety and code requirements.</p>
          <p className=" text-base py-5" >
            We understand that your space is an extension of who you are and that it should enhance your daily life. That's why we're dedicated to creating a space that you'll love and be proud to show off. With our comprehensive approach and attention to detail, you can trust that the final result will be a space that truly reflects your unique personality and style. Contact us today to schedule a consultation and start bringing your dream space to reality.
          </p>
        </div>
        <div className=" my-auto  md:w-1/3"><img src={bohemian2} alt="bohemian style living room" className="object-cover h-[420px]" /></div>

      </div>
    </section>


  )
}

export default Concept;