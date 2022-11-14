import React from "react";
import "./WeatherData.css";
import FormattedDate from "./FormattedDate";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="row d-flex align-items-center">
        <div className="col-6">
          <div className="d-flex justify-content-between">
            <div>
              <div className="current-city">{props.data.city}</div>
              <FormattedDate timestamp={props.data.timestamp} />
            </div>

            <div className="temperature d-flex align-items-center">
              <i className="fa-solid fa-temperature-three-quarters"></i>
              <span>{props.data.temperature}°C</span>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="data-description">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="icon"
            />
            <div className="description">{props.data.description}</div>
          </div>
        </div>
        <div className="col-3">
          <div className="weather-conditions">
            <div>
              Humidity: <span>{props.data.humidity}%</span>
            </div>
            <div>
              Wind: <span>{props.data.wind}m/sec</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
