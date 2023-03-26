import React, { useState, useEffect, useRef } from "react";

import { useGeoPosition } from "../../hooks/useGeoPosition";
import { apiKey } from "../../api/apiSettings";

import style from "./CurrentLocation.module.css";

export default function CurrentLocationWeather({ setQueryParams, setCity }) {
  const mounted = useRef(false);
  const [refetch, setRefetch] = useState(null);
  const { position, isPending } = useGeoPosition(refetch);

  useEffect(() => {
    if (mounted.current) {
      setQueryParams({
        lon: position.coords.longitude,
        lat: position.coords.latitude,
        units: "metric",
        key: apiKey,
      });
      setCity("");
    } else {
      mounted.current = true;
    }
  }, [position, setQueryParams, setCity]);

  return (
    <button
      className={style.btn}
      title="Current location"
      onClick={() => setRefetch((prev) => !prev)}
    >
      <div className="d-flex align-items-center">
        {isPending && (
          <div className="spinner-border spinner-border-sm me-1" role="status">
            <span className="sr-only">Searching...</span>
          </div>
        )}
        <span>Current location</span>
        <i className="fa-solid fa-location-dot ms-1"></i>
      </div>
    </button>
  );
}
