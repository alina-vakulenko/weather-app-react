import React from "react";

export default function WeatherIcon(props) {
  const iconUrl = `http://openweathermap.org/img/wn/${props.iconCode}@2x.png`;
  return (
    <div className="WeatherIcon">
      <img src={iconUrl} alt={props.alt} className="icon" />
    </div>
  );
}
