import React from "react";
import bohemian1 from "../../../assets/images/bohemian1.jpg";
import bohemian2  from "../../../assets/images/bohemian2.jpg";
import bohemian3 from "../../../assets/images/bohemian3.jpg";

const Bohemian = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="px-10 py-4 mt-20  md:text-3xl text-xl font-bold ">Bohemian Interior<span className="text-teal-900"> Design and Development</span></h2>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5 ">Bohemian style of interior design, also known as "boho" style, is characterized by a free-spirited, eclectic, and colorful aesthetic. This style is all about creating a space that is both visually striking and personal, with a focus on unique pieces, bold patterns, and a mix of different textures and cultures. One of the key elements of Bohemian interior design is the use of bold patterns and colors. This can be seen in the use of unique textiles such as tapestries, kilims, and ikats, as well as in the use of bright colors and patterns in furniture and decor. The focus on bold patterns and colors gives a bohemian interior a sense of vibrancy and energy.</p>
          <p className=" text-base py-5 ">Another important aspect of Bohemian interior design is the use of natural materials such as wood, stone, and metal. These materials add a sense of warmth and texture to the space and are often used in a variety of ways, from floors and walls to furniture and decor. The use of natural materials also gives a bohemian interior an organic and earthy feel. In terms of decor, Bohemian interior design often incorporates a mix of vintage and modern pieces. For example, a vintage kilim might be used as a rug on a modern wood floor or a vintage tapestry might be hung above a modern sofa. The key is to create a sense of balance and harmony in the space.</p>
        </div>
        <div className=" my-auto  md:w-1/3">
          <img src={bohemian1} alt="bohemian style living room" className=" object-cover h-[420px] " />
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-teal-50">
          <p className="text-base leading-relaxed text-justify p-4">In terms of lighting, bohemian interior design often incorporates a mix of natural and artificial light. For example, large windows or skylights might be used to bring in natural light, while unique light fixtures such as lanterns or beaded chandeliers can add a sense of charm and character to the space. Overall, Bohemian interior design is all about creating a space that is both visually striking and personal, with a focus on unique pieces, bold patterns, and a mix of different textures and cultures. By using bold patterns, natural materials, and a mix of vintage and modern pieces, bohemian design creates a space that is both beautiful and practical. It is a perfect style for those who want to incorporate their own personal style and interests into their home.</p>
          <p className="text-base leading-relaxed text-justify p-4" data-content="about-us">One of the hallmarks of bohemian design is the use of global and cultural elements, such as textiles and decor from different parts of the world, that give the space a unique and layered feel. It's a design style that encourages individuality and self-expression, and it's perfect for anyone who wants to create a space that reflects their own personal style and interests. Another key aspect of bohemian design is the use of layering, which can be seen in the use of multiple textures and patterns. This layering creates a sense of depth and visual interest in the space, and it's a great way to incorporate different colors, patterns and textures.</p>
        </div>
        <div className="md:w-1/3">
          <img src={bohemian2} alt="bohemian style living room" className="object-cover h-[470px] " /></div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base leading-relaxed text-justify text-gray-600 p-4 " >The bohemian style also encourages a sense of comfort and relaxation, and spaces are often designed to be cozy and inviting. This can be achieved by incorporating comfortable seating, soft lighting, and warm colors and textures. In conclusion, bohemian style of interior design is a unique, colorful, and eclectic way of decorating your home. It's all about creating a space that reflects your personal style, interests, and culture. It's a style that encourages individuality and self-expression and brings a unique energy to any space. If you're looking to create a space that is both visually striking and personal, bohemian design might be the perfect style for you.</p>
        </div>
        <div className="md:w-1/3"><img src={bohemian3} alt="bohemian style living room" className="object-cover h-72" /></div>
      </div>
    </section>
  )
}

export default Bohemian;