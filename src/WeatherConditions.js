import React, { useEffect } from "react";

export default function WeatherConditions(props) {
  useEffect(() => {
    document
      .querySelector(".wind-direction")
      .style.setProperty("--rotate", `${props.degree}deg`);
  }, [props.degree]);

  return (
    <ul className="WeatherConditions">
      <li>
        <span className="weather-conditions-icon">
          <i className="fa-solid fa-temperature-three-quarters"></i>
        </span>{" "}
        Feels like:{" "}
        <span className="weather-conditions-value">
          {Math.round(props.temperatureFeels)}°
        </span>
      </li>
      <li>
        <span className="weather-conditions-icon">
          <i className="fa-solid fa-droplet"></i>
        </span>{" "}
        Humidity:{" "}
        <span className="weather-conditions-value">{props.humidity}%</span>
      </li>
      <li>
        <span className="weather-conditions-icon">
          <i className="fa-solid fa-wind"></i>
        </span>{" "}
        Wind:{" "}
        <span className="weather-conditions-value">
          {Math.round(props.speed)} m/sec{" "}
          <i className="fa-solid fa-up-long wind-direction ms-1"></i>
        </span>
      </li>
    </ul>
  );
}
