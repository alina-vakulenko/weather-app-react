import {
  WEATHER_START,
  WEATHER_SUCCESS,
  WEATHER_FAILURE,
} from "../actions/actions";

export const weatherReducer = (state, action) => {
  switch (action.type) {
    case WEATHER_START: {
      return {
        ...state,
        status: "pending",
      };
    }
    case WEATHER_SUCCESS: {
      return {
        ...state,
        status: "resolved",
        data: action.payload,
      };
    }
    case WEATHER_FAILURE: {
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
