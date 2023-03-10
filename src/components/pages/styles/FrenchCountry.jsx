import React from "react";

import frenchcountry1 from "../../../assets/images/frenchcountry1.jpg";
import frenchcountry2  from "../../../assets/images/frenchcountry2.jpg";
import frenchcountry3 from "../../../assets/images/frenchcountry3.jpg";
const FreanchCountry = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="px-10 py-4 mt-20  md:text-3xl text-xl font-bold ">French Country<span className="text-teal-900"> Design and Development</span></h2>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5">
            French Country style of interior design is characterized by a rustic, elegant, and timeless aesthetic that is inspired by the design of the French countryside. This style is all about creating a space that is both beautiful and practical, with a focus on natural materials, warm colors, and a sense of history. One of the key elements of French Country interior design is the use of natural materials such as wood, stone, and metal. These materials add a sense of warmth and texture to the space and are often used in a variety of ways, from floors and walls to furniture and decor. The use of natural materials also gives a French Country interior an organic and earthy feel.

          </p>
          <p className=" text-base py-5">
            Another important aspect of French Country interior design is the use of warm colors such as yellow, blue, and red. These colors are often used in combination with traditional patterns such as florals, stripes, and checks. The use of warm colors and patterns gives a French Country interior a sense of elegance and timelessness.

          </p>
        </div>
        <div className="my-auto  md:w-1/3">
          <img src={frenchcountry1} alt="frenchcountry style living room" className="object-cover h-96 w-full" />
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-teal-50">
          <p className="text-base py-5 " data-content="about-us">

            In terms of decor, French Country interior design often incorporates a mix of vintage and modern pieces. For example, an antique armoire might be paired with a contemporary chandelier or a vintage tapestry might be hung above a modern sofa. The key is to create a sense of balance and harmony in the space.

          </p>
          <p className="text-base py-5" data-content="about-us">

            In terms of lighting, French Country interior design often incorporates a mix of natural and artificial light. For example, large windows or skylights might be used to bring in natural light, while vintage-inspired light fixtures such as chandeliers or sconces can add a sense of charm and character to the space.
          </p>
        </div>
        <div className="my-auto md:w-1/3"><img src={frenchcountry2} alt="frenchcountry style living room" className="object-cover h-80 w-full" /></div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5" >

            Overall, French Country interior design is all about creating a space that is both beautiful and practical, with a focus on natural materials, warm colors, and a sense of history. By using warm colors, natural materials, and a mix of vintage and modern pieces, French Country design creates a space that is both elegant and timeless.
          </p>
            <p className=" text-base py-5" >
              It's a perfect style for those who want to create a space that is elegant, rustic, and timeless. French Country design is inspired by the design of the French countryside, it's characterized by its elegance, warmth and simplicity. It's a design style that is timeless and elegant, and it's perfect
            </p>
          </div>
          <div className="my-auto md:w-1/3"><img src={frenchcountry3} alt="frenchcountry style living room" className="object-cover  h-72 w-full" />
          </div>
        </div>
    </section>












  )
}

export default FreanchCountry;