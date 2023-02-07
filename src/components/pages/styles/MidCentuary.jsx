import React from "react";

import midcentury1 from "../../../assets/images/midcentury1.jpg";
import midcentury2 from "../../../assets/images/midcentury2.jpg";
import midcentury3 from "../../../assets/images/midcentury3.jpg";

const MidCentuary = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="px-10 py-4 mt-20  md:text-3xl text-xl font-bold ">MidCentuary Interior<span className="text-teal-900"> Design and Development</span></h2>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5">
            Mid-Century Modern style of interior design is characterized by a clean, simple, and functional aesthetic that is inspired by the design movement of the 1950s and 1960s. This style is all about creating a space that is visually striking, with a focus on clean lines, minimalism, and a mix of vintage and modern elements. One of the key elements of Mid-Century Modern interior design is the use of clean lines and geometric shapes. This can be seen in the use of simple, unadorned furniture, as well as in the use of lines and angles in the architecture of the space. The focus on simplicity and functionality is also reflected in the use of minimal decor, with the emphasis on a few key pieces that make a strong statement.
          </p>
          <p className=" text-base py-5">
            Another important aspect of Mid-Century Modern interior design is the use of neutral colors, such as white, gray, and black. These colors create a sense of simplicity and open space, making the room feel larger and more airy. In addition, Mid-Century Modern design often incorporates natural materials such as wood, stone, and metal, which add a sense of warmth and texture to the space, while still maintaining the clean, minimalist aesthetic.
          </p>
        </div>
        <div className="my-auto  md:w-1/3">
          <img src={midcentury1} alt="midcentury style living room" className="object-cover w-full h-96" />
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-teal-50">
          <p className="text-base py-5 " >
            In terms of decor, Mid-Century Modern interior design often incorporates a mix of vintage and modern pieces. For example, a vintage Danish modern sofa might be paired with a contemporary art piece. The key is to create a sense of balance and harmony in the space.
          </p>
          <p className="text-base py-5" >
            In terms of lighting, Mid-Century Modern interior design often incorporates a mix of natural and artificial light. For example, large windows or skylights might be used to bring in natural light, while vintage-inspired light fixtures such as sputnik chandeliers or atomic table lamps can add a sense of charm and character to the space.
          </p>
        </div>
        <div className="my-auto md:w-1/3"><img src={midcentury2} alt="midcentury style living room" className="object-cover w-full h-60" /></div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5" >
            Overall, Mid-Century Modern interior design is all about creating a space that is visually striking, with a focus on clean lines, minimalism, and a mix of vintage and modern elements. By using a minimal color palette, natural materials, and clean lines, Mid-Century Modern design creates a space that is both beautiful and practical.
            It's a perfect style for those who love the aesthetic of the mid-century design movement and want to incorporate it into their home. Mid-Century Modern design is characterized by its simplicity, functionality and elegance. It's a timeless style that is still very popular today, and it's perfect for anyone who wants to create a simple, uncluttered, and visually pleasing space.
          </p>
        </div>
        <div className="my-auto md:w-1/3"><img src={midcentury3} alt="midcentury style living room" className="object-cover  w-full h-60" /></div>
      </div>
    </section>










  )
}

export default MidCentuary;