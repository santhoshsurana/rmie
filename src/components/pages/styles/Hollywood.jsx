import React from "react";

import bohemian1 from "../../../assets/images/bohemian1.jpg";
import bohemian2 from "../../../assets/images/bohemian2.jpg";
import bohemian3 from "../../../assets/images/bohemian3.jpg";

const Hollwood = () => {
  return (

    <section className="max-w-6xl mx-auto">
      <h2 className="mb-6 text-3xl p-5 font-bold ">Hollwood Interior<span className="text-teal-900"> Design and Development</span></h2>
      <div className="flex flex-col md:flex-row bg-teal-900">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5 md:w-4/5">
            Hollywood Glam style of interior design is characterized by a luxurious, glamorous, and opulent aesthetic that is inspired by the golden age of Hollywood. This style is all about creating a space that is both elegant and dramatic, with a focus on rich materials, bold colors, and elegant details.  One of the key elements of Hollywood Glam interior design is the use of rich materials such as velvet, silk, and fur. These materials add a sense of luxury and opulence to the space and are often used in a variety of ways, from furniture and decor to window treatments and upholstery. The use of rich materials gives a Hollywood Glam interior a sense of glamour and sophistication.

          </p>
          <p className=" text-base py-5 md:w-4/5">
            Another important aspect of Hollywood Glam interior design is the use of bold colors such as black, silver, and gold. These colors are often used in combination with elegant patterns such as damask, paisley, and geometric shapes. The use of bold colors and patterns gives a Hollywood Glam interior a sense of drama and visual interest. In terms of decor, Hollywood Glam interior design often incorporates a mix of vintage and modern pieces. For example, a vintage chandelier might be paired with a contemporary sofa or a vintage mirror might be hung above a modern fireplace. The key is to create a sense of balance and harmony in the space.

          </p>
        </div>
        <div className="relative my-auto right-20 md:w-1/3">
          <img src={bohemian1} alt="bohemian style living room" className="object-cover  h-96 border-8 border-teal-900 " />
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col bg-teal-900">
        <div className=" md:w-2/3 text-gray-600 font-normal  bg-teal-50">
          <p className="text-base leading-relaxed text-justify p-4 ml-32 md:w-4/5 " >

            In terms of lighting, Hollywood Glam interior design often incorporates a mix of natural and artificial light. For example, large windows or skylights might be used to bring in natural light, while vintage-inspired light fixtures such as chandeliers or sconces can add a sense of charm and character to the space. It's a perfect style for those who want to create a space that is luxurious, elegant and dramatic. Hollywood Glam design is characterized by its opulence, glamour and drama. It's a design style that is perfect for those who want to create a space that is both elegant and visually striking, and it's perfect for anyone who wants to create a space that is reminiscent of the golden age of Hollywood.

          </p>
          <p className="text-base leading-relaxed text-justify p-4 ml-32 md:w-4/5" >

            Additionally, Hollywood Glam style incorporates elements of Art Deco and Hollywood Regency design, which were popular in the 1920s and 1930s. This can be seen in the use of geometric shapes, clean lines, and bold use of color, in addition to the use of luxurious and opulent materials.  Another important aspect of Hollywood Glam design is the use of mirrored surfaces and reflective materials. Mirrors and other reflective surfaces help to create a sense of depth and space in the room, and they also add a touch of glamour and sophistication. They can be used to create a focal point in the room, or they can be used to create an illusion of more space.
          </p>
        </div>
        <div className="relative my-auto left-20 md:w-1/3"><img src={bohemian2} alt="bohemian style living room" className="object-contain border-8 border-teal-900 " /></div>
      </div>
      <div className="flex flex-col md:flex-row h-96 bg-teal-900">
        <div className=" md:w-2/3  font-normal  bg-gray-50">
          <p className=" text-base leading-relaxed text-justify text-gray-600 p-4 md:w-4/5" >
            Accessories and decor are also a key element of Hollywood Glam design. Decorative objects such as vases, sculptures, and candelabras can add a sense of drama and elegance to the space. These objects are often selected for their ornate designs and elegant details. In conclusion, Hollywood Glam style of interior design is a luxurious and glamorous way of decorating your home. It's all about creating a space that is elegant, dramatic, and opulent. It's a style that is inspired by the golden age of Hollywood, and it's perfect for anyone who wants to create a space that is reminiscent of the glamour and sophistication of that era. By incorporating rich materials, bold colors, elegant details, mirrored surfaces, and decorative objects, you can create a Hollywood Glam space that is both luxurious and visually striking.

          </p>
        </div>
        <div className="relative my-auto w-full  right-20 md:w-1/3"><img src={bohemian3} alt="bohemian style living room" className="object-cover border-8 border-teal-900 " /></div>
      </div>
    </section>


















  )
}

export default Hollwood;