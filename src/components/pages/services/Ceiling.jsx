import React from "react";
import bohemian1 from "../../../assets/images/bohemian1.jpg";
import bohemian2  from "../../../assets/images/bohemian2.jpg";


const Ceiling = () => {
  return (


    <section className="max-w-6xl mx-auto">
      <h2 className="mb-6 text-3xl p-5 font-bold ">False Ceiling Work<span className="text-teal-900"> And Tiling as per the Concept</span></h2>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5 ">
          Are you in need of a fresh, updated look for your home or commercial space? Look no further than our false ceiling and tiling services. False ceilings, also known as dropped ceilings or suspended ceilings, are a popular choice for many homeowners and business owners because they can add a stylish and modern touch to a space, while also providing functional benefits such as sound absorption and improved lighting. Our team of experienced designers can help you choose the perfect false ceiling design to suit your needs and preferences.
          </p>
          <p className=" text-base py-5 ">
          In addition to false ceilings, tiling is another great option for adding style and functionality to a space. Whether you're looking for floor tiles, wall tiles, or a combination of both, we have a wide range of materials, colors, and styles to choose from. Our team can help you select the perfect tiles to suit your needs and budget.
          </p>
        </div>
        <div className="my-auto md:w-1/3">
          <img src={bohemian1} alt="ceiling" className="object-cover h-96 w-[600px]  " />
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col ">
        <div className=" md:w-2/3 text-gray-600 font-normal  bg-teal-50">
          <p className="text-base leading-relaxed text-justify p-4  " >
          So if you're ready to update the look of your home or commercial space, consider our false ceiling and tiling services. Our team of expert designers will work with you to create a space that is both stylish and functional, tailored to your specific needs and preferences. Contact us today to learn more and schedule a consultation.

          </p>
        </div>
        <div className=" my-auto  md:w-1/3"><img src={bohemian2} alt="bohemian style living room" className="object-cover h-96 w-[200px " /></div>
      
      </div>
    </section>


  )
}

export default Ceiling;