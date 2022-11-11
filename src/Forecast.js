import React from "react";
import "./Forecast.css";
import forecastIcon from "./icons/forecast-image.png";

export default function Forecast() {
  return (
    <section className="Forecast" id="forecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">
            <strong>THU</strong>
            <img
              src={forecastIcon}
              alt="forecast-icon"
              className="forecast-icon"
              id="forecast-icon"
            />
            <div className="forecast-temp-max" id="forecast-temp-max">
              15°
            </div>
            <div className="forecast-temp-min" id="forecast-temp-min">
              10°
            </div>
          </div>
        </div>
        <div className="col">
          <div className="forecast-day">
            <strong>THU</strong>
            <img
              src={forecastIcon}
              alt="forecast-icon"
              className="forecast-icon"
              id="forecast-icon"
            />
            <div className="forecast-temp-max" id="forecast-temp-max">
              15°
            </div>
            <div className="forecast-temp-min" id="forecast-temp-min">
              10°
            </div>
          </div>
        </div>
        <div className="col">
          <div className="forecast-day">
            <strong>THU</strong>
            <img
              src={forecastIcon}
              alt="forecast-icon"
              className="forecast-icon"
              id="forecast-icon"
            />
            <div className="forecast-temp-max" id="forecast-temp-max">
              15°
            </div>
            <div className="forecast-temp-min" id="forecast-temp-min">
              10°
            </div>
          </div>
        </div>
        <div className="col">
          <div className="forecast-day">
            <strong>THU</strong>
            <img
              src={forecastIcon}
              alt="forecast-icon"
              className="forecast-icon"
              id="forecast-icon"
            />
            <div className="forecast-temp-max" id="forecast-temp-max">
              15°
            </div>
            <div className="forecast-temp-min" id="forecast-temp-min">
              10°
            </div>
          </div>
        </div>
        <div className="col">
          <div className="forecast-day">
            <strong>THU</strong>
            <img
              src={forecastIcon}
              alt="forecast-icon"
              className="forecast-icon"
              id="forecast-icon"
            />
            <div className="forecast-temp-max" id="forecast-temp-max">
              15°
            </div>
            <div className="forecast-temp-min" id="forecast-temp-min">
              10°
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
