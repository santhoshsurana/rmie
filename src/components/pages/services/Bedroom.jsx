import React from "react";

import bohemian1 from "../../../assets/images/bohemian1.jpg";
import bohemian2 from "../../../assets/images/bohemian2.jpg";
import bohemian3 from "../../../assets/images/bohemian3.jpg";

const Bedroom = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="px-10 py-4 mt-20  md:text-3xl text-xl font-bold ">Bedroom Interior
      <span className="text-teal-900"> Design and Development</span></h2>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5 ">
            Are you looking to create a comfortable and stylish bedroom space? Look no further than our Bedroom Interior Design and Development services. Our team of experts will work closely with you to understand your needs and create a custom design that not only meets your functional needs but also reflects your personal style. From layout and color scheme to lighting and furniture selection, we'll handle every aspect of the design process to bring your space to life.
          </p>
          <p className=" text-base py-5 ">
            We understand that the bedroom is a place of relaxation and rest, and that's why we pay special attention to creating a comfortable and inviting atmosphere. We'll work with you to create a layout that promotes restful sleep and relaxation, and we'll help you select the best materials and finishes to suit your budget and aesthetic. We'll also consider the ergonomics of the space, ensuring that it is comfortable to use and easy to navigate.
          </p>
        </div>
        <div className=" my-auto  md:w-1/3">
          <img src={bohemian1} alt="bohemian style living room" className="object-cover  h-96 " />
        </div>
      </div>
      <div className="flex md:flex-row-reverse flex-col">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-teal-50">
          <p className="text-base leading-relaxed text-justify p-4   " >
            In addition to design, we also offer development services to ensure that your design is executed seamlessly and to the highest standards. We'll work closely with our network of trusted contractors and vendors to ensure that your bedroom is built to the highest quality and meets all safety and code requirements.
          </p>
          <p className="text-base leading-relaxed text-justify p-4  " >
            Don't settle for a generic bedroom. Contact us today to schedule a consultation and start creating a space that truly reflects your style and enhances your daily life. Let us help you create a bedroom that you'll love and be proud to show off.
          </p>
        </div>
        <div className=" my-auto  md:w-1/3"><img src={bohemian2} alt="bohemian style living room" className="object-contain " /></div>
      </div>
      <div className="flex flex-col md:flex-row ">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base leading-relaxed text-justify text-gray-600 p-4 " >
            From selecting the perfect paint colors and lighting fixtures, to choosing the right furniture and accessories, we'll handle every detail so you can relax and enjoy the process. We use the latest design trends and technology to create a space that is not only beautiful, but also energy-efficient, eco-friendly and sustainable. Let us help you create a bedroom that is the perfect sanctuary, a place where you can rest and rejuvenate after a long day. Contact us today to schedule a consultation and see how we can help turn your bedroom into the ultimate retreat.
          </p>
        </div>
        <div className=" my-auto w-full  md:w-1/3">
          <img src={bohemian3} alt="bohemian style living room" className="object-cover h-96" /></div>
      </div>
    </section>
  )
}

export default Bedroom;