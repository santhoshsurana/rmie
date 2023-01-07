import React from "react";
import './services.css';

const Kitchen = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto ">
        <div className="wow fadeInUp bg-white rounded-md" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s' }}>
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="items-stretch justify-between flex">
                <div className="w-full px-14 py-12">
                  <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px] tracking-tight primary_text " data-content="website-headlines">Modular Kitchen Interior<span className="text-teal-900"> Design and Development</span></h2>
                  <p className="mb-9 text-base leading-relaxed text-gray-600 font-normal  " data-content="about-us">Modular kitchen design is a popular choice for many homeowners because it allows for flexibility and customization in the layout and design of the kitchen. A modular kitchen is made up of pre-designed units, such as cabinets, countertops, and appliances, that can be assembled in a variety of configurations to suit the specific needs and preferences of the homeowner.</p>

                  <p className="mb-9 text-base leading-relaxed text-gray-600 font-normal" data-content="about-us">One of the main benefits of modular kitchen design is that it allows for a great deal of flexibility. The individual units can be rearranged or added to, making it easy to change the layout of the kitchen as the needs of the homeowner evolve. This is especially useful for those who may want to make changes to the kitchen over time, such as adding a kitchen island or updating the appliances.</p>

                  <p className="mb-9 text-base leading-relaxed text-gray-600 font-normal">Another advantage of modular kitchen design is that it can be tailored to fit the specific needs and preferences of the homeowner. For example, if you love to cook and entertain, you can design a kitchen with plenty of counter space and storage for all of your cooking tools and ingredients. Or, if you have a small space, you can choose compact, space-saving units that make the most of the available area.</p>

                  <p className="mb-9 text-base leading-relaxed text-gray-600 font-normal">In terms of aesthetics, modular kitchen design offers a wide range of options. The individual units can be customized with a variety of finishes, colors, and materials, allowing you to create a kitchen that is truly unique and reflects your personal style.</p>

                  

                  <p className="mb-9 text-base leading-relaxed text-gray-600 font-normal">Overall, modular kitchen design is a popular choice for many homeowners because it allows for flexibility, customization, and a wide range of design options. Whether you are looking to update your current kitchen or design a new one from scratch, a modular kitchen can provide a practical and stylish solution.</p>
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

export default Kitchen;