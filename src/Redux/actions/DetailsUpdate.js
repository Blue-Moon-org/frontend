import { Platform } from "react-native";
import { actionTypesUpdate } from "../constants/Update";
import { fetchPutRequestInit } from "../../utils/requestInit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const userUpadte = (body, goBack) => async (dispatch) => {
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
  {
    body.brandImage &&
      form.append("brand_image", {
        name:
          Platform.OS === "android"
            ? body.brandImage.uri
            : body.brandImage.fileName,
        type: "image/jpeg",
        uri:
          Platform.OS === "android"
            ? body.brandImage.uri
            : body.brandImage.uri.replace("file://", ""),
      });
  }
  {
    body.firstName && form.append("firstname", body.firstName);
  }
  {
    body.lastName && form.append("lastname", body.lastName);
  }
  {
    body.fullName && form.append("fullname", body.fullName);
  }
  {
    body.brandName && form.append("brand_name", body.brandName);
  }
  {
    body.address && form.append("address", body.address);
  }
  {
    body.primaryAddress && form.append("address", body.primaryAddress);
  }
  {
    body.secondaryAddress &&
      form.append("secondaryaddress", body.secondaryAddress);
  }
  {
    body.sex && form.append("sex", body.sex);
  }

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
      AsyncStorage.mergeItem("user", JSON.stringify(res.response.data.data));
      goBack();
      //   navigate("EmailVerification", { email: res.response.data.email });
    })
    .catch((err) => {
      console.warn(err.message);

      dispatch({ type: actionTypesUpdate.DETAILS_UPDATE_ERROR, payload: err });
    });
};
// "multipart/form-data",
