import React from "react";
import "./Forecast.css";

export default function Forecast() {
  // const [forecastDay, setForecastDay] = useState("");
  // const [minTemp, setMinTemp] = useState(null);
  // const [maxTemp, setMaxTemp] = useState(null);
  // const [forecastIcon, setForecastIcon] = useState(null);
  // let forecastIconUrl = `http://openweathermap.org/img/wn/${forecastIcon}@2x.png`;
  // let apiKey = "b35c686ba9565ba0ab254c2230937552";
  // let units = "metric";
  // let lat = "";
  // let lon = "";
  // let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

  // function handleResponse(response) {
  // setForecastDay(response.data.daily);
  // setMinTemp();
  // setMaxTemp();
  // setForecastIcon();
  //   // console.log(response.data);
  // }
  // // axios.get(apiUrl).then(handleResponse);
  // function formatTimestamp(timestamp) {
  //   let currentTime = new Date(timestamp * 1000);
  //   let day = SearchEngine.days[currentTime.getDay()];
  //   return day;
  // }

  return (
    <section className="Forecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">
            <strong>{/* {forecastDay} */}</strong>
            {/* <img
              src=
              {forecastIconUrl}
              alt="forecast-icon"
              className="forecast-icon"
            /> */}
            <div className="forecast-temp-max">
              {/* {Math.round(maxTemp)}° */}
            </div>
            <div className="forecast-temp-min">
              {/* {Math.round(minTemp)}° */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
