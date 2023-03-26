import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import style from "../features/currentWeather/Weather.module.css";

export default function WeatherIconAnimated({ icon }) {
  const iconsDictionary = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "CLOUDY",
    "scattered-clouds-night": "CLOUDY",
    "broken-clouds-day": "PARTLY_CLOUDY_DAY",
    "broken-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "shower-rain-day": "RAIN",
    "shower-rain-night": "RAIN",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "RAIN",
    "thunderstorm-night": "RAIN",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "FOG",
    "mist-night": "FOG",
  };
  return (
    <div className={style.animatedIcon}>
      <ReactAnimatedWeather
        icon={iconsDictionary[icon]}
        color={"#0f0f8b"}
        size={60}
        animate={true}
      />
    </div>
  );
}
