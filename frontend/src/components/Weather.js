import { FaCloudSun } from "react-icons/fa";
// import { FaCloudSunRain } from "react-icons/fa";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { FaCloudSun } from "react-icons";
const Weather = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("Patna");
  //   let API_KEY = process.env.API_KEY;
  let API_KEY = "6b77f837eac454bfa623711170bb9acc";
  const fetchWeatherData = async () => {
    if (!location) return; // Prevent API call if location is empty
    setLoading(true); // Start loading
    setError(null); // Reset error state

    const options = {
      method: "GET",
      url: `http://api.weatherstack.com/current`,
      params: {
        access_key: API_KEY,
        query: location,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data); // Make the API request
      setWeatherData(response.data); // Store the weather data in the state
    } catch (err) {
      setError("Error fetching weather data"); // Set error message if request fails
    } finally {
      setLoading(false); // Stop loading after the request completes
    }
  };
  useEffect(() => {
    if (location) {
      fetchWeatherData(); // Call the API whenever location changes
    }
  }, [location]); // Run only when location changes
  return (
    <div>
      <div className="flex items-center justify-center ">
        <label htmlFor="search " className="input text-5xl font-bold mb-6">
          <input
            type="search"
            id="search"
            className="outline-none  bg-slate-600 text-white   p-3 rounded-l-md text-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter city name"
          />
        </label>
        <button
          className="bg-red-900 text-white p-2 rounded-r-md hover:bg-red-700 "
          onClick={fetchWeatherData}
        >
          Search
        </button>
      </div>
      <div>
        <h1 className=" text-center text-5xl font-bold mb-6">Weather App</h1>
        {loading && <p className="text-xl text-center">Loading...</p>}{" "}
        {/* Show loading text */}
        {error && (
          <p className="text-xl text-center text-red-500">{error}</p>
        )}{" "}
        {/* Show error message */}
        <div className="text-center mt-6">
          {weatherData && weatherData.current ? (
            <div>
              <div className="flex justify-center mb-4">
                <FaCloudSun size={40} />
              </div>
              <h2 className="text-3xl mb-2">
                {weatherData.location.name}, {weatherData.location.country}
              </h2>
              <p className="text-2xl mb-4">
                Weather: {weatherData.current.temperature}°C
              </p>
              <p className="text-lg">
                {weatherData.current.weather_descriptions[0]}
              </p>
              <img
                src={weatherData.current.weather_icons[0]}
                alt={weatherData.current.weather_descriptions[0]}
                className="mt-4 mx-auto"
              />
            </div>
          ) : (
            <p>Please enter a location to get the weather.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
