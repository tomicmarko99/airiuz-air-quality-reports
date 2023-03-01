import goodIcon from "../assets/good-icon.svg";
import moderateIcon from "../assets/moderate-icon.svg";
import ufsgIcon from "../assets/ufsg-icon.svg";
import unhealthyIcon from "../assets/unhealthy-icon.svg";
import vuhIcon from "../assets/vuh-icon.svg";
import hazardousIcon from "../assets/hazardous-icon.svg";

const Staticof = (aqi) => {
  if (aqi >= 0 && aqi <= 50) {
    return goodIcon;
  } else if (aqi >= 51 && aqi < 100) {
    return moderateIcon;
  } else if (aqi >= 101 && aqi < 150) {
    return ufsgIcon;
  } else if (aqi >= 151 && aqi < 200) {
    return unhealthyIcon;
  } else if (aqi >= 201 && aqi < 300) {
    return vuhIcon;
  } else if (aqi >= 300) {
    return hazardousIcon;
  }
};

export default Staticof;
