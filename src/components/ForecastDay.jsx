import React from "react";

import { formatDate } from "../utils/formatDate";
import style from "../features/forecast/Forecast.module.css";

export default function ForecastDay(props) {
  const minTemp = Math.round(props.data.temperature.minimum);
  const maxTemp = Math.round(props.data.temperature.maximum);

  const { dayOfWeek } = formatDate(props.data.time);

  return (
    <div className={style.forecastDay}>
      <strong className={style.dayName}>{dayOfWeek.slice(0, 3)}</strong>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.description}
        className={style.icon}
      />
      <div className={style.tempMax}>{maxTemp}°</div>
      <div className={style.tempMin}>{minTemp}°</div>
    </div>
  );
}
