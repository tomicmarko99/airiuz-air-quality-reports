import React from "react";
import PulmonaryDisease from "../assets/pulmonary-disease.svg";
import styled from "styled-components";
import dwbg1 from "../assets/dw-bg-1.png";

const HealthRisks = () => {
  return (
    <HealthRisksContainer className="w-full px-5 py-16 flex justify-center align-center">
      <div className="w-full max-w-[1080px] text-very-dark-grey grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-very-light-grey flex flex-col gap-2">
          <h1 className="text-[24px] md:text-[40px] font-semibold text-very-dark-grey">
            Health Risks of Air Pollution
          </h1>
          <h2 className="text-[18px] md:text-[22px] text-soft-blue">
            The Impact of Air Pollution on Our Health
          </h2>
          <p className="text-[14px] md:text-[16px]">
            Air pollution has a wide range of negative effects on human health.
            Long-term exposure to polluted air can lead to respiratory problems,
            such as asthma and bronchitis. It can also increase the risk of
            heart disease and stroke, as well as harm the nervous system and
            cause developmental problems in children. In addition, air pollution
            has been linked to an increased risk of certain cancers, such as
            lung cancer.
          </p>
        </div>
        <div>
          <img src={PulmonaryDisease} alt="" width="100%" height="100%" />
        </div>
      </div>
    </HealthRisksContainer>
  );
};

export default HealthRisks;

const HealthRisksContainer = styled.div`
  background-image: url(${dwbg1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
