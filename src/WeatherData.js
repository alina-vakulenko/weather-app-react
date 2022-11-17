import React from "react";
import "./WeatherData.css";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import Forecast from "./Forecast";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="main-content">
        <div className="row d-flex align-items-center">
          <div className="col">
            <div className="row d-flex align-items-center text-center">
              <div className="col">
                <WeatherIcon
                  iconCode={props.data.iconCode}
                  alt={props.data.description}
                />
              </div>

              <div className="col">
                <Temperature celsiusTemperature={props.data.temperature} />
              </div>
            </div>
            <div className="row">
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

          <div className="col">
            <div className="text-end">
              <FormattedDate timestamp={props.data.timestamp} />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Forecast coordinates={props.data.coordinates} />
    </div>
  );
}
