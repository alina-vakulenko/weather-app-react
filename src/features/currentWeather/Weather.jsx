import React, { useState } from "react";

import SearchForm from "../../components/SearchForm";
import WeatherData from "../../components/WeatherData";
import CurrentLocationWeather from "../../features/currentWeather/CurrentLocationWeather";

import { useFetch } from "../../hooks/useFetch";
import { weatherReducer } from "../../reducers/weatherReducer";
import { SpinnerRoundFilled } from "spinners-react";
import { apiBaseUrl, apiKey } from "../../api/apiSettings";

import style from "./Weather.module.css";

export default function Weather({ defaultCity }) {
  const [city, setCity] = useState(defaultCity);
  const initialParams = {
    query: city,
    units: "metric",
    key: apiKey,
  };
  const [queryParams, setQueryParams] = useState(initialParams);

  function handleSubmit(event) {
    event.preventDefault();
    setQueryParams({ ...initialParams, query: city });
  }

  function handleCityClick(event) {
    event.preventDefault();
    setQueryParams({ ...initialParams, query: event.target.textContent });
    setCity("");
  }

  const { data, error, isPending, isResolved, isRejected } = useFetch(
    `${apiBaseUrl}/current`,
    queryParams,
    weatherReducer,
    "current"
  );

  return (
    <div className={style.currentWeatherBlock}>
      <div className="row d-md-flex align-items-center">
        <div className="col-12 col-md-7">
          <SearchForm
            city={city}
            setCity={setCity}
            handleSubmit={handleSubmit}
            handleCityClick={handleCityClick}
            suggestedCities={["Kyiv", "Lviv", "Dnipro"]}
          />
        </div>
        <div className="col-12 col-md-5 text-center text-md-end">
          <CurrentLocationWeather
            setCity={setCity}
            setQueryParams={setQueryParams}
          />
        </div>
      </div>
      {isPending && (
        <div className="d-flex justify-content-center">
          <SpinnerRoundFilled color="0f0f8b" size={70} />
        </div>
      )}
      {isRejected && <div className={style.error}>{error.message}</div>}
      {isResolved && <WeatherData data={data} />}
    </div>
  );
}
