import React from "react";

import bohemian1 from "../../../assets/images/bohemian1.jpg";
import bohemian2 from "../../../assets/images/bohemian2.jpg";
import bohemian3 from "../../../assets/images/bohemian3.jpg";

const Modern = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="mb-6 text-3xl p-5 font-bold ">Modern  Interior<span className="text-teal-900"> Design and Development</span></h2>
      <div className="flex flex-col md:flex-row bg-teal-900">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5 md:w-4/5">
            Modern style of interior design is characterized by clean lines, minimalism, and a focus on functionality. This style is heavily influenced by the Bauhaus movement, which emphasized the use of industrial materials and a minimal aesthetic.


          </p>
          <p className=" text-base py-5 md:w-4/5">

            One of the key elements of modern interior design is the use of neutral colors, such as white, gray, and black. These colors create a sense of simplicity and open space, making the room feel larger and more airy. In addition, modern design often incorporates natural materials such as wood, stone, and metal. These materials add a sense of warmth and texture to the space, while still maintaining the clean, minimalist aesthetic.

          </p>
        </div>
        <div className="relative my-auto right-20 md:w-1/3">
          <img src={bohemian1} alt="bohemian style living room" className="object-cover  h-96 border-8 border-teal-900 " />
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col bg-teal-900">
        <div className=" md:w-2/3 text-gray-600 font-normal  bg-teal-50">
          <p className="text-base leading-relaxed text-justify p-4 ml-32 md:w-4/5 " >

            Another important aspect of modern interior design is the use of clean lines and geometric shapes. This can be seen in the use of simple, unadorned furniture, as well as in the use of lines and angles in the architecture of the space. The focus on simplicity and functionality is also reflected in the use of minimal decor, with the emphasis on a few key pieces that make a strong statement.

          </p>
          <p className="text-base leading-relaxed text-justify p-4 ml-32 md:w-4/5" >
            In terms of lighting, modern interior design typically incorporates a mix of natural and artificial light. Large windows and skylights are often used to bring in natural light, while strategically placed task lighting and accent lighting are used to create a sense of depth and drama.

          </p>
        </div>
        <div className="relative my-auto left-20 md:w-1/3"><img src={bohemian2} alt="bohemian style living room" className="object-contain border-8 border-teal-900 " /></div>
      </div>
      <div className="flex flex-col md:flex-row h-96 bg-teal-900">
        <div className=" md:w-2/3  font-normal  bg-gray-50">
          <p className=" text-base leading-relaxed text-justify text-gray-600 p-4 md:w-4/5" >

            Overall, modern interior design is all about creating a space that is clean, functional, and visually striking. By using a minimal color palette, natural materials, and clean lines, modern design creates a space that is both beautiful and practical.

            However, it's important to note that Modern design is not only about minimalism, there are a lot of sub-types of modern interior design like Mid-Century Modern, Industrial Modern, Scandinavian Modern, and so on, each with their own take on the style.  It's up to the designer or homeowner to mix and match the elements that best suit their taste and lifestyle.
          </p>
        </div>
        <div className="relative my-auto w-full  right-20 md:w-1/3"><img src={bohemian3} alt="bohemian style living room" className="object-cover border-8 border-teal-900 " /></div>
      </div>
    </section>









  )
}

export default Modern;