import React from "react";
import Statf from "../functions/Statf";
import Statif from "../functions/Statif";

const StationStatTrack = ({ aqi }) => {
  return (
    <div
      className={`w-full text-very-dark-grey p-5 ${Statf(
        aqi
      )} rounded-md flex justify-between gap-2`}
    >
      <div className="flex md:flex-row flex-col gap-3 items-center">
        <div className="bg-glass-black p-3 rounded-md flex justify-center md:w-auto w-full">
          {aqi}
        </div>
        <div>{Statif(aqi)}</div>
      </div>
      <div></div>
    </div>
  );
};

export default StationStatTrack;
