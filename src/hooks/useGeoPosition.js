import { useReducer, useEffect } from "react";
import { geoPositionReducer } from "../reducers/geoPositionReducer";

export const useGeoPosition = (refetch) => {
  const [state, dispatch] = useReducer(geoPositionReducer, {
    status: "idle",
    position: null,
    error: null,
  });

  useEffect(() => {
    if (refetch !== null) {
      if (!navigator.geolocation) {
        dispatch({
          type: "error",
          error: new Error("Geolocation is not supported"),
        });
        return;
      }
      dispatch({ type: "started" });
      navigator.geolocation.getCurrentPosition(
        (position) => dispatch({ type: "success", position }),
        (error) => dispatch({ type: "error", error })
      );
    }
  }, [refetch]);

  return {
    isIdle: state.status === "idle",
    isPending: state.status === "pending",
    isResolved: state.status === "resolved",
    isRejected: state.status === "rejected",
    ...state,
  };
};
