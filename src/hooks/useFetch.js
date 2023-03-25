import { useEffect, useReducer } from "react";
import axios from "axios";

export const useFetch = (fetchUrl, fetchParams, fetchReducer, type) => {
  const initialState = {
    status: "idle",
    data: {},
    error: null,
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async (url, params) => {
      dispatch({ type: `${type}/start` });
      try {
        const response = await axios.get(url, {
          signal: AbortSignal.timeout(5000), //Aborts request after 5 seconds
          params: params,
        });
        if (isMounted) {
          dispatch({ type: `${type}/success`, payload: response.data });
        }
      } catch (err) {
        if (isMounted) {
          if (err.response) {
            dispatch({
              type: `${type}/error`,
              payload:
                err.response.status === 404
                  ? "Data not found"
                  : err.response.data,
            });
          } else if (err.request) {
            console.log(err.request);
            dispatch({
              type: `${type}/error`,
              payload: err.message,
            });
          } else {
            dispatch({
              type: `${type}/error`,
              payload: err.message,
            });
          }
        }
      }
    };

    fetchData(fetchUrl, fetchParams);

    return () => {
      isMounted = false;
    };
  }, [fetchUrl, fetchParams, fetchReducer, type]);

  return {
    isIdle: state.status === "idle",
    isPending: state.status === "pending",
    isLoading: state.status === "idle" || state.status === "pending",
    isResolved: state.status === "resolved",
    isRejected: state.status === "rejected",
    ...state,
  };
};
