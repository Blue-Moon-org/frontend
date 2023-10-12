import { actionTypesTrackorder } from "../../constants/Market";

const initialState = {
  data: null,
  error: "",
  loading: false,
};

export const TrackOrderReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesTrackorder.TRACK_ORDER_LOADING:
      return {
        ...state,
        data: null,
        loading: true,
        error: "",
      };

    case actionTypesTrackorder.TRACK_ORDER_SUCCESS:
      return {
        ...state,
        data: payload.response?.data,
        loading: false,
        error: "",
      };

    case actionTypesTrackorder.TRACK_ORDER_ERROR:
      return {
        ...state,
        data: null,
        loading: false,
        error: error,
      };

    default:
      return state;
  }
};
