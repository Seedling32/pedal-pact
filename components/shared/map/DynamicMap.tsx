'use client';

import { GoogleMap, Polyline } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '600px',
};

const defaultCenter = { lat: 35.5951, lng: -82.5515 }; // Asheville, NC

type DynamicMapProps = {
  path: { lat: number; lng: number }[];
  savedRoutes?: { id: number; path: { lat: number; lng: number }[] }[];
  onMapClick?: (event: google.maps.MapMouseEvent) => void;
};

const DynamicMap = ({ path, savedRoutes = [], onMapClick }: DynamicMapProps) => {
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={path.length > 0 ? path[0] : defaultCenter}
      zoom={12}
      onClick={onMapClick}
    >
      <Polyline path={path} options={{ strokeColor: '#FF0000', strokeWeight: 4 }} />
      {savedRoutes.map((route) => (
        <Polyline
          key={route.id}
          path={route.path}
          options={{ strokeColor: '#00FF00', strokeWeight: 4 }}
        />
      ))}
    </GoogleMap>
  );
};

export default DynamicMap;
