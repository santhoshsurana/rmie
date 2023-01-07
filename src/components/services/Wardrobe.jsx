import React from "react";
import './services.css';

const Wardrobe = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto ">
        <div className="wow fadeInUp bg-white rounded-md" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s' }}>
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="items-stretch justify-between flex">
                <div className="w-full px-14 py-12">
                  <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px] tracking-tight primary_text " data-content="website-headlines">Wardrobe and Cupboards <span className="text-teal-900"> Design and Development</span></h2>
                  <p className="mb-9 text-base leading-relaxed text-gray-600 font-normal  " data-content="about-us">As an interior design company, we understand the importance of having functional and stylish storage solutions in the home. That's why we specialize in the design and development of custom wardrobes and cupboards.</p>

                  <p className="mb-2 text-base leading-relaxed text-gray-600 font-normal" data-content="about-us">Our team of experienced designers will work with you to create a wardrobe or cupboard that meets your specific needs and preferences. Whether you need plenty of hanging space for clothes or a mix of shelving and drawers for shoes and other items, we can design a solution that works for you.</p>

                  <p className="mb-2 text-base leading-relaxed text-gray-600 font-normal">In terms of aesthetics, we offer a wide range of materials and finishes to choose from, so you can create a wardrobe or cupboard that complements the overall aesthetic of your home. And, for a truly unique touch, we can incorporate custom features such as built-in shelving or drawers, or unique hardware.</p>

                  <p className="mb-2 text-base leading-relaxed text-gray-600 font-normal">But it's not just about the look of the unit - we also understand the importance of organization. That's why we offer a variety of organizational tools and options to help you make the most of the storage space.</p>

                  <p className="mb-2 text-base leading-relaxed text-gray-600 font-normal">So if you're in need of a functional and stylish storage solution, look no further. Let our team of expert designers create a custom wardrobe or cupboard that fits your needs and enhances the look of your home.</p>

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

export default Wardrobe;