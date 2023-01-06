import React from 'react';
import './footer.css';
import footerLogo from "../../assets/images/rmlogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faClock, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className='bg-teal-50'>
      <div className='container p-8 mx-auto'>
        <div className='flex flex-wrap md:text-left text-center order-first'>
          <div className='lg:w-1/3 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-semibold text-teal-900 uppercase tracking-widest text-xl mb-3'>Contacts Us </h2>
            <p className='py-2 pl-4 text-md'>
              <FontAwesomeIcon icon={faLocationDot} className='px-2 text-teal-900' size='xl' />3-17-47/12, Near Chaitanya Godavari Grameena Bank, Sri Lakshmi Nagar, Gudarigunta, Kakinada, Andhrapradesh-533001.</p>
            <p className='py-2 pl-4'><FontAwesomeIcon icon={faEnvelope} className='px-2 text-teal-900' size='xl' /> info@rminteriorsera.com</p>
            <p className='py-2 pl-4'><FontAwesomeIcon icon={faPhone} className='px-2 text-teal-900' size='xl' />+91 9507776777, +91 9581176777</p>
            <p className='py-2 pl-4'><FontAwesomeIcon icon={faClock} className='px-2 text-teal-900' size='xl' />Monday - Sat 09:00 AM to 06:00 PM, <br />Sunday Closed</p>
          </div>
          <div className='lg:w-2/3 md:w-1/2 w-full px-4'>
            <div className='grid lg:grid-cols-4 gap-2 md:grid-cols-2'>
              <div>
                <h2 className='transition easy-in-out delay-150 hover:translate-y-0.5 hover:scale-110 duration-300 title-font font-semibold text-gray-900 uppercase tracking-widest text-xl mb-3'>Company</h2>
                <nav className='list-none'>
                  <li className="py-1">
                    <a className='title-font font-medium text-gray-600 tracking-widest  text-md ' href='/about'>About Us</a>
                  </li>
                  <li className="py-1">
                    <a className='title-font font-medium text-gray-600 tracking-widest text-md' href='/services'>Services</a>
                  </li>
                  <li className="py-1">
                    <a className='title-font font-medium text-gray-600 tracking-widest text-md' href='/portfolio'>Portfolio</a>
                  </li>
                  <li className="py-1">
                    <a className='title-font font-medium text-gray-600 tracking-widest text-md ' href='/testimonials'>Testimonials</a>
                  </li>
                  <li className="py-1">
                    <a className='title-font font-medium text-gray-600 tracking-widest text-md' href='/blog'>Blog</a>
                  </li>
                  <li className="py-1">
                    <a className='title-font font-medium text-gray-600 tracking-widest text-md' href='/contact'>Contact Us</a>
                  </li>
                  <li className="py-1">
                    <a className='title-font font-medium text-gray-600 tracking-widest text-md' href='/careers'>Careers</a>
                  </li>
                </nav>
              </div>
              <div>
                <h2 className=' transition easy-in-out delay-150 hover:translate-y-0.5 hover:scale-110 duration-300 title-font font-semibold uppercase text-gray-900 tracking-widest text-xl mb-3'>Quicklinks</h2>
                <nav className='list-none'>
                  <li className="py-1">
                    <a className='title-font font-medium text-gray-600 tracking-widest text-md  '>Media & Press</a>
                  </li>
                  <li className="py-1">
                    <a className='title-font font-medium text-gray-600 tracking-widest text-md  '>Fourth Link</a>
                  </li>
                  <li className="py-1">
                    <a className='title-font font-medium text-gray-600 tracking-widest text-md  '>Fourth Link</a>
                  </li>
                  <li className="py-1">
                    <a className='title-font font-medium text-gray-600 tracking-widest text-md  '>Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div>
                <h2 className='transition easy-in-out delay-150 hover:translate-y-0.5 hover:scale-110 duration-300 title-font font-semibold uppercase text-gray-900 tracking-widest text-xl mb-3'>Learn more</h2>
                <nav className='list-none'>
                  <li className="py-1">
                    <a className='title-font font-medium text-gray-600 tracking-widest text-md  '>Terms & Conditions</a>
                  </li>
                  <li className="py-1">
                    <a className='title-font font-medium text-gray-600 tracking-widest text-md  '>FAQ's</a>
                  </li>
                  <li className="py-1">
                    <a className='title-font font-medium text-gray-600 tracking-widest text-md  '>Feedback</a>
                  </li>
                  <li className="py-1">
                    <a className='title-font font-medium text-gray-600 tracking-widest text-md  '>Privacy Policy</a>
                  </li>
                </nav>
              </div>
              <div>
                <h2 className='transition easy-in-out delay-150 hover:translate-y-0.5 hover:scale-110 duration-300 title-font font-semibold uppercase text-gray-900 tracking-widest text-xl mb-3'>Learn more</h2>
                <nav className='list-none'>
                  <li className="py-1">
                    <a className='title-font font-medium text-gray-600 tracking-widest text-md  '>Terms & Conditions</a>
                  </li>
                  <li className="py-1">
                    <a className='title-font font-medium text-gray-600 tracking-widest text-md  '>FAQ's</a>
                  </li>
                  <li className="py-1">
                    <a className='title-font font-medium text-gray-600 tracking-widest text-md  '>Feedback</a>
                  </li>
                  <li className="py-1">
                    <a className='title-font font-medium text-gray-600 tracking-widest text-md  '>Privacy Policy</a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap mx-auto max-w-6xl'>
        <div >
          <a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900 mb-4'>
            <img src={footerLogo} alt="" className='w-72' srcSet="" />
          </a>
        </div>
        <div className=''>
          <h2 className='title-font font-bold text-teal-900 tracking-widest text-sm mb-3'>SUBSCRIBE</h2>
          <div className='flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start'>
            <div className='relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2'>
              <label htmlFor='footer-field' className='leading-7 text-sm text-gray-600'>The latest news, articles, and resources, sent to your inbox weekly.</label>
              <input type='text' id='footer-field' name='footer-field'
                className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-teal-200 focus:border-teal-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'></input>
            </div>
            <button className='lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-teal-900 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded'>Subscribe</button>
          </div>
          <p className='text-gray-500 text-sm mt-2 md:text-left text-center'>Please enter your email to get notifications and updates.
          </p>
        </div>
      </div>
      <div className='bg-teal-100'>
        <div className='container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col'>
          <p className='text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4'>Copyright © 2023
            <a href='https://rminteriorsera.com' className='text-teal-900 font-bold hover:text-gray-900'>RM Interiors Era</a>
             — Designed by
            <a href='https://satien.in' rel='noopener noreferrer' className='text-teal-900 ml-1 font-bold hover:text-red-600' target='_blank'>Satien.in</a>
          </p>
          <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
            <a className='text-gray-500 hover:animate-bounce' href='http://facebook.com/'>
              <FontAwesomeIcon icon={faFacebook} className='text-teal-900 hover:text-blue-800' size='xl' />
            </a>
            <a className='ml-3 text-gray-500 hover:animate-bounce' href='http://facebook.com/'>
              <FontAwesomeIcon icon={faTwitter} className='text-teal-900 hover:text-sky-600' size='xl' />
            </a>
            <a className='ml-3 text-gray-500 hover:animate-bounce' href='http://facebook.com/'>
              <FontAwesomeIcon icon={faInstagram} className='text-teal-900 hover:text-pink-800' size='xl' />
            </a>
            <a className='ml-3 text-gray-500 hover:animate-bounce' href='http://facebook.com/'>
              <FontAwesomeIcon icon={faYoutube} className='text-teal-900 hover:text-red-700' size='xl' />
            </a>
            <a className='ml-3 text-gray-500 hover:animate-bounce' href='https://api.whatsapp.com/send?phone=919507776777&forceIntent=true&load=loadInIOSExternalSafari'>
              <FontAwesomeIcon icon={faWhatsapp} className='text-teal-900 hover:text-green-600' size='xl' />
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
export default Footer;