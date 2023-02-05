import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/airiuz-logo.png";
import { AiOutlineMenu, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
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
  return (
    <div
      style={{ backgroundColor: color }}
      className="text-very-dark-white fixed left-0 top-0 z-20 w-full flex justify-center px-5 py-3 ease-in duration-50"
    >
      <div className="w-full max-w-[1080px] flex justify-between items-center">
        <Link to="/" className="text-xl  font-medium">
          AIRIUZ
        </Link>
        <div className="hidden md:flex gap-4 text-xl font-[500]">
          <Link to="/">Pollution</Link>
          <Link to="/">Awareness</Link>
          <Link to="/">About</Link>
          <Link to="/">FAQs</Link>
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
          } w-[70vw] h-screen py-6 shadow-2xl bg-very-dark-white flex flex-col list-none transition-all duration-[.3s] ease-linear`}
        >
          <div className="text-xl text-very-dark-grey w-full mb-2 px-5 cursor-pointer">
            <AiOutlineClose onClick={() => changeExpanded()} />
          </div>
          <div className="text-xl text-very-dark-grey font-[500] flex flex-col my-5">
            <Link to="/" className="flex gap-3 py-1 items-center hover:text-melon-white hover:bg-blueberry-soft px-5">
              Pollution
            </Link>
            <Link to="/" className="flex gap-3 py-1 items-center hover:text-melon-white hover:bg-blueberry-soft px-5">
              Awareness
            </Link>
            <Link to="/" className="flex gap-3 py-1 items-center hover:text-melon-white hover:bg-blueberry-soft px-5">
              About
            </Link>
            <Link to="/" className="flex gap-3 py-1 items-center hover:text-melon-white hover:bg-blueberry-soft px-5">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
