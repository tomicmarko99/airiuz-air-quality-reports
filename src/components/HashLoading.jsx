import React from "react";
import HashLoader from "react-spinners/HashLoader";

const override = {
  display: "block",
  margin: "0 auto",
};

function App() {
  let color = "#F2CD5C";

  return (
    <div className="sweet-loading">
      <HashLoader
        color={color}
        loading={true}
        cssOverride={override}
        size={80}
        aria-label="Hash Loader"
        data-testid="loader"
      />
    </div>
  );
}

export default App;
