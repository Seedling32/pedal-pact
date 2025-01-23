'use client';

import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api';
import Link from 'next/link';

const mapContainerStyle = {
  width: '100%',
  height: '600px',
};

const defaultCenter = { lat: 35.5951, lng: -82.5515 }; // Asheville, NC

type Route = {
  id: number;
  name: string;
  path: { lat: number; lng: number }[];
  shortDescription: string;
  longDescription: string;
  staticMapUrl: string;
};

const CreateRide = () => {
  const [path, setPath] = useState<{ lat: number; lng: number }[]>([]);
  const [savedRoutes, setSavedRoutes] = useState<Route[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [staticMapUrl, setStaticMapUrl] = useState('');

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      setPath([...path, { lat: event.latLng.lat(), lng: event.latLng.lng() }]);
    }
  };

  const saveRoute = async () => {
    if (path.length === 0) {
      alert('Please add some points to the map before saving.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/routes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `Route ${Date.now()}`,
          path,
          shortDescription,
          longDescription,
          staticMapUrl,
        }),
      });

      if (response.ok) {
        alert('Route saved successfully!');
        setPath([]);
        setShortDescription('');
        setLongDescription('');
        setStaticMapUrl('');
        // fetchRoutes();
      } else {
        alert('Failed to save the route.');
      }
    } catch (error) {
      console.error('Error saving route:', error);
      alert('An error occurred while saving the route.');
    } finally {
      setLoading(false);
    }
  };

  const fetchRoutes = async () => {
    try {
      const response = await fetch('/api/routes/get');
      if (response.ok) {
        const data = await response.json();
        setSavedRoutes(
          data.map(
            (route: {
              id: number;
              name: string;
              path: string;
              shortDescription: string;
              longDescription: string;
            }) => ({
              id: route.id,
              name: route.name,
              path: JSON.parse(route.path),
              shortDescription: route.shortDescription,
              longDescription: route.longDescription,
            }),
          ),
        );
      } else {
        console.error('Failed to fetch routes.');
      }
    } catch (error) {
      console.error('Error fetching routes:', error);
    }
  };

  // useEffect(() => {
  //   fetchRoutes();
  // }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <div style={{ position: 'relative', textAlign: 'center', padding: '20px' }}>
        <h1>Bike Route Planner</h1>
        <input
          type="text"
          placeholder="Short description"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          style={{ marginBottom: '10px', width: '100%', padding: '10px' }}
        />
        <textarea
          placeholder="Long description"
          value={longDescription}
          onChange={(e) => setLongDescription(e.target.value)}
          style={{
            marginBottom: '20px',
            width: '100%',
            padding: '10px',
            height: '100px',
          }}
        />
        <div style={{ position: 'relative', width: '100%', height: '600px' }}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={defaultCenter}
            zoom={12}
            onClick={handleMapClick}
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
          <button
            onClick={saveRoute}
            disabled={loading}
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '80px',
              padding: '10px 20px',
              background: loading ? 'gray' : 'blue',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'Saving...' : 'Save Route'}
          </button>
        </div>
      </div>
    </LoadScript>
  );
};

export default CreateRide;
