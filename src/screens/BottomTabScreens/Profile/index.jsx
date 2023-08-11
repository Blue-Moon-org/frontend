import { View, TouchableOpacity, Platform } from "react-native";
import React, { useState } from "react";
import { ProfileHeader } from "../../../components/primary";
import { SharedStyles } from "../../../styles";
import { styles } from "./styles";
import { topData } from "./data";
import { Text } from "../../../components/common";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";
import { Posts } from "./Posts";
import { ForSale } from "./ForSale";
import { Liked } from "./Liked";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";

export const Profile = () => {
  const [type, updateType] = useState("Posts");

  const add =
    Platform.OS === "ios" && Constants.statusBarHeight < 30
      ? scale.heightPixel(40)
      : scale.heightPixel(1);
  return (
    <SafeAreaView style={[SharedStyles.container]}>
      <View
        style={{
          height:
            Platform.OS === "ios"
              ? scale.heightPixel(350) + add
              : scale.height * 0.411,
          zIndex: 2,
        }}
      >
        <ProfileHeader designer={true} />
        <View style={styles.background} />
        <View style={styles.background2} />
        <View style={styles.headerOptionContainer}>
          {topData.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.options,
                  {
                    borderColor:
                      item.name === type ? colors.mainPrimary : colors.grey2,
                  },
                ]}
                onPress={() => updateType(item.name)}
                key={item.id}
              >
                <Text
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                  textStyle={[
                    styles.optionsText,
                    {
                      color:
                        item.name === type ? colors.mainPrimary : colors.grey1,
                      paddingLeft:
                        item.name === type
                          ? scale.pixelSizeHorizontal(5)
                          : scale.pixelSizeHorizontal(5),
                    },
                  ]}
                  text={item.name}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View
        style={{
          height:
            Platform.OS === "ios"
              ? scale.height - scale.heightPixel(500) - add
              : scale.height * 0.45,
        }}
      >
        {type === "Posts" ? (
          <Posts />
        ) : type === "For Sale" ? (
          <ForSale />
        ) : (
          <Liked />
        )}
      </View>
    </SafeAreaView>
  );
};
