'use client'
import React,{useState,useEffect} from 'react'
import NavBar from './components/home/NavBar'
import ProductsCategory from './components/home/ProductsCategory'
import Banner from './components/home/Banner'
import CartOrder from './components/CartOrders'
const page = () => {
  useEffect(() => {
    const fetchLocation = async (lat, lng) => {
      try {
        const response = await fetch(`https://api.olamaps.io/places/v1/reverse-geocode?latlng=${lat},${lng}&api_key=sZSytl79psJ38265tWRRj6RRZzTqU4zCQvXglZo4`);
        if (!response.ok) throw new Error('Failed to fetch location data');
        const data = await response.json();
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
  return (
    <div className=' flex flex-col gap-2 '>
      <NavBar/>
      <div className=' flex items-center justify-center gap-2'>
        <h1 className='text-white font-semibold '>Delivery In <span className=' bg-gradient-to-tr from-blue-700 to-blue-500 px-2 py-1 font-bold rounded-md'>10 Mins</span> </h1>
        <img src="delivery.gif" alt="My cool gif" className=' w-10 h-10 rounded-full'/>
      </div>
      <Banner/>
      <div>
        <h1 className='text-white px-5 py-3 font-semibold'>Explore By Categories</h1>
      </div>
      <ProductsCategory/>
      <CartOrder/>
    </div>
  )
}

export default page