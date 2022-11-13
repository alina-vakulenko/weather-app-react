import React, { useState } from "react";
import "./DefaultCities.css";

export default function DefaultCities() {
  return (
    <div className="DefaultCities">
      <ul>
        <li className="city">Dnipro</li>
        <li className="city">Kyiv</li>
        <li className="city">Kharkiv</li>
        <li className="city">Lviv</li>
      </ul>
    </div>
  );
}
