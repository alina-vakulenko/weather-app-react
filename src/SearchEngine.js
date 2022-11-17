import React, { useState } from "react";
import axios from "axios";
import CurrentLocationWeather from "./CurrentLocationWeather";
import QuickSearchCities from "./QuickSearchCities";
import SearchForm from "./SearchForm";
import WeatherData from "./WeatherData";
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

  function pullCityFromDefault(event) {
    event.preventDefault();
    setCity(event.target.innerText);
    setLoaded(false);
  }
  function queryWeatherForCurrentCity(event) {
    event.preventDefault();
    function loadWeatherForCurrentLocation(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
      axios.get(apiUrl).then(handleResponse);
    }
    navigator.geolocation.getCurrentPosition(loadWeatherForCurrentLocation);
  }
  if (loaded) {
    return (
      <div className="SearchEngine">
        <div className="d-flex justify-content-between">
          <QuickSearchCities handleClick={pullCityFromDefault} />
          <CurrentLocationWeather handleClick={queryWeatherForCurrentCity} />
        </div>
        <SearchForm handleSubmit={handleSubmit} changeCity={changeCity} />
        <WeatherData data={weather} />
      </div>
    );
  } else {
    queryWeatherForEnteredCity();
    return null;
  }
}
