import React from "react";
import facemask from "../assets/facemask-icon.svg";
import purifier from "../assets/air-purifier-icon.svg";
import owindow from "../assets/open-window-icon.svg";
import cwindow from "../assets/close-window-icon.svg";
import bicycle from "../assets/bicycle-icon.svg";
import nobicycle from "../assets/no-bicycle-icon.svg";
import Statrec from "../functions/Statrec";
import Recommendations from "../data/Recommendations.json";

const HealthRecommendations = ({ aqi }) => {
  const status = Statrec(aqi);
  if (!aqi) {
    return <div>Recommendations are not available</div>;
  }
  const recommendationData = Recommendations[status].map((rcm) => ({
    ...rcm,
    image: getImageUrl(rcm.image),
  }));
  console.log(recommendationData);
  return (
    <div className="w-full mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
      {recommendationData.map((rcm) => {
        return (
          <div key={rcm.image} className="flex gap-5 items-center">
            <div>
              <img src={rcm.image} alt="" className="max-h-[60px] w-[60px]" />
            </div>
            <div className="text-[14px] md:text-[16px]">
              {rcm.recommendation}
            </div>
          </div>
        );
      })}
    </div>
  );
};

function getImageUrl(imageName) {
  switch (imageName) {
    case "facemask":
      return facemask;
    case "purifier":
      return purifier;
    case "owindow":
      return owindow;
    case "cwindow":
      return cwindow;
    case "bicycle":
      return bicycle;
    case "nobicycle":
      return nobicycle;
    default:
      return "";
  }
}

export default HealthRecommendations;
