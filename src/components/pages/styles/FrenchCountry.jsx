import React from "react";

import bohemian1 from "../../../assets/images/bohemian1.jpg";
import bohemian2  from "../../../assets/images/bohemian2.jpg";
import bohemian3 from "../../../assets/images/bohemian3.jpg";
const FreanchCountry = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="mb-6 text-3xl p-5 font-bold ">French Country<span className="text-teal-900"> Design and Development</span></h2>
      <div className="flex flex-col md:flex-row bg-teal-900">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5 md:w-4/5">
            French Country style of interior design is characterized by a rustic, elegant, and timeless aesthetic that is inspired by the design of the French countryside. This style is all about creating a space that is both beautiful and practical, with a focus on natural materials, warm colors, and a sense of history. One of the key elements of French Country interior design is the use of natural materials such as wood, stone, and metal. These materials add a sense of warmth and texture to the space and are often used in a variety of ways, from floors and walls to furniture and decor. The use of natural materials also gives a French Country interior an organic and earthy feel.

          </p>
          <p className=" text-base py-5 md:w-4/5">
            Another important aspect of French Country interior design is the use of warm colors such as yellow, blue, and red. These colors are often used in combination with traditional patterns such as florals, stripes, and checks. The use of warm colors and patterns gives a French Country interior a sense of elegance and timelessness.

          </p>
        </div>
        <div className="relative my-auto right-20 md:w-1/3">
          <img src={bohemian1} alt="bohemian style living room" className="object-cover  h-96 border-8 border-teal-900 " />
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col bg-teal-900">
        <div className=" md:w-2/3 text-gray-600 font-normal  bg-teal-50">
          <p className="text-base leading-relaxed text-justify p-4 ml-32 md:w-4/5 " data-content="about-us">

            In terms of decor, French Country interior design often incorporates a mix of vintage and modern pieces. For example, an antique armoire might be paired with a contemporary chandelier or a vintage tapestry might be hung above a modern sofa. The key is to create a sense of balance and harmony in the space.

          </p>
          <p className="text-base leading-relaxed text-justify p-4 ml-32 md:w-4/5" data-content="about-us">

            In terms of lighting, French Country interior design often incorporates a mix of natural and artificial light. For example, large windows or skylights might be used to bring in natural light, while vintage-inspired light fixtures such as chandeliers or sconces can add a sense of charm and character to the space.
          </p>
        </div>
        <div className="relative my-auto left-20 md:w-1/3"><img src={bohemian2} alt="bohemian style living room" className="object-contain border-8 border-teal-900 " /></div>
      </div>
      <div className="flex flex-col md:flex-row h-96 bg-teal-900">
        <div className=" md:w-2/3  font-normal  bg-gray-50">
          <p className=" text-base leading-relaxed text-justify text-gray-600 p-4 md:w-4/5" >

            Overall, French Country interior design is all about creating a space that is both beautiful and practical, with a focus on natural materials, warm colors, and a sense of history. By using warm colors, natural materials, and a mix of vintage and modern pieces, French Country design creates a space that is both elegant and timeless.
          </p>
            <p className=" text-base leading-relaxed text-justify text-gray-600 p-4 md:w-4/5" >
              It's a perfect style for those who want to create a space that is elegant, rustic, and timeless. French Country design is inspired by the design of the French countryside, it's characterized by its elegance, warmth and simplicity. It's a design style that is timeless and elegant, and it's perfect
            </p>
          </div>
          <div className="relative my-auto w-full  right-20 md:w-1/3"><img src={bohemian3} alt="bohemian style living room" className="object-cover border-8 border-teal-900 " />
          </div>
        </div>
    </section>












  )
}

export default FreanchCountry;