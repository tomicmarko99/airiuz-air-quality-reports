import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Station = () => {
  const { cityName } = useParams();
  const [fixedCity, setFixedCity] = useState(`${cityName}`);
  useEffect(() => {
    if (cityName === "Mitrovica") {
      setFixedCity("Mitrovicë");
    } else if (cityName === "Gnjilane") {
      setFixedCity("Gjilan");
    } else if (cityName === "Vucitrn") {
      setFixedCity("Vushtrri");
    } else if (cityName === "Djakovica") {
      setFixedCity("Gjakovë");
    } else if (cityName === "Stimlje") {
      setFixedCity("Shtime");
    }
  });
  console.log(`current city: ${fixedCity}`);
  return (
    <div className="w-full bg-white px-5 py-16 pt-28 flex justify-center align-center">
      <div className="w-full max-w-[1080px] text-very-dark-grey items-center">
        <div className="text-[24px] md:text-[40px] font-semibold">
          Air Quality in {cityName}
        </div>
        <div className="text-[18px] md:text-[22px] text-soft-blue">
          Air quality index (AQI) and PM2.5 air pollution in {cityName}
        </div>
      </div>
    </div>
  );
};

export default Station;
