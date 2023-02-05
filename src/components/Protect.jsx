import React from "react";
import styled from "styled-components";
import dwbg2 from "../assets/dw-bg-2.png";
import worldmask from "../assets/world-mask.svg";

const Protect = () => {
  return (
    <ProtectContainer className="w-full px-5 py-16 flex justify-center align-center">
      <div className="w-full max-w-[1080px] text-very-dark-grey grid sm:grid-col-reverse grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <img src={worldmask} alt="" width="100%" height="100%" />
        </div>
        <div className="order-1 md:order-2 text-very-light-grey flex flex-col gap-2">
          <h1 className="text-[24px] md:text-[40px] font-semibold text-very-dark-grey">
            Protecting from Air Pollution
          </h1>
          <h2 className="text-[18px] md:text-[22px] text-soft-blue">
            Essential tips
          </h2>
          <p className="text-[14px] md:text-[16px]">
            Protect yourself and your family from air pollution with these
            essential tips:
          </p>
          <div className="pl-[20px] text-[14px] md:text-[16px]">
            <li>Wear a face mask in high pollution areas.</li>
            <li>Limit outdoor exposure during high pollution times.</li>
            <li>Use pollution-resistant plants in your home or garden.</li>
            <li>Adopt clean energy sources like wind and solar power.</li>
            <li>
              Increase indoor physical activity during high pollution times.
            </li>
          </div>
        </div>
      </div>
    </ProtectContainer>
  );
};

export default Protect;

const ProtectContainer = styled.div`
  background-image: url(${dwbg2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
