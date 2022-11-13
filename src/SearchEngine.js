import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [city, setCity] = useState("Dnipro");
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState({});
  const [coords, setCoords] = useState({});
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let iconUrl = `http://openweathermap.org/img/wn/${weather.iconCode}@2x.png`;

  function formatDate(timezone) {
    let currentTime = new Date();
    let localTime = currentTime.getTime();
    let localOffset = currentTime.getTimezoneOffset() * 60000;
    let localCityTime = new Date(localTime + localOffset + 1000 * timezone);
    let day = days[localCityTime.getDay()];
    let hours = localCityTime.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = localCityTime.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let month = months[localCityTime.getMonth()];
    let dayNumber = localCityTime.getDate();
    return {
      month: month,
      dayOfMonth: dayNumber,
      dayOfWeek: day,
      time: `${hours}:${minutes}`,
    };
  }

  function handleResponse(response) {
    setCity(response.data.name);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconCode: response.data.weather[0].icon,
    });
    let fullTime = formatDate(response.data.timezone);
    setCurrentTime({
      month: fullTime.month,
      dayOfMonth: fullTime.dayOfMonth,
      dayOfWeek: fullTime.dayOfWeek,
      time: fullTime.time,
    });
    setCoords({ lon: response.data.coord.lon, lat: response.data.coord.lat });
    setLoaded(true);
  }

  function searchWeather(event) {
    event.preventDefault();
    let apiKey = "b35c686ba9565ba0ab254c2230937552";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function changeCity(event) {
    setCity(event.target.value);
    setLoaded(false);
  }

  function searchCurrentCoords(event) {
    event.preventDefault();
    function searchLocation(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      let apiKey = "7d478f69e1b2f5d563653f13f5f91d76";
      let units = "metric";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
      axios.get(apiUrl).then(handleResponse);
    }
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  let searchForm = (
    <form onSubmit={searchWeather}>
      <input
        type="search"
        placeholder="Enter a city"
        className="input-field"
        onChange={changeCity}
      />
      <input type="submit" value="Search" className="search-button" />
      <button className="current-location-button" onClick={searchCurrentCoords}>
        Current
      </button>
    </form>
  );

  let searchResults = (
    <div className="CurrentWeather">
      <div className="row weather-blocks">
        <div className="col-6">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <div className="current-city">{city}</div>
              <div className="date">
                {currentTime.month} {currentTime.dayOfMonth}
              </div>
              <div className="day-time">
                {currentTime.dayOfWeek} {currentTime.time}
              </div>
            </div>

            <div className="temperature d-flex align-items-center">
              <i className="fa-solid fa-temperature-three-quarters"></i>
              <span>{weather.temperature}°C</span>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="weather-description">
            <img src={iconUrl} alt="current-weather-icon" className="icon" />
            <div className="description">{weather.description}</div>
          </div>
        </div>
        <div className="col-3">
          <div className="weather-conditions">
            <div>
              Humidity: <span>{weather.humidity}%</span>
            </div>
            <div>
              Wind: <span>{weather.wind}m/sec</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (loaded) {
    return (
      <div className="SearchEngine">
        {searchForm}
        {searchResults}
      </div>
    );
  } else {
    return <div className="SearchEngine">{searchForm}</div>;
  }
}
