import React from "react";
import "./Body.css";
import DefaultCities from "./DefaultCities";
import UnitsChoice from "./UnitsChoice";
import SearchEngine from "./SearchEngine";
import Forecast from "./Forecast";
export default function Body() {
  return (
    <section className="card-body">
      <div className="container">
        <div className="main-content">
          <div className="d-flex justify-content-between">
            <DefaultCities />
            <UnitsChoice />
          </div>
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
