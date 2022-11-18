import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function getDayName() {
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let date = new Date(props.data.time * 1000);
    return days[date.getDay()];
  }
  function minTemperature() {
    let minTemp = Math.round(props.data.temperature.minimum);
    return `${minTemp}°`;
  }
  function maxTemperature() {
    let maxTemp = Math.round(props.data.temperature.maximum);
    return `${maxTemp}°`;
  }
  return (
    <div className="ForecastDay">
      <strong>{getDayName()}</strong>
      <WeatherIcon
        iconUrl={props.data.condition.icon_url}
        alt={props.data.condition.icon}
      />
      <div className="forecast-temp-max">{maxTemperature()}</div>
      <div className="forecast-temp-min">{minTemperature()}</div>
    </div>
  );
}
