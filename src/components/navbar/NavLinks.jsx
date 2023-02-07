import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { links } from "./Mylinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <li key={link.name} className="md:cursor-pointer group">
          <Link  href={'/'+link.name} className="flex justify-between items-center md:pr-0 pr-5 group hover:bg-teal-900 md:p-2 p-4 md:font-semibold font-bold hover:text-white md:hover:text-teal-900 md:hover:bg-transparent"
            onClick={() => { heading !== link.name ? setHeading(link.name) : setHeading(""); }}>
            <span className="text-md ">{link.name}</span>
            <span className="text-md md:hidden inline">
              <FontAwesomeIcon icon={heading === link.name ? faAngleUp : faAngleDown} />
            </span>
            <span className="text-md md:mt-1 md:ml-2  md:block hidden duration-500 group-hover:rotate-180 group-hover:mt-1">
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </Link>
          <div className="absolute hidden group-hover:md:block hover:md:block">
            <div className="bg-white mt-[6px] shadow-md grid grid-flow-row">
              {link.sublinks.map((slink) => (
                <ul className="">
                  <li key={slink.name} className="text-sm hover:bg-teal-900 p-2 font-semibold hover:text-white">
                    <Link  to={slink.link} className="px-2  inline-block">{slink.name}</Link>
                  </li>
                </ul>
              ))}
            </div>
          </div>

          {/* Mobile menus */}
          <li className={heading === link.name ? "md:hidden" : "hidden"}>
            <ul>
              {/* sublinks */}
              {link.sublinks.map((slink) => (
                <li key={slink.name} className="hover:bg-teal-900 py-4 font-semibold hover:text-white">
                  <Link to={slink.link} className='py-4 pl-4 w-full'>{slink.name}</Link>
                </li>
              ))}
            </ul>
          </li>
        </li>
      )
      )
      }
    </>
  )
};

export default NavLinks;
