import React from "react";
import bohemian1 from "../../../assets/images/bohemian1.jpg";
import bohemian2  from "../../../assets/images/bohemian2.jpg";
const Space = () => {
  return (
    <section className="max-w-6xl mx-auto">
    <h2 className="px-10 py-4 mt-20  md:text-3xl text-xl font-bold ">Space Planing<span className="text-teal-900"> Using 2D Layouts and 3D modeling</span></h2>
        <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
        <p className=" text-base py-5" >Are you looking to create a functional and visually appealing space? Look no further! Our interior design company specializes in space planning using 2D layouts and 3D modeling. Our experienced designers will work with you to understand your needs and create a customized plan that maximizes the potential of your space.</p>

        <p className=" text-base py-5" >Our 2D layouts provide a clear and detailed representation of the floor plan, including the placement of furniture and fixtures. This allows you to visualize the space and make any necessary adjustments before the project begins. Our 3D modeling takes it one step further, allowing you to see the space in a more realistic and immersive way. You can see how the colors and textures work together, and make sure that the design is cohesive and visually pleasing. We also use the latest technology to create interactive 3D walk-throughs, so you can experience the space before it's built.</p>
        </div>
        <div className="my-auto md:w-1/3">
          <img src={bohemian1} alt="ceiling" className="object-cover h-80  " />
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-teal-50">
        <p className=" text-base py-5" >Our process is designed to be efficient, cost-effective and tailored to your specific needs. Let us help you transform your space and create the perfect environment for you and your family or business. Contact us today to schedule a consultation. In addition to our space planning and 3D modeling services, we also offer a wide range of other interior design services to help you create the perfect space. These include:</p>

        <p className=" text-base py-1" ><span className="text-teal-900 font-semibold">Furniture selection and sourcing:</span> We'll help you choose the perfect furniture and accessories to complement your space and make it functional and comfortable.</p>

        <p className=" text-base py-1" ><span className="text-teal-900 font-semibold">Color consultation:</span> We'll help you choose the perfect color scheme for your space, taking into account the natural light and architectural features of the room.</p>

        <p className=" text-base py-1" ><span className="text-teal-900 font-semibold">Lighting design:</span> We'll help you choose the perfect lighting to create the perfect ambiance and highlight the best features of your space.</p>

        <p className=" text-base py-1" ><span className="text-teal-900 font-semibold">Project management:</span> We'll oversee the entire project from start to finish, ensuring that everything is done on time and on budget.</p>

        <p className=" text-base py-1" >Our team of experienced designers is dedicated to creating spaces that are beautiful, functional, and reflective of your personal style. We'd love to work with you to create the space of your dreams. Contact us today to schedule a consultation!
        </p>
        </div>
        <div className="my-auto md:w-1/3">
          <img src={bohemian1} alt="ceiling" className="object-cover h-80  " />
        </div>
      </div>
    </section>


  )
}

export default Space;