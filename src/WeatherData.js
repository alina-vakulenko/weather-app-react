import React from "react";
import "./WeatherData.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Forecast from "./Forecast";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="main-content">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-sm-6 col-lg-4">
            <WeatherIcon
              iconUrl={props.data.iconUrl}
              alt={props.data.iconText}
            />
          </div>

          <div className="col-12 col-sm-6 col-lg-4 temperature">
            {Math.round(props.data.temperature)}
            <span className="units">℃</span>
          </div>

          <div className="col-12 col-lg-4 weather-conditions">
            <ul>
              <li>
                <span className="weather-conditions-icons">
                  <i className="fa-solid fa-temperature-three-quarters"></i>
                </span>{" "}
                Feels like:{" "}
                <span className="weather-conditions-value">
                  {Math.round(props.data.feelsLike)}°
                </span>
              </li>
              <li>
                <span className="weather-conditions-icons">
                  <i className="fa-solid fa-droplet"></i>
                </span>{" "}
                Humidity:{" "}
                <span className="weather-conditions-value">
                  {props.data.humidity}%
                </span>
              </li>
              <li>
                <span className="weather-conditions-icons">
                  <i className="fa-solid fa-wind"></i>
                </span>{" "}
                Wind speed:{" "}
                <span className="weather-conditions-value">
                  {props.data.windSpeed.toFixed(1)} m/sec
                </span>
              </li>
              <li>
                <span className="weather-conditions-icons">
                  <i className="fa-regular fa-compass"></i>
                </span>{" "}
                Wind direction:{" "}
                <i className="fa-solid fa-angles-up wind-direction"></i>
                <span className="weather-conditions-value">
                  {props.data.windDegree}
                </span>
              </li>
            </ul>
          </div>
          <FormattedDate timestamp={props.data.timestamp} />
        </div>
      </div>
      <hr />
      <Forecast coordinates={props.data.coordinates} />
    </div>
  );
}
