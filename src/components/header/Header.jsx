import React from 'react';
import './header.css';
import logo from "../../assets/images/rmlogo.png";
import Navbar from '../navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const scrollHeight = document.body.scrollHeight;

const Header = () => {
  return (
    <header className='w-full'>
      <div className='bg-teal-900 px-4'>
        <div className='py-1 container mx-auto flex items-center sm:flex-row flex-col'>
          <p className='text-sm text-white sm:mt-0 mt-4'>
          <FontAwesomeIcon icon={faEnvelope} className='px-1' />
            <a href="mailto:info@rminteriorsera.com">info@rminteriorsera.com</a>
            <FontAwesomeIcon icon={faPhone} className='px-1' />
            <a href="">+91 9507776777</a>, <a href="">+91 9581176777</a>
            </p>
          <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
            <a className='text-gray-500 hover:animate-bounce' href='http://facebook.com/rminteriorsera'>
              <FontAwesomeIcon icon={faFacebook} className='text-white hover:text-blue-600' size='lg' />
            </a>
            <a className='ml-3 text-gray-500 hover:animate-bounce' href='https://twitter.com/rminteriorsera'>
              <FontAwesomeIcon icon={faTwitter} className='text-white hover:text-sky-400' size='lg' />
            </a>
            <a className='ml-3 text-gray-500 hover:animate-bounce' href='https://www.instagram.com/rminteriorsera'>
              <FontAwesomeIcon icon={faInstagram} className='text-white hover:text-rose-700' size='lg' />
            </a>
            <a className='ml-3 text-gray-500 hover:animate-bounce' href='https://www.youtube.com/@rminteriorsera'>
              <FontAwesomeIcon icon={faYoutube} className='text-white hover:text-red-700' size='lg' />
            </a>
            <a className='ml-3 text-gray-500 hover:animate-bounce' href='https://api.whatsapp.com/send?phone=919507776777&forceIntent=true&load=loadInIOSExternalSafari'>
              <FontAwesomeIcon icon={faWhatsapp} className='text-white hover:text-green-500' size='lg' />
            </a>
          </span>
        </div>
      </div>
        <div className='bg-white bg-opacity-100 hidden lg:block'>
          <div className="max-w-6xl mx-auto text-white body-font">
            <div className="container flex flex-col flex-wrap items-center mx-auto max-w-7xl md:flex-row">
              <a href="#_"
                className="flex items-center order-first mb-6 font-medium text-gray-900 md:order-none md:w-1/5 title-font md:items-center md:justify-center md:mb-0">
                <img src={logo} className=" p-5" alt="" width={300} srcSet="" />
              </a>
              <Navbar />
              <div className="inline-flex items-center space-x-6 md:w-2/5 md:justify-end">
                <a href="#_"
                  className="text-base text-teal-900 font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out hover:text-teal-800  ">Help!</a>
                <a href="#_"
                  className="inline-flex items-center transition easy-in-out delay-150 hover:translate-1 hover:scale-110 duration-300 justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-teal-800 border border-transparent rounded-md shadow-sm hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-800 ">Design a Quote</a>
              </div>
            </div>
          </div>
        </div>
        <div className='p-2 absolute bg-teal-900 sm:hidden z-10'><a href='' ><FontAwesomeIcon icon={faBars} className=' border p-1 border-white
       text-white rounded-sm' size='xl' /></a></div>
    </header>


  )
}

export default Header;