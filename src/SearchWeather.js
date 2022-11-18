import React, { useState } from "react";
import axios from "axios";
import CurrentLocationWeather from "./CurrentLocationWeather";
import QuickSearchCities from "./QuickSearchCities";
import SearchForm from "./SearchForm";
import WeatherData from "./WeatherData";
import { apiUrlCurrentByCity, apiUrlCurrentByCoordinates } from "./apiSettings";
import "./SearchWeather.css";
import { SpinnerRoundFilled } from "spinners-react";

export default function SearchWeather(props) {
  const [city, setCity] = useState({
    required: props.defaultCity,
    founded: "",
  });
  const [weather, setWeather] = useState({});
  const [loadedWeather, setLoadedWeather] = useState(false);

  function handleResponse(response) {
    const currentWeather = response.data;
    setCity({ ...city, founded: currentWeather.city });
    setWeather({
      coordinates: currentWeather.coordinates,
      temperature: currentWeather.temperature.current,
      feelsLike: currentWeather.temperature.feels_like,
      humidity: currentWeather.temperature.humidity,
      windSpeed: currentWeather.wind.speed,
      windDegree: currentWeather.wind.degree,
      description: currentWeather.condition.description,
      iconUrl: currentWeather.condition.icon_url,
      iconText: currentWeather.condition.icon,
      timestamp: currentWeather.time,
    });
    setLoadedWeather(true);
  }

  function queryWeatherForEnteredCity() {
    axios.get(apiUrlCurrentByCity(city.required)).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    queryWeatherForEnteredCity();
  }

  function changeCity(event) {
    setCity({ ...city, required: event.target.value });
  }

  function pullCityFromDefault(event) {
    event.preventDefault();
    setCity({ ...city, required: event.target.innerText });
    setLoadedWeather(false);
  }

  function queryWeatherForCurrentCity(event) {
    event.preventDefault();

    function loadWeatherForCurrentLocation(position) {
      axios
        .get(apiUrlCurrentByCoordinates(position.coords))
        .then(handleResponse);
    }

    navigator.geolocation.getCurrentPosition(loadWeatherForCurrentLocation);
  }

  if (loadedWeather) {
    return (
      <div className="SearchWeather">
        <div className="row d-md-flex align-items-center">
          <div className="col d-none d-md-block">
            <QuickSearchCities handleClick={pullCityFromDefault} />
          </div>
          <div className="col text-center text-md-end">
            <CurrentLocationWeather handleClick={queryWeatherForCurrentCity} />
          </div>
        </div>
        <SearchForm
          handleSubmit={handleSubmit}
          changeCity={changeCity}
          city={city.founded}
          description={weather.description}
        />
        <WeatherData data={weather} />
      </div>
    );
  } else {
    queryWeatherForEnteredCity();
    return (
      <div className="d-flex justify-content-center">
        <SpinnerRoundFilled color="0f0f8b" size={70} />
      </div>
    );
  }
}
