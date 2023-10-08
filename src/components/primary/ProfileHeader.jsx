import { View, StyleSheet, Text as BaseText, Platform } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { scale } from "../../utils/scale";
import { Text } from "../common";
import { Fontscales } from "../../styles";
import { colors } from "../../constants/colorpallette";
import { useNavigation } from "@react-navigation/native";
import { baseURL } from "../../utils/request";

export const ProfileHeader = ({ designer, client, user }) => {
  const { goBack, navigate } = useNavigation();

  // console.warn(baseURL + user.brand_image);

  return (
    <>
      {!designer && (
        <MaterialIcons
          style={styles.icon}
          name="keyboard-backspace"
          size={24}
          color="black"
          onPress={() => goBack()}
        />
      )}
      <View style={styles.header}>
        <View>
          <Text
            textStyle={[Fontscales.headingLargeRegular]}
            text={
              user?.account_type === "Designer"
                ? user?.brand_name
                : user?.fullname
            }
          />
          <BaseText style={[Fontscales.paragraphSmallRegular]}>
            {user?.account_type === "Designer"
              ? user?.fullname
              : user?.firstname}
            {" - "}
            <Text
              textStyle={{ color: colors.mainPrimary }}
              text={user?.account_type}
            />
          </BaseText>
        </View>
        <View style={styles.iconImage}>
          {designer && (
            <Ionicons
              name="settings-outline"
              onPress={() =>
                navigate("RootStack", {
                  screen: "ProfileSettings",
                })
              }
              size={24}
              color="black"
            />
          )}
          {client && (
            <Ionicons
              name="chatbox-ellipses-outline"
              size={scale.fontPixel(24)}
              color={colors.mainPrimary}
              onPress={() =>
                navigate("BottomTabStack", {
                  screen: "Chat",
                })
              }
            />
          )}
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              cachePolicy={"memory-disk"}
              contentFit="cover"
              source={{
                uri:
                  user?.account_type === "Designer"
                    ? `${baseURL + user?.brand_image}`
                    : `${baseURL + user?.image}`,
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: scale.widthPixel(47),
    height: scale.heightPixel(47),
    borderRadius: scale.fontPixel(8),
    marginLeft: scale.pixelSizeHorizontal(20),
    backgroundColor: colors.mainPrimary,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: scale.fontPixel(8),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop:
      Platform.OS === "android"
        ? scale.pixelSizeVertical(16)
        : scale.pixelSizeVertical(16),
    marginBottom:
      Platform.OS === "android"
        ? scale.pixelSizeVertical(35)
        : scale.pixelSizeVertical(35),
  },
  iconImage: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginTop:
      Platform.OS === "android"
        ? scale.pixelSizeVertical(10)
        : scale.pixelSizeVertical(5),
  },
});
