import { Platform } from "react-native";
import { actionTypesUpdate } from "../constants/Update";
import { fetchPutRequestInit } from "../../utils/requestInit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const userUpadte = (body, navigate) => async (dispatch) => {
  // const { navigate } = useNavigation();
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesUpdate.DETAILS_UPDATE_LOADING,
  });

  let form = new FormData();
  {
    body.profilePicture &&
      form.append("image", {
        name:
          Platform.OS === "android"
            ? body.profilePicture.uri
            : body.profilePicture.fileName,
        type: "image/jpeg",
        uri:
          Platform.OS === "android"
            ? body.profilePicture.uri
            : body.profilePicture.uri.replace("file://", ""),
      });
  }
  form.append("firstname", body.firstName);
  form.append("lastname", body.lastName);
  form.append("email", body.email);
  form.append("phone", body.phoneNumber);
  form.append("address", body.primaryAddress);
  form.append("secondaryaddress", body.secondaryAddress);

  const jsonValue = await AsyncStorage.getItem("userTokens");
  let result = JSON.parse(jsonValue);

  await fetchPutRequestInit(
    `/core/user/update/`,
    form,
    "multipart/form-data",
    `Bearer ${result.access}`
  )
    .then((res) => {
      console.warn(res);
      dispatch({
        type: actionTypesUpdate.DETAILS_UPDATE_SUCCESS,
        payload: res.response.data,
      });
      //   navigate("EmailVerification", { email: res.response.data.email });
    })
    .catch((err) => {
      console.warn(err.message);

      dispatch({ type: actionTypesUpdate.DETAILS_UPDATE_ERROR, payload: err });
    });
};
// "multipart/form-data",
