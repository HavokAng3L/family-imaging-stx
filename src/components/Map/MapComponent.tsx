import { FC } from "react";
import { MapComponentObject } from "../../types/types";

import { MapContainer, TileLayer, Marker } from "react-leaflet";

// For map
// Coords - LAT: 26.267111, LONG: -98.199783

const MapComponent: FC<MapComponentObject> = ({
  mapLatitude,
  mapLongitude,
}) => {
  return (
    <MapContainer
      center={[mapLatitude, mapLongitude]}
      zoom={18}
      scrollWheelZoom={false}
      className="w-100 h-100"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[mapLatitude, mapLongitude]}></Marker>
    </MapContainer>
  );
};

export default MapComponent;
