import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faClock, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './contact.css';

const clientHeight = window.innerHeight;

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative" id="contact">
      <div className="absolute inset-0 bg-gray-300">
        <iframe width="100%" height="100%" title="map" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=RM+INTERIORS+Era&ie=UTF8&t=&z=18&iwloc=B&output=embed" style={{ filter: 'grayscale(0)  contrast(0.8) opacity(1)' }} />
      </div>
      
      <div className="container px-5 py-12 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact</h2>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="Mobile" className="leading-7 text-sm text-gray-600">Mobile</label>
            <input type="Mobile" id="mobile" name="moble" className="w-full bg-white rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
          </div>
          <button className="text-white bg-teal-900 border-0 py-2 px-6 focus:outline-none hover:bg-teal-700 rounded text-lg">Submit</button>
        </div>
      </div>
      
    </section>

  )
}

export default Contact;