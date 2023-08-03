import { View, StyleSheet, Text as BaseText, Platform } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { scale } from "../../utils/scale";
import { Text } from "../common";
import { Fontscales } from "../../styles";
import { colors } from "../../constants/colorpallette";
import { useNavigation } from "@react-navigation/native";

export const ProfileHeader = ({ buyer }) => {
  const { goBack } = useNavigation();
  return (
    <>
      {buyer && (
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
              text={buyer ? " Buyer" : " Seller"}
            />
          </BaseText>
        </View>
        <View style={styles.iconImage}>
          {!buyer && (
            <Ionicons name="settings-outline" size={24} color="black" />
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
