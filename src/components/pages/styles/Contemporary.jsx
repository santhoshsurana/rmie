import React from "react";
import bohemian1 from "../../../assets/images/bohemian1.jpg";

const Contemporary = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="mb-6 text-3xl p-5 font-bold">Contemporary Interior<span className="text-teal-900"> Design and Development</span></h2>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3 px-10 leading-relaxed text-justify text-gray-600 font-normal bg-gray-50">
          <p className=" text-base p-5 " >Contemporary style of interior design is characterized by a sleek, modern, and minimalist aesthetic that is constantly evolving with the times. This style is all about creating a space that is clean, functional, and visually striking, with a focus on simplicity and functionality. One of the key elements of contemporary interior design is the use of clean lines and geometric shapes. This can be seen in the use of simple, unadorned furniture, as well as in the use of lines and angles in the architecture of the space. The focus on simplicity and functionality is also reflected in the use of minimal decor, with the emphasis on a few key pieces that make a strong statement. </p>
          <p className=" text-base p-5 " >Another important aspect of contemporary interior design is the use of neutral colors, such as white, gray, and black. These colors create a sense of simplicity and open space, making the room feel larger and more airy. In addition, contemporary design often incorporates industrial materials such as concrete, steel, and glass, which add a sense of strength and modernity to the space.</p>
        </div>
        <div className="md:w-1/3">
          <img src={bohemian1} alt="bohemian style living room" className="object-cover h-96 " />
        </div>
      </div>
      <div className="flex md:flex-row-reverse flex-col">
      <div className=" md:w-2/3 px-10 leading-relaxed text-justify text-gray-600 font-normal bg-teal-50">
        <p className=" text-base p-5 " > In terms of decor, contemporary interior design often incorporates a mix of vintage and modern pieces. For example, an antique mirror might be hung above a modern sofa or a vintage chandelier might be paired with contemporary art. The key is to create a sense of balance and harmony in the space. In terms of lighting, contemporary interior design typically incorporates a mix of natural and artificial light. Large windows and skylights are often used to bring in natural light, while strategically placed task lighting and accent lighting are used to create a sense of depth and drama.</p>
        <p className=" text-base p-5 " >Overall, contemporary interior design is all about creating a space that is clean, functional, and visually striking. By using a minimal color palette, industrial materials, and clean lines, contemporary design creates a space that is both beautiful and practical. It's a perfect style for those who love minimalism, modernity and want to keep their space clean and uncluttered. Contemporary design is a constantly evolving and adapting to new trends and technology. It's a style that is always pushing the boundaries of design and constantly seeking new ways to improve the functionality and aesthetic of a space.</p>
        </div>
        <div className="md:w-1/3">
          <img src={bohemian1} alt="bohemian style living room" className="object-cover  h-[420px]" />
        </div>
      </div>
    </section>
  )
}

export default Contemporary;