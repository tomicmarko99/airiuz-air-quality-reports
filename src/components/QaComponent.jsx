import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const QaComponent = ({ q, a }) => {
  const [active, setActive] = useState(false);

  const dropdown = () => {
    setActive(!active);
  };
  return (
    <div className="w-full px-5 py-4 flex flex-col text-[14px] md:text-[16px] text-very-dark-grey gap-2">
      <div className="flex justify-between items-center font-semibold gap-5">
        <div className="">{q}</div>
        <div className="cursor-pointer">
          {active ? (
            <FaChevronUp onClick={dropdown} />
          ) : (
            <FaChevronDown onClick={dropdown} />
          )}
        </div>
      </div>
      {active && <div>{a}</div>}
    </div>
  );
};

export default QaComponent;
