import { StyleSheet } from "react-native";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";

export const styles = StyleSheet.create({
  innerContainer: {
    marginVertical: scale.pixelSizeVertical(5),
    padding: scale.fontPixel(8),
    borderRadius: scale.fontPixel(4),
  },
  title: {
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(11),
    color: colors.blackText,
  },
  body: {
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(14),
    color: colors.blackText,
    marginVertical: scale.pixelSizeVertical(4),
  },
  time: {
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(11),
    color: colors.blackText,
    marginVertical: scale.pixelSizeVertical(4),
    textAlign: "right",
  },
});
