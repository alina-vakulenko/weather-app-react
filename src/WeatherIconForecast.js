import React from "react";

export default function WeatherIconForecast(props) {
  return (
    <div className="WeatherIconForecast">
      <img src={props.iconUrl} alt={props.alt} className="forecast-icon" />
    </div>
  );
}
