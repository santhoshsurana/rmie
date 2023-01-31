import React from "react";

import bohemian1 from "../../../assets/images/bohemian1.jpg";
import bohemian2 from "../../../assets/images/bohemian2.jpg";
import bohemian3 from "../../../assets/images/bohemian3.jpg";

const Minimalist = () => {
  return (

    <section className="max-w-6xl mx-auto">
      <h2 className="mb-6 text-3xl p-5 font-bold ">Minimalist Interior<span className="text-teal-900"> Design and Development</span></h2>
      <div className="flex flex-col md:flex-row bg-teal-900">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5 md:w-4/5">

            Minimalist interior design is characterized by a clean, simple, and uncluttered aesthetic. This style is all about creating a space that is functional, efficient and visually pleasing. Minimalism is a design philosophy that focuses on the essentials, getting rid of the unnecessary and keeping only what is needed.

          </p>
          <p className=" text-base py-5 md:w-4/5">

            One of the key elements of minimalist interior design is the use of minimal decor. This can be seen in the use of simple, unadorned furniture, as well as in the use of minimal accessories and decor. The focus on simplicity and functionality is also reflected in the use of minimal decor, with the emphasis on a few key pieces that make a strong statement.

            Another important aspect of minimalist interior design is the use of neutral colors, such as white, gray, and black. These colors create a sense of simplicity and open space, making the room feel larger and more airy. In addition, minimalist design often incorporates natural materials such as wood, stone, and metal, which add a sense of warmth and texture to the space, while still maintaining the clean, minimalist aesthetic.
          </p>
        </div>
        <div className="relative my-auto right-20 md:w-1/3">
          <img src={bohemian1} alt="bohemian style living room" className="object-cover  h-96 border-8 border-teal-900 " />
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col bg-teal-900">
        <div className=" md:w-2/3 text-gray-600 font-normal  bg-teal-50">
          <p className="text-base leading-relaxed text-justify p-4 ml-32 md:w-4/5 " >

            In terms of lighting, minimalist interior design typically incorporates a mix of natural and artificial light. Large windows and skylights are often used to bring in natural light, while strategically placed task lighting and accent lighting are used to create a sense of depth and drama.

          </p>
          <p className="text-base leading-relaxed text-justify p-4 ml-32 md:w-4/5" >

            Minimalist design is all about creating a space that is clean, functional, and visually pleasing. It emphasizes on the essentials and getting rid of the unnecessary. It's a perfect style for those who want to keep their space uncluttered, simple, and with a sense of order. Minimalist design is not about getting rid of everything, it's about being intentional about what you keep and how you arrange it.
          </p>
        </div>
        <div className="relative my-auto left-20 md:w-1/3"><img src={bohemian2} alt="bohemian style living room" className="object-contain border-8 border-teal-900 " /></div>
      </div>
      <div className="flex flex-col md:flex-row h-96 bg-teal-900">
        <div className=" md:w-2/3  font-normal  bg-gray-50">
          <p className=" text-base leading-relaxed text-justify text-gray-600 p-4 md:w-4/5" >
            It's a design philosophy that encourages to focus on the essentials and that less is more. Minimalist interior design is a great way to create a peaceful and serene environment and it's also a great way to reduce clutter and simplify your life. It's a design style that is timeless and elegant, and it's perfect for anyone who wants to create a simple, uncluttered, and visually pleasing space.

          </p>
        </div>
        <div className="relative my-auto w-full  right-20 md:w-1/3"><img src={bohemian3} alt="bohemian style living room" className="object-cover border-8 border-teal-900 " /></div>
      </div>
    </section>











  )
}

export default Minimalist;