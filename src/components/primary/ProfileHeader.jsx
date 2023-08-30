import { View, StyleSheet, Text as BaseText, Platform } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { scale } from "../../utils/scale";
import { Text } from "../common";
import { Fontscales } from "../../styles";
import { colors } from "../../constants/colorpallette";
import { useNavigation } from "@react-navigation/native";

export const ProfileHeader = ({ designer, client }) => {
  const { goBack, navigate } = useNavigation();
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
            text="B.Daniella Clothing"
          />
          <BaseText style={[Fontscales.paragraphSmallRegular]}>
            Balla Daniella -
            <Text
              textStyle={{ color: colors.mainPrimary }}
              text={!designer ? " Buyer" : " Designer"}
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
                uri: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.70578014.1688424585&semt=sph",
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
