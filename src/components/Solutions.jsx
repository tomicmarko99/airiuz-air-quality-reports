import React from "react";

const Solutions = () => {
  return (
    <div className="w-full px-5 py-16 flex justify-center align-center">
      <div className="max-w-[720px] w-full flex flex-col items-center gap-2 text-very-dark-grey">
        <h1 className="text-[24px] md:text-[40px] font-semibold">
          Air Quality Solutions
        </h1>
        <h2 className="text-[18px] text-soft-blue md:text-[22px]">
          Practical Steps to Improve Air Quality
        </h2>
        <p className="text-[14px] md:text-[16px] text-very-light-grey">
          The air we breathe plays a crucial role in our overall health and
          well-being. However, the quality of air is often compromised due to
          various pollutants, such as vehicle emissions, industrial activities,
          and inefficient energy usage. To address this issue, it is important
          to understand the different ways we can all contribute to improving
          air quality. In this section, we will introduce several practical air
          quality solutions that everyone can implement in their daily lives.
        </p>
        <div className="text-[14px] md:text-[16px] bg-light-grey-lime p-5 rounded-md w-full mt-3 flex flex-col gap-3 shadow ">
          <li>
            <span className="text-soft-blue font-semibold">
              Vehicle Maintenance:
            </span>{" "}
            Regular vehicle maintenance and the replacement of polluting
            components can significantly reduce emissions and improve air
            quality.
          </li>
          <li>
            <span className="text-soft-blue font-semibold">
              Public Transportation:
            </span>{" "}
            Encouraging the use of public transportation or cycling instead of
            driving can reduce carbon dioxide emissions and other harmful gases.
          </li>
          <li>
            <span className="text-soft-blue font-semibold">
              Efficient Lighting:
            </span>{" "}
            Adopting energy-efficient lighting as an alternative to traditional
            light bulbs can reduce air pollution.
          </li>
          <li>
            <span className="text-soft-blue font-semibold">
              Sustainable Agriculture:
            </span>{" "}
            Farmers can reduce carbon dioxide emissions and improve air quality
            by using environmentally friendly farming techniques.
          </li>
          <li>
            <span className="text-soft-blue font-semibold">
              Green Buildings:
            </span>{" "}
            The concept of "green buildings" involves the use of eco-friendly
            materials and building techniques to reduce air pollution.
          </li>
          <div className="text-very-soft-blue p-3 rounded bg-[rgba(0,0,0,.1)]">
            By implementing these air quality solutions, we can all play a role
            in creating a healthier and cleaner environment for ourselves and
            future generations.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
