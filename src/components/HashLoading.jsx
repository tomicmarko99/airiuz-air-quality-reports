import { useState, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";

const override = {
  display: "block",
  margin: "0 auto",
};

function App() {
  let [loading, setLoading] = useState(true);
  let color = "#F2CD5C";

  return (
    <div className="sweet-loading">
      <HashLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Hash Loader"
        data-testid="loader"
      />
    </div>
  );
}

export default App;
