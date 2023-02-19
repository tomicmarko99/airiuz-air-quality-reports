import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import StationSearch from "../components/StationSearch";
import StationStats from "../components/StationStats";
import StationStatTrack from "../components/StationStatTrack";

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
    } else {
      setFixedCity(cityName);
    }
  }, [cityName]);

  const navigate = useNavigate();
  const [stationData, setStationData] = useState([]);
  const [unknown, setUnknown] = useState(false);

  useEffect(() => {
    const stationUrl = `https://api.waqi.info/feed/${fixedCity}/?token=fe7f80903a47cd16d31da36d7bee8aa8d5eee45f`;
    axios.get(stationUrl).then((response) => {
      setStationData(response.data);
      if (
        response.data.data === "Unknown station" ||
        response.data.data?.aqi === "-"
      ) {
        setUnknown(true);
      } else {
        setUnknown(false);
      }
    });
  }, [fixedCity]);

  return (
    <div className="w-full min-h-[100vh] bg-bgr-white px-5 py-16 pt-28 flex flex-col items-center align-center">
      <div className="w-full max-w-[1080px] mb-8 flex justify-end">
        <StationSearch />
      </div>

      <div className="w-full max-w-[1080px] text-very-dark-grey items-center">
        <div className="text-[24px] md:text-[40px] font-semibold">
          Air Quality in {cityName}
        </div>
        <div className="text-[18px] md:text-[22px] text-soft-blue">
          Air quality index (AQI) and PM2.5 air pollution in {cityName}
        </div>
        {unknown ? (
          <div className="flex gap-2 text-[16px] md:text-[18px] mt-12 justify-center items-center font-semibold">
            No Data Found <FaExclamationTriangle />
          </div>
        ) : (
          <>
            <div className="w-full mt-5">
              <StationStatTrack aqi={stationData.data?.aqi} />
              <StationStats aqi={stationData.data} city={cityName} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Station;
