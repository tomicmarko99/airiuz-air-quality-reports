import React from "react";
import Statif from "../functions/Statif";
import AqiCharts from "../components/AqiCharts";
import HealthRecommendations from "./HealthRecommendations";

const StationStats = ({ aqi }) => {
  return (
    <div className="w-full bg-white text-[16px] md:text-[18px] text-very-dark-grey p-5 rounded-bl-md rounded-br-md shadow-md">
      <div>
        <div className="font-medium">
          <div className="text-soft-blue">Overview</div>
          <div className="text-[18px] md:text-[22px] text-very-light-grey">
            Real-time monitoring of air quality parameters
          </div>
        </div>
        <div className="stationStatsBox md:overflow-x-hidden overflow-x-scroll flex pb-3 mt-5">
          <div className="md:w-full flex text-[14px] md:text-[16px] flex-col border-2 border-medium-grey rounded-md">
            <div className="grid grid-cols-3 bg-[#E5E5E5] rounded-tl rounded-tr flex items-center md:w-full w-[680px]">
              <div className="p-3 border-r-2 border-medium-grey">
                Air pollution status
              </div>
              <div className="p-3">Air quality index</div>
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
      <div className="mt-5">
        <div className="w-full grid grid-cols-3 md:grid-cols-6 border-2 border-medium-grey rounded-md overflow-hidden">
          <div className="flex flex-col items-center">
            <div className="px-3 py-1 w-full text-center bg-[#E5E5E5]">
              PM2.5
            </div>

            <div className="px-3 py-1">
              {aqi?.iaqi?.pm25 ? aqi?.iaqi?.pm25?.v : "NDF"}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className=" px-3 py-1 w-full text-center bg-[#E5E5E5]">
              PM10
            </div>
            <div className="px-3 py-1">
              {aqi?.iaqi?.pm10 ? aqi?.iaqi?.pm10?.v : "NDF"}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="px-3 py-1 w-full text-center bg-[#E5E5E5]">O3</div>
            <div className="px-3 py-1">
              {aqi?.iaqi?.o3 ? aqi?.iaqi?.o3?.v : "NDF"}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="px-3 py-1 w-full text-center bg-[#E5E5E5]">NO2</div>
            <div className="px-3 py-1">
              {aqi?.iaqi?.no2 ? aqi?.iaqi?.no2?.v : "NDF"}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="px-3 py-1 w-full text-center bg-[#E5E5E5]">SO2</div>
            <div className="px-3 py-1">
              {aqi?.iaqi?.so2 ? aqi?.iaqi?.so2?.v : "NDF"}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="px-3 py-1 w-full text-center bg-[#E5E5E5]">CO</div>
            <div className="px-3 py-1">
              {aqi?.iaqi?.co ? aqi?.iaqi?.co?.v : "NDF"}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-5">
        <div className="font-medium">
          <div className="text-soft-blue">Recommendations</div>
          <div className="text-[18px] md:text-[22px] text-very-light-grey">
            Tips for protecting yourself from air pollution
          </div>
        </div>
        <HealthRecommendations />
      </div>
      <div className="mt-5">
        <div className="font-medium">
          <div className="text-soft-blue">Forecast</div>
          <div className="text-[18px] md:text-[22px] text-very-light-grey">
            Predictions of future levels of air pollution
          </div>
        </div>
        <div className="w-full mt-5">
          <div className="w-full flex gap-5 text-veery-dark-grey text-[14px] md:text-[16px] mb-4">
            <div className="flex gap-2 items-center">
              <div className="w-[15px] h-[15px] md:w-[25px] md:h-[25px] rounded-full bg-[rgb(54,162,235)]"></div>
              PM2.5
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[15px] h-[15px] md:w-[25px] md:h-[25px] rounded-full bg-[rgb(75,192,192)]"></div>
              PM10
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[15px] h-[15px] md:w-[25px] md:h-[25px] rounded-full bg-[rgb(153,102,255)]"></div>
              O3
            </div>
          </div>
          <AqiCharts forecastData={aqi?.forecast?.daily} />
        </div>
      </div>
    </div>
  );
};

export default StationStats;
