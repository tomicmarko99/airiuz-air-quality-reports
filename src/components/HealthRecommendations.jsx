import React from "react";
import facemask from "../assets/facemask-icon.svg";
import purifier from "../assets/air-purifier-icon.svg";
import cwindow from "../assets/close-window-icon.svg";
import bicycle from "../assets/bicycle-icon.svg";
const HealthRecommendations = () => {
  return (
    <div className="w-full mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex gap-5 items-center">
        <div>
          <img src={facemask} alt="" className="max-h-[60px] w-[60px]" />
        </div>
        <div className="text-[14px] md:text-[16px]">
          Sensitive groups should wear a mask outdoors
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div>
          <img src={purifier} alt="" className="max-h-[60px] w-[60px]" />
        </div>
        <div className="text-[14px] md:text-[16px]">Run an air purifier</div>
      </div>
      <div className="flex gap-5 items-center">
        <div>
          <img src={cwindow} alt="" className="max-h-[60px] w-[60px]" />
        </div>
        <div className="text-[14px] md:text-[16px]">
          Close your windows to avoid dirty outdoor air
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div>
          <img src={bicycle} alt="" className="max-h-[60px] w-[60px]" />
        </div>
        <div className="text-[14px] md:text-[16px]">
          Everyone should reduce outdoor exercise
        </div>
      </div>
    </div>
  );
};

export default HealthRecommendations;
