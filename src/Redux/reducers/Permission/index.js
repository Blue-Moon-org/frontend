import { actionTypesAddFavorite } from "../../constants/PostTypes";
import { actionTypesLocationPermission } from "../../constants/index";

const initialState = {
  location: null,
  address: null,
  error: "",
  loading: false,
};

export const locationReducer = (
  state = initialState,
  { type, address, location, error }
) => {
  switch (type) {
    // case actionTypesLocationPermission.LOCATION_PERMISSION_LOADING:
    //   return {
    //     ...state,
    //     location: null,
    //     address: null,
    //     loading: true,
    //     error: "",
    //   };

    case actionTypesLocationPermission.LOCATION_PERMISSION_SUCCESS:
      return {
        ...state,
        address: address,
        location: location,
        error: "",
        loading: false,
      };

    case actionTypesLocationPermission.LOCATION_PERMISSION_ERROR:
      return {
        ...state,
        location: null,
        address: null,
        loading: false,
        error: "Check you location permission or internet connection",
      };

    default:
      return state;
  }
};
