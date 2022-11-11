import React from "react";
import "./DefaultCities.css";

export default function DefaultCities() {
  return (
    <div className="DefaultCities">
      <ul>
        <li className="city" id="city">
          Dnipro
        </li>
        <li className="city" id="city">
          Kyiv
        </li>
        <li className="city" id="city">
          Kharkiv
        </li>
        <li className="city" id="city">
          Lviv
        </li>
      </ul>
    </div>
  );
}
