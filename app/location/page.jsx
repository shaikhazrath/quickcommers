'use client'
import { LocateIcon, MoveLeft, Search } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { FaLocationArrow } from "react-icons/fa";
import DeckGL from "@deck.gl/react";
import {IconLayer} from '@deck.gl/layers';
import StaticMap from "react-map-gl";
import maplibregl, { Padding } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { MdChevronLeft } from "react-icons/md";
import Link from 'next/link';
const OlaMapsAutocomplete = () => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);
  const [viewState, setViewState] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 17,
  });

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
        const response = await fetch(`https://api.olamaps.io/places/v1/reverse-geocode?latlng=${lat},${lng}&api_key=sZSytl79psJ38265tWRRj6RRZzTqU4zCQvXglZo4`);
        if (!response.ok) throw new Error('Failed to fetch location data');
        const data = await response.json();
        setViewState({
          longitude: data.results[0].geometry.location.lng,
          latitude: data.results[0].geometry.location.lat,
          zoom: 17
        });
        setLocationData(data.results[0].formatted_address);
         localStorage.setItem('selectedLocation',data.results[0].formatted_address)
      } catch (err) {
        setError(err.message);
      }
    };

    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchLocation(latitude, longitude);
          },
          () => setError('Unable to retrieve your location')
        );
      } else {
        setError('Geolocation is not supported by your browser');
      }
    };

    getUserLocation();
  }, []);

  // Icon layer for the map
  const iconLayer = new IconLayer({
    id: 'icon-layer',
    data: [{ position: [viewState.longitude, viewState.latitude], size: 2 }],
    getIcon: d => ({
      url: 'https://img.icons8.com/ultraviolet/40/000000/marker.png', // Add your icon URL here
      width: 128,
      height: 128,
      anchorY: 128
    }),
    getPosition: d => d.position,
    getSize: d => d.size,
    sizeScale: 15
  });

  return (
    <div>
       <Link href={'/'} className=' flex gap-1 items-center px-5 pt-2'>
      <MdChevronLeft color='white' size={30}/>
      <h1 className=' text-white'>Home</h1>
      </Link>
    <div className="p-5">
     
    
      <div className="relative w-full">
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          className="w-full p-2 pl-10 rounded-md text-base font-medium placeholder:text-base placeholder:font-normal"
          placeholder="Search for places (e.g., Maddilapalem)"
        />
        <Search size={20} className="absolute text-neutral-500 top-1/2 left-3 transform -translate-y-1/2" />
      </div>
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <div key={index} className='text-neutral-950 flex items-center gap-2 p-2 bg-white my-2 rounded-md'>
              <li
                className=""
                onClick={() => {
                  setLocationData(suggestion.description);
                  setSearchText('');
                  setSuggestions([]);
                  localStorage.setItem('selectedLocation',suggestion.description)

                  setViewState({
                    longitude: suggestion.geometry.location.lng,
                    latitude: suggestion.geometry.location.lat,
                    zoom: 17,
                  });
                }}
              >
                {suggestion.description || suggestion.name}
              </li>
            </div>
          ))}
        </ul>
      )}
      <div className='text-white pt-2'>
        <div className='flex items-center gap-2 pb-2'>
          <FaLocationArrow className='text-cyan-400' />
          <h1 className="font-bold text-2xl bg-gradient-to-r from-cyan-400 to-white text-transparent bg-clip-text">
            Current Selected location
          </h1>
        </div>
        {error ? (
          <p className="text-red-500 mt-2">{error}</p>
        ) : locationData ? (
          <div className='bg-white p-2 mx-2 rounded-md flex gap-2 border border-neutral-300'>
            <p className="text-black">{locationData}</p>
          </div>
        ) : (
          <p className="mt-2 text-gray-400">Loading...</p>
        )}
      </div>
      <div className='fixed m-2 w-[320px]   p-2 bg-white rounded-lg shadow-lg'>
      <DeckGL
      
      style={{
        borderRadius: '10px',
        width: '100%', 
        height: '320px', 
        overflow: 'hidden', 
        position: 'relative', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)', 
      }}    viewState={viewState}
    onViewStateChange={({ viewState }) => setViewState(viewState)}
    controller={true}
    layers={[iconLayer]} 
  >
    <StaticMap
      mapLib={maplibregl}
      mapStyle="https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json"
      transformRequest={(url) => {
        if (url.includes("?")) {
          url = `${url}&api_key=sZSytl79psJ38265tWRRj6RRZzTqU4zCQvXglZo4`;
        } else {
          url = `${url}?api_key=sZSytl79psJ38265tWRRj6RRZzTqU4zCQvXglZo4`;
        }
        return { url };
      }}
    />
  </DeckGL>
</div>

    </div>
    </div>

  );
};

export default OlaMapsAutocomplete;
