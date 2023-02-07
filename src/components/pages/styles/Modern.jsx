import React from "react";

import modern1 from "../../../assets/images/modern1.jpg";
import modern2 from "../../../assets/images/modern2.jpg";
import modern3 from "../../../assets/images/modern3.webp";

const Modern = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="px-10 py-4 mt-20  md:text-3xl text-xl font-bold ">Modern  Interior<span className="text-teal-900"> Design and Development</span></h2>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5">
            Modern style of interior design is characterized by clean lines, minimalism, and a focus on functionality. This style is heavily influenced by the Bauhaus movement, which emphasized the use of industrial materials and a minimal aesthetic.
          </p>
          <p className=" text-base py-5">
            One of the key elements of modern interior design is the use of neutral colors, such as white, gray, and black. These colors create a sense of simplicity and open space, making the room feel larger and more airy. In addition, modern design often incorporates natural materials such as wood, stone, and metal. These materials add a sense of warmth and texture to the space, while still maintaining the clean, minimalist aesthetic.
          </p>
        </div>
        <div className="my-auto  md:w-1/3">
          <img src={modern1} alt="modern style living room" className="object-cover h-72 w-full" />
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-teal-50">
          <p className="text-base py-5 " >

            Another important aspect of modern interior design is the use of clean lines and geometric shapes. This can be seen in the use of simple, unadorned furniture, as well as in the use of lines and angles in the architecture of the space. The focus on simplicity and functionality is also reflected in the use of minimal decor, with the emphasis on a few key pieces that make a strong statement.

          </p>
          <p className="text-base py-5" >
            In terms of lighting, modern interior design typically incorporates a mix of natural and artificial light. Large windows and skylights are often used to bring in natural light, while strategically placed task lighting and accent lighting are used to create a sense of depth and drama.

          </p>
        </div>
        <div className="my-auto md:w-1/3"><img src={modern2} alt="modern style living room" className="object-cover h-64 w-full" /></div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5" >

            Overall, modern interior design is all about creating a space that is clean, functional, and visually striking. By using a minimal color palette, natural materials, and clean lines, modern design creates a space that is both beautiful and practical.

            However, it's important to note that Modern design is not only about minimalism, there are a lot of sub-types of modern interior design like Mid-Century Modern, Industrial Modern, Scandinavian Modern, and so on, each with their own take on the style.  It's up to the designer or homeowner to mix and match the elements that best suit their taste and lifestyle.
          </p>
        </div>
        <div className="my-auto md:w-1/3"><img src={modern3} alt="modern style living room" className="object-cover  h-64 w-full" /></div>
      </div>
    </section>









  )
}

export default Modern;