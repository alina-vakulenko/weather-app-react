import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
// import DefaultCities from "./DefaultCities";
import "./SearchEngine.css";

export default function SearchEngine(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);
  const apiKey = "b35c686ba9565ba0ab254c2230937552";
  let units = "metric";
  // const [coords, setCoords] = useState({});

  function handleResponse(response) {
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      timestamp: response.data.timezone,
    });
    // setCoords({ lon: response.data.coord.lon, lat: response.data.coord.lat });
    setLoaded(true);
  }

  function queryWeatherForEnteredCity() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    queryWeatherForEnteredCity();
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function queryWeatherForCurrentLocation(event) {
    event.preventDefault();
    function searchLocation(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
      axios.get(apiUrl).then(handleResponse);
    }
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  let searchForm = (
    <div>
      {/* <DefaultCities /> */}
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city"
          className="form-control"
          autoFocus="on"
          onChange={changeCity}
        />
        <div>
          <input type="submit" value="Search" className="search-button" />
          <button
            className="current-location-button"
            onClick={queryWeatherForCurrentLocation}
          >
            Current
          </button>
        </div>
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div className="SearchEngine">
        {searchForm}
        <WeatherData data={weather} />
      </div>
    );
  } else {
    queryWeatherForEnteredCity();
    return (
      <div className="SearchEngine">
        {searchForm}
        <div>Loading weather data...</div>
      </div>
    );
  }
}
