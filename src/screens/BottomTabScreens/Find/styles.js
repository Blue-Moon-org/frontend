import { StyleSheet, Platform } from "react-native";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";

export const styles = StyleSheet.create({
  mapContainer: {
    height:
      Platform.OS === "ios"
        ? scale.height - scale.heightPixel(92)
        : scale.height - scale.heightPixel(75),
  },
  map: {
    height: "100%",
    width: "100%",
  },
  locationCardContainer: {
    height: scale.heightPixel(53),
    width: scale.widthPixel(53),
    backgroundColor: colors.mainPrimary,
    borderRadius: scale.fontPixel(4),
    borderColor: "white",
    borderWidth: scale.fontPixel(2),
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    borderRadius: scale.fontPixel(4),
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: scale.fontPixel(4),
  },
  ratingText: {
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(8),
    marginLeft: scale.pixelSizeHorizontal(2),
  },
  iconTextContainer: {
    position: "absolute",
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical:
      Platform.OS === "ios"
        ? scale.pixelSizeVertical(5)
        : scale.pixelSizeVertical(2),
    paddingHorizontal: scale.pixelSizeHorizontal(5),
    bottom:
      Platform.OS === "ios" ? -scale.pixelSizeVertical(10) : scale.fontPixel(0),
    alignSelf: "center",
    borderRadius: scale.fontPixel(10),
    alignItems: "center",
  },
});
