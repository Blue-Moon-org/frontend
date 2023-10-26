import * as Location from "expo-location";
import { useState } from "react";
import { Alert } from "react-native";

export const locationPermission = () => {
  async () => {
    let { status } = await Location.requestForegroundPermissionsAsync({
      accuracy: "fine",
    });

    if (status !== "granted") {
      Alert.alert(
        "Location Alert",
        "You may not be able to use some features with your location access denied",
        [
          {
            text: "Close",
            onPress: () => {},
          },
        ]
      );
      return;
    }
    const Location = await Location.getCurrentPositionAsync({});

    await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    })
      .then((res) => {
        address = res;
        console.warn(Location, res);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return { address };
};
