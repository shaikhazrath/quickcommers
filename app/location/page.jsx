'use client'
import React, { useState ,useEffect} from 'react';

const OlaMapsAutocomplete = () => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);
  const handleSearchChange = async (e) => {
    const inputValue = e.target.value;
    setSearchText(inputValue);

    if (inputValue.length > 2) { // Fetch suggestions after 3 characters
      try {
        const response = await fetch(
          `https://api.olamaps.io/places/v1/autocomplete?input=${encodeURIComponent(inputValue)}&api_key=sZSytl79psJ38265tWRRj6RRZzTqU4zCQvXglZo4`
        );
        const data = await response.json();
        setSuggestions(data.predictions || []);  // Assuming the suggestions are in 'predictions'
      } catch (error) {
        console.error('Error fetching autocomplete suggestions:', error);
      }
    } else {
      setSuggestions([]); // Clear suggestions if input is too short
    }
  };

  useEffect(() => {
    const fetchLocation = async (lat, lng) => {
      try {
        const response = await fetch(`https://api.olamaps.io/places/v1/reverse-geocode?latlng=${lat},${lng}&api_key=sZSytl79psJ38265tWRRj6RRZzTqU4zCQvXglZo4`, {
          method: 'GET',
          headers: {
            'X-Request-Id': 'sZSytl79psJ38265tWRRj6RRZzTqU4zCQvXglZo4',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch location data');
        }

        const data = await response.json();
        setLocationData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            console.log(latitude)
            fetchLocation(latitude, longitude);
          },
          (err) => {
            setError('Unable to retrieve your location');
          }
        );
      } else {
        setError('Geolocation is not supported by your browser');
      }
    };

    getUserLocation();
  }, []);
  return (
    <div className="autocomplete-container text-white">
      <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        className="border p-2 rounded text-black"
        placeholder="Search for places (e.g., Taj Mahal)"
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list mt-2 border rounded p-2">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="p-2">
              {suggestion.description || suggestion.name}  {/* Adjust based on the response structure */}
            </li>
          ))}
        </ul>
      )}
          <h1>User Location Data</h1>
      {error ? (
        <p>{error}</p>
      ) : locationData ? (
        <pre>{JSON.stringify(locationData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OlaMapsAutocomplete;
