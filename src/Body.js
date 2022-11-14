import React from "react";
import "./Body.css";
import SearchEngine from "./SearchEngine";
import Forecast from "./Forecast";
export default function Body() {
  return (
    <section className="card-body">
      <div className="container">
        <div className="main-content">
          <SearchEngine defaultCity="London" />
        </div>
        <hr />
        <div className="forecast-content">
          <Forecast />
        </div>
      </div>
    </section>
  );
}
