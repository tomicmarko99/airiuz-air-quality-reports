import React from "react";
import Statif from "../functions/Statif";

const StationStats = ({ aqi, city }) => {
  return (
    <div className="w-full bg-white text-[16px] md:text-[18px] text-very-dark-grey p-5 ">
      <div>
        <div className="font-medium">
          <div className="text-soft-blue">Overview</div>
          <div className="text-[18px] md:text-[22px] text-very-light-grey">
            Real-time Monitoring of Air Quality Parameters in {city}
          </div>
        </div>
        <div className="stationStatsBox md:overflow-x-hidden overflow-x-scroll flex pb-3 mt-5">
          <div className="md:w-full flex text-[14px] md:text-[16px] flex-col border-2 border-medium-grey rounded-md">
            <div className="grid grid-cols-3 bg-glass-black flex items-center md:w-full w-[680px]">
              <div className="p-3 border-r-2 border-medium-grey">
                Air pollution status
              </div>
              <div className="p-3">AQI</div>
              <div className="p-3 p-3 border-l-2 border-medium-grey">
                Main pollutant
              </div>
            </div>
            <div className="grid grid-cols-3 bg-white flex items-center md:w-full w-[680px] rounded-md">
              <div className="p-3 border-r-2 border-medium-grey">
                {Statif(aqi?.aqi)}
              </div>
              <div className="p-3">{aqi?.aqi}</div>
              <div className="p-3 p-3 border-l-2 border-medium-grey">
                {aqi?.dominentpol}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationStats;
