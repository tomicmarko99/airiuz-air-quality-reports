import React from "react";
import styled from "styled-components";
import dcybg from "../assets/dcy-bg.svg";

const GetHelp = () => {
  return (
    <GetHelpContainer className="w-full px-5 py-16 flex justify-center align-center">
      <div className="w-full max-w-[720px] text-very-dark-white flex flex-col items-center gap-2">
        <h1 className="text-[24px] md:text-[40px] font-semibold">Get Help with Air Pollution</h1>
        <h2 className="text-[18px] text-light-grey-lime md:text-[22px]">Resources and support for those affected</h2>
        <div className="text-[14px] md:text-[16px] bg-[rgba(0,0,0,.1)] p-5 rounded-md w-full mt-3">
          Air pollution can have serious impacts on our health and well-being. If you or your community is affected by
          air pollution, there are resources and support available. Here are some steps you can take:
          <div className="pl-[20px] mt-4 flex flex-col gap-3">
            <li>
              <span className="font-semibold">Contact Local Authorities:</span> Report air pollution incidents to local
              authorities, such as city or regional governments, to bring attention to the issue and prompt action.
            </li>
            <li>
              <span className="font-semibold">Report Pollution Incidents:</span> Report pollution incidents to the
              appropriate authorities, including information on the location, time, and type of pollution.
            </li>
            <li>
              <span className="font-semibold">Find Resources and Support:</span> Connect with organizations that provide
              resources and support for individuals and communities affected by air pollution. This may include
              environmental advocacy groups, health clinics, or legal resources.
            </li>
            <li>
              <span className="font-semibold">Learn About Your Rights:</span> Familiarize yourself with the legal rights
              of individuals and communities affected by air pollution, including information on filing complaints and
              seeking compensation.
            </li>
            <li>
              <span className="font-semibold">Take Action:</span> Advocate for change by raising awareness about air
              pollution and promoting solutions. Consider organizing a community event, writing to your elected
              representatives, or participating in environmental campaigns.
            </li>
          </div>
        </div>
      </div>
    </GetHelpContainer>
  );
};

export default GetHelp;

const GetHelpContainer = styled.div`
  background-image: url(${dcybg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
