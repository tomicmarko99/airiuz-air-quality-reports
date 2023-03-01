import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

const HeroMap = ({ aqiData }) => {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    if (aqiData?.city?.geo) {
      setPosition([aqiData.city.geo[0], aqiData.city.geo[1]]);
    }
  }, [aqiData]);

  const RecenterAutomatically = () => {
    const map = useMap();
    useEffect(() => {
      map.panTo(position);
    }, [position]);
    return null;
  };

  return (
    <div className="w-full h-[200px]">
      <MapContainer
        className="z-10"
        style={{ width: "100%", height: "100%" }}
        center={position}
        zoom={9}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
          attribution='&copy; <a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <TileLayer url="https://tiles.aqicn.org/tiles/usepa-pm25/{z}/{x}/{y}.png?token=fe7f80903a47cd16d31da36d7bee8aa8d5eee45f" />

        <RecenterAutomatically />
      </MapContainer>
    </div>
  );
};

export default HeroMap;
