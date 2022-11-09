import React from "react";
import axios from "axios";

export default function Weather(props) {
  let apiKey = "b35c686ba9565ba0ab254c2230937552";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=${units}&appid=${apiKey}`;

  function handleResponse(response) {
    alert(
      `The temperature in ${response.data.name} is ${response.data.main.temp}℃`
    );
  }

  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from {props.city}</h2>;
}
