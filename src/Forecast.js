import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiUrlForecastByCoordinates } from "./apiSettings";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";
import { SpinnerRoundFilled } from "spinners-react";

export default function Forecast(props) {
  const [loadedForecast, setLoadedForecast] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoadedForecast(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoadedForecast(true);
  }

  function loadForecast() {
    axios
      .get(apiUrlForecastByCoordinates(props.coordinates))
      .then(handleResponse);
  }

  if (loadedForecast) {
    return (
      <section className="Forecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col-6 col-sm-4 col-xl-2" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else return null;
          })}
        </div>
      </section>
    );
  } else {
    loadForecast();
    return (
      <div className="d-flex justify-content-center">
        <SpinnerRoundFilled color="0f0f8b" size={70} />
      </div>
    );
  }
}
