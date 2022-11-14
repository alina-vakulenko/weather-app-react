import React from "react";
import "./WeatherData.css";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="row d-flex align-items-center">
        <div className="col-7">
          <div className="d-flex justify-content-between">
            <div>
              <div className="current-city">{props.data.city}</div>
              <FormattedDate timestamp={props.data.timestamp} />
            </div>

            <div className="weather-description">
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                className="icon"
              />
              <div className="description">{props.data.description}</div>
            </div>
          </div>
        </div>

        <div className="col">
          <Temperature celsiusTemperature={props.data.temperature} />
        </div>

        <div className="col">
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
