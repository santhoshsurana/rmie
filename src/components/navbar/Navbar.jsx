import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/rmlogo.png";
import NavLinks from "./NavLinks";
import Button from '../buttons/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white z-10 px-4 py-2 mx-auto container w-full lg:rounded shadow-md">
      <div className="flex sticky items-center text-sm justify-between">
        <div className=" z-40 md:w-auto w-full flex justify-between">
          <a href="/"><img src={Logo} alt="logo" className="md:cursor-pointer h-14 md:h-8  w-auto" /></a>
          <div className="items-center text-teal-900 p-2 md:hidden" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={open ? faXmark : faBars} size='3x'/>
          </div>
        </div>
        <ul className="md:flex hidden uppercase text-teal-700 items-center gap-4">
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
          <Button />
        </div>
        {/* Mobile nav */}
        <ul className={`md:hidden bg-white opacity-95 text-2xl fixed w-full top-0 overflow-y-auto bottom-0 pt-24 pl-6 uppercase text-teal-700 font-bold duration-500 ${open ? "left-0" : "left-[-100%]"} `}>
        <li>
            <Link to="/" className="py-2 px-3  inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="py-2 px-3  inline-block">
              About
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/portfolio" className="py-2 px-3  inline-block">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/blog" className="py-2 px-3  inline-block">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="py-2 px-3  inline-block">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
