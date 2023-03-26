import React from "react";

import WeatherIconAnimated from "./WeatherIconAnimated";
import Forecast from "../features/forecast/Forecast";
import { formatDate } from "../utils/formatDate";

import style from "../features/currentWeather/Weather.module.css";

export default function WeatherData({ data }) {
  const { city, coordinates, temperature, wind, condition, time } = data;
  const { month, dayOfMonth, dayOfWeek, hours, minutes } = formatDate(time);
  return (
    <div className={style.currentWeatherData}>
      <div className={style.content}>
        <div className="row">
          <div className="col-6 col-md-3 d-flex flex-column align-items-center justify-content-center">
            <div className={style.date}>
              {dayOfWeek}
              <br />
              {month} {dayOfMonth}
              <div className={style.time}>
                Updated on: {hours}:{minutes}
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column align-items-center justify-content-center">
            <div className={style.city}>{city}</div>
            <WeatherIconAnimated icon={condition.icon} />
            <div className={style.description}>{condition.description}</div>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column align-items-center">
            <div className={style.value}>
              {Math.round(temperature.current)}
              <span className={style.units}>℃</span>
              <span className={style.label}>Temperature</span>
            </div>
            <div className={style.value}>
              {Math.round(temperature.feels_like)}
              <span className={style.units}>℃</span>
              <span className={style.label}>Feels like</span>
            </div>
          </div>
          <div className="col-6 col-md-3 d-flex flex-column align-items-start ps-4">
            <div className={style.value}>
              {temperature.humidity}
              <span className={style.units}>%</span>
              <span className={style.label}>Humidity</span>
            </div>
            <div className={style.value}>
              {Math.round(wind.speed)}
              <span className={style.units}>m/sec</span>
              <span className={style.label}>Wind</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Forecast coordinates={coordinates} />
    </div>
  );
}
