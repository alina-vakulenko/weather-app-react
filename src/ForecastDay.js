import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function getDayName() {
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let date = new Date(props.data.dt * 1000);
    return days[date.getDay()];
  }
  function minTemperature() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }
  function maxTemperature() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }
  return (
    <div className="ForecastDay">
      <strong>{getDayName()}</strong>
      <WeatherIcon
        iconCode={props.data.weather[0].icon}
        alt={props.data.weather[0].description}
      />
      <div className="forecast-temp-max">{maxTemperature()}</div>
      <div className="forecast-temp-min">{minTemperature()}</div>
    </div>
  );
}
