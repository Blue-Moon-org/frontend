import { actionTypesLocationPermission } from "../../constants/index";
import { Linking, Platform } from "react-native";
import * as Location from "expo-location";

export const userLocationPermission = () => async (dispatch) => {
  // 4 endpoint, body, content-type, token
  dispatch({
    type: actionTypesLocationPermission.LOCATION_PERMISSION_LOADING,
  });

  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    Alert.alert(
      "Location Alert",
      "You may not be able to use some features with your location access denied",
      [
        {
          text: "Open settings",
          onPress: () => {
            if (Platform.OS === "ios") {
              Linking.openURL("app-settings:");
            } else {
              Linking.openSettings();
            }
          },
        },
      ]
    );
    return;
  }

  const location = await Location.getCurrentPositionAsync({});
  await Location.reverseGeocodeAsync({
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  })
    .then((res) => {
      dispatch({
        type: actionTypesLocationPermission.LOCATION_PERMISSION_SUCCESS,
        address: res,
        location: location,
      });
    })
    .catch((err) => {
      console.warn(err);
      dispatch({
        type: actionTypesLocationPermission.LOCATION_PERMISSION_SUCCESS,
        error: err,
      });
    });

  // navigate("Stacks");
};
