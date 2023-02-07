import React from "react";
import wardrobe1 from "../../../assets/images/wardrobe1.jpg";
import wardrobe2  from "../../../assets/images/wardrobe2.jpg";
import wardrobe3  from "../../../assets/images/wardrobe3.jpg";
const Wardrobe = () => {
  return (
    <section className="max-w-6xl mx-auto">
    <h2 className="px-10 py-4 mt-20  md:text-3xl text-xl font-bold ">Wardrobe and Cupboards <span className="text-teal-900"> Design and Development</span></h2>
    <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
        <p className=" text-base py-5" >As an interior design company, we understand the importance of having functional and stylish storage solutions in the home. That's why we specialize in the design and development of custom wardrobes and cupboards. Our team of experienced designers will work with you to create a wardrobe or cupboard that meets your specific needs and preferences. Whether you need plenty of hanging space for clothes or a mix of shelving and drawers for shoes and other items, we can design a solution that works for you.</p>

        <p className=" text-base py-5" >In terms of aesthetics, we offer a wide range of materials and finishes to choose from, so you can create a wardrobe or cupboard that complements the overall aesthetic of your home. And, for a truly unique touch, we can incorporate custom features such as built-in shelving or drawers, or unique hardware. But it's not just about the look of the unit - we also understand the importance of organization. That's why we offer a variety of organizational tools and options to help you make the most of the storage space. So if you're in need of a functional and stylish storage solution, look no further. Let our team of expert designers create a custom wardrobe or cupboard that fits your needs and enhances the look of your home.</p>
        </div>
        <div className="my-auto md:w-1/3">
          <img src={wardrobe3} alt="ceiling" className="object-cover h-96  " />
        </div>
      </div>
        <div className="flex flex-col md:flex-row-reverse">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-teal-50">
        <p className=" text-base py-5" ><span className="font-semibold text-teal-900">Sustainability:</span> Sustainability is becoming increasingly important in the design of commercial spaces. Consider incorporating features such as energy-efficient lighting and heating/cooling systems, as well as materials that are recycled or sustainably sourced. The design of an office or commercial space should be functional, comfortable, and reflective of the business's branding and values. By considering the needs of those who will use the space and incorporating sustainable design elements, you can create a space that is not only visually appealing, but also supports the productivity and well-being of its occupants.</p>
        </div>
        <div className="my-auto md:w-1/3">
          <img src={wardrobe2} alt="ceiling" className="object-cover h-64  " />
        </div>
      </div>
    </section>
  )
}

export default Wardrobe;