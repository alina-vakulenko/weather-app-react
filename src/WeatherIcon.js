import React from "react";

export default function WeatherIcon(props) {
  return (
    <div className="WeatherIcon">
      <img src={props.iconUrl} alt={props.alt} className="icon" />
    </div>
  );
}
