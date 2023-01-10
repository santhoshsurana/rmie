import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar } from 'flowbite-react';
import './header.css';
import logo from "../../assets/images/rmlogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const scrollHeight = document.body.scrollHeight;

const Header = () => {
  return (
    <header className='w-full sticky top-0 z-10 ' id='header'>
      <div className='bg-teal-900 w-full bg-opacity-0 sticky px-4 hidden lg:block'>
        <div className='py-2 flex items-center container mx-auto sm:flex-row flex-col'>
          <p className='text-md text-white sm:mt-0 mt-4'>
            <FontAwesomeIcon icon={faEnvelope} className='px-2' />
            <a href="mailto:info@rminteriorsera.com">info@rminteriorsera.com</a>
            <FontAwesomeIcon icon={faPhone} className='px-2' />
            <a href="tel:+91 9507776777">+91 9507776777</a>, <a href="tel:+91 9581176777">+91 9581176777</a>
          </p>
          <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
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

      <Navbar fluid={true} rounded={true} className="w-full mx-auto container">
        <Navbar.Brand href="/">
          <img src={logo} className="h-6 mr-3 sm:h-10" alt="RM interiors Era Logo" alt="lofo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true} className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:hover:text-teal-400 md:text-teal-700 md:p-0 " aria-current="page">
            Home
          </Navbar.Link>
          <Navbar.Link href="/about" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-teal-700 md:hover:text-teal-400 md:p-0 " aria-current="page">
            About
          </Navbar.Link>
          <Navbar.Link href="/services" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-teal-700 md:hover:text-teal-400 md:p-0 " aria-current="page">
            Services
          </Navbar.Link>
          <Navbar.Link href="/portfolio" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-teal-700 md:hover:text-teal-400 md:p-0 " aria-current="page">
            Portfolio
          </Navbar.Link>
          <Navbar.Link href="/blog" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-teal-700 md:hover:text-teal-400 md:p-0 " aria-current="page">
            Blog
          </Navbar.Link>
          <Navbar.Link href="/contact" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-teal-700 md:hover:text-teal-400 md:p-0 " aria-current="page">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>


  )
}

export default Header;