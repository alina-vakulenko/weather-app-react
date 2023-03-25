import React, { useState } from "react";

import CurrentLocationWeather from "./CurrentLocationWeather";
import SearchForm from "../../components/SearchForm";
import WeatherData from "../../components/WeatherData";

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

  const { data, error, isPending, isResolved, isRejected } = useFetch(
    `${apiBaseUrl}/current`,
    queryParams,
    weatherReducer,
    "current"
  );

  const suggestedCities = ["Tokyo", "Delhi", "New York", "Paris"];

  return (
    <div className={style.currentWeatherBlock}>
      <div className="row d-md-flex align-items-center">
        <div className="col d-none d-md-block">
          <ul className={style.suggestedCitiesList}>
            {suggestedCities.map((city, index) => {
              return (
                <li key={index}>
                  <a
                    href="/"
                    onClick={(event) => setCity(event.target.innerText)}
                    className={style.suggestedCity}
                  >
                    {city}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col text-center text-md-end">
          <CurrentLocationWeather setQueryParams={setQueryParams} />
        </div>
      </div>
      <SearchForm
        handleSubmit={handleSubmit}
        changeCity={(event) => setCity(event.target.value)}
      />

      {isPending && (
        <div className="d-flex justify-content-center">
          <SpinnerRoundFilled color="0f0f8b" size={70} />
        </div>
      )}
      {isRejected && <div>{error}</div>}
      {isResolved && <WeatherData data={data} />}
    </div>
  );
}
