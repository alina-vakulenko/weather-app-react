import {
  FORECAST_START,
  FORECAST_SUCCESS,
  FORECAST_FAILURE,
} from "../actions/actions";

export const forecastReducer = (state, action) => {
  switch (action.type) {
    case FORECAST_START: {
      return {
        ...state,
        status: "pending",
      };
    }
    case FORECAST_SUCCESS: {
      return {
        ...state,
        status: "resolved",
        data: action.payload,
      };
    }
    case FORECAST_FAILURE: {
      return {
        ...state,
        status: "rejected",
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
