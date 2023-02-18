import React from "react";
import Statf from "../functions/Statf";
import Statif from "../functions/Statif";
import Staticof from "../functions/Staticof";

const StationStatTrack = ({ aqi }) => {
  return (
    <div
      className={`w-full text-[18px] md:text-[22px] font-semibold text-very-dark-grey p-5 ${Statf(
        aqi
      )} rounded-tl-md rounded-tr-md flex justify-between items-center gap-2 shadow-md`}
    >
      <div className="flex md:flex-row flex-col gap-3 items-center">
        <div className="bg-glass-black p-5 rounded-md flex justify-center md:w-auto w-full">
          {aqi}
        </div>
        <div>{Statif(aqi)}</div>
      </div>
      <div className="max-w-[80px]">
        <img src={Staticof(aqi)} alt="" />
      </div>
    </div>
  );
};

export default StationStatTrack;
