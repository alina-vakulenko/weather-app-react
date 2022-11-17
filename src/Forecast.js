import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";
import { SpinnerRoundFilled } from "spinners-react";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function loadForecast() {
    const apiKey = "b35c686ba9565ba0ab254c2230937552";
    const units = "metric";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
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
