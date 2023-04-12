import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-autocomplete";

const LocationForm = () => {
  const [location, setLocation] = useState("");

  const handlePlaceSelect = (place) => {
    setLocation(place.formatted_address);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store location in MySQL database using API call
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="location">Location:</label>
      <GooglePlacesAutocomplete
        apiKey={YOUR_GOOGLE_API_KEY}
        onSelect={handlePlaceSelect}
        inputStyle={{ width: 300 }}
        placeholder="Enter location"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LocationForm;