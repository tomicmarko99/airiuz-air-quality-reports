import React, { useState } from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import cities from "../data/cities.json";
import ReactCountryFlag from "react-country-flag";
import latinize from "latinize";

const StationSearch = () => {
  const [searchWord, setSearchWord] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchWord(event.target.value);
    if (event.target.value.trim() === "") {
      setSearchResults([]);
    } else {
      const filteredCities = cities.filter((city) =>
        latinize(city.ctname)
          .toLowerCase()
          .includes(latinize(event.target.value).toLowerCase())
      );
      setSearchResults(filteredCities.slice(0, 15));
    }
  };

  const handleSearchResultClick = () => {
    setSearchWord("");
    setSearchResults([]);
  };

  return (
    <div className="w-full text-very-dark-grey md:w-auto flex flex-col relative">
      <div className="flex rounded-md overflow-hidden shadow-sm">
        <div className="flex items-center px-3 py-1 md:px-8 md:py-3 bg-medium-blue text-white">
          <FaSearch />
        </div>
        <input
          className="w-full bg-white px-3 py-1 outline-none"
          type="text"
          placeholder="City name..."
          value={searchWord}
          onChange={handleSearchChange}
        />
      </div>
      {searchResults.length > 0 && (
        <div className="w-full px-2 bg-white rounded-b-md absolute mt-10 md:mt-12 shadow-sm">
          {searchResults.slice(0, 5).map((city, index) => {
            return (
              <Link
                to={`/city/${city.ctname}`}
                key={index}
                className="w-full flex justify-between items-center my-2"
                onClick={handleSearchResultClick}
              >
                <div className="flex gap-2 items-center">
                  <div>
                    <ReactCountryFlag countryCode={city.country} />
                  </div>
                  <div>{city.ctname}</div>
                </div>
                <div>
                  <FaMapMarkerAlt />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StationSearch;
