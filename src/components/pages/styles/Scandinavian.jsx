import React from "react";

import bohemian1 from "../../../assets/images/bohemian1.jpg";
import bohemian2  from "../../../assets/images/bohemian2.jpg";
import bohemian3 from "../../../assets/images/bohemian3.jpg";

const Scandinavian = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="px-10 py-4 mt-20  md:text-3xl text-xl font-bold ">Scandinavian Interior<span className="text-teal-900"> Design and Development</span></h2>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5">
            Scandinavian style of interior design is characterized by a clean, simple, and minimalistic aesthetic that is inspired by the design movement of the Nordic countries (Denmark, Sweden, Norway, Finland, and Iceland). This style is all about creating a space that is visually pleasing, with a focus on clean lines, natural materials, and a sense of warmth.  One of the key elements of Scandinavian interior design is the use of natural materials such as wood, stone, and metal. These materials add a sense of warmth and texture to the space and are often used in a variety of ways, from floors and walls to furniture and decor. The use of natural materials also gives a Scandinavian interior an organic and earthy feel.
          </p>
          <p className=" text-base py-5">
            Another important aspect of Scandinavian interior design is the use of neutral colors such as white, gray, and beige. These colors are often used in combination with natural materials to create a sense of harmony and balance in the space. In addition, Scandinavian design often incorporates natural fibers such as wool and linen, which add a sense of warmth and coziness to the space.
          </p>
        </div>
        <div className="my-auto  md:w-1/3">
          <img src={bohemian1} alt="bohemian style living room" className="object-cover h-[420px]" />
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-teal-50">
          <p className="text-base py-5 " >

            In terms of decor, Scandinavian interior design often incorporates a mix of vintage and modern pieces. For example, a vintage textile might be used as a throw on a modern sofa or a vintage metal sign might be hung above a rustic wood table. The key is to create a sense of balance and harmony in the space.

          </p>
          <p className="text-base py-5" >
            In terms of lighting, Scandinavian interior design often incorporates a mix of natural and artificial light. For example, large windows or skylights might be used to bring in natural light, while vintage-inspired light fixtures such as pendant lamps or table lamps can add a sense of charm and character to the space.

          </p>
        </div>
        <div className="my-auto md:w-1/3"><img src={bohemian2} alt="bohemian style living room" className="object-cover h-[420px] " /></div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5" >
            Overall, Scandinavian interior design is all about creating a space that is visually pleasing, with a focus on clean lines, natural materials, and a sense of warmth. By using neutral colors, natural materials, and a mix of vintage and modern pieces, Scandinavian design creates a space that is both beautiful and practical.

            It's a perfect style for those who love the simplicity, functionality and warmth of the Nordic design. The Scandinavian design is characterized by its simplicity, functionality, and elegance. It's a timeless style that is still very popular today and it's perfect for anyone who wants to create a simple, uncluttered, and visually pleasing space with a sense of warmth.

          </p>
        </div>
        <div className="my-auto md:w-1/3"><img src={bohemian3} alt="bohemian style living room" className="object-cover  h-96 " /></div>
      </div>
    </section>
   
  )
}

export default Scandinavian;