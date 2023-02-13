import React, { useState, useEffect } from "react";
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
      <div
        className={`bg-dark-blue fixed top-0 left-0 w-full h-full z-50 ${
          showContent ? "hidden" : ""
        }`}
      >
        <div className="flex justify-center items-center h-full">
          <HashLoading />
        </div>
      </div>
      {showContent && <>{children}</>}
    </>
  );
};

export default PageLoading;
