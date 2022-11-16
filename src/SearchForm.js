import React from "react";

export default function SearchForm(props) {
  return (
    <div className="SearchForm">
      <form onSubmit={props.handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city"
          className="form-control"
          autoFocus="on"
          onChange={props.changeCity}
        />
        <div>
          <input type="submit" value="Search" className="search-button" />
          <button
            className="current-location-button"
            onClick={props.handleCurrent}
          >
            Current
          </button>
        </div>
      </form>
    </div>
  );
}
