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
    { " "}
    {
    showTopBtn && (
      <div className="hover:animate-bounce  w-[35px] h-[35px] bg-teal-900 p-[6px] z-30 rounded-full fixed bottom-32 right-2">
        <FontAwesomeIcon icon={faCircleArrowUp} className='text-teal-100' onClick={goToTop} size='xl' />
      </div>
    )
  } { " " }
  </>
  )
};
export default ScrollButton;