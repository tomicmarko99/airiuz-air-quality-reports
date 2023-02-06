import React from "react";
import GetHelp from "../components/GetHelp";
import HealthRisks from "../components/HealthRisks";
import Hero from "../components/Hero";
import PageLoading from "../components/PageLoading";
import Protect from "../components/Protect";
import Solutions from "../components/Solutions";
import WorstOffenders from "../components/WorstOffenders";

const Home = ({ currentCity, woff }) => {
  return (
    <div className="bg-white">
      <Hero aqiData={currentCity.data} />
      <WorstOffenders woffCountries={woff} />
      <HealthRisks />
      <Protect />
      <GetHelp />
      <Solutions />
    </div>
  );
};

export default Home;
