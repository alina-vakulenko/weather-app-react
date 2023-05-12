import { useEffect, useReducer } from "react";
import axios from "axios";

export const useFetch = (fetchUrl, fetchParams, fetchReducer, prefix) => {
  const initialState = {
    status: "idle",
    data: {},
    error: null,
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const fetchData = async (url, params) => {
      dispatch({ type: `${prefix}/start` });
      try {
        const response = await axios.get(url, {
          signal: AbortSignal.timeout(5000), //Aborts request after 5 seconds
          params: params,
        });
        if (response.data.message) {
          dispatch({
            type: `${prefix}/error`,
            payload: new Error("City you are searching for was not found"),
          });
          return;
        }
        dispatch({ type: `${prefix}/success`, payload: response.data });
      } catch (err) {
        if (err.response) {
          dispatch({
            type: `${prefix}/error`,
            payload:
              err.response.status === 404
                ? "Data not found"
                : err.response.data,
          });
        } else if (err.request) {
          dispatch({
            type: `${prefix}/error`,
            payload: "Seems like there is a problem with Internet connection",
          });
        } else {
          dispatch({
            type: `${prefix}/error`,
            payload: err.message,
          });
        }
      }
    };

    fetchData(fetchUrl, fetchParams);
  }, [fetchUrl, fetchParams, fetchReducer, prefix]);

  return {
    isIdle: state.status === "idle",
    isPending: state.status === "pending",
    isLoading: state.status === "idle" || state.status === "pending",
    isResolved: state.status === "resolved",
    isRejected: state.status === "rejected",
    ...state,
  };
};
