import React from "react";
import appLogo from "../icons/weather_icon.svg";

export default function Header() {
  return (
    <div className="Header">
      <img src={appLogo} alt="app-logo" className="app-logo" />
      Weather Forecast
    </div>
  );
}
