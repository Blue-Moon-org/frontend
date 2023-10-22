import {
  actionTypesRegister,
  actionTypesEmailVerify,
  actionTypesPhoneNoCheck,
  actionTypesEmailCheck,
} from "../constants/actionTypes";
import {
  fetchGetRequestInit,
  fetchPostRequestInit,
} from "../../utils/requestInit";

export const userRegistration = (body, navigate) => async (dispatch) => {
  // const { navigate } = useNavigation();
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesRegister.USER_REGISTER_LOADING,
  });

  console.warn(body);

  //   coords: locationDetail?.location?.coords,
  // country: locationDetail?.address?.country,
  // city: locationDetail?.address?.city,
  // address: locationDetail?.address?.address,
  // region: locationDetail?.address?.region,
  // subRegion: locationDetail?.address?.subregion,

  await fetchPostRequestInit(
    `/core/register/`,
    {
      email: body.email,
      phone: body.phoneNumber,
      password: body.password,
      brand_name: body.brandName,
      account_type: body.accountType,
      firstname: body.firstName,
      lastname: body.lastName,
      address: body.address,
      policy: body.policy,
      other_contact: body.otherContact,
      full_name: body.fullName,
      lon: body.coords.longitude,
      lat: body.coords.latitude,
      country: body.country,
      city: body.city,
      region: body.region,
      subregion: body.subRegion,
    },
    "application/json"
  )
    .then((res) => {
      dispatch({
        type: actionTypesRegister.USER_REGISTER_SUCCESS,
        payload: res.response.data,
      });
      navigate("EmailVerification", { email: res.response.data.email });
    })
    .catch((err) => {
      console.warn(err.message);

      dispatch({ type: actionTypesRegister.USER_REGISTER_ERROR, payload: err });
    });
};

export const emailVerify =
  (state, email, para, navigate) => async (dispatch) => {
    // const { navigate } = useNavigation();
    // 4 endpoint, body, content-type, token
    dispatch({
      type: actionTypesEmailVerify.USER_EMAILVERIFY_LOADING,
    });

    await fetchPostRequestInit(`/core/verify-email/`, {
      email: email,
      otp: parseFloat(state.code),
    })
      .then((res) => {
        dispatch({
          type: actionTypesEmailVerify.USER_EMAILVERIFY_SUCCESS,
          payload: res,
        });

        para === "login"
          ? navigate("Login", email)
          : para === "changePassword"
          ? navigate("ResetPassword", email)
          : navigate("PhoneNoVerification", email);
      })
      .catch((err) => {
        dispatch({
          type: actionTypesEmailVerify.USER_EMAILVERIFY_ERROR,
          payload: err,
        });
      });
  };


