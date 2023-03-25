import React, { useState, useEffect, useRef } from "react";

import { useGeoPosition } from "../../hooks/useGeoPosition";
import { apiKey } from "../../api/apiSettings";

import style from "./CurrentLocation.module.css";

export default function CurrentLocationWeather({ setQueryParams }) {
  const mounted = useRef(false);
  const [refetch, setRefetch] = useState(null);
  const { position, error, isIdle, isPending, isResolved, isRejected } =
    useGeoPosition(refetch);

  useEffect(() => {
    if (mounted.current) {
      setQueryParams({
        lon: position.coords.longitude,
        lat: position.coords.latitude,
        units: "metric",
        key: apiKey,
      });
    } else {
      mounted.current = true;
    }
  }, [position, apiKey]);

  return (
    <button
      className={style.btn}
      title="Current location"
      onClick={() => setRefetch((prev) => !prev)}
    >
      {isPending && (
        <div className="d-flex align-items-centers">
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="sr-only">Searching...</span>
          </div>
          <span>Searching for your location...</span>
        </div>
      )}
      {isRejected && (
        <>
          <span>Oh no, there was a problem getting your position:</span>
          <pre>{error.message}</pre>
        </>
      )}
      <i className="fa-solid fa-location-dot me-1"></i>
      <span>Change to current location</span>
    </button>
  );
}
