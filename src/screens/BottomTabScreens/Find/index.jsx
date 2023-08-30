import { View } from "react-native";
import React, { useState } from "react";
import { AppHeader } from "../../../components/primary";
import { scale } from "../../../utils/scale";
import { FindHeader } from "../../../components/primary";
import { SharedStyles } from "../../../styles";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
import { styles } from "./styles";
import { coords } from "./coordData";
import { colors } from "../../../constants/colorpallette";
import { LocationCard } from "./LocationCard";
import { useNavigation } from "@react-navigation/native";

export const Find = () => {
  const [state, updateState] = useState({
    searchText: "",
  });

  const { navigate } = useNavigation();
  return (
    <View>
      <FindHeader />
      <View style={styles.mapContainer}>
        <MapView
          initialRegion={{
            latitude: 4.815457,
            longitude: 7.043627,
            latitudeDelta: 0.0822,
            longitudeDelta: 0.0921,
          }}
          // mapType={Platform.OS == "android" ? "none" : "standard"}
          style={styles.map}
        >
          {coords.map((item, index) => {
            return (
              <Marker
                key={index}
                onPress={() => {
                  navigate("RootStack", {
                    screen: "DesignerProfile",
                  });
                }}
                coordinate={{ latitude: item.lat, longitude: item.lng }}
                // title={item.placeName}
                // description={item.description}
                // pinColor={colors.mainPrimary}
              >
                <LocationCard {...item} />
              </Marker>
            );
          })}
        </MapView>
      </View>
    </View>
  );
};

// <GooglePlacesAutocomplete
//   placeholder="Search"
//   onFail={(error) => console.warn(error)}
//   onPress={(data, details = null) => {
//     // 'details' is provided when fetchDetails = true
//     console.warn(data, details);
//   }}
//   query={{
//     key: "AIzaSyALFkHfeCqFKJQNNQXzYJ-BqZFiitSv-yw",
//     // AIzaSyAopEbPhsRYBQnpXiTcmxdCh4ZZJ8CaDTg
//     language: "en",
//   }}
// />;
