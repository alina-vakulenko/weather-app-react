import React from "react";
import "./QuickSearchCities.css";

export default function QuickSearchCities(props) {
  const defaultCities = ["Kyiv", "Lviv", "Kharkiv", "Odesa"];
  return (
    <div className="QuickSearchCities">
      <ul>
        {defaultCities.map(function (city, index) {
          return (
            <li key={index}>
              <a href="/" onClick={props.handleClick} className="city">
                {city}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
