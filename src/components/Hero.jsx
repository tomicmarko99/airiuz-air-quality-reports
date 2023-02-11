import React from "react";
import { Link } from "react-router-dom";
import HeroMap from "./HeroMap";
import Search from "./Search";
import StatTrack from "./StatTrack";
import { FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import BlueBg from "../assets/blue-bg-hero.svg";

const Hero = ({ aqiData }) => {
  return (
    <HeroComponent className="w-full flex gap-12 md:gap-16 flex-col items-center pt-[52px] justify-between min-h-[100vh]">
      {aqiData ? (
        <StatTrack cityName={aqiData.city.name} aqi={aqiData.aqi} />
      ) : (
        "Loading..."
      )}
      <div className="w-full max-w-[1080px] px-5 text-center">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-[24px] md:text-[40px] font-semibold text-very-dark-white">
            Real Time Air Quality Updates
          </h1>
          <h2 className="text-[18px] md:text-[22px] text-very-dark-white mt-3">
            Track pollution levels in your area and stay informed with
            personalized alerts and recomendations
          </h2>
          <div className="text-[16px] font-medium flex gap-8 mt-6">
            <Link
              to="/"
              className="text-very-dark-grey bg-soft-yellow hover:bg-light-yellow px-[20px] md:px-[40px] py-2 rounded transition ease-in duration-100"
            >
              Track AQI
            </Link>
            <Link
              to="/"
              className="text-very-dark-white hover:text-white flex items-center gap-2 transition ease-in duration-100"
            >
              Learn more <FaChevronRight />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full px-5 flex justify-center ">
        <div className="w-full max-w-[1080px]">
          <Search aqiData={aqiData} />
        </div>
      </div>
      <HeroMap aqiData={aqiData} />
    </HeroComponent>
  );
};

export default Hero;

const HeroComponent = styled.div`
  background-image: url(${BlueBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
