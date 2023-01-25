import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const headerTag = document.getElementById('header');
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        headerTag.classList.add('sticky');
      } else {
        headerTag.classList.remove('sticky');
      }
    });
  }, []);
    


  return (
    <header className='w-full top-0' id='header'>
      <div className='bg-teal-900 w-full bg-opacity-0 sticky hidden lg:block'>
        <div className='py-2 flex items-center container mx-auto  flex-cols'>
          <p className='text-md text-white '>
            <FontAwesomeIcon icon={faEnvelope} className='px-2' />
            <a href="mailto:info@rminteriorsera.com">info@rminteriorsera.com</a>
            <FontAwesomeIcon icon={faPhone} className='px-2' />
            <a href="tel:+91 9507776777">+91 9507776777</a>, <a href="tel:+91 9581176777">+91 9581176777</a>
          </p>
          <span className='inline-flex sm:ml-auto  justify-center sm:justify-start'>
            <a className='transition easy-in-out delay-150 hover:-translate-y-1 hover:scale-120 duration-300' href='https://facebook.com/rminteriorsera'>
              <FontAwesomeIcon icon={faFacebook} className='text-white hover:text-blue-600' size='lg' />
            </a>
            <a className='ml-3  transition easy-in-out delay-150 hover:-translate-y-1 hover:scale-120 duration-300' href='https://twitter.com/rminteriorsera'>
              <FontAwesomeIcon icon={faTwitter} className='text-white hover:text-sky-400' size='lg' />
            </a>
            <a className='ml-3  transition easy-in-out delay-150 hover:-translate-y-1 hover:scale-120 duration-300' href='https://www.instagram.com/rminteriorsera'>
              <FontAwesomeIcon icon={faInstagram} className='text-white hover:text-rose-700' size='lg' />
            </a>
            <a className='ml-3  transition easy-in-out delay-150 hover:-translate-y-1 hover:scale-120 duration-300' href='https://www.youtube.com/@rminteriorsera'>
              <FontAwesomeIcon icon={faYoutube} className='text-white hover:text-red-700' size='lg' />
            </a>
          </span>
        </div>
      </div>
      <Navbar />
    </header>


  )
}

export default Header;