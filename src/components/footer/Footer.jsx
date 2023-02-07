import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import footerLogo from "../../assets/images/rmlogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faClock, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className='bg-teal-50'>
      <hr className='bg-teal-900 h-4 border-0' />
      <div className='container p-8 mx-auto'>
        <div className='flex flex-wrap md:text-left text-center text-gray-600 order-first'>
          <div className='lg:w-1/3 md:w-1/2 w-full px-4 text-sm '>
            <Link to='/' className='flex  font-medium items-center md:justify-start justify-center text-gray-900 mb-4'>
              <img src={footerLogo} alt="" className='w-72' srcSet="" />
            </Link>
            <p className='py-2 pl-4'>
              <FontAwesomeIcon icon={faLocationDot} className='px-2 text-teal-900' size='lg' />3-17-47/12, Near Chaitanya Godavari Grameena Bank, Sri Lakshmi Nagar, Gudarigunta, Kakinada, Andhrapradesh-533001.
            </p>

            <p>
              <Link className='py-2 pl-4' to='mailto:info@rminteriorsera.com'><FontAwesomeIcon icon={faEnvelope} className='px-2 text-teal-900' size='lg' /> info@rminteriorsera.com</Link>
            </p>

            <p className='py-2 pl-4'>
              <Link to='tel:+91 9507776777'>
                <FontAwesomeIcon icon={faPhone} className='px-2 text-teal-900' size='lg' />+91 9507776777,</Link>
              <Link to='tel:+91 9581176777'>+91 9581176777</Link></p>

            <p className='py-2 pl-4'>
              <FontAwesomeIcon icon={faClock} className='px-2 text-teal-900' size='lg' />
              Monday - Sat 09:00 AM to 06:00 PM, </p>
            <h2 className='font-bold text-teal-900 tracking-widest text-lg py-3'>SUBSCRIBE</h2>
            <p htmlFor='footer-field' className='leading-7 text-sm text-gray-600'>The latest news, articles, and resources, sent to your inbox weekly.</p>
            <div className='flex flex-row'>
              <input type='text' id='footer-field' name='footer-field'
                className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-teal-200 focus:border-teal-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'></input>
              <button className='lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-teal-900 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded'>Subscribe</button>
            </div>
            <p className='text-gray-500 text-sm mt-2 md:text-left text-center'>Please enter your email to get notifications and updates.
            </p>
          </div>
          <div className='lg:w-2/3 md:w-1/2 md:mt-0 mt-4 w-full px-4'>
            <div className='grid lg:grid-cols-4  gap-2 md:grid-cols-2'>
              <div>
                <h2 className='transition easy-in-out delay-150 hover:translate-y-0.5 hover:scale-110 duration-300 font-semibold text-gray-900 uppercase tracking-widest text-lg mb-3'>Company</h2>
                <nav className='list-none'>
                  <li className="pb-1">
                    <Link className=' font-medium text-gray-600 tracking-widest  text-sm ' to='/about'>About Us</Link>
                  </li>
                  <li className="pb-1">
                    <Link className=' font-medium text-gray-600 tracking-widest text-sm' to='/services'>Services</Link>
                  </li>
                  <li className="pb-1">
                    <Link className=' font-medium text-gray-600 tracking-widest text-sm' to='/portfolio'>Portfolio</Link>
                  </li>
                  <li className="pb-1">
                    <Link className=' font-medium text-gray-600 tracking-widest text-sm ' to='/testimonials'>Testimonials</Link>
                  </li>
                  <li className="pb-1">
                    <Link className=' font-medium text-gray-600 tracking-widest text-sm' to='/blog'>Blog</Link>
                  </li>
                  <li className="pb-1">
                    <Link className=' font-medium text-gray-600 tracking-widest text-sm' to='/contact'>Contact Us</Link>
                  </li>
                </nav>
              </div>
              <div>
                <h2 className='transition easy-in-out delay-150 hover:translate-y-0.5 hover:scale-110 duration-300  font-semibold uppercase text-gray-900 tracking-widest text-md mb-3'>Services</h2>
                <nav className='list-none'>
                  <li className="pb-1">
                    <Link className=' font-medium text-gray-600 tracking-widest text-sm ' to='/sofa'>Sofa Making</Link>
                  </li>
                  <li className="pb-1">
                    <Link className=' font-medium text-gray-600 tracking-widest text-sm' to='/office'>Commercial Interiors</Link>
                  </li>
                  <li className="pb-1">
                    <Link className=' font-medium text-gray-600 tracking-widest text-sm' to='/space'>2D and 3D Layouts</Link>
                  </li>

                  <li className="pb-1">
                    <Link className=' font-medium text-gray-600 tracking-widest text-sm ' to='/kitchen'>Modular Kitchens</Link>
                  </li>
                  <li className="pb-1">
                    <Link className=' font-medium text-gray-600 tracking-widest text-sm ' to='/concept'>Space Planning</Link>
                  </li>

                  <li className="pb-1">
                    <Link className=' font-medium text-gray-600 tracking-widest text-sm ' to='/wardrobe'>Wardrobes & Cupboards</Link>
                  </li>

                  <li className="pb-1">
                    <Link className=' font-medium text-gray-600 tracking-widest text-sm ' to='/living'>Living Room Interiors</Link>
                  </li>

                  <li className="pb-1">
                    <Link className=' font-medium text-gray-600 tracking-widest text-sm ' to='/bedroom'>Bedroom Room Interiors</Link>
                  </li>
                  <li className="pb-1">
                    <Link className=' font-medium text-gray-600 tracking-widest text-sm ' to='/ceiling'>False Ceiling</Link>
                  </li>

                  <li className="pb-1">
                    <Link className=' font-medium text-gray-600 tracking-widest text-sm ' to='/fixture'>Fixture & Furniture</Link>
                  </li>
                </nav>
              </div>
              <div>
                <h2 className=' transition easy-in-out delay-150 hover:translate-y-0.5 hover:scale-110 duration-300  font-semibold uppercase text-gray-900 tracking-widest text-md mb-3'>Quicklinks</h2>
                <nav className='list-none'>
                  <li className="pb-1">
                    <Link to='/media' className=' font-medium text-gray-600 tracking-widest text-sm  '>Media & Press</Link>
                  </li>
                  <li className="pb-1">
                    <Link className=' font-medium text-gray-600 tracking-widest text-sm' to='/careers'>Careers</Link>
                  </li>
                  <li className="pb-1">
                    <Link to='/events' className=' font-medium text-gray-600 tracking-widest text-sm  '>Events</Link>
                  </li>
                  <li className="pb-1">
                    <Link to='/support' className=' font-medium text-gray-600 tracking-widest text-sm  '>Support</Link>
                  </li>
                  <li className="pb-1">
                    <Link to='/contact' className=' font-medium text-gray-600 tracking-widest text-sm  '>Office Locator</Link>
                  </li>
                </nav>
              </div>

              <div>
                <h2 className='transition easy-in-out delay-150 hover:translate-y-0.5 hover:scale-110 duration-300  font-semibold uppercase text-gray-900 tracking-widest text-md mb-3'>Get Help!</h2>
                <nav className='list-none'>
                  <li className="pb-1">
                    <Link to='/terms' className=' font-medium text-gray-600 tracking-widest text-sm  '>Terms of Service</Link>
                  </li>
                  <li className="pb-1">
                    <Link to='/faqs' className=' font-medium text-gray-600 tracking-widest text-sm  '>FAQ's</Link>
                  </li>
                  <li className="pb-1">
                    <Link to='/feedback' className=' font-medium text-gray-600 tracking-widest text-sm  '>Feedback</Link>
                  </li>
                  <li className="pb-1">
                    <Link to='/policy' className=' font-medium text-gray-600 tracking-widest text-sm  '>Privacy Policy</Link>
                  </li>
                  <li className="pb-1">
                    <Link to='/copyrights' className=' font-medium text-gray-600 tracking-widest text-sm  '>Copy Rights</Link>
                  </li>
                  <li className="pb-1">
                    <Link to='/accessibility' className=' font-medium text-gray-600 tracking-widest text-sm  '>Accessibility</Link>
                  </li>
                  <li className="pb-1">
                    <Link to='/sitemap' className=' font-medium text-gray-600 tracking-widest text-sm  '>Site Map</Link>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-teal-100'>
        <div className='container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col'>
          <p className='text-sm text-gray-500 text-center md:text-left sm:ml-6 sm:mt-0 mt-4 flex flex-col md:flex-row'>
            <span>Copyright © 2023
              <Link to='/' className='text-teal-900 font-bold hover:text-gray-900'> RM Interiors Era</Link></span>
            <span>— Designed by
              <Link to='https://satien.in' rel='noopener noreferrer' className='text-teal-900 ml-1 font-bold hover:text-red-600' target='_blank'>Satien.in</Link></span>
          </p>
          <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
            <a className='transition easy-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' href='http://facebook.com/rminteriorsera'>
              <FontAwesomeIcon icon={faFacebook} className='text-teal-900 hover:text-blue-800' size='xl' />
            </a>
            <a className='ml-3 transition easy-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' href='https://twitter.com/rminteriorsera'>
              <FontAwesomeIcon icon={faTwitter} className='text-teal-900 hover:text-sky-600' size='xl' />
            </a>
            <a className='ml-3 transition easy-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' href='https://www.instagram.com/rminteriorsera'>
              <FontAwesomeIcon icon={faInstagram} className='text-teal-900 hover:text-pink-800' size='xl' />
            </a>
            <a className='ml-3 transition easy-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' href='https://www.youtube.com/@rminteriorsera'>
              <FontAwesomeIcon icon={faYoutube} className='text-teal-900 hover:text-red-700' size='xl' />
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
export default Footer;