import React from "react";
import QaComponent from "../components/QaComponent";
import FaqsList from "../data/Faqs.json";

const Faqs = () => {
  return (
    <div className="w-full bg-bgr-white text-very-dark-grey px-5 py-16 pt-28 flex flex-col items-center">
      <div className="text-[24px] md:text-[40px] font-semibold">
        FAQs - Airiuz
      </div>
      <div className="text-[18px] md:text-[22px] text-soft-blue">
        Last updated: 8 February 2023
      </div>
      <div className="w-full max-w-[720px] bg-white flex flex-col items-center mt-5 shadow rounded-md">
        {FaqsList.map((qa) => {
          return <QaComponent q={qa.question} a={qa.answer} />;
        })}
      </div>
    </div>
  );
};

export default Faqs;
