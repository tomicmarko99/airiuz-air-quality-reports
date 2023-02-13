const Statif = (aqi) => {
  let status = "";
  if (aqi >= 0 && aqi <= 50) {
    status = "Good";
  } else if (aqi >= 51 && aqi <= 100) {
    status = "Moderate";
  } else if (aqi >= 101 && aqi <= 150) {
    status = "Unhealthy for Sensitive Groups";
  } else if (aqi >= 151 && aqi <= 200) {
    status = "Unhealthy";
  } else if (aqi >= 201 && aqi <= 300) {
    status = "Very Unhealthy";
  } else if (aqi > 300) {
    status = "Hazardous";
  } else {
    status = "Undefined";
  }
  return status;
};

export default Statif;
