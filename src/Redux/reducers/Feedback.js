import { actionTypesFeedback } from "../constants/Notification";

const initialState = {
  //phone
  data: [],
  loading: false,
  error: "",
};

export const FeedbackReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesFeedback.FEED_BACK_ERROR:
      return {
        ...state,
        data: [],
        loading: true,
        error: "",
      };

    case actionTypesFeedback.FEED_BACK_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: "",
      };

    case actionTypesFeedback.FEED_BACK_ERROR:
      return {
        ...state,
        data: [],
        loading: false,
        error: error,
      };

    default:
      return state;
  }
};
