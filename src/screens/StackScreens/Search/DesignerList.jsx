import { View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Fontscales } from "../../../styles";
import { scale } from "../../../utils/scale";
import { styles } from "./styles";
import { colors } from "../../../constants/colorpallette";
import { Image } from "expo-image";
import { Text, Button } from "../../../components/common";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Follow } from "../../../Redux/actions/Follow";

const DesignerList = ({ item, index }) => {
  // console.warn(item);
  const [follow, updateFollow] = useState(item?.user.is_following);
  const dispatch = useDispatch();

  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigate("DesignerProfile", {
          designerDetail: item,
        })
      }
      style={styles.DContainer}
      activeOpacity={0.8}
    >
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
          {item?.id === item?.user?.id ? null : (
            <Button
              onPress={() => {
                updateFollow(!follow);
                dispatch(Follow(item?.owner?.id));
              }}
              textStyle={Fontscales.paragraphSmallRegular}
              title={follow ? "Following" : "Follow"}
              containerStyle={{
                paddingHorizontal: scale.pixelSizeHorizontal(10),
                paddingVertical: scale.pixelSizeVertical(3),
                backgroundColor: follow
                  ? colors.lightPrimary
                  : colors.mainPrimary,
                borderRadius: scale.fontPixel(4),
              }}
            />
          )}
        </View>
        <Text
          textStyle={Fontscales.paragraphSmallRegular}
          text={item?.bio ?? `${item?.fullname} hasn't updated their bio`}
          numberOfLines={2}
          ellipsizeMode={"tail"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default DesignerList;
