import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";

export const styles = StyleSheet.create({
  eachContainer: {
    height: scale.heightPixel(80),
    marginVertical: scale.pixelSizeVertical(8),
    borderRadius: scale.fontPixel(8),
    flexDirection: "row",
    backgroundColor: "#FEF8F1",
  },
  imageContainer: {
    width: "25%",
    height: "100%",
    borderRadius: scale.fontPixel(8),
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: scale.fontPixel(8),
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "75%",
  },
  iconTextContainer: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginVertical: scale.pixelSizeVertical(10),
    marginRight: scale.fontPixel(8),
  },
  textContainer: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginVertical: scale.pixelSizeVertical(5),
    marginLeft: scale.fontPixel(8),
  },
});
