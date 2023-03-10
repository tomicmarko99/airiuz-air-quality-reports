import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { AiOutlineMenu, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [loc, setLoc] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setLoc(false);
    } else {
      setLoc(true);
    }
  });

  const [expanded, setExpanded] = useState(false);
  const [color, setColor] = useState("");

  const changeExpanded = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 15) {
        setColor("#2D65E9");
      } else {
        setColor("");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  useEffect(() => {
    if (loc !== true) {
      setColor("#2D65E9");
    }
  });

  return (
    <div
      style={{ backgroundColor: color }}
      className="text-very-dark-white fixed left-0 top-0 z-20 w-full flex justify-center px-5 py-3 ease-in duration-50"
    >
      <div className="w-full max-w-[1080px] flex justify-between items-center">
        <Link to="/" className="text-xl font-medium flex items-center gap-2">
          <img src={Logo} alt="" className="w-[30px]" /> Airiuz
        </Link>
        <div className="hidden md:flex gap-6 text-xl font-[500]">
          <Link to="/about" className="hover:text-white">
            About
          </Link>
          <Link to="/city/here" className="hover:text-white">
            AQI
          </Link>
          <Link to="/rankings" className="hover:text-white">
            Rankings
          </Link>
          <Link to="/faqs" className="hover:text-white">
            FAQs
          </Link>
          <Link to="/contact" className="hover:text-white">
            Contact
          </Link>
          <Link to="/privacy-policy" className="hover:text-white">
            Privacy
          </Link>
        </div>
        <div className="md:hidden cursor-pointer text-xl">
          {expanded ? (
            <AiOutlineMinus onClick={() => changeExpanded()} />
          ) : (
            <AiOutlineMenu onClick={() => changeExpanded()} />
          )}
        </div>
        <div
          className={`mobileMenu z-20 md:hidden fixed top-0 ${
            expanded ? "right-0" : "-right-[150%] bg-blueberry-blue"
          } w-[70vw] h-screen py-6 shadow-2xl bg-white flex flex-col list-none transition-all duration-[.3s] ease-linear`}
        >
          <div className="text-xl text-very-dark-grey w-full mb-2 px-5 cursor-pointer">
            <AiOutlineClose onClick={() => changeExpanded()} />
          </div>
          <div className="text-xl text-very-dark-grey font-[500] flex flex-col my-5">
            <Link
              to="/about"
              onClick={changeExpanded}
              className="flex gap-3 py-1 items-center hover:text-melon-white hover:bg-bgr-white  px-5"
            >
              About
            </Link>
            <Link
              to="/city/here"
              onClick={changeExpanded}
              className="flex gap-3 py-1 items-center hover:text-melon-white hover:bg-bgr-white  px-5"
            >
              AQI
            </Link>
            <Link
              to="/rankings"
              onClick={changeExpanded}
              className="flex gap-3 py-1 items-center hover:text-melon-white hover:bg-bgr-white px-5"
            >
              Rankings
            </Link>
            <Link
              to="/privacy-policy"
              onClick={changeExpanded}
              className="flex gap-3 py-1 items-center hover:text-melon-white hover:bg-bgr-white px-5"
            >
              Privacy
            </Link>
            <div className="px-5 py-4 flex flex-col gap-3 border-y-2 border-glass-black mt-3">
              <Link
                to="/faqs"
                onClick={changeExpanded}
                className="border-2 border-soft-blue hover:border-medium-blue rounded-md w-full px-3 py-1 text-soft-blue hover:text-medium-blue text-center"
              >
                FAQs
              </Link>

              <Link
                to="/contact"
                onClick={changeExpanded}
                className="border-2 border-soft-blue hover:border-medium-blue bg-soft-blue hover:bg-medium-blue rounded-md w-full px-3 py-1 text-white text-center"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
