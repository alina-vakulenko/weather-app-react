import React from "react";

import WeatherIconAnimated from "./WeatherIconAnimated";
import Forecast from "../features/forecast/Forecast";
import WeatherConditions from "./WeatherConditions";
import { formatDate } from "../utils/formatDate";

import style from "../features/currentWeather/Weather.module.css";

export default function WeatherData({ data }) {
  const { city, coordinates, temperature, wind, condition, time } = data;
  const { month, dayOfMonth, dayOfWeek, hours, minutes } = formatDate(time);
  return (
    <div className={style.currentWeatherData}>
      <div className={style.content}>
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-4">
            <div className={style.city}>{city}</div>
            <div className={style.description}>{condition.description}</div>
            <div className={style.date}>
              {dayOfWeek}, {month} {dayOfMonth}
              <br />
              <i className="fa-regular fa-clock"></i> Updated on: {hours}:
              {minutes}
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-2">
            <WeatherIconAnimated icon={condition.icon} />
          </div>

          <div className="col-12 col-sm-6 col-md-2">
            <div className={style.temperature}>
              {Math.round(temperature.current)}
              <span className={style.units}>℃</span>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <WeatherConditions
              temperatureFeels={temperature.feels_like}
              humidity={temperature.humidity}
              speed={wind.speed}
              degree={wind.degree}
            />
          </div>
        </div>
      </div>
      <hr />
      <Forecast coordinates={coordinates} />
    </div>
  );
}
