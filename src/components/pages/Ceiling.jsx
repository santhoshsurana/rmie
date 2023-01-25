import React from "react";
import './services.css';

const Ceiling = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto ">
        <div className="wow fadeInUp bg-white rounded-md" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s' }}>
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="items-stretch justify-between flex">
                <div className="w-full px-14 py-12">
                  <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px] tracking-tight primary_text " data-content="website-headlines">False Ceiling Work<span className="text-teal-900"> And Tiling as per the Concept</span></h2>
                  <p className="mb-9 text-base leading-relaxed text-gray-600 font-normal  " data-content="about-us">Are you in need of a fresh, updated look for your home or commercial space? Look no further than our false ceiling and tiling services.</p>
                  <p className="mb-9 text-base leading-relaxed text-gray-600 font-normal" data-content="about-us">False ceilings, also known as dropped ceilings or suspended ceilings, are a popular choice for many homeowners and business owners because they can add a stylish and modern touch to a space, while also providing functional benefits such as sound absorption and improved lighting. Our team of experienced designers can help you choose the perfect false ceiling design to suit your needs and preferences.</p>
                  <p className="mb-9 text-base leading-relaxed text-gray-600 font-normal">In addition to false ceilings, tiling is another great option for adding style and functionality to a space. Whether you're looking for floor tiles, wall tiles, or a combination of both, we have a wide range of materials, colors, and styles to choose from. Our team can help you select the perfect tiles to suit your needs and budget.</p>
                  <p className="mb-9 text-base leading-relaxed text-gray-600 font-normal">So if you're ready to update the look of your home or commercial space, consider our false ceiling and tiling services. Our team of expert designers will work with you to create a space that is both stylish and functional, tailored to your specific needs and preferences. Contact us today to learn more and schedule a consultation.</p>
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

export default Ceiling;