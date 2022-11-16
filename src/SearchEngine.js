import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import SearchForm from "./SearchForm";
import "./SearchEngine.css";

export default function SearchEngine(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);
  const apiKey = "b35c686ba9565ba0ab254c2230937552";
  const units = "metric";

  function handleResponse(response) {
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconCode: response.data.weather[0].icon,
      timestamp: response.data.timezone,
      coordinates: response.data.coord,
    });
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

  if (loaded) {
    return (
      <div className="SearchEngine">
        <SearchForm
          handleSubmit={handleSubmit}
          changeCity={changeCity}
          handleCurrent={queryWeatherForCurrentLocation}
        />
        <WeatherData data={weather} />
      </div>
    );
  } else {
    queryWeatherForEnteredCity();
    return null;
  }
}
