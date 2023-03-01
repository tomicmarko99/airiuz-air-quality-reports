const Statf = (aqi) => {
  let statusColor = "";
  if (aqi >= 0 && aqi <= 50) {
    statusColor = "bg-status-good";
  } else if (aqi >= 51 && aqi < 100) {
    statusColor = "bg-status-moderate";
  } else if (aqi >= 101 && aqi < 150) {
    statusColor = "bg-status-ufsg";
  } else if (aqi >= 151 && aqi < 200) {
    statusColor = "bg-status-unhealthy";
  } else if (aqi >= 201 && aqi < 300) {
    statusColor = "bg-status-vu";
  } else if (aqi >= 300) {
    statusColor = "bg-status-hazardous";
  } else {
    statusColor = "bg-status-undefined";
  }
  return statusColor;
};

export default Statf;
