import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/rmlogo.png";
import NavLinks from "./NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="hover:bg-white duration-1000 bg-white md:bg-transparent text-teal-900 mb-2 p-4 md:py-0 md:px-4 mx-auto container w-full md:rounded-full md:shadow-md">
      <div className="flex items-center text-md justify-between">
        <div className="  md:w-auto w-full flex justify-between">
          <Link to="/"><img src={Logo} alt="logo" className="md:cursor-pointer md:ml-10 h-12 md:h-14 md:py-2  w-auto" /></Link>
          <div className="items-center p-2 md:hidden" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={faBars} size='2x' />
          </div>
        </div>
        <ul className="md:flex hidden  items-center gap-4">
          <li>
            <Link to="/" className="py-2 px-3 font-medium inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="py-2 px-3 font-medium inline-block">
              About
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/portfolio" className="py-2 px-3 font-medium inline-block">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/blog" className="py-2 px-3 font-medium inline-block">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="py-2 px-3 font-medium inline-block">
              Contact
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <Link to="/services" className="bg-teal-900 text-white  px-6 py-2 rounded-full">
            Design a quote
          </Link>
        </div>
        {/* Mobile nav */}



        <ul className={`md:hidden bg-white opacity-100 text-md fixed w-full top-0 overflow-y-auto bottom-0  duration-500 ${open ? "left-0" : "left-[-100%]"} `}>
          <li className=" p-4"><div className="flex justify-between"><a href="/"><img src={Logo} alt="logo" className="md:cursor-pointer md:ml-10 h-12 md:h-14 md:py-2  w-auto" /></a>
            <div className="items-center p-2 md:hidden" onClick={() => setOpen(!open)} >
              <FontAwesomeIcon icon={faXmark} size='2x' />
            </div></div></li>
          <div onClick={() => setOpen(!open)}>


            <li className="hover:bg-teal-900 p-2 font-bold hover:text-white">
              <Link to="/" className="py-2 px-3  inline-block">
                Home
              </Link>
            </li>
            <li className="hover:bg-teal-900 p-2 font-bold hover:text-white">
              <Link to="/about" className="py-2 px-3  inline-block">
                About
              </Link>
            </li >
            <NavLinks />
            <li className="hover:bg-teal-900 p-2 font-bold hover:text-white">
              <Link to="/portfolio" className="py-2 px-3  inline-block">
                Portfolio
              </Link>
            </li>
            <li className="hover:bg-teal-900 p-2 font-bold hover:text-white">
              <Link to="/blog" className="py-2 px-3  inline-block">
                Blog
              </Link>
            </li>
            <li className="hover:bg-teal-900 p-2 font-bold hover:text-white">
              <Link to="/contact" className="py-2 px-3  inline-block">
                Contact
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
