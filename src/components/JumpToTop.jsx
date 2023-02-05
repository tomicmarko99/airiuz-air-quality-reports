import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const JumpToTop = () => {
  const [jump, setJump] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 220 ||
      document.documentElement.scrollTop > 220
    ) {
      setJump(true);
    } else {
      setJump(false);
    }
  };

  const handleClick = () => {
    const start = window.pageYOffset;
    const to = 0;
    const duration = 300;
    let startTime = null;

    const scroll = (time) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start + (to - start) * progress);
      if (progress < 1) {
        window.requestAnimationFrame(scroll);
      }
    };

    window.requestAnimationFrame(scroll);
  };

  return (
    <>
      {jump ? (
        <div
          className="fixed bottom-5 right-5 z-10 p-3 text-very-dark-grey bg-[#F2CD5C] rounded-md cursor-pointer"
          onClick={handleClick}
        >
          <FaChevronUp />
        </div>
      ) : null}
    </>
  );
};

export default JumpToTop;
