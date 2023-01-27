import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
    {
    showTopBtn && (
      <div className="hover:animate-bounce  w-10 h-10 bg-teal-900 py-[4px] px-[4px] z-20 rounded-full fixed bottom-36 cursor-pointer right-2">
        <FontAwesomeIcon icon={faCircleArrowUp} className='text-white' onClick={goToTop} size='2x' />
      </div>
    )
  } 
  </>
  )
};
export default ScrollButton;