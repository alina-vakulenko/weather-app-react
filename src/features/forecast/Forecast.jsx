import React, { useRef } from "react";

import ForecastDay from "../../components/ForecastDay";
import { apiBaseUrl, apiKey } from "../../api/apiSettings";
import { useFetch } from "../../hooks/useFetch";
import { forecastReducer } from "../../reducers/forecastReducer";
import { SpinnerRoundFilled } from "spinners-react";

import style from "./Forecast.module.css";

export default function Forecast({ coordinates }) {
  const forecastFetchParams = useRef({
    lon: coordinates.longitude,
    lat: coordinates.latitude,
    units: "metric",
    key: apiKey,
  });

  const {
    data: forecast,
    error,
    isPending,
    isResolved,
    isRejected,
  } = useFetch(
    `${apiBaseUrl}/forecast`,
    forecastFetchParams.current,
    forecastReducer,
    "forecast"
  );

  return (
    <section className={style.forecast}>
      {isPending && (
        <div className="d-flex justify-content-center">
          <SpinnerRoundFilled color="0f0f8b" size={70} />
        </div>
      )}
      {isRejected && (
        <div className={style.error}>
          Oh no! Something went wrong. {error.message}
        </div>
      )}
      {isResolved && forecast.daily && (
        <div className="row">
          {forecast.daily.map(function (dailyForecast, index) {
            return (
              index < 6 && (
                <div className="col-6 col-sm-4 col-xl-2" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              )
            );
          })}
        </div>
      )}
    </section>
  );
}
