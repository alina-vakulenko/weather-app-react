import React from "react";

export default function CurrentLocationWeather(props) {
  return (
    <a
      href="/"
      className="current-location"
      title="Current location"
      onClick={props.handleClick}
    >
      <i className="fa-solid fa-location-dot"></i> Current location
    </a>
  );
}
