import React, { useEffect } from "react";

import style from "../features/currentWeather/Weather.module.css";

export default function WeatherConditions(props) {
  useEffect(() => {
    document
      .querySelector("#wind-direction")
      .style.setProperty("--rotate", `${props.degree}deg`);
  }, [props.degree]);

  return (
    <ul className={style.additionalInfo}>
      <li>
        <span className={style.conditionIcon}>
          <i className="fa-solid fa-temperature-three-quarters"></i>
        </span>{" "}
        Feels like:{" "}
        <span className={style.conditionValue}>
          {Math.round(props.temperatureFeels)}°
        </span>
      </li>
      <li>
        <span className={style.conditionIcon}>
          <i className="fa-solid fa-droplet"></i>
        </span>{" "}
        Humidity:{" "}
        <span className={style.conditionValue}>{props.humidity}%</span>
      </li>
      <li>
        <span className={style.conditionIcon}>
          <i className="fa-solid fa-wind"></i>
        </span>{" "}
        Wind:{" "}
        <span className={style.conditionValue}>
          {Math.round(props.speed)} m/sec{" "}
          <i id="wind-direction" className="fa-solid fa-up-long ms-1"></i>
        </span>
      </li>
    </ul>
  );
}
