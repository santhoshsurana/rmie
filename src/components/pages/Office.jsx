import React from "react";
import './services.css';

const Office = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto ">
        <div className="wow fadeInUp bg-white rounded-md" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s' }}>
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="items-stretch justify-between flex">
                <div className="w-full px-14 py-12">
                  <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px] tracking-tight primary_text " data-content="website-headlines">Commercial Spaces and Office <span className="text-teal-900"> Interior Design</span></h2>
                  <p className="mb-9 text-base leading-relaxed text-gray-600 font-normal  " data-content="about-us">Office spaces and commercial spaces are integral parts of any business, and their design can have a significant impact on the productivity and well-being of the people who use them. Whether you're designing a new office space or renovating an existing one, it's important to consider the needs of the people who will be using the space, as well as the overall aesthetic of the space. Here are some tips for designing the interior of your office or commercial space:</p>

                  <p className="mb-2 text-base leading-relaxed text-gray-600 font-normal" data-content="about-us"><span className="font-semibold text-teal-900">Functionality:</span> The layout of the space should be functional and efficient, with a clear flow of traffic and easy access to necessary resources. Consider the types of activities that will take place in the space, and design the layout accordingly.</p>

                  <p className="mb-2 text-base leading-relaxed text-gray-600 font-normal"><span className="font-semibold text-teal-900">Comfort:</span> Comfort is key when it comes to office spaces, as people will be spending a significant amount of time there. Consider factors such as lighting, temperature, and ergonomics to ensure that the space is comfortable for those who use it.</p>

                  <p className="mb-2 text-base leading-relaxed text-gray-600 font-normal"><span className="font-semibold text-teal-900">Branding:</span> The design of the space should reflect the branding and culture of the business. Use colors, textures, and finishes that align with the brand's values and style.</p>

                  <p className="mb-2 text-base leading-relaxed text-gray-600 font-normal"><span className="font-semibold text-teal-900">Technology:</span> In today's digital age, it's important to consider the technology needs of the business and design the space accordingly. This includes ensuring that there is sufficient power and data connectivity, as well as creating spaces for collaborative technology such as videoconferencing.</p>

                  <p className="mb-9 text-base leading-relaxed text-gray-600 font-normal"><span className="font-semibold text-teal-900">Sustainability:</span> Sustainability is becoming increasingly important in the design of commercial spaces. Consider incorporating features such as energy-efficient lighting and heating/cooling systems, as well as materials that are recycled or sustainably sourced.</p>

                  <p className="mb-9 text-base leading-relaxed text-gray-600 font-normal">Overall, the design of an office or commercial space should be functional, comfortable, and reflective of the business's branding and values. By considering the needs of those who will use the space and incorporating sustainable design elements, you can create a space that is not only visually appealing, but also supports the productivity and well-being of its occupants.</p>
                  <a href="#" className="inline-flex items-center justify-center rounded py-3 px-6 text-base font-semibold text-white transition duration-300 ease-in-out bg-teal-800 hover:bg-teal-900 hover:shadow-lg btn-"> Learn More </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}

export default Office;