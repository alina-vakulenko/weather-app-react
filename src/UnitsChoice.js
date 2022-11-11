import React from "react";
import "./UnitsChoice.css";

export default function UnitsChoice() {
  return (
    <div className="UnitsChoice">
      <a href="#" id="metric" title="Switch to metric" className="active">
        metric{" "}
      </a>
      |{" "}
      <span>
        <a href="#" id="imperial" title="Switch to imperial">
          imperial
        </a>
      </span>
    </div>
  );
}
