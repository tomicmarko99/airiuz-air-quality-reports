import React from "react";
import ReactCountryFlag from "react-country-flag";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import dwbg2 from "../assets/dw-bg-2.png";
import isoCountries, { registerLocale } from "i18n-iso-countries";
registerLocale(require("i18n-iso-countries/langs/en.json"));

const WorstOffenders = ({ woffCountries }) => {
  const getCountryName = (cn) => {
    const countryName = isoCountries.getName(`${cn}`, "en");
    return countryName;
  };

  return (
    <WorstOffendersContainer className="w-full px-5 py-16 flex justify-center align-center">
      <div className="w-full max-w-[1080px] text-very-dark-grey grid sm:grid-col-reverse grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-[16px] md:text-[18px] p-5 rounded-md bg-[#fafafa] shadow-md order-2 md:order-1 flex flex-col gap-3">
          <div className="mb-2 font-semibold">Top 5 most polluted:</div>
          {woffCountries?.slice(0, 5).map((country, index) => {
            let status = "";
            let statusColor = "";
            if (country.aqi >= 0 && country.aqi <= 50) {
              status = "Good";
              statusColor = "bg-status-good";
            } else if (country.aqi >= 51 && country.aqi <= 100) {
              status = "Moderate";
              statusColor = "bg-status-moderate";
            } else if (country.aqi >= 101 && country.aqi <= 150) {
              status = "Unhealthy for Sensitive Groups";
              statusColor = "bg-status-ufsg";
            } else if (country.aqi >= 151 && country.aqi <= 200) {
              status = "Unhealthy";
              statusColor = "bg-status-unhealthy";
            } else if (country.aqi >= 201 && country.aqi <= 300) {
              status = "Very Unhealthy";
              statusColor = "bg-status-vu";
            } else if (country.aqi > 300) {
              status = "Hazardous";
              statusColor = "bg-status-hazardous";
            } else {
              status = "Undefined";
              statusColor = "bg-status-undefined";
            }
            return (
              <div key={index} className="flex gap-3 justify-between">
                <div className="flex gap-2 items-center">
                  <ReactCountryFlag countryCode={country.country} />
                  <p>{getCountryName(country.country)}</p>
                </div>
                <div
                  className={`status-box text-white p-1 ${statusColor} w-[60px] flex justify-center items-center rounded-md`}
                >
                  {country.aqi}
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-very-light-grey flex flex-col gap-2 order-1 md:order-2">
          <h1 className="text-[24px] md:text-[40px] font-semibold text-very-dark-grey">
            Global Air Quality Report
          </h1>
          <div className="text-[18px] md:text-[22px] text-soft-blue">
            The Most Polluted Countries in Real-Time
          </div>
          <p className="text-[14px] md:text-[16px]">
            Stay informed about the state of the air you breathe. Discover the
            top 5 countries with the worst air quality and learn about their
            pollution levels and status. Keep up with the latest air quality
            trends and take action for a healthier environment.
          </p>
          <div className="flex text-soft-blue">
            <Link
              to="/"
              className="text-[16px] font-medium flex items-center gap-2"
            >
              See All Rankings <FaChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </WorstOffendersContainer>
  );
};

export default WorstOffenders;

const WorstOffendersContainer = styled.div`
  background-image: url(${dwbg2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
