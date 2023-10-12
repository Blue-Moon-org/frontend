import { actionTypesNotification } from "../constants/Notification";

const initialState = {
  //phone
  data: [],
  loading: false,
  error: "",
};

export const NotificationReducer = (
  state = initialState,
  { type, payload, error }
) => {
  switch (type) {
    case actionTypesNotification.NOTIFICATION_LOADING:
      return {
        ...state,
        data: [],
        loading: true,
        error: "",
      };

    case actionTypesNotification.NOTIFICATION_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: "",
      };

    case actionTypesNotification.NOTIFICATION_ERROR:
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
