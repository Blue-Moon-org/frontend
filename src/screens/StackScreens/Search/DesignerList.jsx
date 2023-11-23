import { View } from "react-native";
import React from "react";
import { Fontscales } from "../../../styles";
import { scale } from "../../../utils/scale";
import { styles } from "./styles";
import { colors } from "../../../constants/colorpallette";
import { Image } from "expo-image";
import { Text, Button } from "../../../components/common";

const DesignerList = ({ item, index }) => {
  console.warn(item);
  return (
    <View style={styles.DContainer}>
      <View style={styles.DImageContainer}>
        <Image
          style={styles.DImage}
          cachePolicy={"memory-disk"}
          contentFit="cover"
          source={{ uri: item?.brand_image }}
        />
      </View>
      <View
        style={{
          width: "78%",
          backgroundColor: colors.grey2,
          paddingLeft: scale.pixelSizeHorizontal(4),
          paddingBottom: scale.pixelSizeVertical(8),
          borderRadius: scale.fontPixel(8),
          paddingVertical: scale.pixelSizeVertical(8),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: scale.pixelSizeHorizontal(10),
            alignItems: "center",
            paddingVertical: scale.pixelSizeVertical(5),
            borderRadius: scale.fontPixel(4),
            backgroundColor: colors.grey2,
          }}
        >
          <Text textStyle={Fontscales.labelSmallMedium} text={item?.fullname} />
          <Button
            textStyle={Fontscales.paragraphSmallRegular}
            title={item.isFollowing ? "Following" : "Follow"}
            containerStyle={{
              paddingHorizontal: scale.pixelSizeHorizontal(10),
              paddingVertical: scale.pixelSizeVertical(3),
              backgroundColor: item.isFollowing
                ? colors.lightPrimary
                : colors.mainPrimary,
              borderRadius: scale.fontPixel(4),
            }}
          />
        </View>
        <Text
          textStyle={Fontscales.paragraphSmallRegular}
          text={item?.bio ?? `${item?.fullname} hasn't updated their bio`}
          numberOfLines={2}
          ellipsizeMode={"tail"}
        />
      </View>
    </View>
  );
};

export default DesignerList;
