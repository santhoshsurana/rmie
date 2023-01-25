import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { links } from "./Mylinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link,index) => (
        <div className="px-3 text-left md:cursor-pointer group">
            <li key={index} className="py-4  flex justify-between text-teal-700 font-medium items-center md:pr-0 pr-5 group" onClick={() => { heading !== link.name ? setHeading(link.name) : setHeading(""); setSubHeading(""); }}>
            <span className="text-md font-bold md:font-medium">{link.name}</span>
              <span className="text-md md:hidden inline">
                <FontAwesomeIcon icon={heading === link.name ? faAngleUp : faAngleDown } />
              </span>
              <span className="text-md md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:mt-1">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </li>
            {link.submenu && (
                <div className="absolute hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-2 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white rounded p-5 grid grid-flow-col gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <ul className="">
                        <h1 className="text-md font-semibold">{mysublinks.Head}</h1>
                        {mysublinks.sublink.map((slink, index) => (
                          <li className="text-sm text-gray-600 my-2">
                            <Link  key={index} to={slink.link} className=" hover:text-teal-900">{slink.name}</Link>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
            )}
          
          {/* Mobile menus */}
          <div className={heading === link.name ? "md:hidden" : "hidden"}>
            {/* sublinks */}
            {link.sublinks.map((slinks,index) => (
              <div>
                <ul key={index}>
                  <h1 onClick={() => subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading("")
                  } className="py-4 pl-7 font-semibold flex justify-between items-center md:pr-0 pr-5">
                    {slinks.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <FontAwesomeIcon size="lg" icon={subHeading === slinks.Head ? faAngleUp : faAngleDown} />
                    </span>
                  </h1>
                  <div className={subHeading === slinks.Head ? "md:hidden" : "hidden"}>
                    {slinks.sublink.map((slink,index) => (
                    <li className="py-3 pl-14">
                      <Link key={index} to={slink.link}>{slink.name}</Link>
                    </li>
                    ))}
                  </div>
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
