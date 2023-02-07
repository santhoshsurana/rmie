import React from "react";
import traditional1 from "../../../assets/images/traditional1.jpg";
import traditional2  from "../../../assets/images/traditional2.jpg";
import traditional3 from "../../../assets/images/traditional3.webp";

const Traditional = () => {
  return (
      <section className="max-w-6xl mx-auto">
        <h2 className="px-10 py-4 mt-20  md:text-3xl text-xl font-bold ">Traditional Interior<span className="text-teal-900"> Design and Development</span></h2>
        <div className="flex flex-col md:flex-row">
          <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
            <p className=" text-base py-5">
              Traditional style of interior design is characterized by a classic, elegant, and timeless aesthetic that is inspired by the design of the past. This style is all about creating a space that is both beautiful and practical, with a focus on traditional materials, colors, and patterns. One of the key elements of traditional interior design is the use of rich, warm colors such as red, gold, and green. These colors are often used in combination with traditional patterns such as plaids, florals, and stripes. The use of rich colors and patterns gives a traditional interior a sense of elegance and timelessness.
            </p>
            <p className=" text-base py-5">
              Another important aspect of traditional interior design is the use of natural materials such as wood, stone, and metal. These materials add a sense of warmth and texture to the space and are often used in a variety of ways, from floors and walls to furniture and decor. The use of natural materials also gives a traditional interior an organic and earthy feel.
            </p>
          </div>
          <div className="my-auto  md:w-1/3">
            <img src={traditional1} alt="traditional style living room" className="object-cover h-80 w-full" />
          </div>
        </div>
        <div className="flex md:flex-row-reverse flex-col">
          <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-teal-50">
            <p className="text-base py-5 " >
              In terms of decor, traditional interior design often incorporates a mix of vintage and modern pieces. For example, an antique mirror might be hung above a modern sofa or a vintage chandelier might be paired with contemporary art. The key is to create a sense of balance and harmony in the space.
            </p>
            <p className="text-base py-5" >
              In terms of lighting, traditional interior design often incorporates a mix of natural and artificial light. For example, large windows or skylights might be used to bring in natural light, while vintage-inspired light fixtures such as chandeliers or sconces can add a sense of charm and character to the space.
            </p>
          </div>
          <div className="my-auto md:w-1/3"><img src={traditional2} alt="traditional style living room" className="object-cover h-72 w-full" /></div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
            <p className=" text-base py-5" >Overall, traditional interior design is all about creating a space that is both beautiful and practical, with a focus on traditional materials, colors, and patterns. By using rich colors, natural materials, and a mix of vintage and modern pieces, traditional design creates a space that is both elegant and timeless.
              It's a perfect style for those who appreciate the classic elegance of the past and want to incorporate it into their home. Traditional design is not limited to a certain era, it's a style that encompasses many different periods and styles, from colonial to Victorian to Georgian, each with its own unique characteristics. It's a design style that is timeless and elegant, and it's perfect
            </p>
          </div>
          <div className="my-auto md:w-1/3"><img src={traditional3} alt="traditional style living room" className="object-cover  h-64 w-full" /></div>
        </div>
      </section>
      )
}

      export default Traditional;