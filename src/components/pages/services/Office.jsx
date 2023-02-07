import React from "react";
import office1 from "../../../assets/images/office1.jpg";
import office2 from "../../../assets/images/office2.jpg";
import office3 from "../../../assets/images/office2.jpg";
const Office = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="px-10 py-4 mt-20  md:text-3xl text-xl font-bold">Commercial Spaces and Office <span className="text-teal-900"> Interior Design</span></h2>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
          <p className=" text-base py-5" >Are you looking for a commercial space that will make a lasting impression on your clients and employees? Look no further! Our team specializes in creating unique and functional interior designs for commercial spaces, including offices and retail spaces. We understand that every business has its own unique needs and brand identity. That's why we work closely with our clients to create a design that reflects their company's values and goals. From conceptualization to completion, we handle every aspect of the design and development process, ensuring that your space is not only aesthetically pleasing, but also practical and efficient.
          </p>
          <p className=" text-base py-5" >Our team has extensive experience in space planning, lighting design, and selection of finishes and fixtures. We also stay up to date with the latest trends and technologies to ensure that your space is not only functional but also state-of-the-art. Let us help you create a space that will leave a lasting impression on your clients and employees. Contact us today to schedule a consultation and see how we can bring your vision to life!
          </p>
          </div>
          <div className="my-auto md:w-1/3">
            <img src={office1} alt="ceiling" className="object-cover h-96  " />
          </div>
        
        </div>
        <div className="flex flex-col md:flex-row-reverse">
          <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-teal-50">
          

          <p className=" text-base py-5" >In addition to our design and development services, we also offer project management to ensure that the construction process runs smoothly and is completed on time and within budget. Our team of experienced professionals work closely with contractors and other trades to ensure that the final product is of the highest quality.
          </p>
          <p className=" text-base py-5" >We also understand the importance of staying within budget, so we offer cost-effective solutions without compromising on design and functionality. We will work with you to create a space that is not only beautiful but also cost-efficient and sustainable.

        </p>
        </div>
        <div className="my-auto md:w-1/3">
          <img src={office2} alt="ceiling" className="object-cover h-72  " />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className=" md:w-2/3  px-10 font-normal leading-relaxed text-justify text-gray-600  bg-gray-50">
        
        <p className=" text-base py-5" >We also offer a wide range of services including, but not limited to:</p>

        <ul>
          <li>Space planning</li>
          <li>Lighting design</li>
          <li>Selection of finishes and fixtures</li>
          <li>Furniture and accessories selection</li>
          <li>3D renderings and visualizations</li>
          <li>Project management</li>
          <li>Move-in coordination</li>
          <li>Renovations and remodels</li>
        </ul>
        <p className=" text-base py-5" >Our goal is to create a space that is not only functional but also reflective of your company's brand and values, and will help your business to grow. We're committed to providing our clients with exceptional service and attention to detail from start to finish. Contact us today to schedule a consultation and see how we can help you turn your commercial space into an inviting and productive environment for your employees and clients.
        </p>
      </div>
      <div className="my-auto md:w-1/3">
        <img src={office3} alt="ceiling" className="object-cover h-[440px]  " />
      </div>
    </div >
            </section >


            )
}

export default Office;