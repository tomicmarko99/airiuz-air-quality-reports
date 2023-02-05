import React, { useState } from "react";
import { useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import styled from "styled-components";

const StatTrack = ({ cityName, aqi }) => {
  const [status, setStatus] = useState("");
  const [statusColor, setStatusColor] = useState("");

  useEffect(() => {
    if (aqi >= 0 && aqi <= 50) {
      setStatus("Good");
      setStatusColor("bg-status-good");
    } else if (aqi >= 51 && aqi <= 100) {
      setStatus("Moderate");
      setStatusColor("bg-status-moderate");
    } else if (aqi >= 101 && aqi <= 150) {
      setStatus("Unhealthy for Sensitive Groups");
      setStatusColor("bg-status-ufsg");
    } else if (aqi >= 151 && aqi <= 200) {
      setStatus("Unhealthy");
      setStatusColor("bg-status-unhealthy");
    } else if (aqi >= 201 && aqi <= 300) {
      setStatus("Very Unhealthy");
      setStatusColor("bg-status-vu");
    } else if (aqi > 300) {
      setStatus("Hazardous");
      setStatusColor("bg-status-hazardous");
    } else {
      setStatus("Undefined");
      setStatusColor("bg-status-undefined");
    }
  }, [aqi]);
  return (
    <div className="w-full flex items-center justify-center px-5 py-2">
      <div className="w-full max-w-[1080px] text-[16px] md:text-[18px] text-very-dark-white font-medium py-2 rounded-md flex flex-col md:flex-row gap-2 justify-between">
        <StatComponent className="flex gap-5 justify-center py-2 px-5 rounded-md items-center">
          <div className={`w-[20px] h-[20px] ${statusColor} rounded-full `}></div>
          {cityName ? (
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> {cityName}
            </p>
          ) : (
            "Loading..."
          )}
        </StatComponent>
        <StatComponent className="flex gap-5 justify-center py-2 px-5 rounded-md items-center">
          <p>
            Status: <span className="font-normal">{status}</span>
          </p>
          {aqi ? (
            <p>
              AQI: <span className="font-normal">{aqi}</span>
            </p>
          ) : (
            "Loading"
          )}
        </StatComponent>
      </div>
    </div>
  );
};

export default StatTrack;

const StatComponent = styled.div`
  background: rgba(0, 0, 0, 0.25);
  // box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  // border-radius: 10px;
  // border: 1px solid rgba(255, 255, 255, 0.18);
`;
