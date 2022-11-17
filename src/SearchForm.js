import React from "react";

export default function SearchForm(props) {
  return (
    <div className="SearchForm">
      <div className="row d-flex align-items-center">
        <div className="col-12 col-md-5 d-flex flex-column justify-content-center">
          <div className="current-city">
            <i className="fa-solid fa-location-dot"></i> {props.city}
          </div>
          <div className="description">{props.description}</div>
        </div>
        <div className="col d-flex justify-content-end">
          <form onSubmit={props.handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
              onChange={props.changeCity}
            />
            <div>
              <button className="search-button" title="Submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
