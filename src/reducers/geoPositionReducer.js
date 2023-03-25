export const geoPositionReducer = (state, action) => {
  switch (action.type) {
    case "error": {
      return {
        ...state,
        status: "rejected",
        error: action.error,
      };
    }
    case "success": {
      return {
        ...state,
        status: "resolved",
        position: action.position,
      };
    }
    case "started": {
      return {
        ...state,
        status: "pending",
      };
    }
    default: {
      return state;
    }
  }
};
