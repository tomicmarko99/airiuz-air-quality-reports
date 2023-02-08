import React from "react";
import { Link } from "react-router-dom";
import { FaInstagramSquare, FaPinterestSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center bg-medium-blue">
      <div className="w-full bg-dark-blue text-soft-yellow font-semibold flex justify-center px-5 py-2">
        Powered by WAQI Air Quality Data
      </div>
      <div className="w-full px-5 max-w-[1080px] py-12 grid grid-cold-1 md:grid-cols-2 gap-5 md:gap-[100px]">
        <div className="flex flex-col justify-center">
          <div className="text-[18px] md:text-[22px] text-very-dark-white mb-3 font-semibold">
            Privacy Statement
          </div>
          <div className="text-[14px] md:text-[16px] text-very-dark-white">
            At Airiuz, we are committed to protecting the privacy of our users.
            Our Privacy Policy outlines the types of information we collect and
            how it is utilized to provide an improved experience on our site. We
            take the protection of your personal data seriously and adhere to
            strict privacy standards.
          </div>
        </div>
        <div className="grid grid-cols-2 bg-dark-blue p-5 rounded-md">
          <div>
            <div className="text-[18px] md:text-[22px] text-very-dark-white mb-3 font-semibold">
              Info
            </div>
            <div className="flex flex-col gap-2 text-[14px] md:text-[16px] text-very-dark-white font-semibold">
              <Link to="/about">About</Link>
              <Link to="/">Blog</Link>
              <Link to="/">Resources</Link>
              <Link to="/faqs">FAQs</Link>
              <Link to="/">Contact</Link>
              <Link to="/privacy-policy">Privacy</Link>
            </div>
          </div>
          <div>
            <div className="text-[18px] md:text-[22px] text-very-dark-white mb-3 font-semibold">
              Get In Touch
            </div>
            <div className="flex gap-2 text-[18px] md:text-[22px] text-very-dark-white font-semibold">
              <a href="#">
                <FaInstagramSquare />
              </a>
              <a href="#">
                <FaPinterestSquare />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-dark-blue text-very-dark-white  flex justify-center px-5 py-2">
        Copyright © 2023 Airiuz
      </div>
    </div>
  );
};

export default Footer;
