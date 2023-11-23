import { View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { load } from "../../constants/gif";

export const Lodaing = () => {
  return (
    <View
      style={{
        flex: 1,
        opacity: 1,
        position: "absolute",
        zIndex: 10000,
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundColor: "#F6D6AA5C",
      }}
    >
      <Image
        source={load}
        style={{ height: "100%", width: "100%" }}
        contentFit="contain"
        cachePolicy={"memory-disk"}
      />
    </View>
  );
};

export const SearchLoading = () => {
  return (
    <View
      style={{
        flex: 1,
        opacity: 1,
        position: "absolute",
        zIndex: 10000,
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundColor: "#fff50",
      }}
    >
      <Image
        source={load}
        style={{ height: "100%", width: "100%" }}
        contentFit="contain"
        cachePolicy={"memory-disk"}
      />
    </View>
  );
};
