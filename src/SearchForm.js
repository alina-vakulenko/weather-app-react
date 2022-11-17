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
          <button className="search-button" title="Submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
