import React from "react";

import bohemian1 from "../../../assets/images/bohemian1.jpg";
import bohemian2 from "../../../assets/images/bohemian2.jpg";
import bohemian3 from "../../../assets/images/bohemian3.jpg";

const Rustic = () => {
  return (

    <section className="max-w-6xl mx-auto">
      <h2 className="mb-6 text-3xl p-5 font-bold ">Rustic  Interior<span className="text-teal-900"> Design and Development</span></h2>
      <div className="flex flex-col md:flex-row bg-teal-900">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5 md:w-4/5">

            Rustic style of interior design is characterized by a warm, cozy, and natural aesthetic that is inspired by the great outdoors. This style is all about creating a space that feels like a cozy cabin in the woods, with a focus on natural materials, earthy colors, and a sense of simplicity.

            One of the key elements of rustic interior design is the use of natural materials such as wood, stone, and metal. These materials add a sense of warmth and texture to the space and are often used in a variety of ways, from floors and walls to furniture and decor. The use of natural materials also gives a rustic interior an organic and earthy feel.
          </p>
          <p className=" text-base py-5 md:w-4/5">

            Another important aspect of rustic interior design is the use of earthy colors such as browns, greens, and grays. These colors are often used in combination with natural materials to create a sense of harmony and balance in the space. In addition, rustic design often incorporates natural fibers such as wool and linen, which add a sense of warmth and coziness to the space.
          </p>
        </div>
        <div className="relative my-auto right-20 md:w-1/3">
          <img src={bohemian1} alt="bohemian style living room" className="object-cover  h-96 border-8 border-teal-900 " />
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col bg-teal-900">
        <div className=" md:w-2/3 text-gray-600 font-normal  bg-teal-50">
          <p className="text-base leading-relaxed text-justify p-4 ml-32 md:w-4/5 " >


            In terms of decor, rustic interior design often incorporates a mix of vintage and modern pieces. For example, an antique quilt might be used as a throw on a modern sofa or a vintage metal sign might be hung above a rustic wood table. The key is to create a sense of balance and harmony in the space.
          </p>
          <p className="text-base leading-relaxed text-justify p-4 ml-32 md:w-4/5" >

            In terms of lighting, rustic interior design often incorporates a mix of natural and artificial light. For example, large windows or skylights might be used to bring in natural light, while vintage-inspired light fixtures such as chandeliers or sconces can add a sense of charm and character to the space.
          </p>
        </div>
        <div className="relative my-auto left-20 md:w-1/3"><img src={bohemian2} alt="bohemian style living room" className="object-contain border-8 border-teal-900 " /></div>
      </div>
      <div className="flex flex-col md:flex-row h-96 bg-teal-900">
        <div className=" md:w-2/3  font-normal  bg-gray-50">
          <p className=" text-base leading-relaxed text-justify text-gray-600 p-4 md:w-4/5" >
            Overall, rustic interior design is all about creating a warm, cozy, and inviting space that feels like a cozy cabin in the woods. By using natural materials, earthy colors, and a mix of vintage and modern pieces, rustic design creates a space that is both beautiful and practical. It's a perfect style for those who love nature, want to create a sense of warmth, and want to add a touch of the outdoors to their home. With the right mix of natural materials, earthy colors, and vintage accents, rustic interior design can be a beautiful addition to any home.

          </p>
        </div>
        <div className="relative my-auto w-full  right-20 md:w-1/3"><img src={bohemian3} alt="bohemian style living room" className="object-cover border-8 border-teal-900 " /></div>
      </div>
    </section>












  )
}

export default Rustic;