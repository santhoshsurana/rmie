import React from "react";
import "./navbar.css"

const Navbar = () =>{
    return(
        <nav className="flex flex-wrap md:hidden lg:block sm:hidden items-center pb-5 text-base md:w-2/5 md:pb-0">
        <a href="/"
          className="font-semibold leading-6 text-teal-900 md:mr-5 hover:text-teal-900  link-editable editable">Home</a>
        <a href="/about"
          className="font-semibold leading-6 text-teal-900 md:mr-5 hover:text-teal-900  link-editable editable">About</a>
        <a href="/services"
          className="font-semibold leading-6 text-teal-900 md:mr-5 hover:text-teal-900  link-editable editable">Services</a>
        <a href="/portfolio"
          className="font-semibold leading-6 text-teal-900 md:mr-5 hover:text-teal-900  link-editable editable">Portfolio</a>
        <a href="/blog"
          className="font-semibold leading-6 text-teal-900 md:mr-5 hover:text-teal-900  link-editable editable">Blog</a>
        <a href="/contact"
          className="font-semibold leading-6 text-teal-900 md:mr-5 hover:text-teal-900  link-editable editable">Contact</a>
      </nav>
    )
}

export default Navbar;
