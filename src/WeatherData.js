import React from "react";
import "./WeatherData.css";
import FormattedDate from "./FormattedDate";
import WeatherIconAnimated from "./WeatherIconAnimated";
import Forecast from "./Forecast";
import WeatherConditions from "./WeatherConditions";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="main-content">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-4">
            <FormattedDate timestamp={props.data.timestamp} />
          </div>
          <div className="col-12 col-sm-6 col-md-2">
            <WeatherIconAnimated description={props.data.iconText} />
          </div>

          <div className="col-12 col-sm-6 col-md-2 temperature">
            {Math.round(props.data.temperature)}
            <span className="units">℃</span>
          </div>

          <div className="col-12 col-md-4 weather-conditions">
            <WeatherConditions
              temperatureFeels={props.data.feelsLike}
              humidity={props.data.humidity}
              speed={props.data.windSpeed}
              degree={props.data.windDegree}
            />
          </div>
        </div>
      </div>
      <hr />
      <Forecast coordinates={props.data.coordinates} />
    </div>
  );
}
