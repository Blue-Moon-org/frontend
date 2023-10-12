import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";

export const styles = StyleSheet.create({
  imageContaner: {
    height: scale.heightPixel(40),
    width: "12%",
    backgroundColor: colors.mainPrimary,
    borderRadius: scale.fontPixel(8),
    // marginRight: scale.pixelSizeHorizontal(10),
  },
  image: {
    height: "100%",
    wdth: "100%",
    borderRadius: scale.fontPixel(8),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(10),
  },
  body: {
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(12),
    marginBottom: scale.pixelSizeVertical(8),
  },
  commentProfile: {
    // paddingRight: scale.pixelSizeHorizontal(20),
    backgroundColor: "#77778C",
    padding: scale.fontPixel(8),
    borderRadius: scale.fontPixel(8),
    width: "85%",
  },
});
