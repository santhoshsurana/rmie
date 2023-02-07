import React from "react";
import kitchen1 from "../../../assets/images/kitchen1.jpg";
import kitchen2  from "../../../assets/images/kitchen3.jpg";
const Kitchen = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="px-10 py-4 mt-20  md:text-3xl text-xl font-bold ">Modular Kitchen Interior<span className="text-teal-900"> Design and Development</span></h2>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
      <p className=" text-base py-5" >Modular kitchen design is a popular choice for many homeowners because it allows for flexibility and customization in the layout and design of the kitchen. A modular kitchen is made up of pre-designed units, such as cabinets, countertops, and appliances, that can be assembled in a variety of configurations to suit the specific needs and preferences of the homeowner. One of the main benefits of modular kitchen design is that it allows for a great deal of flexibility. The individual units can be rearranged or added to, making it easy to change the layout of the kitchen as the needs of the homeowner evolve. This is especially useful for those who may want to make changes to the kitchen over time, such as adding a kitchen island or updating the appliances.</p>

      <p className=" text-base py-5" >Another advantage of modular kitchen design is that it can be tailored to fit the specific needs and preferences of the homeowner. For example, if you love to cook and entertain, you can design a kitchen with plenty of counter space and storage for all of your cooking tools and ingredients. Or, if you have a small space, you can choose compact, space-saving units that make the most of the available area. </p>
      </div>
        <div className="my-auto md:w-1/3">
          <img src={kitchen1} alt="ceiling" className="object-cover h-96  " />
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-teal-50">
      <p className=" text-base py-5" >In terms of aesthetics, modular kitchen design offers a wide range of options. The individual units can be customized with a variety of finishes, colors, and materials, allowing you to create a kitchen that is truly unique and reflects your personal style. Overall, modular kitchen design is a popular choice for many homeowners because it allows for flexibility, customization, and a wide range of design options. Whether you are looking to update your current kitchen or design a new one from scratch, a modular kitchen can provide a practical and stylish solution.</p>
      </div>
        <div className="my-auto md:w-1/3">
          <img src={kitchen2} alt="ceiling" className="object-cover h-80  " />
        </div>
      </div>
    </section>

  )
}

export default Kitchen;