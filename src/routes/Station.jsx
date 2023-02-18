import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
    }
  });
  const stationUrl = `https://api.waqi.info/feed/${fixedCity}/?token=fe7f80903a47cd16d31da36d7bee8aa8d5eee45f`;
  const [stationData, setStationData] = useState([]);
  useEffect(() => {
    axios.get(stationUrl).then((response) => {
      setStationData(response.data);
    });
  }, []);
  const [unknown, setUnknown] = useState(false);
  useEffect(() => {
    if (
      stationData.data === "Unknown station" ||
      stationData.data?.aqi === "-"
    ) {
      setUnknown(true);
    }
  });
  return (
    <div className="w-full bg-bgr-white px-5 py-16 pt-28 flex justify-center align-center">
      <div className="w-full max-w-[1080px] text-very-dark-grey items-center">
        <div className="text-[24px] md:text-[40px] font-semibold">
          Air Quality in {cityName}
        </div>
        <div className="text-[18px] md:text-[22px] text-soft-blue">
          Air quality index (AQI) and PM2.5 air pollution in {cityName}
        </div>
        {unknown ? (
          <div>No Data Found</div>
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
