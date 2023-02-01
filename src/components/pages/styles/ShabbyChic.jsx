import React from "react";

import bohemian1 from "../../../assets/images/bohemian1.jpg";
import bohemian2 from "../../../assets/images/bohemian2.jpg";
import bohemian3 from "../../../assets/images/bohemian3.jpg";

const ShabbyChic = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="px-10 py-4 mt-20  md:text-3xl text-xl font-bold ">ShabbyChic Interior<span className="text-teal-900"> Design and Development</span></h2>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5">
            Shabby chic is a style of interior design that is characterized by a vintage, romantic, and slightly worn look. This style is all about creating a cozy, comfortable, and inviting space that feels like a well-loved home.

          </p>
          <p className=" text-base py-5">
            One of the key elements of shabby chic design is the use of vintage and antique pieces. These pieces add a sense of history and character to the space and can include anything from old chandeliers and cand sticks to vintage linens and lace. The key is to mix and match these pieces in a way that feels effortless and natural.

          </p>
        </div>
        <div className="my-auto  md:w-1/3">
          <img src={bohemian1} alt="bohemian style living room" className="object-cover h-[420px]" />
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-teal-50">
          <p className="text-base py-5 " >

            Another important aspect of shabby chic design is the use of soft, muted colors. This can include pale pinks, blues, greens, and whites. These colors are often used in combination with natural materials such as wood and wicker, which add a sense of warmth and texture to the space.

          </p>
          <p className="text-base py-5" >
            In terms of decor, shabby chic design often incorporates a mix of vintage and modern pieces. For example, an antique mirror might be hung above a modern sofa or a vintage chandelier might be paired with contemporary art. The key is to create a sense of balance and harmony in the space.

            In terms of lighting, shabby chic design often incorporates a mix of natural and artificial light. For example, large windows or skylights might be used to bring in natural light, while vintage-inspired light fixtures such as chandeliers or sconces can add a sense of charm and character to the space.

          </p>
        </div>
        <div className="my-auto md:w-1/3"><img src={bohemian2} alt="bohemian style living room" className="object-cover h-[420px] " /></div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5" >
            Overall, shabby chic is a style of interior design that is all about creating a warm, inviting, and comfortable space. By mixing vintage and antique pieces with soft colors and natural materials, shabby chic design creates a space that feels like a well-loved home. It's important to remember that shabby chic doesn't mean it's old, worn out or dirty, it means it has a vintage charm and the "worn" look is usually achieved through distressing techniques. It's a perfect style for those who appreciate vintage charm, but don't want to go too far with it and want to keep it comfortable and practical. With the right mix of vintage and modern, shabby chic style can be a beautiful addition to any home.

          </p>
        </div>
        <div className="my-auto md:w-1/3"><img src={bohemian3} alt="bohemian style living room" className="object-cover  h-96 " /></div>
      </div>
    </section>










  )
}

export default ShabbyChic;