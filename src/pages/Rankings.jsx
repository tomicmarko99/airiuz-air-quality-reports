import React, { useState } from "react";
import Statf from "../functions/Statf";
import ReactCountryFlag from "react-country-flag";
import isoCountries, { registerLocale } from "i18n-iso-countries";
import { FaSearch } from "react-icons/fa";
registerLocale(require("i18n-iso-countries/langs/en.json"));

const Rankings = ({ woff }) => {
  const getCountryName = (cn) => {
    const countryName = isoCountries.getName(`${cn}`, "en");
    return countryName;
  };
  const countriesWithIds = woff?.map((country, index) => {
    return { ...country, id: index + 1 };
  });

  const [searchWord, setSearchWord] = useState("");
  const filteredCountries =
    countriesWithIds?.filter((country) => {
      return getCountryName(country.country)
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    }) ?? [];

  return (
    <div className="w-full bg-white text-very-dark-grey px-5 py-16 pt-28 flex flex-col items-center">
      <div className="text-[24px] md:text-[40px] font-semibold">
        Global Air Quality Report
      </div>
      <div className="text-[18px] md:text-[22px] text-soft-blue">
        The Most Polluted Countries in Real-Time
      </div>
      <div className="w-full max-w-[720px] grid grid-cols-2 gap-2 mt-5 text-[14px] md:text-[16px]">
        <div className="bg-status-good text-white flex flex-col text-center justify-center items-center align-center gap-1 p-2 rounded-md">
          <div>Good</div>
          <div>0-50</div>
        </div>
        <div className="bg-status-moderate text-white flex flex-col text-center justify-center items-center align-center gap-1 p-2 rounded-md">
          <div>Moderate</div>
          <div>51-100</div>
        </div>
        <div className="bg-status-ufsg text-white flex flex-col text-center justify-center items-center align-center gap-1 p-2 rounded-md">
          <div>Unhealthy for Sensitive Groups</div>
          <div>101-150</div>
        </div>
        <div className="bg-status-unhealthy text-white flex flex-col text-center justify-center items-center align-center gap-1 p-2 rounded-md">
          <div>Unhealthy</div>
          <div>151-200</div>
        </div>
        <div className="bg-status-vu text-white flex flex-col text-center justify-center items-center align-center gap-1 p-2 rounded-md">
          <div>Very Unhealthy</div>
          <div>201-300</div>
        </div>
        <div className="bg-status-hazardous text-white flex flex-col text-center justify-center items-center align-center gap-1 p-2 rounded-md">
          <div>Hazardous</div>
          <div>300+</div>
        </div>
      </div>
      <div className="w-full mt-5 flex justify-center text-[16px] md:text-[18px]">
        <div className="w-full max-w-[720px] flex items-center gap-5 justify-between">
          <div>Search cuntry:</div>
          <div className="flex">
            <div className="flex items-center px-3 py-1 md:px-8 md:py-3 bg-soft-yellow text-very-dark-grey rounded-l">
              <FaSearch />
            </div>
            <input
              className="w-full bg-light-grey-lime px-3 py-1 rounded-r outline-none"
              type="text"
              placeholder="City name..."
              onChange={(event) => {
                setSearchWord(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="text-[16px] md:text-[18px] w-full max-w-[720px] bg-light-grey-lime flex flex-col items-center mt-5 shadow rounded-md px-3 py-2 gap-2">
        <div className="w-full text-very-dark-grey font-semibold flex justify-between items-center px-2 py-2 gap-5">
          <div className="flex gap-5">
            <div>Rank</div>
            <div>Country</div>
          </div>

          <div>AQI</div>
        </div>

        {filteredCountries?.map((country, index) => {
          const idx = index + 1;
          if (country.country !== "XK") {
            return (
              <div className="w-full bg-[rgba(0,0,0,.1)] px-3 py-2 rounded-md flex justify-between items-center text-very-dark-grey">
                <div className="flex gap-2 items-center">
                  <p className="w-[36px] font-semibold">{country.id}.</p>
                  <ReactCountryFlag countryCode={country.country} />
                  <p>{getCountryName(country.country)}</p>
                </div>
                <div
                  className={`status-box text-white p-1 ${Statf(
                    country.aqi
                  )} w-[60px] flex justify-center items-center rounded-md`}
                >
                  {country.aqi}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Rankings;
