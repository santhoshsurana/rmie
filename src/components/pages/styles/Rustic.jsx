import React from "react";

import rustic1 from "../../../assets/images/rustic1.webp";
import rustic2 from "../../../assets/images/rustic2.webp";
import rustic3 from "../../../assets/images/rustic3.webp";

const Rustic = () => {
  return (

    <section className="max-w-6xl mx-auto">
      <h2 className="px-10 py-4 mt-20  md:text-3xl text-xl font-bold ">Rustic  Interior<span className="text-teal-900"> Design and Development</span></h2>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5">

            Rustic style of interior design is characterized by a warm, cozy, and natural aesthetic that is inspired by the great outdoors. This style is all about creating a space that feels like a cozy cabin in the woods, with a focus on natural materials, earthy colors, and a sense of simplicity.

            One of the key elements of rustic interior design is the use of natural materials such as wood, stone, and metal. These materials add a sense of warmth and texture to the space and are often used in a variety of ways, from floors and walls to furniture and decor. The use of natural materials also gives a rustic interior an organic and earthy feel.
          </p>
          <p className=" text-base py-5">

            Another important aspect of rustic interior design is the use of earthy colors such as browns, greens, and grays. These colors are often used in combination with natural materials to create a sense of harmony and balance in the space. In addition, rustic design often incorporates natural fibers such as wool and linen, which add a sense of warmth and coziness to the space.
          </p>
        </div>
        <div className="my-auto  md:w-1/3">
          <img src={rustic1} alt="rustic style living room" className="object-cover h-96 w-full" />
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-teal-50">
          <p className="text-base py-5 " >


            In terms of decor, rustic interior design often incorporates a mix of vintage and modern pieces. For example, an antique quilt might be used as a throw on a modern sofa or a vintage metal sign might be hung above a rustic wood table. The key is to create a sense of balance and harmony in the space.
          </p>
          <p className="text-base py-5" >

            In terms of lighting, rustic interior design often incorporates a mix of natural and artificial light. For example, large windows or skylights might be used to bring in natural light, while vintage-inspired light fixtures such as chandeliers or sconces can add a sense of charm and character to the space.
          </p>
        </div>
        <div className="my-auto md:w-1/3"><img src={rustic2} alt="rustic style living room" className="object-cover h-68 w-full " /></div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5" >
            Overall, rustic interior design is all about creating a warm, cozy, and inviting space that feels like a cozy cabin in the woods. By using natural materials, earthy colors, and a mix of vintage and modern pieces, rustic design creates a space that is both beautiful and practical. It's a perfect style for those who love nature, want to create a sense of warmth, and want to add a touch of the outdoors to their home. With the right mix of natural materials, earthy colors, and vintage accents, rustic interior design can be a beautiful addition to any home.

          </p>
        </div>
        <div className="my-auto md:w-1/3"><img src={rustic3} alt="rustic style living room" className="object-cover  h-60 w-full " /></div>
      </div>
    </section>












  )
}

export default Rustic;