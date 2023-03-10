import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './blog.css';

const Blog = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="px-5 py-12 text-gray-600 text-justify">
        <div className="py-8 flex  flex-wrap md:flex-nowrap">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="font-semibold title-font text-teal-900">
              DESIGN STYLES
            </span>
            <span className="mt-1 text-gray-500 text-sm">28 Jan 2023</span>
          </div>
          <div className="md:flex-grow">
            <h2 className="text-2xl font-medium text-teal-900 title-font mb-2">
              5 Elements of Scandinavian Design
            </h2>
            <p className="leading-relaxed">
              Scandinavian design, also known as Nordic design, is a minimalistic and functional style that originated in the 1950s. It is characterized by a focus on simplicity, natural materials, and a neutral color palette. Some key elements of Scandinavian design include:</p>

            <ul >
              <li className="py-2"><span className="text-teal-900 font-semibold">Natural light:</span> Scandinavian design values natural light and incorporates large windows and light-colored walls to maximize the amount of light in a space.</li>
              <li className="py-2"><span className="text-teal-900 font-semibold">Minimalism:</span> This style values simplicity and functionality, so you won't find any unnecessary decorations or clutter in a Scandinavian-designed space.</li>
              <li className="py-2"><span className="text-teal-900 font-semibold">Natural materials:</span> Scandinavian design incorporates natural materials such as wood, leather, and stone to bring a sense of warmth and texture to a space.</li>
              <li className="py-2"><span className="text-teal-900 font-semibold">Neutral color palette:</span> The color palette of Scandinavian design is predominantly neutral, with whites, grays, and blacks being the most common. Accents of color are often added through artwork, textiles, and accessories.</li>
              <li className="py-2"><span className="text-teal-900 font-semibold">Functionality:</span> Scandinavian design prioritizes functionality over form, so every element in a space serves a purpose.</li>
            </ul>

            <Link className="text-teal-900 inline-flex items-center mt-4">
              Learn More
              <FontAwesomeIcon icon={faArrowRight} className='ml-2' size='lg'></FontAwesomeIcon>
            </Link>
          </div>
        </div>
        <div className="py-8 flex flex-wrap md:flex-nowrap">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="font-semibold title-font text-teal-900">
              DESIGN STYLES
            </span>
            <span className="mt-1 text-gray-500 text-sm">17 Jan 2023</span>
          </div>
          <div className="md:flex-grow">
            <h2 className="text-2xl font-medium text-teal-900 title-font mb-2">
              How to Incorporate Mid-Century Modern Style into Your Home
            </h2>
            <p className="leading-relaxed">
              Mid-century modern style, which originated in the 1950s, is known for its clean lines, organic shapes, and use of natural materials. If you're looking to incorporate this style into your home, here are a few tips:

              Go for clean lines: Mid-century modern style is all about clean, geometric lines. Choose furniture with tapered legs and straight, simple lines.

              Incorporate natural materials: Mid-century modern style often incorporates natural materials such as wood, leather, and stone. Use these materials in your furniture and accessories to bring a sense of warmth to your space.

              Use pops of color: While the color palette of mid-century modern style is predominantly neutral, pops of bold color can add a fun and playful touch. Consider adding a colorful piece of artwork or a brightly colored piece of furniture to make a statement.

              Embrace organic shapes: Mid-century modern style is known for its use of organic, curving shapes. Look for furniture and accessories with rounded edges and curved lines to add a sense of movement to your space.
            </p>
            <Link className="text-teal-900 inline-flex items-center mt-4">
              Learn More
              <FontAwesomeIcon icon={faArrowRight} className='ml-2' size='lg'></FontAwesomeIcon>
            </Link>
          </div>
        </div>
        <div className="py-8 flex flex-wrap md:flex-nowrap">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="font-semibold title-font text-teal-900">
              DESIGN STYLES
            </span>
            <span className="text-sm text-gray-500">12 Jan 2023</span>
          </div>
          <div className="md:flex-grow">
            <h2 className="text-2xl font-medium text-teal-900 title-font mb-2">
              The Glamour of Art Deco Design</h2>
            <p className="leading-relaxed">Art deco design, which originated in the 1920s, is a glamorous and opulent style that is characterized by its bold geometric shapes, luxurious materials, and strong color palette. If you're looking to bring a touch of art deco glamour to your home, here are a few key elements to consider:</p>
            <ul>
              <li className="py-2"><span className="text-teal-900 font-semibold">Bold geometric shapes:</span> Art deco design is known for its use of bold, geometric shapes. Look for furniture and accessories with angular lines and geometric patterns.</li>
              <li className="py-2"><span className="text-teal-900 font-semibold">Luxurious materials:</span> Art deco design incorporates luxurious materials such as marble, glass, and mirrored surfaces to add a sense of opulence to a space.</li>
              <li className="py-2"><span className="text-teal-900 font-semibold">Strong color palette:</span> The color palette of art deco design is bold and vibrant, with strong accents of color such as gold, silver, and black.</li>
              <li className="py-2"><span className="text-teal-900 font-semibold">Decorative details:</span> Art deco design is all about the details. Look for furniture and accessories with intricate patterns and decorative details to add a sense of drama to your space.</li>
              <li className="py-2"><span className="text-teal-900 font-semibold">Mix and match styles:</span> Art deco design often incorporates elements from other styles, such as classical and modern. Mix and match different styles to create a unique and eclectic look.</li>
            </ul>
            <Link className="text-teal-900 inline-flex items-center mt-4">
              Learn More
              <FontAwesomeIcon icon={faArrowRight} className='ml-2' size='lg'></FontAwesomeIcon>
            </Link>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Blog