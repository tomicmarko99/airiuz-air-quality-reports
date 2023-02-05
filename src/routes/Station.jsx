import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
  console.log(`current city: ${fixedCity}`);
  return <div>{fixedCity}</div>;
};

export default Station;
