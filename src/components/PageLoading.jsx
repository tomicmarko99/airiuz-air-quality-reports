import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HashLoading from "./HashLoading";

const PageLoading = ({ children }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 3000);
  }, []);

  return (
    <>
      <PageLoadingComponent
        className={`bg-dark-blue fixed top-0 left-0 w-full h-full z-50 ${
          showContent ? "hidden" : ""
        }`}
      >
        <div className="flex justify-center items-center h-full">
          <HashLoading />
        </div>
      </PageLoadingComponent>
      {showContent && <>{children}</>}
    </>
  );
};

export default PageLoading;

const PageLoadingComponent = styled.div`
  // .spinner {
  //   display: inline-block;
  //   position: relative;
  //   width: 80px;
  //   height: 80px;
  // }

  // .bounce1,
  // .bounce2,
  // .bounce3 {
  //   width: 100%;
  //   height: 100%;
  //   border-radius: 50%;
  //   background-color: currentColor;
  //   opacity: 0.6;
  //   position: absolute;
  //   top: 0;
  //   left: 0;

  //   animation: bounce 2s infinite ease-in-out;
  // }

  // @keyframes bounce {
  //   0%,
  //   100% {
  //     transform: scale(0);
  //   }

  //   50% {
  //     transform: scale(1);
  //   }
  // }

  // .bounce1 {
  //   animation-delay: -1s;
  // }

  // .bounce2 {
  //   animation-delay: -0.5s;
  // }
`;
