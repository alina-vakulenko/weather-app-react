import React from "react";

import style from "./SearchForm.module.css";

export default function SearchForm({
  handleSubmit,
  city,
  setCity,
  handleCityClick,
  suggestedCities,
}) {
  return (
    <form className={style.searchForm} onSubmit={handleSubmit}>
      <input
        className={style.input}
        type="search"
        placeholder="Enter city name"
        autoFocus="on"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <div>
        <button className={style.btn} title="Search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <ul className={style.suggestedCitiesList}>
        {suggestedCities.map((city, index) => {
          return (
            <li key={index}>
              <a
                href="/"
                onClick={handleCityClick}
                className={style.suggestedCity}
              >
                {city}
              </a>
            </li>
          );
        })}
      </ul>
    </form>
  );
}
