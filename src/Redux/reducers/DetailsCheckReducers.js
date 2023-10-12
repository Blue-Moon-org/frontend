import {
  actionTypesEmailCheck,
  actionTypesPhoneNoCheck,
} from "../constants/actionTypes";

const initialState = {
  //phone
  phoneLoading: "",
  phoneStatus: null,
  phoneError: "",

  //email
  emailLoading: "",
  emailStatus: null,
  emailError: "",
};

export const phoneNoCheckReducer = (
  state = initialState,
  { type, status, error }
) => {
  switch (type) {
    case actionTypesPhoneNoCheck.USER_PHONENO_CHECK_LOADING:
      return {
        ...state,
        phoneLoading: true,
        phoneStatus: null,
        phoneError: "",
      };

    case actionTypesPhoneNoCheck.USER_PHONENO_CHECK_SUCCESS:
      return {
        ...state,
        phoneLoading: false,
        phoneStatus: status?.response?.data?.status,
        phoneError: "",
      };

    case actionTypesPhoneNoCheck.USER_PHONENO_CHECK_ERROR:
      return {
        ...state,
        phoneLoading: false,
        phoneStatus: null,
        phoneError: "Phone Number already exist",
      };

    default:
      return state;
  }
};

export const emailCheckReducer = (
  state = initialState,
  { type, status, error }
) => {
  switch (type) {
    case actionTypesEmailCheck.USER_EMAIL_CHECK_LOADING:
      return {
        ...state,
        emailLoading: true,
        emailStatus: null,
        emailError: "",
      };

    case actionTypesEmailCheck.USER_EMAIL_CHECK_SUCCESS:
      return {
        ...state,
        emailLoading: false,
        emailStatus: status?.response?.data?.status,
        emailError: "",
      };

    case actionTypesEmailCheck.USER_EMAIL_CHECK_ERROR:
      return {
        ...state,
        emailLoading: false,
        emailStatus: null,
        emailError: "Email already exist",
      };

    default:
      return state;
  }
};
