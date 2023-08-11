import { StyleSheet } from "react-native";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";

export const styles = StyleSheet.create({
  imageContainer: {
    height: scale.heightPixel(110),
    width: scale.widthPixel(110),
    borderRadius: scale.fontPixel(8),
  },
  image: {
    borderRadius: scale.fontPixel(8),
    height: "100%",
    width: "100%",
  },
  showAll: {
    marginTop: scale.pixelSizeVertical(5),
    marginBottom: scale.pixelSizeVertical(10),
    textAlign: "right",
    fontFamily: "Outfit_500Medium",
    fontSize: scale.fontPixel(10),
    color: colors.mainPrimary,
  },
});
