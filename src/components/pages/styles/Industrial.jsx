import React from "react";

import bohemian1 from "../../../assets/images/bohemian1.jpg";
import bohemian2 from "../../../assets/images/bohemian2.jpg";
import bohemian3 from "../../../assets/images/bohemian3.jpg";

const Industrial = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="mb-6 text-3xl p-5 font-bold ">Industrial Interior<span className="text-teal-900"> Design and Development</span></h2>
      <div className="flex flex-col md:flex-row bg-teal-900">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5 md:w-4/5">
            Industrial style of interior design is characterized by a raw, urban, and industrial aesthetic. This style is all about creating a space that is both functional and visually striking, with a focus on raw materials, industrial elements, and a sense of history. One of the key elements of industrial interior design is the use of raw materials such as exposed brick, concrete, and metal. These materials are often left in their natural state, giving the space a sense of history and character. The use of raw materials also gives an industrial interior an organic and raw feel.
          </p>
          <p className=" text-base py-5 md:w-4/5">
            
            Another important aspect of industrial interior design is the use of neutral colors, such as black, gray, and white. These colors are often used in combination with natural materials to create a sense of harmony and balance in the space. In addition, industrial design often incorporates vintage and antique pieces, such as vintage lighting fixtures and industrial machinery, which add a sense of history and character to the space.
          </p>
        </div>
        <div className="relative my-auto right-20 md:w-1/3">
          <img src={bohemian1} alt="bohemian style living room" className="object-cover  h-96 border-8 border-teal-900 " />
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col bg-teal-900">
        <div className=" md:w-2/3 text-gray-600 font-normal  bg-teal-50">
          <p className="text-base leading-relaxed text-justify p-4 ml-32 md:w-4/5" >
            In terms of decor, industrial interior design often incorporates a mix of vintage and modern pieces. For example, a vintage factory cart might be used as a coffee table or a vintage metal sign might be hung above a modern sofa. The key is to create a sense of balance and harmony in the space. In terms of lighting, industrial interior design often incorporates a mix of natural and artificial light. For example, large windows or skylights might be used to bring in natural light, while vintage-inspired light fixtures such as bare bulb pendants or exposed filament bulbs can add a sense of charm and character to the space.
          </p>
        </div>
        <div className="relative my-auto left-20 md:w-1/3"><img src={bohemian2} alt="bohemian style living room" className="object-contain border-8 border-teal-900 " /></div>
      </div>
      <div className="flex flex-col md:flex-row h-96 bg-teal-900">
        <div className=" md:w-2/3  font-normal  bg-gray-50">
          <p className=" text-base leading-relaxed text-justify text-gray-600 p-4 md:w-4/5" >
            Overall, industrial interior design is all about creating a space that is both functional and visually striking. By using raw materials, neutral colors, and a mix of vintage and modern pieces, industrial design creates a space that is both beautiful and practical. It's a perfect style for those who appreciate the history and character of industrial elements, and want to incorporate them into their home. Industrial design is not just about mimicking a factory or a warehouse, it's about creating a space that feels authentic, raw and unique. It's a style that is always pushing the boundaries of design and constantly seeking new ways to improve the functionality and aesthetic of a space.
          </p>
        </div>
        <div className="relative my-auto w-full  right-20 md:w-1/3"><img src={bohemian3} alt="bohemian style living room" className="object-cover border-8 border-teal-900 " /></div>
      </div>
    </section>








  )
}

export default Industrial;