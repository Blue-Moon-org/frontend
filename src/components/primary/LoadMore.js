import { View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { load } from "../../constants/gif";
import { scale } from "../../utils/scale";

export const LoadMore = ({ loading }) => {
  return (
    loading && (
      <View
        style={{
          opacity: 1,
          backgroundColor: "white",
          height: scale.heightPixel(60),
          width: "100%",
        }}
      >
        <Image
          source={load}
          style={{ height: "100%", width: "100%" }}
          contentFit="contain"
          cachePolicy={"memory-disk"}
        />
      </View>
    )
  );
};
