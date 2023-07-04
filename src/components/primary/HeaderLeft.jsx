import { StyleSheet, View } from "react-native";
import React from "react";
import { scale } from "../../utils/scale";
import { Image } from "expo-image";

export const HeaderLeft = () => {
  return (
    <View style={styles.headerLeftContainer}>
      <Image
        contentFit="contain"
        style={styles.image}
        // contentPosition={"left"}
        cachePolicy={"memory-disk"}
        source={{
          uri: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1480&t=st=1688424606~exp=1688425206~hmac=3d4674654410360989d46d05af0ebaa1105ad8194db23a495ab8808615f280d9",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerLeftContainer: {
    width: "60%",
    height: scale.heightPixel(45),
    marginLeft: scale.pixelSizeHorizontal(16),
    borderRadius: scale.fontPixel(10),
    marginTop: scale.pixelSizeVertical(6),
  },
  image: {
    height: "100%",
    width: "100%",
    borderTopRightRadius: 10,
    borderRadius: scale.fontPixel(10),
  },
});
