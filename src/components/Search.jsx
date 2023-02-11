import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import cities from "../data/cities.json";
import ReactCountryFlag from "react-country-flag";
import latinize from "latinize";
import styled from "styled-components";

const Search = ({ cityName, aqiData }) => {
  const [searchWord, setSearchWord] = useState("");

  const filteredCities = cities.filter((city) =>
    latinize(city.ctname)
      .toLowerCase()
      .includes(latinize(searchWord).toLowerCase())
  );
  return (
    <SearchComponent className="text-[16px] md:text-[18px] w-full rounded-md p-3 md:p-6 text-very-dark-white flex flex-col gap-8">
      <div className="flex gap-5 items-center">
        <p className="font-semibold">Search&nbsp;city:</p>
        <div className="flex w-full">
          <div className="flex items-center px-3 py-1 md:px-8 md:py-3 bg-soft-yellow text-very-dark-grey rounded-l">
            <FaSearch />
          </div>
          <input
            className="w-full bg-[rgba(0,0,0,.2)] px-3 py-1 rounded-r outline-none"
            type="text"
            placeholder="City name..."
            onChange={(event) => {
              setSearchWord(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="search-results flex flex-col gap-3 h-[150px] overflow-y-scroll pr-2">
        {filteredCities.slice(0, 15).map((city, index) => {
          return (
            <Link
              to={`/city/${city.ctname}`}
              key={index}
              className="bg-[rgba(0,0,0,.2)] px-4 py-2 rounded flex justify-between items-center hover:text-white"
            >
              <div className="flex items-center gap-5 font-medium">
                <ReactCountryFlag countryCode={city.country} />
                <p>{city.ctname}</p>
              </div>
              <FaMapMarkerAlt />
            </Link>
          );
        })}
      </div>
    </SearchComponent>
  );
};

export default Search;

const SearchComponent = styled.div`
  background: rgba(0, 0, 0, 0.25);
  // box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  // border-radius: 10px;
  // border: 1px solid rgba(255, 255, 255, 0.18);
`;
