import React from "react";
import ReactCountryFlag from "react-country-flag";
import isoCountries, { registerLocale } from "i18n-iso-countries";
registerLocale(require("i18n-iso-countries/langs/en.json"));

const Rankings = ({ woff }) => {
  const getCountryName = (cn) => {
    const countryName = isoCountries.getName(`${cn}`, "en");
    return countryName;
  };
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
      <div className="text-[16px] md:text-[18px] w-full max-w-[720px] bg-light-grey-lime flex flex-col items-center mt-5 shadow rounded-md px-3 py-2 gap-2">
        <div className="w-full text-very-dark-grey font-semibold flex justify-between px-3 py-2">
          <div>Country</div>
          <div>AQI</div>
        </div>

        {woff?.map((country, index) => {
          if (country.country !== "XK") {
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
              <div className="w-full bg-[rgba(0,0,0,.1)] px-3 py-2 rounded-md flex justify-between items-center text-very-dark-grey">
                <div className="flex gap-2 items-center">
                  <p className="w-[36px] font-semibold">{index}.</p>
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
          }
        })}
      </div>
    </div>
  );
};

export default Rankings;
