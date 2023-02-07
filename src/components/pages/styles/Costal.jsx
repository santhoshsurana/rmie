import React from "react";
import coastal1 from "../../../assets/images/coastal.webp";
import coastal2 from "../../../assets/images/coastal2.jpg";

const Coastal = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="px-10 py-4 mt-20  md:text-3xl text-xl font-bold ">Coastal Interior<span className="text-teal-900"> Design and Development</span></h2>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5">
            Coastal or Hamptons style of interior design is characterized by a relaxed, light and airy aesthetic that is inspired by the beach and coastal lifestyle. This style is all about creating a space that is both comfortable and inviting, with a focus on natural materials, light colors, and a sense of coastal living. One of the key elements of Coastal/Hamptons interior design is the use of natural materials such as wood, wicker, and stone. These materials add a sense of warmth and texture to the space and are often used in a variety of ways, from floors and walls to furniture and decor. The use of natural materials also gives a coastal interior an organic and earthy feel.</p>

          <p className=" text-base py-5">Another important aspect of Coastal/Hamptons interior design is the use of light colors such as white, beige, and blue. These colors are often used in combination with natural patterns such as stripes, plaids, and florals. The use of light colors and patterns gives a coastal interior a sense of lightness and airiness. In terms of decor, Coastal/Hamptons interior design often incorporates a mix of vintage and modern pieces. For example, a vintage mirror might be hung above a modern sofa or a vintage chandelier might be paired with contemporary art. The key is to create a sense of balance and harmony in the space.</p>
        </div>
        <div className="my-auto md:w-1/3">
          <img src={coastal1} alt="coastal style living room" className="object-cover  h-96 " />
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col bg-teal-900">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-teal-50">
          <p className=" text-base py-5">In terms of lighting, Coastal/Hamptons interior design often incorporates a mix of natural and artificial light. For example, large windows or skylights might be used to bring in natural light, while vintage-inspired light fixtures such as chandeliers or sconces can add a sense of charm and character to the space.
          </p>
          <p className=" text-base py-5">Overall, Coastal/Hamptons interior design is all about creating a space that is both comfortable and inviting, with a focus on natural materials, light colors, and a sense of coastal living. By using light colors, natural materials, and a mix of vintage and modern pieces, Coastal/Hamptons design creates a space that is both beautiful and practical. It's a perfect style for those who want to create a space that is relaxed, light, and airy and that reflects the beach and coastal lifestyle. Coastal/Hamptons style is characterized by its breezy atmosphere, it's a style that is perfect for those who want to create a space that is comfortable, inviting, and evocative of the coast.
          </p>
        </div>
        <div className="my-auto md:w-1/3"><img src={coastal2} alt="coastal style living room" className="object-cover  h-96 " /></div>
      </div>
    </section>
  )
}

export default Coastal;