import React from "react";
import "./Body.css";
import DefaultCities from "./DefaultCities";
import UnitsChoice from "./UnitsChoice";
import SearchEngine from "./SearchEngine";
import Forecast from "./Forecast";
export default function Body() {
  return (
    <div className="card-body">
      <section className="row top-block">
        <div className="col top-block-container">
          <div className="row">
            <div className="col-8">
              <DefaultCities />
            </div>
            <div className="col-4">
              <UnitsChoice />
            </div>
          </div>
          <SearchEngine />
        </div>
      </section>
      <hr />
      <Forecast />
    </div>
  );
}
