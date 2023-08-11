import { StyleSheet } from "react-native";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";

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
  detailImageContainer: {
    height: scale.heightPixel(200),
    width: "100%",
    borderRadius: scale.fontPixel(8),
    marginBottom: scale.pixelSizeVertical(32),
    marginTop: scale.pixelSizeVertical(10),
  },
  detailImage: {
    height: "100%",
    width: "100%",
    borderRadius: scale.fontPixel(8),
  },
  section: {
    marginBottom: scale.pixelSizeVertical(10),
  },
});
