const Statrec = (aqi) => {
  let status = "";
  if (aqi >= 0 && aqi <= 50) {
    status = "good";
  } else if (aqi >= 51 && aqi < 100) {
    status = "moderate";
  } else if (aqi >= 101 && aqi < 150) {
    status = "ufsg";
  } else if (aqi >= 151 && aqi < 200) {
    status = "unhealthy";
  } else if (aqi >= 201 && aqi < 300) {
    status = "vuh";
  } else if (aqi >= 300) {
    status = "hazardous";
  } else {
    status = "undefined";
  }
  return status;
};

export default Statrec;
