'use client';

import { useState, useEffect, useRef } from 'react';
import { GoogleMap, Polyline } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '600px',
};

const defaultCenter = { lat: 35.5951, lng: -82.5515 }; // Asheville, NC

type Route = {
  id: number;
  slug: string;
  date?: string;
  path: { lat: number; lng: number }[];
  distance: number;
  shortDescription: string;
  longDescription: string;
  staticMapUrl: string;
};

const CreateRide = () => {
  const [path, setPath] = useState<{ lat: number; lng: number }[]>([]);
  const [savedRoutes] = useState<Route[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [distance, setDistance] = useState<number>(0);
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [staticMapUrl, setStaticMapUrl] = useState('');
  const [date, setDate] = useState<string>('');
  const googleRef = useRef<typeof google | null>(null); // Store Google API

  useEffect(() => {
    if (typeof window !== 'undefined' && window.google) {
      googleRef.current = window.google;
    }
  }, []);

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const newPath = [...path, { lat: event.latLng.lat(), lng: event.latLng.lng() }];

      if (newPath.length > 1 && googleRef.current) {
        const lastPoint = newPath[newPath.length - 2];
        const newPoint = newPath[newPath.length - 1];

        // Compute distance in meters and convert to kilometers
        const segmentDistance = googleRef.current.maps.geometry.spherical.computeDistanceBetween(
          lastPoint,
          newPoint,
        );

        setDistance((prevDistance) => prevDistance + segmentDistance * 0.000621371); // Convert to miles
      }

      setPath(newPath);
    }
  };

  const saveRoute = async () => {
    if (path.length === 0) {
      alert('Please add some points to the map before saving.');
      return;
    }

    const formattedDate = date ? new Date(date).toISOString() : null;

    setLoading(true);

    try {
      const response = await fetch('/api/routes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: shortDescription || `Route ${Date.now()}`,
          path,
          shortDescription,
          longDescription,
          staticMapUrl,
          date: formattedDate,
          distance: parseFloat(distance.toFixed(2)),
        }),
      });

      if (response.ok) {
        alert('Route saved successfully!');
        setPath([]);
        setShortDescription('');
        setLongDescription('');
        setStaticMapUrl('');
        setDate('');
        setDistance(0);
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

  return (
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
      <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} />
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
  );
};

export default CreateRide;
