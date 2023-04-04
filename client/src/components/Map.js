import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Client } from '@googlemaps/google-maps-services-js';

const Map = () => {
  const [location, setLocation] = useState(null);

  const handleMapClick = (event) => {
    setLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
  };

  const handleSubmit = async () => {
    const client = new Client({});
    const { data } = await client.reverseGeocode({
      params: {
        latlng: `${location.lat},${location.lng}`,
        key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
      }
    });
    const address = data.results[0].formatted_address;

    // make API call to store location in MySQL
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        center={{ lat: 0, lng: 0 }}
        zoom={2}
        onClick={handleMapClick}
      >
        {location && (
          <Marker
            position={{ lat: location.lat, lng: location.lng }}
          />
        )}
      </GoogleMap>
      <button onClick={handleSubmit}>Submit Location</button>
    </LoadScript>
  );
};

export default Map;