import { FaWater } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [location, setLocation] = useState(''); // State for location input
  const [weatherData, setWeatherData] = useState(null); // State for weather data
  const [error, setError] = useState(''); // State for error messages

  const handleLocationChange = (event) => {
    setLocation(event.target.value); // Update location state
  };

  const handleSearch = async () => {
    // Reset previous error and data
    setError('');
    setWeatherData(null);
    
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: location }, // Use the location from the input
      headers: {
        'x-rapidapi-key': 'e989acbe97mshb662ead4e46fe3ep1fbfd0jsn8bef146f1ac4',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setWeatherData(response.data); // Update weather data state
      console.log(response.data);
    } catch (error) {
      setError('Error fetching weather data. Please try again.'); // Set error message
      console.error(error);
    }
  };

  return (
    <div className='flex justify-center items-center mt-5'>
      <div className='bg-gradient-to-tr from-cyan-600 via-cyan-400 to-blue-400 w-[39rem] h-[34rem] shadow-lg shadow-slate-700 rounded-lg'>
        <h1 className='text-2xl font-serif font-semibold text-center mt-9 text-white'>Weather App</h1>
        <div className='flex justify-center gap-3 mt-[2rem] items-center'>
          <div className='bg-white w-[18rem] rounded-lg border-2 border-blue-900 h-[7vh]'>
            <input
              type="search"
              placeholder='Search any location here'
              className='w-[16rem] h-[5vh] rounded-lg border-none mt-1 outline-none pl-2 text-center'
              value={location}
              onChange={handleLocationChange}
            />
          </div>
          <div>
            <button className='rounded-md text-white py-2 px-8 bg-black' onClick={handleSearch}>Search</button>
          </div>
        </div>
        {weatherData && (
          <div className='flex justify-center mt-2'>
            <div className="flex-col">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/035/264/739/small_2x/cloudy-weather-icon-3d-neture-blue-design-for-element-free-png.png" alt="Weather Icon" className='w-[13rem] h-[13rem]' />
              <h1 className="text-center text-white text-3xl font-serif font-semibold">{weatherData.location.name}</h1>
            </div>
          </div>
        )}
        {weatherData && (
          <div className="flex justify-between mt-8">
            <div className="ml-8 flex justify-center gap-3 items-center">
              <FaWind className="text-white text-2xl" />
              <div>
                <h1 className="text-white text-2xl mt-3">{weatherData.current.wind_kph} km/h</h1>
                <p className="text-white">Wind Speed</p>
              </div>
            </div>
            <div className="mr-8 flex justify-center gap-3 items-center">
              <FaWater className="text-white text-2xl" />
              <div>
                <h1 className="text-white text-2xl mt-3">{weatherData.current.humidity}%</h1>
                <p className="text-white">Humidity</p>
              </div>
            </div>
          </div>
        )}
        {error && (
          <p className="text-white text-center mt-8">{error}</p>
        )}
      </div>
    </div>
  );
}